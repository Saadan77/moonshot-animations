import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

const About2 = () => {
    return (
        <section className="relative bg-black text-white overflow-hidden py-24">

            {/* Content Overlay */}
            <div className="relative z-10 max-w-[90%] mx-auto px-6 lg:px-8">
                <div className='mb-20 space-y-4'>
                    {/* "04 - The Inventive Minds" label */}
                    <div className="mr-60 flex items-center gap-3 text-sm text-white/80">
                        <span className='font-bold text-nowrap'>04 - The Inventive Minds</span>
                    </div>

                    <div>
                        {/* Heading */}
                        <h2
                            className="text-[clamp(28px,4.2vw,40px)] leading-[1.18] tracking-[-0.01em]"
                            style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                        >
                            <p className="text-white">
                                Tech With Moonshot strategists drive impactful digital growth for your brand. By analyzing data, trends, and audience insights, they deliver tailored solutions, SEO, email marketing, websites, e-commerce, animations, and more. More than a digital agency, we make your brand stand out. That’s the Tech With Moonshot difference.
                            </p>
                        </h2>
                    </div>
                </div>

                {/* Core Discernments Title */}
                <h2 className="text-xl lg:text-2xl font-bold uppercase mb-20" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
                    Core <br /> Discernments
                </h2>

                {/* Background Image - Sticky/Fixed */}

                {/* <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
                    style={{ backgroundImage: "url('/images/about-2/about-2-bg.png')" }}
                ></div> */}

                {/* Cards */}
                <div className="">
                    <div className="relative max-w-[40%] col-start-1 md:col-start-2 row-start-1">
                        <div
                            className={[
                                'relative overflow-hidden rounded-[28px] border border-white/10',
                                'bg-[#0B0F14] shadow-[0_30px_120px_rgba(0,0,0,0.75)]',
                                'p-8 lg:p-12 min-h-[420px]',
                            ].join(' ')}
                        >
                            {/* Gradient overlays: top-right (violet) and bottom-left (warm) */}
                            <div
                                className="pointer-events-none absolute inset-0 -z-10"
                                style={{
                                    backgroundImage: `
              radial-gradient(520px 420px at 100% 0%,
                rgba(152, 75, 255, 0.55) 0%,
                rgba(152, 75, 255, 0.20) 40%,
                rgba(0,0,0,0) 66%),
              radial-gradient(560px 460px at 0% 100%,
                rgba(255, 170, 64, 0.50) 0%,
                rgba(255, 62, 120, 0.18) 48%,
                rgba(0,0,0,0) 72%)
            `,
                                }}
                            />
                            {/* Subtle vignette for legibility */}
                            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-black/30" />
                            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-tr from-black/10 via-transparent to-transparent" />
                            {/* Thin inner ring */}
                            <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/8 -z-10" />

                            {/* Top row: index + ball */}
                            <div className="relative flex items-start justify-between">
                                <div
                                    className="text-[#38BDF8] text-5xl font-bold tracking-tight"
                                    style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                                >
                                    01
                                </div>

                                <img
                                    src="/images/about-2/balls/ball-1.png"
                                    alt="Ball 1"
                                    className="pointer-events-none absolute -top-6 right-0 w-44 h-44 lg:w-52 lg:h-52 object-contain"
                                />
                            </div>

                            {/* Headline */}
                            <p
                                className="mt-12 text-2xl lg:text-3xl font-semibold uppercase leading-tight tracking-[0.01em] text-white"
                                style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                            >
                                Forty Three Leading Digital Performance Strategists Works With Tech With Moonshot.
                            </p>
                        </div>
                    </div>

                    {/* Card 02 - Bottom Left */}
                    <div className="w-full items-end">
                        <div className="relative items-end max-w-[40%] col-start-1 row-start-2 rounded-3xl overflow-hidden p-8 lg:p-12 shadow-xl">
                            <div className="absolute top-4 left-4 text-blue-400 text-5xl font-bold" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
                                02
                            </div>
                            <img
                                src="/images/about-2/balls/ball-2.png"
                                alt="Ball 2"
                                className="absolute bottom-0 left-0 w-48 h-48 object-contain transform translate-y-1/4"
                            />
                            <p className="text-2xl lg:text-3xl font-bold uppercase mt-12" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
                                It Is Independent Google Partner (Accredited By Google)
                            </p>
                        </div>
                    </div>

                    {/* Card 03 - Bottom Right */}
                    <div className="relative max-w-[40%] col-start-1 md:col-start-2 row-start-2 md:row-start-2 rounded-3xl overflow-hidden p-8 lg:p-12 shadow-xl">
                        <div className="absolute top-4 right-4 text-blue-400 text-5xl font-bold" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
                            03
                        </div>
                        <img
                            src="/images/about-2/balls/ball-3.png"
                            alt="Ball 3"
                            className="absolute bottom-0 right-0 w-32 h-32 object-contain transform translate-x-1/4 translate-y-1/4"
                        />
                        <p className="text-2xl lg:text-3xl font-bold uppercase mt-12" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
                            Tech With Moonshot Is Trusted With Some Of World's Leading Digital Brands.
                        </p>
                    </div>

                    {/* Card 04 - Below Left */}
                    <div className="w-full items-end">
                        <div className="relative max-w-[40%] col-start-1 row-start-3 rounded-3xl overflow-hidden p-8 lg:p-12 shadow-xl">
                            <div className="absolute top-4 left-4 text-blue-400 text-5xl font-bold" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
                                04
                            </div>
                            <img
                                src="/images/about-2/balls/ball-4.png"
                                alt="Ball 4"
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-40 object-contain -mt-8"
                            />
                            <p className="text-2xl lg:text-3xl font-bold uppercase mt-20" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
                                Our SEO And Google Ads Strategists Have Earned Numerous Industry Awards, Including Specialist Agency Of The Year.
                            </p>
                            <p className="text-sm text-gray-300 mt-4" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
                                04 — The Inventive Minds
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About2;