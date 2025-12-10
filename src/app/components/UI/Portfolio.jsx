"use client";

import { Tabs } from '@/components/ui/tabs';
import React, { useEffect, useRef, useState } from 'react';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';
import { ArrowRight } from 'lucide-react';

export function Tags() {
    const tabs = [
        {
            title: "UI/UX",
            value: "ui-ux",
        },
        {
            title: "Branding",
            value: "branding",
        },
        {
            title: "Motion",
            value: "motion",
        },
        {
            title: "Mobile Applications",
            value: "mobile-applications",
        },

        {
            title: "All Services",
            value: "all-services",
        },
    ];

    return (
        <div className="relative flex flex-col max-w-xl ml-auto w-5/6">
            <p className='text-lg font-sora mb-8 text-end text-white/70'>
                (<span className='text-white'>Filter</span> By Tag)
            </p>
            <Tabs tabs={tabs} />
        </div>
    );
}

const Portfolio = () => {
    const containerRef = useRef(null);
    const innerRef = useRef(null);
    const placeholderRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const brandEl = document.getElementById('brand-section');
        const container = containerRef.current;
        const inner = innerRef.current;
        const placeholder = placeholderRef.current;
        if (!brandEl || !container || !inner || !placeholder) return;

        let currentlySticky = false;
        let lastScrollY = window.scrollY;
        let scrollingDown = true;

        let storedWidth = null;
        const setFixed = () => {
            const contRect = container.getBoundingClientRect();
            const innerRect = inner.getBoundingClientRect();
            // keep the inner element visually where it currently is in the viewport
            const currentTop = innerRect.top; // distance from viewport top
            const currentLeft = innerRect.left;
            const currentWidth = innerRect.width;

            storedWidth = currentWidth;

            placeholder.style.display = 'block';
            placeholder.style.height = `${innerRect.height}px`;
            inner.style.position = 'fixed';
            inner.style.top = `${currentTop}px`;
            inner.style.left = `${currentLeft}px`;
            inner.style.width = `${currentWidth}px`;
            inner.style.zIndex = '70';
            currentlySticky = true;
            setIsSticky(true);
        };

        const unsetFixed = () => {
            placeholder.style.display = 'none';
            placeholder.style.height = '0px';
            inner.style.position = '';
            inner.style.top = '';
            inner.style.left = '';
            inner.style.width = '';
            inner.style.zIndex = '';
            currentlySticky = false;
            setIsSticky(false);
        };

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            scrollingDown = currentScrollY > lastScrollY;
            lastScrollY = currentScrollY;
        };

        const observer = new IntersectionObserver((entries) => {
            const ent = entries[0];
            if (ent.isIntersecting) {
                // Brand is intersecting — only stick if scrolling down
                if (scrollingDown) {
                    setFixed();
                } else {
                    // Scrolling up while Brand is visible — unset
                    unsetFixed();
                }
            } else {
                // Brand not intersecting — always unset
                unsetFixed();
            }
        }, { threshold: 0 });

        observer.observe(brandEl);
        window.addEventListener('scroll', handleScroll, { passive: true });

        const onResize = () => {
            if (!currentlySticky) return;
            // Prefer recalculating width as 90% of viewport (matches `max-w-[90%]`), then center
            const newWidth = Math.round(window.innerWidth * 0.9);
            const newLeft = Math.round((window.innerWidth - newWidth) / 2);
            inner.style.width = `${newWidth}px`;
            inner.style.left = `${newLeft}px`;
        };

        window.addEventListener('resize', onResize);

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', onResize);
            unsetFixed();
        };
    }, []);

    return (
        <section ref={containerRef} className="relative text-white py-52 bg-[#0a0f14] z-50">
            <div ref={placeholderRef} style={{ display: 'none', height: 0 }} />
            <div className="max-w-[90%] mx-auto px-4" ref={innerRef}>
                {/* 3 Column Grid - 3 Rows */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Row 1, Col 1: Section Label + Heading */}
                    <div className="flex flex-col justify-between space-y-6">
                        <div className='space-y-6'>
                            <h2 className="text-[#808080] text-[20px]">06 — Portfolio</h2>

                            <h2 className="text-4xl lg:text-7xl max-sm:text-4xl block font-normal" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
                                Explore <br /> Our <span
                                    className="italic"
                                    style={{ fontFamily: 'var(--font-playfair), serif' }}
                                >
                                    Works
                                </span>
                            </h2>
                        </div>

                        <button className="max-w-fit group flex items-center gap-2 bg-[#041426] hover:bg-[#FA2889] border border-[#979797] text-white pl-8 pr-1 py-2 rounded-full transition-colors">
                            <span className='text-[20px] font-light' style={{ fontFamily: 'var(--font-sora), sans-serif' }}>Explore All Works</span>
                            <div className="bg-[#FA2889] group-hover:bg-white group-hover:text-black rounded-full p-3">
                                <ArrowRight className="w-6 h-6" />
                            </div>
                        </button>
                    </div>

                    {/* Row 1, Col 2: First Portfolio Image */}
                    <DirectionAwareHover
                        imageUrl="/images/portfolio/portfolio-1.png"
                        className="w-full h-full"
                        heading={<p>Branding</p>}
                        number={<p>01.</p>}
                    >
                        <div className="text-lg space-y-2 font-poppins font-light text-white/80">
                            <p>#BuildYourBrand</p>
                            <p>#brandwithpurpose</p>
                        </div>
                    </DirectionAwareHover>

                    {/* Row 1, Col 3: Filter Tags */}
                    <div className="flex flex-col justify-start gap-3">
                        <Tags />
                    </div>


                    {/* Row 2, Col 3: Empty Spacer */}
                    <div className="block max-lg:hidden lg:col-span-1"></div>

                    {/* Row 2, Col 1: Portfolio Image 2 */}
                    <DirectionAwareHover
                        imageUrl="/images/portfolio/portfolio-2.png"
                        className="w-full h-full"
                        heading={<p>UI/UX</p>}
                        number={<p>02.</p>}
                    >
                        <div className="text-lg space-y-2 font-poppins font-light text-white/80">
                            <p>#Webdesign</p>
                            <p>#Creativewebsolutions</p>
                        </div>
                    </DirectionAwareHover>


                    {/* Row 2, Col 2: Portfolio Image 3 */}
                    <DirectionAwareHover
                        imageUrl="/images/portfolio/portfolio-3.png"
                        className="w-full h-full"
                        heading={<p>Mobile App</p>}
                        number={<p>03.</p>}
                    >
                        <div className="text-lg space-y-2 font-poppins font-light text-white/80">
                            <p>#Appdesign</p>
                            <p>#Mobileapps</p>
                        </div>
                    </DirectionAwareHover>

                    {/* Row 3, Col 1: Portfolio Image 4 */}
                    <DirectionAwareHover
                        imageUrl="/images/portfolio/portfolio-4.png"
                        className="w-full h-full"
                        heading={<p>Animations</p>}
                        number={<p>04.</p>}
                    >
                        <div className="text-lg space-y-2 font-poppins font-light text-white/80">
                            <p>#Creativemotion</p>
                            <p>#Animateddesign</p>
                        </div>
                    </DirectionAwareHover>


                    {/* Row 3, Col 2: Empty Spacer */}
                    <div className="block max-lg:hidden lg:col-span-1"></div>

                    {/* Row 3, Col 2: Portfolio Image 5 */}
                    <DirectionAwareHover
                        imageUrl="/images/portfolio/portfolio-5.png"
                        className="w-full h-full"
                        heading={<p>Logo Design</p>}
                        number={<p>05.</p>}
                    >
                        <div className="text-lg space-y-2 font-poppins font-light text-white/80">
                            <p>#Logodesign</p>
                            <p>#Brandidentity</p>
                        </div>
                    </DirectionAwareHover>
                </div>

            </div>
        </section>
    );
};

export default Portfolio;
