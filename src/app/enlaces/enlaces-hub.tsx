"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { contactChannels } from "@/lib/social-links";
import { cn } from "@/lib/utils";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function EnlacesHub() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center px-5 py-14 sm:py-20">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-md"
      >
        {/* Header */}
        <motion.header
          variants={item}
          className="mb-10 flex flex-col items-center text-center"
        >
          <Image
            src="/logo-himalaya-salud.svg"
            alt="Himalaya Salud"
            width={64}
            height={64}
            priority
            className="mb-4 h-16 w-16"
          />
          <h1 className="text-2xl font-bold text-foreground">Himalaya Salud</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Software de salud para clínicas y empresas
          </p>
        </motion.header>

        {/* Enlaces */}
        <nav className="flex flex-col gap-3">
          {contactChannels.map(
            ({ key, label, description, href, icon: Icon, external, brandColor }) => (
              <motion.div key={key} variants={item}>
                <Link
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  aria-label={label}
                  className="group flex w-full items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4 transition-all hover:border-primary/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  <span
                    className={cn(
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                      !brandColor && "bg-primary/10 text-primary",
                    )}
                    style={
                      brandColor
                        ? { backgroundColor: `${brandColor}1f`, color: brandColor }
                        : undefined
                    }
                  >
                    <Icon className="h-5 w-5" />
                  </span>

                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="font-semibold text-foreground">{label}</span>
                    <span className="truncate text-sm text-muted-foreground">
                      {description}
                    </span>
                  </span>

                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 -translate-x-1 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              </motion.div>
            ),
          )}
        </nav>

        <motion.p
          variants={item}
          className="mt-10 text-center text-xs text-muted-foreground"
        >
          © {new Date().getFullYear()} Himalaya Salud S.A.S.
        </motion.p>
      </motion.div>
    </div>
  );
}
