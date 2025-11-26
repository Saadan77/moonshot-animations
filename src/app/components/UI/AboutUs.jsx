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
        </section>
    );
};

export default AboutUs;