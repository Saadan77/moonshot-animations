"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import SmoothScroll from "../components/SmoothScroll";
import { AuroraText } from "@/components/ui/aurora-text";
import Dither from "@/components/Dither";
import Partners from "../components/UI/Partners";
import ScrollReveal from "@/components/lightswind/scroll-reveal";
import TextType from "@/components/TextType";
import { CountingNumber } from "@/components/ui/shadcn-io/counting-number";
import { Gallery3D } from "../components/Gallery3D";
import SlidingLogoMarquee from "@/components/lightswind/sliding-logo-marquee";
import AboutUsCards from "../components/AboutUsCards";

gsap.registerPlugin(ScrollTrigger);

export default function WebDevelopment() {

    return (
        <SmoothScroll>
            <section
                className="relative bg-black"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
                <Navbar />

                <div className="py-30 min-h-screen flex justify-center items-end relative w-full overflow-visible">
                    <div className="absolute inset-0 w-full h-[125vh] opacity-20">
                        <Dither
                            waveColor={[0.01, 0.29, 0.62]}
                            backgroundColor={[0.84, 0.13, 0.69]}
                            disableAnimation={false}
                            enableMouseInteraction={true}
                            mouseRadius={0.3}
                            colorNum={4}
                            waveAmplitude={0.3}
                            waveFrequency={3}
                            waveSpeed={0.05}
                        />
                    </div>

                    <div
                        className="absolute inset-0 brightness-125 h-[150vh]"
                        style={{ backgroundImage: "url('/images/bg-hero.png')" }}
                    />

                    {/* Decorative Lines */}
                    <div className="max-md:hidden block">
                        {[
                            '-5%',
                            '15%',
                            '35%',
                            '60%',
                            '85%',
                            '105%'
                        ].map((left) => (
                            <div
                                key={left}
                                style={{ left }}
                                className="absolute top-0 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 pointer-events-none z-50"
                            >
                                <div
                                    className="w-px h-[150vh]"
                                    style={{
                                        background:
                                            'linear-gradient(to bottom, rgba(187,187,187,0) 0%, rgba(187,187,187,0.12) 12%, rgba(187,187,187,0.12) 88%, rgba(187,187,187,0) 100%)'
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Industries Hero Section */}
                    <div className="flex max-lg:flex-col items-center justify-between gap-8">
                        <div className="z-10 ml-20 max-lg:ml-5">
                            <div className="mb-16 flex items-center gap-3 text-sm text-white/80">
                                <div className="flex items-center gap-[3px]">
                                    <span className="block h-2.5 w-0.5 rounded bg-white/70" />
                                    <span className="block h-2.5 w-0.5 rounded bg-white/50" />
                                    <span className="block h-2.5 w-0.5 rounded bg-white/30" />
                                </div>
                                <p className="font-bold text-lg">Website Development</p>
                            </div>

                            <h1 className="font-sora uppercase mb-4 text-[66px] max-xl:text-[40px] max-sm:text-[30px] tracking-tight leading-none text-white">
                                <AuroraText colors={["#ffffff", "#d1bd73"]}>
                                    Building <br /> Sites That Shape Your{" "}
                                </AuroraText>
                                <span className="text-end items-end max-lg:text-start max-lg:items-start block">
                                    <AuroraText colors={["#03499F", "#D722AF", "#03499F"]}>
                                        Brand & Profile
                                    </AuroraText>
                                </span>
                            </h1>

                            <p className="font-light text-white/70 md:text-md lg:text-lg">
                                From first ideas to final code, we design and build websites that show who you are online
                            </p>
                        </div>

                        <img
                            src="/images/services/web-development/hero.png"
                            className="w-1/2 max-md:w-3/4 h-auto z-10"
                            alt="Astronaut"
                        />
                    </div>
                </div>

                <div className="relative p-10 max-lg:p-1 z-10 justify-center flex">
                    <img
                        src="/images/services/web-development/sec-section.png"
                        className="h-auto w-3/4 object-cover rounded-4xl items-center"
                    />
                </div>

                <CTA />
                <Footer />
            </section>
        </SmoothScroll>
    );
}
