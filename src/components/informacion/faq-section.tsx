"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function FAQSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Cuánto cuesta implementar el sistema en mi institución?",
      answer:
        "El sistema no tiene costo de implementación ni de soporte para las instituciones médicas. Himalaya Salud asume todos los costos relacionados con el software, la instalación, capacitación y soporte técnico continuo.",
    },
    {
      question: "¿Cómo se garantiza la seguridad de los datos médicos?",
      answer:
        "Utilizamos encriptación de extremo a extremo (AES-256), autenticación multifactor, servidores certificados y cumplimos con todas las normativas de protección de datos médicos. Los datos del paciente están aislados y solo son accesibles por el paciente y los profesionales autorizados.",
    },
    {
      question: "¿Qué pasa si mi institución ya tiene un portal del paciente?",
      answer:
        "Nuestro sistema puede integrarse con portales existentes o funcionar de forma independiente. Durante el análisis inicial, evaluamos la mejor forma de integración para maximizar beneficios sin generar redundancias.",
    },
    {
      question: "¿Los pacientes pueden ocultar información de su historia clínica?",
      answer:
        "Sí, el paciente tiene control total sobre su información y puede mostrar parcialmente su historia clínica. Sin embargo, el sistema notifica automáticamente al médico cuando se oculta información, para que esté al tanto durante la atención.",
    },
    {
      question: "¿Cuánto tiempo toma la implementación?",
      answer:
        "El tiempo de implementación varía según el tamaño y complejidad de la institución, pero generalmente oscila entre 2 y 8 semanas. El proceso se realiza de forma gradual para no interrumpir las operaciones normales.",
    },
    {
      question: "¿Qué información médica estará disponible para los pacientes?",
      answer:
        "Los pacientes podrán acceder a antecedentes clínicos, evoluciones ambulatorias, consultas, tratamientos, resultados de estudios de imágenes y laboratorio, mediciones clínicas, y opcionalmente registros de guardia e internación.",
    },
    {
      question: "¿Cómo funciona la interoperabilidad entre instituciones?",
      answer:
        "Cuando un paciente se atiende en diferentes instituciones adheridas al sistema, su historia clínica centralizada está disponible para todos los profesionales autorizados, facilitando derivaciones y continuidad de tratamiento. Cada institución solo accede a los datos cuando el paciente se atiende allí.",
    },
    {
      question: "¿Qué sucede en caso de emergencia médica?",
      answer:
        "El botón de pánico permite enviar automática y simultáneamente la historia clínica del paciente al 911, servicios de ambulancia, personal médico y familiares. Esto proporciona información vital en segundos, mejorando significativamente la respuesta en emergencias.",
    },
    {
      question: "¿El sistema cumple con las regulaciones legales?",
      answer:
        "Sí, el sistema cumple automáticamente con la obligación legal de entregar historias clínicas en formato digital. Además, cumple con GDPR, HIPAA y todas las regulaciones locales de protección de datos médicos.",
    },
    {
      question: "¿Qué soporte técnico se ofrece?",
      answer:
        "Ofrecemos soporte técnico 24/7 para todas las instituciones adheridas, incluyendo capacitación inicial del personal, actualizaciones del sistema, resolución de incidencias y mejoras continuas basadas en feedback.",
    },
  ];

  return (
    <section
      id="faq"
      ref={ref}
      className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Preguntas{" "}
            <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Frecuentes
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Respuestas a las dudas más comunes sobre Himalaya Salud
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
                {/* Question button */}
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 dark:text-white pr-8">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center"
                  >
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-white" />
                    ) : (
                      <Plus className="w-5 h-5 text-white" />
                    )}
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-200 dark:border-gray-800 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            ¿No encontraste la respuesta que buscabas?
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full hover:shadow-lg transition-shadow">
            Contactar con Soporte
          </button>
        </motion.div>
      </div>
    </section>
  );
}
