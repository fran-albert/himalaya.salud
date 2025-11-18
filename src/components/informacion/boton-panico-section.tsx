"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Image from "next/image";
import {
  Phone,
  Users,
  Ambulance,
  FileHeart,
  Clock,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function BotonPanicoSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [isPanicActive, setIsPanicActive] = useState(false);

  const acciones = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "911",
      description: "Alerta al servicio de emergencias",
      delay: 0.3,
    },
    {
      icon: <Ambulance className="w-6 h-6" />,
      label: "Ambulancia",
      description: "Despacho inmediato de unidad médica",
      delay: 0.5,
    },
    {
      icon: <Users className="w-6 h-6" />,
      label: "Personal Médico",
      description: "Notificación a médicos de cabecera",
      delay: 0.7,
    },
    {
      icon: <Users className="w-6 h-6" />,
      label: "Familiares",
      description: "Aviso a contactos de emergencia",
      delay: 0.9,
    },
    {
      icon: <FileHeart className="w-6 h-6" />,
      label: "Historia Clínica",
      description: "Envío automático de información médica",
      delay: 1.1,
    },
  ];

  return (
    <section
      id="boton-panico"
      ref={ref}
      className="py-24 bg-gradient-to-br from-gray-900 to-gray-950 dark:from-black dark:to-gray-950 text-white relative overflow-hidden"
    >
      {/* Animated background */}
      <motion.div
        animate={{
          opacity: isPanicActive ? [0.1, 0.3, 0.1] : 0.05,
        }}
        transition={{
          duration: 1,
          repeat: isPanicActive ? Infinity : 0,
        }}
        className="absolute inset-0 bg-red-500"
      />

      {/* Radial pulse effect */}
      <AnimatePresence>
        {isPanicActive && (
          <motion.div
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 3, opacity: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-4 border-red-500 rounded-full"
          />
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Real Phone Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow effect */}
            <motion.div
              animate={{
                opacity: isPanicActive ? [0.3, 0.6, 0.3] : 0.2,
                scale: isPanicActive ? [1, 1.1, 1] : 1,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute inset-0 bg-red-500 rounded-full blur-3xl"
            />

            {/* Real Phone Screenshot */}
            <div className="relative max-w-sm mx-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsPanicActive(!isPanicActive)}
                className="relative cursor-pointer w-full"
              >
                {/* Pulse rings when active */}
                <AnimatePresence>
                  {isPanicActive &&
                    [...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 border-4 border-red-500 rounded-[2.5rem]"
                        initial={{ scale: 1, opacity: 0.6 }}
                        animate={{
                          scale: [1, 1.2, 1.5],
                          opacity: [0.6, 0.3, 0],
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                </AnimatePresence>

                {/* Image with glow effect when active */}
                <motion.div
                  animate={{
                    boxShadow: isPanicActive
                      ? [
                          "0 0 30px rgba(239, 68, 68, 0.5)",
                          "0 0 50px rgba(239, 68, 68, 0.8)",
                          "0 0 30px rgba(239, 68, 68, 0.5)",
                        ]
                      : "0 20px 60px rgba(0, 0, 0, 0.3)",
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                  className="relative rounded-[2.5rem] overflow-hidden border-8 border-gray-900"
                >
                  <Image
                    src="/images/app/BotonDePanico.png"
                    alt="Botón de Pánico - Himalaya Salud"
                    width={400}
                    height={800}
                    className="w-full h-auto"
                    priority
                  />
                </motion.div>
              </motion.button>

              {/* Status text */}
              <motion.p
                animate={{
                  color: isPanicActive ? "#ef4444" : "#9ca3af",
                }}
                className="text-center mt-4 font-bold text-lg"
              >
                {isPanicActive ? "⚠️ PÁNICO ACTIVADO" : "Toca la imagen para activar"}
              </motion.p>
            </div>
          </motion.div>

          {/* Right - Information */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Botón de{" "}
                <span className="text-gradient bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Pánico
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-4">
                Funcionalidad clave en situaciones de emergencia que puede
                salvar vidas.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Un solo toque activa simultáneamente múltiples sistemas de
                respuesta y envía tu información médica completa al personal de
                emergencia.
              </p>
            </motion.div>

            {/* Actions list */}
            <div className="space-y-4 mb-8">
              <AnimatePresence>
                {(isPanicActive ? acciones : []).map((accion, index) => (
                  <motion.div
                    key={accion.label}
                    initial={{ opacity: 0, x: 50, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 50, scale: 0.8 }}
                    transition={{ delay: accion.delay }}
                    className="flex items-center gap-4 bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: accion.delay,
                      }}
                      className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center"
                    >
                      {accion.icon}
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-white">{accion.label}</h4>
                      <p className="text-sm text-gray-400">
                        {accion.description}
                      </p>
                    </div>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="ml-auto"
                    >
                      <Clock className="w-5 h-5 text-red-400" />
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {!isPanicActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8"
                >
                  <p className="text-gray-400 mb-4">
                    Activa el botón de pánico para ver las acciones
                  </p>
                  <Button
                    onClick={() => setIsPanicActive(true)}
                    variant="outline"
                    className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                  >
                    Activar Demostración
                  </Button>
                </motion.div>
              )}
            </div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/20 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-red-400" />
                Acción Rápida que Salva Vidas
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>
                    Apoyo fundamental en momentos de crisis médica
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>
                    Rápido acceso del médico a información precisa desde tu HCD
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Mejora la respuesta médica y ayuda a evitar errores</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
