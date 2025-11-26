"use client";

import React from 'react';
import Navbar from '../Navbar';
import { AuroraText } from '@/components/ui/aurora-text';
import ShinyText from '@/components/lightswind/shiny-text'
import { ChevronDown } from 'lucide-react';

const socials = [
    {
        key: 'facebook',
        label: 'Facebook',
        char: 'f',
        href: '#',
        // Gradient that fills upward on hover
        gradient: 'bg-gradient-to-tr from-[#2563EB] via-[#3B82F6] to-[#93C5FD]',
    },
    {
        key: 'instagram',
        label: 'Instagram',
        char: '@',
        href: '#',
        gradient: 'bg-[linear-gradient(135deg,#FF8A00_0%,#E52E71_50%,#9B00FF_100%)]',
    },
    {
        key: 'x',
        label: 'X (Twitter)',
        char: '𝕏',
        href: '#',
        gradient: 'bg-gradient-to-br from-[#0EA5E9] via-[#2563EB] to-[#1E3A8A]',
    },
    {
        key: 'linkedin',
        label: 'LinkedIn',
        char: 'in',
        href: '#',
        gradient: 'bg-gradient-to-tr from-[#0A66C2] via-[#2A7BCB] to-[#60A5FA]',
    },
];

const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <section className="relative w-full z-50 bg-black/80 rounded-b-[64px] overflow-hidden">
            {/* Navbar */}
            <Navbar onMenuStateChange={setIsMenuOpen} />

            {/* Hero Content */}
            <div className="relative min-h-screen flex items-center justify-center pt-30 overflow-visible">
                {/* Decorative Labels */}
                <div className="absolute top-[20%] left-16 max-sm:hidden">
                    <p style={{ fontFamily: 'var(--font-poppins), sans-serif' }} className="text-lg text-[#FFFFFF99]">
                        (creative)
                    </p>
                </div>
                <div className="absolute top-[20%] right-16 max-sm:hidden">
                    <p style={{ fontFamily: 'var(--font-poppins), sans-serif' }} className="text-lg text-[#FFFFFF99]">
                        (agency)
                    </p>
                </div>

                {/* Main Content Container */}
                <div className="mt-[50px] z-10 w-full flex flex-col justify-center items-center max-sm:items-start max-w-[75%] overflow-visible">
                    <div className='hidden lg:block w-full relative'>
                        {/* Decorative Lines */}
                        <div className="max-md:hidden block">
                            {[
                                '15%',
                                '30%',
                                '45%',
                                '60%',
                                '75%',
                                '90%'
                            ].map((left) => (
                                <div
                                    key={left}
                                    style={{ left }}
                                    className="absolute top-0 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 pointer-events-none z-50"
                                >
                                    <div
                                        className="w-px h-screen"
                                        style={{
                                            background:
                                                'linear-gradient(to bottom, rgba(187,187,187,0) 0%, rgba(187,187,187,0.12) 12%, rgba(187,187,187,0.12) 88%, rgba(187,187,187,0) 100%)'
                                        }}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Left Side - Digital Text */}
                        <div className='text-[220px] max-xl:text-[150px] max-md:text-[100px] max-sm:text-[80px] leading-none text-white'>
                            <div className="text-left max-md:text-center max-sm:mb-5 relative z-10">
                                <h1
                                    className="italic"
                                    style={{ fontFamily: 'var(--font-playfair), serif' }}
                                >
                                    Digital
                                </h1>
                            </div>

                            {/* Right Side - Experts Text */}
                            <div className="text-end max-sm:text-center">
                                <h1
                                    style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                                >
                                    <AuroraText colors={['#ffffff', '#d1bd73']}>
                                        Experts
                                    </AuroraText>
                                </h1>
                            </div>
                        </div>
                    </div>

                    {/* Video Container - Center (overflow visible) */}
                    <div className="-mt-[350px] max-md:mt-0 relative w-[70%] max-sm:w-full overflow-visible">
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
                            <div
                                className="w-[600px] h-[800px] rounded-full blur-[120px] opacity-80"
                                style={{
                                    background: 'linear-gradient(125.65deg, rgba(40, 100, 255, 0.6) 15.91%, rgba(250, 40, 137, 0.6) 52.98%, rgba(35, 141, 250, 0.6) 73.58%, rgba(62, 95, 249, 0.6) 107.45%)'
                                }}
                            />
                        </div>
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-contain"
                            style={{
                                mixBlendMode: 'screen',
                            }}
                        >
                            <source src="/videos/hero/service-video.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>

                {/* Services Text - Right Bottom */}
                <div className="max-md:hidden block absolute right-12 top-[55%] max-2xl:top-[70%] text-right z-50">
                    <p style={{ fontFamily: 'var(--font-sora), sans-serif' }} className="text-gray-600 text-2xl max-xl:text-xl leading-relaxed transition-colors duration-300">
                        <span className='text-gray-600 hover:text-white hover:underline'>Branding</span> / <span className='hover:underline text-gray-600 hover:text-white'>Mobile Apps</span>
                        <br />
                        / <span className='text-gray-600 hover:text-white hover:underline'>Graphic</span> / <span className='hover:underline text-gray-600 hover:text-white'>UI/UX</span>
                    </p>
                </div>
            </div>

            {/* Social Media Icons - Left Side */}
            <div className={`max-sm:hidden absolute left-12 max-lg:left-6 pl-3 top-[40%] flex flex-col gap-3 transition-all duration-300 ${isMenuOpen ? 'z-0' : 'z-50'
                }`}>
                {socials.map((s) => (
                    <a
                        key={s.key}
                        href={s.href}
                        aria-label={s.label}
                        className={`
                        group relative w-15 h-15 rounded-full
                        flex items-center justify-center text-xs font-semibold
                        bg-gray-800/80 backdrop-blur
                        text-white transition-colors duration-300
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40
                        overflow-hidden
                        `}
                    >
                        {/* Animated gradient fill layer (hidden until hover) */}
                        <span
                            aria-hidden="true"
                            className={`
                                absolute left-0 top-full w-full h-full rounded-full
                                ${s.gradient}
                                transition-all duration-500 ease-out
                                group-hover:top-0
                                group-active:top-0
                                will-change:top
                            `}
                        />
                        {/* Shine sweep */}
                        {/* <span
                            aria-hidden="true"
                            className="
                                pointer-events-none absolute inset-0
                                before:absolute before:top-0 before:-left-full before:h-full before:w-[60%]
                                before:bg-linear-to-r before:from-transparent before:via-white/25 before:to-transparent
                                before:skew-x-30
                                before:transition-transform before:duration-900
                                group-hover:before:translate-x-[260%]
                            "
                        /> */}
                        {/* Glyph */}
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                            {s.char}
                        </span>
                    </a>
                ))}
                {/* Reduced motion: users preferring reduced motion see instant fill (optional) */}
                <style jsx>{`
                    @media (prefers-reduced-motion: reduce) {
                    .group span:first-child {
                        transition: none;
                    }
                    .group:hover span:first-child {
                        top: 0;
                    }
                    .group:hover .relative.z-10 {
                        transition: none;
                    }
                    }
                `}</style>
            </div>

            {/* Bottom div */}
            <div className="relative z-50 w-full max-sm:py-4 max-sm:min-h-0 min-h-[200px] max-sm:-mt-[100px]">
                {/* Background gradient */}
                <div className="mt-[290px] absolute inset-0 flex items-center justify-center pointer-events-none z-50">
                    <div
                        className="w-screen h-[200px] rounded-full blur-[120px] opacity-80"
                        style={{
                            background: 'linear-gradient(119.09deg, #ff83bc 14.54%, #ff83bc 41.09%, rgba(35, 141, 250, 0.8) 55.83%, rgba(62, 95, 249, 0.8) 80.08%), linear-gradient(119.09deg, rgba(57, 40, 255, 0.8) 14.54%, rgba(250, 40, 137, 0.8) 41.09%, rgba(35, 141, 250, 0.8) 55.83%, rgba(62, 95, 249, 0.8) 80.08%)'

                        }}
                    />
                </div>

                {/* Bottom large background word/image */}
                <img
                    src="/images/hero/moonshot-tech.png"
                    alt="Unique typography"
                    className="absolute inset-0 w-full h-full object-contain opacity-5 pointer-events-none"
                    draggable={false}
                />

                {/* Content Container */}
                <div className="relative flex justify-between items-center px-12 max-sm:px-6 py-8 gap-8">

                    {/* Bottom Left Scroll Text */}
                    <div className="flex justify-center items-center gap-4">
                        <p style={{ fontFamily: 'var(--font-sora), sans-serif' }} className="text-md max-sm:text-sm text-white text-nowrap">(Scroll Down)</p>
                    </div>

                    {/* Center Button */}
                    <div className='bg-white/10 rounded-[133px] py-2 px-10 hover:scale-105 transition-transform duration-300 flex justify-center items-center gap-4 cursor-pointer'>
                        <ChevronDown className="text-white w-8 h-8" />
                    </div>

                    {/* Bottom Right Scroll Indicator */}
                    <div className="flex justify-center items-center gap-4 text-nowrap">
                        <p style={{ fontFamily: 'var(--font-sora), sans-serif' }} className="text-xs text-gray-500 leading-relaxed">
                            <ShinyText
                                size='sm'
                                baseColor="rgba(255, 255, 255, 1)"
                                shineColor="rgb(220,220,220)"
                                speed={5}
                            >Let's explore
                                <br />
                                Moonshot Tech
                            </ShinyText>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;