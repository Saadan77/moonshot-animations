"use client";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import { AuroraText } from "@/components/ui/aurora-text";
import Dither from "@/components/Dither";
import { LayoutGrid } from "@/components/ui/layout-grid";
import DecorativeLines from "../components/DecorativeLines";
import Ribbons from "@/components/Ribbons";

export default function Portfolio() {

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

    return (
        <section
            className="relative"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
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

            <div className="min-h-[110vh] flex justify-center items-center relative w-full overflow-hidden">
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
                <DecorativeLines />

                {/* Hero Section */}
                <div className="flex flex-col 2xl:flex-row items-center gap-8 max-2xl:mt-50">
                    <div className="z-20 ml-20 max-sm:ml-10">
                        <div className="mb-16 flex items-center gap-3 text-sm text-white/80">
                            <div className="flex items-center gap-[3px]">
                                <span className="block h-2.5 w-0.5 rounded bg-white/70" />
                                <span className="block h-2.5 w-0.5 rounded bg-white/50" />
                                <span className="block h-2.5 w-0.5 rounded bg-white/30" />
                            </div>
                            <p className="font-bold text-lg">Industries</p>
                        </div>

                        <h1 className="font-normal font-sora uppercase mb-4 tracking-tight leading-none text-white">
                            <div className="text-[68px] max-xl:text-[50px] max-sm:text-[30px]">
                                <AuroraText colors={["#ffffff", "#d1bd73"]}>
                                    Innovating Industries Demonstrating Our Multi
                                </AuroraText>
                            </div>
                            <span className="text-[86px] max-xl:text-[60px] max-sm:text-[40px] font-extralight text-end items-end max-2xl:text-start max-2xl:items-start block">
                                <AuroraText colors={["#D42290", "#2DAEEF"]}>
                                    Sector Strength
                                </AuroraText>
                            </span>
                        </h1>

                        <p className="font-light text-white/70 text-sm md:text-md lg:text-xl max-lg:px-1">
                            From conceptual sketches to digital experiences, here's how we turn imagination into design
                        </p>
                    </div>

                    <img src="/images/industries/city-bg.png" className="w-2/5 max-md:w-3/4 h-auto z-100" alt="City" />
                </div>
            </div>

            <div className="-mt-5 relative bg-[#00050A] rounded-[34.137px]">
                <div className="industries-grid" style={{
                    ['--img-opacity']: '0.6'
                }}>
                    <style dangerouslySetInnerHTML={{
                        __html: `
                                .industries-grid img,
                                .industries-grid video {
                                    opacity: 0.6 !important;
                                }
                            `
                    }} />
                    <LayoutGrid cards={cards} />
                </div>
            </div>

            <CTA />
            <Footer />
        </section>
    );
}