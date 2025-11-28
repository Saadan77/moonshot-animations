"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import CTA from "@/app/components/CTA";
import SmoothScroll from "@/app/components/SmoothScroll";

import { AuroraText } from "@/components/ui/aurora-text";
import Dither from "@/components/Dither";
import ScrollReveal from "@/components/lightswind/scroll-reveal";
import TextType from "@/components/TextType";
import { LayoutGrid } from "@/components/ui/layout-grid";

export default function WebDevelopment() {

    const layoutImages = [
        {
            id: 1,
            thumbnail: "/images/services/web-development/layout-grid/image-1.png",
            className: "md:col-span-2 md:row-span-2",
            content: null,
        },
        {
            id: 2,
            thumbnail: "/images/services/web-development/layout-grid/image-2.png",
            className: "md:col-span-1",
            content: null,
        },
        {
            id: 3,
            thumbnail: "/images/services/web-development/layout-grid/image-3.png",
            className: "md:col-span-1",
            content: null,
        },
    ];

    const webDevInfo = [
        {
            id: 1,
            title: "Discovery <br /> & Requirements",
            description:
                "We don’t build on guesses. Our websites start with clear requirements, goals, and user journeys so the development is aligned with real business needs.",
        },
        {
            id: 2,
            title: "Architecture, <br /> Wireframes & Flows",
            description:
                "From simple sites to complex web apps, we plan the structure, flows, and layouts so every page has a clear purpose and leads users to action.",
        },
        {
            id: 3,
            title: "Pixel-perfect <br /> Frontend Development",
            description:
                "We turn designs into responsive, fast, and clean code – using modern web standards to make sure your website looks and works great on every device.",
        },
        {
            id: 4,
            title: "Scalable & <br /> Data-Driven Web Builds",
            description:
                "We use best practices, testing, and analytics to improve speed, stability, and conversions, so your website keeps getting better with real data over time.",
        }
    ];

    const Card = ({ card }) => {
        return (
            <div
                key={card.id}
                className="space-y-4"
            >
                <p className="px-4 text-[20px] uppercase text-[#ecedcf]" dangerouslySetInnerHTML={{ __html: card.title }}>
                </p>
                <p
                    className="px-4 text-[16px] text-[#ecedcf]"
                    dangerouslySetInnerHTML={{ __html: card.description }}
                />
            </div>
        );
    };

    return (
        <SmoothScroll>
            <section
                className="relative bg-black"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
                <Navbar />

                <div className="py-30 min-h-screen flex items-center relative w-full overflow-visible">
                    <div className="absolute inset-0 w-full h-[125vh] opacity-20">
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

                    <div
                        className="absolute inset-0 brightness-125 h-[150vh]"
                        style={{ backgroundImage: "url('/images/bg-hero.png')" }}
                    />

                    {/* Decorative Lines */}
                    <div className="max-md:hidden block">
                        {[
                            '-5%',
                            '15%',
                            '35%',
                            '60%',
                            '85%',
                            '105%'
                        ].map((left) => (
                            <div
                                key={left}
                                style={{ left }}
                                className="absolute top-0 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 pointer-events-none z-50"
                            >
                                <div
                                    className="w-px h-[150vh]"
                                    style={{
                                        background:
                                            'linear-gradient(to bottom, rgba(187,187,187,0) 0%, rgba(187,187,187,0.12) 12%, rgba(187,187,187,0.12) 88%, rgba(187,187,187,0) 100%)'
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Industries Hero Section */}
                    <div className="flex max-lg:flex-col items-center gap-8 mt-36">
                        <div className="z-10 ml-20 max-lg:ml-5">
                            <div className="mb-16 flex items-center gap-3 text-sm text-white/80">
                                <div className="flex items-center gap-[3px]">
                                    <span className="block h-2.5 w-0.5 rounded bg-white/70" />
                                    <span className="block h-2.5 w-0.5 rounded bg-white/50" />
                                    <span className="block h-2.5 w-0.5 rounded bg-white/30" />
                                </div>
                                <p className="font-bold text-lg">Website Development</p>
                            </div>

                            <h1 className="font-sora uppercase mb-4 text-[66px] max-xl:text-[40px] max-sm:text-[30px] tracking-tight leading-none text-white">
                                <AuroraText colors={["#ffffff", "#d1bd73"]}>
                                    Building <br /> Sites That Shape Your{" "}
                                </AuroraText>
                                <span className="text-end items-end max-lg:text-start max-lg:items-start block">
                                    <AuroraText colors={["#03499F", "#D722AF", "#03499F"]}>
                                        Brand & Profile
                                    </AuroraText>
                                </span>
                            </h1>

                            <p className="font-light text-white/70 md:text-md lg:text-lg">
                                From first ideas to final code, we design and build websites that show who you are online
                            </p>
                        </div>

                        <img
                            src="/images/services/web-development/hero.png"
                            className="absolute top-20 -right-60 z-10"
                            alt="Astronaut"
                            data-smoother-ignore
                        />
                    </div>
                </div>

                <div className="relative p-10 max-lg:p-1 z-10 justify-center flex">
                    <img
                        src="/images/services/web-development/sec-section.png"
                        className="h-auto w-3/4 object-cover rounded-4xl items-center"
                        data-smoother-ignore
                    />
                </div>

                <div className="bg-bottom relative z-50 oerflow-visible" style={{ backgroundImage: 'url(/images/services/web-development/layout-grid/gradient-bg.png)' }}>
                    <section className="py-24 lg:py-32 px-6 lg:px-36 bg-bottom min-h-screen"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Image column */}
                            <div className="relative z-10 col-span-1 flex items-center justify-center">
                                <img
                                    src="/images/services/web-development/section-3-laptop.png"
                                    alt="Laptop showcasing website design"
                                    className="h-auto"
                                    data-smoother-ignore
                                    style={{ mixBlendMode: "screen" }}
                                />
                            </div>

                            {/* Text column */}
                            <div className="col-span-1 text-white gap-4">
                                <h2 className="text-4xl lg:text-6xl font-sora font-light uppercase tracking-tight leading-snug mb-24 -ml-16">
                                    <TextType
                                        text="Human-centered"
                                        typingSpeed={75}
                                        pauseDuration={1500}
                                        showCursor={false}
                                        startOnVisible={true}
                                        loop={true}
                                    />
                                    <br />
                                    <TextType
                                        text="web development Studio"
                                        typingSpeed={75}
                                        pauseDuration={1500}
                                        showCursor={false}
                                        startOnVisible={true}
                                        loop={true}
                                    />
                                </h2>
                                <div className="flex gap-16">
                                    <div className="w-2 bg-white mt-5 mb-10">|</div>
                                    <div
                                        className="tracking-[-0.03em]"
                                    >
                                        <ScrollReveal size="sm" enableBlur={false}>
                                            Tech With Moonshot makes use of collaborative efforts to give you a good website development services. Additionally, our professional website developers give you exclusive insights how to make user friendly, interactive, secure and speedy websites. Moreover, our front-end developers and back-end developers know how to service your web development request in agile manner.
                                        </ScrollReveal>
                                    </div>
                                </div>
                                <Link
                                    href="#"
                                    className="group border border-[#979797] inline-flex items-center gap-3 rounded-full bg-[#0F172A]/60 hover:bg-[#D42290] pr-1.5 pl-6 py-1.5 text-[15px] text-white/90 ring-1 ring-white/15 transition hover:ring-white/30"
                                >
                                    <span className="relative top-[0.5px] font-sora text-[20px] hover-group:bg-white hover-group:text-black">Learn More About</span>
                                    <span className="grid place-items-center rounded-full bg-[#D42290] group-hover:bg-white p-3">
                                        <ArrowRight className="w-6 h-6 group-hover:text-black" />
                                    </span>
                                </Link>

                            </div>
                        </div>
                    </section>

                    <section className="h-screen">
                        <img
                            src="/images/services/web-development/section-4.png"
                            className="h-full w-full object-cover"
                            data-smoother-ignore
                        />
                    </section>

                    <section id="web-dev" className="overflow-visible py-64">
                        <h2 className="max-w-7xl mx-auto text-4xl lg:text-6xl font-sora font-light uppercase tracking-tight leading-snug">
                            <TextType
                                text="Modern web dev made for"
                                typingSpeed={75}
                                pauseDuration={1500}
                                showCursor={false}
                                startOnVisible={true}
                                loop={true}
                            />
                            <br />
                            <TextType
                                text="Immersive website user experience"
                                typingSpeed={75}
                                pauseDuration={1500}
                                showCursor={false}
                                startOnVisible={true}
                                loop={true}
                            />
                        </h2>

                        <LayoutGrid cards={layoutImages} />
                        <style jsx global>{`
                            #web-dev > div.grid {
                                gap: 50px !important;
                                padding: 5rem !important;
                            }
                        `}</style>

                        <div
                            className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 flex-wrap max-w-[95%] mx-auto gap-12 h-full items-center"
                        >
                            {webDevInfo.map((card) => (
                                <Card key={card.id} card={card} />
                            ))}
                        </div>

                        <div className="max-w-[85%] mx-auto my-20 min-w-[85%] text-white/30 w-[1px] h-[1px] bg-white/30"></div>
                    </section>

                </div>

                <CTA />
                <Footer />
            </section>
        </SmoothScroll>
    );
}
