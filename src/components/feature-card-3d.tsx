"use client";

import { LucideIcon } from "lucide-react";
import Atropos from "atropos/react";
import "atropos/css";

interface FeatureCard3DProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  iconColor: string;
  index: number;
}

export function FeatureCard3D({
  icon: Icon,
  title,
  description,
  gradient,
  iconColor,
  index,
}: FeatureCard3DProps) {
  return (
    <div
      className="opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Atropos
        className="atropos-feature"
        rotateXMax={15}
        rotateYMax={15}
        shadow={true}
        highlight={true}
        shadowScale={1.05}
      >
        <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
          {/* Glow effect on hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 hover:opacity-100 transition-opacity duration-500`}
          />

          {/* Shimmer effect */}
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
          </div>

          {/* Content */}
          <div className="relative p-6" data-atropos-offset="5">
            {/* Icon container */}
            <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 shadow-lg`}
              data-atropos-offset="10"
            >
              <Icon className={`w-8 h-8 ${iconColor}`} />
            </div>

            {/* Title */}
            <h3
              className="text-xl font-bold mb-3 text-foreground"
              data-atropos-offset="3"
            >
              {title}
            </h3>

            {/* Description */}
            <p
              className="text-muted-foreground leading-relaxed"
              data-atropos-offset="2"
            >
              {description}
            </p>
          </div>

          {/* Bottom accent line */}
          <div
            className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} opacity-50`}
          />
        </div>
      </Atropos>
    </div>
  );
}
