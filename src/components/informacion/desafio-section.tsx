"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X, Check, Mountain, Target } from "lucide-react";
import { ParallaxSection } from "@/components/ui/parallax-section";

export function DesafioSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const problemas = [
    "Historia clínica solo disponible en papel o formato digital después de 48hs",
    "En emergencias no se dispone de datos médicos del paciente",
    "Alto costo en equipos, impresión y personal para entregar estudios",
    "Portal del paciente costoso de implementar y mantener",
    "Información médica fragmentada entre múltiples instituciones",
  ];

  const soluciones = [
    "Acceso instantáneo a la historia clínica desde el celular",
    "Botón de pánico que envía información médica en situaciones críticas",
    "Reducción de costos operativos para las instituciones",
    "Sistema sin costo de implementación ni soporte para instituciones",
    "Historia clínica centralizada e interoperable",
  ];

  return (
    <section
      id="desafio"
      ref={ref}
      className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 relative overflow-hidden"
    >
      {/* Background with mountain image effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title with icon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent to-secondary rounded-full mb-6 shadow-xl"
          >
            <Mountain className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            El{" "}
            <span className="text-gradient bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Desafío
            </span>{" "}
            es Innovar
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Juntos con las instituciones médicas que nos acompañen en este
            ambicioso proyecto, lograremos ofrecer a los pacientes un{" "}
            <strong className="text-accent">
              sistema único a nivel global
            </strong>
            .
          </p>
        </motion.div>

{/* OCULTO TEMPORALMENTE - Sección Situación Actual vs Con Himalaya Salud
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="h-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border-2 border-red-200 dark:border-red-900">
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-6">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <X className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Situación Actual</h3>
                    <p className="text-red-100 text-sm">
                      Problemas del sistema tradicional
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {problemas.map((problema, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex gap-3 items-start group"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mt-0.5">
                      <X className="w-4 h-4 text-red-500" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      {problema}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="h-2 bg-gradient-to-r from-red-500 to-red-600" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="h-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border-2 border-primary">
              <div className="bg-gradient-to-r from-primary to-secondary p-6">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Con Himalaya Salud</h3>
                    <p className="text-primary-100 text-sm">
                      Soluciones innovadoras
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {soluciones.map((solucion, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex gap-3 items-start group"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-primary dark:group-hover:text-primary transition-colors">
                      {solucion}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="h-2 bg-gradient-to-r from-primary to-secondary" />
            </div>
          </motion.div>
        </div>
        */}

        {/* Goal statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-20" />

            {/* Content */}
            <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 md:p-12 border border-primary/20 shadow-xl">
              <div className="flex items-start gap-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg"
                >
                  <Target className="w-8 h-8 text-white" />
                </motion.div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Nuestro Objetivo
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Que el paciente pueda{" "}
                    <strong className="text-primary">
                      acceder a su historia clínica centralizada desde su
                      celular
                    </strong>
                    , en un sistema interoperable entre todas las instituciones
                    médicas privadas adheridas al sistema, mejorando
                    significativamente la atención médica, especialmente en
                    situaciones de emergencia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
