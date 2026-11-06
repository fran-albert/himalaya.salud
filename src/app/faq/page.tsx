import { FaqContent } from "./faq-content";
import { loadFaqCategories } from "./faq-data";

// Las preguntas se editan en Gestión (Preguntas de la web) y se vuelven a leer cada 5 minutos.
export const revalidate = 300;

export default async function FAQPage() {
  const categories = await loadFaqCategories();
  return <FaqContent categories={categories} />;
}
