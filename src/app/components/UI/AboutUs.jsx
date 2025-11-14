"use client";

import ScrollReveal from '@/components/lightswind/scroll-reveal';
import React from 'react';
import { PinContainer } from '@/components/ui/3d-pin';

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

const AboutCard = ({
    roman = 'I.',
    titleTopLeft = '',
    titleTopRight = '',
    number = '',
    image = '',
    className = '',
    compact = false,
}) => {
    return (
        <div
            className={[
                'group relative overflow-hidden rounded-3xl border border-white/10',
                'bg-zinc-900/20 shadow-[0_8px_60px_rgba(0,0,0,0.55)]',
                // Increased heights slightly
                compact ? 'h-[280px]' : 'h-[336px]',
                // Increased widths slightly
                'w-[min(92vw,340px)] sm:w-[min(44vw,400px)] lg:w-[340px] xl:w-[360px]',
                'transition-transform duration-300 will-change-transform',
                'hover:-translate-y-1',
                className,
            ].join(' ')}
        >
            {/* Image */}
            <img
                src={image}
                alt={titleTopRight || titleTopLeft}
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Subtle vignette/gradients for legibility */}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/65 via-black/15 to-black/10" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-white/5" />

            {/* Corner text (Roman + Titles) */}
            <div className="absolute left-4 top-4 text-white/80 text-[13px] tracking-wide select-none">
                {roman}
            </div>
            <div className="absolute right-4 top-4 text-right text-white/85 text-sm leading-5 select-none">
                {titleTopLeft && <div>{titleTopLeft}</div>}
                {titleTopRight && <div>{titleTopRight}</div>}
            </div>

            {/* Bottom row: metric + arrow */}
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div className="text-white text-5xl font-semibold drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]">
                    {number}
                </div>

                <div className="grid place-items-center rounded-xl text-white/90 border border-white/15 bg-white/5 backdrop-blur-[2px] p-2">
                    <ArrowUpRight className="w-4 h-4" />
                </div>
            </div>
        </div>
    );
};


const AboutUs = () => {
    // Update these paths to match your actual filenames inside /public/images/about-us
    const IMG_BASE = '/images/about-us';
    const cards = [
        {
            roman: 'I.',
            titleTopLeft: '',
            titleTopRight: 'Years\nExperience',
            number: '12+',
            image: `${IMG_BASE}/about-us-1.png`,
            compact: false,
            offset: 'lg:translate-y-6', // a bit lower
        },
        {
            roman: 'II.',
            titleTopLeft: '',
            titleTopRight: 'Completed\nProjects',
            number: '25K+',
            image: `${IMG_BASE}/about-us-2.png`,
            compact: false,
            offset: 'lg:-translate-y-4', // a bit higher
        },
        {
            roman: 'III.',
            titleTopLeft: '',
            titleTopRight: 'Award\nWinning',
            number: '110+',
            image: `${IMG_BASE}/about-us-3.png`,
            compact: true, // this one is shorter in the design
            offset: 'lg:translate-y-10', // lowest
        },
        {
            roman: 'IV.',
            titleTopLeft: '',
            titleTopRight: 'Satisfied\nClients',
            number: '4M+',
            image: `${IMG_BASE}/about-us-4.png`,
            compact: false,
            offset: 'lg:-translate-y-2', // slightly up
        },
    ];

    return (
        <section className="relative isolate w-full overflow-hidden bg-black text-white z-10">
            <div className="mx-auto max-w-[90%] px-6 sm:px-8 md:px-10 lg:px-12 py-24 md:py-28 lg:py-32">
                <div className='flex items-start'>
                    {/* Small "About Us" label */}
                    <div className="mr-60 flex items-center gap-3 text-sm text-white/80">
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
                            className="text-[clamp(28px,4.2vw,40px)] tracking-[-0.01em]"
                            style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                        >
                            <ScrollReveal>
                                Tech With Moonshot delivers smart digital design and strategy, navigating trends and metrics to craft powerful, tailored solutions for your brand.
                            </ScrollReveal>
                        </h2>


                        {/* CTA */}
                        <div className="mt-8">
                            <a
                                href="#"
                                className="inline-flex items-center gap-3 rounded-full bg-[#0F172A]/60 px-6 py-3 text-[15px] text-white/90 ring-1 ring-white/15 transition hover:ring-white/30"
                            >
                                <span className="relative top-[0.5px] font-sora">Learn More About</span>
                                <span className="grid place-items-center rounded-full bg-linear-to-r from-[#5F7BFF] to-[#FF2A7D] p-1.5">
                                    <ArrowUpRight className="w-4 h-4" />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Cards Row (staggered up/down like the reference) */}
                <div className="relative mt-14 lg:mt-20">
                    {/* Glow ellipse below cards */}
                    <div
                        className="pointer-events-none absolute -bottom-14 left-1/2 -z-10 h-[230px] w-[1100px] -translate-x-1/2 blur-[60px] opacity-90"
                        style={{
                            background:
                                'radial-gradient(60% 60% at 50% 50%, rgba(93, 66, 255, 0.6) 0%, rgba(255, 41, 124, 0.55) 45%, rgba(0,0,0,0) 70%)',
                        }}
                    />

                    <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {cards.map((c, i) => (
                            <div key={i} className={['w-full flex justify-center', c.offset].join(' ')}>
                                <PinContainer
                                    title={c.titleTopRight.replace('\n', ' ')}
                                    href="#"
                                    containerClassName="w-full h-full"
                                >
                                    <AboutCard
                                        roman={c.roman}
                                        titleTopRight={
                                            // Convert \n to <br /> for the two-line top-right labels
                                            <span className="whitespace-pre leading-5">
                                                {String(c.titleTopRight)}
                                            </span>
                                        }
                                        number={c.number}
                                        image={c.image}
                                        compact={c.compact}
                                    />
                                </PinContainer>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Flowing gradient trail at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden pointer-events-none">
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
                    
                    {/* Wave shape - smooth continuous wave */}
                    <path 
                        d="M -1600,85 Q -1200,65 -800,80 Q -400,95 0,65 Q 400,35 800,50 Q 1200,65 1600,45 Q 2000,25 2400,40 Q 2800,55 3200,35 Q 3600,15 4000,30 Q 4400,45 4800,25 Q 5200,10 5600,20 Q 6000,30 6400,15 L 6400,128 L -1600,128 Z" 
                        fill="url(#waveGradient)"
                        className="wave-shape"
                    />
                </svg>
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