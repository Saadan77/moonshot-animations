"use client";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import { AuroraText } from "@/components/ui/aurora-text";
import Dither from "@/components/Dither";
import SmoothScroll from "../components/SmoothScroll";
import { LayoutGrid } from "@/components/ui/layout-grid";

const cards = [
    {
        id: 1,
        title: "Education",
        thumbnail: "/images/industries/image-1.png",
        className: "md:col-span-1",
        content: null,
    },
    {
        id: 2,
        title: "Beauty",
        thumbnail: "/images/industries/image-2.png",
        className: "md:col-span-1",
        content: null,
    },
    {
        id: 3,
        title: "Technology",
        thumbnail: "/images/industries/image-4.png",
        className: "md:col-span-1 md:row-span-2",
        content: null,
    },
    {
        id: 4,
        title: "Finance",
        thumbnail: "/images/industries/image-3.png",
        className: "md:col-span-2",
        content: null,
    },
    {
        id: 5,
        title: "Real Estate",
        thumbnail: "/images/industries/image-5.png",
        className: "md:col-span-3",
        content: null,
    },
    {
        id: 6,
        title: "Legal",
        thumbnail: "/images/industries/image-6.png",
        className: "md:col-span-1 md:row-span-2",
        content: null,
    },
    {
        id: 7,
        title: "Utilities",
        thumbnail: "/images/industries/image-7.png",
        className: "md:col-span-1",
        content: null,
    },
    {
        id: 8,
        title: "Government",
        thumbnail: "/images/industries/image-8.png",
        className: "md:col-span-1",
        content: null,
    },
    {
        id: 9,
        title: "Medical",
        thumbnail: "/images/industries/image-9.png",
        className: "md:col-span-2",
        content: null,
    },
    {
        id: 10,
        title: "Retail and E-Commerce",
        thumbnail: "/images/industries/image-10.png",
        className: "md:col-span-2",
        content: null,
    },
    {
        id: 11,
        title: "Artificial Intelligence",
        thumbnail: "/images/industries/image-11.png",
        className: "md:col-span-1",
        content: null,
    },
];

export default function Portfolio() {
    return (
        <SmoothScroll>
            <section
                className="relative"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
                <Navbar />

                <div className="min-h-screen flex justify-center items-end relative w-full overflow-hidden bg-black">
                    {/* Dither Background */}
                    <div className="absolute inset-0 w-full h-full opacity-30">
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
                        className="absolute inset-0 rotate-30 scale-185 blur-[708.18px]"
                        style={{
                            backgroundImage:
                                "url('/images/bg-hero.png')",
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

                    {/* Industries Hero Section */}
                    <div className="max-w-[90%] max-md:mt-50 flex max-md:flex-col items-center justify-center gap-8">
                        <div className="z-10">
                            {/* Small "Industries" label */}
                            <div className="mb-6 flex items-center gap-3 text-sm text-white/80">
                                <div className="flex items-center gap-[3px]">
                                    <span className="block h-2.5 w-0.5 rounded bg-white/70" />
                                    <span className="block h-2.5 w-0.5 rounded bg-white/50" />
                                    <span className="block h-2.5 w-0.5 rounded bg-white/30" />
                                </div>
                                <p className="font-bold text-lg">Industries</p>
                            </div>

                            <h1 className="font-sora mb-4 text-[60px] max-xl:text-[40px] max-sm:text-[30px] uppercase tracking-tight leading-none text-white">
                                <AuroraText colors={["#ffffff", "#d1bd73"]}>
                                    Innovating Industries Demonstrating Our Multi{" "}
                                </AuroraText>
                                <span className="text-end items-end block w-full">
                                    <AuroraText colors={["#03499F", "#D722AF", "#03499F"]}>
                                        Sector Strength
                                    </AuroraText>
                                </span>
                            </h1>

                            <p className="font-light text-white/70 lg:mb-8 md:text-md lg:text-xl">
                                From conceptual sketches to digital experiences, here's how we turn imagination into design
                            </p>
                        </div>
                        <img src="/images/industries/city-bg.png" className="w-2/5 max-md:w-3/4 h-auto z-100" alt="City" />
                    </div>
                </div>

                <LayoutGrid cards={cards} />

                <CTA />
                <Footer />
            </section>
        </SmoothScroll>
    );
}