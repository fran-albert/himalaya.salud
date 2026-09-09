import test from "node:test";
import assert from "node:assert/strict";
import { loadFaqs, publishedFaqs } from "../src/lib/faq-service.ts";

const remote = {
  data: [
    {
      id: "public",
      key: "public",
      name: "Ayuda",
      sort_order: 1,
      status: "active",
      faqs: [
        {
          id: "draft",
          question: "Borrador",
          answer: "Oculto",
          sort_order: 1,
          status: "draft",
        },
        {
          id: "second",
          question: "Segunda",
          answer: "Publicada",
          sort_order: 20,
          status: "published",
        },
        {
          id: "first",
          question: "Primera",
          answer: "Publicada",
          sort_order: 10,
          status: "published",
        },
      ],
    },
    {
      id: "hidden",
      key: "hidden",
      name: "Interno",
      sort_order: 0,
      status: "inactive",
      faqs: [],
    },
  ],
};
test("sin conexión configurada: preguntas locales sin intentar una petición", async () => {
  let requests = 0;
  const result = await loadFaqs({
    fetcher: async () => {
      requests++;
      throw new Error();
    },
  });
  assert.equal(result.source, "local");
  assert.ok(result.data.length > 0);
  assert.equal(requests, 0);
});
test("catálogo remoto válido: solo contenido activo/publicado y ordenado", () => {
  const data = publishedFaqs(remote)!;
  assert.equal(data.length, 1);
  assert.deepEqual(
    data[0].faqs.map((f) => f.id),
    ["first", "second"],
  );
});
test("respuesta incompleta, error HTTP, JSON inválido o excepción: respaldo local", async () => {
  for (const response of [
    () => new Response(JSON.stringify({ data: [{}] })),
    () => new Response("{}", { status: 503 }),
    () => new Response("bad-json"),
    () => {
      throw new Error("offline");
    },
  ]) {
    const result = await loadFaqs({
      endpoint: "https://example.com/faqs",
      fetcher: async () => response(),
    });
    assert.equal(result.source, "local");
    assert.ok(result.data.length > 0);
  }
});
test("conexión remota correcta: pasa autorización al proveedor, no al resultado público", async () => {
  const result = await loadFaqs({
    endpoint: "https://example.com/faqs",
    token: "fake-test-token",
    fetcher: async (_url, init) => {
      assert.equal(
        new Headers(init?.headers).get("Authorization"),
        "Bearer fake-test-token",
      );
      return new Response(JSON.stringify(remote));
    },
  });
  assert.equal(result.source, "remote");
  assert.doesNotMatch(JSON.stringify(result), /fake-test-token/);
});
test("un catálogo vacío no borra la ayuda local", () => {
  assert.equal(publishedFaqs({ data: [] }), null);
});
