"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LayoutGrid = ({ cards }) => {

  return (
    <div className="w-full h-full p-5 xl:p-30 lg:p-20 sm:p-10 grid grid-cols-1 md:grid-cols-3 mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            className={cn(
              card.className,
              "relative overflow-hidden rounded-xl h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

const ImageComponent = ({ card }) => {
  return (
    <div className="relative h-full w-full">
      {(() => {
        const src = card.video || card.src || card.thumbnail;
        const isVideo = !!card.video || /\.(mp4|webm|mov|ogg|m4v)(\?|$)/i.test(src || "");
        if (isVideo) {
          return (
            <motion.video
              layoutId={`image-${card.id}-image`}
              src={card.video || src}
              poster={card.thumbnail}
              className={cn("object-cover object-top rounded-lg h-full w-full hover:scale-110 transition-transform duration-500")}
              style={{ opacity: "0.8" }}
              autoPlay
              muted
              loop
              playsInline
            />
          );
        }

        return (
          <motion.img
            layoutId={`image-${card.id}-image`}
            src={card.thumbnail || src}
            className={cn("object-cover object-top rounded-lg h-full w-full hover:scale-110 transition-transform duration-500")}
            alt={card.title || "thumbnail"}
            style={{ opacity: "0.8" }}
          />
        );
      })()}
      <div
        className="text-3xl absolute bottom-0 left-0 right-0 text-white p-6 rounded-b-lg"
        style={{
          background: "linear-gradient(180deg, rgba(0, 0, 0, 0) -1.25%, rgba(0, 0, 0, 1) 100.17%)",
        }}
      >
        {card.title}
      </div>
    </div>
  );
};
