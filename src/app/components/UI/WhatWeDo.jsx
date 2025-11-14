"use client";

import React from 'react';
import Shuffle from '@/components/Shuffle';

const WhatWeDo = () => {
    const categories = [
        'Mobile Applications',
        'UI/UX',
        'Branding',
        'Web Development',
        'Animations',
    ];
    const active = 'Mobile Applications';

    return (
        <section
            className="relative text-white select-none z-50 min-h-screen"
            style={{ fontFamily: 'var(--font-sora), sans-serif' }}
        >
            {/* Background image */}
            <div
                className="absolute inset-0 -z-10 bg-bottom bg-cover"
                style={{ backgroundImage: "url('/images/what-we-do-bg.png')" }}
            >

                {/* Dark vignette overlays */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1%_100%,rgba(0,0,0,0)_0%,rgba(0,0,0,100)_100%,rgba(0,0,0,100)_100%)]" />

                <div className='flex flex-col justify-between min-h-screen'>
                    {/* Top meta label */}
                    <div className="relative mx-auto w-[92%] pt-16 sm:pt-20">
                        <div className="flex items-center justify-between gap-4 text-[11px] sm:text-xs tracking-widest uppercase text-white/70">
                            <div className='text-nowrap'>
                                <span>03</span>
                                <span className="opacity-70">—</span>
                                <span>What we do</span>
                            </div>
                            {/* Categories row */}
                            <div className="relative mx-auto w-[92%]">
                                <div className="w-full flex flex-wrap justify-end gap-2 sm:gap-3 text-[11px] sm:text-[12px] font-medium">
                                    {categories.map((c, idx) => (
                                        <div key={c} className="flex items-center">
                                            <button
                                                type="button"
                                                className={`px-1 whitespace-nowrap transition-colors ${c === active ? 'text-white' : 'text-white/55 hover:text-white/80'
                                                    }`}
                                                aria-current={c === active ? 'page' : undefined}
                                            >
                                                {c}
                                            </button>
                                            {idx < categories.length - 1 && (
                                                <span className="mx-1 sm:mx-2 text-white/25">|</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        <div className="mt-4 h-px w-full bg-white/10" />
                    </div>

                    {/* Large heading bottom-left */}
                    {/* <div className="text-[45px] absolute left-[4%] bottom-[12%] sm:bottom-[10%]">
                    <div className="leading-[0.92] font-semibold text-left">
                        <Shuffle
                            text="MOBILE"
                            className="block text-[42px] sm:text-[68px] md:text-[92px] lg:text-[108px]"
                            tag="span"
                            textAlign="left"
                            shuffleDirection="left"
                            duration={0.5}
                            stagger={0.04}
                            shuffleTimes={2}
                            style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                        />
                        <br />
                        <Shuffle
                            text="APPLICATIONS"
                            className="block text-[42px] sm:text-[68px] md:text-[92px] lg:text-[108px]"
                            tag="span"
                            textAlign="left"
                            shuffleDirection="left"
                            duration={0.5}
                            stagger={0.04}
                            shuffleTimes={2}
                            style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                        />
                    </div>
                    </div> */}

                    <div className="text-[45px] ml-20">
                        <div className="leading-[0.92] font-semibold text-left">
                            <Shuffle
                                text="MOBILE"
                                className="block text-[42px] sm:text-[68px] md:text-[92px] lg:text-[108px]"
                                tag="span"
                                textAlign="left"
                                shuffleDirection="left"
                                duration={0.5}
                                stagger={0.04}
                                shuffleTimes={2}
                                style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                            />
                            <br />
                            <Shuffle
                                text="APPLICATIONS"
                                className="block text-[42px] sm:text-[68px] md:text-[92px] lg:text-[108px]"
                                tag="span"
                                textAlign="left"
                                shuffleDirection="left"
                                duration={0.5}
                                stagger={0.04}
                                shuffleTimes={2}
                                style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;