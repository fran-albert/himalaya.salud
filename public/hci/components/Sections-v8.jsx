/* ——— V8 · Una historia, muchas vidas ———
   La HCI como hilo narrativo: el producto contado a través de la
   historia de María, una persona que usa Himalaya durante un año. */

const MastV8 = () => (
  <>
    <header className="v8-mast">
      <div className="shell v8-mast-row">
        <a className="v8-mast-logo" href="#cover">
          <img src="assets/logo-himalaya.svg" alt="" width="36" height="36" />
          <span>Himalaya <em>Salud</em></span>
        </a>
        <nav className="v8-mast-nav">
          <a href="#cover">Inicio</a>
          <a href="#contenido">Producto</a>
          <a href="#historia">Historia Clínica</a>
          <a href="#quienes">Quiénes Somos</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <div className="v8-mast-cta">
          <a className="v8-mast-meta" href="#" style={{textDecoration:"none"}}>Ingresar</a>
          <a className="v8-btn v8-btn-dark" href="#contacto">Probar gratis</a>
        </div>
      </div>
    </header>
    <div className="v8-issue">
      <div className="shell v8-issue-row">
        <span>Vol. I · Nº 01 · Buenos Aires</span>
        <span>Edición 2026</span>
        <span>Tu salud en tus manos</span>
        <span>ARS 15.000 / mes · 30 días gratis</span>
      </div>
    </div>
  </>
);

const CoverV8 = () => (
  <section id="cover">
    <div className="shell">
      <div className="v8-cover">
        <div>
          <div className="v8-cover-num">Edición Nº 01 · Lanzamiento 2026</div>
          <h1>
            Una historia,<br/>
            <em>muchas vidas.</em>
          </h1>
          <p className="v8-cover-deck">
            Tu salud no es una serie de datos sueltos — es una historia.
            Himalaya la guarda completa, en orden, con vos.
          </p>
          <div className="v8-cover-byline">
            <strong>Lanzamiento Plan Estándar</strong> · ARS 15.000/mes · 30 días gratis · App + Portal
          </div>
        </div>
        <figure className="v8-cover-figure">
          <div className="v8-cover-figure-tag">
            <span>Portada · Nº 01</span>
            <span>2026</span>
          </div>
          <div className="v8-cover-illust">
            <span className="v8-cover-monogram">H</span>
          </div>
          <figcaption className="v8-cover-figure-cap">
            <strong>«Tres segundos cambian todo.»</strong> El botón de pánico
            de Himalaya: presionar tres segundos para que tu ubicación, tu
            historial y tus contactos se activen al mismo tiempo.
          </figcaption>
        </figure>
      </div>

      <div className="v8-pull">
        <div>
          <div className="v8-pull-stat-num"><em>3s</em></div>
          <div className="v8-pull-stat-cap">Activación SOS</div>
        </div>
        <blockquote className="v8-pull-quote">
          La salud no es un trámite. Es una historia que se lee mejor cuando
          está toda en el mismo lugar, en orden, y a mano.
        </blockquote>
        <div style={{textAlign:"right"}}>
          <div className="v8-pull-stat-num">5</div>
          <div className="v8-pull-stat-cap">Vidas en una cuenta</div>
        </div>
      </div>
    </div>
  </section>
);

const ContenidoV8 = () => (
  <section id="contenido">
    <div className="shell">
      <div className="v8-toc-head">
        <span className="v8-eye">Tabla de contenidos</span>
        <h2>En esta edición.</h2>
      </div>
      <div className="v8-toc-grid">
        <a className="v8-toc-item" href="#historia">
          <span className="v8-toc-num">I</span>
          <div>
            <div className="v8-toc-title">La historia clínica como <em>biografía</em></div>
            <div className="v8-toc-summary">Un año en la vida de María Suárez, contado en seis capítulos.</div>
          </div>
          <span className="v8-toc-page">P. 04</span>
        </a>
        <a className="v8-toc-item" href="#quienes">
          <span className="v8-toc-num">II</span>
          <div>
            <div className="v8-toc-title">Quiénes <em>somos</em></div>
            <div className="v8-toc-summary">Catorce personas en Buenos Aires, hechas de salud y código.</div>
          </div>
          <span className="v8-toc-page">P. 12</span>
        </a>
        <a className="v8-toc-item" href="#producto">
          <span className="v8-toc-num">III</span>
          <div>
            <div className="v8-toc-title">El <em>catálogo</em> del producto</div>
            <div className="v8-toc-summary">Seis funciones, una sola app, un solo plan.</div>
          </div>
          <span className="v8-toc-page">P. 16</span>
        </a>
        <a className="v8-toc-item" href="#contacto">
          <span className="v8-toc-num">IV</span>
          <div>
            <div className="v8-toc-title">Empezá <em>hoy</em></div>
            <div className="v8-toc-summary">Probalo 30 días sin tarjeta, o escribinos directo a Buenos Aires.</div>
          </div>
          <span className="v8-toc-page">P. 22</span>
        </a>
      </div>
    </div>
  </section>
);

