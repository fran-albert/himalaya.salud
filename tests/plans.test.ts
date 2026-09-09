import test from "node:test";
import assert from "node:assert/strict";
import {
  planDetailUrl,
  formatPlanPrice,
  billingLabel,
} from "../src/lib/plan-display.ts";
import { parsePlanCatalog } from "../src/lib/plan-catalog.ts";
import { loadPlans, plansEndpoint } from "../src/lib/plan-service.ts";

function fixture() {
  return {
    plan_id: 24,
    code: "plan_boton_de_panico",
    name: "Plan Botón de Pánico",
    status: "active",
    rank: 1,
    billing_options: [
      {
        billing_option_id: 33,
        billing_period: "monthly",
        price_list: 1555,
        currency: "ARS",
        is_default: true,
        apple_product_id: "also-present-on-ars",
        google_product_id: "also-present-on-ars",
      },
      {
        billing_option_id: 34,
        billing_period: "monthly",
        price_list: 1.99,
        currency: "USD",
        is_default: false,
      },
    ],
    content: {
      title: "Plan Botón de Pánico",
      subtitle: "Plan Botón de Pánico",
      description: "Acceso a botón de pánico",
      published: true,
      items: [
        {
          content_item_id: 2,
          text: "Segunda prestación",
          item_type: "check",
          sort_order: 2,
        },
        {
          content_item_id: 1,
          text: "Botón de pánico",
          item_type: "check",
          sort_order: 0,
        },
      ],
    },
  };
}

test("el catálogo conserva ARS aunque tenga IDs de tiendas y excluye USD", () => {
  const [plan] = parsePlanCatalog({ data: [fixture()] })!;
  assert.equal(plan.title, "Plan Botón de Pánico");
  assert.equal(plan.subtitle, null);
  assert.equal(plan.billing.length, 1);
  assert.equal(plan.billing[0].amount, 1555);
  assert.equal(
    plan.billing[0].href,
    "https://app.hci.himalayasalud.com.ar/plan-details?id=24&plan=plan_boton_de_panico&billingOptionId=33",
  );
  assert.deepEqual(
    plan.items.map((i) => i.text),
    ["Botón de pánico", "Segunda prestación"],
  );
});

test("solo planes activos/publicados, orden del backoffice; no se filtran nombres de prueba", () => {
  const hidden = { ...fixture(), plan_id: 30, status: "inactive" };
  const draft = fixture();
  draft.content.published = false;
  const trial = {
    ...fixture(),
    plan_id: 13,
    rank: 0,
    name: "Plan para Pruebas",
  };
  trial.content = { ...trial.content, title: "Plan para Pruebas" };
  const plans = parsePlanCatalog({ data: [fixture(), hidden, draft, trial] })!;
  assert.deepEqual(
    plans.map((p) => p.id),
    [13, 24],
  );
  assert.equal(plans[0].title, "Plan para Pruebas");
});

test("precios y destinos se actualizan con la API y cada período mantiene su total", () => {
  const plan = fixture();
  plan.billing_options[0].price_list = 2000;
  plan.billing_options.push({
    billing_option_id: 100,
    billing_period: "yearly",
    price_list: 20000,
    currency: "ARS",
    is_default: false,
  });
  const [result] = parsePlanCatalog({ data: [plan] })!;
  assert.deepEqual(
    result.billing.map((b) => [b.amount, b.period]),
    [
      [2000, "monthly"],
      [20000, "yearly"],
    ],
  );
  assert.equal(
    new URL(result.billing[1].href).searchParams.get("billingOptionId"),
    "100",
  );
  assert.equal(formatPlanPrice(result.billing[1].amount), "$20.000");
  assert.equal(billingLabel("yearly"), "por año");
  assert.equal(formatPlanPrice(1555.5), "$1.555,5");
});

test("un precio ausente, vacío, negativo o no numérico no se anuncia como gratis", () => {
  for (const amount of [
    null,
    "",
    "no-price",
    -1,
    "1.555,00",
    false,
    undefined,
  ]) {
    const plan = fixture();
    const input = {
      ...plan,
      billing_options: [{ ...plan.billing_options[0], price_list: amount }],
    };
    assert.equal(parsePlanCatalog({ data: [input] }), null);
  }
  const plan = fixture();
  assert.equal(
    parsePlanCatalog({
      data: [
        {
          ...plan,
          billing_options: [
            { ...plan.billing_options[0], price_list: "25.50" },
          ],
        },
      ],
    })![0].billing[0].amount,
    25.5,
  );
});

test("no se adivina el período ni se ofrecen monedas ajenas a la web argentina", () => {
  const plan = fixture();
  plan.billing_options[0].billing_period = "weekly";
  assert.deepEqual(parsePlanCatalog({ data: [plan] }), []);
  plan.billing_options[0].billing_period = "monthly";
  plan.billing_options[0].currency = "EUR";
  assert.deepEqual(parsePlanCatalog({ data: [plan] }), []);
});

test("destino fijo y parámetros codificados impiden que el código del plan inyecte otra URL", () => {
  const url = new URL(
    planDetailUrl(24, "un plan&billingOptionId=999#otra", 33),
  );
  assert.equal(url.origin, "https://app.hci.himalayasalud.com.ar");
  assert.equal(url.pathname, "/plan-details");
  assert.equal(
    url.searchParams.get("plan"),
    "un plan&billingOptionId=999#otra",
  );
  assert.equal(url.searchParams.get("billingOptionId"), "33");
  assert.equal(url.hash, "");
});

test("IDs duplicados o respuesta mal formada invalidan el catálogo", () => {
  for (const payload of [
    {},
    { data: [{}] },
    { data: [fixture(), fixture()] },
  ]) {
    assert.equal(parsePlanCatalog(payload), null);
  }
});

test("carga pública sin credenciales, caché breve y catálogo vacío diferenciado", async () => {
  const result = await loadPlans(async (url, init) => {
    assert.equal(url, plansEndpoint);
    assert.equal(new Headers(init?.headers).has("Authorization"), false);
    assert.equal(
      (init as RequestInit & { next: { revalidate: number } }).next.revalidate,
      300,
    );
    assert.ok(init?.signal);
    return new Response(JSON.stringify({ data: [fixture()] }));
  });
  assert.equal(result.status, "ready");
  assert.equal(
    (await loadPlans(async () => new Response('{"data":[]}'))).status,
    "empty",
  );
});

test("HTTP fallido, JSON inválido, esquema inválido y timeout no inventan planes", async () => {
  for (const response of [
    () => new Response("{}", { status: 503 }),
    () => new Response("not-json"),
    () => new Response('{"data":[{}]}'),
    () => {
      throw new DOMException("Timed out", "TimeoutError");
    },
  ]) {
    assert.deepEqual(await loadPlans(async () => response()), {
      status: "unavailable",
      plans: [],
    });
  }
});
