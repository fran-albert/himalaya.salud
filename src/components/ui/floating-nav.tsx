"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
}

export function FloatingNav({ navItems, className }: FloatingNavProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling 200px
      setIsVisible(window.scrollY > 200);

      // Update active section based on scroll position
      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(navItems[i].href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

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
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "fixed top-20 left-1/2 -translate-x-1/2 z-40",
            "hidden md:block", // Hide on mobile, show on desktop
            "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg",
            "border border-gray-200 dark:border-gray-800",
            "rounded-full shadow-lg px-6 py-3",
            className
          )}
        >
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "text-sm font-medium transition-all duration-200",
                    "hover:text-primary",
                    activeSection === item.href
                      ? "text-primary"
                      : "text-gray-600 dark:text-gray-400"
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
