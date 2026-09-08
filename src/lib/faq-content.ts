export type Faq = {
  id: string;
  question: string;
  answer: string;
  sort_order: number;
  status: string;
};
export type FaqCategory = {
  id: string;
  key: string;
  name: string;
  sort_order: number;
  status: string;
  faqs: Faq[];
};

const content = [
  {
    key: "contratacion",
    name: "Contratación y pagos",
    questions: [
      [
        "¿Cómo contrato desde la web?",
        "Entrá a los planes, revisá el precio y las prestaciones y elegí el que necesitás. Creá tu cuenta o ingresá a la que ya tenés para continuar con Mercado Pago. Después usá esa misma cuenta en la app.",
      ],
      [
        "¿Qué incluye cada plan y cuánto cuesta?",
        "El detalle de cada plan en el portal indica su precio, las funciones habilitadas y los límites de uso. Revisá esa información antes de confirmar la contratación. Descargar la app no activa por sí solo una suscripción.",
      ],
      [
        "¿Tengo que pagar otra vez cuando descargo la app?",
        "Si ya tenés un plan activo, ingresá con la misma cuenta que usaste al contratar. Si todavía no aparece tu acceso, verificá la cuenta y consultanos antes de iniciar otra compra.",
      ],
      [
        "¿Qué hago si el pago está pendiente?",
        "Revisá el estado en el canal donde realizaste el pago y esperá su confirmación. No repitas la compra mientras siga en proceso. Si necesitás ayuda, escribinos indicando el canal de pago y el correo de tu cuenta.",
      ],
      [
        "¿Cómo consulto la renovación o cancelo la suscripción?",
        "La gestión depende de dónde contrataste: web con Mercado Pago, App Store o Google Play. Revisá la suscripción en el canal correspondiente. Si no encontrás la opción, contactanos para orientarte. Desinstalar la app o solicitar la baja de la cuenta no equivale a cancelar la suscripción.",
      ],
    ],
  },
  {
    key: "acceso",
    name: "Tu cuenta y el acceso empresarial",
    questions: [
      [
        "Mi empresa me dio acceso. ¿Tengo que contratar un plan?",
        "Para usar el beneficio asignado por tu empresa, abrí la invitación recibida por correo y seguí su enlace de activación. Usá el correo al que llegó la invitación. Si ya tenés una cuenta con ese correo, continuá con ella.",
      ],
      [
        "¿Qué hago si no recibí la invitación de mi empresa?",
        "Revisá spam y promociones y confirmá con tu empresa qué correo usó para invitarte. Si el enlace no funciona o el correo no coincide, pedí ayuda para revisar o reenviar la invitación. La guía pública no reemplaza tu enlace personal.",
      ],
      [
        "¿Qué hago si no recuerdo mi contraseña?",
        "Desde el inicio de sesión, elegí la opción para recuperar la contraseña y revisá el correo de tu cuenta, incluida la carpeta de spam. Si el enlace venció, solicitá uno nuevo.",
      ],
      [
        "¿Qué significa que mi correo está confirmado?",
        "Significa que verificaste el correo de tu cuenta. Es un paso distinto de tener un plan activo: para usar las funciones de tu suscripción, también tiene que estar confirmada la contratación o activado tu beneficio empresarial.",
      ],
    ],
  },
  {
    key: "uso",
    name: "Uso de la app",
    questions: [
      [
        "¿Qué hace el Botón de Pánico?",
        "Permite enviar una alerta con tu ubicación a los contactos que elegiste. Mantenelo presionado durante tres segundos para activarlo. Ese tiempo corresponde al gesto de activación; no es un plazo garantizado de entrega del aviso.",
      ],
      [
        "¿Qué tengo que configurar antes de usar el botón?",
        "Agregá tus contactos de emergencia y revisá las confirmaciones que pida la app. Podés definir hasta tres contactos principales y tres secundarios. Verificá también los permisos solicitados y la información que elegís compartir.",
      ],
      [
        "¿Puedo probar el botón sin avisar a mis contactos?",
        "No actives una alerta real solo para recorrer la app. Antes de cualquier prueba, coordiná con tus contactos y revisá las indicaciones del servicio. Una activación puede enviar avisos y consumir un uso de tu plan.",
      ],
      [
        "¿Himalaya envía una ambulancia o reemplaza al servicio de emergencias?",
        "Himalaya transmite una alerta a tus contactos; no presta ni coordina atención médica o ambulancias. No reemplaza a los servicios de emergencia, una obra social ni una ART.",
      ],
      [
        "¿Puedo guardar estudios y mediciones?",
        "Himalaya cuenta con un Portal del Paciente para documentos y una sección de mediciones cargadas por vos. Su disponibilidad y los límites de uso dependen del plan contratado. Revisá el detalle de tu plan.",
      ],
    ],
  },
] as const;
export const localFaqCategories: FaqCategory[] = content.map((c, i) => ({
  id: c.key,
  key: c.key,
  name: c.name,
  sort_order: i,
  status: "active",
  faqs: c.questions.map(([question, answer], j) => ({
    id: c.key + "-" + j,
    question,
    answer,
    sort_order: j,
    status: "published",
  })),
}));
export const homeFaqs = [
  localFaqCategories[0].faqs[0],
  localFaqCategories[0].faqs[2],
  localFaqCategories[1].faqs[0],
  localFaqCategories[2].faqs[1],
];
