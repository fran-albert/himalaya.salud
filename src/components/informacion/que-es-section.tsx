"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Building2, Users, Globe, Shield } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function QueEsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    {
      icon: <Building2 className="w-8 h-8" />,
      value: 100,
      suffix: "+",
      label: "Instituciones Potenciales",
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: 1000,
      suffix: "K+",
      label: "Pacientes Impactados",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      value: 24,
      suffix: "/7",
      label: "Disponibilidad",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      value: 100,
      suffix: "%",
      label: "Seguridad Garantizada",
    },
  ];

  return (
    <section
      id="que-es"
      ref={ref}
      className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-secondary/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            ¿Qué es{" "}
            <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Himalaya Salud
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Una empresa especializada en software de salud, cuyo objetivo
            principal es el desarrollo, implementación y soporte del sistema de{" "}
            <strong className="text-primary">
              historia clínica centralizada interoperable
            </strong>{" "}
            en el sector privado.
          </p>
        </motion.div>

        {/* Video/Animation placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
            {/* Placeholder for video */}
            <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-white/10">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow"
              >
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary border-b-8 border-b-transparent ml-1" />
              </motion.div>
            </div>

            {/* Animated grid overlay */}
            <div className="absolute inset-0 tech-grid opacity-10" />

            {/* Flowing data animation */}
            <div className="absolute inset-0">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-20 bg-gradient-to-b from-transparent via-primary to-transparent"
                  initial={{
                    x: Math.random() * 100 + "%",
                    y: -100,
                  }}
                  animate={{
                    y: "100vh",
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "linear",
                  }}
                />
              ))}
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center mt-4 text-gray-600 dark:text-gray-400"
          >
            Ver cómo funciona el sistema de Historia Clínica Digital
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="relative group"
            >
              <div className="glass-effect p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover-lift text-center">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl mb-4 text-white shadow-lg"
                >
                  {stat.icon}
                </motion.div>

                {/* Counter */}
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </div>

                {/* Label */}
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 rounded-xl transition-all duration-300 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Nuestra Misión
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center leading-relaxed">
              Revolucionar el acceso a la información médica, empoderando a los
              pacientes y facilitando la labor de las instituciones de salud a
              través de tecnología innovadora, segura y centrada en el usuario.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
