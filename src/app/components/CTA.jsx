"use client";

import LiquidEther from "@/components/LiquidEther";
import Image from "next/image";
import { useEffect, useRef } from 'react';

export default function CTA() {
    const smokeRef = useRef(null);

    useEffect(() => {
        const container = smokeRef.current;
        if (!container) return;

        function spawn(x, y) {
            const el = document.createElement('div');
            el.className = 'elem';
            el.style.left = `${x - 25}px`;
            el.style.top = `${y - 25}px`;
            container.appendChild(el);
            el.addEventListener('animationend', () => {
                if (el.parentNode) el.parentNode.removeChild(el);
            });
        }

        const interval = setInterval(() => {
            const rect = container.getBoundingClientRect();
            const x = Math.random() * rect.width;
            const y = Math.random() * rect.height;
            spawn(x, y);
            while (container.children.length > 30) {
                container.removeChild(container.firstChild);
            }
        }, 700);

        const onMove = (e) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            spawn(x, y);
        };

        window.addEventListener('mousemove', onMove);

        return () => {
            clearInterval(interval);
            window.removeEventListener('mousemove', onMove);
        };
    }, []);

    return (
        <section
            className="relative flex flex-col items-center justify-start overflow-hidden bg-[#00060B] pt-28 md:pt-36"
            style={{ fontFamily: 'var(--font-sora), sans-serif' }}
        >
            <div id="smoke-cta" ref={smokeRef}></div>
            <style dangerouslySetInnerHTML={{
                __html: `
                #smoke-cta {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    overflow: hidden;
                }

                #smoke-cta .elem {
                    position: absolute;
                    width: 50px;
                    height: 50px;
                    background: radial-gradient(circle,rgba(53, 160, 214, 0.14) 0%, rgba(0, 89, 255, 0) 80%);
                    pointer-events: none;
                    animation: ripple-cta 2s ease-out forwards;
                }

                @keyframes ripple-cta {
                    0% {
                        transform: scale(3) translateY(0);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(10) translateY(-10px);
                        opacity: 0;
                    }
                }
                `
            }} />
            {/* Left Gradient */}
            <div className="absolute -left-70 top-60 bottom-0 w-[600px] pointer-events-none">
                <div
                    className="w-2/3 h-1/3"
                    style={{
                        background: 'linear-gradient(119deg, rgba(255, 198, 40, 0.80) 14.54%, rgba(250, 40, 137, 0.80) 41.09%, rgba(35, 141, 250, 0.80) 55.83%, rgba(62, 95, 249, 0.80) 80.08%)',
                        filter: 'blur(150px)',
                    }}
                />
            </div>

            {/* Right Gradient */}
            <div className="absolute -right-100 top-200 bottom-0 w-[600px] pointer-events-none">
                <div
                    className="w-2/3 h-1/3"
                    style={{
                        background: 'linear-gradient(119deg, rgba(255, 198, 40, 0.80) 14.54%, rgba(250, 40, 137, 0.80) 41.09%, rgba(35, 141, 250, 0.80) 55.83%, rgba(62, 95, 249, 0.80) 80.08%)',
                        filter: 'blur(150px)',
                    }}
                />
            </div>

            {/* Heading */}
            <div className="text-center relative z-10">
                <p className="text-white/60 text-6xl mb-2 tracking-tight font-sora font-light">Let’s start</p>
                <h2 className="text-white text-9xl max-sm:text-5xl font-medium tracking-tight leading-tight">
                    <span className="block" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>Your <span className="italic" style={{ fontFamily: 'var(--font-playfair), serif' }}>Project</span></span>
                </h2>
            </div>

            <Image src="/images/elevate-icon.png" alt="Elevate Icon" width={100} height={100} className="w-[120px] relative z-10" data-smoother-ignore />

            {/* Video container with outline */}
            <div className="relative py-12 min-h-[80vh] md:min-h-[95vh] max-w-[35%] max-xl:max-w-[50%] max-sm:max-w-[75%] z-10 -mt-10 flex items-center justify-center gradient-border"
                style={{
                    borderRadius: "1333.3px",
                    mixBlendMode: 'screen',
                }}>
                <div className="flex flex-col items-center">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover rounded-full items-center overflow-visible"
                    >
                        <source src="/videos/cta-video.webm" type="video/webm" />
                    </video>


                    <p className="font-sora font-normal mt-12 text-center text-3xl max-sm:text-xl text-white/50">
                        Ready to <span className="text-white">elevate<br /> your brand?</span>
                    </p>
                </div>
            </div>

            {/* Small prompt + button */}
            <div className="-mt-16 max-sm:-mt-13 relative z-10 flex flex-col items-center">
                <button
                    type="button"
                    className="mt-6 h-18 w-18 max-sm:h-12 max-sm:w-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:scale-105 hover:rotate-270 transition"
                    aria-label="Start your project"
                >
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            {/* Bottom large background word/image */}
            <div data-smoother-ignore>
                <img
                    src="/images/cta-unique.png"
                    alt="Unique typography"
                    className="w-full h-auto object-contain opacity-40 -mt-36 max-sm:-mt-20"
                    draggable={false}
                />
            </div>

            {/* Bottom large gradient */}
            <div className="-mt-65 max-sm:-mt-40 relative w-screen inset-0 flex items-center justify-center pointer-events-none z-50">
                <div
                    className="w-[95%] h-[150px] rounded-t-full blur-[80px] in-out"
                    style={{
                        background:
                            "linear-gradient(119deg, rgba(57, 40, 255, 0.80) 14.54%, rgba(250, 40, 137, 0.80) 41.09%, rgba(35, 141, 250, 0.80) 55.83%, rgba(62, 95, 249, 0.80) 80.08%), linear-gradient(119deg, rgba(255, 198, 40, 0.80) 14.54%, rgba(250, 40, 137, 0.80) 41.09%, rgba(35, 141, 250, 0.80) 55.83%, rgba(62, 95, 249, 0.80) 80.08%)",
                        backgroundSize: '200% 100%, 200% 100%'
                    }}
                />
            </div>
        </section>
    );
};