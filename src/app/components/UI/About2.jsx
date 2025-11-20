"use client";

import ScrollReveal from '@/components/lightswind/scroll-reveal';
import TextType from '@/components/TextType';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from 'motion/react';

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const ParallaxCard = ({ children, className, offset = 0 }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

    // Tilt effect
    const x = useMotionValue(0);
    const yTilt = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(yTilt);

    const transform = useMotionTemplate`perspective(1000px) rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        yTilt.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        yTilt.set(0);
    };

    return (
        <motion.div
            ref={ref}
            style={{ y }}
            className={className}
        >
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transformStyle: "preserve-3d",
                    transform,
                }}
                className="w-full h-full"
            >
                <div className='flex flex-col justify-between h-full' style={{ transformStyle: "preserve-3d" }}>
                    {children}
                </div>
            </motion.div>
        </motion.div>
    );
};

const About2 = () => {
    return (
        <section className="relative bg-black text-white py-24 z-50 pb-50">
            {/* Content Overlay */}
            <div className="relative z-10 max-w-[90%] mx-auto px-6 lg:px-8">
                <div className='mb-20 space-y-4'>
                    {/* Top label */}
                    <div className="flex items-center gap-3 text-lg text-[#808080]">
                        <span className='text-nowrap font-poppins'>04 — The Inventive Minds</span>
                    </div>

                    <div>
                        {/* Heading */}
                        <ScrollReveal>
                            Tech With Moonshot strategists drive impactful digital growth for your brand. By analyzing data, trends, and audience insights, they deliver tailored solutions, SEO, email marketing, websites, e-commerce, animations, and more. More than a digital agency, we make your brand stand out. That's the Tech With Moonshot difference.
                        </ScrollReveal>
                    </div>
                </div>

                {/* Core Discernments Title */}
                <div className="text-xl lg:text-2xl font-bold uppercase mb-20" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
                    <TextType text="Core" typingSpeed={15}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|" startOnVisible={true} loop={true} />
                    <br />
                    <TextType text="Discernments" typingSpeed={15}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|" startOnVisible={true} loop={true} />
                </div>

                {/* Cards Section with Background */}
                <div className="relative" data-smoother-ignore>
                    {/* Background Image - Behind cards only */}
                    <div className="sticky top-0 z-0 flex h-[68vh] items-center justify-center pointer-events-none will-change-transform">
                        <img
                            src="/images/about-2/about-2-bg.png"
                            alt=""
                            className="max-w-[1100px] w-[86vw] object-contain grayscale opacity-60"
                            style={{ transform: 'translateZ(0)' }}
                        />
                    </div>

                    {/* Cards Container */}
                    <div className='max-w-[80%] max-md:max-w-full relative mx-auto z-10 -mt-[68vh]'>
                        {/* Card 01 */}
                        <div className="relative flex justify-end mb-10 md:mb-[-120px]">
                            <ParallaxCard
                                offset={100}
                                className={[
                                    'relative rounded-[28px] border border-white/10 bg-black/70 overflow-hidden',
                                    'shadow-[0_30px_120px_rgba(0,0,0,0.75)]',
                                    'p-8 lg:p-12 min-w-[40%] max-w-[40%] max-md:max-w-full max-md:min-w-full min-h-[600px]',
                                ].join(' ')}
                            >
                                {/* Gradient - Top Right */}
                                <div
                                    className="absolute -top-2 -right-2 w-50 h-60 rounded-full blur-[50px] opacity-50 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(179.92deg, #03499F 0.07%, #D722AF 99.93%)'
                                    }}
                                />

                                {/* Gradient - Bottom Left */}
                                <div
                                    className="absolute -left-32 -bottom-32 w-80 h-60 rounded-full blur-[50px] opacity-60 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(149.85deg, rgba(255, 198, 40, 0.8) 39.93%, rgba(250, 40, 137, 0.8) 60.8%, rgba(62, 95, 249, 0.8) 91.46%)'
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
                                        className="pointer-events-none absolute -top-8 -right-[150px] w-85 h-85 object-contain"
                                    />
                                </div>

                                {/* Headline */}
                                <div
                                    className="relative z-10 text-2xl lg:text-3xl uppercase leading-tight tracking-[0.01em] text-white"
                                    style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                                >
                                    <TextType text="Forty Three Leading Digital Performance Strategists Works With Tech With Moonshot." typingSpeed={15}
                                        pauseDuration={1500}
                                        showCursor={true}
                                        cursorCharacter="|" loop={true} startOnVisible={true} />
                                </div>
                            </ParallaxCard>
                        </div>

                        {/* Card 02 */}
                        <div className="relative mb-10 md:mb-[-120px]">
                            <ParallaxCard
                                offset={-100}
                                className={[
                                    'relative rounded-[28px] border border-white/10 bg-black/70 overflow-hidden',
                                    'shadow-[0_30px_120px_rgba(0,0,0,0.75)]',
                                    'p-8 lg:p-12 min-h-[600px] min-w-[40%] max-w-[40%] max-md:min-w-full max-md:max-w-full',
                                ].join(' ')}
                            >
                                {/* Gradient - Top Right */}
                                <div
                                    className="absolute -top-2 -right-2 w-50 h-60 rounded-full blur-[50px] opacity-50 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(179.92deg, #03499F 0.07%, #D722AF 99.93%)'
                                    }}
                                />

                                {/* Gradient - Bottom Left */}
                                <div
                                    className="absolute -left-32 -bottom-32 w-80 h-60 rounded-full blur-[50px] opacity-60 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(149.85deg, rgba(255, 198, 40, 0.8) 39.93%, rgba(250, 40, 137, 0.8) 60.8%, rgba(62, 95, 249, 0.8) 91.46%)'
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
                                        className="pointer-events-none absolute -top-8 -right-[150px] w-85 h-85 object-contain"
                                    />
                                </div>

                                {/* Headline */}
                                <div
                                    className="mt-80 relative z-10 text-2xl lg:text-3xl uppercase leading-tight tracking-[0.01em] text-white"
                                    style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                                >
                                    <TextType text="It Is Independent Google Partner (Accredited By Google)" typingSpeed={15}
                                        pauseDuration={1500}
                                        showCursor={true}
                                        cursorCharacter="|" loop={true} />
                                </div>
                            </ParallaxCard>
                        </div>

                        {/* Card 03 */}
                        <div className="relative flex justify-end mb-10 md:mb-[-120px]">
                            <ParallaxCard
                                offset={120}
                                className={[
                                    'relative rounded-[28px] border border-white/10 bg-black/70 overflow-hidden',
                                    'shadow-[0_30px_120px_rgba(0,0,0,0.75)]',
                                    'p-8 lg:p-12 min-h-[600px] min-w-[40%] max-w-[40%] max-md:min-w-full max-md:max-w-full',
                                ].join(' ')}
                            >
                                {/* Gradient - Top Right */}
                                <div
                                    className="absolute -top-2 -right-2 w-50 h-60 rounded-full blur-[50px] opacity-50 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(179.92deg, #03499F 0.07%, #D722AF 99.93%)'
                                    }}
                                />

                                {/* Gradient - Bottom Left */}
                                <div
                                    className="absolute -left-32 -bottom-32 w-80 h-60 rounded-full blur-[50px] opacity-60 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(149.85deg, rgba(255, 198, 40, 0.8) 39.93%, rgba(250, 40, 137, 0.8) 60.8%, rgba(62, 95, 249, 0.8) 91.46%)'
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
                                        className="pointer-events-none absolute -top-8 -right-[150px] w-85 h-85 object-contain"
                                    />
                                </div>

                                {/* Headline */}
                                <div
                                    className="relative z-10 text-2xl lg:text-3xl uppercase leading-tight tracking-[0.01em] text-white"
                                    style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                                >
                                    <TextType text="Tech With Moonshot Is Trusted With Some Of World's Leading Digital Brands." typingSpeed={15}
                                        pauseDuration={1500}
                                        showCursor={true}
                                        cursorCharacter="|" loop={true} startOnVisible={true} />
                                </div>
                            </ParallaxCard>
                        </div>

                        {/* Card 04 */}
                        <div className="relative">
                            <ParallaxCard
                                offset={-120}
                                className={[
                                    'relative rounded-[28px] border border-white/10 bg-black/70 overflow-hidden',
                                    'shadow-[0_30px_120px_rgba(0,0,0,0.75)]',
                                    'p-8 lg:p-12 min-h-[600px] min-w-[40%] max-w-[40%] max-md:min-w-full max-md:max-w-full',
                                ].join(' ')}
                            >
                                {/* Gradient - Top Right */}
                                <div
                                    className="absolute -top-2 -right-2 w-50 h-60 rounded-full blur-[50px] opacity-50 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(179.92deg, #03499F 0.07%, #D722AF 99.93%)'
                                    }}
                                />

                                {/* Gradient - Bottom Left */}
                                <div
                                    className="absolute -left-32 -bottom-32 w-80 h-60 rounded-full blur-[50px] opacity-60 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(149.85deg, rgba(255, 198, 40, 0.8) 39.93%, rgba(250, 40, 137, 0.8) 60.8%, rgba(62, 95, 249, 0.8) 91.46%)'
                                    }}
                                />

                                {/* Top row: index + ball */}
                                <div className="relative flex items-start justify-between z-10">
                                    <div
                                        className="text-[#38BDF8] text-5xl font-bold tracking-tight"
                                        style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                                    >
                                        04
                                    </div>

                                    <img
                                        src="/images/about-2/balls/ball-4.png"
                                        alt="Ball 4"
                                        className="pointer-events-none absolute -top-8 -right-[150px] w-85 h-85 object-contain"
                                    />
                                </div>

                                {/* Headline */}
                                <div
                                    className="mt-60 relative z-10 text-2xl lg:text-3xl uppercase leading-tight tracking-[0.01em] text-white"
                                    style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                                >
                                    <TextType text="Our SEO And Google Ads Strategists Have Earned Numerous Industry Awards, Including Specialist Agency Of The Year." typingSpeed={15}
                                        pauseDuration={1500}
                                        showCursor={true}
                                        cursorCharacter="|" loop={true} startOnVisible={true} />
                                </div>
                            </ParallaxCard>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About2;