"use client";

import ScrollReveal from '@/components/lightswind/scroll-reveal';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AboutUsCards from '../AboutUsCards';
import { ArrowRight } from 'lucide-react';

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

const AboutUs = () => {

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
        <section className="relative isolate w-full bg-[#00060b] text-white z-50">
            <div id="smoke" ref={smokeRef}></div>
            <style dangerouslySetInnerHTML={{
                __html: `
                #smoke {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    overflow: hidden;
                }

                .elem {
                    position: absolute;
                    width: 50px;
                    height: 50px;
                    background: radial-gradient(circle,rgba(53, 160, 214, 0.14) 0%, rgba(0, 89, 255, 0) 80%);
                    pointer-events: none;
                    animation: ripple 2s ease-out forwards;
                }

                @keyframes ripple {
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

            <div className="mx-auto max-w-[90%] px-6 pt-24 pb-56">
                <div className='pb-24 flex items-start max-md:flex-col'>
                    {/* Small "About Us" label */}
                    <div className="mr-60 max-sm:mr-30 flex items-center gap-3 text-sm text-white/80">
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
                            className="tracking-[-0.03em] font-normal"
                            style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                        >
                            <ScrollReveal enableBlur={false}>
                                Tech With Moonshot delivers smart digital design and strategy, navigating trends and metrics to craft powerful, tailored solutions for your brand.
                            </ScrollReveal>
                        </h2>

                        {/* CTA */}
                        <div className="mt-8">
                            <Link
                                href="#"
                                className="group border border-[#979797] inline-flex items-center gap-3 rounded-full bg-[#0F172A]/60 hover:bg-[#D42290] pr-1.5 pl-6 py-1.5 text-[15px] text-white/90 ring-1 ring-white/15 transition hover:ring-white/30"
                            >
                                <span className="relative top-[0.5px] font-sora text-[20px]">Learn More About</span>
                                <span className="grid place-items-center rounded-full bg-[#D42290] group-hover:bg-white p-3">
                                    <ArrowRight className="w-6 h-6 group-hover:text-black" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                <AboutUsCards />
            </div>
            {/* Glow ellipse below cards */}
            <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div
                        className="w-screen h-[100px] rounded-full blur-[120px] opacity-80 in-out"
                        style={{
                            background:
                                "linear-gradient(119.09deg, #4f00ff 14.54%, #FA28F2 41.09%, rgba(35, 141, 250, 0.8) 55.83%, rgba(62, 95, 249, 0.8) 80.08%), linear-gradient(119.09deg, rgba(57, 40, 255, 0.8) 14.54%, rgba(250, 40, 137, 0.8) 41.09%, rgba(35, 141, 250, 0.8) 55.83%, rgba(62, 95, 249, 0.8) 80.08%)",
                            backgroundSize: '200% 100%, 200% 100%'
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;