const HistoriaV8 = () => (
  <section id="historia">
    <div className="shell">
      <div className="v8-feat-head">
        <div className="v8-feat-kicker">Capítulo Principal · I</div>
        <h2>Un año en la vida de <em>María.</em></h2>
        <p className="v8-feat-deck">
          María tiene 58 años, vive en Salta, y cuida a sus padres en Buenos
          Aires. Esta es la historia clínica que Himalaya le construyó —
          contada como lo que es, una <em>biografía.</em>
        </p>
        <div className="v8-feat-byline">
          <span>Por <strong>el equipo Himalaya</strong></span>
          <span>Buenos Aires</span>
          <span>Lectura · 4 min</span>
        </div>
      </div>

      <div className="v8-timeline">
        <aside className="v8-tl-side">
          <div className="v8-tl-side-head">El sujeto</div>
          <div className="v8-tl-side-figure">
            <span className="v8-tl-side-figure-cap">Foto · MS</span>
          </div>
          <div className="v8-tl-side-name">María <em>Suárez</em></div>
          <div className="v8-tl-side-meta">
            58 años · Salta capital<br/>
            Hija, madre, paciente<br/>
            Usuaria desde abril 2026
          </div>
        </aside>

        <div className="v8-tl-stories">

          <article className="v8-tl-chapter">
            <header className="v8-tl-chapter-head">
              <span className="v8-tl-chapter-num">I.</span>
              <span className="v8-tl-chapter-date">Abril · El comienzo</span>
            </header>
            <h3 className="v8-tl-chapter-title">El día que se decidió a <em>ordenar</em> todo.</h3>
            <p className="v8-tl-chapter-body">
              María bajó la app un martes a la noche. Tenía papeles en
              tres carpetas distintas y una mesa llena de estudios sin
              fecha. <strong>En cuarenta minutos</strong> había subido todo
              — análisis viejos, recetas, antecedentes de su mamá.
            </p>
            <p className="v8-tl-chapter-body">
              Cada documento quedó etiquetado, buscable, fechado. La carpeta
              "Mamá" empezó a tomar forma — no como un archivo, sino como
              una historia.
            </p>
            <span className="v8-tl-chapter-tag">Portal del paciente</span>
          </article>

          <article className="v8-tl-chapter">
            <header className="v8-tl-chapter-head">
              <span className="v8-tl-chapter-num">II.</span>
              <span className="v8-tl-chapter-date">Junio · Una llamada a las 2 a.m.</span>
            </header>
            <h3 className="v8-tl-chapter-title">"Su mamá está <em>despierta,</em> ¿le cuenta usted?"</h3>
            <p className="v8-tl-chapter-body">
              La guardia del Italiano necesitaba el listado de medicamentos
              de su mamá. Eran las dos de la mañana. María no estaba con
              ella, estaba a 1.535 km de distancia.
            </p>
            <div className="v8-tl-pull">
              "Le mandé el link al residente. Lo leyó en el celular antes de
              que termináramos la llamada. No tuve que recordar nombres
              raros a las dos de la mañana."
              <cite>María, 58 años · Salta</cite>
            </div>
            <span className="v8-tl-chapter-tag">Historia clínica interoperable</span>
          </article>

          <article className="v8-tl-chapter">
            <header className="v8-tl-chapter-head">
              <span className="v8-tl-chapter-num">III.</span>
              <span className="v8-tl-chapter-date">Septiembre · Tres segundos</span>
            </header>
            <h3 className="v8-tl-chapter-title">El botón que esperaba <em>no usar nunca.</em></h3>
            <p className="v8-tl-chapter-body">
              Su mamá se cayó en el baño. Apretó el botón. Tres segundos.
              <strong>La ubicación, los antecedentes, los contactos</strong>
              — todo salió al mismo tiempo. María lo supo antes de que la
              ambulancia tocara el timbre.
            </p>
            <p className="v8-tl-chapter-body">
              Llegó al hospital con la carpeta entera ya cargada. Ningún
              residente le pidió que recordara la fecha del último
              cardiograma.
            </p>
            <span className="v8-tl-chapter-tag">Botón de emergencia</span>
          </article>

          <article className="v8-tl-chapter">
            <header className="v8-tl-chapter-head">
              <span className="v8-tl-chapter-num">IV.</span>
              <span className="v8-tl-chapter-date">Noviembre · La consulta nueva</span>
            </header>
            <h3 className="v8-tl-chapter-title">Una cardióloga que la conocía desde el primer minuto.</h3>
            <p className="v8-tl-chapter-body">
              Cambió de cardióloga. La nueva — la Dra. Romero — abrió la
              historia de María en su consultorio sin pedirle un solo
              papel. Vio diez años de presión arterial, los cambios de
              medicación, los electros. <strong>Ahorraron veinte minutos
              de anamnesis.</strong>
            </p>
            <p className="v8-tl-chapter-body">
              La cardióloga sumó su propia evolución a la historia. Quedó
              ahí, junto a todo lo demás, accesible para quien venga
              después.
            </p>
            <span className="v8-tl-chapter-tag">HCI · interoperabilidad</span>
          </article>

          <article className="v8-tl-chapter">
            <header className="v8-tl-chapter-head">
              <span className="v8-tl-chapter-num">V.</span>
              <span className="v8-tl-chapter-date">Diciembre · Cinco vidas</span>
            </header>
            <h3 className="v8-tl-chapter-title">Su hijo, su nuera, sus dos viejos.</h3>
            <p className="v8-tl-chapter-body">
              Para fin de año, María administraba cinco perfiles desde la
              misma cuenta. Cada uno con sus permisos — algunos veían todo,
              otros sólo lo que necesitaban. <strong>Una sola app, una sola
              suscripción, una sola persona haciéndose cargo.</strong>
            </p>
            <span className="v8-tl-chapter-tag">Gestión familiar · 5 perfiles</span>
          </article>

          <article className="v8-tl-chapter">
            <header className="v8-tl-chapter-head">
              <span className="v8-tl-chapter-num">VI.</span>
              <span className="v8-tl-chapter-date">Hoy · La historia sigue</span>
            </header>
            <h3 className="v8-tl-chapter-title">"No <em>cambió</em> mi salud. Cambió mi calma."</h3>
            <p className="v8-tl-chapter-body">
              Lo que María consiguió no fue mejor diagnóstico ni medicación
              nueva. Fue otra cosa: <strong>la sensación de que, pase lo
              que pase, ella sabe dónde está todo.</strong> Y los que la
              cuidan, también.
            </p>
            <p className="v8-tl-chapter-body">
              Esa es la historia clínica de Himalaya. La tuya, vista como
              un todo. La de los que cuidás, accesible cuando hace falta.
            </p>
          </article>

        </div>
      </div>
    </div>
  </section>
);

