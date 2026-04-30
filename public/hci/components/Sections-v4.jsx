/* ——— V4: Producto-céntrico moderno — Sections ——— */

const LogoV4 = ({ inFooter = false }) => (
  <a className="v4-logo" href="#inicio">
    <img src="assets/logo-himalaya.svg" alt="" width="40" height="40" />
    <div>
      <div className="v4-logo-name">Himalaya <span>Salud</span></div>
      <div className="v4-logo-tag">TU SALUD EN TUS MANOS</div>
    </div>
  </a>
);

const NavV4 = () => (
  <nav className="v4-nav">
    <div className="shell v4-nav-row">
      <LogoV4 />
      <div className="v4-nav-links">
        <a href="#inicio">Inicio</a>
        <a href="#quienes">Quiénes Somos</a>
        <a href="#producto">Producto</a>
        <a href="#hci">Próximo lanzamiento</a>
        <a href="#contacto">Contacto</a>
      </div>
      <div style={{display:"flex",gap:10}}>
        <a className="v4-btn v4-btn-ghost v4-btn-sm" href="#">Ingresar</a>
        <a className="v4-btn v4-btn-primary v4-btn-sm" href="#contacto">Probar gratis</a>
      </div>
    </div>
  </nav>
);

/* INICIO */
const Inicio = () => (
  <section id="inicio">
    <div className="shell v4-hero">
      <div>
        <span className="v4-eyebrow">App de salud personal · Argentina</span>
        <h1>Tu salud, <em>en tus manos.</em> Tu familia, en una app.</h1>
        <p className="v4-hero-deck">
          Himalaya Salud reúne tu historia médica, tus estudios y un botón de
          pánico con aviso a contactos de emergencia. Pensada para vos, tus
          viejos y los que querés cuidar.
        </p>
        <div className="v4-hero-cta">
          <a className="v4-btn v4-btn-primary" href="#contacto">
            Empezar 30 días gratis
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
          <a className="v4-btn v4-btn-ghost" href="#producto">Ver producto</a>
          <span className="v4-hero-trust">Sin tarjeta · Cancelás cuando quieras</span>
        </div>
        <div className="v4-hero-stats">
          <div>
            <div className="v4-stat-num">15.000<em> ARS</em></div>
            <div className="v4-stat-label">Plan Estándar / mes</div>
          </div>
          <div>
            <div className="v4-stat-num">30<em> días</em></div>
            <div className="v4-stat-label">Prueba sin tarjeta</div>
          </div>
          <div>
            <div className="v4-stat-num">3<em> seg</em></div>
            <div className="v4-stat-label">Activación SOS</div>
          </div>
        </div>
      </div>
      <div className="v4-hero-visual">
        <img className="v4-hero-img" src="assets/hand-home-real.png" alt="App Himalaya Salud en una mano" />
      </div>
    </div>
  </section>
);

