/* ——— V3: Landing Editorial / Institucional ——— */

const LogoV3 = () => (
  <a className="v3-logo" href="#">
    <img src="assets/logo-himalaya.svg" alt="" width="40" height="40" />
    <div>
      <div className="v3-logo-name">Himalaya Salud</div>
      <div className="v3-logo-tag">Tu salud en tus manos</div>
    </div>
  </a>
);

const Mast = () => (
  <header className="v3-mast">
    <div className="shell v3-mast-row">
      <LogoV3 />
      <div className="v3-mast-meta v3-mast-links">
        <a href="#producto">Producto</a>
        <a href="#emergencia">Emergencia</a>
        <a href="#plan">Plan</a>
        <a href="#empresas">Para empresas</a>
      </div>
      <div style={{display:"flex",gap:10,alignItems:"center"}}>
        <a href="#" style={{fontSize:13,color:"var(--v3-ink-2)"}}>Ingresar</a>
        <a className="v3-btn v3-btn-primary" href="#descargar" style={{height:40,padding:"0 18px",fontSize:13}}>
          Descargar app
        </a>
      </div>
    </div>
  </header>
);

const HeroV3 = () => (
  <section className="v3-hero">
    <div className="shell">
      {/* Issue meta */}
      <div className="v3-hero-meta">
        <div className="v3-hero-meta-item">
          <span className="v3-eye">Edición</span>
          <div className="v3-hero-meta-item-val">Argentina · 2026</div>
        </div>
        <div className="v3-hero-meta-item">
          <span className="v3-eye">Producto</span>
          <div className="v3-hero-meta-item-val">App de salud personal</div>
        </div>
        <div className="v3-hero-meta-item">
          <span className="v3-eye">Plataformas</span>
          <div className="v3-hero-meta-item-val">iOS · Android</div>
        </div>
        <div className="v3-hero-meta-item">
          <span className="v3-eye">Estado</span>
          <div className="v3-hero-meta-item-val">Disponible · v1.0</div>
        </div>
      </div>

      <div className="v3-hero-headline">
        <span className="v3-eye">Núm. 01 — Manifiesto</span>
        <h1>
          La salud<br/>
          es <em>personal,</em><br/>
          y debería estar<br/>
          <em>con vos.</em>
        </h1>
      </div>

      <div className="v3-hero-grid">
        <div className="v3-hero-summary">
          <span className="v3-eye">Resumen</span>
          <p>
            Himalaya Salud es una aplicación argentina que reúne en un mismo
            lugar tu historia clínica, tus estudios médicos, un botón de pánico
            con aviso a contactos de emergencia, y la red de servicios de salud
            cerca tuyo.
          </p>
          <p>
            Pensada para personas, familias y profesionales que necesitan
            tener la información médica donde tiene que estar — siempre a mano.
          </p>
          <div className="v3-cta">
            <a className="v3-btn v3-btn-primary" href="#descargar">
              Empezar 30 días gratis
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <a className="v3-btn v3-btn-ghost" href="#producto">Leer más</a>
          </div>
        </div>

        <figure className="v3-hero-fig">
          <img src="assets/hand-home-real.png" alt="App Himalaya Salud sobre la pantalla de inicio" />
          <div className="v3-hero-fig-cap">
            <span>Fig. 01 · Pantalla de inicio</span>
            <span>Botón SOS · Portal · Servicios</span>
          </div>
        </figure>
      </div>
    </div>
  </section>
);

/* Producto — features as numbered articles */
const FEATS = [
  {n:"§ 01", t:"Botón de pánico", em:"ilimitado", d:"Mantené presionado durante tres segundos. Avisamos a tus contactos de confianza y a los servicios de emergencia con tu ubicación, condiciones médicas y datos relevantes. Cancelable en diez segundos si fue por error."},
  {n:"§ 02", t:"Portal del paciente", em:"sin límites", d:"Subí estudios médicos, análisis, recetas e imágenes sin restricción de almacenamiento. Etiquetá, buscá, compartí cuando lo necesites."},
  {n:"§ 03", t:"Servicios de salud", em:"cercanos", d:"Encontrá médicos, clínicas y centros de salud cerca tuyo en cualquier parte del país. Información actualizada y verificada."},
  {n:"§ 04", t:"Cuidado familiar", em:"vinculado", d:"Vinculá hasta cinco personas a tu cuenta. Veas sus alertas SOS, accedé a sus estudios con permisos, recibí notificaciones de turnos y medicación."},
  {n:"§ 05", t:"Historia clínica", em:"interoperable", d:"Próximamente: HCI completa, accesible y portable entre prestadores. Sin perder un papel ni repetir tu historia.", status:"Próximamente"},
  {n:"§ 06", t:"Soporte humano", em:"prioritario", d:"Equipo argentino. Respuestas en menos de 24 horas hábiles. Sin chatbots, sin tickets perdidos, sin esperas indefinidas."},
];

