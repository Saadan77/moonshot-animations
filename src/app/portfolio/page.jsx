"use client";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CTA from "../components/UI/CTA";
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

                <div className="h-screen flex justify-center items-center relative w-full overflow-visible bg-black">
                    {/* Dither Background */}
                    <div className="absolute inset-0 w-full h-full opacity-10">
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

                    {/* Background Gradient Overlay */}
                    <div
                        className="absolute inset-0 opacity-50"
                        style={{
                            background: 'linear-gradient(180deg, #000000 0%, #1a2a4a 40%, #2d1b4e 70%, #4a1d5f 85%, #6b2b7a 100%)'
                        }}
                    />

                    {/* Decorative Lines */}
                    <div>
                        <div className="absolute left-[5%] top-0 translate-x-1/2 0translate-y-1/2 flex flex-col gap-2 pointer-events-none z-50">
                            <img src="/images/hero/Line-1.png" alt="" className="w-full invert-5 opacity-50" />
                        </div>

                        <div className="absolute left-[25%] top-0 translate-x-1/2 0translate-y-1/2 flex flex-col gap-2 pointer-events-none z-50">
                            <img src="/images/hero/Line-1.png" alt="" className="w-full invert-5 opacity-50" />
                        </div>

                        <div className="absolute left-1/2 top-0 translate-x-1/2 0translate-y-1/2 flex flex-col gap-2 pointer-events-none z-50">
                            <img src="/images/hero/Line-1.png" alt="" className="w-full invert-5 opacity-50" />
                        </div>

                        <div className="absolute left-[75%] top-0 translate-x-1/2 0translate-y-1/2 flex flex-col gap-2 pointer-events-none z-50">
                            <img src="/images/hero/Line-1.png" alt="" className="w-full invert-5 opacity-50" />
                        </div>

                        <div className="absolute left-[95%] top-0 translate-x-1/2 0translate-y-1/2 flex flex-col gap-2 pointer-events-none z-50">
                            <img src="/images/hero/Line-1.png" alt="" className="w-full invert-5 opacity-50" />
                        </div>
                    </div>

                    {/* Portfolio Hero Section */}
                    <div className="max-w-[90%] flex items-center justify-center gap-8">
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

                            <h1 className="font-sora mb-4 text-[60px] max-md:text-[40px] max-sm:text-[30px] tracking-tight leading-none text-white">
                                <AuroraText colors={['#ffffff', '#d1bd73']}>
                                    DESIGNING <br /> DREAMS SHOWCASING OUR{" "}
                                </AuroraText>
                                <span className="text-end items-end block w-full -ml-15">
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