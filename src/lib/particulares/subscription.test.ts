import assert from "node:assert/strict";
import { describe, test } from "node:test";
import { formatMoney } from "./format.ts";
import {
  liveStorePlan, normalizeSubscription, priceLabel, storeOf, type ApiSubscription, type Subscription,
} from "./subscription.ts";

const oldApi: ApiSubscription = {
  id: "sub-1",
  planExternalId: "individual",
  planName: "Individual",
  period: "month",
  amountArs: "15000.000",
  status: "active",
  checkoutUrl: null,
  currentPeriodEnd: "2026-12-25T03:00:00.000Z",
  accessUntil: "2026-12-28T03:00:00.000Z",
};

const store = (overrides: Partial<Subscription>): Subscription => normalizeSubscription({
  ...oldApi, channel: "apple", currency: "USD", amount: "4.990", amountArs: null, paymentIssue: false, ...overrides,
});

const now = new Date("2026-12-01T12:00:00.000Z");

describe("normalizeSubscription", () => {
  test("la API vieja, sin channel, se trata como Mercado Pago en pesos", () => {
    const subscription = normalizeSubscription(oldApi);
    assert.equal(subscription.channel, "mercadopago");
    assert.equal(subscription.currency, "ARS");
    assert.equal(subscription.amount, "15000.000");
    assert.equal(subscription.paymentIssue, false);
    assert.equal(storeOf(subscription), null);
  });

  test("un canal desconocido no se confunde con una tienda", () => {
    const raw = { ...oldApi, channel: "otro" } as unknown as ApiSubscription;
    assert.equal(normalizeSubscription(raw).channel, "mercadopago");
  });

  test("respeta los campos nuevos de un plan de tienda", () => {
    const subscription = store({ paymentIssue: true });
    assert.equal(storeOf(subscription), "apple");
    assert.equal(subscription.amountArs, null);
    assert.equal(subscription.paymentIssue, true);
  });

  test("Google sin monto queda sin monto", () => {
    const subscription = store({ channel: "google", currency: null, amount: null });
    assert.equal(storeOf(subscription), "google");
    assert.equal(priceLabel(subscription), null);
  });

  test("el simulado de QA no es una tienda", () => {
    assert.equal(storeOf(store({ channel: "simulated" })), null);
  });
});

describe("priceLabel", () => {
  test("nunca muestra dólares como pesos", () => {
    assert.equal(priceLabel(store({})), "USD 4,99");
  });

  test("pesos con el formato de siempre", () => {
    assert.equal(priceLabel(normalizeSubscription(oldApi)), "$ 15.000");
    assert.equal(formatMoney("1234.500", "ARS"), "$ 1.234,50");
  });
});

describe("liveStorePlan", () => {
  test("plan de tienda activo, en gracia o con la baja pedida pero vigente", () => {
    assert.equal(liveStorePlan(store({ status: "active" }), now), "apple");
    assert.equal(liveStorePlan(store({ status: "in_grace", channel: "google" }), now), "google");
    assert.equal(liveStorePlan(store({ status: "cancelled" }), now), "apple");
  });

  test("vencido, sin acceso o de Mercado Pago no bloquea contratar en la web", () => {
    assert.equal(liveStorePlan(store({ status: "expired", paymentIssue: true }), now), null);
    assert.equal(liveStorePlan(store({ status: "cancelled", accessUntil: "2026-11-30T03:00:00.000Z" }), now), null);
    assert.equal(liveStorePlan(normalizeSubscription(oldApi), now), null);
    assert.equal(liveStorePlan(null, now), null);
  });
});
