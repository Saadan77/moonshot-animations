"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import TextType from "../TextType";

export const LayoutGrid = ({ cards, showDescriptions = false }) => {
  return (
    <div className="w-full h-full p-5 xl:px-30 px:pt-30 lg:px-20 lg:pt-20 sm:px-10 sm:pt-10 grid grid-cols-1 md:grid-cols-3 mx-auto gap-6 1366:gap-12 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            className={cn(
              card.className,
              "relative overflow-hidden rounded-[18.105px] h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            <ImageComponent card={card} showDescriptions={showDescriptions} />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

const ImageComponent = ({ card, showDescriptions }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative h-full w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      {(() => {
        const src = card.video || card.src || card.thumbnail;
        const isVideo =
          !!card.video || /\.(mp4|webm|mov|ogg|m4v)(\?|$)/i.test(src || "");
        if (isVideo) {
          return (
            <video
              src={src}
              className={cn(
                "object-cover object-top h-full w-full transition-transform duration-500"
              )}
              autoPlay
              muted
              loop
              playsInline
            />
          );
        }

        return (
          <div className="relative w-full h-full">
            <div
              id="industry-layout-grid-top-overlay"
              data-industry-overlay
              className="layout-grid-top-overlay hidden absolute inset-0 top-0 z-10 transition-all duration-300"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.90) 100%)",
              }}
            ></div>
            <motion.img
              layoutId={`image-${card.id}-image`}
              src={card.thumbnail || src}
              className={cn(
                "group-hover:scale-110 object-cover object-top h-full w-full transition-transform duration-500"
              )}
              alt={card.title || "thumbnail"}
            />
          </div>
        );
      })()}
      <div
        id="card-title"
        className="absolute z-10 -bottom-5 left-0 right-0 text-white p-6 rounded-b-lg text-left"
      >
        <div className="text-[clamp(12px,1.8vw,30px)] font-sora font-normal">
          {card.title}
        </div>
        {showDescriptions && card.description ? (
          <div
            className={cn(
              "my-2 text-[clamp(9px,0.9vw,16px)] font-sora font-light leading-snug text-white/85 max-w-[95%]",
              "opacity-0 translate-y-2 max-h-0 overflow-hidden",
              "group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-50",
              "transition-all duration-300"
            )}
          >
            {isHovered ? (
              <TextType key={card.id} typingSpeed={20} text={card.description} />
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};
