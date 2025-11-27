"use client";

import React from 'react';
import Navbar from '../Navbar';
import { AuroraText } from '@/components/ui/aurora-text';
import { ChevronDown } from 'lucide-react';

const socials = [
    {
        key: 'facebook',
        label: 'Facebook',
        char: 'f',
        href: '#',
        gradient: 'bg-gradient-to-tr from-[#2563EB] via-[#3B82F6] to-[#93C5FD]',
    },
    {
        key: 'instagram',
        label: 'Instagram',
        char: (
            <svg
                id="instagram"
                fill="#fff"
                viewBox="0 0 169.063 169.063"
                style={{ width: '15px', height: '15px' }}
            >
                <g>
                    <path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752c17.455,0,31.656,14.201,31.656,31.655V122.407z" />
                    <path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z" />
                    <path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78C135.661,29.421,132.821,28.251,129.921,28.251z" />
                </g>
            </svg>
        ),
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
        <section className="relative w-full z-50 bg-[#00060B] rounded-b-[64px] overflow-hidden max-h-[1240px]"
            style={{ backgroundImage: 'url("/images/hero-bg.png")' }}>
            {/* Navbar */}
            <Navbar onMenuStateChange={setIsMenuOpen} />

            {/* Hero Content */}
            <div className="relative min-h-screen flex items-center justify-center pt-30 overflow-visible">
                {/* Decorative Labels */}
                <div className="absolute top-[20%] left-16">
                    <p style={{ fontFamily: 'var(--font-poppins), sans-serif' }} className="text-lg font-normal text-[#FFFFFF99]">
                        (creative)
                    </p>
                </div>
                <div className="absolute top-[20%] right-16">
                    <p style={{ fontFamily: 'var(--font-poppins), sans-serif' }} className="text-lg font-normal text-[#FFFFFF99]">
                        (agency)
                    </p>
                </div>

                {/* Main Content Container */}
                <div className="mt-[50px] z-10 w-full flex flex-col justify-center items-center max-sm:items-start max-w-[75%] overflow-visible">
                    <div className='w-full relative'>
                        {/* Decorative Lines */}
                        <div className="max-md:hidden block">
                            {[
                                '-5%',
                                '15%',
                                '35%',
                                '60%',
                                '85%',
                                '105%'
                            ].map((left) => (
                                <div
                                    key={left}
                                    style={{ left }}
                                    className="absolute top-0 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 pointer-events-none z-50"
                                >
                                    <div
                                        className="w-px h-[150vh]"
                                        style={{
                                            background:
                                                'linear-gradient(to bottom, rgba(187,187,187,0) 0%, rgba(187,187,187,0.12) 12%, rgba(187,187,187,0.12) 88%, rgba(187,187,187,0) 100%)'
                                        }}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Left Side - Digital Text */}
                        <div className='leading-none text-white tracking-[-0.03em]'>
                            <div className="text-left max-md:text-center max-sm:mb-5 relative z-10">
                                <h1
                                    className="italic text-[220px] max-xl:text-[150px] max-md:text-[100px] max-sm:text-[80px] "
                                    style={{ fontFamily: 'var(--font-playfair), serif' }}
                                >
                                    Digital
                                </h1>
                            </div>

                            {/* Right Side - Experts Text */}
                            <div className="text-end max-sm:text-center">
                                <h1
                                    className="text-[200px] max-xl:text-[150px] max-md:text-[90px] max-sm:text-[60px]"
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
                            className="w-full h-full object-contain opacity-40"
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
            <div className={`max-sm:hidden absolute left-16 max-lg:left-6 pl-3 top-[40%] flex flex-col gap-3 transition-all duration-300 ${isMenuOpen ? 'z-0' : 'z-50'
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
                        {/* Glyph */}
                        <span className="relative text-[16px] z-10 transition-colors duration-300 group-hover:text-white">
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
            <div className="relative z-100 w-full max-sm:py-4 max-sm:min-h-0 min-h-[50px] -mt-[232px] max-sm:-mt-[150px]">
                {/* Bottom large background word/image */}
                <img
                    src="/images/hero/moonshot-tech.png"
                    alt="Unique typography"
                    className="absolute inset-0 w-full h-full object-contain opacity-5"
                    style={{ scale: "110%" }}
                />

                {/* Background gradient */}
                <div className="mt-[290px] absolute inset-0 flex items-center justify-center pointer-events-none z-50">
                    <div
                        className="w-screen h-[200px] rounded-full blur-[120px] opacity-80"
                        style={{
                            background: 'linear-gradient(119.09deg, #ff83bc 14.54%, #ff83bc 41.09%, rgba(35, 141, 250, 0.8) 55.83%, rgba(62, 95, 249, 0.8) 80.08%), linear-gradient(119.09deg, rgba(57, 40, 255, 0.8) 14.54%, rgba(250, 40, 137, 0.8) 41.09%, rgba(35, 141, 250, 0.8) 55.83%, rgba(62, 95, 249, 0.8) 80.08%)'

                        }}
                    />
                </div>

                {/* Content Container */}
                <div className="relative flex justify-between items-center max-sm:justify-center px-12 max-sm:px-6 py-20 gap-8">
                    {/* Bottom Left Scroll Text */}
                    <div className="flex justify-center items-center gap-4 max-sm:hidden">
                        <p style={{ fontFamily: 'var(--font-sora), sans-serif' }} className="text-md max-sm:text-sm text-white text-nowrap">(Scroll Down)</p>
                    </div>

                    {/* Center Button */}
                    <div className='bg-white/10 rounded-[133px] py-2 px-10 hover:scale-105 transition-transform duration-300 flex justify-center items-center gap-4 cursor-pointer'>
                        <ChevronDown className="text-white w-8 h-8" />
                    </div>

                    {/* Bottom Right Scroll Indicator */}
                    <div className="flex justify-center items-center text-nowrap max-sm:hidden">
                        <p style={{ fontFamily: 'var(--font-sora), sans-serif' }} className="text-right text-md leading-relaxed text-[#9DA1A7]">
                            Let's explore
                            <br />
                            <span className='text-white'>Moonshot Tech</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;