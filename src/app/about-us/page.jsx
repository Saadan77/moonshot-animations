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
import ScrollReveal from "@/components/lightswind/scroll-reveal";
import TextType from "@/components/TextType";
import { CountingNumber } from "@/components/ui/shadcn-io/counting-number";
import { Gallery3D } from "../components/Gallery3D";
import SlidingLogoMarquee from "@/components/lightswind/sliding-logo-marquee";
import Image from "next/image";

export default function ContactUs() {

    const logos = [
        {
            id: "1",
            content: <Image src="/images/about-us-page/slider-logos/logo-1.png" width={200} height={200} alt="Logo" />,
        },
        {
            id: "2",
            content: <Image src="/images/about-us-page/slider-logos/logo-2.png" width={200} height={200} alt="Logo" />
        },
        {
            id: "3",
            content: <Image src="/images/about-us-page/slider-logos/logo-3.png" width={200} height={200} alt="Logo" />
        },
        {
            id: "4",
            content: <Image src="/images/about-us-page/slider-logos/logo-4.png" width={200} height={200} alt="Logo" />
        },
        {
            id: "5",
            content: <Image src="/images/about-us-page/slider-logos/logo-5.png" width={200} height={200} alt="Logo" />
        },
        {
            id: "6",
            content: <Image src="/images/about-us-page/slider-logos/logo-6.png" width={200} height={200} alt="Logo" />
        },
        {
            id: "7",
            content: <Image src="/images/about-us-page/slider-logos/logo-7.png" width={200} height={200} alt="Logo" />
        },
        {
            id: "8",
            content: <Image src="/images/about-us-page/slider-logos/logo-8.png" width={200} height={200} alt="Logo" />
        }
    ];

    const images = [
        // Front
        { position: [0.8, 0, 2.5], rotation: [0, 0, 0], url: "/images/about-us-page/image-1.png" },
        // Back
        { position: [-0.6, 0, 2.5], rotation: [0, 0, 0], url: "/images/about-us-page/image-2.png" },
        // Left
        { position: [-1.75, 0, 3.25], rotation: [0, Math.PI / 2.5, 0], url: "/images/about-us-page/image-3.png" },
        // Right
        { position: [1.75, 0, 3.25], rotation: [0, -Math.PI / 2.5, 0], url: "/images/about-us-page/image-4.png" },
    ];

    return (
        <SmoothScroll>
            <section
                className="relative bg-black"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
                <Navbar />


                <div
                    className="absolute inset-0 brightness-125 h-[150vh]"
                    style={{
                        backgroundImage:
                            "url('/images/bg-hero.png')",
                    }}
                >
                </div>

                <div className="min-h-screen flex justify-center items-end relative w-full overflow-visible">
                    <div className="absolute inset-0 w-full h-[125vh] opacity-10">
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
                            <div
                                key={left}
                                style={{ left }}
                                className="absolute top-0 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 pointer-events-none z-50"
                            >
                                <div
                                    className="w-px h-screen"
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

                {/* Content Overlay */}
                <div className="relative z-10 max-w-[90%] mx-auto px-6 lg:px-8">

                    {/* <div
                        className="absolute inset-0 brightness-125"
                        style={{
                            backgroundImage:
                                "url('/images/about-us-bg-who-we-are.png')",
                        }}
                    ></div> */}

                    <div className='space-y-10'>
                        <div className="flex items-center gap-3 text-lg text-[#808080]">
                            <span className='text-nowrap font-poppins'>03 — Who we are</span>
                        </div>

                        <p className="uppercase font-sora scale-105 ml-10">
                            <ScrollReveal>
                                From concept to execution, we build impactful digital solutions that resonate with real people and deliver results
                            </ScrollReveal>
                        </p>

                        <div className="flex gap-6">
                            <div className="max-w-[50%] min-w-[50%] text-[#808080]">
                                <TextType text="With expertise in areas such as web design, digital marketing, social media management, and content creation, digital agencies play a crucial role."
                                    typingSpeed={15}
                                    pauseDuration={1500}
                                    showCursor={true}
                                    cursorCharacter="|" startOnVisible={true} loop={true} />
                            </div>

                            <div>
                                <p className="text-[120px]"><CountingNumber
                                    number={400}
                                    inView={true}
                                    transition={{ stiffness: 100, damping: 30 }}
                                />+
                                </p>
                                <span className="text-xl">Successful Projects <br /> Delivered</span>
                            </div>
                            <div>
                                <p className="text-[120px]">
                                    {"<"}
                                    <CountingNumber
                                        number={95}
                                        inView={true}
                                        transition={{ stiffness: 100, damping: 30 }}
                                    />
                                    %
                                </p>
                                <span className="text-xl">Projects Success <br /> Rate</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <Gallery3D images={images} />
                </div>

                <div className="px-10 items-center py-20 bg-black">
                    {/* Heading */}
                    <div className="text-center relative z-10 space-y-8">
                        <p className="text-white/60 text-2xl tracking-tight">05 - Technologies</p>
                        <h2 className="text-white text-center text-6xl max-sm:text-2xl tracking-tight leading-tight">
                            <p className="uppercase" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>Advanced Tech Stack for <br /> Performance, Scalability & Innovation</p>
                        </h2>
                        <SlidingLogoMarquee items={logos} />
                    </div>
                </div>


                <AboutUs />
                <Partners />

                <CTA />
                <Footer />
            </section>
        </SmoothScroll>
    );
}