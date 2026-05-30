import type { LucideIcon } from "lucide-react";
import {
  Target,
  Building2,
  BookOpen,
  Database,
  Download,
  Eye,
  Scale,
  Share2,
  Globe,
  Clock,
  Lock,
  Baby,
  UserCheck,
  Smartphone,
  Megaphone,
  RefreshCw,
  Mail,
  Gavel,
} from "lucide-react";
import { BRAND, SHADOW } from "@/lib/brand-tokens";

const arcoEmail = "notificaciones@himalayasalud.com.ar";
const bajaEmail = "revocacion@himalayasalud.com.ar";
const pdfUrl = "/legales/politica-de-privacidad.pdf";

type Block = {
  title: string;
  rows: { label: string; value: string }[];
};

type Section = {
  id: string;
  icon: LucideIcon;
  title: string;
  paragraphs?: string[];
  list?: string[];
  blocks?: Block[];
  closing?: string;
  emails?: { label: string; address: string }[];
};

const sections: Section[] = [
  {
    id: "objeto",
    icon: Target,
    title: "1. Objeto y alcance",
    paragraphs: [
      `La presente Política de Privacidad (en adelante, la "Política") describe cómo se recolectan, utilizan, almacenan, comparten, conservan y protegen los datos personales de los Usuarios y Pacientes de la aplicación móvil Himalaya Salud (en adelante, la "Aplicación"), disponible para dispositivos iOS y Android. La Política complementa los Términos y Condiciones de Uso de la Aplicación y forma parte integrante del vínculo jurídico con el Usuario.`,
      `Esta Política se rige por la Ley N.º 25.326 de Protección de los Datos Personales, su decreto reglamentario y las disposiciones de la Agencia de Acceso a la Información Pública (AAIP); la Ley N.º 26.529 de Derechos del Paciente; y la normativa complementaria vigente en la República Argentina.`,
      `El uso de la Aplicación implica el conocimiento y la aceptación expresa de esta Política. Cuando una funcionalidad específica requiera un consentimiento adicional —por ejemplo, el acceso a la geolocalización o la transmisión de datos a Contactos— el Usuario lo otorgará de forma separada e informada al momento de su uso.`,
    ],
  },
  {
    id: "responsable",
    icon: Building2,
    title: "2. Responsable del tratamiento y reparto de roles",
    paragraphs: [
      `2.1. Partes intervinientes. La Aplicación es desarrollada por KOZACA S.A. (CUIT 30-71586195-6), con domicilio en calle Tucumán 2112 PB, ciudad de Rosario, Provincia de Santa Fe, a cuyo cargo se encuentran el desarrollo, el soporte técnico y el almacenamiento de los datos de la Aplicación en sus servidores ubicados en la ciudad de Rosario. La operación, gestión comercial y comercialización exclusiva del servicio se encuentran a cargo de HIMALAYA SALUD S.A.S. (CUIT 30-71886806-4), con domicilio en Av. La Quemada 1946, Firmat, Provincia de Santa Fe.`,
      `2.2. Reparto de roles. Conforme al reparto operativo, el Usuario es el único titular de sus datos personales y sensibles. Kozaca S.A. presta los servicios técnicos de almacenamiento, soporte y procesamiento; Himalaya Salud S.A.S. opera y comercializa el servicio y mantiene la relación contractual con el Usuario. La calificación formal de responsable y de encargado del tratamiento en los términos del artículo 25 de la Ley N.º 25.326 se rige por los contratos suscriptos entre ambas partes.`,
      `2.3. Contacto para protección de datos. Las consultas y el ejercicio de los derechos previstos en esta Política pueden remitirse a notificaciones@himalayasalud.com.ar. Las solicitudes de baja de cuenta y supresión de datos se remiten a revocacion@himalayasalud.com.ar.`,
    ],
  },
  {
    id: "definiciones",
    icon: BookOpen,
    title: "3. Definiciones",
    paragraphs: [
      `3.1. Datos personales. Información de cualquier tipo referida a personas humanas determinadas o determinables, en los términos del artículo 2 de la Ley N.º 25.326.`,
      `3.2. Datos sensibles. Datos personales que revelan origen racial y étnico, opiniones políticas, convicciones religiosas, filosóficas o morales, afiliación sindical e información referente a la salud o a la vida sexual. Los datos de salud son, por su naturaleza, datos sensibles.`,
      `3.3. Titular de los datos. Persona humana cuya información se encuentra tratada por la Aplicación. En el caso de la Aplicación, el titular es el Paciente y/o Usuario.`,
      `3.4. Tratamiento. Conjunto de operaciones realizadas sobre datos personales (recolección, conservación, organización, modificación, consulta, comunicación, cesión y similares), conforme el artículo 2 de la Ley N.º 25.326.`,
      `3.5. Datos Auto Ingresados. Información, documentación y datos —incluidos datos de salud— que el propio Usuario carga, registra o incorpora en la Aplicación sobre sí mismo o sobre las personas que tiene válidamente asociadas a su cuenta, en particular en los módulos "Mi Portal Paciente" y "Mediciones".`,
      `3.6. Historia Clínica Electrónica (HCE). Documento digital que registra la información clínica del Paciente provista por las Instituciones de Salud adheridas a la Aplicación, a la que el Usuario accede como medio de visualización, descarga y portabilidad.`,
      `3.7. Contactos. Personas humanas o servicios designados por el Usuario para recibir las alertas generadas por el Botón de Pánico de la Aplicación.`,
    ],
  },
  {
    id: "datos-recolectamos",
    icon: Database,
    title: "4. Datos que recolectamos",
    paragraphs: [
      `La Aplicación recolecta únicamente los datos necesarios para la prestación del servicio, conforme al principio de minimización de datos del artículo 4 de la Ley N.º 25.326. A continuación se detallan las categorías de datos, su origen y la finalidad de su tratamiento.`,
    ],
    blocks: [
      {
        title: "Identidad y contacto",
        rows: [
          { label: "Datos", value: "Nombre, apellido, DNI, fecha de nacimiento, sexo, domicilio, teléfono, correo electrónico" },
          { label: "Origen", value: "Usuario" },
          { label: "Finalidad", value: "Registro de cuenta y gestión del servicio" },
        ],
      },
      {
        title: "Perfil sociodemográfico",
        rows: [
          { label: "Datos", value: "Obra social, profesión, estado civil, hijos a cargo, religión" },
          { label: "Origen", value: "Usuario" },
          { label: "Finalidad", value: "Perfil del Paciente y prestación del servicio" },
        ],
      },
      {
        title: "DNI (imagen)",
        rows: [
          { label: "Datos", value: "Imagen del frente y del dorso del Documento Nacional de Identidad" },
          { label: "Origen", value: "Usuario" },
          { label: "Finalidad", value: "Validación de identidad para los Planes que la requieran" },
        ],
      },
      {
        title: "Datos biométricos",
        rows: [
          { label: "Datos", value: "Imagen de rostro y huella dactilar" },
          { label: "Origen", value: "Usuario" },
          { label: "Finalidad", value: "Validación de identidad — no se conservan más allá del proceso de validación" },
        ],
      },
      {
        title: "Credenciales de la cuenta",
        rows: [
          { label: "Datos", value: "Nombre de usuario, hash de contraseña, dispositivos asociados, registros de acceso" },
          { label: "Origen", value: "Usuario / sistema" },
          { label: "Finalidad", value: "Autenticación y seguridad de la cuenta" },
        ],
      },
      {
        title: "Historia Clínica Electrónica",
        rows: [
          { label: "Datos", value: "Antecedentes, evoluciones, estudios, prescripciones, internaciones y demás información clínica" },
          { label: "Origen", value: "Instituciones de Salud adheridas, a solicitud del Paciente" },
          { label: "Finalidad", value: "Visualización, descarga y portabilidad por parte del Paciente" },
        ],
      },
      {
        title: "Datos Auto Ingresados",
        rows: [
          { label: "Datos", value: 'Documentos y estudios cargados por el Usuario en "Mi Portal Paciente"; información registrada en "Mediciones"' },
          { label: "Origen", value: "Usuario" },
          { label: "Finalidad", value: "Conservación en el espacio personal del Usuario" },
        ],
      },
      {
        title: "Personas asociadas",
        rows: [
          { label: "Datos", value: "Datos del DNI del menor, partida de nacimiento, resolución judicial de capacidad restringida" },
          { label: "Origen", value: "Usuario / representante legal" },
          { label: "Finalidad", value: "Acceso familiar a la HCE conforme la cláusula 7.3 del T&C" },
        ],
      },
      {
        title: "Contactos",
        rows: [
          { label: "Datos", value: "Nombre y número de teléfono de hasta seis (6) personas designadas por el Usuario" },
          { label: "Origen", value: "Usuario" },
          { label: "Finalidad", value: "Funcionamiento del Botón de Pánico" },
        ],
      },
      {
        title: "Geolocalización",
        rows: [
          { label: "Datos", value: "Ubicación geográfica aproximada del dispositivo al momento de activarse el Botón de Pánico" },
          { label: "Origen", value: "Dispositivo del Usuario, con permiso previo" },
          { label: "Finalidad", value: "Transmisión a los Contactos" },
        ],
      },
      {
        title: "Datos técnicos del dispositivo",
        rows: [
          { label: "Datos", value: "Modelo, sistema operativo, versión de la Aplicación, dirección IP, identificador del dispositivo" },
          { label: "Origen", value: "Dispositivo del Usuario" },
          { label: "Finalidad", value: "Seguridad, funcionamiento y soporte" },
        ],
      },
      {
        title: "Datos de actividad",
        rows: [
          { label: "Datos", value: "Registros de acceso, eventos del sistema, activaciones del Botón de Pánico (fecha, hora, ubicación, contactos notificados)" },
          { label: "Origen", value: "Sistema" },
          { label: "Finalidad", value: "Auditoría, seguridad y soporte" },
        ],
      },
      {
        title: "Datos de pago",
        rows: [
          { label: "Datos", value: "Método de pago utilizado y comprobantes emitidos" },
          { label: "Origen", value: "Mercado Pago" },
          { label: "Finalidad", value: "Cobro de la suscripción" },
        ],
      },
      {
        title: "Datos de soporte",
        rows: [
          { label: "Datos", value: "Tickets de soporte, mensajes, adjuntos, transcripciones del chatbot" },
          { label: "Origen", value: "Usuario" },
          { label: "Finalidad", value: "Atención al Usuario" },
        ],
      },
    ],
  },
  {
    id: "como-obtenemos",
    icon: Download,
    title: "5. Cómo obtenemos los datos",
    paragraphs: [`La Aplicación obtiene los datos personales por las siguientes vías:`],
    list: [
      `Directamente del Usuario, cuando se registra, completa su perfil, carga documentación, configura el Botón de Pánico o utiliza el servicio.`,
      `De las Instituciones de Salud adheridas, cuando el Paciente solicita su HCE a través de la Aplicación y la institución la remite con el consentimiento del Paciente.`,
      `Del dispositivo del Usuario, cuando este otorga los permisos necesarios (ubicación, notificaciones).`,
      `De los proveedores de servicios que intervienen en la prestación, en lo estrictamente necesario para su funcionamiento (por ejemplo, confirmación de pago por parte de Mercado Pago).`,
      `De los organismos públicos competentes, cuando la Aplicación habilite la validación automática de identidad ante el RENAPER (funcionalidad prevista para una fase posterior).`,
    ],
  },
  {
    id: "para-que",
    icon: Eye,
    title: "6. Para qué utilizamos los datos",
    paragraphs: [`Los datos personales se tratan exclusivamente para las siguientes finalidades:`],
    list: [
      `Prestación del servicio contratado, incluyendo el acceso del Paciente a la HCE, la visualización, descarga y portabilidad de la misma.`,
      `Almacenamiento y gestión de los Datos Auto Ingresados en el espacio personal del Usuario, conforme la cláusula 6 del T&C.`,
      `Validación de identidad del Usuario, cuando corresponda por el Plan contratado.`,
      `Procesamiento de los pagos de la suscripción, a través de Mercado Pago.`,
      `Funcionamiento del Botón de Pánico, incluyendo la transmisión de la alerta, la ubicación y los Datos Auto Ingresados a los Contactos.`,
      `Atención al Usuario y soporte técnico, a través del sistema de ticketing y del chatbot de la Aplicación.`,
      `Cumplimiento de obligaciones legales, requerimientos de autoridad competente y deberes de cooperación con autoridades de control.`,
      `Seguridad, prevención del fraude, auditoría y mejora del servicio, sobre la base de datos agregados y no identificatorios.`,
    ],
  },
  {
    id: "bases-legales",
    icon: Scale,
    title: "7. Bases legales del tratamiento",
    paragraphs: [`El tratamiento de los datos personales se sustenta en las siguientes bases legales previstas por la Ley N.º 25.326:`],
    list: [
      `Consentimiento libre, expreso e informado del titular, otorgado al aceptar los Términos y Condiciones y al utilizar las funcionalidades específicas que lo requieran (artículos 5 y 7).`,
      `Ejecución del contrato suscripto entre el Usuario y la Aplicación.`,
      `Cumplimiento de obligaciones legales que recaen sobre la Aplicación.`,
      `Tratamiento de datos sensibles —en particular, datos de salud— con consentimiento expreso del titular, conforme el artículo 7, inciso 1, de la Ley N.º 25.326. La Aplicación no almacena la Historia Clínica Electrónica institucional, respecto de la cual actúa como medio de acceso autorizado; sí almacena los Datos Auto Ingresados por el Usuario, en los términos de la cláusula 6 del T&C.`,
    ],
  },
  {
    id: "con-quien",
    icon: Share2,
    title: "8. Con quién compartimos los datos",
    paragraphs: [
      `La Aplicación no vende, alquila ni cede datos personales a terceros con fines comerciales. Los datos personales se comparten únicamente con los proveedores y terceros indispensables para la prestación del servicio, conforme se detalla a continuación:`,
    ],
    blocks: [
      {
        title: "Kozaca S.A.",
        rows: [
          { label: "Datos compartidos", value: "Todos los datos de la Aplicación HCI del Paciente" },
          { label: "Finalidad", value: "Almacenamiento técnico y soporte" },
          { label: "Localización", value: "Rosario, Argentina" },
        ],
      },
      {
        title: "Instituciones de Salud adheridas",
        rows: [
          { label: "Datos compartidos", value: "Identificación del Paciente para la solicitud de la HCE" },
          { label: "Finalidad", value: "Remisión de la Historia Clínica al Paciente" },
          { label: "Localización", value: "Argentina" },
        ],
      },
      {
        title: "Mercado Pago S.R.L.",
        rows: [
          { label: "Datos compartidos", value: "Datos necesarios para el procesamiento del pago" },
          { label: "Finalidad", value: "Procesamiento de la suscripción y emisión del comprobante" },
          { label: "Localización", value: "Argentina" },
        ],
      },
      {
        title: "Twilio Inc.",
        rows: [
          { label: "Datos compartidos", value: "Números de teléfono de los Contactos, contenido del mensaje y de la llamada" },
          { label: "Finalidad", value: "SMS, llamadas y mensajería de WhatsApp del Botón de Pánico" },
          { label: "Localización", value: "Estados Unidos (con cláusulas contractuales tipo)" },
        ],
      },
      {
        title: "Meta Platforms, Inc. (WhatsApp Business API)",
        rows: [
          { label: "Datos compartidos", value: "Número de teléfono del destinatario, contenido del mensaje" },
          { label: "Finalidad", value: "Plantillas WhatsApp del Botón de Pánico y del chatbot de soporte" },
          { label: "Localización", value: "Estados Unidos / global" },
        ],
      },
      {
        title: "Google LLC (Maps Platform)",
        rows: [
          { label: "Datos compartidos", value: "Coordenadas geográficas" },
          { label: "Finalidad", value: "Servicios de geocodificación y mapas" },
          { label: "Localización", value: "Estados Unidos / global" },
        ],
      },
      {
        title: "Proveedor de modelo de lenguaje (LLM)",
        rows: [
          { label: "Datos compartidos", value: "Mensajes del chatbot con datos sanitizados" },
          { label: "Finalidad", value: "Generación de respuestas del chatbot de soporte" },
          { label: "Localización", value: "Estados Unidos" },
        ],
      },
      {
        title: "Amazon Web Services (AWS — SES, EC2)",
        rows: [
          { label: "Datos compartidos", value: "Direcciones de correo electrónico, contenido de emails transaccionales y de tickets de soporte (Zammad)" },
          { label: "Finalidad", value: "Envío de emails y soporte (ticketing)" },
          { label: "Localización", value: "Estados Unidos (us-east-1)" },
        ],
      },
      {
        title: "RENAPER",
        rows: [
          { label: "Datos compartidos", value: "Datos del DNI y datos biométricos" },
          { label: "Finalidad", value: "Validación de identidad (funcionalidad prevista para una fase posterior)" },
          { label: "Localización", value: "Argentina" },
        ],
      },
      {
        title: "Autoridades públicas competentes",
        rows: [
          { label: "Datos compartidos", value: "Los datos requeridos por ley o por orden judicial" },
          { label: "Finalidad", value: "Cumplimiento de obligaciones legales" },
          { label: "Localización", value: "Argentina" },
        ],
      },
    ],
  },
  {
    id: "transferencia",
    icon: Globe,
    title: "9. Localización y transferencia internacional",
    paragraphs: [
      `9.1. Almacenamiento principal en Argentina. El núcleo de los datos de la Aplicación —incluidos los Datos Auto Ingresados, los datos de cuenta, los datos de Contactos y el registro de activaciones del Botón de Pánico— se almacena en servidores de Kozaca S.A. ubicados en la ciudad de Rosario, Provincia de Santa Fe, República Argentina. Esta información no es objeto de transferencia internacional.`,
      `9.2. Servicios auxiliares con procesamiento en el exterior. Determinados servicios auxiliares utilizados por la Aplicación —en particular, la mensajería y las llamadas del Botón de Pánico (Twilio, Meta), los servicios de geocodificación (Google), el envío de correo electrónico transaccional y el ticketing de soporte (AWS) y el chatbot de soporte (proveedor de modelo de lenguaje)— procesan datos en infraestructura ubicada fuera de la República Argentina. Para estas transferencias internacionales, la Aplicación adopta las garantías exigidas por el artículo 12 de la Ley N.º 25.326, incluyendo la suscripción de las cláusulas contractuales tipo aprobadas por la AAIP cuando corresponda, y limita la información transferida a la estrictamente necesaria para la finalidad del servicio.`,
      `9.3. Consentimiento del Usuario. Al aceptar la presente Política, el Usuario presta su consentimiento libre, expreso e informado para la transferencia internacional de datos descripta en el punto 9.2, en los términos del artículo 12 de la Ley N.º 25.326.`,
    ],
  },
  {
    id: "plazos",
    icon: Clock,
    title: "10. Plazos de conservación",
    paragraphs: [
      `Los datos personales se conservan durante el tiempo estrictamente necesario para el cumplimiento de las finalidades para las cuales fueron recolectados, salvo que una obligación legal exija un plazo mayor.`,
    ],
    blocks: [
      {
        title: "Datos de cuenta (identidad, contacto, perfil sociodemográfico, credenciales)",
        rows: [{ label: "Plazo", value: "Mientras la cuenta del Usuario permanezca activa y hasta treinta (30) días corridos posteriores a su baja." }],
      },
      {
        title: "Datos Auto Ingresados (Mi Portal Paciente, Mediciones)",
        rows: [{ label: "Plazo", value: "Mientras la cuenta del Usuario permanezca activa y hasta treinta (30) días corridos posteriores a su baja." }],
      },
      {
        title: "Datos biométricos (rostro, huella) y captura del DNI",
        rows: [{ label: "Plazo", value: "Solo durante el proceso de validación de identidad. Se eliminan una vez completada la validación, sin perjuicio del registro auditado del resultado." }],
      },
      {
        title: "Historia Clínica Electrónica institucional",
        rows: [{ label: "Plazo", value: "No se almacena por la Aplicación. La Aplicación actúa como medio de acceso autorizado a la información obrante en las Instituciones de Salud adheridas." }],
      },
      {
        title: "Contactos",
        rows: [{ label: "Plazo", value: "Mientras el Usuario los mantenga designados en la Aplicación. El Usuario puede eliminarlos en cualquier momento." }],
      },
      {
        title: "Registro de activaciones del Botón de Pánico",
        rows: [{ label: "Plazo", value: "Doce (12) meses desde cada activación, salvo que un plazo mayor resulte necesario para atender un reclamo, cumplir una obligación legal o responder a un requerimiento de autoridad competente." }],
      },
      {
        title: "Datos de geolocalización",
        rows: [{ label: "Plazo", value: "Asociados al registro de activación correspondiente, durante el plazo de doce (12) meses indicado arriba." }],
      },
      {
        title: "Datos de pago y comprobantes",
        rows: [{ label: "Plazo", value: "Durante los plazos exigidos por la normativa fiscal y de defensa del consumidor." }],
      },
      {
        title: "Datos de soporte (tickets, transcripciones)",
        rows: [{ label: "Plazo", value: "Veinticuatro (24) meses desde el cierre del ticket, salvo obligación legal de mayor conservación." }],
      },
      {
        title: "Registros técnicos y de seguridad (logs)",
        rows: [{ label: "Plazo", value: "Doce (12) meses, salvo necesidad operativa o de seguridad que justifique un plazo mayor." }],
      },
    ],
    closing: `Producida la baja de la cuenta, los datos asociados se eliminarán dentro de los plazos indicados, sin perjuicio de aquellas categorías que la normativa exija conservar.`,
  },
  {
    id: "seguridad",
    icon: Lock,
    title: "11. Seguridad de la información",
    paragraphs: [
      `La Aplicación adopta medidas técnicas y organizativas apropiadas para garantizar la confidencialidad, integridad, disponibilidad y trazabilidad de los datos personales, incluyendo:`,
    ],
    list: [
      `Cifrado de la información en tránsito (TLS/SSL) y en reposo.`,
      `Segregación de la información por Usuario y acceso restringido conforme al principio de "necesidad de saber".`,
      `Autenticación robusta de los Usuarios, con doble factor cuando corresponda.`,
      `Registros de auditoría y de accesos a los sistemas.`,
      `Procedimientos de respuesta y notificación de incidentes de seguridad ante la AAIP, cuando un incidente implique un riesgo significativo para los titulares.`,
      `Capacitación periódica del personal con acceso a datos personales sobre confidencialidad y protección de datos.`,
    ],
  },
  {
    id: "menores",
    icon: Baby,
    title: "12. Menores de edad y personas con capacidad restringida",
    paragraphs: [
      `12.1. Acceso a través de representante. Los menores de edad y las personas con capacidad restringida solo pueden estar asociados a una cuenta de la Aplicación a través de su representante legal, conforme la cláusula 7.3 de los Términos y Condiciones de Uso. El representante asume la responsabilidad por la veracidad y exactitud de los datos cargados y declara contar con la facultad legal correspondiente.`,
      `12.2. Documentación. La Aplicación requerirá la documentación habilitante correspondiente (DNI del menor, DNI del progenitor, partida de nacimiento o resolución judicial, según corresponda), que se remitirá conforme el procedimiento previsto en la cláusula 7.3 del T&C.`,
      `12.3. Mayoría de edad. Alcanzada la mayoría de edad en los términos del Código Civil y Comercial de la Nación Argentina, los sujetos asociados a la cuenta de un representante se excluirán automáticamente y podrán abrir su propia cuenta.`,
    ],
  },
  {
    id: "derechos-arco",
    icon: UserCheck,
    title: "13. Derechos del titular (ARCO)",
    paragraphs: [
      `13.1. Derechos reconocidos. El titular de los datos personales puede ejercer, sin costo y de forma gratuita, los siguientes derechos respecto de su información: acceso, rectificación, actualización, supresión, oposición y portabilidad, conforme la Ley N.º 25.326.`,
      `13.2. Ejercicio. Las solicitudes de acceso, rectificación, actualización o portabilidad se remiten a notificaciones@himalayasalud.com.ar. Las solicitudes de baja de cuenta y supresión de datos se remiten a revocacion@himalayasalud.com.ar. La Aplicación dará respuesta dentro de los diez (10) días hábiles, conforme el artículo 14 de la Ley N.º 25.326.`,
      `13.3. Periodicidad. El derecho de acceso puede ejercerse de forma gratuita con una periodicidad no inferior a seis (6) meses, salvo que el titular acredite un interés legítimo conforme el artículo 14, inciso 3, de la Ley N.º 25.326.`,
      `13.4. Acreditación de identidad. Para el ejercicio de los derechos se requerirá la acreditación de identidad del titular, a fin de evitar el acceso indebido por parte de terceros.`,
      `13.5. Revocación del consentimiento. El Usuario puede revocar en cualquier momento el consentimiento prestado para el tratamiento de sus datos, sin perjuicio de los tratamientos que la Aplicación deba mantener por obligación legal o para resolver reclamos pendientes.`,
      `13.6. Reclamo ante la autoridad de control. El titular puede formular reclamos y denuncias ante la Agencia de Acceso a la Información Pública (AAIP), autoridad de control de la Ley N.º 25.326, accesible en https://www.argentina.gob.ar/aaip/datospersonales.`,
    ],
  },
  {
    id: "permisos",
    icon: Smartphone,
    title: "14. Datos del dispositivo, permisos y tecnologías similares",
    paragraphs: [
      `Para su funcionamiento, la Aplicación puede solicitar al Usuario los permisos del sistema operativo necesarios, entre ellos: ubicación (Botón de Pánico), notificaciones, cámara (validación de identidad) y acceso al almacenamiento (carga de documentos). El Usuario puede otorgar, restringir o revocar estos permisos en cualquier momento desde la configuración de su dispositivo. La falta de otorgamiento o la revocación de un permiso puede impedir, total o parcialmente, el funcionamiento de la funcionalidad que lo requiera.`,
      `La Aplicación puede recolectar y procesar identificadores únicos del dispositivo a los efectos de la seguridad, la prevención del fraude y la mejora del servicio. La Aplicación no utiliza tecnologías de seguimiento de terceros con fines publicitarios.`,
    ],
  },
  {
    id: "publicidad",
    icon: Megaphone,
    title: "15. Publicidad y uso estadístico",
    paragraphs: [
      `La Aplicación no utilizará imágenes ni datos sensibles del Usuario con fines comerciales. La Aplicación podrá utilizar información, imágenes y datos no sensibles y no identificatorios para fines estadísticos, de mejora del servicio, comunicaciones institucionales, comerciales o publicitarias, conforme la cláusula 13 del T&C.`,
    ],
  },
  {
    id: "cambios",
    icon: RefreshCw,
    title: "16. Cambios a esta Política",
    paragraphs: [
      `La Aplicación podrá modificar la presente Política en cualquier momento. La versión vigente será publicada en la propia Aplicación y en el sitio web de Himalaya Salud, y reemplazará a todas las versiones anteriores. Las modificaciones entrarán en vigencia desde su publicación. Cuando una modificación afecte de manera material los derechos del Usuario, la Aplicación lo notificará por los medios habituales y, cuando corresponda, requerirá una nueva manifestación de consentimiento.`,
    ],
  },
  {
    id: "contacto",
    icon: Mail,
    title: "17. Contacto",
    paragraphs: [
      `Para cualquier consulta vinculada a la presente Política o al tratamiento de los datos personales, el Usuario puede contactarse a:`,
    ],
    emails: [
      { label: "Consultas y ejercicio de derechos ARCO", address: arcoEmail },
      { label: "Baja de cuenta y supresión de datos", address: bajaEmail },
    ],
    closing: `Reclamos ante la autoridad de control: AAIP, https://www.argentina.gob.ar/aaip/datospersonales`,
  },
  {
    id: "ley-aplicable",
    icon: Gavel,
    title: "18. Ley aplicable y jurisdicción",
    paragraphs: [
      `La presente Política se rige por la legislación vigente en la República Argentina, en particular la Ley N.º 25.326 y la Ley N.º 26.529. Cualquier controversia derivada de esta Política se someterá a la jurisdicción de los tribunales ordinarios de la ciudad de Rosario, Provincia de Santa Fe, República Argentina, con renuncia a cualquier otro fuero o jurisdicción que pudiera corresponder.`,
    ],
  },
];