const Producto = () => (
  <section id="producto">
    <div className="shell">
      <div className="v3-sec-head">
        <span className="v3-eye">Sección II — Producto</span>
        <h2>Seis razones para tener<br/><em>Himalaya en tu bolsillo.</em></h2>
      </div>
      <div className="v3-feat-list">
        {FEATS.map(f => (
          <article className="v3-feat" key={f.n}>
            <span className="v3-feat-num">{f.n}</span>
            <div>
              <h3 className="v3-feat-title">{f.t} <em>{f.em}</em></h3>
              <p className="v3-feat-desc">{f.d}</p>
              {f.status && <span className="v3-feat-status">{f.status}</span>}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* Emergencia — long-form spread */
const Emergencia = () => (
  <section id="emergencia">
    <div className="shell">
      <div className="v3-sec-head">
        <span className="v3-eye">Sección III — Emergencia</span>
        <h2>Cuando cada<br/>segundo <em>importa.</em></h2>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"3fr 2fr",gap:48,alignItems:"start"}} className="v3-emer-grid">
        <div>
          <p style={{fontSize:18,lineHeight:1.55,maxWidth:"50ch",marginBottom:24}}>
            El botón de pánico de Himalaya Salud está pensado para que la
            emergencia no te encuentre desprevenido. Mantenelo presionado
            durante tres segundos y la app dispara una alerta a tus contactos
            de confianza con tu ubicación en tiempo real.
          </p>
          <p style={{fontSize:15.5,maxWidth:"50ch"}}>
            La alerta puede cancelarse en los diez segundos siguientes si fue
            por error. Si no la cancelás, los servicios de emergencia reciben
            tus datos médicos relevantes — tipo de sangre, alergias,
            condiciones, medicación — junto con la ubicación.
          </p>

          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:24,marginTop:48,paddingTop:32,borderTop:"1px solid var(--v3-line)"}}>
            <div>
              <div style={{fontFamily:"'Fraunces',Georgia,serif",fontSize:48,fontWeight:400,color:"var(--v3-ink)",letterSpacing:"-0.02em",lineHeight:1}}>3 s</div>
              <div className="v3-eye" style={{marginTop:8}}>Activación</div>
              <p style={{fontSize:13,marginTop:4}}>Mantener presionado para disparar la alerta</p>
            </div>
            <div>
              <div style={{fontFamily:"'Fraunces',Georgia,serif",fontSize:48,fontWeight:400,color:"var(--v3-ink)",letterSpacing:"-0.02em",lineHeight:1}}>10 s</div>
              <div className="v3-eye" style={{marginTop:8}}>Cancelación</div>
              <p style={{fontSize:13,marginTop:4}}>Ventana para revertir si fue por error</p>
            </div>
            <div>
              <div style={{fontFamily:"'Fraunces',Georgia,serif",fontSize:48,fontWeight:400,color:"var(--v3-ink)",letterSpacing:"-0.02em",lineHeight:1}}>3</div>
              <div className="v3-eye" style={{marginTop:8}}>Contactos</div>
              <p style={{fontSize:13,marginTop:4}}>Personas notificadas + servicios de emergencia</p>
            </div>
          </div>
        </div>

        <figure className="v3-hero-fig" style={{minHeight:580,padding:24}}>
          <img src="assets/hand-sos-real.png" alt="Pantalla del modal SOS de Himalaya Salud" style={{maxHeight:560}} />
          <div className="v3-hero-fig-cap">
            <span>Fig. 02 · Modal SOS</span>
            <span>Alerta en curso</span>
          </div>
        </figure>
      </div>
    </div>
  </section>
);

/* Pull quote — testimonial */
const Pull = () => (
  <section className="v3-pull">
    <div className="shell v3-pull-grid">
      <div>
        <span className="v3-eye">Testimonio</span>
        <div className="v3-num" style={{marginTop:8}}>Núm. 04</div>
      </div>
      <div>
        <div className="v3-pull-q">
          “A mi vieja le pasó algo en la cocina y apretó el SOS. Estaba a
          cuarenta cuadras y llegué con todos los datos en el celular —
          alergias, medicación, contactos. <em>Eso no tiene precio.</em>”
        </div>
        <div className="v3-pull-by">
          <span>Carolina R.</span>
          <span>Hija</span>
          <span>Rosario · Usuaria desde 2025</span>
        </div>
      </div>
    </div>
  </section>
);

