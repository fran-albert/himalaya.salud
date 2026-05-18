import Image from "next/image";
import {
  ArrowLeft,
  Building2,
  CalendarDays,
  Check,
  ChevronRight,
  Mail,
  Menu,
  MessageCircle,
  ShieldCheck,
  User,
} from "lucide-react";

const contactItems = [
  {
    title: "Email",
    copy: "contacto@himalayasalud.com.ar",
    href: "mailto:contacto@himalayasalud.com.ar?subject=Consulta%20Plan%20Est%C3%A1ndar%20Himalaya%20Salud",
    icon: Mail,
  },
  {
    title: "Formulario completo",
    copy: "Dejanos tus datos y te respondemos.",
    href: "/contacto",
    icon: MessageCircle,
  },
  {
    title: "Plan Estándar",
    copy: "Volver a revisar beneficios y precio.",
    href: "/plan-estandar",
    icon: CalendarDays,
  },
];

export default function PlanEstandarContactoPage() {
  return (
    <div className="min-h-screen bg-[#fbfefd] text-[#07364a]">
      <header className="sticky top-0 z-40 border-b border-[#dcece7]/80 bg-[#07364a]/95 px-5 py-3 backdrop-blur-xl sm:px-8 lg:px-12">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5">
          <a href="/plan-estandar" className="flex items-center gap-3" aria-label="Himalaya Salud">
            <Image
              src="/branding/logo-himalaya-salud.svg"
              alt=""
              width={49}
              height={50}
              priority
              className="h-11 w-11 sm:h-12 sm:w-12"
            />
            <span className="leading-none">
              <span className="block text-xl font-black tracking-normal text-white sm:text-2xl">
                Himalaya <span className="text-[#76d2af]">Salud</span>
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-bold text-white/80 md:flex">
            <a href="/plan-estandar" className="transition hover:text-white">
              Plan Estándar
            </a>
            <a href="/plan-estandar#herramientas" className="transition hover:text-white">
              Herramientas
            </a>
            <a href="/plan-estandar#beneficios" className="transition hover:text-white">
              Beneficios
            </a>
            <a href="/contacto" className="transition hover:text-white">
              Formulario
            </a>
          </div>

          <a
            href="mailto:contacto@himalayasalud.com.ar?subject=Consulta%20Plan%20Est%C3%A1ndar%20Himalaya%20Salud"
            className="hidden h-11 items-center justify-center rounded-xl bg-[#35ad7d] px-5 text-sm font-black text-white shadow-[0_12px_25px_rgba(53,173,125,0.2)] transition hover:bg-[#249c6d] sm:inline-flex"
          >
            Escribir
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/10 text-white md:hidden"
            aria-label="Abrir menú"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      <main>
        <section className="relative isolate overflow-hidden px-5 py-10 sm:px-8 lg:px-12 lg:py-16">
          <div className="absolute right-[-12rem] top-[-11rem] -z-10 h-[34rem] w-[34rem] rounded-full bg-[#dff4ee]" />
          <div className="absolute bottom-10 right-16 -z-10 hidden grid-cols-5 gap-4 opacity-50 lg:grid">
            {Array.from({ length: 25 }).map((_, index) => (
              <span key={index} className="h-1.5 w-1.5 rounded-full bg-[#7fc8b5]" />
            ))}
          </div>

          <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.9fr_1fr]">
            <div>
              <a
                href="/plan-estandar"
                className="mb-7 inline-flex items-center gap-2 rounded-full bg-[#d8f3e8] px-4 py-2 text-sm font-bold text-[#16835f] transition hover:bg-[#c9efdf]"
              >
                <ArrowLeft className="h-4 w-4" />
                Volver al plan
              </a>

              <h1 className="max-w-2xl text-[3rem] font-black leading-[0.95] tracking-normal text-[#07364a] sm:text-[4.4rem]">
                Hablemos de
                <span className="block text-[#39aa80]">tu salud</span>
              </h1>

              <p className="mt-6 max-w-xl text-xl leading-relaxed text-[#173c55] sm:text-2xl">
                Te ayudamos a activar la prueba gratis, resolver dudas del plan o coordinar una presentación para tu familia o institución.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {contactItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="flex items-center gap-4 rounded-2xl border border-[#d9ebe6] bg-white/86 p-5 shadow-[0_14px_35px_rgba(8,54,70,0.06)] transition hover:border-[#9adbc9] hover:bg-[#f0fbf7]"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#e3f5ee] text-[#16835f]">
                      <item.icon className="h-6 w-6" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-black text-[#07364a]">{item.title}</span>
                      <span className="block truncate text-sm text-[#244559]">{item.copy}</span>
                    </span>
                    <ChevronRight className="h-5 w-5 shrink-0 text-[#16835f]" />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#d9ebe6] bg-white p-6 shadow-[0_24px_70px_rgba(8,54,70,0.08)] sm:p-8">
              <div className="mb-7 flex items-center justify-between gap-5">
                <div>
                  <p className="text-sm font-bold text-[#16835f]">Contacto rápido</p>
                  <h2 className="mt-1 text-2xl font-black text-[#07364a]">Dejanos tu consulta</h2>
                </div>
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#e3f5ee] text-[#16835f]">
                  <MessageCircle className="h-7 w-7" />
                </span>
              </div>

              <form
                action="mailto:contacto@himalayasalud.com.ar"
                method="post"
                encType="text/plain"
                className="space-y-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-black text-[#07364a]">Nombre</span>
                    <input
                      name="nombre"
                      className="h-12 w-full rounded-2xl border border-[#d9ebe6] bg-[#fbfefd] px-4 text-[#07364a] outline-none transition focus:border-[#35ad7d]"
                      placeholder="Tu nombre"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-black text-[#07364a]">Email</span>
                    <input
                      name="email"
                      type="email"
                      className="h-12 w-full rounded-2xl border border-[#d9ebe6] bg-[#fbfefd] px-4 text-[#07364a] outline-none transition focus:border-[#35ad7d]"
                      placeholder="tu@email.com"
                    />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-black text-[#07364a]">Tipo</span>
                    <select
                      name="tipo"
                      className="h-12 w-full rounded-2xl border border-[#d9ebe6] bg-[#fbfefd] px-4 text-[#07364a] outline-none transition focus:border-[#35ad7d]"
                      defaultValue="paciente"
                    >
                      <option value="paciente">Paciente / familia</option>
                      <option value="institucion">Institución</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-black text-[#07364a]">Motivo</span>
                    <select
                      name="motivo"
                      className="h-12 w-full rounded-2xl border border-[#d9ebe6] bg-[#fbfefd] px-4 text-[#07364a] outline-none transition focus:border-[#35ad7d]"
                      defaultValue="prueba"
                    >
                      <option value="prueba">Activar prueba gratis</option>
                      <option value="plan">Consultar plan</option>
                      <option value="demo">Coordinar presentación</option>
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm font-black text-[#07364a]">Mensaje</span>
                  <textarea
                    name="mensaje"
                    rows={5}
                    className="w-full resize-none rounded-2xl border border-[#d9ebe6] bg-[#fbfefd] px-4 py-3 text-[#07364a] outline-none transition focus:border-[#35ad7d]"
                    placeholder="Contanos qué necesitás..."
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#35ad7d] px-6 text-base font-black text-white shadow-[0_18px_36px_rgba(53,173,125,0.24)] transition hover:bg-[#249c6d] sm:w-auto"
                >
                  Enviar consulta
                  <ChevronRight className="h-5 w-5" />
                </button>
              </form>

              <div className="mt-6 grid gap-3 rounded-2xl bg-[#f0fbf7] p-4 text-sm text-[#244559] sm:grid-cols-3">
                {[
                  ["Respuesta humana", User],
                  ["Datos protegidos", ShieldCheck],
                  ["Instituciones", Building2],
                ].map(([label, Icon]) => (
                  <p key={label as string} className="flex items-center gap-2 font-bold">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-[#16835f]">
                      <Icon className="h-4 w-4" />
                    </span>
                    {label as string}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 pb-10 sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-3xl bg-[#087070] p-7 text-white shadow-[0_24px_80px_rgba(5,91,91,0.22)] sm:p-9 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-black">Probá Himalaya Salud</h2>
              <p className="mt-2 text-lg text-white/90">30 días gratis para conocer todos los beneficios.</p>
            </div>
            <a
              href="/plan-estandar"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-white px-7 text-base font-black text-[#07364a] transition hover:bg-[#edf8f5]"
            >
              Ver plan
              <Check className="h-5 w-5 text-[#16835f]" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
