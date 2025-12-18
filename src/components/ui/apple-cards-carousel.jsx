"use client";;
import React, {
  useEffect,
  useState,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const Carousel = ({
  items,
  initialScroll = 0
}) => {
  const carouselRef = React.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
      const max = Math.max(scrollWidth - clientWidth, 1);
      const progress = Math.max(0, Math.min(1, scrollLeft / max));
      setScrollProgress(progress);
      try {
        const track = carouselRef.current.children[1];
        const firstCard = track && track.children && track.children[0];
        if (firstCard) {
          const gap = 16;
          const cardWidth = firstCard.getBoundingClientRect().width + gap;
          const idx = Math.round(scrollLeft / cardWidth);
          setCurrentIndex(Math.max(0, Math.min(items.length - 1, idx)));
        }
      } catch (e) {
        // ignore calculation errors
      }
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
      <div className="mr-20 flex justify-end max-xl:justify-start max-xl:max-w-[85%] max-xl:mx-auto gap-2">
        <Link
          href="#"
          className="group border border-[#979797] inline-flex items-center gap-3 rounded-full bg-[#041426] hover:bg-[#D42290] pr-1.5 pl-6 py-1.5 text-[15px] text-white/90 ring-1 ring-white/15 transition hover:ring-white/30"
        >
          <span className="relative top-[0.5px] font-sora text-[20px] max-lg:text-[14px] max-sm:text-[12px] hover-group:bg-white hover-group:text-black">Recent Projects</span>
          <span className="grid place-items-center rounded-full bg-[#D42290] group-hover:bg-white p-3 max-xl:p-2">
            <ArrowRight className="w-6 h-6 group-hover:text-black" />
          </span>
        </Link>
        <div className="mx-6 min-h-max bg-white w-px"></div>
        <button
          className="relative z-40 flex h-16 w-16 max-lg:h-12 max-lg:w-12 items-center justify-center rounded-full bg-[#D42290] disabled:opacity-50"
          onClick={scrollLeft}
          disabled={!canScrollLeft}>
          <IconArrowNarrowLeft className="h-8 w-8 text-white" />
        </button>
        <button
          className="relative z-40 flex h-16 w-16 max-lg:h-12 max-lg:w-12 items-center justify-center rounded-full bg-[#D42290] disabled:opacity-50"
          onClick={scrollRight}
          disabled={!canScrollRight}>
          <IconArrowNarrowRight className="h-8 w-8 text-white" />
        </button>
      </div>
      <div
        className="flex w-full overflow-x-scroll overscroll-x-hidden scroll-smooth py-10 [scrollbar-width:none] md:py-20"
        ref={carouselRef}
        onScroll={checkScrollability}>
        <div
          className={cn("absolute right-0 z-1000 h-auto w-[5%] overflow-hidden bg-linear-to-l")}></div>

        <div
          className={cn(
            "max-w-[90%] mx-auto flex flex-row justify-start gap-4 pl-4",
          )}>
          {items.map((item, index) => (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeOut",
                  once: true,
                },
              }}
              key={"card" + index}
              className="last:pr-[5%]">
              {item}
            </motion.div>
          ))}
        </div>
      </div>
      {/* Pagination: progress bar */}
      <div className="max-w-[90%] mx-auto w-full h-1 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-white rounded-full" style={{ width: `${scrollProgress * 100}%`, transition: 'width 120ms linear' }} />
      </div>
    </div>
  );
};

export const Card = ({
  card,
  layout = false,
  ...rest
}) => {

  return (
    <>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        className="relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden md:h-160 md:w-124">
        <img
          className="h-full w-full transition duration-300 blur-0"
          src={card.src}
          width={card.width}
          height={card.height}
          loading="lazy"
          alt={card.title ? card.title : "Card image"}
        />
      </motion.button>
    </>
  );
};
