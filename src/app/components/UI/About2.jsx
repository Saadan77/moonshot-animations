import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

const About2 = () => {
    return (
        <section className="relative bg-black text-white py-24 z-50">
            {/* Removed overflow-hidden to allow sticky to work properly */}

            {/* Content Overlay */}
            <div className="relative z-10 max-w-[90%] mx-auto px-6 lg:px-8">
                <div className='mb-20 space-y-4'>
                    {/* Top label */}
                    <div className="flex items-center gap-3 text-sm text-white/80">
                        <span className='font-bold text-nowrap'>04 — The Inventive Minds</span>
                    </div>

                    <div>
                        {/* Heading */}
                        <h2
                            className="text-[clamp(28px,4.2vw,40px)] leading-[1.18] tracking-[-0.01em]"
                            style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                        >
                            <p className="text-white">
                                Tech With Moonshot strategists drive impactful digital growth for your brand. By analyzing data, trends, and audience insights, they deliver tailored solutions, SEO, email marketing, websites, e-commerce, animations, and more. More than a digital agency, we make your brand stand out. That's the Tech With Moonshot difference.
                            </p>
                        </h2>
                    </div>
                </div>

                {/* Core Discernments Title */}
                <h2 className="text-xl lg:text-2xl font-bold uppercase mb-20" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
                    Core <br /> Discernments
                </h2>

                {/* Cards Section with Background */}
                <div className="relative">
                    {/* Background Image - Behind cards only */}
                    <div className="sticky top-24 z-0 flex h-[68vh] items-center justify-center pointer-events-none">
                        <img
                            src="/images/about-2/about-2-bg.png"
                            alt=""
                            className="max-w-[1100px] w-[86vw] object-contain grayscale opacity-60"
                        />
                    </div>

                    {/* Cards Container */}
                    <div style={{ maxWidth: "60%" }} className='relative mx-auto z-10 -mt-[68vh]'>
                        {/* Card 01 */}
                        <div className="relative flex justify-end mb-[-120px]">
                            <div
                                className={[
                                    ' flex flex-col justify-between relative rounded-[28px] border border-white/10 bg-black/70 bg-black/70 overflow-hidden',
                                    'shadow-[0_30px_120px_rgba(0,0,0,0.75)]',
                                    'p-8 lg:p-12 max-w-[45%] min-h-[500px]',
                                ].join(' ')}
                            >
                                {/* Gradient - Bottom Left */}
                                <div
                                    className="absolute -left-32 -bottom-32 w-[200px] h-96 rounded-full blur-[120px] opacity-60 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(179.92deg, #03499F 0.07%, #D722AF 100%)'
                                    }}
                                />

                                {/* Gradient - Top Right */}
                                <div
                                    className="absolute -top-2 -right-2 w-[200px] h-96 rounded-full blur-[120px] opacity-50 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(149.85deg, rgba(255, 198, 40, 0.8) 39.93%, rgba(250, 40, 137, 0.8) 60.8%, rgba(62, 95, 249, 0.8) 91.46%);'
                                    }}
                                />

                                {/* Top row: index + ball */}
                                <div className="relative flex items-start justify-between z-10">
                                    <div
                                        className="text-[#38BDF8] text-5xl font-bold tracking-tight"
                                        style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                                    >
                                        01
                                    </div>

                                    <img
                                        src="/images/about-2/balls/ball-1.png"
                                        alt="Ball 1"
                                        className="pointer-events-none absolute -top-20 -right-[100px] w-44 h-44 lg:w-52 lg:h-52 object-contain"
                                    />
                                </div>

                                {/* Headline */}
                                <p
                                    className="relative z-10 text-2xl lg:text-3xl uppercase leading-tight tracking-[0.01em] text-white"
                                    style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                                >
                                    Forty Three Leading Digital Performance Strategists Works With Tech With Moonshot.
                                </p>
                            </div>
                        </div>

                        {/* Card 02 */}
                        <div className="relative mb-[-120px] max-md:mb-0">
                            <div
                                className={[
                                    ' flex flex-col justify-between relative rounded-[28px] border border-white/10 bg-black/70 overflow-hidden',
                                    'shadow-[0_30px_120px_rgba(0,0,0,0.75)]',
                                    'p-8 lg:p-12 min-h-[500px] max-w-[45%]',
                                ].join(' ')}
                            >
                                {/* Gradient - Bottom Left */}
                                <div
                                    className="absolute -left-32 -bottom-32 w-[200px] h-96 rounded-full blur-[120px] opacity-60 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(179.92deg, #03499F 0.07%, #D722AF 100%)'
                                    }}
                                />

                                {/* Gradient - Top Right */}
                                <div
                                    className="absolute -top-2 -right-2 w-[200px] h-96 rounded-full blur-[120px] opacity-50 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(149.85deg, rgba(255, 198, 40, 0.8) 39.93%, rgba(250, 40, 137, 0.8) 60.8%, rgba(62, 95, 249, 0.8) 91.46%);'
                                    }}
                                />

                                {/* Top row: index + ball */}
                                <div className="relative flex items-start justify-between z-10">
                                    <div
                                        className="text-[#38BDF8] text-5xl font-bold tracking-tight"
                                        style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                                    >
                                        02
                                    </div>

                                    <img
                                        src="/images/about-2/balls/ball-2.png"
                                        alt="Ball 1"
                                        className="pointer-events-none absolute -top-20 -right-[100px] w-44 h-44 lg:w-52 lg:h-52 object-contain"
                                    />
                                </div>

                                {/* Headline */}
                                <p
                                    className="relative z-10 text-2xl lg:text-3xl uppercase leading-tight tracking-[0.01em] text-white"
                                    style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                                >
                                    It Is Independent Google Partner (Accredited By Google)
                                </p>
                            </div>
                        </div>

                        {/* Card 03 */}
                        <div className="relative flex justify-end mb-[-120px] max-md:mb-0">
                            <div
                                className={[
                                    ' flex flex-col justify-between relative rounded-[28px] border border-white/10 bg-black/70 overflow-hidden',
                                    'shadow-[0_30px_120px_rgba(0,0,0,0.75)]',
                                    'p-8 lg:p-12 min-h-[500px] max-w-[45%]',
                                ].join(' ')}
                            >
                                {/* Gradient - Bottom Left */}
                                <div
                                    className="absolute -left-32 -bottom-32 w-[200px] h-96 rounded-full blur-[120px] opacity-60 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(179.92deg, #03499F 0.07%, #D722AF 100%)'
                                    }}
                                />

                                {/* Gradient - Top Right */}
                                <div
                                    className="absolute -top-2 -right-2 w-[200px] h-96 rounded-full blur-[120px] opacity-50 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(149.85deg, rgba(255, 198, 40, 0.8) 39.93%, rgba(250, 40, 137, 0.8) 60.8%, rgba(62, 95, 249, 0.8) 91.46%);'
                                    }}
                                />

                                {/* Top row: index + ball */}
                                <div className="relative flex items-start justify-between z-10">
                                    <div
                                        className="text-[#38BDF8] text-5xl font-bold tracking-tight"
                                        style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                                    >
                                        03
                                    </div>

                                    <img
                                        src="/images/about-2/balls/ball-3.png"
                                        alt="Ball 3"
                                        className="pointer-events-none absolute -bottom-20 -right-[100px] w-44 h-44 lg:w-52 lg:h-52 object-contain"
                                    />
                                </div>

                                {/* Headline */}
                                <p
                                    className="relative z-10 text-2xl lg:text-3xl uppercase leading-tight tracking-[0.01em] text-white"
                                    style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                                >
                                    Tech With Moonshot Is Trusted With Some Of World's Leading Digital Brands.
                                </p>
                            </div>
                        </div>

                        {/* Card 04 */}
                        <div className="relative">
                            <div
                                className={[
                                    ' flex flex-col justify-between relative rounded-[28px] border border-white/10 bg-black/70 overflow-hidden',
                                    'shadow-[0_30px_120px_rgba(0,0,0,0.75)]',
                                    'p-8 lg:p-12 min-h-[500px] max-w-[45%]',
                                ].join(' ')}
                            >
                                {/* Gradient - Bottom Left */}
                                <div
                                    className="absolute -left-32 -bottom-32 w-[200px] h-96 rounded-full blur-[120px] opacity-60 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(179.92deg, #03499F 0.07%, #D722AF 100%)'
                                    }}
                                />

                                {/* Gradient - Top Right */}
                                <div
                                    className="absolute -top-2 -right-2 w-[200px] h-96 rounded-full blur-[120px] opacity-50 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(149.85deg, rgba(255, 198, 40, 0.8) 39.93%, rgba(250, 40, 137, 0.8) 60.8%, rgba(62, 95, 249, 0.8) 91.46%);'
                                    }}
                                />

                                {/* Top row: index + ball */}
                                <div className="relative flex items-start justify-between z-10">
                                    <div
                                        className="text-[#38BDF8] text-5xl font-bold tracking-tight"
                                        style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                                    >
                                        01
                                    </div>

                                    <img
                                        src="/images/about-2/balls/ball-4.png"
                                        alt="Ball 1"
                                        className="pointer-events-none absolute -top-20 -right-[100px] w-44 h-44 lg:w-52 lg:h-52 object-contain"
                                    />
                                </div>

                                {/* Headline */}
                                <p
                                    className="relative z-10 text-2xl lg:text-3xl uppercase leading-tight tracking-[0.01em] text-white"
                                    style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                                >
                                    Our SEO And Google Ads Strategists Have Earned Numerous Industry Awards, Including Specialist Agency Of The Year.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About2;