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
        <>
            {/* <CyberHologramLoader /> */}
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

                <div className="flex items-center relative w-full overflow-visible bg-black">
                    {/* Dither Background */}
                    {/* <div className="absolute inset-0 w-full h-[200vh] opacity-20">
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

                    {/* Background Image */}
                    <div
                        className="absolute inset-0 col-span-1 brightness-125 h-[175vh]"
                        style={{ backgroundImage: "url('/images/bg-hero.png')" }}
                    />

                    {/* Decorative Lines */}
                    <DecorativeLines />

                    {/* Hero Section */}
                    <div className="pt-[18%] pb-[20%]">
                        <div className="relative z-20 ml-20 max-lg:ml-5">
                            <div className="mb-16 flex items-center gap-3 text-sm text-white">
                                <img src="/images/about-us/icon.png" />
                                <p className="font-medium font-poppins text-lg">Portfolio</p>
                            </div>

                            <h1 className="font-normal font-sora uppercase mb-4 text-[clamp(30px,3.5vw,66px)] tracking-tight leading-20.25 max-2xl:leading-15 text-white">
                                <AuroraText colors={["#ffffff", "#d1bd73"]}>
                                    Designing <br /> Dreams Showcasing Our {" "}
                                </AuroraText>
                                <span className="text-[clamp(50px,4vw,86px)] font-thin text-end items-end max-lg:text-start max-lg:items-start block">
                                    <AuroraText colors={["#D42290", "#2DAEEF"]}>
                                        Creative Journey
                                    </AuroraText>
                                </span>
                            </h1>

                            <p className="font-light text-white/70 text-[clamp(10px,1.1vw,20px)]">
                                From conceptual sketches to digital experiences, here’s how we turn imagination into design
                            </p>
                        </div>

                        <div className="absolute top-50 -right-500 max-1600:-right-510 max-1440:-right-550 max-1440:top-40 max-1280:top-50 max-1280:-right-580 max-xl:-right-600 z-10">
                            <img
                                src="/images/portfolio-page/portfolio-hero-image.png"
                                className="w-[45%] max-1440:w-3/8 max-1280:w-[30%] h-auto rotate-[7.76deg]"
                                alt="Portfolio Hero"
                            />
                        </div>
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
        </>
    );
}