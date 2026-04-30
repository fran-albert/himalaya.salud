/* ——— V5: Cálida + Humana — Sections ——— */

const LogoV5 = () => (
  <a className="v5-logo" href="#inicio">
    <img src="assets/logo-himalaya.svg" alt="" width="42" height="42" />
    <div>
      <div className="v5-logo-name">Himalaya <em>Salud</em></div>
      <div className="v5-logo-tag">TU SALUD EN TUS MANOS</div>
    </div>
  </a>
);

const NavV5 = () => (
  <nav className="v5-nav">
    <div className="shell v5-nav-row">
      <LogoV5 />
      <div className="v5-nav-links">
        <a href="#inicio">Inicio</a>
        <a href="#quienes">Quiénes Somos</a>
        <a href="#producto">Producto</a>
        <a href="#hci">Próximo lanzamiento</a>
        <a href="#contacto">Contacto</a>
      </div>
      <div style={{display:"flex",gap:10}}>
        <a className="v5-btn v5-btn-ghost v5-btn-sm" href="#">Ingresar</a>
        <a className="v5-btn v5-btn-warm v5-btn-sm" href="#contacto">Probar gratis</a>
      </div>
    </div>
  </nav>
);

const InicioV5 = () => (
  <section id="inicio">
    <div className="shell v5-hero">
      <div>
        <span className="v5-eye">Una app pensada para los que cuidan</span>
        <h1>La salud, donde tiene que <em>estar.</em></h1>
        <p className="v5-hero-deck">
          Himalaya Salud guarda tus estudios, vincula a tu familia y, si algo
          pasa, te avisa con un toque. Hecho en Argentina, para los argentinos.
        </p>
        <div className="v5-hero-cta">
          <a className="v5-btn v5-btn-warm" href="#contacto">
            Empezá 30 días gratis
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
          <a className="v5-btn v5-btn-ghost" href="#producto">Conocer más</a>
        </div>
        <p className="v5-hero-trust" style={{marginTop:18}}>Sin tarjeta · Plan Estándar ARS 15.000/mes después</p>
      </div>
      <div className="v5-hero-visual">
        <img className="v5-hero-img" src="assets/hand-home-real.png" alt="App Himalaya Salud" />
        <div className="v5-hero-postcard p1">
          <div className="v5-postcard-dot coral">M</div>
          <div>
            <div style={{fontWeight:600}}>Mamá tomó su remedio</div>
            <div style={{fontSize:11,color:"var(--v5-ink-2)",marginTop:2}}>hace 2 min · Salta</div>
          </div>
        </div>
        <div className="v5-hero-postcard p2">
          <div className="v5-postcard-dot mint">P</div>
          <div>
            <div style={{fontWeight:600}}>Papá subió un análisis</div>
            <div style={{fontSize:11,color:"var(--v5-ink-2)",marginTop:2}}>hoy · CABA</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const QuienesV5 = () => (
  <section id="quienes">
    <div className="shell v5-about">
      <div className="v5-about-photo">
        <span className="v5-about-photo-tag">FOTO · El equipo en BA</span>
        <div className="v5-about-photo-cap">
          “Empezamos con una pregunta — ¿por qué la salud personal está tan rota?”
        </div>
      </div>
      <div>
        <span className="v5-eye">Quiénes somos</span>
        <h2>Argentinos, <em>obsesionados</em> con la salud personal.</h2>
        <p style={{marginTop:18,maxWidth:"46ch"}}>
          Nacimos en Buenos Aires. Médicos, ingenieras, diseñadores y
          cuidadores que vimos a nuestros viejos perder estudios, repetir
          análisis, contar la misma historia diez veces.
        </p>
        <p style={{marginTop:18,maxWidth:"46ch"}}>
          Construimos Himalaya para que vos —y los que querés cuidar— tengan
          todo a mano. Servidores en Argentina, soporte humano, datos tuyos.
        </p>
        <div className="v5-about-stat-row">
          <div>
            <div className="v5-stat-num"><em>2024</em></div>
            <div className="v5-stat-label">Año de fundación, Buenos Aires</div>
          </div>
          <div>
            <div className="v5-stat-num">14</div>
            <div className="v5-stat-label">Personas en el equipo</div>
          </div>
          <div>
            <div className="v5-stat-num"><em>100%</em></div>
            <div className="v5-stat-label">Argentino · Servidores locales</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PRODUCTO_V5 = [
  {n:"01",t:"Botón de pánico",e:"ilimitado",d:"Mantenelo presionado tres segundos. Avisamos a tus contactos y a los servicios de emergencia con tu ubicación y datos médicos relevantes.",tag:"Disponible"},
  {n:"02",t:"Portal del paciente",e:"sin límites",d:"Estudios, análisis, recetas e imágenes médicas. Etiquetá, buscá, compartí cuando lo necesites — sin restricción de almacenamiento.",tag:"Disponible"},
  {n:"03",t:"Servicios de salud",e:"cercanos",d:"Médicos, clínicas y centros de salud cerca tuyo, en cualquier parte del país. Información actualizada y verificada.",tag:"Disponible"},
  {n:"04",t:"Cuidado familiar",e:"vinculado",d:"Vinculá hasta cinco personas a tu cuenta — viejos, hijos, hermanos. Una sola app, toda la familia.",tag:"Disponible"},
  {n:"05",t:"Soporte humano",e:"prioritario",d:"Equipo argentino. Respuestas en menos de 24 horas hábiles. Sin chatbots.",tag:"Disponible"},
];

const ProductoV5 = () => (
  <section id="producto">
    <div className="shell">
      <div className="v5-prod-head">
        <div>
          <span className="v5-eye">Producto</span>
          <h2 style={{marginTop:18}}>Cinco cosas, hechas <em>como deben.</em></h2>
        </div>
        <p style={{maxWidth:"50ch"}}>
          Plan Estándar único — ARS 15.000 al mes con 30 días gratis. Sin
          tiers, sin upsells, sin sorpresas. Lo que ves es lo que tenés.
        </p>
      </div>
      <div className="v5-prod-list">
        {PRODUCTO_V5.map(p => (
          <div className="v5-prod-item" key={p.n}>
            <div className="v5-prod-num">{p.n}</div>
            <h3 className="v5-prod-title">{p.t}<br/><em>{p.e}</em></h3>
            <p className="v5-prod-desc">{p.d}</p>
            <div className="v5-prod-meta">
              <span className="v5-prod-tag">{p.tag}</span>
              <a className="v5-prod-link" href="#">Conocer más →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HCIV5 = () => (
  <section id="hci">
    <div className="shell">
      <div className="v5-hci-status">★ Próximo lanzamiento · Q4 2026</div>
      <span className="v5-eye">Historia Clínica Interoperable</span>
      <h2 style={{marginTop:14}}>Tu historia <em>te sigue,</em><br/>no al revés.</h2>
      <p className="v5-deck">
        Hoy tu información médica vive en pedazos: una clínica acá, un
        laboratorio allá, un consultorio en otra obra social. La HCI cambia
        eso — los datos viajan con vos, entre prestadores, en tiempo real,
        siempre con tu permiso.
      </p>

      <div className="v5-hci-metaphor">
        <div className="v5-hci-stage">
          <svg viewBox="0 0 600 440" preserveAspectRatio="none">
            <path className="v5-hci-trail"
              d="M 50 280 Q 130 100 180 80 T 320 260 T 460 80 T 560 280" />
          </svg>
          <div className="v5-hci-stop s1">
            <div className="v5-hci-stop-icon">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="8" r="4"/><path d="M3 22a9 9 0 0 1 18 0"/></svg>
            </div>
            Médico
          </div>
          <div className="v5-hci-stop s2">
            <div className="v5-hci-stop-icon">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 4h6v6H9zM9 14h.01M15 14h.01"/></svg>
            </div>
            Laboratorio
          </div>
          <div className="v5-hci-stop s3">
            <div className="v5-hci-stop-icon">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 14c1.5-1.5 3-3.5 3-6a4 4 0 1 0-8 0M9 14c-1.5-1.5-3-3.5-3-6a4 4 0 1 1 8 0"/></svg>
            </div>
            Clínica
          </div>
          <div className="v5-hci-stop s4">
            <div className="v5-hci-stop-icon">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 14V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v8M3 14h18"/></svg>
            </div>
            Obra Social
          </div>
          <div className="v5-hci-stop s5">
            <div className="v5-hci-stop-icon">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
            </div>
            Farmacia
          </div>
          <div className="v5-hci-walker">VOS</div>
        </div>

        <div className="v5-hci-text">
          <h3>Cómo funciona una HCI</h3>
          <p style={{maxWidth:"42ch"}}>
            Una historia clínica interoperable es un repositorio único, cifrado y
            asociado a tu CUIL, que cualquier prestador certificado puede leer
            o escribir bajo estándares abiertos.
          </p>
          <div className="v5-hci-steps">
            <div className="v5-hci-step">
              <div className="v5-hci-step-num">i.</div>
              <div>
                <strong>Una sola historia</strong>
                <p style={{fontSize:14}}>Estudios, recetas, diagnósticos y tratamientos en un único lugar — no diez sistemas que no se hablan.</p>
              </div>
            </div>
            <div className="v5-hci-step">
              <div className="v5-hci-step-num">ii.</div>
              <div>
                <strong>Estándares abiertos (HL7 FHIR)</strong>
                <p style={{fontSize:14}}>Los prestadores leen y escriben con un protocolo común. Sin formatos propietarios, sin lock-in.</p>
              </div>
            </div>
            <div className="v5-hci-step">
              <div className="v5-hci-step-num">iii.</div>
              <div>
                <strong>Tu permiso, siempre</strong>
                <p style={{fontSize:14}}>Cada acceso requiere tu consentimiento. Vos decidís qué se comparte, con quién y por cuánto tiempo.</p>
              </div>
            </div>
            <div className="v5-hci-step">
              <div className="v5-hci-step-num">iv.</div>
              <div>
                <strong>Sin costo extra</strong>
                <p style={{fontSize:14}}>Cuando lancemos la HCI, está incluida en el Plan Estándar. Sin paywalls, sin tier premium.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ContactoV5 = () => (
  <section id="contacto">
    <div className="shell v5-contact">
      <div>
        <span className="v5-eye">Contacto · Soporte</span>
        <h2 style={{marginTop:18}}>Hablá con <em>una persona,</em> no con un bot.</h2>
        <p style={{marginTop:18,maxWidth:"40ch"}}>
          Equipo en Buenos Aires. Respondemos en menos de 24 horas hábiles.
          Elegí el canal que más te convenga.
        </p>
        <div className="v5-contact-channels">
          <a className="v5-channel" href="mailto:hola@himalayasalud.com.ar">
            <div className="v5-channel-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 5L2 7"/></svg>
            </div>
            <div>
              <p className="v5-channel-title">Email</p>
              <p className="v5-channel-sub">hola@himalayasalud.com.ar</p>
            </div>
            <svg className="v5-channel-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
          <a className="v5-channel" href="#">
            <div className="v5-channel-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z"/></svg>
            </div>
            <div>
              <p className="v5-channel-title">WhatsApp</p>
              <p className="v5-channel-sub">+54 11 5555 5555 · Lun a Vie 9–18h</p>
            </div>
            <svg className="v5-channel-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
          <a className="v5-channel" href="#">
            <div className="v5-channel-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01"/></svg>
            </div>
            <div>
              <p className="v5-channel-title">Centro de ayuda</p>
              <p className="v5-channel-sub">Tutoriales, FAQ y guías</p>
            </div>
            <svg className="v5-channel-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </div>
      </div>

      <form className="v5-form" onSubmit={(e)=>e.preventDefault()}>
        <h3>Escribinos.</h3>
        <p style={{fontFamily:"var(--v5-serif)",fontStyle:"italic",fontSize:14,color:"var(--v5-ink-2)",margin:"0 0 28px"}}>
          Respondemos en menos de 24 horas hábiles.
        </p>
        <div className="v5-form-row cols">
          <div>
            <label className="v5-form-label">Nombre</label>
            <input className="v5-form-input" placeholder="Tu nombre" />
          </div>
          <div>
            <label className="v5-form-label">Email</label>
            <input className="v5-form-input" placeholder="vos@email.com" type="email" />
          </div>
        </div>
        <div className="v5-form-row" style={{marginTop:14}}>
          <div>
            <label className="v5-form-label">Soy</label>
            <select className="v5-form-select" defaultValue="">
              <option value="" disabled>Elegí una opción</option>
              <option>Persona / Familia</option>
              <option>Profesional de la salud</option>
              <option>Obra social / Prepaga</option>
              <option>Empresa</option>
              <option>Prensa</option>
            </select>
          </div>
        </div>
        <div className="v5-form-row" style={{marginTop:14}}>
          <div>
            <label className="v5-form-label">Mensaje</label>
            <textarea className="v5-form-textarea" placeholder="Contanos en qué podemos ayudarte" />
          </div>
        </div>
        <div className="v5-form-actions">
          <span className="v5-form-note">Tus datos se procesan según nuestra política de privacidad.</span>
          <button className="v5-btn v5-btn-warm" type="submit">
            Enviar mensaje
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </button>
        </div>
      </form>
    </div>
  </section>
);

const FootV5 = () => (
  <footer className="v5-foot">
    <div className="shell">
      <div className="v5-foot-row">
        <div>
          <LogoV5 />
          <p className="v5-foot-tag">
            “Software de salud personal hecho en Argentina, para que la salud
            esté donde tiene que estar — con vos.”
          </p>
        </div>
        <div>
          <div className="v5-foot-h">Producto</div>
          <a href="#producto">Funcionalidades</a>
          <a href="#hci">HCI</a>
          <a href="#contacto">Probar gratis</a>
        </div>
        <div>
          <div className="v5-foot-h">Empresa</div>
          <a href="#quienes">Quiénes Somos</a>
          <a href="#">Para empresas</a>
          <a href="#">Prensa</a>
        </div>
        <div>
          <div className="v5-foot-h">Soporte</div>
          <a href="#contacto">Contacto</a>
          <a href="#">Centro de ayuda</a>
          <a href="#">Términos · Privacidad</a>
        </div>
      </div>
      <div className="v5-foot-bar">
        <span>© 2026 HIMALAYA SALUD · BUENOS AIRES, ARGENTINA</span>
        <span>v1.0 · BUILD 2026.04</span>
      </div>
    </div>
  </footer>
);

window.LandingV5 = { NavV5, InicioV5, QuienesV5, ProductoV5, HCIV5, ContactoV5, FootV5 };
