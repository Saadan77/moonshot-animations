"use client";

import React, { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ScrollRevealProps {
  children: React.ReactNode;
  containerClassName?: string;
  textClassName?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  align?: "left" | "center" | "right";
  /** Initial opacity of the text (default: 1 for visible gray text) */
  baseOpacity?: number;
  /** Final opacity of the text */
  activeOpacity?: number;
  /** Initial text color (default: #808080) */
  baseColor?: string;
  /** Final text color (default: #ffffff) */
  activeColor?: string;
}

const sizeClasses = {
  sm: "text-lg md:text-xl",
  md: "text-xl md:text-2xl lg:text-4xl",
  lg: "text-5xl max-1600:text-[40px] max-2xl:text-[34px] max-1280:text-[30px] max-xl:text-[25px]",
  xl: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
  "2xl": "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

// Sub-component for individual words
const Word = ({
  children,
  range,
  progress,
  baseOpacity,
  activeOpacity,
  baseColor,
  activeColor,
}: {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
  baseOpacity: number;
  activeOpacity: number;
  baseColor: string;
  activeColor: string;
}) => {
  // Map the specific word's scroll range to opacity and color
  const opacity = useTransform(progress, range, [baseOpacity, activeOpacity]);
  const color = useTransform(progress, range, [baseColor, activeColor]);

  return (
    <motion.span
      className="inline-block transition-colors duration-200"
      style={{ opacity, color }}
    >
      {children}
    </motion.span>
  );
};

export function ScrollReveal({
  children,
  containerClassName,
  textClassName,
  size = "lg",
  align = "left",
  baseOpacity = 1,
  activeOpacity = 1,
  baseColor = "#808080",
  activeColor = "#ffffff",
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.25"],
  });

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split(/(\s+)/).map((part, index) => ({
      value: part,
      isSpace: part.match(/^\s+$/) && part.length > 0,
      originalIndex: index,
    })).filter(item => item.value.length > 0);
  }, [children]);

  const words = splitText.filter(item => !item.isSpace);
  const totalWords = words.length;
  
  let wordIndex = 0;

  return (
    <div
      ref={containerRef}
      className={cn("my-5", containerClassName)}
    >
      <p
        className={cn(
          "leading-relaxed space-y-4",
          sizeClasses[size],
          alignClasses[align],
          textClassName
        )}
      >
        {splitText.map((item) => {
          if (item.isSpace) {
            return <span key={`space-${item.originalIndex}`}>{item.value}</span>;
          }

          const start = wordIndex / totalWords;
          const end = start + (1 / totalWords);
          wordIndex++;

          return (
            <Word
              key={`word-${item.originalIndex}`}
              range={[start, end]}
              progress={scrollYProgress}
              baseOpacity={baseOpacity}
              activeOpacity={activeOpacity}
              baseColor={baseColor}
              activeColor={activeColor}
            >
              {item.value}
            </Word>
          );
        })}
      </p>
    </div>
  );
}

export default ScrollReveal;