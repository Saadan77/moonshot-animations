import React from 'react';

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
            className="relative w-full min-h-[100vh] text-white select-none"
            style={{ fontFamily: 'var(--font-sora), sans-serif' }}
        >
            {/* Background image */}
            <div
                className="absolute inset-0 -z-10 bg-center bg-cover"
                style={{ backgroundImage: "url('/images/what-we-do-bg.png')" }}
            />
            {/* Dark vignette overlays */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_40%_40%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_60%,rgba(0,0,0,0.85)_100%)]" />
            {/* <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/75" /> */}

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
            <div className="absolute left-[4%] bottom-[12%] sm:bottom-[10%]">
                <h2 className="leading-[0.92] font-semibold text-left">
                    <span className="block text-[42px] sm:text-[68px] md:text-[92px] lg:text-[108px]">MOBILE</span>
                    <span className="block text-[42px] sm:text-[68px] md:text-[92px] lg:text-[108px]">APPLICATIONS</span>
                </h2>
            </div>
        </section>
    );
};

export default WhatWeDo;