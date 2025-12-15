"use client";;
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

import { useEffect, useState } from "react";
import { SpinningText } from "./spinning-text";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  containerClass = "mx-auto max-w-7xl px-6 py-24 md:py-28 lg:py-32",
  nameClass = "text-2xl font-semibold text-white uppercase",
  designationClass = "text-lg text-white/70",
  quoteClass = "mb-8 text-4xl max-2xl:text-3xl max-xl:text-2xl max-lg:text-xl leading-tight text-white/70"
}) => {
  const [active, setActive] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return isClient ? Math.floor(Math.random() * 21) - 10 : 0;
  };

  const total = testimonials ? testimonials.length : 0;
  const fractionText = `${active + 1}/${total}`;
  // Progress should reflect the fraction (1 of N -> 1/N filled)
  const progress = total > 0 ? (active + 1) / total : 0;

  return (
    <div>
      <div
        className={containerClass}>
        <div className="relative grid grid-cols-1 md:grid-cols-2 max-2xl:gap-24 gap-6 items-center">
          <div className="hidden md:block relative h-full w-full col-span-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[active].src}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: randomRotateY(),
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  z: 0,
                  rotate: 0,
                  zIndex: 40,
                  y: [0, -80, 0],
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: randomRotateY(),
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 origin-bottom"
              >
                {/* Spinning ring text positioned top-left of the portrait */}
                <div className="absolute left-0 top-0 z-10 lg:block hidden w-36 h-36">
                  <SpinningText
                    duration={12}
                    radius={6}
                    className="w-full h-full text-white/80"
                    style={{ fontSize: 22, letterSpacing: '8px', textTransform: 'uppercase' }}
                    centerSrc="/images/quote.png"
                    centerAlt="quote"
                    centerSize={44}
                  >
                    TESTIMONIALS - TRUSTED BY CLIENTS -
                  </SpinningText>
                </div>
                <img
                  src={testimonials[active].src}
                  alt={testimonials[active].name}
                  draggable={false}
                  className="w-full h-full object-contain object-center overflow-visible scale-125"
                  data-smoother-ignore
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex flex-col justify-between py-4">
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}>
              <div className="text-[20px] text-[#808080] mb-6">
                <span className='text-nowrap font-sora font-light'>09 — Testimonials</span>
              </div>
              <motion.h2 className={quoteClass}>
                {testimonials[active].quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block">
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.h2>
              <h3 className={nameClass}>
                {testimonials[active].name}
              </h3>
              <h3 className={designationClass}>
                {testimonials[active].designation}
              </h3>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-[90%] mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="font-poppins font-light text-white/70 text-lg w-12">{fractionText}</div>
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-[#151515] hover:bg-white">
              <ChevronLeft
                className="h-7 w-7 text-white transition-transform duration-300 group-hover/button:text-black" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-[#151515] hover:bg-white">
              <ChevronRight
                className="h-7 w-7 text-white transition-transform duration-300 group-hover/button:text-black" />
            </button>
          </div>
        </div>
        <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-white rounded-full" style={{ width: `${progress * 100}%`, transition: 'width 160ms linear' }} />
        </div>
      </div>
    </div>
  );
};

