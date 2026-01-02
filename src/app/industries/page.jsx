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

    const topCards = [
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
            className: "md:col-span-3 h-[320px] 1600:h-[650px] 2xl:h-[550px] xl:h-[450px] max-xl:h-[350px]",
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
            className: "md:col-span-1 h-[320px] 1600:h-[650px] 2xl:h-[550px] xl:h-[450px] max-xl:h-[350px]",
            content: null,
        },
        {
            id: 8,
            title: "Government",
            thumbnail: "/images/industries/image-8.png",
            className: "md:col-span-1 h-[320px] 1600:h-[650px] 2xl:h-[550px] xl:h-[450px] max-xl:h-[350px]",
            content: null,
        },
        {
            id: 9,
            title: "Medical",
            thumbnail: "/images/industries/image-9.png",
            className: "md:col-span-2",
            content: null,
        }
    ];

    const bottomCards = [
        {
            id: 10,
            title: "Retail and E-Commerce",
            thumbnail: "/images/industries/image-10.png",
            className: "md:col-span-2 h-[320px] 1600:h-[650px] 2xl:h-[550px] xl:h-[450px] max-xl:h-[350px]",
            content: null,
        },
        {
            id: 11,
            title: "Artificial Intelligence",
            thumbnail: "/images/industries/image-11.png",
            className: "md:col-span-2 h-[320px] 1600:h-[650px] 2xl:h-[550px] xl:h-[450px] max-xl:h-[350px]",
            content: null,
        },
    ];

    return (
        <>
            {/* <CyberHologramLoader /> */}
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

                <div className="min-h-[110vh] flex items-center relative w-full overflow-hidden">
                    {/* Dither Background */}
                    {/* <div className="absolute inset-0 w-full h-full opacity-20">
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
                        className="absolute inset-0 col-span-1 brightness-125 h-[150vh]"
                        style={{ backgroundImage: "url('/images/bg-hero.png')" }}
                    />

                    {/* Decorative Lines */}
                    <DecorativeLines />

                    {/* Hero Section */}
                    <div>
                        <div className="relative z-10 ml-20 max-sm:ml-10">
                            <div className="mb-16 flex items-center gap-3 text-sm text-white">
                                <img src="/images/about-us/icon.png" />
                                <p className="font-poppins font-medium text-lg">Industries</p>
                            </div>

                            <h1 className="text-[clamp(30px,12vw,66px)] font-normal font-sora uppercase mb-4 tracking-tight leading-20.25 text-white">
                                <div className="text-[68px] max-xl:text-[50px] max-sm:text-[30px]">
                                    <AuroraText colors={["#ffffff", "#d1bd73"]}>
                                        Innovating Industries
                                        <br />
                                        Demonstrating Our Multi
                                    </AuroraText>
                                </div>
                                <span className="text-[clamp(40px,12vw,86px)] font-thin text-end items-end max-2xl:text-start max-2xl:items-start block">
                                    <AuroraText colors={["#D42290", "#2DAEEF"]}>
                                        Sector Strength
                                    </AuroraText>
                                </span>
                            </h1>

                            <p className="font-sora font-medium text-white/70 text-[clamp(10px,1.05vw,20px)]">
                                From conceptual sketches to digital experiences, here's how we turn imagination into design
                            </p>
                        </div>

                        <div className="absolute top-40 -right-50 z-10">
                            <img src="/images/industries/city-bg.png" className="w-5/6 max-md:w-3/4 h-auto" alt="City" />
                        </div>
                    </div>
                </div>

                <div className="-mt-10 py-30 bg-[#00050A] rounded-[34.137px] relative z-10">
                    <div className="industries-grid" style={{
                        ['--img-opacity']: '0.8'
                    }}>
                        <style dangerouslySetInnerHTML={{
                            __html: `
                                .industries-grid img,
                                .industries-grid video {
                                    opacity: 0.8 !important;
                                }
                            `
                        }} />
                        <LayoutGrid cards={topCards} />
                        <div id="bottom-industries-grid">
                            <LayoutGrid cards={bottomCards} />
                        </div>
                        <style
                            dangerouslySetInnerHTML={{
                                __html: `
                                    @media (min-width: 768px) {
                                        #bottom-industries-grid > .grid {
                                            grid-template-columns: repeat(4, minmax(0, 1fr));
                                        }
                                        
                                        #bottom-industries-grid > .grid {
                                            padding-top: 0%;
                                            padding-bottom: 0%;
                                        }
                                    }
                                `
                            }}
                        />
                    </div>
                </div>

                <CTA />
                <Footer />
            </section>
        </>
    );
}