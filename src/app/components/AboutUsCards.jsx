"use client";

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
                compact ? 'h-[280px]' : 'h-[336px]',
                'w-[min(92vw,340px)] sm:w-[min(44vw,400px)] lg:w-[340px] xl:w-[360px]',
                'transition-transform duration-300 will-change-transform',
                'hover:-translate-y-1',
                className,
            ].join(' ')}
        >
            <img
                src={image}
                alt={titleTopRight || titleTopLeft}
                className="absolute inset-0 h-full w-full object-cover"
            />

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


export default function AboutUsCards() {
    const IMG_BASE = '/images/about-us';
    const cards = [
        {
            roman: 'I.',
            titleTopLeft: '',
            titleTopRight: 'Years\nExperience',
            number: '12+',
            image: `${IMG_BASE}/about-us-1.png`,
            compact: false,
            offset: 'lg:translate-y-6',
        },
        {
            roman: 'II.',
            titleTopLeft: '',
            titleTopRight: 'Completed\nProjects',
            number: '25K+',
            image: `${IMG_BASE}/about-us-2.png`,
            compact: false,
            offset: 'lg:-translate-y-4',
        },
        {
            roman: 'III.',
            titleTopLeft: '',
            titleTopRight: 'Award\nWinning',
            number: '110+',
            image: `${IMG_BASE}/about-us-3.png`,
            compact: true,
            offset: 'lg:translate-y-10',
        },
        {
            roman: 'IV.',
            titleTopLeft: '',
            titleTopRight: 'Satisfied\nClients',
            number: '4M+',
            image: `${IMG_BASE}/about-us-4.png`,
            compact: false,
            offset: 'lg:-translate-y-2',
        },
    ];

    return (
            <div className="relative my-10 overflow-visible mt-20">
                {/* Glow ellipse below cards */}
                <div
                    className="pointer-events-none absolute -bottom-14 left-1/2 h-[230px] w-screen -translate-x-1/2 blur-[60px] opacity-90"
                    style={{
                        background:
                            'radial-gradient(60% 60% at 50% 50%, rgba(93, 66, 255, 0.6) 0%, rgba(255, 41, 124, 0.55) 45%, rgba(0,0,0,0) 70%)',
                    }}
                />

                <div className="grid grid-cols-1 justify-items-center gap-6 lg:grid-cols-2 2xl:grid-cols-4">
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
    );
};