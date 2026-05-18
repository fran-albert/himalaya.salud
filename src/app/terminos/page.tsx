import {
  FileText,
  ScrollText,
  RefreshCw,
  BookOpen,
  HeartPulse,
  UserCog,
  CreditCard,
  ShieldCheck,
  AlertTriangle,
  Ban,
  Megaphone,
  LogOut,
  Scale,
  CheckSquare,
  Mail,
} from "lucide-react";
import { BRAND, SHADOW } from "@/lib/brand-tokens";

const supportEmail = "contacto@himalayasalud.com.ar";

const sections = [
  {
    id: "preambulo",
    icon: ScrollText,
    title: "Términos y Condiciones de Uso",
    paragraphs: [
      `Los presentes Términos y Condiciones regulan el uso de la aplicación móvil Himalaya Salud (en adelante, "la Aplicación"), disponible para dispositivos iOS y Android.`,
      `La utilización de la Aplicación implica la aceptación plena y sin reservas de estos Términos y Condiciones. El Usuario declara ser mayor de edad y contar con la capacidad legal suficiente para celebrar el presente acuerdo.`,
      `El Usuario es responsable de contar con los medios tecnológicos necesarios para acceder a la Aplicación y de garantizar el adecuado funcionamiento de los mismos.`,
    ],
  },
  {
    id: "modificaciones",
    icon: RefreshCw,
    title: "1. Modificaciones en los Términos y Condiciones",
    paragraphs: [
      `La aplicación podrá modificar total o parcialmente los presentes Términos y Condiciones en cualquier momento. La versión vigente será publicada en la propia Aplicación y reemplazará a todas las anteriores.`,
      `Las modificaciones entrarán en vigencia desde su publicación. El uso continuado de la Aplicación por parte del Usuario será considerado como aceptación expresa de los Términos y Condiciones actualizados.`,
    ],
  },
  {
    id: "definiciones",
    icon: BookOpen,
    title: "2. Definiciones generales",
    paragraphs: [
      `2.1. Aplicación Himalaya Salud: La aplicación Himalaya Salud permite al paciente acceder a su Historia Clínica Electrónica (en adelante, "HCE") de manera centralizada, interoperable y segura, desde su dispositivo móvil. Dicha HCE se integra con la información proveniente de las instituciones de salud adheridas al sistema, obtenidas conforme al consentimiento libre, expreso e informado otorgado por el paciente para el acceso a sus datos personales de salud, en cumplimiento de la Ley N.º 25.326 de Protección de los Datos Personales, la Ley N.º 26.529 de Derechos del Paciente, y demás normativa complementaria aplicable.`,
      `La Aplicación es desarrollada por KOZACA S.A. (CUIT 30-71586195-6), con domicilio en Av. Pellegrini 2618, Piso 1, Rosario, Provincia de Santa Fe, quien detenta la titularidad de los derechos de propiedad intelectual y es responsable del soporte técnico. Su operación, gestión comercial y comercialización exclusiva se encuentran a cargo de HIMALAYA SALUD S.A.S. (CUIT 30-71886806-4), con domicilio en Av. La Quemada 1946, Firmat, Provincia de Santa Fe.`,
      `2.2. Paciente: Persona humana titular de la información médica contenida en la Historia Clínica Electrónica (HCE) integrada en la aplicación. El Paciente es el único titular de los datos personales de salud que forman parte de su HCE, conforme lo dispuesto por la Ley N.º 26.529 de Derechos del Paciente y la Ley N.º 25.326 de Protección de los Datos Personales. El Paciente puede acceder a su información a través de la aplicación, o autorizar expresamente a un tercero (representante legal, familiar o profesional de la salud) para que actúe como Usuario con acceso habilitado, en los términos del consentimiento otorgado.`,
      `2.3. Usuario: Persona humana que, en forma voluntaria o debidamente autorizada por el titular de la información, solicita el alta de una cuenta y/o accede a la aplicación Himalaya Salud para utilizar los servicios disponibles, incluyendo el acceso, visualización o gestión de información médica autorizada. Puede ser: a) el propio Paciente titular de la HCE; o b) un tercero autorizado por este (por ejemplo, un representante legal, progenitor, tutor o apoderado), en cuyo caso el acceso se limitará a los permisos otorgados por el Paciente o por la normativa vigente.`,
      `2.4. Historia Clínica Electrónica: Documento digital que registra antecedentes, evoluciones, estudios, internaciones, prescripciones y toda otra información clínica provista por las instituciones de salud adheridas.`,
      `2.5. Instituciones de Salud adheridas a la Aplicación: Entidades, clínicas, sanatorios, centros médicos, laboratorios y demás prestadores adheridos a la aplicación cuyas Historias Clínicas Electrónicas pueden ser solicitadas por el paciente y visualizadas a través de la aplicación. Toda nueva incorporación será debidamente informada al Usuario a través de la aplicación, manteniendo en todos los casos las garantías de seguridad y protección de datos previstas en la legislación vigente.`,
    ],
  },
  {
    id: "servicios",
    icon: FileText,
    title: "3. Servicios Ofrecidos",
    paragraphs: [
      `La Aplicación permite a los usuarios el acceso y la disposición, de forma centralizada e interoperable desde un dispositivo móvil, a su Historia Clínica Electrónica obrante en diferentes instituciones de salud adheridas al sistema. Asimismo, también ofrece a los usuarios la posibilidad de cargar documentación médica y/o estudios médicos a los fines de que los mismos consten en su Cuenta de Usuario. Por otra parte, habilita la visualización, descarga y portabilidad de la HCE.`,
    ],
  },
  {
    id: "hce",
    icon: HeartPulse,
    title: "4. Historia Clínica Electrónica",
    paragraphs: [
      `4.1. Solicitud y acceso a la HCE. La aceptación de los presentes Términos y Condiciones implica la solicitud por parte del paciente de su HCE obrante en las instituciones de salud adheridas a la aplicación. Formulada la solicitud, las instituciones de salud remitirán la HCE a Himalaya Salud S.A.S. con el fin de garantizar su visualización y portabilidad. Esto permitirá al Usuario acceder, visualizar, compartir y/o descargar su HCE directamente desde la aplicación.`,
      `4.2. Transmisión de HCE. La Aplicación permite al Usuario compartir su Historia Clínica Electrónica (HCE), ya sea en forma total o parcial, conforme a su exclusiva decisión. Para ello, el Usuario deberá seleccionar previamente los archivos o documentos que desea compartir. A tal fin, la Aplicación ofrece dos modalidades: 1) Descarga en formato PDF: El Usuario podrá descargar la documentación seleccionada en formato PDF y compartir dicho archivo por los medios que considere pertinentes. 2) Enlace seguro: El Usuario podrá generar un enlace seguro (URL) con token de acceso y tiempo de validez limitado, a fin de que terceros autorizados por él accedan al contenido compartido. En todos los casos, el Usuario asume plena y exclusiva responsabilidad por: la selección de la información que decide compartir, la transmisión y suministro de dicha información a terceros, el destino y uso que dichos terceros realicen de la información compartida. En consecuencia, el Usuario libera de toda responsabilidad a la Aplicación, a Himalaya Salud S.A.S., Kozaca S.A., a las Instituciones de Salud intervinientes y/o a cualquier otra persona humana o jurídica, respecto de cualquier consecuencia derivada de la transmisión, acceso, uso, divulgación, tratamiento o destino que terceros otorguen a la información compartida. El Usuario reconoce que es el único y exclusivo responsable por la transmisión de la información.`,
    ],
  },
  {
    id: "registro",
    icon: UserCog,
    title: "5. Registro y cuentas de usuario",
    paragraphs: [
      `5.1. Requisitos generales. Para poder acceder a las prestaciones que brinda la aplicación, el Paciente o Usuario deberá ser mayor de edad y capaz en los términos de la legislación argentina vigente.`,
      `5.2. Validación de identidad y datos personales. Con el objeto de garantizar la seguridad, autenticidad y trazabilidad de las cuentas de Usuario, la aplicación requerirá la validación de identidad del Usuario mediante el registro de datos provenientes de su Documento Nacional de Identidad (DNI). Asimismo, se realizará una validación biométrica de su rostro y de su huella dactilar. Luego, deberá ingresar su nombre de usuario ("login") y su respectiva contraseña ("password"). Cumplido ello, deberá suministrar a esta Plataforma su Información personal, responsabilizándose por la exactitud de esta información. En el caso que la Información Personal que nos brinde sea incorrecta o incompleta, imposibilitando la efectiva comprobación e identificación del usuario, podrá dar lugar a la suspensión y/o cancelación de la cuenta, sin derecho a indemnización, quedando exenta la Aplicación de cualquier responsabilidad.`,
      `5.3. Menores de edad y personas con capacidad restringida. El Usuario podrá tener asociados a su cuenta a los menores de edad y/o personas con capacidad restringida sobre los que ejerza la representación legal, debiendo informar dicha circunstancia al momento de crear su cuenta. A los fines de validar su identidad, deberá acreditar su carácter. En caso de menores de edad, deberán registrarse los datos provenientes del DNI del menor de edad y el DNI del padre, madre y/o tutor. En caso de que en el DNI del menor de edad no figuren los datos de los progenitores, deberá registrar la partida de nacimiento en copia certificada. En caso de persona con capacidad restringida, deberá presentar la resolución judicial que acredite su carácter en copia certificada. Dicha documentación complementaria deberá remitirse en copia certificada, por medio de carta certificada, dirigida a HIMALAYA SALUD S.A.S., Casilla de Correo Nº 26, C.P. 2630, Firmat, Provincia de Santa Fe, República Argentina. En caso de que el Usuario actúe como Padre o Madre de un menor de edad o apoyo o curador de una persona declarada judicialmente incapaz o con capacidad restringida, declara que cuenta con la facultad legal para acceder a los datos de su Historia Clínica, y asume plena responsabilidad por el uso de esta funcionalidad, manteniendo indemne a HIMALAYA SALUD S.A.S., KOZACA S.A y a las Instituciones de Salud intervinientes respecto de cualquier reclamo derivado del acceso y manejo de la información médica de sus representados. Alcanzada la mayoría de edad en los términos del Código Civil y Comercial de la Nación Argentina, los sujetos asociados a las cuentas se excluirán automáticamente de la cuenta del representante.`,
      `5.4. Firma electrónica. Cumplidos todos los pasos requeridos para el proceso de registro y validación, la cuenta quedará asociada de manera indubitable a la identidad del Usuario, mediante la verificación de los datos consignados en su Documento Nacional de Identidad (DNI) y la corroboración biométrica correspondiente. En tal sentido, el Usuario, al completar su registro en la Aplicación, emite una manifestación de voluntad válida, la cual reviste el carácter legal de firma electrónica conforme lo establecido por el artículo 5 de la Ley Nº 25.506 de Firma Digital, produciendo efectos jurídicos vinculantes respecto de las declaraciones y actos que realice en la Aplicación.`,
    ],
  },
  {
    id: "pagos",
    icon: CreditCard,
    title: "6. Pagos. Baja de cuenta. Revocación",
    paragraphs: [
      `6.1. Pagos. El Usuario acepta abonar todos los cargos asociados al uso de la Aplicación mediante los métodos habilitados.`,
      `6.2. Baja de cuenta. El Usuario podrá en cualquier momento solicitar la baja de su cuenta y la eliminación total o parcial de sus datos personales y de salud conforme el derecho de supresión previsto en la Ley 25.326, mediante solicitud por correo electrónico a contacto@himalayasalud.com.ar. La eliminación de los datos se realizará conforme a los plazos y condiciones establecidos en la norma aplicable, salvo que exista una obligación legal de retenerlos por un período determinado.`,
    ],
  },
  {
    id: "uso-datos",
    icon: ShieldCheck,
    title: "7. Uso de datos",
    paragraphs: [
      `7.1. Principios generales. La Aplicación garantiza que los datos personales y de salud son tratados con estricta confidencialidad y utilizados exclusivamente para los fines autorizados por el Paciente o Usuario, conforme lo dispuesto por la Ley 25.326 de Protección de Datos Personales, Ley 26.529 de Derechos del Paciente y su normativa complementaria.`,
      `7.2. Finalidades del uso. El Usuario autoriza de manera libre, expresa e informada a la Aplicación al acceso a sus datos o información sanitaria contenida en la HCE de su titularidad registrada en las Instituciones de salud adheridas al sistema, con la única finalidad de permitir al mismo Usuario visualizarla, descargarla o portarla. En caso de registrar a menores de edad o personas a su cargo, el Usuario autoriza el acceso a su información médica, a cuyos fines debe contar con la representación legal correspondiente. El acceso a los datos del Usuario se realiza conforme Ley 25.326, Ley 26.529 y normativa complementaria. La aplicación no almacena, conserva, integra, modifica ni administra datos o información, solamente procesa datos técnicos necesarios para el funcionamiento del servicio y actúa como medio de acceso autorizado a la información del Usuario registrada en las instituciones de salud adheridas al sistema, posibilitando únicamente su visualización, descarga o portabilidad por parte del Usuario.`,
      `7.5. Seguridad de la información. La Aplicación ha adoptado las medidas de seguridad, técnicas y organizativas apropiadas para garantizar la autenticidad, integridad, inalterabilidad y encriptación de los datos, incluyendo cifrado, autenticación de doble factor y registros de acceso. Toda información del Usuario, sus datos y los que ingresa para su registración se encuentra protegida y encriptada.`,
      `7.6. Derechos del Usuario. El usuario podrá ejercer el derecho de acceso, rectificación, actualización o supresión de sus datos personales mediante remisión de correo electrónico a contacto@himalayasalud.com.ar. Su solicitud será atendida dentro de un plazo máximo de diez (10) días hábiles. Podrá ejercer estos derechos de forma gratuita y con una periodicidad no inferior a seis meses, salvo que demuestre un interés legítimo conforme a lo dispuesto por el artículo 14, inciso 3, de la Ley N.º 25.326. En caso de supresión, los datos serán eliminados de nuestra base de datos, perderá el acceso a la HCE y no podrá continuar utilizando la aplicación.`,
      `7.7. Disolución de la Aplicación. En caso de cese definitivo del servicio, la Aplicación procederá a eliminar en forma inmediata y permanente toda información, datos temporales y/o archivos en caché generados por su funcionamiento, garantizando que no subsista ningún dato vinculado a los usuarios.`,
    ],
  },
  {
    id: "responsabilidad-usuario",
    icon: AlertTriangle,
    title: "8. Responsabilidad de los usuarios. Restricciones generales",
    paragraphs: [
      `8.1. Obligaciones del Usuario. El usuario se obliga a cumplir con todas las disposiciones de los Términos y Condiciones en todo momento mientras use la Aplicación. Se lo autoriza a acceder y utilizar la Aplicación sólo para los fines mencionados y con sujeción a las condiciones específicas que a continuación se indican. Su inobservancia constituirá un incumplimiento de los presentes Términos y Condiciones.`,
    ],
    list: [
      { desc: "Proveer información verídica, completa y actualizada, incluyendo nombre completo, DNI, fecha de nacimiento, dirección y números de teléfono." },
      { desc: "Mantener actualizados sus datos personales." },
      { desc: "Abonar los costos del servicio." },
      { desc: "Solicitar su HCE." },
      { desc: "Custodiar sus credenciales de acceso y brindar acceso a su HCE." },
    ],
    extraParagraphs: [
      `8.2. Usos prohibidos. El Usuario se obliga a utilizar la Aplicación únicamente para los fines previstos y se abstiene de realizar cualquier conducta que pueda desnaturalizar su objeto, afectar su normal funcionamiento, vulnerar derechos de terceros o infringir la normativa aplicable. Quedan expresamente prohibidas, entre otras: la recolección indebida de datos y el envío de comunicaciones o publicidad no solicitada ("spam"); los usos ilícitos o dañosos; la automatización no autorizada (bots, scripts); el contenido prohibido (ilícito, abusivo, difamatorio, obsceno, discriminatorio o que vulnere derechos personalísimos o de propiedad intelectual); la publicidad y comunicaciones no autorizadas; la suplantación de identidad o el registro con datos falsos o múltiples cuentas; la carga de datos de terceros sin autorización; la introducción de malware o ataques informáticos; las conductas ilícitas o incitantes; la afectación a la experiencia de otros usuarios; la alteración de la Aplicación o sus sistemas de seguridad; y los usos comerciales no autorizados sin consentimiento previo y por escrito de Himalaya Salud S.A.S.`,
      `8.3. Uso indebido. Usted acepta ser el único responsable de toda la actividad que tenga lugar en y con su cuenta. Esta aplicación no será responsable de los daños y/o perjuicios que se deriven de un uso no autorizado de su cuenta. Cualquier uso indebido, negligente o fraudulento de sus credenciales o de la información suministrada será de exclusiva responsabilidad del usuario. En caso de uso no autorizado de su cuenta o cualquier otra infracción o brecha de seguridad, el Usuario debe notificar inmediatamente a contacto@himalayasalud.com.ar.`,
    ],
  },
  {
    id: "limitacion",
    icon: Ban,
    title: "9. Limitación y exoneración de responsabilidad",
    paragraphs: [
      `9.1. Información sanitaria. La Aplicación actúa como intermediario tecnológico y no interviene en la generación, precisión o contenido de la información sanitaria proporcionada por las Instituciones de Salud. Por lo tanto, no será responsable por errores, omisiones o desactualizaciones de la HCE, ni por el uso que el usuario haga de dicha información. En caso de discrepancias o errores el Paciente o su representante legal deberá/n contactarse con la institución médica pertinente.`,
      `9.2. Exoneración. El Paciente y/o Usuario libera de manera expresa y definitiva a Himalaya Salud S.A.S., a Kozaca S.A. y a las instituciones de salud que almacenan y gestionan su Historia Clínica Electrónica (HCE), respecto de cualquier responsabilidad por daños, pérdidas o perjuicios que pudieran derivarse del uso, manejo, acceso, almacenamiento, descarga, portabilidad o transmisión de sus datos personales y médicos a través de la Aplicación. Esta exoneración comprende, entre otros supuestos, el acceso no autorizado, pérdida, alteración, divulgación o mal uso de la información, siempre que dicho acceso o transmisión: a) haya sido solicitado, iniciado o permitido por el propio Paciente y/o Usuario mediante consentimiento libre, expreso e informado, y/o; b) se derive de la negligencia, descuido, divulgación, préstamo, extravío o inadecuada custodia de sus credenciales, claves de acceso o dispositivos utilizados para operar la Aplicación.`,
      `9.3. Continuidad del servicio. La Aplicación no garantiza la continuidad ininterrumpida del servicio ni la ausencia de interrupciones o errores y no será responsable por daños o perjuicios que pudieran derivarse de fallas en el sistema, en el servidor, en Internet o cualquier otra falla técnica ajena a su control.`,
      `9.4. Carácter de la información. La información contenida en la aplicación es para fines informativos y de gestión personal por el Usuario y bajo ninguna circunstancia debe ser interpretada como asesoramiento, diagnóstico o tratamiento médico y no reemplaza el juicio o consulta médica.`,
    ],
  },
  {
    id: "publicidad",
    icon: Megaphone,
    title: "10. Publicidad. Vínculos de esta aplicación",
    paragraphs: [
      `10.1. La Aplicación puede publicitarse y/o contener enlaces a sitios de terceros no siendo responsable del contenido ni de las prácticas de privacidad de dichos sitios. El uso del usuario de sitios web de terceros es bajo su propio riesgo y sujeto a los términos y condiciones de uso de dichos sitios.`,
      `10.2. La Aplicación no utilizará imágenes ni datos sensibles del Usuario con fines comerciales. Únicamente podrá utilizarse información, imágenes y/o datos no sensibles y no identificatorios para fines estadísticos, de mejora del servicio, comunicaciones institucionales, comerciales y/o publicitarios.`,
    ],
  },
  {
    id: "terminacion",
    icon: LogOut,
    title: "11. Terminación de la relación",
    paragraphs: [
      `11.1. Los presentes Términos y Condiciones mantendrán su vigencia y serán aplicables mientras el Usuario utilice la Aplicación y hasta la terminación del vínculo conforme las disposiciones siguientes.`,
      `11.2. Terminación por el Usuario. El Usuario podrá finalizar su relación con la Aplicación en cualquier momento solicitando la baja de su cuenta y la supresión total o parcial de sus datos personales y sensibles, mediante correo electrónico dirigido a contacto@himalayasalud.com.ar, conforme lo previsto en estos Términos y en la Ley 25.326. La baja producirá la pérdida de acceso a la HCE a través de la Aplicación, sin perjuicio de las obligaciones legales de conservación que pudieran corresponder a las Instituciones de Salud.`,
      `11.3. Terminación por la Aplicación. La Aplicación podrá suspender o dar de baja la cuenta del Usuario, sin derecho a indemnización alguna, cuando: a) el Usuario incumpla cualquiera de las obligaciones asumidas en estos Términos y Condiciones; b) en cumplimiento de una obligación legal o decisión de autoridad competente; c) por razones técnicas, operativas, de seguridad, regulatorias o de sostenibilidad del servicio, la continuidad de la Aplicación resulte inviable o aconsejable a criterio razonable. En tales supuestos, la empresa podrá disponer la suspensión temporal o definitiva del acceso, notificando al Usuario por los canales registrados, cuando ello sea posible y razonable.`,
      `11.4. Efectos de la terminación. La terminación del vínculo no afectará los derechos y obligaciones que hubieran nacido durante la vigencia de estos Términos y Condiciones, ni aquellas cláusulas que por su naturaleza deban subsistir (incluyendo, sin limitación, las relativas a confidencialidad, limitación de responsabilidad, propiedad de datos, y disposiciones generales).`,
    ],
  },
  {
    id: "disposiciones",
    icon: Scale,
    title: "12. Disposiciones generales",
    paragraphs: [
      `12.1. Estos Términos y Condiciones constituyen el acuerdo completo entre el usuario y la aplicación, y rigen el uso de la misma.`,
      `12.2. Si alguna cláusula del presente fuese declarada inválida o sin efecto legal, las demás disposiciones permanecerán vigentes en todos sus aspectos.`,
      `12.3. La no exigencia por parte de la aplicación, del cumplimiento de cualquier derecho o disposición de los Términos y Condiciones no constituirá una renuncia o dispensa a su cumplimiento ni a ninguna otra de las contenidas en estos Términos y Condiciones.`,
      `12.4. Los Términos y Condiciones y todos los derechos y obligaciones relacionadas con el mismo, como también su interpretación o significado de sus términos, serán regidos, interpretados y ejecutados de conformidad con la legislación vigente en la República Argentina.`,
      `12.5. En caso de surgir cualquier diferencia, desacuerdo, controversia o conflicto derivada del uso de la aplicación, y que no pudiese ser solucionada extrajudicialmente por las partes, ellas se someten a la jurisdicción de los tribunales ordinarios de la ciudad de Rosario, provincia de Santa Fe, República Argentina, con renuncia a cualquier otro fuero o jurisdicción que pudiera corresponder por razón de nacionalidad o domicilio, incluido el federal.`,
    ],
  },
  {
    id: "aceptacion",
    icon: CheckSquare,
    title: "13. Aceptación de los Términos y Condiciones",
    paragraphs: [
      `13.1. Al acceder, registrarse o utilizar la Aplicación, el Usuario declara haber leído, comprendido y aceptado íntegramente los presentes Términos y Condiciones. Si no está de acuerdo con ellos, deberá abstenerse de utilizar la Aplicación.`,
      `13.2. La aceptación expresa de los Términos y Condiciones —mediante el registro y/o la selección de la opción "Acepto"— constituye condición indispensable para el uso de la Aplicación. Al hacerlo, el Usuario confirma que cuenta con la capacidad legal necesaria para obligarse conforme lo aquí establecido.`,
      `13.3. La aceptación de los presentes Términos y Condiciones genera un vínculo jurídico válido y exigible entre el Usuario y la Aplicación, cuya vigencia se mantiene mientras se utilicen los servicios ofrecidos.`,
    ],
  },
  {
    id: "contacto",
    icon: Mail,
    title: "14. Contacto",
    paragraphs: [
      `Para cualquier duda o consulta puede contactarnos a través del correo electrónico o de los canales de atención al cliente.`,
    ],
    email: supportEmail,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: BRAND.bg }}>
      <div className="container mx-auto px-4 pt-32 pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="inline-flex items-center gap-2 text-xs font-bold uppercase"
            style={{ letterSpacing: "1.8px", color: BRAND.mint900 }}
          >
            <span
              style={{
                width: 18,
                height: 2,
                borderRadius: 2,
                backgroundColor: BRAND.mint500,
              }}
            />
            Documento legal
          </span>
          <h1
            className="mt-5 text-4xl font-extrabold sm:text-5xl"
            style={{
              color: BRAND.teal700,
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
            }}
          >
            Términos y Condiciones
          </h1>
          <p className="mt-4 text-base" style={{ color: BRAND.textCaption }}>
            Última actualización: 2 de Diciembre de 2025
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl space-y-5">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <article
                key={section.id}
                id={section.id}
                style={{
                  backgroundColor: BRAND.bg,
                  border: `1px solid ${BRAND.teal50}`,
                  borderRadius: 16,
                  boxShadow: SHADOW.card,
                  padding: "28px 28px",
                  scrollMarginTop: 96,
                }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="flex items-center justify-center"
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      backgroundColor: BRAND.teal50,
                      color: BRAND.teal700,
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={22} />
                  </span>
                  <div className="flex-1">
                    <h2
                      className="text-lg font-bold sm:text-xl"
                      style={{
                        color: BRAND.teal700,
                        letterSpacing: "-0.015em",
                      }}
                    >
                      {section.title}
                    </h2>

                    <div className="mt-4 space-y-4">
                      {section.paragraphs.map((p, i) => (
                        <p
                          key={i}
                          className="text-sm leading-relaxed"
                          style={{ color: BRAND.textBody }}
                        >
                          {p}
                        </p>
                      ))}
                    </div>

                    {section.list && (
                      <ul className="mt-4 space-y-2.5">
                        {section.list.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm"
                            style={{ color: BRAND.textBody }}
                          >
                            <span
                              className="mt-2 flex-shrink-0"
                              style={{
                                width: 6,
                                height: 6,
                                borderRadius: "50%",
                                backgroundColor: BRAND.mint700,
                              }}
                            />
                            <span>{item.desc}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.extraParagraphs && (
                      <div className="mt-4 space-y-4">
                        {section.extraParagraphs.map((p, i) => (
                          <p
                            key={i}
                            className="text-sm leading-relaxed"
                            style={{ color: BRAND.textBody }}
                          >
                            {p}
                          </p>
                        ))}
                      </div>
                    )}

                    {section.email && (
                      <a
                        href={`mailto:${section.email}`}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold"
                        style={{
                          backgroundColor: BRAND.mint50,
                          color: BRAND.mint900,
                          padding: "10px 16px",
                          borderRadius: 8,
                        }}
                      >
                        <Mail size={16} />
                        {section.email}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
