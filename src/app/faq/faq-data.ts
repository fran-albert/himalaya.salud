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

// Respaldo: las preguntas publicadas al 2026-11-06. Se muestran si Gestión no responde.
export const fallbackCategories: FaqCategory[] = [
  {
    "id": "empresas",
    "key": "empresas",
    "name": "Para empresas",
    "sort_order": 10,
    "status": "active",
    "faqs": [
      {
        "id": "business-benefit",
        "question": "¿Qué es SOS Protegete para empresas?",
        "answer": "Es un beneficio que tu empresa contrata para su gente. Cada persona tiene una app con un botón SOS para avisar a sus contactos de confianza y herramientas para guardar su información de salud en su propio teléfono. La empresa contrata y administra el beneficio; cada empleado usa su cuenta personal.",
        "sort_order": 10,
        "status": "published"
      },
      {
        "id": "business-employees-pay",
        "question": "¿El empleado tiene que pagar o contratar algo?",
        "answer": "No. El servicio lo contrata la empresa. El empleado recibe su invitación, instala SOS Protegete desde la tienda de su teléfono y activa el beneficio. No necesita comprar una suscripción ni cargar un medio de pago en la app.",
        "sort_order": 20,
        "status": "published"
      },
      {
        "id": "business-rollout",
        "question": "¿Cómo empezamos a usarlo en la empresa?",
        "answer": "Coordinamos la contratación y la carga de la nómina. Desde Gestión se envían las invitaciones. Cada empleado abre su enlace, instala la app y activa su cuenta; después agrega sus contactos de emergencia y les pide que acepten. La descarga por sí sola no activa el beneficio.",
        "sort_order": 30,
        "status": "published"
      },
      {
        "id": "business-devices",
        "question": "¿Hay que entregar un dispositivo o instalar equipos?",
        "answer": "Cada empleado usa SOS Protegete en un teléfono compatible, Android o iPhone. La app está disponible en las tiendas de Argentina. Para activar el SOS necesita conexión a internet; para incluir dónde está, debe permitir el acceso a la ubicación y el teléfono debe poder obtenerla.",
        "sort_order": 40,
        "status": "published"
      },
      {
        "id": "business-sos",
        "question": "¿A quién avisa el SOS de un empleado?",
        "answer": "A los contactos que el empleado elige y que aceptaron su invitación: hasta tres reciben llamada y WhatsApp y otros tres reciben sólo WhatsApp. El aviso incluye su ubicación al activar, si está disponible. La empresa no recibe alertas automáticamente por contratar el beneficio.",
        "sort_order": 50,
        "status": "published"
      },
      {
        "id": "business-privacy",
        "question": "¿Qué información de los empleados puede ver la empresa?",
        "answer": "La empresa administra la nómina, las invitaciones y el estado del beneficio. No recibe la ficha de salud, estudios, mediciones, contactos de emergencia ni la ubicación y el detalle de las activaciones SOS. La información de salud queda en el teléfono de cada empleado.",
        "sort_order": 60,
        "status": "published"
      },
      {
        "id": "business-emergency-scope",
        "question": "¿Incluye atención médica o envío de ambulancias?",
        "answer": "No. SOS Protegete intenta avisar a los contactos elegidos por cada empleado; no presta atención médica ni despacha ambulancias. Tampoco garantiza que un contacto responda o llegue. Ante una emergencia debe llamarse al servicio de emergencias de la localidad.",
        "sort_order": 70,
        "status": "published"
      },
      {
        "id": "business-support",
        "question": "¿Quién ayuda a los empleados si tienen un problema con la app?",
        "answer": "El equipo de Himalaya atiende por WhatsApp al +54 9 341 242-9819 y por correo en contacto@himalayasalud.com.ar, de lunes a viernes de 8 a 16, hora argentina. Desde la app pueden abrir Ayuda y soporte. Este canal resuelve dudas de uso; no es una central de emergencias.",
        "sort_order": 80,
        "status": "published"
      },
      {
        "id": "business-contract",
        "question": "¿Cómo contrato SOS Protegete para mi empresa?",
        "answer": "Escribinos desde Contacto o a contacto@himalayasalud.com.ar con la cantidad aproximada de personas. Te preparamos una propuesta y coordinamos el alta de la empresa, la nómina y las invitaciones. Cada persona instala la app y activa su propia cuenta.",
        "sort_order": 90,
        "status": "published"
      },
      {
        "id": "business-roster",
        "question": "¿Qué datos necesita la nómina para invitar a mi gente?",
        "answer": "Nombre, apellido, DNI y correo; para enviar la invitación por WhatsApp también necesitamos el celular correcto. Verificá esos datos antes de la carga y usá el canal acordado para la nómina. Dar de alta a una persona y enviarle la invitación son pasos distintos.",
        "sort_order": 100,
        "status": "published"
      },
      {
        "id": "business-price",
        "question": "¿Cómo se cobra y qué incluye el beneficio empresarial?",
        "answer": "La propuesta indica el precio, la cantidad de personas, las funciones, el cupo SOS, la vigencia y las condiciones de facturación. El empleado no compra ni paga un plan dentro de la app. Consultanos para definir el alcance de tu empresa.",
        "sort_order": 110,
        "status": "published"
      },
      {
        "id": "business-adoption",
        "question": "¿Cómo sé si las personas activaron la app?",
        "answer": "Desde Gestión podés consultar el estado de las invitaciones y del beneficio de cada persona. Una invitación enviada no significa que la cuenta esté activada. Cada usuario debe completar el alta y preparar sus contactos de emergencia desde la app.",
        "sort_order": 120,
        "status": "published"
      }
    ]
  }
];

