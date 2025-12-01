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
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div data-smoother-ignore>
      <section className="bg-black relative z-50 text-white">
        <div className="absolute -top-8 left-[48%] z-100" data-smoother-ignore>
          <Image src="/images/elevate-icon.png" alt="Elevate Icon" width={100} height={100} className="w-[90px] relative z-10" />
        </div>

        {/* Sticky scrolling slides for each category */}
        <div className="relative">
          {/* Top meta label & categories (remains above slides) */}
          {/* <div className="relative z-20 mx-auto w-[92%] pt-24 sm:pt-26">
            <div className="flex items-center justify-between gap-4 text-white/70">
              <div className="text-nowrap text-[20px] flex items-center gap-2 font-poppins font-light">
                <span>03</span>
                <span className="opacity-70">—</span>
                <span>What we do</span>
              </div>
              <div className="relative w-[92%]">
                <div className="w-full flex flex-wrap justify-end gap-1 font-sora font-light">
                  {categories.map((item, idx) => (
                    <div key={item.name} className="flex items-center">
                      <span
                        className={`px-1 whitespace-nowrap ${activeIdx === idx ? "text-white" : "text-white/55"}`}
                      >
                        {item.name}
                      </span>
                      {idx < categories.length - 1 && (
                        <span className="mx-2 text-white/25">|</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 h-px w-full bg-white/10" />
          </div> */}

          {/* Slides: each category is a sticky full-screen section */}
          {categories.map((cat, idx) => (
            <div
              key={cat.name}
              className={`pb-20 sticky top-0 h-screen flex flex-col justify-between z-10`}
              style={{ background: "rgba(0,0,0,0.95)" }}
              onMouseEnter={() => setActiveIdx(idx)}
              onTouchStart={() => setActiveIdx(idx)}
            >
              {/* Category navigation bar inside each section */}
              <div className="relative w-full z-30">
                <div className="relative z-20 mx-auto w-[92%] pt-16">
                  <div className="flex items-center justify-between gap-4 text-white/70">
                    <div className="text-[20px] text-[#808080]">
                        <span className='text-nowrap font-poppins font-light'>03 — What We Do</span>
                    </div>
                    <div className="relative w-[92%]">
                      <div className="w-full flex flex-wrap justify-end gap-1 font-sora font-light">
                        {categories.map((item, cidx) => (
                          <div key={item.name} className="flex items-center">
                            <span
                              className={`px-1 whitespace-nowrap ${activeIdx === cidx ? "text-white" : "text-white/55"}`}
                            >
                              {item.name}
                            </span>
                            {cidx < categories.length - 1 && (
                              <span className="mx-2 text-white/25">|</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 h-px w-full bg-white/10" />
                </div>
              </div>
              {/* Background media */}
              <div className="absolute inset-0 z-0">
                {cat.video ? (
                  <video
                    key={cat.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={cat.video} type="video/mp4" />
                  </video>
                ) : (
                  <div
                    key={cat.image}
                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-500"
                    style={{ backgroundImage: `url('${cat.image}')` }}
                  />
                )}
                {/* Top dark overlay (subtle fade from top) */}
                <div className="absolute inset-x-0 top-0 h-[45%] pointer-events-none bg-linear-to-b from-black to-transparent" />
                {/* Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1%_100%,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_100%)] pointer-events-none" />
              </div>
              {/* Title & Subtitle */}
              <div className="ml-20 max-sm:ml-1 max-sm:mb-10 relative z-10">
                <div className="tracking-[-0.5em] text-left max-sm:text-center">
                  <Shuffle
                    key={`${cat.name}-title`}
                    text={cat.title}
                    className="block text-[42px] max-sm:text-[30px] md:text-[92px] lg:text-[100px]"
                    tag="span"
                    textAlign="left"
                    shuffleDirection="left"
                    duration={0.5}
                    stagger={0.04}
                    shuffleTimes={2}
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  />
                  {cat.subtitle && (
                    <>
                      <br />
                      <Shuffle
                        key={`${cat.name}-subtitle`}
                        text={cat.subtitle}
                        className="block text-[42px] max-sm:text-[30px] md:text-[92px] lg:text-[100px]"
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
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;