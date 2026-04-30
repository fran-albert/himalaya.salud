/* ——— V7: Cuando importa, importa rápido ——— */

const LogoV7 = () => (
  <a className="v7-logo" href="#inicio">
    <img src="assets/logo-himalaya.svg" alt="" width="42" height="42" />
    <div>
      <div className="v7-logo-name">Himalaya <em>Salud</em></div>
      <div className="v7-logo-tag">TU SALUD EN TUS MANOS</div>
    </div>
  </a>
);

const NavV7 = () => (
  <nav className="v7-nav">
    <div className="shell v7-nav-row">
      <LogoV7 />
      <div className="v7-nav-links">
        <a href="#inicio">Inicio</a>
        <a href="#quienes">Quiénes Somos</a>
        <a href="#producto">Producto</a>
        <a href="#hci">HCI</a>
        <a href="#contacto">Contacto</a>
      </div>
      <div style={{display:"flex",gap:10}}>
        <a className="v7-btn v7-btn-ghost v7-btn-sm" href="#">Ingresar</a>
        <a className="v7-btn v7-btn-danger v7-btn-sm" href="#contacto">Probar gratis</a>
      </div>
    </div>
  </nav>
);

const InicioV7 = () => (
  <section id="inicio">
    <div className="shell v7-hero-grid">
      <div>
        <span className="v7-eye">Cuando importa, importa rápido</span>
        <h1>Tres segundos. Eso es todo lo que <em>necesita</em> tu familia.</h1>
        <p className="v7-hero-deck">
          Mantenés presionado el botón. La app envía tu ubicación, tus datos
          médicos y avisa a tus contactos. La tranquilidad de saber que, si
          algo pasa, no estás solo.
        </p>
        <div className="v7-hero-cta">
          <a className="v7-btn v7-btn-danger" href="#contacto">
            Empezá 30 días gratis
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
          <a className="v7-btn v7-btn-ghost" href="#producto">Ver el producto</a>
        </div>
        <p className="v7-hero-trust" style={{marginTop:18}}>Sin tarjeta · Plan Estándar ARS 15.000/mes después</p>
      </div>

      <div className="v7-clock">
        <div className="v7-clock-ts">
          <span>MIÉ · 23 ABR · 2026</span>
          <span className="live">EN VIVO</span>
        </div>
        <div className="v7-clock-time">23:<em>14</em></div>
        <div className="v7-clock-where">
          <div className="v7-clock-place">
            Hogar de mamá
            <small>Salta capital · 1.535 km</small>
          </div>
        </div>
        <div className="v7-clock-tl">
          <div className="v7-tl-event">
            <span className="v7-tl-time">22:48</span>
            <span className="v7-tl-msg">Tomó su medicación de la noche</span>
            <span className="v7-tl-status">OK</span>
          </div>
          <div className="v7-tl-event alert">
            <span className="v7-tl-time">23:14</span>
            <span className="v7-tl-msg">Botón presionado · <em>aviso enviado</em></span>
            <span className="v7-tl-status">SOS</span>
          </div>
          <div className="v7-tl-event">
            <span className="v7-tl-time">23:14</span>
            <span className="v7-tl-msg">Llamado a emergencias 107</span>
            <span className="v7-tl-status">+15s</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TranquilidadV7 = () => (
  <section id="tranquilidad">
    <div className="shell v7-tranq-grid">
      <div className="v7-sos-stage">
        <span className="v7-sos-tag">Botón de pánico</span>
        <div className="v7-sos-button-wrap">
          <div className="v7-sos-ring"></div>
          <div className="v7-sos-ring r2"></div>
          <div className="v7-sos-ring r3"></div>
          <div className="v7-sos-button">
            <span className="v7-sos-button-icon">SOS</span>
            <span>3 seg</span>
          </div>
        </div>
        <div className="v7-sos-stage-cap">
          "Mantenelo presionado. Mientras vos respirás, la app ya hizo todo lo que tenía que hacer."
        </div>
      </div>

      <div className="v7-tranq-text">
        <span className="v7-eye">El botón que esperamos no usar nunca</span>
        <h2>La <em>tranquilidad</em><br/>de no estar solo.</h2>
        <p>
          La función más importante de Himalaya es la que esperás no usar
          jamás. Pero cuando la necesitás — o la necesitan tus viejos —
          tres segundos cambian todo.
        </p>

        <div className="v7-tranq-steps">
          <div className="v7-tranq-step">
            <div className="v7-tranq-step-num">i.</div>
            <div>
              <strong>Activación manual</strong>
              <p style={{fontSize:14}}>Mantené presionado tres segundos desde la pantalla principal. Sin desbloquear, sin abrir menús.</p>
            </div>
          </div>
          <div className="v7-tranq-step">
            <div className="v7-tranq-step-num">ii.</div>
            <div>
              <strong>Envío inmediato</strong>
              <p style={{fontSize:14}}>Ubicación en tiempo real, datos médicos relevantes y aviso a tus contactos de emergencia.</p>
            </div>
          </div>
          <div className="v7-tranq-step">
            <div className="v7-tranq-step-num">iii.</div>
            <div>
              <strong>Información crítica disponible</strong>
              <p style={{fontSize:14}}>Alergias, medicación, antecedentes — disponibles para los servicios de asistencia desde el primer minuto.</p>
            </div>
          </div>
          <div className="v7-tranq-step">
            <div className="v7-tranq-step-num">iv.</div>
            <div>
              <strong>Pensado para integración futura</strong>
              <p style={{fontSize:14}}>Diseñado para conectarse con instituciones, prestadores y servicios de emergencia.</p>
            </div>
          </div>
        </div>

        <div className="v7-tranq-stats">
          <div>
            <div className="v7-stat-num"><em>3s</em></div>
            <div className="v7-stat-label">Activación SOS</div>
          </div>
          <div>
            <div className="v7-stat-num">5</div>
            <div className="v7-stat-label">Contactos de emergencia</div>
          </div>
          <div>
            <div className="v7-stat-num"><em>24/7</em></div>
            <div className="v7-stat-label">Disponible siempre</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const QuienesV7 = () => (
  <section id="quienes">
    <div className="shell v7-about">
      <div>
        <span className="v7-eye">Quiénes somos</span>
        <h2>Argentinos cuidando<br/><em>a los argentinos.</em></h2>
        <p className="v7-about-body">
          Empezamos con una pregunta — <em>¿por qué la salud personal está
          tan rota?</em> Estudios perdidos, análisis repetidos, llamadas a
          las dos de la mañana sin saber qué contar.
        </p>
        <p className="v7-about-body" style={{marginTop:18}}>
          Construimos Himalaya para que la información esté donde tiene que
          estar — con vos, y con los que cuidás. Hecho en Buenos Aires, con
          servidores en Argentina, soporte humano y datos que son tuyos.
        </p>
      </div>
      <div className="v7-about-photo">
        <span className="v7-about-photo-tag">FOTO · Equipo en BA</span>
        <div className="v7-about-photo-cap">
          "Catorce personas. Médicos, ingenieras, diseñadores, cuidadores. Trabajando desde 2024."
        </div>
      </div>
    </div>
  </section>
);

const PRODUCTO_V7 = [
  {n:"01",t:<>Portal del paciente</>,d:"Estudios, análisis, recetas, antecedentes. Etiquetado, buscable, sin límites de almacenamiento.",meta:["Disponible","Plan Estándar"]},
  {n:"02",t:<>Botón de <em>emergencia</em></>,d:"Ubicación, datos médicos y aviso a contactos en tres segundos. Pensado para los segundos en los que cada segundo cuenta.",meta:["Destacado","Plan Estándar"],featured:true},
  {n:"03",t:<>Servicios de salud</>,d:"Médicos, clínicas, sanatorios, farmacias, obras sociales — geolocalizados y filtrables por zona o cobertura.",meta:["Disponible","Plan Estándar"]},
  {n:"04",t:<>Geolocalización</>,d:"Centros de atención cercanos, mejor respuesta ante emergencia, vinculación según cercanía.",meta:["Disponible","Plan Estándar"]},
  {n:"05",t:<>Gestión <em>familiar</em></>,d:"Vinculá hasta cinco personas. Permisos diferenciados, accesos controlados, una sola cuenta para acompañar a quienes cuidás.",meta:["Disponible","Plan Estándar"]},
  {n:"06",t:<>Seguridad y privacidad</>,d:"Encriptación, trazabilidad de accesos, consentimiento del paciente, cumplimiento normativo. Datos sensibles, tratados como tales.",meta:["Disponible","Plan Estándar"]},
];

const ProductoV7 = () => (
  <section id="producto">
    <div className="shell">
      <div className="v7-prod-head">
        <span className="v7-eye">Producto · Plan Estándar</span>
        <h2>Una <em>sola</em> app.<br/>Todo lo que tu familia necesita.</h2>
        <p>
          ARS 15.000 al mes con 30 días gratis. Sin tiers, sin upsells. Lo
          que ves es lo que tenés.
        </p>
      </div>

      <div className="v7-prod-grid">
        {PRODUCTO_V7.map(p => (
          <div className={"v7-prod-card"+(p.featured?" featured":"")} key={p.n}>
            <div className="v7-prod-num">{p.n}</div>
            <h3 className="v7-prod-title">{p.t}</h3>
            <p className="v7-prod-desc">{p.d}</p>
            <div className="v7-prod-meta">
              <span>{p.meta[0]}</span>
              <span>{p.meta[1]}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="v7-hci-panel" id="hci">
        <div>
          <div className="v7-hci-tag">★ El corazón del producto</div>
          <h3>Historia Clínica <em>Interoperable.</em></h3>
          <p style={{maxWidth:"42ch"}}>
            Una sola historia médica que vos llevás con vos. Cualquier
            prestador certificado puede leer o escribir bajo estándares
            abiertos (HL7 FHIR), siempre con tu permiso explícito.
          </p>
          <div className="v7-hci-bullets">
            <div className="v7-hci-bullet">Antecedentes, diagnósticos, evoluciones, documentos clínicos</div>
            <div className="v7-hci-bullet">Datos disponibles para asistencia ante emergencias</div>
            <div className="v7-hci-bullet">Trazabilidad completa de accesos · Tu consentimiento, siempre</div>
            <div className="v7-hci-bullet">Cumplimiento normativo · Datos en servidores Argentina</div>
          </div>
        </div>

        <div className="v7-hci-visual">
          <div className="v7-hci-doc">
            <div className="v7-hci-row">
              <div className="v7-hci-row-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>
              </div>
              <div>
                <div className="v7-hci-row-tit">Análisis de sangre · 2026-04</div>
                <div className="v7-hci-row-sub">Hospital Italiano · Dra. M. Suárez</div>
              </div>
              <span className="v7-hci-row-tag">SYNC</span>
            </div>
            <div className="v7-hci-row">
              <div className="v7-hci-row-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 2"/></svg>
              </div>
              <div>
                <div className="v7-hci-row-tit">Receta · Losartán 50mg</div>
                <div className="v7-hci-row-sub">Renovación mensual · Vence 2026-05-12</div>
              </div>
              <span className="v7-hci-row-tag">ACTIVO</span>
            </div>
            <div className="v7-hci-row">
              <div className="v7-hci-row-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M21 11.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11"/><path d="m3 6 9 7 9-7"/></svg>
              </div>
              <div>
                <div className="v7-hci-row-tit">Ecografía abdominal</div>
                <div className="v7-hci-row-sub">Diagnóstico Maipú · 2026-03-08</div>
              </div>
              <span className="v7-hci-row-tag">SYNC</span>
            </div>
            <div className="v7-hci-row">
              <div className="v7-hci-row-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 22s8-4 8-12V5l-8-3-8 3v5c0 8 8 12 8 12z"/></svg>
              </div>
              <div>
                <div className="v7-hci-row-tit">Antecedente: Hipertensión</div>
                <div className="v7-hci-row-sub">Validado por Dr. F. Romero · Cardiología</div>
              </div>
              <span className="v7-hci-row-tag">CERT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ContactoV7 = () => (
  <section id="contacto">
    <div className="shell v7-contact">
      <div>
        <span className="v7-eye">Contacto · Soporte</span>
        <h2 style={{marginTop:14}}>Hablá con <em>una persona,</em> no con un bot.</h2>
        <p style={{marginTop:18,maxWidth:"40ch"}}>
          Equipo en Buenos Aires. Respondemos en menos de 24 horas hábiles.
          Elegí el canal que más te convenga.
        </p>
        <div className="v7-contact-channels">
          <a className="v7-channel" href="mailto:hola@himalayasalud.com.ar">
            <div className="v7-channel-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 5L2 7"/></svg>
            </div>
            <div>
              <p className="v7-channel-title">Email</p>
              <p className="v7-channel-sub">hola@himalayasalud.com.ar</p>
            </div>
            <svg className="v7-channel-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
          <a className="v7-channel" href="#">
            <div className="v7-channel-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z"/></svg>
            </div>
            <div>
              <p className="v7-channel-title">WhatsApp</p>
              <p className="v7-channel-sub">+54 11 5555 5555 · Lun a Vie 9–18h</p>
            </div>
            <svg className="v7-channel-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
          <a className="v7-channel" href="#">
            <div className="v7-channel-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14 9V5a3 3 0 0 0-6 0v4M5 9h14l-1 12H6z"/></svg>
            </div>
            <div>
              <p className="v7-channel-title">Centro de ayuda</p>
              <p className="v7-channel-sub">Tutoriales, FAQ y guías</p>
            </div>
            <svg className="v7-channel-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </div>
      </div>

      <form className="v7-form" onSubmit={(e)=>e.preventDefault()}>
        <h3>Escribinos.</h3>
        <p style={{fontFamily:"var(--v7-serif)",fontStyle:"italic",fontSize:14,color:"var(--v7-ink-2)",margin:"0 0 28px"}}>
          Respondemos en menos de 24 horas hábiles.
        </p>
        <div className="v7-form-row cols">
          <div>
            <label className="v7-form-label">Nombre</label>
            <input className="v7-form-input" placeholder="Tu nombre" />
          </div>
          <div>
            <label className="v7-form-label">Email</label>
            <input className="v7-form-input" placeholder="vos@email.com" type="email" />
          </div>
        </div>
        <div className="v7-form-row" style={{marginTop:14}}>
          <div>
            <label className="v7-form-label">Soy</label>
            <select className="v7-form-select" defaultValue="">
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
        <div className="v7-form-row" style={{marginTop:14}}>
          <div>
            <label className="v7-form-label">Mensaje</label>
            <textarea className="v7-form-textarea" placeholder="Contanos en qué podemos ayudarte" />
          </div>
        </div>
        <div className="v7-form-actions">
          <span className="v7-form-note">Tus datos se procesan según nuestra política de privacidad.</span>
          <button className="v7-btn v7-btn-danger" type="submit">
            Enviar mensaje
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </button>
        </div>
      </form>
    </div>
  </section>
);

const FootV7 = () => (
  <footer className="v7-foot">
    <div className="shell">
      <div className="v7-foot-row">
        <div>
          <LogoV7 />
          <p className="v7-foot-tag">"Tres segundos. Eso es todo lo que necesita tu familia."</p>
        </div>
        <div>
          <div className="v7-foot-h">Producto</div>
          <a href="#producto">Portal Paciente</a>
          <a href="#hci">Historia Clínica</a>
          <a href="#producto">Botón de emergencia</a>
          <a href="#producto">Servicios de salud</a>
        </div>
        <div>
          <div className="v7-foot-h">Empresa</div>
          <a href="#quienes">Quiénes Somos</a>
          <a href="#contacto">Para instituciones</a>
          <a href="#">Prensa</a>
        </div>
        <div>
          <div className="v7-foot-h">Soporte</div>
          <a href="#contacto">Contacto</a>
          <a href="#">Centro de ayuda</a>
          <a href="#">Términos · Privacidad</a>
        </div>
      </div>
      <div className="v7-foot-bar">
        <span>© 2026 HIMALAYA SALUD · BUENOS AIRES, ARGENTINA</span>
        <span>v1.0 · BUILD 2026.04</span>
      </div>
    </div>
  </footer>
);

window.LandingV7 = { NavV7, InicioV7, TranquilidadV7, QuienesV7, ProductoV7, ContactoV7, FootV7 };
