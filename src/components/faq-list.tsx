import { Plus } from "lucide-react";
import type { Faq } from "@/lib/faq-content";

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="h-faq-list">
      {faqs.map((faq) => (
        <details key={faq.id}>
          <summary>
            {faq.question}
            <Plus size={19} aria-hidden="true" />
          </summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
