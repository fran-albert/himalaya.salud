import Image from "next/image";
import {
  Bell,
  CalendarDays,
  Check,
  ChevronRight,
  ClipboardPlus,
  Gift,
  HeartPulse,
  Home,
  LockKeyhole,
  MapPin,
  Menu,
  Search,
  ShieldCheck,
  User,
  UsersRound,
} from "lucide-react";

const features = [
  {
    title: "Portal paciente",
    copy: "Accedé a tus estudios, turnos, resultados y toda tu información desde cualquier lugar.",
    icon: User,
  },
  {
    title: "Botón de emergencia",
    copy: "Asistencia inmediata con geolocalización y notificación a contactos y centros de ayuda.",
    icon: HeartPulse,
  },
  {
    title: "Mapa de instituciones",
    copy: "Encontrá rápidamente instituciones de salud cercanas según tu ubicación.",
    icon: MapPin,
  },
];

const assurances = [
  {
    title: "Seguro y confiable",
    copy: "Protegemos tu información con los más altos estándares.",
    icon: ShieldCheck,
  },
  {
    title: "Fácil de usar",
    copy: "Todo lo que necesitás, en pocos pasos.",
    icon: LockKeyhole,
  },
  {
    title: "Para vos y tu familia",
    copy: "Gestioná la salud de los tuyos desde una sola cuenta.",
    icon: UsersRound,
  },
];

const footerNotes = [
  "30 días gratis sin compromiso",
  "Cancelás cuando quieras",
  "Soporte humano siempre disponible",
  "Actualizaciones constantes",
];

