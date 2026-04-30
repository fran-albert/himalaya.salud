import type { Metadata } from "next";

const versions = [
  {
    label: "V1",
    title: "Landing base",
    href: "/hci/index.html",
  },
  {
    label: "Landing",
    title: "Landing HTML",
    href: "/hci/landing.html",
  },
  {
    label: "V2",
    title: "Iteración 2",
    href: "/hci/index-v2.html",
  },
  {
    label: "V3",
    title: "Iteración 3",
    href: "/hci/index-v3.html",
  },
  {
    label: "V4",
    title: "Iteración 4",
    href: "/hci/index-v4.html",
  },
  {
    label: "V5",
    title: "Iteración 5",
    href: "/hci/index-v5.html",
  },
  {
    label: "V6",
    title: "Iteración 6",
    href: "/hci/index-v6.html",
  },
  {
    label: "V7",
    title: "Iteración 7",
    href: "/hci/index-v7.html",
  },
  {
    label: "V8",
    title: "Una historia, muchas vidas",
    href: "/hci/index-v8.html",
  },
];

export const metadata: Metadata = {
  title: "HCI Preview | Himalaya Salud",
  description: "Selector de versiones para previews HCI de Himalaya Salud.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function HCIPreviewPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] px-5 py-8 text-[#07364a] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col gap-5 rounded-[2rem] border border-[#ded8cc] bg-white p-6 shadow-[0_18px_50px_rgba(30,25,18,0.08)] md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#2c9d75]">
              Himalaya Salud
            </p>
            <h1 className="mt-3 text-4xl font-black leading-none sm:text-5xl">
              Preview HCI
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#465767]">
              Selector de versiones exportadas desde Claude Design. Abrí cada variante para comparar diseño, narrativa y estructura.
            </p>
          </div>
          <a
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-[#07364a] px-5 text-sm font-black text-white transition hover:bg-[#0c526b]"
          >
            Volver al sitio
          </a>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {versions.map((version) => (
            <a
              key={version.href}
              href={version.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-[1.5rem] border border-[#ded8cc] bg-white p-5 shadow-[0_12px_35px_rgba(30,25,18,0.06)] transition hover:-translate-y-0.5 hover:border-[#84cdb5] hover:shadow-[0_18px_45px_rgba(30,25,18,0.1)]"
            >
              <span className="inline-flex rounded-full bg-[#dff4ee] px-3 py-1 text-xs font-black text-[#16835f]">
                {version.label}
              </span>
              <h2 className="mt-5 text-2xl font-black text-[#07364a]">
                {version.title}
              </h2>
              <p className="mt-2 text-sm text-[#5d6b76]">
                {version.href}
              </p>
              <span className="mt-6 inline-flex text-sm font-black text-[#16835f] group-hover:underline">
                Abrir versión
              </span>
            </a>
          ))}
        </section>
      </div>
    </main>
  );
}
