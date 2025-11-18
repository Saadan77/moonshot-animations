"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LayoutGrid = ({ cards }) => {

  return (
    <div className="w-full h-full p-30 grid grid-cols-1 md:grid-cols-3 mx-auto gap-4 relative">
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
      <motion.img
        layoutId={`image-${card.id}-image`}
        src={card.thumbnail}
        className={cn("object-cover object-top rounded-lg h-full w-full")}
        alt="thumbnail"
        style={{opacity: "0.8"}}
      />
      <div
        className="absolute bottom-0 left-0 right-0 text-white p-4 font-semibold rounded-b-lg"
        style={{
          background: "linear-gradient(180deg, rgba(0, 0, 0, 0) -1.25%, rgba(0, 0, 0, 1) 100.17%)",
        }}
      >
        {card.title}
      </div>
    </div>
  );
};