/* QUIÉNES SOMOS */
const Quienes = () => (
  <section id="quienes">
    <div className="shell">
      <div className="v4-about">
        <div className="v4-about-image">
          <div className="v4-about-placeholder">
            <span>👥</span>
            FOTO DEL EQUIPO<br/>
            (placeholder)
          </div>
        </div>
        <div>
          <span className="v4-eyebrow">Quiénes somos</span>
          <h2 className="v4-sec-title">Un equipo argentino<br/>obsesionado con la salud <em>personal.</em></h2>
          <p className="v4-sec-deck">
            Nacimos en Buenos Aires con una idea simple: la información médica
            tiene que estar donde está la persona, no perdida en cajones,
            mails ni sistemas que no se hablan entre sí. Construimos Himalaya
            para que vos —y los que querés cuidar— tengan todo a mano.
          </p>
          <div className="v4-values">
            <div className="v4-value">
              <div className="v4-value-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-12V5l-8-3-8 3v5c0 8 8 12 8 12z"/></svg>
              </div>
              <h3 className="v4-value-title">Datos de la persona</h3>
              <p className="v4-value-desc">Tus datos son tuyos. Encriptados, portables, exportables. Servidores en Argentina.</p>
            </div>
            <div className="v4-value">
              <div className="v4-value-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 12c0 5-4 9-9 9s-9-4-9-9 4-9 9-9c2 0 4 .8 5.5 2"/><path d="m9 11 3 3L22 4"/></svg>
              </div>
              <h3 className="v4-value-title">Hecho en Argentina</h3>
              <p className="v4-value-desc">Pensado para nuestro contexto: prepagas, obras sociales, geografía y emergencias locales.</p>
            </div>
            <div className="v4-value">
              <div className="v4-value-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <h3 className="v4-value-title">Soporte humano</h3>
              <p className="v4-value-desc">Personas, no chatbots. Respuestas en menos de 24 horas hábiles, equipo local.</p>
            </div>
            <div className="v4-value">
              <div className="v4-value-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M2 12h6l3-9 4 18 3-9h4"/></svg>
              </div>
              <h3 className="v4-value-title">Salud, no software</h3>
              <p className="v4-value-desc">Construimos con médicos, pacientes y cuidadores. Cada función responde a una necesidad real.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* PRODUCTO */
const PRODUCTO_CARDS = [
  {n:"01",t:"Botón de pánico",d:"Mantenelo presionado 3 segundos. Avisamos a tus contactos y a los servicios de emergencia con tu ubicación y datos médicos.",featured:true,
    icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>},
  {n:"02",t:"Portal del paciente",d:"Estudios, análisis, recetas e imágenes médicas. Etiquetados, buscables, sin límite de almacenamiento.",
    icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>},
  {n:"03",t:"Servicios de salud",d:"Médicos, clínicas y centros de salud cerca tuyo. Información actualizada y verificada.",
    icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>},
  {n:"04",t:"Cuidado familiar",d:"Vinculá hasta 5 personas a tu cuenta — viejos, hijos, hermanos. Una app para toda la familia.",
    icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>},
  {n:"05",t:"Soporte prioritario",d:"Equipo argentino. Respuestas en menos de 24 horas hábiles. Sin chatbots, sin tickets perdidos.",
    icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z"/></svg>},
  {n:"06",t:"Datos seguros",d:"Encriptación end-to-end. Servidores en Argentina. Cumplimiento de Ley de Protección de Datos Personales.",
    icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>},
];

const Producto = () => (
  <section id="producto">
    <div className="shell">
      <div className="v4-prod-head">
        <div>
          <span className="v4-eyebrow">Producto</span>
          <h2 className="v4-sec-title">Todo lo que necesita una <em>app de salud</em>, en una sola.</h2>
        </div>
        <p className="v4-sec-deck">
          Plan Estándar único — ARS 15.000/mes con 30 días gratis para
          probarla. Sin tiers, sin upsells, sin sorpresas.
        </p>
      </div>
      <div className="v4-prod-grid">
        {PRODUCTO_CARDS.map(c => (
          <div className={"v4-prod-card"+(c.featured?" featured":"")} key={c.n}>
            <div className="v4-prod-num">§ {c.n}</div>
            <div className="v4-prod-icon">{c.icon}</div>
            <h3 className="v4-prod-title">{c.t}</h3>
            <p className="v4-prod-desc">{c.d}</p>
            <a className="v4-prod-link" href="#">Ver más
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        ))}
      </div>

      <div className="v4-prod-screens">
        <div>
          <span className="v4-eyebrow">Portal del paciente</span>
          <h3 style={{fontSize:28,fontWeight:700,letterSpacing:"-0.02em",margin:"14px 0 12px",lineHeight:1.15}}>
            Tu historia clínica, ordenada como nunca.
          </h3>
          <p style={{fontSize:15.5,lineHeight:1.55,color:"var(--v4-ink-2)",margin:0}}>
            Subí estudios, análisis e imágenes desde tu celular. Etiquetá por
            tipo, especialidad o profesional. Compartí con un toque cuando
            visitás a un médico nuevo. Sin papeles, sin perderse nada.
          </p>
          <div style={{marginTop:24,display:"flex",gap:12,flexWrap:"wrap"}}>
            <a className="v4-btn v4-btn-primary v4-btn-sm" href="#contacto">Probar gratis</a>
            <a className="v4-btn v4-btn-ghost v4-btn-sm" href="#">Ver demo</a>
          </div>
        </div>
        <img className="v4-prod-screens-img" src="assets/screen-portal-real.jpg" alt="Portal del paciente con estudios" />
      </div>
    </div>
  </section>
);

/* PRÓXIMO LANZAMIENTO — HCI */
const HCI = () => (
  <section id="hci">
    <div className="shell">
      <div className="v4-hci-status">Próximo lanzamiento · Q4 2026</div>
      <span className="v4-eyebrow">Historia Clínica Interoperable</span>
      <h2 className="v4-sec-title">Tu historia te <em>sigue,</em> no al revés.</h2>
      <p className="v4-sec-deck">
        Hoy tu historia médica vive en pedazos: una clínica acá, un laboratorio
        allá, un consultorio en otra obra social. La HCI cambia eso —
        <strong style={{color:"#fff"}}> los datos viajan con vos,</strong> entre
        prestadores, en tiempo real, con tu permiso.
      </p>

      <div className="v4-hci-grid">
        <div className="v4-hci-text">
          <h3>Cómo funciona una HCI</h3>
          <div className="v4-hci-steps">
            <div className="v4-hci-step">
              <div className="v4-hci-step-num">01</div>
              <div>
                <h3 style={{fontSize:15,marginBottom:4}}>Tu historia, una sola</h3>
                <p>Estudios, recetas, diagnósticos y tratamientos en un único repositorio cifrado, asociado a tu CUIL.</p>
              </div>
            </div>
            <div className="v4-hci-step">
              <div className="v4-hci-step-num">02</div>
              <div>
                <h3 style={{fontSize:15,marginBottom:4}}>Estándares abiertos (HL7 FHIR)</h3>
                <p>Cualquier prestador certificado puede leer y escribir sobre tu historia, sin formatos propietarios.</p>
              </div>
            </div>
            <div className="v4-hci-step">
              <div className="v4-hci-step-num">03</div>
              <div>
                <h3 style={{fontSize:15,marginBottom:4}}>Tu permiso, siempre</h3>
                <p>Cada acceso requiere tu consentimiento explícito. Vos decidís qué se comparte, con quién y por cuánto tiempo.</p>
              </div>
            </div>
            <div className="v4-hci-step">
              <div className="v4-hci-step-num">04</div>
              <div>
                <h3 style={{fontSize:15,marginBottom:4}}>Sin costo extra</h3>
                <p>Cuando lancemos la HCI, está incluida en el Plan Estándar. Sin paywalls ni planes premium.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="v4-hci-diagram">
          <svg className="v4-hci-svg" viewBox="0 0 500 480" preserveAspectRatio="none">
            <line className="v4-hci-line flow" x1="80" y1="60" x2="250" y2="240"/>
            <line className="v4-hci-line flow" x1="420" y1="55" x2="250" y2="240" style={{animationDelay:"0.3s"}}/>
            <line className="v4-hci-line flow" x1="50" y1="370" x2="250" y2="240" style={{animationDelay:"0.6s"}}/>
            <line className="v4-hci-line flow" x1="430" y1="420" x2="250" y2="240" style={{animationDelay:"0.9s"}}/>
            <line className="v4-hci-line flow" x1="240" y1="450" x2="250" y2="240" style={{animationDelay:"1.2s"}}/>
          </svg>
          <div className="v4-hci-cloud">
            <div className="v4-hci-cloud-inner">
              <div className="v4-hci-cloud-label">HCI</div>
              <div className="v4-hci-cloud-text">VOS</div>
            </div>
          </div>
          <div className="v4-hci-node n1">
            <div className="v4-hci-node-icon">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M19 14c1.5-1.5 3-3.5 3-6a4 4 0 1 0-8 0M9 14c-1.5-1.5-3-3.5-3-6a4 4 0 1 1 8 0"/></svg>
            </div>
            Clínica
          </div>
          <div className="v4-hci-node n2">
            <div className="v4-hci-node-icon">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M9 14h.01M15 14h.01M9 19a4 4 0 0 0 6 0M9 4h6v6H9z"/></svg>
            </div>
            Laboratorio
          </div>
          <div className="v4-hci-node n3">
            <div className="v4-hci-node-icon">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="8" r="4"/><path d="M3 22a9 9 0 0 1 18 0"/></svg>
            </div>
            Médico
          </div>
          <div className="v4-hci-node n4">
            <div className="v4-hci-node-icon">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M19 14V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v8M3 14h18M3 14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2"/></svg>
            </div>
            Obra Social
          </div>
          <div className="v4-hci-node n5">
            <div className="v4-hci-node-icon">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
            </div>
            Farmacia
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* CONTACTO / SOPORTE */
const Contacto = () => (
  <section id="contacto">
    <div className="shell">
      <div className="v4-contact">
        <div>
          <span className="v4-eyebrow">Contacto · Soporte</span>
          <h2 className="v4-sec-title">Hablá con <em>una persona,</em> no con un bot.</h2>
          <p className="v4-sec-deck">
            Equipo en Buenos Aires. Respondemos en menos de 24 horas hábiles.
            Elegí el canal que más te convenga.
          </p>
          <div className="v4-contact-channels">
            <a className="v4-channel" href="mailto:hola@himalayasalud.com.ar">
              <div className="v4-channel-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 5L2 7"/></svg>
              </div>
              <div>
                <p className="v4-channel-title">Email</p>
                <p className="v4-channel-sub">hola@himalayasalud.com.ar</p>
              </div>
              <svg className="v4-channel-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <a className="v4-channel" href="#">
              <div className="v4-channel-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z"/></svg>
              </div>
              <div>
                <p className="v4-channel-title">WhatsApp</p>
                <p className="v4-channel-sub">+54 11 5555 5555 · Lun a Vie 9–18h</p>
              </div>
              <svg className="v4-channel-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <a className="v4-channel" href="#">
              <div className="v4-channel-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14 9V5a3 3 0 0 0-6 0v4M5 9h14l-1 12H6z"/></svg>
              </div>
              <div>
                <p className="v4-channel-title">Centro de ayuda</p>
                <p className="v4-channel-sub">Tutoriales, FAQ y guías</p>
              </div>
              <svg className="v4-channel-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </div>

        <form className="v4-form" onSubmit={(e)=>e.preventDefault()}>
          <h3 style={{fontSize:20,fontWeight:700,letterSpacing:"-0.018em",margin:"0 0 6px"}}>Escribinos</h3>
          <p style={{fontSize:13.5,color:"var(--v4-ink-2)",margin:"0 0 24px"}}>Respondemos en menos de 24 horas hábiles.</p>
          <div className="v4-form-row cols">
            <div>
              <label className="v4-form-label">Nombre</label>
              <input className="v4-form-input" placeholder="Tu nombre" />
            </div>
            <div>
              <label className="v4-form-label">Email</label>
              <input className="v4-form-input" placeholder="vos@email.com" type="email" />
            </div>
          </div>
          <div className="v4-form-row" style={{marginTop:14}}>
            <div>
              <label className="v4-form-label">Soy</label>
              <select className="v4-form-select" defaultValue="">
                <option value="" disabled>Elegí una opción</option>
                <option>Persona / Familia</option>
                <option>Profesional de la salud</option>
                <option>Obra social / Prepaga</option>
                <option>Empresa</option>
                <option>Prensa</option>
              </select>
            </div>
          </div>
          <div className="v4-form-row" style={{marginTop:14}}>
            <div>
              <label className="v4-form-label">Mensaje</label>
              <textarea className="v4-form-textarea" placeholder="Contanos en qué podemos ayudarte" />
            </div>
          </div>
          <div className="v4-form-actions">
            <span className="v4-form-note">Tus datos se procesan según nuestra política de privacidad.</span>
            <button className="v4-btn v4-btn-primary" type="submit">
              Enviar mensaje
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

const FootV4 = () => (
  <footer className="v4-foot">
    <div className="shell">
      <div className="v4-foot-row">
        <div>
          <LogoV4 inFooter />
          <p className="v4-foot-tag">
            Software de salud personal hecho en Argentina, para que la salud
            esté donde tiene que estar — con vos.
          </p>
        </div>
        <div>
          <div className="v4-foot-h">Producto</div>
          <a href="#producto">Funcionalidades</a>
          <a href="#hci">HCI</a>
          <a href="#contacto">Probar gratis</a>
        </div>
        <div>
          <div className="v4-foot-h">Empresa</div>
          <a href="#quienes">Quiénes Somos</a>
          <a href="#">Para empresas</a>
          <a href="#">Prensa</a>
        </div>
        <div>
          <div className="v4-foot-h">Soporte</div>
          <a href="#contacto">Contacto</a>
          <a href="#">Centro de ayuda</a>
          <a href="#">Estado del servicio</a>
          <a href="#">Términos · Privacidad</a>
        </div>
      </div>
      <div className="v4-foot-bar">
        <span>© 2026 Himalaya Salud · Buenos Aires, Argentina</span>
        <span style={{fontFamily:"'JetBrains Mono',monospace",letterSpacing:".02em"}}>v1.0 · Build 2026.04</span>
      </div>
    </div>
  </footer>
);

window.LandingV4 = { NavV4, Inicio, Quienes, Producto, HCI, Contacto, FootV4 };
