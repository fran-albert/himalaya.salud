/* ——— Nav ——— */
const Nav = () => (
  <nav className="ls-nav">
    <div className="shell ls-nav-row">
      <a className="ls-logo" href="#">
        <img src="assets/logo-himalaya.svg" alt="" width="36" height="36" />
        <div>
          <div className="ls-logo-name">Himalaya <span>Salud</span></div>
          <div className="ls-logo-tag">TU SALUD EN TUS MANOS</div>
        </div>
      </a>
      <div className="ls-nav-links">
        <a href="#producto">Producto</a>
        <a href="#emergencia">Botón de pánico</a>
        <a href="#como">Cómo funciona</a>
        <a href="#cobertura">Cobertura</a>
      </div>
      <div className="ls-nav-cta">
        <a className="btn btn-ghost btn-sm" href="#">Ingresar</a>
        <a className="btn btn-primary btn-sm" href="#descargar">Descargar app</a>
      </div>
    </div>
  </nav>
);

/* ——— Hero ——— */
const Hero = ({ heroCopy }) => (
  <section className="ls-hero">
    <div className="dot-grid" />
    <div className="shell ls-hero-grid">
      <div className="ls-hero-text">
        <span className="eyebrow">Tu salud en tus manos · App de salud personal</span>
        <h1 className="h-display">
          {heroCopy === "salud" && (<>Tu salud,<br/>en <em>tus manos</em>.</>)}
          {heroCopy === "familia" && (<>Cuidá a los<br/>tuyos <em>siempre</em>.</>)}
          {heroCopy === "emergencia" && (<>Ayuda real,<br/><em>en 3 segundos</em>.</>)}
        </h1>
        <p className="lede">
          Tus estudios médicos, un botón de pánico que avisa a tu familia y servicios de salud cerca tuyo.
          Todo en una sola app, pensada para Argentina.
        </p>
        <div className="ls-hero-cta">
          <a className="btn btn-primary" href="#descargar">
            Empezá 30 días gratis
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
          <a className="btn btn-ghost" href="#producto">
            Ver funcionalidades
          </a>
        </div>
        <div className="ls-hero-trust">
          <span className="cap">Sin tarjeta para empezar</span>
          <span className="ls-dot-sep" />
          <span className="cap">Después ARS&nbsp;15.000/mes · cancelás cuando quieras</span>
        </div>
        <div className="ls-hero-meta">
          <div className="ls-meta-item">
            <strong>3 seg</strong>
            <div>
              <div className="cap" style={{color:"var(--ink-2)",fontSize:13,fontWeight:600}}>activación SOS</div>
              <div className="cap">avisa hasta 3 contactos</div>
            </div>
          </div>
          <div className="ls-meta-divider" />
          <div className="ls-meta-item">
            <strong>HCI</strong>
            <div>
              <div className="cap" style={{color:"var(--ink-2)",fontSize:13,fontWeight:600}}>muy pronto</div>
              <div className="cap">historia clínica interoperable</div>
            </div>
          </div>
        </div>
      </div>

      <div className="ls-hero-visual ls-hero-hand">
        <img src="assets/hand-home-real.png" alt="App Himalaya Salud en pantalla de inicio sostenida en una mano" className="ls-hand-img" />
        <div className="ls-hero-callout">
          <span className="ls-callout-pulse" />
          <div>
            <div className="cap mono" style={{color:"var(--danger)"}}>SOS · 3 SEG</div>
            <div style={{fontSize:13,fontWeight:600,color:"var(--teal-900)"}}>Avisá a tus contactos<br/>con un toque</div>
          </div>
        </div>
        <div className="ls-hero-chip top">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0C606E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>
          <span>Estudios siempre con vos</span>
        </div>
      </div>
    </div>
  </section>
);

