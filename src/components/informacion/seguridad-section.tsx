"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Shield,
  Lock,
  Key,
  Server,
  Eye,
  FileCheck,
  ShieldCheck,
  Database,
} from "lucide-react";

export function SeguridadSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const features = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Encriptación End-to-End",
      description:
        "Todos los datos están encriptados con los más altos estándares de seguridad (AES-256), tanto en tránsito como en reposo.",
    },
    {
      icon: <Key className="w-8 h-8" />,
      title: "Autenticación Multifactor",
      description:
        "Acceso protegido con autenticación de dos factores (2FA) para garantizar que solo el paciente acceda a su información.",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Infraestructura Segura",
      description:
        "Servidores en la nube con certificaciones de seguridad internacionales, respaldos automáticos y redundancia.",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Aislamiento de Datos",
      description:
        "Las instituciones adheridas NO pueden acceder a los datos de otras instituciones. Cada institución solo ve su propia información.",
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Cumplimiento Normativo",
      description:
        "Cumplimiento con normativas de protección de datos médicos, GDPR y regulaciones locales de salud.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Auditoría Completa",
      description:
        "Sistema de logs y auditoría que registra todos los accesos y modificaciones, garantizando trazabilidad total.",
    },
  ];

  const certifications = [
    "ISO 27001",
    "HIPAA Compliant",
    "GDPR Ready",
    "SOC 2 Type II",
    "Ley de Protección de Datos",
  ];

  return (
    <section
      id="seguridad"
      ref={ref}
      className="py-24 bg-gradient-to-br from-gray-900 to-gray-950 dark:from-black dark:to-gray-950 text-white relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 tech-grid opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
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
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mb-6 shadow-2xl"
          >
            <Shield className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Seguridad y{" "}
            <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Cumplimiento
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tu información médica protegida con los más altos estándares de
            seguridad de la industria
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-primary/50 transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 text-white shadow-lg"
                >
                  {feature.icon}
                </motion.div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Certificaciones y Cumplimiento
          </h3>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur border border-white/20 rounded-lg px-6 py-3 font-semibold hover:bg-white/20 transition-colors cursor-pointer"
              >
                {cert}
              </motion.div>
            ))}
          </div>

          {/* Privacy commitment */}
          <div className="bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Database className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">
                  Compromiso de Privacidad
                </h4>
                <p className="text-gray-300 mb-3">
                  Himalaya Salud se compromete a hacer uso de los datos
                  únicamente para el funcionamiento del sistema.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      No vendemos ni compartimos datos personales con terceros
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      El paciente tiene control total sobre sus datos
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Cumplimiento estricto con regulaciones de protección de
                      datos
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
