"use client";

import React, { useState } from "react";
import Shuffle from "@/components/Shuffle";
import Image from "next/image";

const categories = [
  {
    name: "Mobile Applications",
    image: "/images/what-we-do-bg.png",
    title: "MOBILE",
    subtitle: "APPLICATIONS",
  },
  {
    name: "UI/UX",
    image: "/images/what-we-do/ui-ux.png",
    title: "UI/UX",
    subtitle: "DESIGN",
  },
  {
    name: "Branding",
    image: "/images/what-we-do/branding.png",
    title: "BRANDING",
    subtitle: "",
  },
  {
    name: "Web Development",
    image: "/images/what-we-do/web.png",
    title: "WEBSITE",
    subtitle: "DEVELOPMENT",
  },
  {
    name: "Animations",
    video: "/images/what-we-do/animation.mp4",
    title: "ANIMATIONS",
    subtitle: "",
  },
];

const WhatWeDo = () => {
  const [active, setActive] = useState(categories[0]);

  return (
    <section
      className="bg-black relative z-50 text-white"
    >
      <div className='absolute -top-8 left-[45%] z-100' style={{ transform: 'translate3d(0, 0, 0)' }}>
        <Image src="/images/elevate-icon.png" alt="Elevate Icon" width={100} height={100} className="w-[90px] relative z-10" />
      </div>

      {/* Content wrapper */}
      <div className="flex flex-col justify-between min-h-screen">
        {/* Top meta label & categories */}
        <div className="relative z-20 mx-auto w-[92%] pt-16 sm:pt-20">
          <div className="flex items-center justify-between gap-4 text-white/70">
            <div className="text-nowrap text-[20px] flex items-center gap-2 font-poppins font-light">
              <span>03</span>
              <span className="opacity-70">—</span>
              <span>What we do</span>
            </div>

            {/* Categories */}
            <div className="relative w-[92%]">
              <div className="w-full flex flex-wrap justify-end gap-2 sm:gap-3 font-sora font-light">
                {categories.map((item, idx) => {
                  const isActive = item === active;
                  return (
                    <div key={item.name} className="flex items-center">
                      <button
                        type="button"
                        onClick={() => setActive(item)}
                        aria-selected={isActive}
                        className={`px-1 whitespace-nowrap transition-colors focus:outline-none ${isActive
                          ? "text-white"
                          : "text-white/55 hover:text-white/80"
                          }`}
                      >
                        {item.name}
                      </button>
                      {idx < categories.length - 1 && (
                        <span className="mx-1 sm:mx-2 text-white/25">|</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-4 h-px w-full bg-white/10" />
        </div>

        <div className="py-10">
          {/* Background media */}
          <div className="absolute inset-0 z-0">
            {active.video ? (
              <video
                key={active.video}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={active.video} type="video/mp4" />
              </video>
            ) : (
              <div
                key={active.image}
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-500"
                style={{ backgroundImage: `url('${active.image}')` }}
              />
            )}

            {/* Top dark overlay (subtle fade from top) */}
            <div className="absolute inset-x-0 top-0 h-[45%] pointer-events-none bg-linear-to-b from-black to-transparent" />

            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1%_100%,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)] pointer-events-none" />
          </div>

          {/* Title */}
          <div className="ml-20 max-sm:ml-1 max-sm:mb-10">
            <div className="leading-[0.92] font-semibold text-left max-sm:text-center">
              <Shuffle
                key={`${active.name}-title`}
                text={active.title}
                className="block text-[42px] max-sm:text-[30px] md:text-[92px] lg:text-[108px]"
                tag="span"
                textAlign="left"
                shuffleDirection="left"
                duration={0.5}
                stagger={0.04}
                shuffleTimes={2}
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              />
              {active.subtitle && (
                <>
                  <br />
                  <Shuffle
                    key={`${active.name}-subtitle`}
                    text={active.subtitle}
                    className="block text-[42px] max-sm:text-[30px] md:text-[92px] lg:text-[108px]"
                    tag="span"
                    textAlign="left"
                    shuffleDirection="left"
                    duration={0.5}
                    stagger={0.04}
                    shuffleTimes={2}
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;