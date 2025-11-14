"use client";

import React from 'react';
import Navbar from '../Navbar';
import { AuroraText } from '@/components/ui/aurora-text';

const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-visible bg-black z-50">            
            {/* Navbar */}
            <Navbar />

            {/* Hero Content */}
            <div className="relative h-screen flex items-center justify-center pt-20 overflow-visible">
                {/* Main Content Container */}
                <div className="z-10 w-full flex flex-col justify-center items-center max-w-[70%] overflow-visible">
                    <div className='w-full'>
                        {/* Left Side - Digital Text */}
                        <div className="text-left">
                            <p style={{ fontFamily: 'var(--font-sora), sans-serif' }} className="text-sm">(creative)</p>
                            <h1
                                className="text-[180px] leading-none italic text-white"
                                style={{ fontFamily: 'var(--font-playfair), serif' }}
                            >
                                Digital
                            </h1>
                        </div>

                        {/* Right Side - Experts Text */}
                        <div className="text-right">
                            <h1
                                className="text-[180px] leading-none text-white"
                                style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                            >
                                <AuroraText colors={['#ffffff', '#d1bd73']}>
                                    Experts
                                </AuroraText>
                            </h1>
                        </div>
                    </div>

                    {/* Video Container - Center (overflow visible) */}
                    <div className="-mt-[250px] relative w-[55%] overflow-visible">
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
                            <div
                                className="w-[900px] h-[900px] rounded-full blur-[120px] opacity-80"
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
                <div className="absolute right-12 bottom-50 text-right">
                    <p style={{ fontFamily: 'var(--font-sora), sans-serif' }} className="text-lg text-gray-600 leading-relaxed">
                        Branding / <span className="text-white">Mobile Apps</span>
                        <br />
                        / Graphic / UI/UX
                    </p>
                </div>

                {/* Bottom Right Scroll Indicator */}
                <div className="absolute bottom-12 right-12 text-right">
                    <p style={{ fontFamily: 'var(--font-sora), sans-serif' }} className="text-xs text-gray-500 mb-2 leading-relaxed">
                        Let's explore
                        <br />
                        Moonshot Tech
                    </p>
                    <div className="flex justify-end mt-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                            <path d="M12 5v14M12 19l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                {/* Bottom Left Scroll Text */}
                <div className="absolute bottom-12 left-12">
                    <p style={{ fontFamily: 'var(--font-sora), sans-serif' }} className="text-xs text-gray-500">(Scroll Down)</p>
                </div>
            </div>

            {/* Social Media Icons - Left Side */}
            <div className="absolute left-12 bottom-[40%] flex flex-col gap-3 z-20">
                <a href="#" className="w-9 h-9 rounded-full bg-gray-800/80 backdrop-blur flex items-center justify-center text-white hover:bg-gray-700 transition text-xs">
                    f
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-gray-800/80 backdrop-blur flex items-center justify-center text-white hover:bg-gray-700 transition text-xs">
                    @
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-gray-800/80 backdrop-blur flex items-center justify-center text-white hover:bg-gray-700 transition text-xs">
                    𝕏
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-gray-800/80 backdrop-blur flex items-center justify-center text-white hover:bg-gray-700 transition text-xs">
                    in
                </a>
            </div>
        </div>
    );
};

export default Hero;