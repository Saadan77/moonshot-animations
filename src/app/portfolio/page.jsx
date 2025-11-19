"use client";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import { AuroraText } from "@/components/ui/aurora-text";
import Dither from "@/components/Dither";
import SmoothScroll from "../components/SmoothScroll";
import PortfolioGrid from "../components/UI/PortfolioGrid";
import MacModel from "../components/3D Models/MacModel";

export default function Portfolio() {
    return (
        <SmoothScroll>
            <section
                className="relative"
                style={{ fontFamily: 'var(--font-sora), sans-serif' }}
            >
                <Navbar />

                <div className="min-h-screen flex justify-center items-center relative w-full overflow-hidden bg-black">
                    {/* Dither Background */}
                    <div className="absolute inset-0 w-full h-full opacity-20">
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

                    {/* Portfolio Hero Section */}
                    <div className="max-w-[90%] max-lg:mt-50 flex max-lg:flex-col items-center justify-center gap-8">
                        <div className="z-10">
                            {/* Small "Portfolio" label */}
                            <div className="mb-6 flex items-center gap-3 text-sm text-white/80">
                                <div className="flex items-center gap-[3px]">
                                    <span className="block h-2.5 w-0.5 rounded bg-white/70" />
                                    <span className="block h-2.5 w-0.5 rounded bg-white/50" />
                                    <span className="block h-2.5 w-0.5 rounded bg-white/30" />
                                </div>
                                <p className="font-bold text-lg">Portfolio</p>
                            </div>

                            <h1 className="font-sora mb-4 text-[60px] max-xl:text-[40px] max-sm:text-[30px] tracking-tight leading-none text-white">
                                <AuroraText colors={['#ffffff', '#d1bd73']}>
                                    DESIGNING <br /> DREAMS SHOWCASING OUR{" "}
                                </AuroraText>
                                <span className="text-end items-end block w-full">
                                    <AuroraText colors={['#03499F', '#D722AF', '#03499F']}>
                                        CREATIVE JOURNEY
                                    </AuroraText>
                                </span>
                            </h1>

                            <p className="font-light text-white/70 lg:mb-8 md:text-md lg:text-xl">
                                From conceptual sketches to digital experiences, here's how we turn imagination into design
                            </p>
                        </div>

                        <div className="z-100"><MacModel /></div>
                    </div>
                </div>

                <PortfolioGrid />

                <CTA />
                <Footer />
            </section >
        </SmoothScroll>
    );
}