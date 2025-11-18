"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Database,
  Network,
  Lock,
  Zap,
  Cloud,
  RefreshCw,
} from "lucide-react";
import { FeatureCard3D } from "@/components/ui/feature-card-3d";

export function SistemaHCDSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Centralizada",
      description:
        "Toda tu información médica en un solo lugar, accesible desde cualquier institución adherida al sistema.",
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Interoperable",
      description:
        "Integración perfecta entre diferentes instituciones médicas, permitiendo compartir información de forma segura.",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "En la Nube",
      description:
        "Acceso desde cualquier dispositivo, en cualquier momento y lugar, con sincronización automática.",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Segura",
      description:
        "Encriptación de extremo a extremo, cumpliendo con los más altos estándares de seguridad médica.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instantánea",
      description:
        "Acceso inmediato a tu información médica, fundamental en situaciones de emergencia.",
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Actualizada",
      description:
        "Información sincronizada en tiempo real con todas las instituciones del sistema.",
    },
  ];

  return (
    <section
      id="sistema-hcd"
      ref={ref}
      className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 tech-grid opacity-10" />
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"
          style={{
            backgroundSize: "200% 200%",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Sistema de{" "}
            <span className="text-gradient bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Historia Clínica Digital
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Un ecosistema completo que revoluciona la forma en que los pacientes
            y las instituciones médicas acceden y gestionan la información de
            salud.
          </p>
        </motion.div>

        {/* Diagram - Responsive Grid Layout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto mb-20"
        >
          {/* Central HCD Card */}
          <div className="flex justify-center mb-12">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Pulse rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 border-2 border-primary rounded-2xl"
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{
                    scale: [1, 1.3, 1.5],
                    opacity: [0.6, 0.3, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 1,
                  }}
                />
              ))}

              <div className="relative bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 shadow-2xl border-4 border-white dark:border-gray-950">
                <div className="text-center text-white">
                  <Database className="w-16 h-16 mx-auto mb-3" />
                  <h3 className="text-2xl font-bold mb-1">HCD</h3>
                  <p className="text-sm opacity-90">Historia Clínica Digital</p>
                  <p className="text-xs mt-2 opacity-75">Centralizada & Interoperable</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Institutions Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {[
              { icon: "🏥", label: "Hospital" },
              { icon: "🏢", label: "Clínica" },
              { icon: "⚕️", label: "Consultorio" },
              { icon: "🔬", label: "Laboratorio" },
              { icon: "🚑", label: "Emergencias" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                {/* Connection indicator */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 hidden md:block">
                  <motion.div
                    className="w-0.5 h-6 bg-gradient-to-b from-primary to-transparent"
                    initial={{ scaleY: 0 }}
                    animate={inView ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  />
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-lg border-2 border-gray-200 dark:border-gray-800 hover:border-primary transition-all duration-300 cursor-pointer h-full flex flex-col items-center justify-center">
                  <span className="text-4xl md:text-5xl mb-2">{item.icon}</span>
                  <span className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300 text-center">
                    {item.label}
                  </span>

                  {/* Data flow indicator */}
                  <motion.div
                    className="mt-2 w-2 h-2 bg-primary rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="text-center mt-8 text-gray-600 dark:text-gray-400"
          >
            Sistema interconectado entre instituciones médicas
          </motion.p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard3D
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              ¿Listo para revolucionar tu sistema de salud?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Únete a las instituciones que ya confían en Himalaya Salud
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