/* Plan / pricing */
const PlanV3 = () => (
  <section id="plan">
    <div className="shell">
      <div className="v3-sec-head">
        <span className="v3-eye">Sección IV — Plan</span>
        <h2>Un solo plan.<br/><em>Sin sorpresas.</em></h2>
      </div>
      <div className="v3-plan-grid">
        <div>
          <p>
            Himalaya Salud se ofrece en un único plan, con acceso completo a
            todas las funcionalidades. Sin tiers, sin límites artificiales,
            sin upsells.
          </p>
          <div className="v3-plan-meta-list">
            <div><span>Precio</span><strong>ARS 15.000 / mes</strong></div>
            <div><span>Periodo de prueba</span><strong>30 días gratis</strong></div>
            <div><span>Tarjeta requerida</span><strong>No</strong></div>
            <div><span>Familiares vinculables</span><strong>Hasta 5</strong></div>
            <div><span>Almacenamiento</span><strong>Sin límite</strong></div>
            <div><span>Cancelación</span><strong>Inmediata, desde la app</strong></div>
          </div>
        </div>

        <div className="v3-plan-card">
          <div className="v3-plan-head">
            <div>
              <div className="v3-eye" style={{marginBottom:8}}>Plan Estándar</div>
              <div className="v3-plan-name">Acceso completo</div>
            </div>
            <div style={{textAlign:"right"}}>
              <div className="v3-plan-amount">15.000</div>
              <div className="v3-plan-period">ARS · POR MES</div>
            </div>
          </div>
          <div className="v3-plan-body">
            {[
              {t:"Botón de pánico",d:"Ilimitado, con aviso a contactos y servicios de emergencia."},
              {t:"Portal del paciente",d:"Estudios, análisis, imágenes — sin restricción."},
              {t:"Servicios de salud",d:"Médicos y clínicas cerca tuyo, en todo el país."},
              {t:"Cuidado familiar",d:"Vinculá a tus viejos, tus hijos, tus hermanos."},
              {t:"Soporte prioritario",d:"Respuestas en menos de 24 horas hábiles."},
              {t:"HCI cuando salga",d:"Historia clínica interoperable, sin costo extra."},
            ].map(it => (
              <div key={it.t}>
                <span className="v3-num" style={{marginTop:3}}>+</span>
                <div>
                  <strong>{it.t}.</strong>
                  <p>{it.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="v3-plan-foot">
            <span className="v3-trial">★ Empezá los primeros 30 días sin pagar.</span>
            <a className="v3-btn v3-btn-primary" href="#descargar">
              Probar 30 días gratis
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* B2B — para obras sociales / empresas / profesionales */
const B2B = () => (
  <section id="empresas" className="v3-b2b">
    <div className="shell">
      <div className="v3-sec-head">
        <span className="v3-eye">Sección V — Para empresas</span>
        <h2>También para <em>obras sociales,</em> empresas y profesionales.</h2>
      </div>
      <div className="v3-b2b-grid">
        <div>
          <p style={{fontSize:17,lineHeight:1.55,maxWidth:"42ch"}}>
            Himalaya Salud puede integrarse a planes corporativos, prepagas
            y obras sociales. Damos a tus afiliados un canal directo, datos
            en orden, y reducción de costos en gestión de estudios y
            emergencias.
          </p>
          <div style={{marginTop:48,display:"flex",gap:14,flexWrap:"wrap"}}>
            <a className="v3-btn v3-btn-primary" href="#">
              Hablar con ventas
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <a className="v3-btn v3-btn-ghost" href="#">Ver pitch deck</a>
          </div>
        </div>

        <div className="v3-b2b-list">
          {[
            {n:"01", t:"Para obras sociales y prepagas", d:"App white-labeled, integración con tus sistemas, reportes agregados de uso. Reducción de costos en consultas evitables."},
            {n:"02", t:"Para empresas", d:"Beneficio de salud para empleados. Plan corporativo desde 50 usuarios. Onboarding asistido, dashboard administrativo."},
            {n:"03", t:"Para profesionales de salud", d:"Tus pacientes con su historia ordenada. Acceso compartido con permisos. Recetas digitales y seguimiento."},
          ].map(b => (
            <div key={b.n}>
              <span className="v3-num">§ {b.n}</span>
              <div>
                <h3 style={{fontFamily:"'Fraunces',Georgia,serif",fontSize:20,fontWeight:500,letterSpacing:"-0.012em",marginBottom:8,color:"#fff"}}>{b.t}</h3>
                <p style={{fontSize:14,lineHeight:1.55,maxWidth:"36ch"}}>{b.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const FinalV3 = () => (
  <section id="descargar" className="v3-final">
    <div className="shell v3-final-grid">
      <div>
        <span className="v3-eye">Descargar</span>
        <h2 style={{marginTop:16}}>
          Tu salud,<br/>en <em>tus manos.</em>
        </h2>
      </div>
      <div>
        <p style={{fontSize:16,lineHeight:1.55,maxWidth:"40ch"}}>
          Disponible para iOS y Android. Tres minutos para crear tu cuenta,
          treinta días gratis para probarla.
        </p>
        <div className="v3-final-stores">
          <a className="v3-store" href="#">
            <svg width="22" height="26" viewBox="0 0 22 26" fill="currentColor"><path d="M17.6 13.7c0-3.3 2.7-4.9 2.8-5-1.5-2.2-3.9-2.5-4.7-2.5-2-.2-3.9 1.2-4.9 1.2-1 0-2.6-1.2-4.3-1.1-2.2 0-4.2 1.3-5.3 3.3-2.3 4-.6 9.8 1.6 13 1.1 1.6 2.4 3.3 4.1 3.3 1.6-.1 2.3-1 4.3-1s2.5 1 4.3 1c1.8 0 2.9-1.6 4-3.2 1.3-1.8 1.8-3.6 1.8-3.7-.1 0-3.6-1.4-3.6-5.3zM14.4 4.2c.9-1 1.5-2.5 1.3-3.9-1.3.1-2.8.8-3.7 1.9-.8.9-1.5 2.4-1.3 3.8 1.4.1 2.8-.7 3.7-1.8z"/></svg>
            <div>
              <div className="v3-store-sub">DESCARGAR EN</div>
              <div className="v3-store-name">App Store</div>
            </div>
          </a>
          <a className="v3-store" href="#">
            <svg width="22" height="26" viewBox="0 0 22 26" fill="currentColor"><path d="M2.1 1.1C1.7 1.5 1.5 2.1 1.5 2.9v20.2c0 .8.2 1.4.6 1.8l11.5-11.4L2.1 1.1zm12.7 11.4 3.4-3.4-12-7L2 5.7l12.8 6.8zM4.4 25.4c.4 0 .8-.1 1.2-.4l13.7-7.8-3.5-3.5-11.4 11.7zm15.1-12.5-2.7-1.6-3.7 3.7 3.7 3.7 2.7-1.5c1.6-.9 1.6-2.4 0-3.3z"/></svg>
            <div>
              <div className="v3-store-sub">DISPONIBLE EN</div>
              <div className="v3-store-name">Google Play</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Colophon = () => (
  <footer className="v3-colophon">
    <div className="shell">
      <div className="v3-colophon-row">
        <div>
          <LogoV3 />
          <div className="v3-colophon-mission">
            “Software de salud personal hecho en Argentina, para que la salud esté donde tiene que estar.”
          </div>
        </div>
        <div>
          <div className="v3-colophon-h">Producto</div>
          <a href="#producto">Funcionalidades</a>
          <a href="#emergencia">Emergencia</a>
          <a href="#plan">Plan</a>
          <a href="#descargar">Descargar</a>
        </div>
        <div>
          <div className="v3-colophon-h">Empresa</div>
          <a href="#empresas">Para empresas</a>
          <a href="#">Sobre nosotros</a>
          <a href="#">Prensa</a>
          <a href="#">Contacto</a>
        </div>
        <div>
          <div className="v3-colophon-h">Legal</div>
          <a href="#">Términos</a>
          <a href="#">Privacidad</a>
          <a href="#">Habeas data</a>
          <a href="#">Tratamiento de datos</a>
        </div>
      </div>
      <div className="v3-colophon-bar">
        <span>© 2026 Himalaya Salud · Buenos Aires, Argentina</span>
        <span>Núm. 01 · v1.0 · Build 2026.04</span>
      </div>
    </div>
  </footer>
);

window.LandingV3 = { Mast, HeroV3, Producto, Emergencia, Pull, PlanV3, B2B, FinalV3, Colophon };
