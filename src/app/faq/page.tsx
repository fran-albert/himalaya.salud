"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, HelpCircle, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BRAND, SHADOW } from "@/lib/brand-tokens";

type Faq = {
  id: string;
  question: string;
  answer: string;
  sort_order: number;
  status: string;
};

type FaqCategory = {
  id: string;
  key: string;
  name: string;
  sort_order: number;
  status: string;
  faqs: Faq[];
};

const fallbackCategories: FaqCategory[] = [
  {
    id: "primeros_pasos",
    key: "primeros_pasos",
    name: "Primeros pasos",
    sort_order: 10,
    status: "active",
    faqs: [
      {
        id: "primeros_pasos-01",
        question: "¿Qué es Himalaya Salud?",
        answer: "Es una app para cuidar tu salud y la de los tuyos. Incluye un botón de pánico para avisar a tus contactos en una emergencia, un portal para guardar tus documentos médicos, el registro de tus mediciones de salud y la búsqueda de servicios de salud cercanos.",
        sort_order: 10,
        status: "published",
      },
      {
        id: "primeros_pasos-02",
        question: "¿Cómo empiezo a usar la app?",
        answer: "Creá tu cuenta con tu email y tus datos personales, aceptá los términos y condiciones y elegí tu plan. Tenés 7 días de prueba gratis para conocer todas las funciones.",
        sort_order: 20,
        status: "published",
      },
      {
        id: "primeros_pasos-03",
        question: "¿Qué me conviene configurar primero?",
        answer: "Cargá tus contactos de emergencia en el botón de pánico: es lo más importante para que la app pueda avisar a las personas correctas. Después configurá qué información querés compartir en una emergencia, subí tus estudios al portal del paciente y registrá tus primeras mediciones.",
        sort_order: 30,
        status: "published",
      },
      {
        id: "primeros_pasos-04",
        question: "¿Cómo agrego mis contactos de emergencia?",
        answer: "Entrá a la sección del botón de pánico, elegí agregar contacto y completá nombre, relación y teléfono. Podés tener hasta 3 contactos principales (reciben llamada y WhatsApp) y hasta 3 contactos de solo WhatsApp.",
        sort_order: 40,
        status: "published",
      },
      {
        id: "primeros_pasos-05",
        question: "¿Cómo configuro qué información comparte el botón de pánico?",
        answer: "En la configuración del botón de pánico podés activar \"Mi Portal Paciente\" para adjuntar tus estudios y documentos médicos, y \"Mis Mediciones\" para compartir tus últimas mediciones de presión, peso, frecuencia y otros signos vitales. Así, en una emergencia, tus contactos reciben esa información junto con tu ubicación.",
        sort_order: 50,
        status: "published",
      },
      {
        id: "primeros_pasos-06",
        question: "¿Cómo subo mi primer documento al portal del paciente?",
        answer: "Entrá al portal, tocá \"Subir nuevo estudio\", elegí el archivo (PDF, JPG o PNG) y completá los datos. Después podés organizarlo con etiquetas.",
        sort_order: 60,
        status: "published",
      },
      {
        id: "primeros_pasos-07",
        question: "¿Cómo cargo mi primera medición?",
        answer: "Entrá a Mis mediciones, tocá el botón de agregar, elegí el tipo de medición (por ejemplo, presión arterial o peso), ingresá el valor y la fecha.",
        sort_order: 70,
        status: "published",
      },
      {
        id: "primeros_pasos-08",
        question: "¿Dónde encuentro cada función?",
        answer: "Desde la pantalla principal accedés a las cuatro funciones: botón de pánico, portal del paciente, Mis mediciones y servicios de salud. Tocá cada una para entrar a su sección.",
        sort_order: 80,
        status: "published",
      },
      {
        id: "primeros_pasos-09",
        question: "¿Necesito internet para usar la app?",
        answer: "Sí. La app necesita conexión para enviar alertas, sincronizar tus documentos y mediciones, y buscar servicios de salud.",
        sort_order: 90,
        status: "published",
      },
    ],
  },
  {
    id: "boton_panico",
    key: "boton_panico",
    name: "Botón de pánico",
    sort_order: 20,
    status: "active",
    faqs: [
      {
        id: "boton_panico-01",
        question: "¿Cómo activo el botón de pánico?",
        answer: "Mantené presionado el botón durante 3 segundos. Mientras lo sostenés, una barra se va llenando. Si lo soltás antes, la activación se cancela. Al completarse los 3 segundos, se envía la alerta.",
        sort_order: 10,
        status: "published",
      },
      {
        id: "boton_panico-02",
        question: "¿Qué pasa cuando lo activo?",
        answer: "Se comparte tu ubicación con tus contactos de emergencia y se les envía un aviso. Los contactos principales reciben una llamada y un mensaje de WhatsApp; los contactos de solo WhatsApp reciben el mensaje. Además, podés elegir que la alerta incluya el acceso a tu portal del paciente y a tus mediciones.",
        sort_order: 20,
        status: "published",
      },
      {
        id: "boton_panico-03",
        question: "¿A quién se le avisa?",
        answer: "A los contactos de emergencia que cargues en la app. Podés tener hasta 3 contactos principales (reciben llamada y WhatsApp) y hasta 3 contactos de solo WhatsApp (por ejemplo, tu médico de cabecera).",
        sort_order: 30,
        status: "published",
      },
      {
        id: "boton_panico-04",
        question: "¿Cómo cargo mis contactos de emergencia?",
        answer: "Entrá a la sección del botón de pánico, elegí agregar contacto y completá nombre, relación y teléfono. Mantené tus contactos actualizados para que la alerta llegue a las personas correctas.",
        sort_order: 40,
        status: "published",
      },
      {
        id: "boton_panico-05",
        question: "¿Cuántas veces por mes puedo usarlo?",
        answer: "El plan emergencia incluye 5 activaciones por mes.",
        sort_order: 50,
        status: "published",
      },
      {
        id: "boton_panico-06",
        question: "¿Puedo cancelar una alerta que envié por error?",
        answer: "Sí. Después de activarlo aparece la opción de cancelar. De todas formas, si tus contactos ya recibieron el aviso, conviene que les avises directamente.",
        sort_order: 60,
        status: "published",
      },
      {
        id: "boton_panico-07",
        question: "¿Necesito permiso de ubicación?",
        answer: "Sí. El botón de pánico necesita acceso a tu ubicación para poder compartirla. Si la ubicación está desactivada, el botón queda deshabilitado.",
        sort_order: 70,
        status: "published",
      },
      {
        id: "boton_panico-08",
        question: "¿Necesito internet para usarlo?",
        answer: "Sí, la app necesita conexión para enviar la alerta con tu ubicación. Si no tenés conexión y estás ante una emergencia, llamá directamente al servicio de emergencias.",
        sort_order: 80,
        status: "published",
      },
      {
        id: "boton_panico-09",
        question: "¿El botón de pánico reemplaza al servicio de emergencias?",
        answer: "No. Ante una urgencia médica, llamá al número de emergencias de tu localidad (107 / 911). El botón de pánico es un complemento para avisar a tus contactos.",
        sort_order: 90,
        status: "published",
      },
    ],
  },
  {
    id: "portal_paciente",
    key: "portal_paciente",
    name: "Portal del paciente",
    sort_order: 30,
    status: "active",
    faqs: [
      {
        id: "portal_paciente-01",
        question: "¿Qué es el portal del paciente?",
        answer: "Es tu espacio personal dentro de la app para guardar y organizar tus documentos médicos: estudios, recetas, informes y otros archivos relacionados con tu salud.",
        sort_order: 10,
        status: "published",
      },
      {
        id: "portal_paciente-02",
        question: "¿Cómo subo un documento?",
        answer: "Entrá al portal, tocá \"Subir nuevo estudio\", elegí el archivo y completá los datos. Podés subir archivos PDF, JPG o PNG.",
        sort_order: 20,
        status: "published",
      },
      {
        id: "portal_paciente-03",
        question: "¿Puedo organizar mis estudios?",
        answer: "Sí. Podés crear etiquetas con colores y asignarlas a cada estudio. Después podés filtrar por etiqueta, por fecha o buscar por nombre.",
        sort_order: 30,
        status: "published",
      },
      {
        id: "portal_paciente-04",
        question: "¿Puedo ver mis documentos desde otro celular?",
        answer: "Sí. Ingresando con tu cuenta desde cualquier dispositivo con internet vas a ver tus documentos.",
        sort_order: 40,
        status: "published",
      },
      {
        id: "portal_paciente-05",
        question: "¿Puedo eliminar un documento?",
        answer: "Sí. Desde el detalle del estudio tenés la opción de eliminarlo.",
        sort_order: 50,
        status: "published",
      },
      {
        id: "portal_paciente-06",
        question: "¿Qué pasa si subí un documento equivocado?",
        answer: "Eliminalo desde el detalle del estudio y subí el correcto. Verificá siempre el archivo antes de confirmar.",
        sort_order: 60,
        status: "published",
      },
    ],
  },
  {
    id: "mis_mediciones",
    key: "mis_mediciones",
    name: "Mis mediciones",
    sort_order: 40,
    status: "active",
    faqs: [
      {
        id: "mis_mediciones-01",
        question: "¿Qué es Mis mediciones?",
        answer: "Es la sección donde registrás y seguís tus controles de salud a lo largo del tiempo, para tenerlos siempre a mano.",
        sort_order: 10,
        status: "published",
      },
      {
        id: "mis_mediciones-02",
        question: "¿Qué puedo registrar?",
        answer: "Podés cargar presión arterial, frecuencia cardíaca, frecuencia respiratoria, temperatura corporal, saturación de oxígeno, peso y estatura, perímetros corporales, glucemia, hemoglobina, electrolitos séricos y función renal.",
        sort_order: 20,
        status: "published",
      },
      {
        id: "mis_mediciones-03",
        question: "¿Cómo cargo una medición?",
        answer: "Tocá el botón de agregar, elegí el tipo de medición, ingresá el valor y la fecha. También podés agregar el contexto (por ejemplo, en ayunas o en reposo) y una nota.",
        sort_order: 30,
        status: "published",
      },
      {
        id: "mis_mediciones-04",
        question: "¿Cómo veo mis mediciones anteriores?",
        answer: "En el panel principal ves tus últimos registros. Tocá cualquier medición para ver el historial completo de ese tipo.",
        sort_order: 40,
        status: "published",
      },
      {
        id: "mis_mediciones-05",
        question: "¿Puedo compartir mis mediciones en una emergencia?",
        answer: "Sí. Podés configurar que tus mediciones se incluyan en el aviso del botón de pánico, para facilitar la asistencia.",
        sort_order: 50,
        status: "published",
      },
      {
        id: "mis_mediciones-06",
        question: "¿Quién es responsable de los datos que cargo?",
        answer: "Los datos que cargás manualmente dependen de la información que ingreses. Verificá que sean correctos y consultá siempre con un profesional antes de tomar decisiones médicas.",
        sort_order: 60,
        status: "published",
      },
    ],
  },
  {
    id: "servicios_salud",
    key: "servicios_salud",
    name: "Servicios de salud",
    sort_order: 50,
    status: "active",
    faqs: [
      {
        id: "servicios_salud-01",
        question: "¿Qué puedo buscar en Servicios de salud?",
        answer: "Podés buscar instituciones de salud (clínicas, sanatorios, hospitales, centros de salud y laboratorios), farmacias y ambulancias cercanas a tu ubicación o a la zona que elijas.",
        sort_order: 10,
        status: "published",
      },
      {
        id: "servicios_salud-02",
        question: "¿Cómo busco un servicio?",
        answer: "Elegí el tipo de servicio que necesitás y la app te muestra los resultados cercanos en un mapa y en una lista. Podés tocar cada resultado para ver sus datos de contacto y cómo llegar.",
        sort_order: 20,
        status: "published",
      },
      {
        id: "servicios_salud-03",
        question: "¿Puedo buscar en otra zona?",
        answer: "Sí. Cambiá la ubicación de referencia o mové el mapa y tocá \"Buscar en esta zona\", aunque no estés físicamente allí.",
        sort_order: 30,
        status: "published",
      },
      {
        id: "servicios_salud-04",
        question: "¿Por qué no encuentro resultados cerca mío?",
        answer: "Puede que todavía no haya datos cargados para tu zona o que el radio de búsqueda sea acotado. Probá ampliar la zona o moverte en el mapa.",
        sort_order: 40,
        status: "published",
      },
      {
        id: "servicios_salud-05",
        question: "¿La información de los servicios está verificada?",
        answer: "La información proviene de fuentes oficiales y datos propios. Si encontrás algo incorrecto, reportalo para que podamos revisarlo.",
        sort_order: 50,
        status: "published",
      },
    ],
  },
  {
    id: "cuenta_registro",
    key: "cuenta_registro",
    name: "Cuenta y registro",
    sort_order: 60,
    status: "active",
    faqs: [
      {
        id: "cuenta_registro-01",
        question: "¿Cómo creo mi cuenta?",
        answer: "Ingresá a la app, elegí \"Crear cuenta\" y completá tus datos: email, contraseña, datos personales (nombre, apellido, teléfono, género y fecha de nacimiento) y tu DNI. Aceptá los términos y condiciones para finalizar.",
        sort_order: 10,
        status: "published",
      },
      {
        id: "cuenta_registro-02",
        question: "¿Con qué puedo iniciar sesión?",
        answer: "Podés iniciar sesión con tu email o con tu teléfono, junto con tu contraseña.",
        sort_order: 20,
        status: "published",
      },
      {
        id: "cuenta_registro-03",
        question: "¿Qué hago si olvidé mi contraseña?",
        answer: "En la pantalla de inicio de sesión tocá \"¿Olvidaste tu contraseña?\", ingresá tu email y te enviamos por correo las instrucciones para crear una nueva. El correo puede tardar unos minutos; revisá también las carpetas de spam o promociones.",
        sort_order: 30,
        status: "published",
      },
      {
        id: "cuenta_registro-04",
        question: "¿Cómo cambio mi contraseña?",
        answer: "Desde tu perfil, en la sección Cuenta y seguridad, tocá \"Cambiar contraseña\".",
        sort_order: 40,
        status: "published",
      },
      {
        id: "cuenta_registro-05",
        question: "¿Puedo modificar mis datos personales?",
        answer: "Sí. Desde tu perfil tocá editar y actualizá tus datos.",
        sort_order: 50,
        status: "published",
      },
      {
        id: "cuenta_registro-06",
        question: "¿Puedo eliminar mi cuenta?",
        answer: "Sí. Podés solicitar la eliminación de tu cuenta desde la app o escribiendo a soporte. Antes de concretarla, se te informa el alcance de la baja y qué datos pueden conservarse por obligación legal.",
        sort_order: 60,
        status: "published",
      },
    ],
  },
  {
    id: "planes_suscripciones",
    key: "planes_suscripciones",
    name: "Planes y suscripciones",
    sort_order: 70,
    status: "active",
    faqs: [
      {
        id: "planes_suscripciones-01",
        question: "¿Qué incluye mi suscripción?",
        answer: "El plan emergencia incluye el botón de pánico (con 5 activaciones por mes), el portal del paciente, Mis mediciones y la búsqueda de servicios de salud.",
        sort_order: 10,
        status: "published",
      },
      {
        id: "planes_suscripciones-02",
        question: "¿Tiene período de prueba?",
        answer: "Sí. El plan incluye 7 días de prueba gratis.",
        sort_order: 20,
        status: "published",
      },
      {
        id: "planes_suscripciones-03",
        question: "¿Dónde veo el estado de mi suscripción?",
        answer: "En la sección de suscripción ves si tu plan está activo, la fecha de la próxima renovación y el historial de pagos.",
        sort_order: 30,
        status: "published",
      },
      {
        id: "planes_suscripciones-04",
        question: "¿Puedo cancelar mi suscripción?",
        answer: "Sí. Podés solicitar la cancelación escribiendo a soporte. El acceso se mantiene activo hasta el final del período ya abonado.",
        sort_order: 40,
        status: "published",
      },
    ],
  },
  {
    id: "pagos",
    key: "pagos",
    name: "Pagos",
    sort_order: 80,
    status: "active",
    faqs: [
      {
        id: "pagos-01",
        question: "¿Cómo pago mi suscripción?",
        answer: "El pago se realiza con Mercado Pago.",
        sort_order: 10,
        status: "published",
      },
      {
        id: "pagos-02",
        question: "¿Recibo un comprobante del pago?",
        answer: "Sí. Cada vez que se realiza un pago, te enviamos el comprobante al correo electrónico de tu cuenta.",
        sort_order: 20,
        status: "published",
      },
      {
        id: "pagos-03",
        question: "¿La suscripción se renueva automáticamente?",
        answer: "Sí. La suscripción se renueva de forma automática cada período con tu medio de pago.",
        sort_order: 30,
        status: "published",
      },
      {
        id: "pagos-04",
        question: "¿Dónde veo mis pagos?",
        answer: "En la sección de suscripción, en \"Historial de pagos\", ves todos tus pagos con su fecha, monto y estado.",
        sort_order: 40,
        status: "published",
      },
      {
        id: "pagos-05",
        question: "¿Qué hago si mi pago no se acredita?",
        answer: "Esperá unos minutos y volvé a revisar. Si el problema continúa, escribí a soporte con los datos de la operación para que puedan verificarlo.",
        sort_order: 50,
        status: "published",
      },
    ],
  },
  {
    id: "notificaciones",
    key: "notificaciones",
    name: "Notificaciones",
    sort_order: 90,
    status: "active",
    faqs: [
      {
        id: "notificaciones-01",
        question: "¿La app me envía notificaciones?",
        answer: "Sí. Recibís avisos sobre tu suscripción y tus pagos, novedades de la app y alertas de seguridad de tu cuenta.",
        sort_order: 10,
        status: "published",
      },
      {
        id: "notificaciones-02",
        question: "¿Dónde veo mis notificaciones?",
        answer: "Tocá el ícono de la campana en la app. Vas a ver todas tus notificaciones agrupadas por fecha. Podés marcarlas como leídas o eliminarlas.",
        sort_order: 20,
        status: "published",
      },
    ],
  },
  {
    id: "soporte_seguridad",
    key: "soporte_seguridad",
    name: "Soporte y seguridad",
    sort_order: 100,
    status: "active",
    faqs: [
      {
        id: "soporte_seguridad-01",
        question: "¿Cómo contacto a soporte?",
        answer: "Podés escribir a soporte desde la app o por los canales de contacto habilitados. Indicá tu nombre, un medio de contacto y una descripción clara del problema.",
        sort_order: 10,
        status: "published",
      },
      {
        id: "soporte_seguridad-02",
        question: "¿Qué datos conviene enviar al reportar un problema?",
        answer: "Contanos qué estabas haciendo, en qué paso ocurrió el problema, y sumá una captura de pantalla si podés, el modelo de tu celular y el email o teléfono de tu cuenta.",
        sort_order: 20,
        status: "published",
      },
      {
        id: "soporte_seguridad-03",
        question: "¿Mis datos están protegidos?",
        answer: "Sí. Tu información se trata de forma confidencial y protegida, con controles de acceso y medidas de seguridad acordes a la normativa vigente.",
        sort_order: 30,
        status: "published",
      },
      {
        id: "soporte_seguridad-04",
        question: "¿Himalaya comparte mis datos con terceros?",
        answer: "No compartimos tus datos con terceros sin tu consentimiento o una obligación legal. Cuando una función comparte información, la app te informa con quién y para qué.",
        sort_order: 40,
        status: "published",
      },
      {
        id: "soporte_seguridad-05",
        question: "¿Qué hago si veo información incorrecta?",
        answer: "Reportá el error desde la app o por soporte, indicando qué dato es incorrecto y dónde lo viste, para que podamos revisarlo y corregirlo.",
        sort_order: 50,
        status: "published",
      },
      {
        id: "soporte_seguridad-06",
        question: "¿Qué hago ante una emergencia médica real?",
        answer: "Llamá inmediatamente al número de emergencias de tu localidad (107 / 911) o acudí al centro de salud más cercano. La app puede ayudarte a avisar o compartir datos, pero no reemplaza la asistencia médica urgente.",
        sort_order: 60,
        status: "published",
      },
    ],
  },
];

