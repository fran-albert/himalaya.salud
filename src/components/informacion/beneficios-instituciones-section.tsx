"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  DollarSign,
  TrendingUp,
  Heart,
  Zap,
  Shield,
  Clock,
  Award,
} from "lucide-react";

export function BeneficiosInstitucionesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const beneficios = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Sin Costos",
      description:
        "Himalaya Salud asume todos los costos de software, instalación y soporte del sistema. Cero inversión inicial.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Eficiencia Operativa",
      description:
        "Reducción significativa de costos en equipos, impresión y personal dedicado a entregar estudios e historias clínicas.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Fidelización de Pacientes",
      description:
        "Empodera a los pacientes con acceso a su información médica, generando mayor confianza y lealtad hacia la institución.",
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Atención Más Rápida",
      description:
        "Acceso inmediato a historiales médicos en derivaciones entre instituciones, optimizando tiempos de atención.",
      color: "from-yellow-500 to-orange-600",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cumplimiento Legal",
      description:
        "Cumple automáticamente con la obligación legal de entregar historias clínicas en formato digital.",
      color: "from-purple-500 to-violet-600",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Disponibilidad 24/7",
      description:
        "Los pacientes acceden a sus estudios y resultados en cualquier momento, reduciendo consultas administrativas.",
      color: "from-indigo-500 to-blue-600",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Innovación y Prestigio",
      description:
        "Posiciona a la institución como líder en transformación digital y atención centrada en el paciente.",
      color: "from-amber-500 to-yellow-600",
    },
  ];

  return (
    <section
      id="beneficios"
      ref={ref}
      className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
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
            Beneficios para{" "}
            <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Instituciones
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Un sistema que no solo beneficia a los pacientes, sino que también
            transforma la operativa de las instituciones médicas
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {beneficios.map((beneficio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${beneficio.color} rounded-xl flex items-center justify-center mb-4 text-white shadow-lg group-hover:shadow-xl`}
                >
                  {beneficio.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                  {beneficio.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {beneficio.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

{/* OCULTO TEMPORALMENTE - Sección Situación Actual vs Con Himalaya Salud
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Situación Actual vs Con Himalaya Salud
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-white dark:from-red-950/20 dark:to-gray-900 rounded-xl p-6 border-2 border-red-200 dark:border-red-900/50">
              <h4 className="text-xl font-bold text-red-700 dark:text-red-400 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                  <span className="text-red-600 dark:text-red-400 font-bold">
                    ✗
                  </span>
                </div>
                Sin Himalaya Salud
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <span className="text-red-500 mt-1">•</span>
                  <span>
                    Costos en equipos, impresión y personal para entregar HC
                  </span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <span className="text-red-500 mt-1">•</span>
                  <span>
                    48 horas para entregar historia clínica en formato digital
                  </span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <span className="text-red-500 mt-1">•</span>
                  <span>
                    Portal del paciente: alto costo de implementación y soporte
                  </span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <span className="text-red-500 mt-1">•</span>
                  <span>
                    Información fragmentada entre diferentes instituciones
                  </span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <span className="text-red-500 mt-1">•</span>
                  <span>
                    Sin acceso a datos médicos en situaciones de emergencia
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white dark:from-green-950/20 dark:to-gray-900 rounded-xl p-6 border-2 border-primary">
              <h4 className="text-xl font-bold text-primary dark:text-primary mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                Con Himalaya Salud
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Cero costos</strong> de software, instalación y
                    soporte
                  </span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Acceso <strong>instantáneo</strong> desde cualquier
                    dispositivo
                  </span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Sistema completo sin inversión ni mantenimiento por parte
                    de la institución
                  </span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Interoperabilidad</strong> con todas las
                    instituciones adheridas
                  </span>
                </li>
                <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Botón de pánico con envío automático de información médica
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        */}

        {/* Control and Security note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-accent/10 to-secondary/10 border border-accent/20 rounded-xl p-6">
            <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <Shield className="w-6 h-6 text-accent" />
              Control Total y Seguridad Garantizada
            </h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>
                  Las instituciones tienen acceso a controlar qué datos se
                  descargan
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>
                  Los datos del paciente están encriptados con los más altos
                  estándares de seguridad
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>
                  Las instituciones adheridas NO pueden acceder a los datos de
                  otras instituciones
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>
                  Himalaya Salud se compromete a usar los datos únicamente para
                  el funcionamiento del sistema
                </span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
