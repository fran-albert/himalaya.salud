import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HCI Preview | Himalaya Salud",
  description: "Preview de la landing HCI de Himalaya Salud.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function HCIPreviewPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ef]">
      <iframe
        src="/hci/index-v8.html"
        title="HCI Preview Himalaya Salud"
        className="block h-screen w-full border-0"
      />
    </main>
  );
}