function normalizeCategories(categories: FaqCategory[]) {
  return categories
    .filter((category) => category.status === "active")
    .map((category) => ({
      ...category,
      faqs: (category.faqs ?? [])
        .filter((faq) => faq.status === "published")
        .sort((a, b) => a.sort_order - b.sort_order),
    }))
    .filter((category) => category.faqs.length > 0)
    .sort((a, b) => a.sort_order - b.sort_order);
}

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState<FaqCategory[]>(fallbackCategories);
  const [isLoading, setIsLoading] = useState(true);
  const [hasRemoteError, setHasRemoteError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadFaqs() {
      try {
        const response = await fetch("/api/faqs");
        if (!response.ok) throw new Error("FAQ request failed");

        const payload = (await response.json()) as { data?: FaqCategory[] };
        const normalized = normalizeCategories(Array.isArray(payload.data) ? payload.data : []);

        if (isMounted && normalized.length > 0) {
          setCategories(normalized);
          setHasRemoteError(false);
        }
      } catch {
        if (isMounted) {
          setCategories(normalizeCategories(fallbackCategories));
          setHasRemoteError(true);
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    loadFaqs();
    return () => {
      isMounted = false;
    };
  }, []);

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCategories = normalizeCategories(categories)
    .map((category) => ({
      ...category,
      faqs: category.faqs.filter((faq) => {
        if (!normalizedQuery) return true;
        return (
          faq.question.toLowerCase().includes(normalizedQuery) ||
          faq.answer.toLowerCase().includes(normalizedQuery) ||
          category.name.toLowerCase().includes(normalizedQuery)
        );
      }),
    }))
    .filter((category) => category.faqs.length > 0);

  return (
    <div className="min-h-screen" style={{ backgroundColor: BRAND.bg }}>
      <div className="container mx-auto px-4 pt-24 pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-5">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.22em]"
              style={{ color: BRAND.mint900 }}
            >
              Centro de ayuda
            </span>
            <h1
              className="text-4xl md:text-5xl font-bold tracking-tight leading-tight"
              style={{ color: BRAND.teal700 }}
            >
              Preguntas frecuentes
            </h1>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: BRAND.textBody }}
            >
              Todo lo que necesitás saber sobre Himalaya Salud, para pacientes e instituciones.
            </p>
          </div>

          <div className="relative max-w-2xl mx-auto mb-12">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="w-5 h-5" style={{ color: BRAND.textCaption }} />
            </div>
            <input
              type="text"
              placeholder="Buscá tu duda (ej: botón de pánico, demo...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-12 pr-4 text-base outline-none transition-colors"
              style={{
                backgroundColor: BRAND.bg,
                border: `1px solid ${BRAND.teal50}`,
                borderRadius: "8px",
                color: BRAND.textBody,
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = BRAND.teal700;
                e.currentTarget.style.boxShadow = `0 0 0 3px ${BRAND.teal50}`;
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = BRAND.teal50;
                e.currentTarget.style.boxShadow = "none";
              }}
            />
          </div>

          <div className="space-y-10">
            {isLoading && (
              <p className="text-center text-sm" style={{ color: BRAND.textCaption }}>
                Cargando preguntas frecuentes...
              </p>
            )}

            {!isLoading && hasRemoteError && (
              <p
                className="px-4 py-3 text-sm"
                style={{
                  color: BRAND.textCaption,
                  backgroundColor: BRAND.bgSecondary,
                  border: `1px solid ${BRAND.teal50}`,
                  borderRadius: "8px",
                }}
              >
                Estamos mostrando preguntas frecuentes base. El contenido dinámico se cargará cuando el servicio esté disponible.
              </p>
            )}

            {!isLoading && visibleCategories.length === 0 && (
              <p className="text-center text-sm" style={{ color: BRAND.textCaption }}>
                No encontramos preguntas frecuentes que coincidan con tu búsqueda.
              </p>
            )}

            {visibleCategories.map((category) => (
              <section key={category.id}>
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 flex items-center justify-center"
                    style={{
                      backgroundColor: BRAND.teal50,
                      color: BRAND.teal700,
                      borderRadius: "12px",
                    }}
                  >
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h2
                      className="text-xl md:text-2xl font-bold tracking-tight"
                      style={{ color: BRAND.teal700 }}
                    >
                      {category.name}
                    </h2>
                    <p className="text-xs" style={{ color: BRAND.textCaption }}>
                      {category.faqs.length} {category.faqs.length === 1 ? "pregunta" : "preguntas"}
                    </p>
                  </div>
                </div>

                <Accordion type="single" collapsible className="space-y-3">
                  {category.faqs.map((faq) => (
                    <AccordionItem
                      key={faq.id}
                      value={faq.id}
                      className="border-none px-5"
                      style={{
                        backgroundColor: BRAND.bg,
                        border: `1px solid ${BRAND.teal50}`,
                        borderRadius: "16px",
                        boxShadow: SHADOW.card,
                      }}
                    >
                      <AccordionTrigger
                        className="text-base font-semibold py-4 hover:no-underline text-left"
                        style={{ color: BRAND.textBody }}
                      >
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent
                        className="text-base leading-relaxed pb-5"
                        style={{ color: BRAND.textBody }}
                      >
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            ))}
          </div>

          <div
            className="mt-16 p-8 md:p-12 text-center"
            style={{
              backgroundColor: BRAND.teal700,
              color: "#FFFFFF",
              borderRadius: "16px",
              boxShadow: SHADOW.cta,
            }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-3">¿Todavía tenés dudas?</h3>
            <p className="text-base md:text-lg opacity-90 mb-7 max-w-xl mx-auto">
              Si no encontraste lo que buscabas, nuestro equipo está listo para ayudarte personalmente.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center text-base font-semibold transition-all group"
              style={{
                backgroundColor: "#FFFFFF",
                color: BRAND.teal700,
                padding: "12px 22px",
                borderRadius: "8px",
              }}
            >
              Contactar ahora
              <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
