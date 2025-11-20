"use client";;
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

import { useEffect, useState } from "react";

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  nameClass = "text-2xl font-bold text-white/70",
  designationClass = "text-lg text-white/70",
  quoteClass = "mt-8 text-lg text-white/70",
  containerClass = "mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12 z-10",
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div
      className={containerClass}>
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        <div>
          <div className="relative h-80 w-full">
            {/* Gradient ellipse background behind the image */}
            {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="w-[300px] h-[366px] rounded-full opacity-90"
                style={{
                  background: "linear-gradient(180deg, #43158C 0%, #CB3C78 100%)",
                }}
              />
            </div> */}
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
                <img
                  src={testimonials[active].src}
                  alt={testimonials[active].name}
                  width={500}
                  height={500}
                  draggable={false}
                  className="max-md:hidden h-3/4 w-3/4 rounded-3xl object-cover object-center overflow-visible"                               
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4 -mt-20">
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
            <p className="mb-10 text-nowrap text-white/70">09 — Testimonials</p>
            <h3 className={nameClass}>
              {testimonials[active].name}
            </h3>
            <h3 className={designationClass}>
              {testimonials[active].designation}
            </h3>
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
          </motion.div>
          <div className="flex gap-4 pt-20 md:pt-10">
            <button
              onClick={handlePrev}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800">
              <IconArrowLeft
                className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800">
              <IconArrowRight
                className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
