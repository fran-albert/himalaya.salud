"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TimelineItem {
  title: string;
  description: string;
  icon?: ReactNode;
}

interface TimelineVerticalProps {
  items: TimelineItem[];
  className?: string;
}

export function TimelineVertical({ items, className }: TimelineVerticalProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Vertical line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

      <div className="space-y-12">
        {items.map((item, index) => (
          <TimelineItemComponent
            key={index}
            item={item}
            index={index}
            isEven={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
}

function TimelineItemComponent({
  item,
  index,
  isEven,
}: {
  item: TimelineItem;
  index: number;
  isEven: boolean;
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn(
        "relative flex items-center",
        "md:justify-start",
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      {/* Content */}
      <div
        className={cn(
          "flex-1 pl-16 md:pl-0",
          isEven ? "md:pr-12" : "md:pl-12"
        )}
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
          className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 hover-lift"
        >
          {/* Icon and Title */}
          <div className="flex items-center gap-4 mb-3">
            {/* Icon in a larger container */}
            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-md">
              {item.icon || (
                <span className="text-white font-bold text-xl">{index + 1}</span>
              )}
            </div>
            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {item.title}
            </h3>
          </div>
          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {item.description}
          </p>
        </motion.div>
      </div>

      {/* Circle marker - simple number */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
        className={cn(
          "absolute left-6 md:left-1/2 md:-translate-x-1/2",
          "w-10 h-10 rounded-full",
          "bg-gradient-to-br from-primary to-secondary",
          "flex items-center justify-center",
          "shadow-lg border-4 border-white dark:border-gray-950",
          "z-10"
        )}
      >
        <span className="text-white font-bold text-sm">{index + 1}</span>
      </motion.div>
    </motion.div>
  );
}
