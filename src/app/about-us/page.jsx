"use client";

import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import { AuroraText } from "@/components/ui/aurora-text";
import Dither from "@/components/Dither";
import SmoothScroll from "../components/SmoothScroll";
import AboutUs from "../components/UI/AboutUs";
import Partners from "../components/UI/Partners";

export default function ContactUs() {
    return (
        <SmoothScroll>
            <section
                className="relative"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
                <Navbar />

                <div className="min-h-screen flex justify-center items-end relative w-full overflow-visible">
                    {/* <div className="absolute inset-0 w-full h-[125vh] opacity-30">
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
                    </div> */}

                    <div
                        className="absolute inset-0 brightness-125"
                        style={{
                            backgroundImage:
                                "url('/images/bg-hero.png')",
                        }}
                    />

                    {/* Decorative Lines */}
                    <div>
                        {[
                            '15%',
                            '30%',
                            '45%',
                            '60%',
                            '75%',
                            '90%'
                        ].map((left) => (
                            <div key={left} className={`absolute left-[${left}] top-0 translate-x-1/2 0translate-y-1/2 flex flex-col gap-2 pointer-events-none z-50`}>
                                <div
                                    className="w-[1px] h-screen"
                                    style={{
                                        background: 'linear-gradient(to bottom, rgba(187,187,187,0) 0%, rgba(187,187,187,0.12) 12%, rgba(187,187,187,0.12) 88%, rgba(187,187,187,0) 100%)'
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Industries Hero Section */}
                    <div className="flex max-lg:flex-col items-center justify-between gap-8">
                        <div className="z-10 ml-20 max-lg:ml-5">
                            {/* Small "Industries" label */}
                            <div className="mb-16 flex items-center gap-3 text-sm text-white/80">
                                <div className="flex items-center gap-[3px]">
                                    <span className="block h-2.5 w-0.5 rounded bg-white/70" />
                                    <span className="block h-2.5 w-0.5 rounded bg-white/50" />
                                    <span className="block h-2.5 w-0.5 rounded bg-white/30" />
                                </div>
                                <p className="font-bold text-lg">About Us</p>
                            </div>

                            <h1 className="font-sora uppercase mb-4 text-[66px] max-xl:text-[40px] max-sm:text-[30px] tracking-tight leading-none text-white">
                                <AuroraText colors={['#ffffff', '#d1bd73']}>
                                    Shaping <br /> Ideas That Define Our{" "}
                                </AuroraText>
                                <span className="text-end items-end block">
                                    <AuroraText colors={['#03499F', '#D722AF', '#03499F']}>
                                        Purpose & Vision
                                    </AuroraText>
                                </span>
                            </h1>

                            <p className="font-light text-white/70 md:text-md lg:text-lg">
                                From our values to our craft, this is how we shape stories that define who we are with care
                            </p>
                        </div>

                        <img src="/images/about-us-bg.png" className="w-1/2 max-md:w-3/4 h-auto z-100" alt="Astronaut" />
                    </div>
                </div>
                
                <div className="relative p-10 z-10 justify-center flex">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-auto w-3/4 object-cover rounded-4xl items-center"
                    >
                        <source src="/videos/about-us-video.webm" type="video/mp4" />
                    </video>
                </div>

                <AboutUs />
                <Partners />

                <CTA />
                <Footer />
            </section>
        </SmoothScroll>
    );
} 