"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Image from "next/image";
import { FileText, Eye, EyeOff } from "lucide-react";

export function CaracteristicasSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      label: "Información Disponible",
      icon: <FileText className="w-5 h-5" />,
      content: {
        title: "Acceso Completo a tu Información Médica",
        items: [
          "Antecedentes clínicos y evoluciones ambulatorias",
          "Registro completo de consultas y tratamientos",
          "Imágenes y resultados de estudios complementarios",
          "Resultados de estudios de laboratorio",
          "Mediciones clínicas (presión, temperatura, etc.)",
          "HCD de guardia e internación (opcional para instituciones)",
        ],
      },
    },
    {
      id: 1,
      label: "Visualización",
      icon: <Eye className="w-5 h-5" />,
      content: {
        title: "Organizá tu Historia Clínica como Prefieras",
        items: [
          "Visualización por fecha de atención",
          "Filtrado por especialidad médica",
          "Búsqueda por médico interviniente",
          "Filtrado por institución",
          "Vista cronológica o por categorías",
          "Acceso únicamente a lo registrado por el médico",
        ],
      },
    },
    {
      id: 2,
      label: "Control y Privacidad",
      icon: <EyeOff className="w-5 h-5" />,
      content: {
        title: "Tu Información, Tu Control",
        items: [
          "El paciente puede mostrar parcialmente su HCD",
          "El sistema notifica al médico cuando se oculta información",
          "El paciente es el único responsable de compartir sus datos",
          "Autorización explícita para solicitud de HCD a instituciones",
          "Control total sobre qué información exportar",
          "Datos encriptados de extremo a extremo",
        ],
      },
    },
  ];

  return (
    <section
      id="caracteristicas"
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
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Características del{" "}
            <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Sistema
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Todo lo que necesitás saber sobre cómo funciona tu historia clínica
            digital
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="max-w-5xl mx-auto">
          {/* Tab buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </motion.div>

          {/* Tab content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {tabs[activeTab].content.title}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {tabs[activeTab].content.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-white dark:bg-gray-950 p-4 rounded-lg border border-gray-200 dark:border-gray-800"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Real screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { image: "/images/app/Home.png", label: "Inicio" },
              { image: "/images/app/historiaClincia.png", label: "Historia Clínica" },
              { image: "/images/app/BotonDePanico.png", label: "Botón de Pánico" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-gray-900 hover:border-primary transition-colors">
                  <Image
                    src={item.image}
                    alt={item.label}
                    width={300}
                    height={600}
                    className="w-full h-auto"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white font-bold text-lg">{item.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