const QuienesV8 = () => (
  <section id="quienes">
    <div className="shell">
      <div className="v8-about-grid">
        <figure className="v8-about-photo">
          <div className="v8-about-photo-tag">
            <span>Foto · Equipo</span>
            <span>Buenos Aires</span>
          </div>
          <div className="v8-about-photo-illust"></div>
          <figcaption className="v8-about-photo-cap">
            "Catorce personas. Médicos, ingenieras, diseñadores, cuidadores.
            Trabajando desde 2024."
          </figcaption>
        </figure>

        <div>
          <span className="v8-eye">Capítulo II · Quiénes somos</span>
          <h2 style={{marginTop:18}}>Argentinos cuidando<br/><em>a los argentinos.</em></h2>
          <p className="v8-about-deck">
            Empezamos con una pregunta — ¿por qué la salud personal está tan
            rota? Estudios perdidos, análisis repetidos, llamadas a las dos
            de la mañana sin saber qué contar.
          </p>
          <p className="v8-about-body" style={{marginTop:24}}>
            Construimos Himalaya para que la información esté donde tiene
            que estar — con vos, y con los que cuidás. Hecho en Buenos
            Aires, con servidores en Argentina, soporte humano y datos que
            son tuyos.
          </p>
          <div className="v8-about-cols">
            <div className="v8-about-col">
              <h4>Origen</h4>
              <p>Buenos Aires, 2024. Fundado por médicos e ingenieros con familia que cuidar.</p>
            </div>
            <div className="v8-about-col">
              <h4>Compromiso</h4>
              <p>Servidores en Argentina. Datos sensibles, tratados como tales. Soporte humano, no bots.</p>
            </div>
            <div className="v8-about-col">
              <h4>Visión</h4>
              <p>Una historia clínica única, portable, controlada por la persona — no por la institución.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProductoV8 = () => (
  <section id="producto">
    <div className="shell">
      <div className="v8-prod-head">
        <span className="v8-eye">Capítulo III · Catálogo</span>
        <h2 style={{marginTop:18}}>Una <em>sola app.</em><br/>Todo lo que tu familia necesita.</h2>
        <p className="v8-feat-deck">
          ARS 15.000 al mes con 30 días gratis. Sin tiers, sin upsells. Lo
          que ves es lo que tenés.
        </p>
      </div>

      <div className="v8-prod-grid">

        <div className="v8-prod-cell feature">
          <div className="v8-prod-feat-grid">
            <div>
              <div className="v8-prod-feat-num">★</div>
              <h3 className="v8-prod-feat-h">Historia clínica<br/><em>interoperable.</em></h3>
              <p className="v8-prod-feat-body">
                El corazón del producto. Una sola historia médica que vos
                llevás con vos. Cualquier prestador certificado puede leer
                o escribir, bajo estándares abiertos (HL7 FHIR), siempre
                con tu permiso explícito.
              </p>
              <ul className="v8-prod-feat-list">
                <li>Antecedentes, diagnósticos, evoluciones, documentos clínicos.</li>
                <li>Disponible para asistencia ante emergencias.</li>
                <li>Trazabilidad completa. Tu consentimiento, siempre.</li>
                <li>Cumplimiento normativo · Datos en servidores Argentina.</li>
              </ul>
            </div>
            <div className="v8-hci-doc">
              <div className="v8-hci-doc-head">
                <div className="v8-hci-doc-titles">
                  <h4>Suárez, María Cristina</h4>
                  <small>F · 58 años · DNI 22.451.776</small>
                </div>
                <div className="v8-hci-doc-id">
                  <strong>HCI · 0001245</strong>
                  Folio nº 12
                </div>
              </div>
              <div className="v8-hci-doc-table">
                <div className="v8-hci-doc-row">
                  <span className="v8-hci-doc-row-date">2026-04-23</span>
                  <span className="v8-hci-doc-row-text">
                    Análisis de sangre, perfil completo
                    <small>Hospital Italiano · Dra. M. Suárez</small>
                  </span>
                  <span className="v8-hci-doc-row-tag">SYNC</span>
                </div>
                <div className="v8-hci-doc-row">
                  <span className="v8-hci-doc-row-date">2026-04-12</span>
                  <span className="v8-hci-doc-row-text">
                    Receta · Losartán 50 mg
                    <small>Renovación mensual · vence 2026-05-12</small>
                  </span>
                  <span className="v8-hci-doc-row-tag">ACTIVO</span>
                </div>
                <div className="v8-hci-doc-row">
                  <span className="v8-hci-doc-row-date">2026-03-08</span>
                  <span className="v8-hci-doc-row-text">
                    Ecografía abdominal
                    <small>Diagnóstico Maipú · Dr. R. Velázquez</small>
                  </span>
                  <span className="v8-hci-doc-row-tag">SYNC</span>
                </div>
                <div className="v8-hci-doc-row">
                  <span className="v8-hci-doc-row-date">2025-11-21</span>
                  <span className="v8-hci-doc-row-text">
                    Antecedente · Hipertensión arterial
                    <small>Validado por Dr. F. Romero · Cardiología</small>
                  </span>
                  <span className="v8-hci-doc-row-tag coral">CERT</span>
                </div>
              </div>
              <div className="v8-hci-doc-foot">
                <span>Estándar HL7 FHIR R4</span>
                <span>4 de 27 registros</span>
              </div>
            </div>
          </div>
        </div>

        <div className="v8-prod-cell wide">
          <div className="v8-prod-cell-num">i.</div>
          <h3 className="v8-prod-cell-tit">Portal del paciente.</h3>
          <p className="v8-prod-cell-body">
            Estudios, análisis, recetas, antecedentes. Etiquetado, buscable,
            sin límites de almacenamiento. La carpeta de papel, sin la
            carpeta de papel.
          </p>
          <div className="v8-prod-cell-foot">
            <span>Disponible</span>
            <span>Plan Estándar</span>
          </div>
        </div>

        <div className="v8-prod-cell wide">
          <div className="v8-prod-cell-num">ii.</div>
          <h3 className="v8-prod-cell-tit">Botón de <em>emergencia.</em></h3>
          <p className="v8-prod-cell-body">
            Ubicación, datos médicos y aviso a contactos en tres segundos.
            Pensado para los segundos en los que cada segundo cuenta.
          </p>
          <div className="v8-prod-cell-foot">
            <span>Destacado</span>
            <span>Plan Estándar</span>
          </div>
        </div>

        <div className="v8-prod-cell">
          <div className="v8-prod-cell-num">iii.</div>
          <h3 className="v8-prod-cell-tit">Servicios de salud.</h3>
          <p className="v8-prod-cell-body">
            Médicos, clínicas, sanatorios, farmacias y obras sociales —
            geolocalizados y filtrables por zona o cobertura.
          </p>
          <div className="v8-prod-cell-foot">
            <span>Disponible</span>
            <span>Plan Estándar</span>
          </div>
        </div>

        <div className="v8-prod-cell">
          <div className="v8-prod-cell-num">iv.</div>
          <h3 className="v8-prod-cell-tit">Geolocalización.</h3>
          <p className="v8-prod-cell-body">
            Centros de atención cercanos, mejor respuesta ante emergencias,
            vinculación según cercanía.
          </p>
          <div className="v8-prod-cell-foot">
            <span>Disponible</span>
            <span>Plan Estándar</span>
          </div>
        </div>

        <div className="v8-prod-cell">
          <div className="v8-prod-cell-num">v.</div>
          <h3 className="v8-prod-cell-tit">Gestión <em>familiar.</em></h3>
          <p className="v8-prod-cell-body">
            Vinculá hasta cinco personas. Permisos diferenciados, accesos
            controlados. Una sola cuenta para los que cuidás.
          </p>
          <div className="v8-prod-cell-foot">
            <span>Disponible</span>
            <span>Plan Estándar</span>
          </div>
        </div>

        <div className="v8-prod-cell wide">
          <div className="v8-prod-cell-num">vi.</div>
          <h3 className="v8-prod-cell-tit">Seguridad y privacidad.</h3>
          <p className="v8-prod-cell-body">
            Encriptación, trazabilidad de accesos, consentimiento del
            paciente, cumplimiento normativo. Datos sensibles, tratados
            como tales.
          </p>
          <div className="v8-prod-cell-foot">
            <span>Disponible</span>
            <span>Plan Estándar</span>
          </div>
        </div>

      </div>
    </div>
  </section>
);

const ContactoV8 = () => (
  <section id="contacto">
    <div className="shell">
      <div className="v8-contact-grid">
        <div>
          <span className="v8-eye">Capítulo IV · Empezá hoy</span>
          <h2 className="v8-contact-h">Hablá con <em>una persona,</em><br/>no con un bot.</h2>
          <p className="v8-contact-deck">
            Equipo en Buenos Aires. Respondemos en menos de 24 horas
            hábiles. Elegí el canal que más te convenga.
          </p>
          <div className="v8-contact-channels">
            <a className="v8-contact-channel" href="mailto:hola@himalayasalud.com.ar">
              <span className="v8-contact-channel-num">i.</span>
              <div>
                <p className="v8-contact-channel-tit">Email</p>
                <p className="v8-contact-channel-sub">hola@himalayasalud.com.ar</p>
              </div>
              <span className="v8-contact-channel-arrow">→</span>
            </a>
            <a className="v8-contact-channel" href="#">
              <span className="v8-contact-channel-num">ii.</span>
              <div>
                <p className="v8-contact-channel-tit">WhatsApp</p>
                <p className="v8-contact-channel-sub">+54 11 5555 5555 · Lun a Vie 9–18 h</p>
              </div>
              <span className="v8-contact-channel-arrow">→</span>
            </a>
            <a className="v8-contact-channel" href="#">
              <span className="v8-contact-channel-num">iii.</span>
              <div>
                <p className="v8-contact-channel-tit">Centro de ayuda</p>
                <p className="v8-contact-channel-sub">Tutoriales, preguntas frecuentes y guías</p>
              </div>
              <span className="v8-contact-channel-arrow">→</span>
            </a>
            <a className="v8-contact-channel" href="#">
              <span className="v8-contact-channel-num">iv.</span>
              <div>
                <p className="v8-contact-channel-tit">Para instituciones</p>
                <p className="v8-contact-channel-sub">Obras sociales, prepagas, clínicas, empresas</p>
              </div>
              <span className="v8-contact-channel-arrow">→</span>
            </a>
          </div>
        </div>

        <form className="v8-form" onSubmit={(e)=>e.preventDefault()}>
          <h3 className="v8-form-h">Escribinos.</h3>
          <p className="v8-form-deck">Dejanos tus datos y te contactamos.</p>
          <div className="v8-form-row cols">
            <div>
              <label className="v8-form-label">Nombre</label>
              <input className="v8-form-input" placeholder="Tu nombre" />
            </div>
            <div>
              <label className="v8-form-label">Email</label>
              <input className="v8-form-input" placeholder="vos@email.com" type="email" />
            </div>
          </div>
          <div className="v8-form-row">
            <label className="v8-form-label">Soy</label>
            <select className="v8-form-select" defaultValue="">
              <option value="" disabled>Elegí una opción</option>
              <option>Persona / Familia</option>
              <option>Profesional de la salud</option>
              <option>Clínica / Sanatorio</option>
              <option>Obra social / Prepaga</option>
              <option>Empresa</option>
              <option>Prensa</option>
            </select>
          </div>
          <div className="v8-form-row">
            <label className="v8-form-label">Mensaje</label>
            <textarea className="v8-form-textarea" placeholder="Contanos en qué podemos ayudarte" />
          </div>
          <div className="v8-form-foot">
            <span className="v8-form-note">
              Tus datos se procesan según nuestra política de privacidad.
            </span>
            <button className="v8-btn v8-btn-dark" type="submit">
              Enviar mensaje →
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

const ColoV8 = () => (
  <footer className="v8-colo">
    <div className="shell">
      <div className="v8-colo-grid">
        <div>
          <div className="v8-colo-mast">Himalaya <em>Salud</em></div>
          <p className="v8-colo-tag">
            "Una historia, muchas vidas."<br/>
            Tu salud en tus manos. Hecho en Buenos Aires, 2026.
          </p>
        </div>
        <div>
          <h5>Producto</h5>
          <a href="#producto">Portal Paciente</a>
          <a href="#historia">Historia Clínica</a>
          <a href="#producto">Botón de emergencia</a>
          <a href="#producto">Gestión familiar</a>
        </div>
        <div>
          <h5>Empresa</h5>
          <a href="#quienes">Quiénes Somos</a>
          <a href="#contacto">Para instituciones</a>
          <a href="#">Prensa</a>
          <a href="#">Trabajá con nosotros</a>
        </div>
        <div>
          <h5>Soporte</h5>
          <a href="#contacto">Contacto</a>
          <a href="#">Centro de ayuda</a>
          <a href="#">Términos · Privacidad</a>
          <a href="#">Estado del servicio</a>
        </div>
      </div>
      <div className="v8-colo-bar">
        <span>© 2026 Himalaya Salud · Buenos Aires</span>
        <span>Vol. I · Nº 01 · Edición 2026</span>
      </div>
    </div>
  </footer>
);

window.LandingV8 = { MastV8, CoverV8, ContenidoV8, HistoriaV8, QuienesV8, ProductoV8, ContactoV8, ColoV8 };
