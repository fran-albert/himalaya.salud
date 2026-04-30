/* ——— V2: Landing Emocional / Familia ——— */
/* Concepto: storytelling vertical con momentos de la vida (cuando vivís lejos,
   cuando algo pasa, cuando todo está bien). Tipografía serif para emoción,
   crema cálido + mint, foco en familia. */

const Logo = () => (
  <a className="v2-logo" href="#">
    <img src="assets/logo-himalaya.svg" alt="" width="40" height="40" />
    <div>
      <div className="v2-logo-name">Himalaya <span>Salud</span></div>
      <div className="v2-logo-tag">TU SALUD EN TUS MANOS</div>
    </div>
  </a>
);

const NavV2 = () => (
  <nav className="v2-nav">
    <div className="shell v2-nav-row">
      <Logo />
      <div className="v2-nav-links">
        <a href="#historia">La historia</a>
        <a href="#emergencia">Emergencia</a>
        <a href="#plan">El plan</a>
        <a href="#descargar">Descargar</a>
      </div>
      <div style={{display:"flex",gap:10}}>
        <a className="btn btn-ghost btn-sm" href="#">Ingresar</a>
        <a className="btn v2-btn-primary btn-sm" href="#descargar">Probar gratis</a>
      </div>
    </div>
  </nav>
);

