"use client";

import { ReactNode } from "react";
import Atropos from "atropos/react";
import "atropos/css";
import { cn } from "@/lib/utils";

interface Card3DProps {
  children: ReactNode;
  className?: string;
  shadow?: boolean;
  highlight?: boolean;
  rotateXMax?: number;
  rotateYMax?: number;
}

export function Card3D({
  children,
  className,
  shadow = true,
  highlight = true,
  rotateXMax = 15,
  rotateYMax = 15,
}: Card3DProps) {
  return (
    <Atropos
      className={cn("atropos-card", className)}
      shadow={shadow}
      highlight={highlight}
      rotateXMax={rotateXMax}
      rotateYMax={rotateYMax}
      shadowScale={1.05}
    >
      <div className="atropos-inner rounded-2xl bg-card border border-border overflow-hidden">
        {children}
      </div>
    </Atropos>
  );
}

interface Card3DLayerProps {
  children: ReactNode;
  className?: string;
  offset?: number;
}

export function Card3DLayer({ children, className, offset = 0 }: Card3DLayerProps) {
  return (
    <div className={cn(className)} data-atropos-offset={offset}>
      {children}
    </div>
  );
}