/* ——— Cobertura strip ——— */
const Cobertura = () => (
  <section id="cobertura" className="ls-cobertura">
    <div className="shell">
      <div className="ls-cob-row">
        <div className="ls-cob-label">
          <span className="mono">Hecho en Argentina · Para argentinos</span>
          <div className="ls-cob-line" />
        </div>
        <div className="ls-cob-logos">
          <div className="ls-cob-pill">★ 4.8 en App Store</div>
          <div className="ls-cob-pill">+12.000 descargas</div>
          <div className="ls-cob-pill">Servidores en AR</div>
          <div className="ls-cob-pill">Datos encriptados</div>
          <div className="ls-cob-pill">Soporte humano 24/7</div>
        </div>
      </div>
    </div>
  </section>
);

/* ——— SOS / Botón de pánico ——— */
const SOSSection = () => (
  <section id="emergencia" className="ls-sos">
    <div className="shell ls-sos-grid">
      <div className="ls-sos-text">
        <span className="eyebrow" style={{color:"var(--danger)"}}>Botón de pánico</span>
        <h2 className="h-1">
          Cuando cada<br/>segundo cuenta.
        </h2>
        <p className="lede">
          Mantené presionado <strong>3 segundos</strong> y avisamos a tus contactos de confianza
          y a los servicios de emergencia con tu ubicación, condiciones médicas y contactos relevantes.
        </p>

        <ul className="ls-sos-list">
          <li>
            <span className="ls-check"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
            Notificación a tus contactos de emergencia
          </li>
          <li>
            <span className="ls-check"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
            Tu ubicación se envía automáticamente
          </li>
          <li>
            <span className="ls-check"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
            Cancelable en 10 segundos si fue por error
          </li>
          <li>
            <span className="ls-check"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
            Datos médicos relevantes para los servicios de emergencia
          </li>
        </ul>
      </div>

      <div className="ls-sos-visual sos-real">
        <div className="ls-sos-bg" />
        <img src="assets/hand-sos-real.png" alt="Pantalla del modal SOS de Himalaya Salud en una mano" className="ls-sos-hand" />
        <div className="ls-sos-marker top">
          <div className="ls-sos-marker-text">
            <span className="mono">01</span>
            <span>Mantené presionado 3s</span>
          </div>
        </div>
        <div className="ls-sos-marker mid">
          <div className="ls-sos-marker-text">
            <span className="mono">02</span>
            <span>Avisamos a tus contactos<br/>+54 341 530 3469</span>
          </div>
        </div>
        <div className="ls-sos-marker bottom">
          <div className="ls-sos-marker-text">
            <span className="mono">03</span>
            <span>Cancelable en 10s</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ——— Features ——— */
const FEATURES = [
  {
    n:"01",
    title:"Botón de pánico ilimitado",
    desc:"Avisá a tus contactos y servicios de emergencia las veces que necesites. Mantené presionado 3 segundos.",
    icon:(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>)
  },
  {
    n:"02",
    title:"Portal del paciente sin límites",
    desc:"Subí estudios, análisis, recetas e imágenes médicas sin restricción. Etiquetá y encontrá todo rápido.",
    icon:(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 14h6"/><path d="M9 18h4"/></svg>)
  },
  {
    n:"03",
    title:"Servicios de salud cercanos",
    desc:"Encontrá médicos, clínicas y centros de salud cerca tuyo en cualquier parte del país.",
    icon:(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>)
  },
  {
    n:"04",
    title:"Cuidado familiar",
    desc:"Vinculá a papá, mamá, abuelos. Compartí información médica y reciben sus alertas SOS.",
    icon:(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.5"/><circle cx="17" cy="10" r="2.5"/><path d="M3 21v-1a6 6 0 0 1 12 0v1"/><path d="M14 21v-1a4 4 0 0 1 7-2.6"/></svg>)
  },
  {
    n:"05",
    title:"Historia clínica interoperable",
    desc:"Muy pronto: tu HCI completa, accesible y portable entre prestadores. Sin perder un papel.",
    badge:"MUY PRONTO",
    icon:(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>)
  },
  {
    n:"06",
    title:"Soporte prioritário",
    desc:"Respuestas en menos de 24 horas hábiles. Equipo argentino, atención humana.",
    icon:(<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>)
  },
];
const Features = () => (
  <section id="producto" className="ls-features">
    <div className="shell">
      <div className="ls-features-head">
        <span className="eyebrow">Producto</span>
        <h2 className="h-1" style={{maxWidth:"14ch"}}>
          Una app, todo lo que necesitás <em style={{fontStyle:"normal",color:"var(--mint-700)"}}>para tu salud</em>.
        </h2>
        <p className="lede" style={{marginTop:18}}>
          Pensada para que vos y tu familia tengan toda la información médica importante a un toque.
        </p>
      </div>
      <div className="ls-features-grid">
        {FEATURES.map(f => (
          <div className="ls-feature" key={f.n}>
            <div className="ls-feature-head">
              <span className="ls-feature-icon">{f.icon}</span>
              <span className="mono ls-feature-n">{f.n}</span>
            </div>
            <h3 className="ls-feature-title">
              {f.title}
              {f.badge && <span className="ls-feature-badge">{f.badge}</span>}
            </h3>
            <p className="ls-feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ——— Cómo funciona ——— */
const How = () => (
  <section id="como" className="ls-how">
    <div className="shell ls-how-grid">
      <div>
        <span className="eyebrow">Cómo funciona</span>
        <h2 className="h-1" style={{marginTop:14}}>Tres pasos<br/>y listo.</h2>
      </div>
      <div className="ls-how-steps">
        {[
          {n:"01", t:"Descargá la app", d:"iOS y Android. Creá tu cuenta y empezá con 30 días gratis, sin tarjeta."},
          {n:"02", t:"Cargá lo importante", d:"Subí estudios, definí tus 3 contactos de emergencia, vinculá a tu familia. Una sola vez."},
          {n:"03", t:"Llevala con vos", d:"Tu salud en el bolsillo. Y si pasa algo, un toque y tus contactos se enteran."},
        ].map(s => (
          <div className="ls-step" key={s.n}>
            <div className="ls-step-n mono">{s.n}</div>
            <div>
              <h3 className="ls-step-t">{s.t}</h3>
              <p className="ls-step-d">{s.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ——— Testimonios ——— */
const Testimonials = () => (
  <section className="ls-testi">
    <div className="shell">
      <div className="ls-testi-grid">
        <div className="ls-testi-head">
          <span className="eyebrow">Testimonios</span>
          <h2 className="h-2" style={{marginTop:14}}>Familias que ya<br/>tienen Himalaya cerca.</h2>
        </div>
        {[
          {q:"A mi vieja le pasó algo en la cocina y apretó el SOS. Estaba a 40 cuadras y llegué con todos los datos en el celular.", a:"Carolina R.", r:"Hija — Rosario"},
          {q:"Tenía estudios en 4 lugares distintos, fotos, mails, papeles. Ahora todo está acá. Mis médicos lo agradecen.", a:"Martín D.", r:"Paciente — CABA"},
          {q:"Vinculé a mis viejos y a mis tres hijos en una sola app. ARS 15.000 al mes me parece poco para la tranquilidad que me da.", a:"Lucía F.", r:"Madre — Córdoba"},
        ].map((t, i) => (
          <figure className="ls-testi-card" key={i}>
            <div className="ls-quote-mark">“</div>
            <blockquote className="ls-quote">{t.q}</blockquote>
            <figcaption className="ls-author">
              <div className="ls-author-avatar">{t.a.split(" ").map(s=>s[0]).join("")}</div>
              <div>
                <div className="ls-author-n">{t.a}</div>
                <div className="cap">{t.r}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

/* ——— CTA final ——— */
const FinalCTA = () => (
  <section id="descargar" className="ls-final">
    <div className="shell ls-final-card">
      <div className="ls-final-bg" />
      <div className="ls-final-content">
        <span className="eyebrow" style={{color:"var(--mint-200)"}}>Descargá la app</span>
        <h2 className="h-1" style={{color:"#fff",marginTop:14}}>
          Llevá tu salud,<br/>y la de los tuyos,<br/><em style={{fontStyle:"normal",color:"var(--mint-200)"}}>siempre con vos.</em>
        </h2>
        <p className="lede" style={{color:"rgba(255,255,255,.78)",maxWidth:"48ch"}}>
          30 días gratis, sin tarjeta. Después ARS&nbsp;15.000 al mes. Cancelás desde la misma app.
        </p>
        <div className="ls-final-stores">
          <a className="ls-store" href="#">
            <svg width="22" height="26" viewBox="0 0 22 26" fill="currentColor"><path d="M17.6 13.7c0-3.3 2.7-4.9 2.8-5-1.5-2.2-3.9-2.5-4.7-2.5-2-.2-3.9 1.2-4.9 1.2-1 0-2.6-1.2-4.3-1.1-2.2 0-4.2 1.3-5.3 3.3-2.3 4-.6 9.8 1.6 13 1.1 1.6 2.4 3.3 4.1 3.3 1.6-.1 2.3-1 4.3-1s2.5 1 4.3 1c1.8 0 2.9-1.6 4-3.2 1.3-1.8 1.8-3.6 1.8-3.7-.1 0-3.6-1.4-3.6-5.3zM14.4 4.2c.9-1 1.5-2.5 1.3-3.9-1.3.1-2.8.8-3.7 1.9-.8.9-1.5 2.4-1.3 3.8 1.4.1 2.8-.7 3.7-1.8z"/></svg>
            <div>
              <div className="ls-store-sub">Descargar en</div>
              <div className="ls-store-name">App Store</div>
            </div>
          </a>
          <a className="ls-store" href="#">
            <svg width="22" height="26" viewBox="0 0 22 26" fill="currentColor"><path d="M2.1 1.1C1.7 1.5 1.5 2.1 1.5 2.9v20.2c0 .8.2 1.4.6 1.8l11.5-11.4L2.1 1.1zm12.7 11.4 3.4-3.4-12-7L2 5.7l12.8 6.8zM4.4 25.4c.4 0 .8-.1 1.2-.4l13.7-7.8-3.5-3.5-11.4 11.7zm15.1-12.5-2.7-1.6-3.7 3.7 3.7 3.7 2.7-1.5c1.6-.9 1.6-2.4 0-3.3z"/></svg>
            <div>
              <div className="ls-store-sub">Disponible en</div>
              <div className="ls-store-name">Google Play</div>
            </div>
          </a>
        </div>
      </div>
      <div className="ls-final-phone">
        <PhoneMock variant="home" />
      </div>
    </div>
  </section>
);

/* ——— Footer ——— */
const Footer = () => (
  <footer className="ls-foot">
    <div className="shell ls-foot-grid">
      <div>
        <a className="ls-logo" href="#">
          <img src="assets/logo-himalaya.svg" alt="" width="36" height="36" />
          <div>
            <div className="ls-logo-name">Himalaya <span>Salud</span></div>
            <div className="ls-logo-tag">TU SALUD EN TUS MANOS</div>
          </div>
        </a>
        <p className="ls-foot-desc">
          Software de salud personal hecho en Argentina. No reemplaza el consejo médico profesional.
        </p>
      </div>
      <div className="ls-foot-cols">
        <div>
          <div className="ls-foot-h">Producto</div>
          <a href="#producto">Funcionalidades</a>
          <a href="#emergencia">Botón de pánico</a>
          <a href="#cobertura">Cobertura</a>
          <a href="#descargar">Descargar</a>
        </div>
        <div>
          <div className="ls-foot-h">Empresa</div>
          <a href="#">Sobre nosotros</a>
          <a href="#">Para profesionales</a>
          <a href="#">Prensa</a>
          <a href="#">Contacto</a>
        </div>
        <div>
          <div className="ls-foot-h">Legal</div>
          <a href="#">Términos de uso</a>
          <a href="#">Privacidad</a>
          <a href="#">Tratamiento de datos</a>
          <a href="#">Habeas data</a>
        </div>
      </div>
    </div>
    <div className="shell ls-foot-bar">
      <span className="cap">© 2026 Himalaya Salud · Buenos Aires, Argentina</span>
      <span className="mono">v1.0 · Build 2026.04</span>
    </div>
  </footer>
);

window.LandingSections = { Nav, Hero, Cobertura, SOSSection, Features, How, Testimonials, FinalCTA, Footer };