const HeroV2 = () => (
  <section className="v2-hero">
    <div className="shell v2-hero-grid">
      <div>
        <span className="v2-hero-eyebrow">Una app pensada para cuidar a los tuyos</span>
        <h1>
          Para los que<br/>
          <em>querés cuidar,</em><br/>
          aunque no estés<br/>cerca.
        </h1>
        <p className="v2-hero-lede">
          Himalaya Salud guarda los estudios de tu familia, vincula a tus viejos
          y, si algo pasa, te avisa con un toque. La salud, donde la salud
          siempre debió estar: con vos.
        </p>
        <div className="v2-hero-cta">
          <a className="btn v2-btn-primary" href="#descargar">
            Empezá 30 días gratis
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
          <span className="v2-pill">Sin tarjeta · Cancelás cuando quieras</span>
        </div>
      </div>

      <div className="v2-hero-visual">
        <img src="assets/hand-home-real.png" alt="App Himalaya Salud sostenida en una mano" className="v2-hand" />
        <div className="v2-hero-bubble b1">
          <div className="v2-bubble-avatar mama">M</div>
          <div>
            <div>Mamá tomó su remedio ✓</div>
            <div className="v2-bubble-time">hace 2 min</div>
          </div>
        </div>
        <div className="v2-hero-bubble b2">
          <div className="v2-bubble-avatar papa">P</div>
          <div>
            <div>Papá subió un análisis</div>
            <div className="v2-bubble-time">hoy, 14:30</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* Story sections — alternating image/text */

const Story1 = () => (
  <section id="historia" className="v2-story">
    <div className="shell v2-story-wrap">
      <div>
        <div className="v2-story-num">01</div>
        <div className="v2-story-eye">cuando vivís lejos</div>
        <h2>Tus viejos en Salta.<br/>Vos en Buenos Aires.</h2>
        <p>
          Vincúlalos a tu cuenta, ves sus estudios, sus alertas, sus turnos.
          Y si pasa algo, sos el primero en saberlo — aunque estés a 1.500 km.
        </p>
        <div className="v2-story-stat">
          <div>
            <div className="v2-stat-num">3</div>
            <div className="v2-stat-label">contactos de emergencia por usuario</div>
          </div>
          <div>
            <div className="v2-stat-num">∞</div>
            <div className="v2-stat-label">familiares vinculables</div>
          </div>
        </div>
      </div>
      <div className="v2-story-img">
        <img src="assets/screen-portal-real.jpg" alt="Portal del paciente con estudios médicos" />
      </div>
    </div>
  </section>
);

const Story2 = () => (
  <section id="emergencia" className="v2-story alt">
    <div className="shell v2-story-wrap" style={{gridTemplateColumns:"1.3fr 1fr"}}>
      <div className="v2-story-img">
        <img src="assets/hand-sos-real.png" alt="Pantalla del modal SOS de Himalaya Salud" />
      </div>
      <div>
        <div className="v2-story-num">02</div>
        <div className="v2-story-eye">cuando algo pasa</div>
        <h2>Un botón.<br/>Tres segundos.<br/><em>Llega ayuda.</em></h2>
        <p>
          Mantenelo presionado y avisamos a tus contactos de confianza con tu
          ubicación, condiciones médicas y datos relevantes para los servicios
          de emergencia. Cancelable en 10 segundos si fue por error.
        </p>
        <div className="v2-story-stat">
          <div>
            <div className="v2-stat-num">3 seg</div>
            <div className="v2-stat-label">para activar la alerta</div>
          </div>
          <div>
            <div className="v2-stat-num">10 seg</div>
            <div className="v2-stat-label">para cancelar si fue error</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Story3 = () => (
  <section className="v2-story dark">
    <div className="shell v2-story-wrap">
      <div>
        <div className="v2-story-num">03</div>
        <div className="v2-story-eye">cuando todo está bien</div>
        <h2>Tu salud, ordenada<br/>de una vez por todas.</h2>
        <p>
          Estudios, análisis, recetas e imágenes médicas — etiquetados,
          buscables, siempre disponibles. Sin papeles, sin perderse nada,
          sin contarle tu historia a cada médico nuevo desde cero.
        </p>
        <div className="v2-story-stat">
          <div>
            <div className="v2-stat-num">∞</div>
            <div className="v2-stat-label">estudios sin límite de almacenamiento</div>
          </div>
          <div>
            <div className="v2-stat-num">HCI</div>
            <div className="v2-stat-label">historia clínica interoperable · muy pronto</div>
          </div>
        </div>
      </div>
      <div className="v2-story-img">
        <img src="assets/screen-etiquetas-real.jpg" alt="Etiquetas y filtros para estudios médicos" />
      </div>
    </div>
  </section>
);

/* Pull quote */
const PullQuote = () => (
  <section className="v2-pull">
    <div className="shell">
      <div className="v2-pull-quote">
        “Mi vieja vive sola, lejos. Saber que con un toque me avisa
        cambió la forma en que duermo.”
      </div>
      <div className="v2-pull-by">
        <div className="v2-pull-avatar">CR</div>
        <div>
          <div className="v2-pull-name">Carolina R.</div>
          <div className="v2-pull-role">Hija — Rosario · Usuaria desde 2025</div>
        </div>
      </div>
    </div>
  </section>
);

/* Plan card */
const PlanV2 = () => (
  <section id="plan" className="v2-plan">
    <div className="shell">
      <div className="v2-plan-card">
        <div>
          <span className="v2-hero-eyebrow">El plan</span>
          <h2>Plan Estándar.<br/>Sin sorpresas.</h2>
          <p style={{fontSize:16,color:"var(--ink-2)",lineHeight:1.55,maxWidth:"40ch",margin:"16px 0 0"}}>
            Acceso completo a la app. Para vos, para tu familia, para las
            personas que querés cuidar.
          </p>
          <div className="v2-plan-price">
            <span className="v2-plan-amount">ARS 15.000</span>
            <span className="v2-plan-period">/mes</span>
          </div>
          <div className="v2-plan-trial">★ Empezá con 30 días gratis · Sin tarjeta</div>
          <div style={{marginTop:32}}>
            <a className="btn v2-btn-warm" href="#descargar">
              Probar 30 días gratis
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </div>
        <div>
          <ul className="v2-plan-list">
            <li>
              <span className="v2-plan-check"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
              <div><strong>Botón de pánico ilimitado.</strong> Avisá a tus contactos y servicios de emergencia las veces que necesites.</div>
            </li>
            <li>
              <span className="v2-plan-check"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
              <div><strong>Portal del paciente sin límites.</strong> Estudios, análisis, recetas e imágenes médicas, sin restricción.</div>
            </li>
            <li>
              <span className="v2-plan-check"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
              <div><strong>Servicios de salud cercanos.</strong> Encontrá médicos, clínicas y centros médicos cerca tuyo.</div>
            </li>
            <li>
              <span className="v2-plan-check"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
              <div><strong>Cuidado familiar.</strong> Vinculá hasta 5 personas a tu cuenta — viejos, hijos, hermanos.</div>
            </li>
            <li>
              <span className="v2-plan-check"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
              <div><strong>Soporte prioritario.</strong> Respuestas en menos de 24 horas hábiles, equipo argentino.</div>
            </li>
            <li>
              <span className="v2-plan-check"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
              <div><strong>HCI cuando salga.</strong> Historia clínica interoperable incluida en el plan, sin costo extra.</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const FinalV2 = () => (
  <section id="descargar" className="v2-final">
    <div className="shell">
      <h2>
        Descargá <em>Himalaya</em>.<br/>
        Empezá a cuidar.
      </h2>
      <p>
        Disponible para iOS y Android. Tres minutos para crear tu cuenta,
        treinta días gratis para probarla, una vida para tener todo en orden.
      </p>
      <div className="v2-final-stores">
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
  </section>
);

const FootV2 = () => (
  <footer className="v2-foot">
    <div className="shell v2-foot-grid">
      <div>
        <Logo />
        <div className="v2-foot-tag">
          “Software de salud personal hecho en Argentina, para que la salud esté donde tiene que estar — con vos.”
        </div>
      </div>
      <div className="v2-foot-cols">
        <div>
          <div className="v2-foot-h">Producto</div>
          <a href="#emergencia">Botón de pánico</a>
          <a href="#historia">Portal del paciente</a>
          <a href="#plan">El plan</a>
          <a href="#descargar">Descargar</a>
        </div>
        <div>
          <div className="v2-foot-h">Empresa</div>
          <a href="#">Sobre nosotros</a>
          <a href="#">Para profesionales</a>
          <a href="#">Prensa</a>
          <a href="#">Contacto</a>
        </div>
        <div>
          <div className="v2-foot-h">Legal</div>
          <a href="#">Términos</a>
          <a href="#">Privacidad</a>
          <a href="#">Habeas data</a>
        </div>
      </div>
    </div>
    <div className="shell v2-foot-bar">
      <span>© 2026 Himalaya Salud · Buenos Aires, Argentina</span>
      <span style={{fontFamily:"var(--font-mono)",letterSpacing:".02em"}}>v1.0 · Build 2026.04</span>
    </div>
  </footer>
);

window.LandingV2 = { NavV2, HeroV2, Story1, Story2, Story3, PullQuote, PlanV2, FinalV2, FootV2 };
