import {
  FileText,
  ScrollText,
  RefreshCw,
  BookOpen,
  HeartPulse,
  ShieldAlert,
  FolderLock,
  UserCog,
  CreditCard,
  ShieldCheck,
  AlertTriangle,
  Ban,
  Copyright,
  Megaphone,
  LogOut,
  Scale,
  CheckSquare,
  Mail,
  Download,
} from "lucide-react";
import { BRAND, SHADOW } from "@/lib/brand-tokens";

const pdfUrl = "/legales/terminos-y-condiciones.pdf";

const supportEmail = "notificaciones@himalayasalud.com.ar";

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
      `La Aplicación podrá modificar total o parcialmente los presentes Términos y Condiciones en cualquier momento. La versión vigente será publicada en la propia Aplicación y reemplazará a todas las anteriores.`,
      `Las modificaciones entrarán en vigencia desde su publicación. El uso continuado de la Aplicación por parte del Usuario será considerado como aceptación expresa de los Términos y Condiciones actualizados.`,
    ],
  },
  {
    id: "definiciones",
    icon: BookOpen,
    title: "2. Definiciones generales",
    paragraphs: [
      `2.1. Aplicación Himalaya Salud: La aplicación Himalaya Salud permite al paciente acceder a su Historia Clínica Electrónica (en adelante, "HCE") de manera centralizada, interoperable y segura, desde su dispositivo móvil. Dicha HCE se integra con la información proveniente de las instituciones de salud adheridas al sistema, obtenida conforme al consentimiento libre, expreso e informado otorgado por el paciente para el acceso a sus datos personales de salud, en cumplimiento de la Ley N.º 25.326 de Protección de los Datos Personales, la Ley N.º 26.529 de Derechos del Paciente y demás normativa complementaria aplicable. La Aplicación es desarrollada por KOZACA S.A. (CUIT 30-71586195-6), con domicilio en calle Tucumán 2112 PB, de la ciudad de Rosario, Provincia de Santa Fe, a cuyo cargo se encuentran el desarrollo, el soporte técnico y el almacenamiento de los datos en sus servidores ubicados en la ciudad de Rosario. La operación, gestión comercial y comercialización exclusiva del servicio se encuentran a cargo de HIMALAYA SALUD S.A.S. (CUIT 30-71886806-4), con domicilio en Av. La Quemada 1946, Firmat, Provincia de Santa Fe. La titularidad de los derechos de propiedad intelectual sobre la Aplicación se rige por la cláusula 12.`,
      `2.2. Paciente: Persona humana titular de la información médica contenida en la Historia Clínica Electrónica (HCE) integrada en la Aplicación. El Paciente es el único titular de los datos personales de salud que forman parte de su HCE, conforme lo dispuesto por la Ley N.º 26.529 de Derechos del Paciente y la Ley N.º 25.326 de Protección de los Datos Personales. El Paciente puede acceder a su información a través de la Aplicación, o autorizar expresamente a un tercero (representante legal, familiar o profesional de la salud) para que actúe como Usuario con acceso habilitado, en los términos del consentimiento otorgado.`,
      `2.3. Usuario: Persona humana que, en forma voluntaria o debidamente autorizada por el titular de la información, solicita el alta de una cuenta y/o accede a la Aplicación Himalaya Salud para utilizar los servicios disponibles, incluyendo el acceso, visualización o gestión de información médica autorizada. Puede ser: a) el propio Paciente titular de la HCE; o b) un tercero autorizado por este (por ejemplo, un representante legal, progenitor, tutor o apoderado), en cuyo caso el acceso se limitará a los permisos otorgados por el Paciente o por la normativa vigente.`,
      `2.4. Historia Clínica Electrónica: Documento digital que registra antecedentes, evoluciones, estudios, internaciones, prescripciones y toda otra información clínica provista por las instituciones de salud adheridas.`,
      `2.5. Instituciones de Salud adheridas a la Aplicación: Entidades, clínicas, sanatorios, centros médicos, laboratorios y demás prestadores adheridos a la Aplicación cuyas Historias Clínicas Electrónicas pueden ser solicitadas por el paciente y visualizadas a través de la Aplicación. Toda nueva incorporación será debidamente informada al Usuario a través de la Aplicación, manteniendo en todos los casos las garantías de seguridad y protección de datos previstas en la legislación vigente.`,
      `2.6. Planes de Suscripción: Modalidades de contratación de la Aplicación que determinan los servicios y funcionalidades disponibles para el Usuario. La disponibilidad del acceso a la Historia Clínica Electrónica, del Botón de Pánico y de las demás funcionalidades depende del Plan de Suscripción contratado por el Usuario.`,
      `2.7. Datos Auto Ingresados: Información, documentación y datos —incluidos datos de salud— que el propio Usuario carga, registra o incorpora en la Aplicación sobre sí mismo o sobre las personas que tiene válidamente asociadas a su cuenta. Comprende, entre otros, la documentación y los estudios incorporados en el módulo "Mi Portal Paciente" y la información registrada en el módulo "Mediciones". Los Datos Auto Ingresados son distintos de la Historia Clínica Electrónica: no provienen de las Instituciones de Salud adheridas y son ingresados bajo la exclusiva responsabilidad del Usuario.`,
      `2.8. Botón de Pánico: Funcionalidad de la Aplicación que permite al Usuario, mediante una acción manual y voluntaria, generar y enviar una alerta a los Contactos previamente designados por él. La alerta puede incluir la ubicación geográfica aproximada del dispositivo y los Datos Auto Ingresados del Usuario. El Botón de Pánico constituye una herramienta accesoria de notificación entre particulares y no configura, en ningún caso, un servicio de emergencias médicas, de asistencia sanitaria, de atención prehospitalaria, de monitoreo, de seguridad ni de respuesta ante emergencias de ninguna naturaleza.`,
      `2.9. Contactos: Personas humanas o servicios designados de forma libre y voluntaria por el Usuario para recibir las alertas generadas por el Botón de Pánico. El Usuario podrá configurar hasta seis (6) Contactos, conforme la cláusula 5.3.`,
      `2.10. Datos transmitidos en la alerta: Son los Datos Auto Ingresados del Usuario que la Aplicación transmite a los Contactos al activarse el Botón de Pánico, consistentes en la documentación incorporada en el módulo "Mi Portal Paciente" y la información registrada en el módulo "Mediciones".`,
    ],
  },
  {
    id: "servicios",
    icon: FileText,
    title: "3. Servicios Ofrecidos",
    paragraphs: [
      `La Aplicación ofrece a los Usuarios distintos servicios y funcionalidades, cuya disponibilidad depende del Plan de Suscripción contratado. Entre ellos: a) el acceso y la disposición, de forma centralizada e interoperable desde un dispositivo móvil, a la Historia Clínica Electrónica obrante en las instituciones de salud adheridas al sistema, así como su visualización, descarga y portabilidad; b) la posibilidad de cargar documentación y/o estudios médicos para que consten en la cuenta del Usuario, conforme la cláusula 6; c) el Botón de Pánico, conforme la cláusula 5; y d) las demás funcionalidades informadas en la Aplicación. El detalle de los servicios incluidos en cada Plan de Suscripción se encuentra disponible en la información comercial vigente publicada en la Aplicación.`,
    ],
  },
  {
    id: "hce",
    icon: HeartPulse,
    title: "4. Historia Clínica Electrónica",
    paragraphs: [
      `4.1. Solicitud y acceso a la HCE. La aceptación de los presentes Términos y Condiciones implica la solicitud por parte del paciente de su HCE obrante en las instituciones de salud adheridas a la Aplicación. Formulada la solicitud, las instituciones de salud remitirán la HCE a Himalaya Salud S.A.S. con el fin de garantizar su visualización y portabilidad. Esto permitirá al Usuario acceder, visualizar, compartir y/o descargar su HCE directamente desde la Aplicación.`,
      `4.2. Transmisión de HCE. La Aplicación permite al Usuario compartir su Historia Clínica Electrónica (HCE), ya sea en forma total o parcial, conforme a su exclusiva decisión. Para ello, el Usuario deberá seleccionar previamente los archivos o documentos que desea compartir. A tal fin, la Aplicación ofrece dos modalidades: 1) Descarga en formato PDF: el Usuario podrá descargar la documentación seleccionada en formato PDF y compartir dicho archivo por los medios que considere pertinentes. 2) Enlace seguro: el Usuario podrá generar un enlace seguro (URL) con token de acceso y tiempo de validez limitado, a fin de que terceros autorizados por él accedan al contenido compartido. En todos los casos, el Usuario asume plena y exclusiva responsabilidad por: la selección de la información que decide compartir, la transmisión y suministro de dicha información a terceros, y el destino y uso que dichos terceros realicen de la información compartida. En consecuencia, el Usuario libera de toda responsabilidad a la Aplicación, a Himalaya Salud S.A.S., a Kozaca S.A., a las Instituciones de Salud intervinientes y/o a cualquier otra persona humana o jurídica, respecto de cualquier consecuencia derivada de la transmisión, acceso, uso, divulgación, tratamiento o destino que terceros otorguen a la información compartida. El Usuario reconoce que es el único y exclusivo responsable por la transmisión de la información.`,
    ],
  },
  {
    id: "boton-panico",
    icon: ShieldAlert,
    title: "5. Botón de Pánico",
    paragraphs: [
      `5.1. Naturaleza y alcance del servicio. El Botón de Pánico es una herramienta accesoria que permite al Usuario notificar a sus Contactos una situación que él considere de riesgo. La Aplicación, Himalaya Salud S.A.S. y Kozaca S.A. no prestan, a través de esta funcionalidad, ningún servicio de emergencias médicas, de urgencias, de atención prehospitalaria, de ambulancias, de monitoreo, de vigilancia ni de respuesta ante emergencias. El Botón de Pánico NO reemplaza ni sustituye a los servicios públicos o privados de emergencias (entre ellos, los números 911, 107/SAME, bomberos, defensa civil o cualquier otro servicio de urgencia). Ante una situación de emergencia, el Usuario debe comunicarse de forma directa e inmediata con dichos servicios oficiales, con independencia del uso del Botón de Pánico.`,
      `5.2. Funcionamiento y disponibilidad. El correcto funcionamiento del Botón de Pánico depende de múltiples factores ajenos al control de la Aplicación, entre ellos: la disponibilidad y calidad de la conexión a Internet y de la señal de telefonía móvil; la disponibilidad y precisión de la señal de geolocalización (GPS); el nivel de carga y el estado del dispositivo; los permisos del sistema operativo otorgados por el Usuario; el funcionamiento de los proveedores tecnológicos externos utilizados para el envío de mensajes y llamadas; y la disponibilidad, recepción efectiva y reacción de los Contactos. En consecuencia, la Aplicación no garantiza que la alerta se genere, transmita, entregue o reciba en todos los casos, ni que lo haga de forma íntegra, oportuna o precisa.`,
      `5.3. Contactos. El Usuario podrá configurar hasta seis (6) Contactos, organizados en dos grupos: (i) hasta tres (3) contactos principales, que reciben mensajería y llamada; y (ii) hasta tres (3) contactos adicionales, que reciben únicamente mensajería y están sugeridos para profesionales o servicios de salud, tales como el médico de cabecera, la institución sanitaria o un servicio de ambulancia y/o emergencias. La incorporación de cada contacto principal requiere su confirmación mediante un código de verificación (OTP) que la Aplicación le remite; hasta tanto el contacto principal no preste dicha confirmación, permanecerá en estado pendiente y no recibirá las alertas del Botón de Pánico. Los contactos adicionales, por su naturaleza de servicios profesionales o sanitarios respecto de los cuales no resulta operativamente posible obtener una confirmación, se incorporan en forma directa por el Usuario y quedan activos al instante, sin perjuicio del aviso que la Aplicación muestra al Usuario sobre su responsabilidad por la veracidad del número consignado y por la procedencia de la designación. El Usuario es el único responsable por la veracidad y actualización de los datos consignados y declara contar con la autorización de cada Contacto para registrar sus datos y para que reciba, a través de mensajería y/o llamadas automáticas, las alertas, la ubicación y los Datos Auto Ingresados, manteniendo indemnes a Himalaya Salud S.A.S. y a Kozaca S.A. El Usuario podrá cancelar la designación de un Contacto en cualquier momento.`,
      `5.4. Geolocalización. El Usuario autoriza de manera libre, expresa e informada a la Aplicación a acceder a la ubicación geográfica de su dispositivo y a transmitirla a los Contactos al activarse el Botón de Pánico. Dicho acceso se realiza con la única finalidad de permitir el funcionamiento del Botón de Pánico y requiere que el Usuario otorgue y mantenga habilitados los permisos de ubicación en su dispositivo. La información de ubicación es de carácter aproximado y puede presentar imprecisiones o desactualizaciones derivadas de factores técnicos ajenos a la Aplicación.`,
      `5.5. Datos Auto Ingresados. Al activarse el Botón de Pánico, la Aplicación transmite a los Contactos los Datos Auto Ingresados del Usuario, consistentes en la documentación incorporada por él en el módulo "Mi Portal Paciente" y la información registrada por él en el módulo "Mediciones". El Usuario reconoce y acepta que dichos datos son cargados e ingresados por él mismo, bajo su exclusiva responsabilidad, siendo el único responsable por su veracidad, exactitud, vigencia y actualización. El Usuario autoriza de manera libre, expresa e informada la transmisión de los Datos Auto Ingresados a los Contactos que haya designado, y asume la responsabilidad exclusiva por el contenido transmitido y por el uso que dichos Contactos hagan de la información. Los Datos Auto Ingresados no provienen de las Instituciones de Salud adheridas ni integran la Historia Clínica Electrónica.`,
      `5.6. Registro de activaciones. Con la finalidad de garantizar la trazabilidad del servicio, brindar soporte, prevenir usos indebidos y cumplir eventuales obligaciones legales, la Aplicación registra cada activación del Botón de Pánico, conservando la fecha, la hora, la ubicación informada y la identificación de los Contactos notificados durante un plazo de doce (12) meses contados desde cada activación, salvo que un plazo mayor resulte necesario para atender un reclamo, cumplir una obligación legal o responder a un requerimiento de autoridad competente. El Usuario podrá ejercer respecto de esta información los derechos de acceso, rectificación, actualización y supresión previstos en la cláusula 9.4 y en la Ley N.º 25.326.`,
      `5.7. Activaciones accidentales o indebidas. El Usuario es el único responsable por las activaciones del Botón de Pánico, incluidas las activaciones accidentales, erróneas o injustificadas, así como por las consecuencias que de ellas se deriven respecto de los Contactos o de terceros. La Aplicación dispone de mecanismos destinados a prevenir activaciones accidentales y de una ventana de tiempo posterior al envío para que el Usuario informe que se trató de una falsa alarma. El uso del Botón de Pánico con fines distintos de los previstos, de forma abusiva o que pueda configurar una falsa alarma, constituye un incumplimiento de los presentes Términos y Condiciones.`,
      `5.8. Costos y cuota de activaciones. Los mensajes y llamadas generados por la activación del Botón de Pánico se encuentran incluidos en el Plan de Suscripción contratado por el Usuario que comprenda esta funcionalidad, sin que ello implique un cargo adicional. Dicha inclusión está sujeta a una cuota mensual de activaciones, cuya cantidad depende del Plan de Suscripción contratado y se detalla en la información comercial vigente publicada en la Aplicación. La Aplicación notificará al Usuario, dentro de la propia aplicación, a medida que se aproxime al límite de su cuota. Alcanzada la cuota mensual, el Botón de Pánico podrá quedar limitado o temporalmente suspendido hasta el inicio del siguiente ciclo, circunstancia que será informada al Usuario. La cuota responde a un uso razonable de la funcionalidad.`,
      `5.9. Permisos del dispositivo. El funcionamiento del Botón de Pánico requiere que el Usuario otorgue y mantenga habilitados, en su dispositivo, los permisos necesarios (entre ellos, ubicación y notificaciones). La revocación o falta de otorgamiento de dichos permisos impedirá, total o parcialmente, el funcionamiento de la funcionalidad, sin que ello genere responsabilidad alguna para la Aplicación, Himalaya Salud S.A.S. o Kozaca S.A.`,
      `5.10. Disponibilidad según el Plan. El Botón de Pánico se encuentra disponible únicamente en los Planes de Suscripción que expresamente lo incluyan, conforme a la información comercial vigente publicada en la Aplicación.`,
      `5.11. Ausencia de garantía de resultado. Contactos profesionales o de servicios. El Botón de Pánico permite al Usuario enviar una alerta, pero no garantiza que la situación de riesgo se resuelva ni que el Usuario reciba asistencia efectiva. El Usuario puede designar como Contacto tanto a personas de su entorno como a profesionales de la salud, servicios de emergencias médicas, ambulancias u otros servicios prestados por terceros. En todos los casos, la Aplicación se limita a transmitir la alerta al Contacto designado por el Usuario: no contrata, coordina, supervisa, dirige ni garantiza la disponibilidad, la respuesta, la oportunidad, la calidad ni el resultado de la atención que dicho Contacto pueda o no brindar. La relación entre el Usuario y el profesional o servicio que este designe como Contacto es ajena a la Aplicación, a Himalaya Salud S.A.S. y a Kozaca S.A., quienes no son parte de dicha relación. En consecuencia, la falta de respuesta, la demora, la negativa, la inacción, la imposibilidad de prestar asistencia, el costo o la calidad de los servicios del Contacto no generan responsabilidad alguna para la Aplicación, Himalaya Salud S.A.S. ni Kozaca S.A.`,
      `5.12. Dependencia de proveedores tecnológicos externos. El Botón de Pánico requiere, para su funcionamiento, la intervención de proveedores tecnológicos externos, en particular los servicios de mensajería, de mensajería de WhatsApp, de telefonía y de geolocalización utilizados para generar y transmitir la alerta. Dichos proveedores no son controlados por la Aplicación, Himalaya Salud S.A.S. ni Kozaca S.A. Si cualquiera de ellos sufre una interrupción, caída, falla, degradación, tarea de mantenimiento, suspensión o cese de su servicio, la alerta podría no generarse, transmitirse, entregarse o recibirse, de forma total o parcial, o hacerlo con demora o de manera incompleta. El Usuario reconoce y acepta esta circunstancia y que ni la Aplicación, ni Himalaya Salud S.A.S., ni Kozaca S.A. serán responsables por las consecuencias derivadas de fallas, interrupciones o indisponibilidad de los proveedores tecnológicos externos. Se recomienda al Usuario no depender exclusivamente del Botón de Pánico y recurrir de forma directa a los servicios oficiales de emergencia.`,
    ],
  },
  {
    id: "portal-paciente",
    icon: FolderLock,
    title: "6. Mi Portal Paciente y Datos Auto Ingresados",
    paragraphs: [
      `6.1. Espacio personal del Usuario. La Aplicación pone a disposición del Usuario un espacio personal para que este cargue y conserve sus Datos Auto Ingresados. El Usuario autoriza de manera libre, expresa e informada el almacenamiento y conservación de dichos Datos Auto Ingresados, con la única finalidad de prestar el servicio contratado y permitir al Usuario su visualización, organización, descarga y, cuando el Usuario así lo decida, su transmisión a terceros en forma total o parcial.`,
      `6.2. Titularidad y tratamiento. El Usuario es el único titular de los Datos Auto Ingresados. El desarrollo, el soporte técnico y el almacenamiento de los Datos Auto Ingresados se encuentran a cargo de Kozaca S.A., que aloja la información en sus propios servidores ubicados en la ciudad de Rosario, Provincia de Santa Fe, República Argentina; la operación y comercialización del servicio se encuentran a cargo de Himalaya Salud S.A.S. Los Datos Auto Ingresados se almacenan y procesan por cuenta del Usuario, con la única finalidad de prestar el servicio contratado; no se utilizan para fines propios ni se ceden a terceros.`,
      `6.3. Seguridad y exactitud. Los Datos Auto Ingresados se almacenan con medidas de seguridad técnicas y organizativas apropiadas, incluyendo cifrado en tránsito y en reposo, segregación de la información por Usuario y acceso restringido. El Usuario es el único responsable por la veracidad, exactitud, licitud y vigencia de los Datos Auto Ingresados que incorpore.`,
      `6.4. Supresión y conservación. El Usuario podrá suprimir sus Datos Auto Ingresados, total o parcialmente, en cualquier momento, conforme el derecho de supresión previsto en la cláusula 9.4 y en la Ley N.º 25.326. Los Datos Auto Ingresados se conservan mientras la cuenta del Usuario permanezca activa. Producida la baja de la cuenta, los Datos Auto Ingresados serán eliminados dentro de los treinta (30) días corridos posteriores —plazo que coincide con el período de gracia de la baja de cuenta—, salvo que exista una obligación legal de conservarlos por un plazo mayor.`,
      `6.5. Límites de almacenamiento. El almacenamiento de los Datos Auto Ingresados se circunscribe a los límites de capacidad correspondientes al Plan de Suscripción contratado por el Usuario.`,
      `6.6. Datos de terceros. Cuando el Usuario cargue, registre o incorpore Datos Auto Ingresados correspondientes a terceros —incluidos sus hijos menores de edad, personas a su cargo u otras personas asociadas a su cuenta—, declara y garantiza contar con la representación legal o la autorización suficiente para hacerlo. El Usuario es el único responsable por dicha incorporación de datos y por la licitud, veracidad y exactitud de esa información, y mantiene indemnes a Himalaya Salud S.A.S. y a Kozaca S.A. frente a cualquier reclamo de terceros que pudiera derivarse de la carga de datos ajenos.`,
    ],
  },
  {
    id: "registro",
    icon: UserCog,
    title: "7. Registro y cuentas de usuario",
    paragraphs: [
      `7.1. Requisitos generales. Para poder acceder a las prestaciones que brinda la Aplicación, el Paciente o Usuario deberá ser mayor de edad y capaz en los términos de la legislación argentina vigente.`,
      `7.2. Validación de identidad y datos personales. La validación de identidad mediante el registro de datos del Documento Nacional de Identidad (DNI) y la validación biométrica será exigible para los Planes de Suscripción que incluyan el acceso a la Historia Clínica Electrónica. Para los restantes Planes, el registro del Usuario se realizará conforme a los requisitos que la Aplicación informe en cada caso. Cuando corresponda la validación de identidad, y con el objeto de garantizar la seguridad, autenticidad y trazabilidad de las cuentas de Usuario, la Aplicación requerirá el registro de datos provenientes del Documento Nacional de Identidad (DNI) del Usuario y una validación biométrica de su rostro y de su huella dactilar. Luego, el Usuario deberá ingresar su nombre de usuario ("login") y su respectiva contraseña ("password"). Cumplido ello, deberá suministrar a esta Plataforma su información personal, responsabilizándose por la exactitud de esta información. En el caso de que la información personal suministrada sea incorrecta o incompleta, imposibilitando la efectiva comprobación e identificación del Usuario, podrá dar lugar a la suspensión y/o cancelación de la cuenta, sin derecho a indemnización, quedando exenta la Aplicación de cualquier responsabilidad.`,
      `7.3. Menores de edad y personas con capacidad restringida. El Usuario podrá tener asociados a su cuenta a los menores de edad y/o personas con capacidad restringida sobre los que ejerza la representación legal, debiendo informar dicha circunstancia al momento de crear su cuenta. A los fines de validar su identidad, deberá acreditar su carácter. En caso de menores de edad, deberán registrarse los datos provenientes del DNI del menor de edad y el DNI del padre, madre y/o tutor. En caso de que en el DNI del menor de edad no figuren los datos de los progenitores, deberá registrar la partida de nacimiento en copia certificada. En caso de persona con capacidad restringida, deberá presentar la resolución judicial que acredite su carácter en copia certificada. Dicha documentación complementaria deberá remitirse en copia certificada, por medio de carta certificada, dirigida a HIMALAYA SALUD S.A.S., Casilla de Correo Nº 26, C.P. 2630, Firmat, Provincia de Santa Fe, República Argentina. En caso de que el Usuario actúe como padre o madre de un menor de edad, o como apoyo o curador de una persona declarada judicialmente incapaz o con capacidad restringida, declara que cuenta con la facultad legal para acceder a los datos de su Historia Clínica, y asume plena responsabilidad por el uso de esta funcionalidad, manteniendo indemne a HIMALAYA SALUD S.A.S., a KOZACA S.A. y a las Instituciones de Salud intervinientes respecto de cualquier reclamo derivado del acceso y manejo de la información médica de sus representados. Alcanzada la mayoría de edad en los términos del Código Civil y Comercial de la Nación Argentina, los sujetos asociados a las cuentas se excluirán automáticamente de la cuenta del representante.`,
      `7.4. Firma electrónica. Cumplidos todos los pasos requeridos para el proceso de registro y validación, la cuenta quedará asociada de manera indubitable a la identidad del Usuario, mediante la verificación de los datos consignados en su Documento Nacional de Identidad (DNI) y la corroboración biométrica correspondiente. En tal sentido, el Usuario, al completar su registro en la Aplicación, emite una manifestación de voluntad válida, la cual reviste el carácter legal de firma electrónica conforme lo establecido por el artículo 5 de la Ley N.º 25.506 de Firma Digital, produciendo efectos jurídicos vinculantes respecto de las declaraciones y actos que realice en la Aplicación.`,
    ],
  },
  {
    id: "pagos",
    icon: CreditCard,
    title: "8. Pagos. Baja de cuenta. Revocación",
    paragraphs: [
      `8.1. Pagos. El Usuario acepta abonar todos los cargos asociados al uso de la Aplicación mediante los métodos habilitados.`,
      `8.2. Baja de cuenta. El Usuario podrá en cualquier momento solicitar la baja de su cuenta y la eliminación total o parcial de sus datos personales y de salud, conforme el derecho de supresión previsto en la Ley N.º 25.326, mediante solicitud por correo electrónico a la siguiente casilla: revocacion@himalayasalud.com.ar. La eliminación de los datos se realizará conforme a los plazos y condiciones establecidos en la norma aplicable, salvo que exista una obligación legal de retenerlos por un período determinado.`,
    ],
  },
  {
    id: "uso-datos",
    icon: ShieldCheck,
    title: "9. Uso de datos",
    paragraphs: [
      `9.1. Principios generales. La Aplicación garantiza que los datos personales y de salud son tratados con estricta confidencialidad y utilizados exclusivamente para los fines autorizados por el Paciente o Usuario, conforme lo dispuesto por la Ley N.º 25.326 de Protección de Datos Personales, la Ley N.º 26.529 de Derechos del Paciente y su normativa complementaria.`,
      `9.2. Finalidades del uso. El Usuario autoriza de manera libre, expresa e informada a la Aplicación al acceso a sus datos o información sanitaria contenida en la HCE de su titularidad registrada en las Instituciones de salud adheridas al sistema, con la única finalidad de permitir al mismo Usuario visualizarla, descargarla o portarla. En caso de registrar a menores de edad o personas a su cargo, el Usuario autoriza el acceso a su información médica, a cuyos fines debe contar con la representación legal correspondiente. El acceso a los datos del Usuario se realiza conforme a la Ley N.º 25.326, la Ley N.º 26.529 y normativa complementaria. La Aplicación no almacena, conserva, integra, modifica ni administra la Historia Clínica Electrónica obrante en las Instituciones de Salud adheridas, respecto de la cual actúa únicamente como medio de acceso autorizado para su visualización, descarga o portabilidad. Sin perjuicio de ello, la Aplicación almacena y conserva los Datos Auto Ingresados por el Usuario, en los términos y con las garantías previstas en la cláusula 6 (Mi Portal Paciente y Datos Auto Ingresados).`,
      `9.3. Seguridad de la información. La Aplicación ha adoptado las medidas de seguridad, técnicas y organizativas apropiadas para garantizar la autenticidad, integridad, inalterabilidad y encriptación de los datos, incluyendo cifrado, autenticación de doble factor y registros de acceso. Toda información del Usuario, sus datos y los que ingresa para su registración se encuentra protegida y encriptada.`,
      `9.4. Derechos del Usuario. El Usuario podrá ejercer el derecho de acceso, rectificación, actualización o supresión de sus datos personales mediante remisión de correo electrónico a notificaciones@himalayasalud.com.ar. Su solicitud será atendida dentro de un plazo máximo de diez (10) días hábiles. Podrá ejercer estos derechos de forma gratuita y con una periodicidad no inferior a seis meses, salvo que demuestre un interés legítimo conforme a lo dispuesto por el artículo 14, inciso 3, de la Ley N.º 25.326. En caso de supresión, los datos serán eliminados de la base de datos, el Usuario perderá el acceso a la HCE y no podrá continuar utilizando la Aplicación.`,
      `9.5. Disolución de la Aplicación. En caso de cese definitivo del servicio, la Aplicación procederá a eliminar en forma inmediata y permanente toda información, datos temporales y/o archivos en caché generados por su funcionamiento, garantizando que no subsista ningún dato vinculado a los usuarios.`,
    ],
  },
  {
    id: "responsabilidad-usuario",
    icon: AlertTriangle,
    title: "10. Responsabilidad de los usuarios. Restricciones generales",
    paragraphs: [
      `10.1. Obligaciones del Usuario. El Usuario se obliga a cumplir con todas las disposiciones de los Términos y Condiciones en todo momento mientras use la Aplicación. Se lo autoriza a acceder y utilizar la Aplicación sólo para los fines mencionados y con sujeción a las condiciones específicas que a continuación se indican. Su inobservancia constituirá un incumplimiento de los presentes Términos y Condiciones. El Usuario tiene la RESPONSABILIDAD de:`,
    ],
    list: [
      { desc: "Proveer información verídica, completa y actualizada, incluyendo nombre completo, DNI, fecha de nacimiento, dirección y números de teléfono." },
      { desc: "Mantener actualizados sus datos personales." },
      { desc: "Abonar los costos del servicio." },
      { desc: "Solicitar su HCE." },
      { desc: "Custodiar sus credenciales de acceso y brindar acceso a su HCE." },
    ],
    extraParagraphs: [
      `10.2. Usos prohibidos. El Usuario se obliga a utilizar la Aplicación únicamente para los fines previstos y se abstiene de realizar cualquier conducta que pueda desnaturalizar su objeto, afectar su normal funcionamiento, vulnerar derechos de terceros o infringir la normativa aplicable. Quedan expresamente prohibidas, entre otras, las siguientes conductas: a) Recolección indebida de datos; b) Usos ilícitos o dañosos; c) Automatización no autorizada (bots, scripts); d) Contenido prohibido (ilícito, abusivo, difamatorio, obsceno, discriminatorio o que vulnere derechos personalísimos o de propiedad intelectual); e) Publicidad y comunicaciones no autorizadas ("spam"); f) Identidad y registro con datos falsos o múltiples cuentas; g) Carga de datos de terceros sin autorización; h) Malware y ataques informáticos; i) Conductas ilícitas o incitantes; j) Afectación a la experiencia de otros usuarios; k) Alteración de la Aplicación o sus sistemas de seguridad; y l) Usos comerciales no autorizados sin consentimiento previo y por escrito de Himalaya Salud S.A.S.`,
      `10.3. Uso indebido. El Usuario acepta ser el único responsable de toda la actividad que tenga lugar en y con su cuenta. La Aplicación no será responsable de los daños y/o perjuicios que se deriven de un uso no autorizado de su cuenta. Cualquier uso indebido, negligente o fraudulento de sus credenciales o de la información suministrada será de exclusiva responsabilidad del Usuario. En caso de uso no autorizado de su cuenta o cualquier otra infracción o brecha de seguridad, el Usuario debe notificar inmediatamente a notificaciones@himalayasalud.com.ar.`,
    ],
  },
  {
    id: "limitacion",
    icon: Ban,
    title: "11. Limitación y exoneración de responsabilidad",
    paragraphs: [
      `11.1. Información sanitaria. La Aplicación actúa como intermediario tecnológico y no interviene en la generación, precisión o contenido de la información sanitaria proporcionada por las Instituciones de Salud. Por lo tanto, no será responsable por errores, omisiones o desactualizaciones de la HCE, ni por el uso que el Usuario haga de dicha información. En caso de discrepancias o errores, el Paciente o su representante legal deberá/n contactarse con la institución médica pertinente.`,
      `11.2. Exoneración. El Paciente y/o Usuario libera de manera expresa y definitiva a Himalaya Salud S.A.S., a Kozaca S.A. y a las instituciones de salud que almacenan y gestionan su Historia Clínica Electrónica (HCE), respecto de cualquier responsabilidad por daños, pérdidas o perjuicios que pudieran derivarse del uso, manejo, acceso, almacenamiento, descarga, portabilidad o transmisión de sus datos personales y médicos a través de la Aplicación. Esta exoneración comprende, entre otros supuestos, el acceso no autorizado, pérdida, alteración, divulgación o mal uso de la información, siempre que dicho acceso o transmisión: a) haya sido solicitado, iniciado o permitido por el propio Paciente y/o Usuario mediante consentimiento libre, expreso e informado; y/o b) se derive de la negligencia, descuido, divulgación, préstamo, extravío o inadecuada custodia de sus credenciales, claves de acceso o dispositivos utilizados para operar la Aplicación.`,
      `11.3. Continuidad del servicio. La Aplicación no garantiza la continuidad ininterrumpida del servicio ni la ausencia de interrupciones o errores, y no será responsable por daños o perjuicios que pudieran derivarse de fallas en el sistema, en el servidor, en Internet o cualquier otra falla técnica ajena a su control.`,
      `11.4. Carácter de la información. La información contenida en la Aplicación es para fines informativos y de gestión personal por el Usuario y, bajo ninguna circunstancia, debe ser interpretada como asesoramiento, diagnóstico o tratamiento médico, y no reemplaza el juicio o consulta médica.`,
      `11.5. Botón de Pánico. Sin perjuicio de lo previsto en la cláusula 5 (Botón de Pánico), el Usuario reconoce y acepta que el Botón de Pánico es una herramienta accesoria de notificación y no un servicio de emergencias, y que no garantiza la resolución de la situación de riesgo. En la máxima medida permitida por la legislación aplicable, Himalaya Salud S.A.S. y Kozaca S.A. no serán responsables por los daños o perjuicios derivados de: la falta de generación, transmisión, entrega o recepción de la alerta; el retardo en cualquiera de dichas instancias; la imprecisión de la ubicación informada; la falta de respuesta, demora, negativa, inacción, imposibilidad de prestar asistencia, costo o calidad de la atención de los Contactos —incluidos los profesionales de la salud, ambulancias o servicios de emergencia que el Usuario designe como tales—; la falta de resolución de la situación de riesgo; la inexactitud o desactualización de los Datos Auto Ingresados registrados por el Usuario; o la indisponibilidad del servicio por causas técnicas, de conectividad, de terceros proveedores o ajenas al control de la Aplicación. Lo dispuesto en esta cláusula no excluye ni limita la responsabilidad que resulte indisponible o inderogable conforme a la legislación de orden público aplicable, en particular la normativa de defensa del consumidor.`,
    ],
  },
  {
    id: "propiedad-intelectual",
    icon: Copyright,
    title: "12. Propiedad intelectual",
    paragraphs: [
      `12.1. Titularidad. La totalidad del contenido, diseño, código fuente, interfaces, bases de datos, textos, gráficos, logotipos, íconos, imágenes, software, funcionalidades y cualquier otro elemento que forme parte de la Aplicación "HIMALAYA SALUD" son propiedad exclusiva de KOZACA S.A., en su carácter de desarrolladora tecnológica, y de HIMALAYA SALUD S.A.S., en su carácter de operadora de la Aplicación, encontrándose protegidos por las leyes de Propiedad Intelectual, Derechos de Autor y Propiedad Industrial de la República Argentina (Ley N.º 11.723, Ley N.º 22.362 y normas complementarias), así como por los tratados internacionales aplicables.`,
      `12.2. Licencia de uso al Usuario. El Paciente y/o Usuario recibe una licencia de uso limitada, no exclusiva, revocable, intransferible y personal para acceder y utilizar la Aplicación exclusivamente para los fines establecidos en los presentes Términos y Condiciones. En ningún caso se entenderá que el uso de la Aplicación confiere derecho alguno de propiedad intelectual o industrial sobre su contenido, estructura o tecnología.`,
      `12.3. Restricciones. El Paciente y/o Usuario se compromete a no reproducir, copiar, modificar, distribuir, transmitir, publicar, exhibir, vender, alquilar, licenciar, crear obras derivadas o explotar de cualquier forma, total o parcialmente, los contenidos, el diseño, las marcas, los logotipos, la base de datos o el software de la Aplicación sin autorización previa, expresa y por escrito de Himalaya Salud S.A.S. o de Kozaca S.A. según corresponda. Queda prohibido asimismo realizar ingeniería inversa, descompilación, descifrado, extracción de código o alteración de los sistemas de seguridad, autenticación o cifrado implementados en la Aplicación.`,
      `12.4. Contenido generado por el Usuario. En caso de que el Paciente y/o Usuario incorpore o genere contenido dentro de la Aplicación (por ejemplo, carga de imágenes, documentos, mensajes o datos complementarios de salud), éste seguirá siendo de su exclusiva titularidad, pero otorga a Himalaya Salud S.A.S. una licencia gratuita, no exclusiva y limitada al solo efecto de almacenar, procesar y visualizar dichos contenidos dentro de la plataforma, para garantizar el funcionamiento, la interoperabilidad y la gestión de su Historia Clínica Electrónica y de sus Datos Auto Ingresados. Dicha licencia no autoriza la cesión ni explotación comercial alguna de los datos o contenidos del Usuario.`,
      `12.5. Protección de la información. Himalaya Salud S.A.S. y Kozaca S.A. se comprometen a respetar los derechos morales y patrimoniales de los Usuarios, asegurando que ningún contenido incorporado por éstos será utilizado fuera del marco funcional y legal de la Aplicación ni divulgado sin su consentimiento expreso, conforme a lo dispuesto por la Ley N.º 25.326 y la Ley N.º 26.529.`,
    ],
  },
  {
    id: "publicidad",
    icon: Megaphone,
    title: "13. Publicidad. Vínculos de esta aplicación",
    paragraphs: [
      `13.1. La Aplicación puede publicitarse y/o contener enlaces a sitios de terceros, no siendo responsable del contenido ni de las prácticas de privacidad de dichos sitios. El uso por parte del Usuario de sitios web de terceros es bajo su propio riesgo y sujeto a los términos y condiciones de uso de dichos sitios.`,
      `13.2. La Aplicación no utilizará imágenes ni datos sensibles del Usuario con fines comerciales. Únicamente podrá utilizarse información, imágenes y/o datos no sensibles y no identificatorios para fines estadísticos, de mejora del servicio, comunicaciones institucionales, comerciales y/o publicitarias.`,
    ],
  },
  {
    id: "terminacion",
    icon: LogOut,
    title: "14. Terminación de la relación",
    paragraphs: [
      `14.1. Los presentes Términos y Condiciones mantendrán su vigencia y serán aplicables mientras el Usuario utilice la Aplicación y hasta la terminación del vínculo conforme las disposiciones siguientes.`,
      `14.2. Terminación por el Usuario. El Usuario podrá finalizar su relación con la Aplicación en cualquier momento solicitando la baja de su cuenta y la supresión total o parcial de sus datos personales y sensibles, mediante correo electrónico dirigido a revocacion@himalayasalud.com.ar, conforme lo previsto en estos Términos y en la Ley N.º 25.326. La baja producirá la pérdida de acceso a la HCE a través de la Aplicación, sin perjuicio de las obligaciones legales de conservación que pudieran corresponder a las Instituciones de Salud.`,
      `14.3. Terminación por la Aplicación. La Aplicación podrá suspender o dar de baja la cuenta del Usuario, sin derecho a indemnización alguna, cuando: a) el Usuario incumpla cualquiera de las obligaciones asumidas en estos Términos y Condiciones; b) en cumplimiento de una obligación legal o decisión de autoridad competente; c) por razones técnicas, operativas, de seguridad, regulatorias o de sostenibilidad del servicio, la continuidad de la Aplicación resulte inviable o aconsejable a criterio razonable. En tales supuestos, la empresa podrá disponer la suspensión temporal o definitiva del acceso, notificando al Usuario por los canales registrados, cuando ello sea posible y razonable.`,
      `14.4. Efectos de la terminación. La terminación del vínculo no afectará los derechos y obligaciones que hubieran nacido durante la vigencia de estos Términos y Condiciones, ni aquellas cláusulas que por su naturaleza deban subsistir (incluyendo, sin limitación, las relativas a confidencialidad, limitación de responsabilidad, propiedad de datos y disposiciones generales).`,
    ],
  },
  {
    id: "disposiciones",
    icon: Scale,
    title: "15. Disposiciones generales",
    paragraphs: [
      `15.1. Estos Términos y Condiciones constituyen el acuerdo completo entre el Usuario y la Aplicación, y rigen el uso de la misma.`,
      `15.2. Si alguna cláusula del presente fuese declarada inválida o sin efecto legal, las demás disposiciones permanecerán vigentes en todos sus aspectos.`,
      `15.3. La no exigencia por parte de la Aplicación del cumplimiento de cualquier derecho o disposición de los Términos y Condiciones no constituirá una renuncia o dispensa a su cumplimiento ni a ninguna otra de las contenidas en estos Términos y Condiciones.`,
      `15.4. Los Términos y Condiciones y todos los derechos y obligaciones relacionados con los mismos, como también su interpretación o el significado de sus términos, serán regidos, interpretados y ejecutados de conformidad con la legislación vigente en la República Argentina.`,
      `15.5. En caso de surgir cualquier diferencia, desacuerdo, controversia o conflicto derivado del uso de la Aplicación, y que no pudiese ser solucionado extrajudicialmente por las partes, ellas se someten a la jurisdicción de los tribunales ordinarios de la ciudad de Rosario, Provincia de Santa Fe, República Argentina, con renuncia a cualquier otro fuero o jurisdicción que pudiera corresponder por razón de nacionalidad o domicilio, incluido el federal.`,
    ],
  },
  {
    id: "aceptacion",
    icon: CheckSquare,
    title: "16. Aceptación de los Términos y Condiciones",
    paragraphs: [
      `16.1. Al acceder, registrarse o utilizar la Aplicación, el Usuario declara haber leído, comprendido y aceptado íntegramente los presentes Términos y Condiciones. Si no está de acuerdo con ellos, deberá abstenerse de utilizar la Aplicación.`,
      `16.2. La aceptación expresa de los Términos y Condiciones —mediante el registro y/o la selección de la opción "Acepto"— constituye condición indispensable para el uso de la Aplicación. Al hacerlo, el Usuario confirma que cuenta con la capacidad legal necesaria para obligarse conforme lo aquí establecido.`,
      `16.3. La aceptación de los presentes Términos y Condiciones genera un vínculo jurídico válido y exigible entre el Usuario y la Aplicación, cuya vigencia se mantiene mientras se utilicen los servicios ofrecidos.`,
    ],
  },
  {
    id: "contacto",
    icon: Mail,
    title: "17. Contacto",
    paragraphs: [
      `Para cualquier duda o consulta, el Usuario puede contactarse a notificaciones@himalayasalud.com.ar o a través de los canales de atención al cliente.`,
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
            Última actualización: 30 de Mayo de 2026
          </p>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold"
            style={{
              border: `1px solid ${BRAND.teal100}`,
              color: BRAND.teal700,
              padding: "9px 16px",
              borderRadius: 8,
            }}
          >
            <Download size={16} />
            Descargar en PDF
          </a>
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
