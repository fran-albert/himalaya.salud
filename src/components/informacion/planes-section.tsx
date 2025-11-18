"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Building2, Hospital, Network, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PlanesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const planes = [
    {
      icon: <Hospital className="w-8 h-8" />,
      title: "Institución Individual",
      description: "Ideal para clínicas y consultorios que quieren ofrecer acceso digital a sus pacientes",
      features: [
        "Implementación sin costo",
        "Soporte técnico incluido",
        "Portal del paciente completo",
        "Acceso 24/7 para pacientes",
        "Encriptación de datos",
        "Cumplimiento legal automático",
      ],
      highlight: false,
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Red de Instituciones",
      description: "Para grupos médicos que desean interoperabilidad completa entre sus centros",
      features: [
        "Todo lo de Institución Individual",
        "Interoperabilidad entre centros",
        "Historia clínica centralizada",
        "Derivaciones automáticas",
        "Panel de administración grupal",
        "Reportes y analytics",
      ],
      highlight: true,
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Ecosistema Completo",
      description: "Solución enterprise para sistemas de salud que buscan transformación digital total",
      features: [
        "Todo lo de Red de Instituciones",
        "Integración con sistemas legacy",
        "API personalizada",
        "Soporte prioritario 24/7",
        "Capacitación del personal",
        "Customización avanzada",
      ],
      highlight: false,
    },
  ];

  const comparison = [
    { feature: "Portal del Paciente", individual: true, red: true, ecosistema: true },
    { feature: "Sin costo de implementación", individual: true, red: true, ecosistema: true },
    { feature: "Botón de Pánico", individual: true, red: true, ecosistema: true },
    { feature: "Encriptación de datos", individual: true, red: true, ecosistema: true },
    { feature: "Interoperabilidad", individual: false, red: true, ecosistema: true },
    { feature: "Panel de administración", individual: false, red: true, ecosistema: true },
    { feature: "API personalizada", individual: false, red: false, ecosistema: true },
    { feature: "Soporte prioritario", individual: false, red: false, ecosistema: true },
  ];

  return (
    <section
      id="planes"
      ref={ref}
      className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
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
            Planes y{" "}
            <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Soluciones
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Elegí la modalidad que mejor se adapte a las necesidades de tu
            institución
          </p>
        </motion.div>

        {/* Plans cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {planes.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Más Popular
                </div>
              )}

              <div
                className={`h-full bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border-2 transition-all duration-300 hover:scale-105 ${
                  plan.highlight
                    ? "border-primary shadow-primary/20"
                    : "border-gray-200 dark:border-gray-800"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${
                    plan.highlight
                      ? "bg-gradient-to-br from-primary to-secondary"
                      : "bg-gray-100 dark:bg-gray-800"
                  }`}
                >
                  <div className={plan.highlight ? "text-white" : "text-primary"}>
                    {plan.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">
                    Sin Costo
                  </div>
                  <p className="text-sm text-gray-500">
                    Implementación y soporte incluidos
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  className={`w-full ${
                    plan.highlight
                      ? "bg-gradient-to-r from-primary to-secondary hover:shadow-lg"
                      : ""
                  }`}
                  variant={plan.highlight ? "default" : "outline"}
                >
                  Solicitar Información
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Comparación de Características
          </h3>

          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-800">
            {/* Header */}
            <div className="grid grid-cols-4 gap-4 p-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
              <div className="font-bold text-gray-900 dark:text-white">
                Característica
              </div>
              <div className="font-bold text-center text-gray-900 dark:text-white">
                Individual
              </div>
              <div className="font-bold text-center text-gray-900 dark:text-white">
                Red
              </div>
              <div className="font-bold text-center text-gray-900 dark:text-white">
                Ecosistema
              </div>
            </div>

            {/* Rows */}
            {comparison.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-4 gap-4 p-4 border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <div className="text-gray-700 dark:text-gray-300">
                  {row.feature}
                </div>
                <div className="flex justify-center">
                  {row.individual ? (
                    <Check className="w-5 h-5 text-primary" />
                  ) : (
                    <span className="text-gray-300">-</span>
                  )}
                </div>
                <div className="flex justify-center">
                  {row.red ? (
                    <Check className="w-5 h-5 text-primary" />
                  ) : (
                    <span className="text-gray-300">-</span>
                  )}
                </div>
                <div className="flex justify-center">
                  {row.ecosistema ? (
                    <Check className="w-5 h-5 text-primary" />
                  ) : (
                    <span className="text-gray-300">-</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
