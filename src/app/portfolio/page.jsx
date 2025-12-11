"use client";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import { AuroraText } from "@/components/ui/aurora-text";
import Dither from "@/components/Dither";
import PortfolioGrid from "../components/PortfolioGrid";
import DecorativeLines from "../components/DecorativeLines";
import Ribbons from "@/components/Ribbons";

export default function Portfolio() {
    return (
        <section
            className="overflow-x-hidden"
            style={{ fontFamily: 'var(--font-sora), sans-serif' }}
        >
            <div className="max-sm:hidden fixed inset-0 z-9999 pointer-events-none">
                <Ribbons
                    baseThickness={6}
                    colors={['#FA2889']}
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
                    <div className="z-20 ml-20 max-lg:ml-5">
                        <div className="mb-16 flex items-center gap-3 text-sm text-white/80">
                            <div className="flex items-center gap-[3px]">
                                <span className="block h-2.5 w-0.5 rounded bg-white/70" />
                                <span className="block h-2.5 w-0.5 rounded bg-white/50" />
                                <span className="block h-2.5 w-0.5 rounded bg-white/30" />
                            </div>
                            <p className="font-bold text-lg">Portfolio</p>
                        </div>

                        <h1 className="font-normal font-sora uppercase mb-4 tracking-tight leading-none text-white">
                            <div className="text-[66px] max-xl:text-[50px] max-sm:text-[30px]">
                                <AuroraText colors={["#ffffff", "#d1bd73"]}>
                                    Designing  <br /> Dreams Showcasing Our {" "}
                                </AuroraText>
                            </div>
                            <span className="text-[86px] max-xl:text-[60px] max-sm:text-[40px] font-extralight text-end items-end max-lg:text-start max-lg:items-start block">
                                <AuroraText colors={["#D42290", "#2DAEEF"]}>
                                    Creative Journey
                                </AuroraText>
                            </span>
                        </h1>

                        <p className="font-light text-white/70 text-sm md:text-md lg:text-xl max-lg:px-1">
                            From conceptual sketches to digital experiences, here’s how we turn imagination into design
                        </p>
                    </div>

                    <div>
                        <img
                            src="/images/portfolio-page/portfolio-hero.png"
                            className="absolute w-full max-2xl:scale-150 -top-20 -right-120 z-10 max-2xl:relative max-2xl:top-0 max-2xl:right-0 h-auto rotate-[7.76deg]"
                            alt="Portfolio Hero"
                        />
                    </div>
                </div>
            </div>

            <PortfolioGrid />

            <CTA />
            <Footer />
        </section >
    );
}