const HELP_WEB_URL =
  process.env.HELP_WEB_URL ||
  "https://app.himalayasalud.com.ar/v1/help/current?channel=web";

type HelpWebContent = {
  channel: "web";
  content: {
    categories?: { id: string; name: string }[];
    faqs: { id: string; question: string; answer: string; categoryId?: string }[];
  };
};

function isHelpWebContent(value: unknown): value is HelpWebContent {
  if (typeof value !== "object" || value === null) return false;
  const data = value as { channel?: unknown; content?: { faqs?: unknown; categories?: unknown } };
  // Sin «channel: web» puede ser una API que todavía no conoce canales y devuelve la ayuda de la app.
  if (data.channel !== "web" || typeof data.content !== "object" || data.content === null) return false;
  const { faqs, categories } = data.content;
  const text = (item: unknown, key: string) =>
    typeof (item as Record<string, unknown>)[key] === "string";
  return (
    Array.isArray(faqs) &&
    faqs.length > 0 &&
    faqs.every((faq) => text(faq, "id") && text(faq, "question") && text(faq, "answer")) &&
    (categories === undefined ||
      (Array.isArray(categories) && categories.every((c) => text(c, "id") && text(c, "name"))))
  );
}

// Mismo orden que en Gestión: las categorías como están y «General» al final.
function toCategories({ content }: HelpWebContent): FaqCategory[] {
  const declared = content.categories ?? [];
  const known = new Set(declared.map((category) => category.id));
  const groups = [
    ...declared.map((category) => ({
      ...category,
      faqs: content.faqs.filter((faq) => faq.categoryId === category.id),
    })),
    {
      id: "general",
      name: "General",
      faqs: content.faqs.filter((faq) => !faq.categoryId || !known.has(faq.categoryId)),
    },
  ];
  return groups.map((group, index) => ({
    id: group.id,
    key: group.id,
    name: group.name,
    sort_order: (index + 1) * 10,
    status: "active",
    faqs: group.faqs.map((faq, position) => ({
      id: faq.id,
      question: faq.question,
      answer: faq.answer,
      sort_order: (position + 1) * 10,
      status: "published",
    })),
  }));
}

export async function loadFaqCategories(): Promise<FaqCategory[]> {
  try {
    const response = await fetch(HELP_WEB_URL, {
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(5000),
      headers: { Accept: "application/json" },
    });
    if (!response.ok) return fallbackCategories;
    const data: unknown = await response.json();
    return isHelpWebContent(data) ? toCategories(data) : fallbackCategories;
  } catch {
    return fallbackCategories;
  }
}