export default function PrivacyPage() {
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
            Política de Privacidad
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

                    {section.paragraphs && (
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
                    )}

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
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.blocks && (
                      <div className="mt-5 space-y-3">
                        {section.blocks.map((block, i) => (
                          <div
                            key={i}
                            style={{
                              backgroundColor: BRAND.bgSecondary,
                              border: `1px solid ${BRAND.teal50}`,
                              borderRadius: 12,
                              padding: "14px 16px",
                            }}
                          >
                            <p
                              className="text-sm font-semibold"
                              style={{ color: BRAND.teal700 }}
                            >
                              {block.title}
                            </p>
                            <div className="mt-2.5 space-y-2">
                              {block.rows.map((row, j) => (
                                <div key={j}>
                                  <span
                                    className="block text-[11px] font-bold uppercase"
                                    style={{
                                      color: BRAND.textCaption,
                                      letterSpacing: "0.6px",
                                    }}
                                  >
                                    {row.label}
                                  </span>
                                  <span
                                    className="block text-sm leading-relaxed"
                                    style={{ color: BRAND.textBody }}
                                  >
                                    {row.value}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.emails && (
                      <div className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                        {section.emails.map((item, i) => (
                          <a
                            key={i}
                            href={`mailto:${item.address}`}
                            className="inline-flex flex-col gap-0.5"
                            style={{
                              backgroundColor: BRAND.mint50,
                              padding: "10px 16px",
                              borderRadius: 8,
                            }}
                          >
                            <span
                              className="text-[11px] font-bold uppercase"
                              style={{
                                color: BRAND.mint900,
                                letterSpacing: "0.6px",
                              }}
                            >
                              {item.label}
                            </span>
                            <span
                              className="inline-flex items-center gap-2 text-sm font-semibold"
                              style={{ color: BRAND.mint900 }}
                            >
                              <Mail size={15} />
                              {item.address}
                            </span>
                          </a>
                        ))}
                      </div>
                    )}

                    {section.closing && (
                      <p
                        className="mt-4 text-sm leading-relaxed"
                        style={{ color: BRAND.textBody }}
                      >
                        {section.closing}
                      </p>
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
