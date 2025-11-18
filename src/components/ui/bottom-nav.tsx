"use client";

import { motion } from "framer-motion";
import { Home, AlertCircle, DollarSign, MessageCircle, Target } from "lucide-react";
import { cn } from "@/lib/utils";

interface BottomNavProps {
  className?: string;
}

export function BottomNav({ className }: BottomNavProps) {
  const navItems = [
    { label: "Inicio", href: "#hero", icon: Home },
    { label: "Desafío", href: "#desafio", icon: Target },
    { label: "Pánico", href: "#boton-panico", icon: AlertCircle },
    { label: "Planes", href: "#planes", icon: DollarSign },
    { label: "Contacto", href: "#contacto", icon: MessageCircle },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 md:hidden",
        "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg",
        "border-t border-gray-200 dark:border-gray-800",
        "shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]",
        // Safe area for iOS notch
        "pb-safe",
        className
      )}
      style={{
        paddingBottom: "max(env(safe-area-inset-bottom), 0.5rem)",
      }}
    >
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item, index) => (
          <motion.button
            key={item.href}
            onClick={() => scrollToSection(item.href)}
            className="flex flex-col items-center justify-center gap-1 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors active:scale-95"
            whileTap={{ scale: 0.9 }}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-[10px] font-medium leading-none">
              {item.label}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
}
