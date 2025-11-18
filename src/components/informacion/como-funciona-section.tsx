"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Handshake,
  Settings,
  Rocket,
  Users,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";
import { TimelineVertical } from "@/components/ui/timeline-vertical";

export function ComoFuncionaSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const steps = [
    {
      title: "Contacto Inicial",
      description:
        "La institución se pone en contacto con Himalaya Salud para conocer el sistema. Realizamos una presentación personalizada mostrando todos los beneficios y funcionalidades.",
      icon: <Handshake className="w-6 h-6 text-white" />,
    },
    {
      title: "Análisis y Planificación",
      description:
        "Nuestro equipo técnico analiza la infraestructura actual de la institución y planifica la integración con los sistemas existentes, sin interrumpir la operativa.",
      icon: <Settings className="w-6 h-6 text-white" />,
    },
    {
      title: "Implementación",
      description:
        "Realizamos la instalación y configuración del sistema. Este proceso se realiza de forma gradual y controlada, asegurando que no haya interrupciones en el servicio.",
      icon: <Rocket className="w-6 h-6 text-white" />,
    },
    {
      title: "Capacitación del Personal",
      description:
        "Brindamos capacitación completa al personal médico y administrativo sobre el uso del sistema, mejores prácticas y resolución de consultas.",
      icon: <GraduationCap className="w-6 h-6 text-white" />,
    },
    {
      title: "Lanzamiento para Pacientes",
      description:
        "Los pacientes comienzan a descargar la aplicación y acceder a sus historias clínicas. Se realiza una campaña de comunicación para informar a todos los pacientes.",
      icon: <Users className="w-6 h-6 text-white" />,
    },
    {
      title: "Soporte Continuo",
      description:
        "Himalaya Salud brinda soporte técnico continuo, actualizaciones del sistema y mejoras basadas en feedback de instituciones y pacientes.",
      icon: <CheckCircle2 className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <section
      id="como-funciona"
      ref={ref}
      className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 tech-grid opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            ¿Cómo{" "}
            <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Funciona
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Un proceso simple y sin complicaciones para transformar tu
            institución
          </p>
        </motion.div>

        {/* Timeline */}
        <TimelineVertical items={steps} />

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 max-w-4xl mx-auto grid md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">0</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Costo de implementación
            </div>
          </div>
          <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-6 border border-secondary/20">
            <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Soporte técnico disponible
            </div>
          </div>
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6 border border-accent/20">
            <div className="text-3xl font-bold text-accent mb-2">100%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Satisfacción garantizada
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
