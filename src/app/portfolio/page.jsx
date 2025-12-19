"use client";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import { AuroraText } from "@/components/ui/aurora-text";
import Dither from "@/components/Dither";
import PortfolioGrid from "../components/PortfolioGrid";
import DecorativeLines from "../components/DecorativeLines";
import Ribbons from "@/components/Ribbons";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Portfolio() {
    return (
        <section
            className="overflow-x-hidden"
            style={{ fontFamily: 'var(--font-sora), sans-serif' }}
        >
            <div className="max-sm:hidden fixed inset-0 z-9999 pointer-events-none">
                <Ribbons
                    baseThickness={6}
                    colors={['#D42290']}
                    speedMultiplier={0.4}
                    maxAge={500}
                    enableFade={true}
                />
            </div>

            <Navbar />

            <div className="min-h-screen flex relative w-full overflow-visible bg-black">
                {/* Dither Background */}
                <div className="absolute inset-0 w-full h-[200vh] opacity-20">
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

                {/* Background Image */}
                <div className="absolute inset-0 brightness-125 h-[200vh]">
                    <div
                        className="absolute inset-0"
                        style={{ backgroundImage: "url('/images/bg-hero.png')" }}
                    />
                    {/* Gradient fade at bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-[30%] bg-linear-to-t from-black via-black/80 to-transparent pointer-events-none" />
                </div>

                {/* Decorative Lines */}
                <DecorativeLines />

                {/* Hero Section */}
                <div className="flex flex-col 2xl:flex-row items-center gap-8 mt-36 max-xl:mt-50">
                    <div className="relative z-20 ml-20 max-lg:ml-5">
                        <div className="mb-16 flex items-center gap-3 text-sm text-white">
                            <img src="/images/about-us/icon.png" />
                            <p className="font-medium font-poppins text-lg">Portfolio</p>
                        </div>

                        <h1 className="font-normal font-sora uppercase mb-4 text-[clamp(30px,12vw,66px)] tracking-tight leading-[73px] text-white">
                            <AuroraText colors={["#ffffff", "#d1bd73"]}>
                                Designing <br /> Dreams Showcasing Our {" "}
                            </AuroraText>
                            <span className="font-thin text-end items-end max-lg:text-start max-lg:items-start block">
                                <AuroraText colors={["#D42290", "#2DAEEF"]}>
                                    Creative Journey
                                </AuroraText>
                            </span>
                        </h1>

                        <p className="font-light text-white/70 md:text-md lg:text-xl">
                            From conceptual sketches to digital experiences, here’s how we turn imagination into design
                        </p>
                    </div>

                    <img
                        src="/images/portfolio-page/portfolio-hero.png"
                        className="absolute w-full max-2xl:scale-150 -top-20 -right-100 z-10 max-2xl:relative max-2xl:top-0 max-2xl:right-0 h-auto rotate-[7.76deg]"
                        alt="Portfolio Hero"
                    />
                </div>
            </div>

            <PortfolioGrid />


            <div className='w-screen flex justify-center pt-6 pb-20 bg-[#00050a]'>
                <Link
                    href="#"
                    className="group inline-flex items-center gap-3 rounded-full bg-[#2626264D] hover:bg-[#D42290] pr-1.5 pl-6 py-1.5 text-white/90 transition-all duration-300"
                >
                    <span className="relative top-[0.5px] font-sora text-[18px] max-lg:text-[15px] whitespace-nowrap">See More</span>
                    <span className="grid place-items-center rounded-full bg-[#333333] group-hover:bg-white p-3">
                        <ChevronRight className="w-6 h-6 group-hover:text-black" />
                    </span>
                </Link>
            </div>

            <CTA />
            <Footer />
        </section >
    );
}