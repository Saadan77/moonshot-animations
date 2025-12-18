"use client";

import React, { useEffect, useRef, useState } from 'react';

const ExpandableSpan = ({ children }) => {
    const spanRef = useRef(null);
    const [targetWidth, setTargetWidth] = useState(0);

    useEffect(() => {
        if (spanRef.current) {
            spanRef.current.style.width = 'auto';
            const measuredWidth = spanRef.current.offsetWidth;

            setTargetWidth(measuredWidth);
            spanRef.current.style.width = '0px';
        }
    }, [children]);

    return (
        <span
            ref={spanRef}
            className="inline-block overflow-hidden align-bottom opacity-100"
            style={{
                width: `calc(var(--reveal-progress, 0) * ${targetWidth}px)`,
                height: 'auto',
                transition: 'width 0.1s linear'
            }}
        >
            {children}
        </span>
    );
};

const ScrollFillText = ({ children, className = "" }) => {
    const containerRef = useRef(null);
    const overlayRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current || !overlayRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            let progress = (windowHeight - rect.top) / (windowHeight * 0.75);

            progress = Math.max(0, Math.min(1, progress));

            const percentageToHide = (1 - progress) * 100;
            overlayRef.current.style.clipPath = `inset(0% ${percentageToHide}% 0% 0%)`;

            containerRef.current.style.setProperty('--reveal-progress', progress);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            ref={containerRef}
            className={`relative inline-block leading-none ${className}`}
            style={{ '--reveal-progress': 0 }}
        >
            <span className="relative z-0 text-white whitespace-nowrap">
                {children}
            </span>

            <span
                ref={overlayRef}
                className="absolute top-0 left-0 z-10 text-white bg-black w-full h-full whitespace-nowrap"
                style={{
                    clipPath: 'inset(0% 100% 0% 0%)',
                    boxDecorationBreak: 'clone',
                    WebkitBoxDecorationBreak: 'clone'
                }}
            >
                {children}
            </span>
        </div>
    );
};

export default function Brand() {
    return (
        <section id="brand-section" className="bg-[#34A5DC] py-52 relative z-50 min-h-screen flex items-center justify-center overflow-x-hidden">
            <h2 className="z-20 text-[260px] max-lg:text-[120px] max-sm:text-[60px] text-center tracking-[-3%] leading-[0.8] md:leading-[0.85] uppercase font-semibold font-sora flex flex-col items-center gap-2">

                <ScrollFillText>WE</ScrollFillText>
                <ScrollFillText>MAKE</ScrollFillText>
                <ScrollFillText>YOUR</ScrollFillText>
                <ScrollFillText>BRAND</ScrollFillText>
                <div className='hidden lg:block'>
                    <ScrollFillText>
                        SHI
                        <ExpandableSpan>NNNN</ExpandableSpan>
                        E!
                    </ScrollFillText>
                </div>
                <div className='block lg:hidden'>
                    <ScrollFillText>SHINE</ScrollFillText>
                </div>
            </h2>
        </section>
    );
}