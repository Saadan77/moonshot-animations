'use client';

import { useEffect, useRef } from 'react';

import {
    Marquee,
    MarqueeContent,
    MarqueeItem,
} from '@/components/ui/shadcn-io/marquee';
import Testimonials from './Testimonials';

export default function Partners() {

    const transitionRef = useRef(null);

    const xSteps = [0, 12.5, 25, 37.5, 50, 62.5, 75, 87.5, 100];
    const yOffsets = [70, 60, 50, 40, 30, 20, 10, 0];

    const generateClipPath = (progress) => {
        const inverseProgress = 1 - progress;
        const baseY = inverseProgress * 100;

        let path = "polygon(0% 100%, ";

        for (let i = 0; i < 8; i++) {
            const xStart = xSteps[i];
            const xEnd = xSteps[i + 1];

            let stepY = baseY + (yOffsets[i] * inverseProgress);

            stepY = Math.max(0, Math.min(100, stepY));

            path += `${xStart}% ${stepY}%, ${xEnd}% ${stepY}%, `;
        }

        path += "100% 100%)";
        return path;
    };

    useEffect(() => {
        const transition = transitionRef.current;
        if (!transition) return;

        const handleClipScroll = () => {
            const windowHeight = window.innerHeight;
            const rect = transition.getBoundingClientRect();

            let progress = (windowHeight - rect.top) / (windowHeight * 1.5);
            progress = Math.max(0, Math.min(1, progress));

            const path = generateClipPath(progress);

            transition.style.clipPath = path;
            transition.style.webkitClipPath = path;
        };

        window.addEventListener("scroll", handleClipScroll);
        handleClipScroll();

        return () => window.removeEventListener("scroll", handleClipScroll);
    }, []);

    return (
        <>
            {/* Transition Section with Clip-Path */}
            <section
                ref={transitionRef}
                className="relative h-[50vh] z-50 -mt-125"
                style={{
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                    willChange: "clip-path",
                    transform: "translate3d(0,0,0)",
                    background: "transparent"
                }}
            >
                <div className="absolute inset-0 bg-[#00060B]" style={{ clipPath: "inherit" }} />
            </section>

            <section className="relative z-50 -mt-15 bg-[#00060B] mx-auto pb-24 md:pb-28 lg:pb-32 overflow-hidden">
                <div className=''>
                    {/* Top meta label */}
                    <div className="relative mx-auto w-[92%] pt-16 sm:pt-20 pb-12">
                        <div className="font-sora flex justify-between text-[#808080] text-[20px]">
                            <div className="text-[20px] text-[#808080]">
                                <span className='text-nowrap font-sora font-normal'>08 — Partners</span>
                            </div>
                            <p className="text-[#41454a] text-end text-[26px] tracking-[-0.03em]">
                                Over <span className="text-white">10 Years</span> <br /> Partnership
                            </p>
                        </div>
                    </div>

                    {/* Logo Loop Section */}
                    <div className="flex size-full items-center justify-center">
                        <Marquee>
                            <MarqueeContent speed={150}>
                                {[
                                    '/images/partners/archin.png',
                                    '/images/partners/logo_github.png',
                                    '/images/partners/logo_union.png',
                                    '/images/partners/logo_usa.png',
                                    '/images/partners/logo_squarespace.png',
                                    '/images/partners/logo_zm.png',
                                ].map((src, index) => (
                                    <MarqueeItem key={index} className="group h-66 w-66 mx-0">
                                        <div className="h-full w-full rounded-full bg-[#03182c] flex items-center justify-center">
                                            <img
                                                alt={`Partner logo ${index + 1}`}
                                                className="max-h-full max-w-full object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                                                src={src}
                                            />
                                        </div>
                                    </MarqueeItem>
                                ))}
                            </MarqueeContent>
                        </Marquee>
                    </div>
                </div>

                <Testimonials />
            </section>
        </>
    );
}