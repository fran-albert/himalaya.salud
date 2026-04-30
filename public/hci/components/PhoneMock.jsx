/* ——— Reusable phone mock for the landing hero ——— */
const PhoneMock = ({ variant = "home", scale = 1 }) => {
  return (
    <div className="pm-frame" style={{ transform: `scale(${scale})` }}>
      <div className="pm-screen">
        {variant === "home" && <PhoneHome />}
        {variant === "sos" && <PhoneSOS />}
        {variant === "portal" && <PhonePortal />}
      </div>
      {/* Side controls */}
      <span className="pm-side pm-side-l1" />
      <span className="pm-side pm-side-l2" />
      <span className="pm-side pm-side-r1" />
      {/* Notch */}
      <span className="pm-notch" />
    </div>
  );
};

const StatusBar = () => (
  <div className="pm-status">
    <span>9:41</span>
    <div className="pm-status-icons">
      <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor"><rect x="0" y="7" width="3" height="4" rx="0.5"/><rect x="4.5" y="5" width="3" height="6" rx="0.5"/><rect x="9" y="3" width="3" height="8" rx="0.5"/><rect x="13.5" y="0" width="3" height="11" rx="0.5"/></svg>
      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M1 5 a6 6 0 0 1 12 0" /><path d="M3.5 6.5 a3 3 0 0 1 7 0"/><circle cx="7" cy="8.2" r="0.8" fill="currentColor"/></svg>
      <svg width="22" height="11" viewBox="0 0 22 11" fill="none"><rect x="0.5" y="0.5" width="18" height="10" rx="2" stroke="currentColor"/><rect x="2" y="2" width="14" height="7" rx="1" fill="currentColor"/><rect x="19.5" y="3.5" width="1.5" height="4" rx="0.5" fill="currentColor"/></svg>
    </div>
  </div>
);

const PhoneHeader = () => (
  <div className="pm-header">
    <div className="pm-brand">
      <div className="pm-mark">
        <img src="assets/logo-himalaya.svg" alt="" width="26" height="26" />
      </div>
      <div className="pm-brand-text">
        <div>Himalaya <span style={{ color: "#8FDFA1" }}>Salud</span></div>
        <div className="pm-brand-tag">TU SALUD EN TUS MANOS</div>
      </div>
    </div>
    <div className="pm-head-actions">
      <span className="pm-icon-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a8 8 0 0 1 16 0v1"/></svg>
      </span>
      <span className="pm-icon-btn">
        <svg width="15" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M10 21a2 2 0 0 0 4 0"/></svg>
        <span className="pm-dot" />
      </span>
    </div>
  </div>
);

const PhoneHome = () => (
  <>
    <StatusBar />
    <PhoneHeader />
    <div className="pm-greet">
      <div className="pm-hello">Hola,</div>
      <h2>María</h2>
      <div className="pm-sub">¿Cómo te sentís hoy?</div>
    </div>

    <div className="pm-section-label"><span>Emergencia</span></div>
    <div className="pm-emer">
      <div className="pm-sos-wrap">
        <span className="pm-sos-ring" />
        <span className="pm-sos-ring r2" />
        <button className="pm-sos-btn">SOS</button>
      </div>
      <div className="pm-em-text">
        <div className="pm-em-title">Botón de pánico</div>
        <div className="pm-em-desc">Mantené presionado para avisar a tus contactos.</div>
        <div className="pm-em-meta"><span className="pm-pulse" /> 3 contactos activos</div>
      </div>
    </div>

    <div className="pm-section-label"><span>Servicios</span></div>
    <div className="pm-grid">
      <div className="pm-tile">
        <div className="pm-tile-icon teal">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0C606E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 14h6"/></svg>
        </div>
        <div className="pm-tile-body">
          <div className="pm-tile-title">Mis estudios</div>
          <div className="pm-tile-desc">Análisis e imágenes</div>
        </div>
      </div>
      <div className="pm-tile">
        <div className="pm-tile-icon mint">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2D7A60" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
        </div>
        <div className="pm-tile-body">
          <div className="pm-tile-title">Recordatorios</div>
          <div className="pm-tile-desc">Medicación y turnos</div>
        </div>
      </div>
    </div>
  </>
);

const PhoneSOS = () => (
  <>
    <StatusBar />
    <PhoneHeader />
    <div className="pm-page-title">
      <span className="pm-back">‹</span>
      <h2>Botón de pánico</h2>
    </div>
    <div className="pm-sos-card">
      <div className="pm-sos-question">¿Estás en una emergencia?</div>
      <div className="pm-sos-help">Mantené presionado el botón para avisar a tus contactos y servicios de emergencia</div>
      <div className="pm-sos-big">
        <span className="pm-sos-ring big" />
        <span className="pm-sos-ring big r2" />
        <button className="pm-sos-btn big">SOS</button>
      </div>
      <div className="pm-sos-foot">Mantener presionado · 3 segundos</div>
    </div>
    <div className="pm-section-label small"><span>Contactos de emergencia</span></div>
    <div className="pm-contact-list">
      {[
        { i: "MG", n: "María González", r: "Madre", on: true },
        { i: "JM", n: "Juan Martínez", r: "Hermano", on: true },
      ].map((c) => (
        <div className="pm-contact" key={c.i}>
          <div className="pm-avatar">{c.i}</div>
          <div className="pm-contact-text">
            <div className="pm-contact-n">{c.n}</div>
            <div className="pm-contact-r">{c.r}</div>
          </div>
          <div className={`pm-toggle ${c.on ? "on" : ""}`}><span /></div>
        </div>
      ))}
    </div>
  </>
);

const PhonePortal = () => (
  <>
    <StatusBar />
    <PhoneHeader />
    <div className="pm-page-title">
      <span className="pm-back">‹</span>
      <h2>Portal del paciente</h2>
    </div>
    <div className="pm-port-card">
      <div className="pm-port-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0C606E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>
      </div>
      <div>
        <div className="pm-port-title">Mis estudios médicos</div>
        <div className="pm-port-desc">Guardá estudios, análisis e imágenes para tenerlos siempre a mano.</div>
      </div>
    </div>
    <div className="pm-up-btn">+ Subir nuevo estudio</div>
    <div className="pm-search">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6C757D" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
      <span>Buscar por nombre o fecha…</span>
    </div>
    <div className="pm-section-label small"><span>Mis estudios · 1 resultado</span></div>
    <div className="pm-study">
      <div className="pm-study-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0C606E" strokeWidth="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>
      </div>
      <div>
        <div className="pm-study-title">Resonancia Magnética</div>
        <div className="pm-study-meta">10 oct 2025 · Sin archivos</div>
        <div className="pm-tag">● gamma</div>
      </div>
    </div>
  </>
);

window.PhoneMock = PhoneMock;
