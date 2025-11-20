"use client";;
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

import { useEffect, useState } from "react";
import { DottedMap } from "./dotted-map";

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

  const markers = [
    { lat: 40.7128, lng: -74.006, size: 0.3 }, // New York
    { lat: 34.0522, lng: -118.2437, size: 0.3 }, // Los Angeles
    { lat: 51.5074, lng: -0.1278, size: 0.3 }, // London
    { lat: -33.8688, lng: 151.2093, size: 0.3 }, // Sydney
    { lat: 48.8566, lng: 2.3522, size: 0.3 }, // Paris
    { lat: 35.6762, lng: 139.6503, size: 0.3 }, // Tokyo
    { lat: 55.7558, lng: 37.6176, size: 0.3 }, // Moscow
    { lat: 39.9042, lng: 116.4074, size: 0.3 }, // Beijing
    { lat: 28.6139, lng: 77.209, size: 0.3 }, // New Delhi
    { lat: -23.5505, lng: -46.6333, size: 0.3 }, // São Paulo
    { lat: 1.3521, lng: 103.8198, size: 0.3 }, // Singapore
    { lat: 25.2048, lng: 55.2708, size: 0.3 }, // Dubai
    { lat: 52.52, lng: 13.405, size: 0.3 }, // Berlin
    { lat: 19.4326, lng: -99.1332, size: 0.3 }, // Mexico City
    { lat: -26.2041, lng: 28.0473, size: 0.3 }, // Johannesburg
  ];

  return (
    <div
      className={containerClass}>
      <div className="relative grid grid-cols-1 md:grid-cols-2">
        <div>
          <div className="hidden md:block relative h-80 w-full">
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
                  className="h-3/4 w-3/4 rounded-3xl object-cover object-center overflow-visible"
                  data-smoother-ignore
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
