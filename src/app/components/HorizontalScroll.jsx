"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollCards({ cards }) {
  const sectionRef = useRef(null);
  const stripRef = useRef(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const strip = stripRef.current;

      if (!section || !strip) return;

      // Helper to calculate how far to move
      // (Total Width of Strip - Viewport Width)
      const getScrollAmount = () => -(strip.scrollWidth - window.innerWidth);

      const tween = gsap.to(strip, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "center center", // Start animation when center of section hits center of viewport
          end: () => `+=${strip.scrollWidth}`, // Duration of scroll equals width of content
          pin: true, // Pin the section in place
          scrub: 1, // Smooth scrubbing
          invalidateOnRefresh: true, // Recalculate on resize
        },
      });

      return () => {
        tween.kill();
      };
    },
    { scope: sectionRef, dependencies: [cards] }
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden flex items-center"
    >
      {/* The Moving Strip */}
      <div ref={stripRef} className="flex flex-nowrap w-max px-10 lg:px-20">
        {cards.map((card, index) => (
          <div
            key={card.id || index}
            className="w-[85vw] md:w-[45vw] lg:w-[30vw] shrink-0 p-8 box-border"
          >
            {/* Card Content Structure */}
            <div className="flex flex-col h-full justify-start space-y-6 border-l-2 border-white/20 pl-8 transition-colors duration-300 hover:border-[#D42290]">
              <div className="flex gap-6 justify-start">
                {/* Index Number for visual flair */}
                <div className="text-[#D42290] font-mono text-xl">
                  {(index + 1).toString().padStart(2, "0")}
                </div>
                <div
                  className="w-[60%] text-[clamp(24px,1.5vw,36px)] uppercase text-white leading-[1.1] font-sora"
                  dangerouslySetInnerHTML={{ __html: card.title }}
                />
              </div>
              <div
                className="w-4/5 text-[clamp(14px,1vw,16px)] font-light text-white/70 leading-[1.8] font-sora"
                dangerouslySetInnerHTML={{ __html: card.description }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