export default function PlanEstandarPage() {
  return (
    <div className="min-h-screen bg-[#fbfefd] text-[#07364a]">
      <header className="sticky top-0 z-40 border-b border-[#dcece7]/80 bg-[#07364a]/95 px-5 py-3 backdrop-blur-xl sm:px-8 lg:px-12">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5">
          <a href="#" className="flex items-center gap-3" aria-label="Himalaya Salud">
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
            <a href="#" className="transition hover:text-white">
              Inicio
            </a>
            <a href="#herramientas" className="transition hover:text-white">
              Herramientas
            </a>
            <a href="#beneficios" className="transition hover:text-white">
              Beneficios
            </a>
            <a href="#empezar" className="transition hover:text-white">
              Prueba gratis
            </a>
            <a href="/plan-estandar/contacto" className="transition hover:text-white">
              Contacto
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/plan-estandar/contacto"
              className="hidden h-11 items-center justify-center rounded-xl bg-[#35ad7d] px-5 text-sm font-black text-white shadow-[0_12px_25px_rgba(53,173,125,0.2)] transition hover:bg-[#249c6d] sm:inline-flex"
            >
              Contactar
            </a>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/10 text-white md:hidden"
              aria-label="Abrir menú"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
        <div className="mx-auto mt-3 flex max-w-7xl gap-2 overflow-x-auto pb-1 text-xs font-bold text-white/80 md:hidden">
          {[
            ["Inicio", "#"],
            ["Herramientas", "#herramientas"],
            ["Beneficios", "#beneficios"],
            ["Prueba gratis", "#empezar"],
            ["Contacto", "/plan-estandar/contacto"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="shrink-0 rounded-full border border-white/12 bg-white/8 px-3 py-2 transition hover:bg-white/14 hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>
      </header>

      <section className="relative isolate overflow-hidden px-5 pb-10 pt-10 sm:px-8 lg:px-12 lg:pt-14">
        <div className="absolute right-[-12rem] top-[-11rem] -z-10 h-[34rem] w-[34rem] rounded-full bg-[#dff4ee]" />
        <div className="absolute right-0 top-48 -z-10 hidden h-44 w-20 rounded-l-full bg-[#ccebe4] lg:block" />
        <div className="absolute bottom-10 right-16 -z-10 hidden grid-cols-5 gap-4 opacity-60 lg:grid">
          {Array.from({ length: 25 }).map((_, index) => (
            <span key={index} className="h-1.5 w-1.5 rounded-full bg-[#7fc8b5]" />
          ))}
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.88fr]">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex rounded-full bg-[#d8f3e8] px-4 py-2 text-sm font-semibold text-[#16835f]">
              Plan Estándar
            </div>

            <h1 className="max-w-xl text-[3rem] font-black leading-[0.95] tracking-normal text-[#07364a] sm:text-[4.4rem]">
              Tu salud
              <span className="block text-[#39aa80]">en tus manos</span>
            </h1>

            <p className="mt-6 max-w-xl text-xl leading-relaxed text-[#173c55] sm:text-2xl">
              Todo lo que necesitás en una sola app para cuidarte a vos y a tu familia.
            </p>

            <div className="mt-9 flex max-w-xl flex-col gap-4 rounded-3xl border border-[#deebe7] bg-white/80 p-5 shadow-[0_24px_70px_rgba(6,52,68,0.08)] backdrop-blur sm:flex-row sm:items-center">
              <div className="flex-1">
                <p className="text-lg font-medium text-[#172f42]">Por solo</p>
                <div className="flex items-end gap-3">
                  <span className="text-6xl font-black leading-none text-[#0d7474]">1.25</span>
                  <span className="pb-2 text-xl font-black leading-tight text-[#0d7474]">
                    USD
                    <br />
                    + IVA
                  </span>
                </div>
              </div>
              <div className="hidden h-20 w-px bg-[#d7e6e3] sm:block" />
              <div className="flex flex-1 items-center gap-4">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[#e2f4ee] text-[#2aa679]">
                  <Gift className="h-9 w-9" strokeWidth={1.8} />
                </span>
                <p className="text-3xl font-black leading-none text-[#07364a]">
                  30 días
                  <br />
                  gratis
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#empezar"
                className="inline-flex h-16 items-center justify-center gap-5 rounded-2xl bg-[#35ad7d] px-9 text-lg font-bold text-white shadow-[0_18px_36px_rgba(53,173,125,0.28)] transition hover:bg-[#249c6d]"
              >
                Comenzá hoy tu prueba gratis
                <ChevronRight className="h-6 w-6" />
              </a>
            </div>

            <p className="mt-5 flex items-center gap-3 text-base text-[#244559]">
              <ShieldCheck className="h-6 w-6 text-[#2aaa7d]" />
              Sin tarjeta de crédito. Cancelá cuando quieras.
            </p>
          </div>

          <div className="mx-auto w-full max-w-[390px] lg:max-w-[440px]">
            <PhoneMockup />
          </div>
        </div>
      </section>

      <section id="herramientas" className="scroll-mt-24 px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-white/90 p-6 shadow-[0_22px_80px_rgba(8,54,70,0.08)] sm:p-10">
          <div className="mb-8 flex items-center justify-center gap-8 text-center">
            <span className="hidden h-px w-20 bg-[#9adbc9] sm:block" />
            <h2 className="text-2xl font-black text-[#07364a] sm:text-3xl">
              Incluye 3 herramientas esenciales
            </h2>
            <span className="hidden h-px w-20 bg-[#9adbc9] sm:block" />
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureShowcase key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="beneficios" className="scroll-mt-24 px-5 py-4 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-5 rounded-3xl border border-[#deebe7] bg-white px-6 py-6 shadow-[0_20px_60px_rgba(6,52,68,0.08)] md:grid-cols-3">
          {assurances.map((item) => (
            <div key={item.title} className="flex items-center gap-5 md:border-r md:border-[#d7e6e3] md:last:border-r-0">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[#e8f6f1] text-[#2aa679]">
                <item.icon className="h-9 w-9" strokeWidth={1.7} />
              </span>
              <div>
                <h3 className="text-lg font-black text-[#07364a]">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[#244559]">{item.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="empezar" className="px-5 pb-10 pt-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 rounded-3xl bg-[#087070] p-7 text-white shadow-[0_24px_80px_rgba(5,91,91,0.22)] sm:p-9 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-6">
              <span className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-white text-[#178a73]">
                <HeartPulse className="h-12 w-12" strokeWidth={1.8} />
              </span>
              <div>
                <h2 className="text-3xl font-black">Probá Himalaya Salud</h2>
                <p className="mt-2 text-xl text-white/90">30 días gratis para conocer todos los beneficios.</p>
              </div>
            </div>
            <a
              href="mailto:contacto@himalayasalud.com.ar?subject=Quiero%20probar%20Himalaya%20Salud"
              className="inline-flex h-16 items-center justify-center gap-5 rounded-2xl bg-white px-9 text-lg font-black text-[#07364a] transition hover:bg-[#edf8f5]"
            >
              Empezar ahora
              <ChevronRight className="h-6 w-6 text-[#16835f]" />
            </a>
          </div>

          <div className="grid gap-4 px-5 py-6 text-sm text-[#244559] sm:grid-cols-2 lg:grid-cols-4">
            {footerNotes.map((note) => (
              <p key={note} className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#e8f6f1] text-[#2aa679]">
                  <Check className="h-5 w-5" />
                </span>
                {note}
              </p>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto aspect-[0.49] w-full max-w-[360px] overflow-hidden rounded-[2.6rem] border-[7px] border-[#dbe7e5] bg-white shadow-[0_28px_65px_rgba(6,52,68,0.16)] ring-1 ring-[#b9d7d1]">
      <div className="absolute left-1/2 top-2.5 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-[#0c2631]" />
      <div className="absolute inset-x-0 bottom-0 z-20 rounded-t-[1.7rem] bg-white/96 px-6 pb-4 pt-3 shadow-[0_-12px_35px_rgba(8,54,70,0.1)] backdrop-blur">
        <div className="grid grid-cols-4 text-center text-[0.65rem] font-bold text-[#7a838c]">
          {[
            ["Inicio", Home],
            ["Mi salud", ClipboardPlus],
            ["Familia", UsersRound],
            ["Más", Menu],
          ].map(([label, Icon], index) => (
            <span key={label as string} className={index === 0 ? "text-[#0a7c82]" : ""}>
              <Icon className="mx-auto mb-1 h-5 w-5" strokeWidth={2.5} />
              {label as string}
              {index === 0 && <span className="mx-auto mt-1.5 block h-1 w-6 rounded-full bg-[#0a7c82]" />}
            </span>
          ))}
        </div>
        <span className="mx-auto mt-3 block h-1.5 w-28 rounded-full bg-black" />
      </div>

      <div className="h-full overflow-hidden bg-[#fbfefd] px-4 pb-24 pt-8">
        <div className="flex items-center justify-between">
          <Image
            src="/branding/himalaya-logo-navbar.jpg"
            alt="Himalaya Salud"
            width={2000}
            height={520}
            className="h-auto w-[136px]"
          />
          <div className="flex items-center gap-2 text-[#0a6d78]">
            <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#cfe9e5] bg-white">
              <User className="h-5 w-5 fill-[#0a6d78]/10" />
            </span>
            <span className="relative grid h-9 w-9 place-items-center rounded-full bg-white">
              <Bell className="h-6 w-6" />
              <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-[#ff3838]" />
            </span>
          </div>
        </div>

        <div className="relative mt-6">
          <div className="absolute -right-10 top-0 h-20 w-40 opacity-70">
            <span className="absolute bottom-0 left-6 h-16 w-20 bg-[#bcefe1] [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
            <span className="absolute bottom-0 left-18 h-24 w-24 bg-[#9fe4d4] [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
            <span className="absolute right-1 top-7 h-4 w-12 rounded-full bg-[#c7f0e7]" />
            <span className="absolute left-2 top-9 h-8 w-8 rounded-full bg-[#bcefe1]" />
          </div>
          <h2 className="relative text-[1.65rem] font-black tracking-normal text-[#071d2b]">
            Hola, <span className="text-[#15905d]">María</span> 👋
          </h2>
          <p className="relative mt-2 text-base font-medium text-[#38475b]">¿Qué necesitás hoy?</p>
        </div>

        <div className="relative mt-5 overflow-hidden rounded-[1.65rem] bg-[#ff2428] p-4 text-white shadow-[0_14px_30px_rgba(255,36,40,0.24)]">
          <div className="absolute -left-8 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full border border-white/10" />
          <div className="absolute left-0 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full border-[11px] border-white/10" />
          <div className="relative grid grid-cols-[0.78fr_1fr] items-center gap-3">
            <button className="grid aspect-square w-full place-items-center rounded-full bg-white text-3xl font-black text-[#f1272c] shadow-[0_12px_25px_rgba(120,0,0,0.18)]">
              SOS
            </button>
            <div>
              <h3 className="text-lg font-black uppercase leading-none">Emergencia</h3>
              <p className="mt-1.5 text-sm font-black">Mantener presionado</p>
              <span className="mt-3 block h-0.5 w-8 bg-white/75" />
              <p className="mt-3 text-xs font-medium leading-relaxed">
                Avisará a tus contactos y servicios de emergencia
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-[1.45rem] bg-white p-4 shadow-[0_12px_28px_rgba(8,54,70,0.07)] ring-1 ring-[#e4eeee]">
          <h3 className="text-base font-black text-[#071d2b]">Accesos rápidos</h3>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {[
              ["Mi salud", "Estudios, informes y documentos", ClipboardPlus],
              ["Buscar atención", "Médicos e instituciones cercanas", MapPin],
            ].map(([title, copy, Icon]) => (
              <div key={title as string} className="rounded-[1.15rem] bg-white p-3 shadow-[0_9px_20px_rgba(8,54,70,0.07)] ring-1 ring-[#e6eeee]">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[#e6f6f0] text-[#15905d]">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <h4 className="mt-4 text-sm font-black text-[#071d2b]">{title as string}</h4>
                <p className="mt-1.5 min-h-10 text-[0.72rem] leading-relaxed text-[#4a5768]">{copy as string}</p>
                <span className="ml-auto mt-1 grid h-8 w-8 place-items-center rounded-full bg-[#e0f4eb] text-[#15905d]">
                  <ChevronRight className="h-5 w-5" />
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center gap-4 rounded-[1.3rem] border border-[#bfe9dc] bg-[#f0fbf7] p-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#dff4ee] text-[#15905d]">
            <ShieldCheck className="h-7 w-7" strokeWidth={1.8} />
          </span>
          <div>
            <h3 className="text-base font-black text-[#15905d]">Estás al día</h3>
            <p className="mt-0.5 text-xs leading-relaxed text-[#142d3e]">
              No tenés estudios pendientes ni alertas importantes.
            </p>
          </div>
          <span className="ml-auto hidden h-11 w-11 place-items-center rounded-full bg-[#2cb679] text-white sm:grid">
            <Check className="h-6 w-6" />
          </span>
        </div>

        <div className="mt-4 flex items-center gap-3 rounded-[1.3rem] bg-white p-4 shadow-[0_10px_24px_rgba(8,54,70,0.06)] ring-1 ring-[#e6eeee]">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#e6f6f0] text-[#15905d]">
            <LockKeyhole className="h-5 w-5" />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-black text-[#071d2b]">Tu información está protegida</h3>
            <p className="text-xs leading-relaxed text-[#657788]">Seguridad y privacidad.</p>
          </div>
          <ChevronRight className="h-5 w-5 text-[#15905d]" />
        </div>
      </div>
    </div>
  );
}

function FeatureShowcase({
  feature,
  index,
}: {
  feature: (typeof features)[number];
  index: number;
}) {
  return (
    <article>
      <div className="flex items-start gap-4">
        <span
          className={
            index === 1
              ? "grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-[#ff443d] text-white"
              : "grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-[#31a87b] text-white"
          }
        >
          <feature.icon className="h-9 w-9" />
        </span>
        <div>
          <h3 className="text-xl font-black text-[#07364a]">{feature.title}</h3>
          <p className="mt-2 text-base leading-relaxed text-[#244559]">{feature.copy}</p>
        </div>
      </div>
      <div className="mt-7 h-[390px] overflow-hidden rounded-t-3xl border border-[#e3eeeb] bg-[#f8fbfa] shadow-[0_20px_45px_rgba(8,54,70,0.09)]">
        {index === 0 && <StudiesScreen />}
        {index === 1 && <EmergencyScreen />}
        {index === 2 && <MapScreen />}
      </div>
    </article>
  );
}

function StudiesScreen() {
  return (
    <div className="p-5">
      <MiniStatusBar />
      <div className="mt-5 flex items-center justify-between">
        <h4 className="font-black text-[#071d2b]">Mis estudios</h4>
        <ChevronRight className="h-5 w-5" />
      </div>
      <div className="mt-4 grid grid-cols-3 rounded-xl bg-white p-1 text-center text-[0.68rem] font-bold text-[#708292]">
        <span className="rounded-lg bg-[#dff4ee] py-2 text-[#178a73]">Todos</span>
        <span className="py-2">Resultados</span>
        <span className="py-2">Imágenes</span>
      </div>
      <div className="mt-5 space-y-4">
        {["Análisis de sangre", "Radiografía de tórax", "Ecografía abdominal"].map((study, index) => (
          <div key={study} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#eef5f3] text-[#315c65]">
              <ClipboardPlus className="h-6 w-6" />
            </span>
            <div className="flex-1">
              <p className="text-sm font-black text-[#071d2b]">{study}</p>
              <p className="text-xs text-[#657788]">{index === 0 ? "20/05/2024" : index === 1 ? "15/05/2024" : "10/05/2024"}</p>
            </div>
            <span className="rounded-full bg-[#dff4ee] px-3 py-1 text-[0.65rem] font-black text-[#178a73]">
              Ver
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function EmergencyScreen() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-[#f2463d] to-[#ffd8d3] p-5 text-white">
      <MiniStatusBar light />
      <div className="mt-5 flex items-center justify-between text-sm font-bold">
        <ChevronRight className="h-5 w-5 rotate-180" />
        <span>Emergencia</span>
        <ChevronRight className="h-5 w-5" />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <button className="grid h-36 w-36 place-items-center rounded-full border-[14px] border-white/25 bg-white text-4xl font-black text-[#f2463d] shadow-[0_12px_35px_rgba(140,0,0,0.16)]">
          SOS
        </button>
        <h4 className="mt-10 text-xl font-black text-[#082e44]">Enviando alerta...</h4>
        <p className="mt-3 max-w-[220px] text-sm leading-relaxed text-[#263c4c]">
          Tu ubicación será compartida con asistencia.
        </p>
        <span className="mt-8 rounded-full bg-[#ee3e37] px-8 py-3 text-sm font-black text-white shadow-lg">
          Cancelar
        </span>
      </div>
    </div>
  );
}

function MapScreen() {
  return (
    <div className="relative h-full overflow-hidden bg-[#edf4ef]">
      <div className="absolute inset-0 opacity-80 [background-image:linear-gradient(35deg,transparent_47%,#d9dfdc_48%,#d9dfdc_52%,transparent_53%),linear-gradient(125deg,transparent_47%,#d9dfdc_48%,#d9dfdc_52%,transparent_53%)] [background-size:86px_86px]" />
      <div className="relative z-10 m-4 flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm text-[#244559] shadow-lg">
        <Search className="h-5 w-5" />
        <span className="flex-1">Buscar instituciones</span>
        <ChevronRight className="h-5 w-5" />
      </div>
      {[
        "left-[22%] top-[32%]",
        "left-[70%] top-[20%]",
        "left-[72%] top-[46%]",
      ].map((pos) => (
        <MapPin key={pos} className={`absolute ${pos} z-10 h-9 w-9 fill-[#31a87b] text-[#31a87b]`} />
      ))}
      <span className="absolute left-1/2 top-[42%] z-10 h-6 w-6 rounded-full border-4 border-white bg-[#249df2] shadow-lg" />
      <div className="absolute bottom-5 left-5 right-5 z-10 rounded-2xl bg-white p-4 shadow-xl">
        <div className="flex gap-4">
          <div className="flex-1">
            <h4 className="text-base font-black text-[#071d2b]">Clínica San Martín</h4>
            <p className="mt-1 text-xs text-[#657788]">A 0,4 km</p>
            <p className="mt-1 text-xs text-[#657788]">Av. Siempre Viva 123</p>
            <p className="mt-3 text-sm font-black text-[#178a73]">Ver detalles</p>
          </div>
          <div className="h-20 w-28 rounded-xl bg-gradient-to-br from-[#d8e2df] to-[#9fb4af]" />
        </div>
      </div>
    </div>
  );
}

function MiniStatusBar({ light = false }: { light?: boolean }) {
  return (
    <div className={`flex items-center justify-between text-xs font-black ${light ? "text-white" : "text-[#071d2b]"}`}>
      <span>9:41</span>
      <span className="flex items-center gap-1">
        <Menu className="h-4 w-4" />
        <span className={`h-2 w-4 rounded-sm ${light ? "bg-white" : "bg-[#071d2b]"}`} />
      </span>
    </div>
  );
}
