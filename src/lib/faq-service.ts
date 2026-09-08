import { z } from "zod";
import { localFaqCategories, type FaqCategory } from "./faq-content.ts";

const faqSchema = z.object({
  id: z.string(),
  question: z.string().min(1).max(500),
  answer: z.string().min(1).max(10000),
  sort_order: z.number(),
  status: z.string(),
});
const responseSchema = z.object({
  data: z
    .array(
      z.object({
        id: z.string(),
        key: z.string(),
        name: z.string().min(1),
        sort_order: z.number(),
        status: z.string(),
        faqs: z.array(faqSchema).default([]),
      }),
    )
    .max(100),
});

export function publishedFaqs(payload: unknown): FaqCategory[] | null {
  const parsed = responseSchema.safeParse(payload);
  if (!parsed.success) return null;
  const categories = parsed.data.data
    .filter((c) => c.status === "active")
    .map((c) => ({
      ...c,
      faqs: c.faqs
        .filter((f) => f.status === "published")
        .sort((a, b) => a.sort_order - b.sort_order),
    }))
    .filter((c) => c.faqs.length > 0)
    .sort((a, b) => a.sort_order - b.sort_order);
  return categories.length ? categories : null;
}
export async function loadFaqs({
  endpoint,
  token,
  fetcher = fetch,
}: {
  endpoint?: string;
  token?: string;
  fetcher?: typeof fetch;
} = {}): Promise<{ data: FaqCategory[]; source: "local" | "remote" }> {
  if (endpoint) {
    try {
      const url = new URL(endpoint);
      if (url.protocol !== "https:")
        throw new Error("FAQ_ENDPOINT_REQUIRES_HTTPS");
      const response = await fetcher(url, {
        headers: {
          Accept: "application/json",
          "User-Agent": "himalaya-web/1.0",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        signal: AbortSignal.timeout(5000),
        next: { revalidate: 300 },
      });
      if (response.ok) {
        const categories = publishedFaqs(await response.json());
        if (categories) return { data: categories, source: "remote" };
      }
      console.warn("FAQ_REMOTE_FALLBACK");
    } catch {
      console.warn("FAQ_REMOTE_FALLBACK");
    }
  }
  return { data: localFaqCategories, source: "local" };
}
