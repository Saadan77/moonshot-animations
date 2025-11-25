"use client";

import ScrollReveal from '@/components/lightswind/scroll-reveal';
import React from 'react';
import { PinContainer } from '@/components/ui/3d-pin';
import Link from 'next/link';
import Image from 'next/image';
import AboutUsCards from '../AboutUsCards';
import { ArrowRight } from 'lucide-react';

const ArrowUpRight = ({ className = 'w-5 h-5' }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        aria-hidden="true"
    >
        <path
            d="M7 17L17 7M9 7h8v8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const AboutUs = () => {

    return (
        <section className="relative isolate w-full overflow-visible bg-[#00060b] text-white z-50">
            <div className="mx-auto max-w-[90%] px-6 sm:px-8 md:px-10 lg:px-12 pt-20 pb-56">
                <div className='pb-20 flex items-start max-md:flex-col'>
                    {/* Small "About Us" label */}
                    <div className="mr-60 max-sm:mr-30 flex items-center gap-3 text-sm text-white/80">
                        <div className="flex items-center gap-[3px]">
                            <span className="block h-2.5 w-0.5 rounded bg-white/70" />
                            <span className="block h-2.5 w-0.5 rounded bg-white/50" />
                            <span className="block h-2.5 w-0.5 rounded bg-white/30" />
                        </div>
                        <p className='font-bold text-nowrap text-lg'>About Us</p>
                    </div>

                    <div>
                        {/* Heading */}
                        <h2
                            className="text-[clamp(28px,4.2vw,40px)] font-normal"
                            style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                        >
                            <ScrollReveal enableBlur={false}>
                                Tech With Moonshot delivers smart digital design and strategy, navigating trends and metrics to craft powerful, tailored solutions for your brand.
                            </ScrollReveal>
                        </h2>

                        {/* CTA */}
                        <div className="mt-8 group">
                            <Link
                                href="#"
                                className="border border-[#979797] inline-flex items-center gap-3 rounded-full bg-[#0F172A]/60 hover:bg-[#FF2A7D] px-6 py-3 text-[15px] text-white/90 ring-1 ring-white/15 transition hover:ring-white/30"
                            >
                                <span className="relative top-[0.5px] font-sora text-[20px]">Learn More About</span>
                                <span className="grid place-items-center rounded-full bg-[#FF2A7D] group-hover:bg-white p-1.5">
                                    <ArrowRight className="w-6 h-6 group-hover:text-black" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                <AboutUsCards />
            </div>

            {/* Flowing gradient trail at bottom */}
            {/* <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden pointer-events-none">
                <svg className="absolute inset-0 w-[300%] h-full" preserveAspectRatio="none" viewBox="0 0 4800 128">
                    <defs>
                        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgba(93, 66, 255, 0)" stopOpacity="0" />
                            <stop offset="10%" stopColor="rgba(93, 66, 255, 0.3)" stopOpacity="0.3" />
                            <stop offset="20%" stopColor="rgba(93, 66, 255, 0.6)" stopOpacity="0.6" />
                            <stop offset="35%" stopColor="rgba(255, 41, 124, 0.55)" stopOpacity="0.8" />
                            <stop offset="50%" stopColor="rgba(93, 66, 255, 0.6)" stopOpacity="0.6" />
                            <stop offset="60%" stopColor="rgba(93, 66, 255, 0.3)" stopOpacity="0.3" />
                            <stop offset="70%" stopColor="rgba(93, 66, 255, 0)" stopOpacity="0" />
                            <stop offset="100%" stopColor="rgba(93, 66, 255, 0)" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M -1600,85 Q -1200,65 -800,80 Q -400,95 0,65 Q 400,35 800,50 Q 1200,65 1600,45 Q 2000,25 2400,40 Q 2800,55 3200,35 Q 3600,15 4000,30 Q 4400,45 4800,25 Q 5200,10 5600,20 Q 6000,30 6400,15 L 6400,128 L -1600,128 Z"
                        fill="url(#waveGradient)"
                        className="wave-shape"
                    />
                </svg>
            </div> */}

            <div className='absolute -bottom-8 left-[45%] z-100' style={{ transform: 'translate3d(0, 0, 0)' }}>
                <Image src="/images/elevate-icon.png" alt="Elevate Icon" width={100} height={100} className="w-[90px] relative z-10" />
            </div>

            <style jsx>{`
                @keyframes wave-slide {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-1600px);
                    }
                }
                
                .wave-shape {
                    animation: wave-slide 12s linear infinite;
                    filter: blur(25px);
                }
            `}</style>
        </section>
    );
};

export default AboutUs;