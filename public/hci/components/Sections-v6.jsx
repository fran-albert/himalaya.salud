/* ——— V6: Cuidar es estar cerca ——— */

const LogoV6 = () => (
  <a className="v6-logo" href="#inicio">
    <img src="assets/logo-himalaya.svg" alt="" width="42" height="42" />
    <div>
      <div className="v6-logo-name">Himalaya <em>Salud</em></div>
      <div className="v6-logo-tag">TU SALUD EN TUS MANOS</div>
    </div>
  </a>
);

const NavV6 = () => (
  <nav className="v6-nav">
    <div className="shell v6-nav-row">
      <LogoV6 />
      <div className="v6-nav-links">
        <a href="#inicio">Inicio</a>
        <a href="#quienes">Quiénes Somos</a>
        <a href="#producto">Producto</a>
        <a href="#hci">HCI</a>
        <a href="#contacto">Contacto</a>
      </div>
      <div style={{display:"flex",gap:10}}>
        <a className="v6-btn v6-btn-ghost v6-btn-sm" href="#">Ingresar</a>
        <a className="v6-btn v6-btn-warm v6-btn-sm" href="#contacto">Probar gratis</a>
      </div>
    </div>
  </nav>
);

const InicioV6 = () => (
  <section id="inicio">
    <div className="shell v6-hero">
      <div>
        <span className="v6-eye">Una app pensada para los que cuidan</span>
        <h1>Cuidar es <em>estar cerca,</em><br/>aunque estemos lejos.</h1>
        <p className="v6-hero-deck">
          Himalaya Salud reúne la historia médica de tu familia en un solo
          lugar. Estudios, recetas, emergencias — todo a mano, todo seguro,
          desde el celular.
        </p>
        <div className="v6-hero-cta">
          <a className="v6-btn v6-btn-warm" href="#contacto">
            Empezá 30 días gratis
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
          <a className="v6-btn v6-btn-ghost" href="#producto">Conocer la app</a>
        </div>
        <p className="v6-hero-trust" style={{marginTop:18}}>Sin tarjeta · Plan Estándar ARS 15.000/mes después</p>
      </div>
      <div className="v6-hero-visual">
        <img className="v6-hero-img" src="assets/hand-home-real.png" alt="App Himalaya Salud" />
        <div className="v6-postcard p1">
          <div className="v6-postcard-dot coral">M</div>
          <div>
            <div className="v6-postcard-name">Mamá · Salta</div>
            <div className="v6-postcard-meta">HOY · 09:14</div>
            <div className="v6-postcard-msg">"Tomé el remedio. Todo bien por acá."</div>
          </div>
        </div>
        <div className="v6-postcard p2">
          <div className="v6-postcard-dot mint">P</div>
          <div>
            <div className="v6-postcard-name">Papá · CABA</div>
            <div className="v6-postcard-meta">AYER · 18:32</div>
            <div className="v6-postcard-msg">Subió un análisis de sangre.</div>
          </div>
        </div>
        <div className="v6-postcard p3">
          <div className="v6-postcard-dot teal">A</div>
          <div>
            <div className="v6-postcard-name">Abuela · Mendoza</div>
            <div className="v6-postcard-meta">MIÉ · 20:05</div>
            <div className="v6-postcard-msg">Botón presionado. Aviso enviado.</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* CONEXIÓN — Mapa de la familia distribuida */
const ConexionV6 = () => (
  <section id="conexion">
    <div className="shell v6-conexion-grid">
      <div className="v6-conexion-text">
        <span className="v6-eye">Una sola app, toda la familia</span>
        <h2>Vinculá hasta cinco personas. Acompañá la salud de todos sin invadir su <em>privacidad.</em></h2>
        <p>
          Mamá en Salta, papá en CABA, los abuelos en Mendoza. Cada uno con
          sus permisos y tu acceso definido. Si algo cambia — un estudio
          subido, un botón presionado, un nuevo médico — todos los que tienen
          que enterarse, se enteran.
        </p>
        <div style={{marginTop:32,display:"flex",gap:12,flexWrap:"wrap"}}>
          <a className="v6-btn v6-btn-primary v6-btn-sm" href="#producto">Cómo funciona la gestión familiar</a>
        </div>
      </div>
      <div className="v6-map">
        <div className="v6-map-grid"></div>
        <svg className="v6-map-svg" viewBox="0 0 500 460" preserveAspectRatio="none">
          <line className="v6-map-line" x1="250" y1="230" x2="120" y2="60" />
          <line className="v6-map-line" x1="250" y1="230" x2="380" y2="80" />
          <line className="v6-map-line" x1="250" y1="230" x2="80" y2="380" />
          <line className="v6-map-line" x1="250" y1="230" x2="420" y2="370" />
          <line className="v6-map-line" x1="250" y1="230" x2="450" y2="240" />
        </svg>
        <div className="v6-map-pin p-center">
          <div className="v6-map-pin-dot center">VOS</div>
          <div className="v6-map-pin-name">Tu cuenta</div>
          <div className="v6-map-pin-loc">CABA</div>
        </div>
        <div className="v6-map-pin p-mama">
          <div className="v6-map-pin-dot coral">M</div>
          <div className="v6-map-pin-name">Mamá</div>
          <div className="v6-map-pin-loc">Salta</div>
        </div>
        <div className="v6-map-pin p-papa">
          <div className="v6-map-pin-dot">P</div>
          <div className="v6-map-pin-name">Papá</div>
          <div className="v6-map-pin-loc">CABA</div>
        </div>
        <div className="v6-map-pin p-hija">
          <div className="v6-map-pin-dot">L</div>
          <div className="v6-map-pin-name">Lucía</div>
          <div className="v6-map-pin-loc">Córdoba</div>
        </div>
        <div className="v6-map-pin p-hijo">
          <div className="v6-map-pin-dot">N</div>
          <div className="v6-map-pin-name">Nico</div>
          <div className="v6-map-pin-loc">La Plata</div>
        </div>
        <div className="v6-map-pin p-abuela">
          <div className="v6-map-pin-dot coral">A</div>
          <div className="v6-map-pin-name">Abuela</div>
          <div className="v6-map-pin-loc">Mendoza</div>
        </div>
        <div className="v6-map-tag">Hasta 5 personas vinculadas</div>
      </div>
    </div>
  </section>
);

/* QUIÉNES SOMOS — manifiesto centrado */
const QuienesV6 = () => (
  <section id="quienes">
    <div className="shell">
      <div className="v6-manifest">
        <span className="v6-eye" style={{justifyContent:"center"}}>Quiénes somos</span>
        <h2>Argentinos cuidando<br/><em>a los argentinos.</em></h2>
        <p className="v6-manifest-body">
          Empezamos con una pregunta: <strong>¿por qué la salud personal está
          tan rota?</strong> Estudios perdidos en cajones. Análisis repetidos
          porque "no encuentro el anterior". Llamadas a las dos de la mañana
          sin saber qué contar.
          <br/><br/>
          Construimos Himalaya Salud para que la información médica esté donde
          tiene que estar — <strong>con vos, y con los que cuidás.</strong>
          Hecha en Buenos Aires, con servidores en Argentina, soporte humano
          y datos que son tuyos.
        </p>
        <div className="v6-signed">— el equipo</div>
        <div className="v6-signed-meta">Buenos Aires · 14 personas · desde 2024</div>
      </div>
    </div>
  </section>
);

/* PRODUCTO — narrativo en bloques */
const PRODUCTO_V6 = [
  {
    n:"01",
    title:<>Portal del paciente. <em>Tu salud,<br/>ordenada.</em></>,
    desc:"Estudios, análisis, recetas, imágenes médicas, antecedentes. Todo etiquetado, buscable, accesible desde el celular. Sin papeles, sin perderse nada.",
    bullets:[
      "Sin límite de almacenamiento",
      "Etiquetá por tipo, especialidad o profesional",
      "Compartí con un médico nuevo en un toque",
    ],
    img:"assets/screen-portal-real.jpg",
    tag:"Portal Paciente"
  },
  {
    n:"02",
    title:<>Historia clínica <em>interoperable.</em></>,
    desc:"La HCI es el corazón del producto: una sola historia médica que vos llevás con vos, y que cualquier prestador certificado puede leer o escribir bajo estándares abiertos (HL7 FHIR), siempre con tu permiso.",
    bullets:[
      "Antecedentes, diagnósticos, evoluciones, documentos clínicos",
      "Datos útiles ante emergencias, disponibles al instante",
      "Trazabilidad completa de quién accede y cuándo",
    ],
    img:"assets/screen-etiquetas-real.jpg",
    tag:"HCI · Producto principal"
  },
  {
    n:"03",
    title:<>Botón de <em>emergencia.</em></>,
    desc:"Mantenelo presionado tres segundos. La app envía tu ubicación, tus datos médicos relevantes y avisa a tus contactos de emergencia. Pensado para los segundos en los que cada segundo cuenta.",
    bullets:[
      "Ubicación en tiempo real",
      "Datos médicos críticos disponibles para asistencia",
      "Notificación a contactos de emergencia",
    ],
    img:"assets/screen-panico-real.jpg",
    tag:"Botón de pánico"
  },
  {
    n:"04",
    title:<>Servicios de salud <em>cerca tuyo.</em></>,
    desc:"Médicos, clínicas, sanatorios, farmacias, especialidades, obras sociales. Todo geolocalizado y filtrable por zona, cobertura o tipo de atención.",
    bullets:[
      "Información actualizada y verificada",
      "Filtrá por obra social, especialidad o cercanía",
      "Útil cuando estás de viaje o cambiás de zona",
    ],
    img:"assets/screen-inicio-real.png",
    tag:"Servicios + Geo"
  },
];

const ProductoV6 = () => (
  <section id="producto">
    <div className="shell">
      <div className="v6-prod-head">
        <div>
          <span className="v6-eye">Producto</span>
          <h2 style={{marginTop:18}}>Lo que <em>hacemos.</em></h2>
        </div>
        <p style={{maxWidth:"50ch",fontSize:17}}>
          Un Plan Estándar único — ARS 15.000 al mes, con 30 días gratis.
          Incluye todas las funcionalidades. Sin tiers, sin upsells, sin
          paywalls escondidos.
        </p>
      </div>

      <div className="v6-prod-stack">
        {PRODUCTO_V6.map(p => (
          <div className="v6-prod-row" key={p.n}>
            <div className="v6-prod-content">
              <div className="v6-prod-num">{p.n}</div>
              <h3 className="v6-prod-title">{p.title}</h3>
              <p className="v6-prod-desc">{p.desc}</p>
              <div className="v6-prod-bullets">
                {p.bullets.map((b,i)=> <div className="v6-prod-bullet" key={i}>{b}</div>)}
              </div>
            </div>
            <div className="v6-prod-visual">
              <div className="v6-mock">
                <span className="v6-mock-tag">{p.tag}</span>
                <img src={p.img} alt={p.tag} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="v6-b2b-strip" id="hci">
        <div>
          <div className="v6-b2b-strip-tag">Línea B2B · Instituciones</div>
          <h3>¿Sos clínica, sanatorio o centro médico?</h3>
          <p>
            Himalaya también tiene una línea para instituciones: turnero,
            tótem de autogestión, portal paciente institucional, gestión de
            estudios, médicos, especialidades, obras sociales y la HCI integrada
            con tus sistemas internos.
          </p>
        </div>
        <div>
          <a href="#contacto">
            Hablar con ventas
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </div>
      </div>
    </div>
  </section>
);

const ContactoV6 = () => (
  <section id="contacto">
    <div className="shell v6-contact">
      <div>
        <span className="v6-eye">Contacto · Soporte</span>
        <h2>Hablá con <em>una persona,</em> no con un bot.</h2>
        <p style={{marginTop:18,maxWidth:"40ch"}}>
          Equipo en Buenos Aires. Respondemos en menos de 24 horas hábiles.
          Elegí el canal que más te convenga.
        </p>
        <div className="v6-contact-channels">
          <a className="v6-channel" href="mailto:hola@himalayasalud.com.ar">
            <div className="v6-channel-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 5L2 7"/></svg>
            </div>
            <div>
              <p className="v6-channel-title">Email</p>
              <p className="v6-channel-sub">hola@himalayasalud.com.ar</p>
            </div>
            <svg className="v6-channel-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
          <a className="v6-channel" href="#">
            <div className="v6-channel-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z"/></svg>
            </div>
            <div>
              <p className="v6-channel-title">WhatsApp</p>
              <p className="v6-channel-sub">+54 11 5555 5555 · Lun a Vie 9–18h</p>
            </div>
            <svg className="v6-channel-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
          <a className="v6-channel" href="#">
            <div className="v6-channel-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14 9V5a3 3 0 0 0-6 0v4M5 9h14l-1 12H6z"/></svg>
            </div>
            <div>
              <p className="v6-channel-title">Centro de ayuda</p>
              <p className="v6-channel-sub">Tutoriales, FAQ y guías</p>
            </div>
            <svg className="v6-channel-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </div>
      </div>

      <form className="v6-form" onSubmit={(e)=>e.preventDefault()}>
        <h3>Escribinos.</h3>
        <p style={{fontFamily:"var(--v6-serif)",fontStyle:"italic",fontSize:14,color:"var(--v6-ink-2)",margin:"0 0 28px"}}>
          Respondemos en menos de 24 horas hábiles.
        </p>
        <div className="v6-form-row cols">
          <div>
            <label className="v6-form-label">Nombre</label>
            <input className="v6-form-input" placeholder="Tu nombre" />
          </div>
          <div>
            <label className="v6-form-label">Email</label>
            <input className="v6-form-input" placeholder="vos@email.com" type="email" />
          </div>
        </div>
        <div className="v6-form-row" style={{marginTop:14}}>
          <div>
            <label className="v6-form-label">Soy</label>
            <select className="v6-form-select" defaultValue="">
              <option value="" disabled>Elegí una opción</option>
              <option>Persona / Familia</option>
              <option>Profesional de la salud</option>
              <option>Clínica / Sanatorio</option>
              <option>Obra social / Prepaga</option>
              <option>Empresa</option>
              <option>Prensa</option>
            </select>
          </div>
        </div>
        <div className="v6-form-row" style={{marginTop:14}}>
          <div>
            <label className="v6-form-label">Mensaje</label>
            <textarea className="v6-form-textarea" placeholder="Contanos en qué podemos ayudarte" />
          </div>
        </div>
        <div className="v6-form-actions">
          <span className="v6-form-note">Tus datos se procesan según nuestra política de privacidad.</span>
          <button className="v6-btn v6-btn-warm" type="submit">
            Enviar mensaje
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </button>
        </div>
      </form>
    </div>
  </section>
);

const FootV6 = () => (
  <footer className="v6-foot">
    <div className="shell">
      <div className="v6-foot-row">
        <div>
          <LogoV6 />
          <p className="v6-foot-tag">
            "Software de salud personal hecho en Argentina, para que la
            información esté donde tiene que estar — con vos, y con los que
            cuidás."
          </p>
        </div>
        <div>
          <div className="v6-foot-h">Producto</div>
          <a href="#producto">Portal Paciente</a>
          <a href="#producto">Historia Clínica</a>
          <a href="#producto">Botón de emergencia</a>
          <a href="#producto">Servicios de salud</a>
        </div>
        <div>
          <div className="v6-foot-h">Empresa</div>
          <a href="#quienes">Quiénes Somos</a>
          <a href="#hci">Para instituciones</a>
          <a href="#">Prensa</a>
        </div>
        <div>
          <div className="v6-foot-h">Soporte</div>
          <a href="#contacto">Contacto</a>
          <a href="#">Centro de ayuda</a>
          <a href="#">Términos · Privacidad</a>
        </div>
      </div>
      <div className="v6-foot-bar">
        <span>© 2026 HIMALAYA SALUD · BUENOS AIRES, ARGENTINA</span>
        <span>v1.0 · BUILD 2026.04</span>
      </div>
    </div>
  </footer>
);

window.LandingV6 = { NavV6, InicioV6, ConexionV6, QuienesV6, ProductoV6, ContactoV6, FootV6 };
