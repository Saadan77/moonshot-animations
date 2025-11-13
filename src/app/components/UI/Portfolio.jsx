"use client";

import { Tabs } from '@/components/ui/tabs';
import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';

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
        <div className="relative flex flex-col max-w-xl mx-auto w-3/4">
            <p className='w-full font-sora mb-5 text-end text-white/70'>
                (<span className='text-white'>Filter</span> By Tag)
            </p>
            <Tabs tabs={tabs} />
        </div>
    );
}

const Portfolio = () => {
    return (
        <section className="relative text-white py-24 bg-black/90 relative z-50">
            <div className="max-w-[90%] mx-auto px-6 lg:px-8">

                {/* 3 Column Grid - 3 Rows */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Row 1, Col 1: Section Label + Heading */}
                    <div className="space-y-6 col-span-1">
                        <h2 className="text-[#808080] text-[20px]">06 — Portfolio</h2>

                        <h2 className="text-7xl lg:text-8xl max-sm:text-4xl block font-normal" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
                            Explore <br /> Our <span
                                className="italic"
                                style={{ fontFamily: 'var(--font-playfair), serif' }}
                            >
                                Works
                            </span>
                        </h2>

                        <button className="flex items-center gap-2 bg-[#1E293B] text-white px-6 py-3 rounded-full hover:bg-[#2D3B52] transition-colors">
                            <span style={{ fontFamily: 'var(--font-sora), sans-serif' }}>Explore All Works</span>
                            <div className="bg-[#FA2889] rounded-full p-1">
                                <GoArrowUpRight className="w-4 h-4" />
                            </div>
                        </button>
                    </div>

                    {/* Row 1, Col 2: First Portfolio Image */}
                    <DirectionAwareHover 
                        imageUrl="/images/portfolio/portfolio-1.png"
                        className="rounded-3xl w-full h-full col-span-1"
                    >
                        <div className="space-y-2">
                            <p className="font-bold text-xl">Brand Identity</p>
                            <p className="font-normal text-sm">Creative Design Studio</p>
                        </div>
                    </DirectionAwareHover>

                    {/* Row 1, Col 3: Filter Tags */}
                    <div className="flex flex-col justify-start gap-3 col-span-1">
                        <Tags />
                    </div>

                    
                    {/* Row 2, Col 3: Empty Spacer */}
                    <div className="col-span-1"></div>
                    
                    {/* Row 2, Col 1: Portfolio Image 2 */}
                    <DirectionAwareHover 
                        imageUrl="/images/portfolio/portfolio-2.png"
                        className="rounded-3xl w-full h-full col-span-1"
                    >
                        <div className="space-y-2">
                            <p className="font-bold text-xl">Mobile App UI</p>
                            <p className="font-normal text-sm">E-Commerce Platform</p>
                        </div>
                    </DirectionAwareHover>


                    {/* Row 2, Col 2: Portfolio Image 3 */}
                    <DirectionAwareHover 
                        imageUrl="/images/portfolio/portfolio-3.png"
                        className="rounded-3xl w-full h-full col-span-1"
                    >
                        <div className="space-y-2">
                            <p className="font-bold text-xl">Web Design</p>
                            <p className="font-normal text-sm">Tech Startup Landing</p>
                        </div>
                    </DirectionAwareHover>

                    {/* Row 3, Col 1: Portfolio Image 4 */}
                    <DirectionAwareHover 
                        imageUrl="/images/portfolio/portfolio-4.png"
                        className="rounded-3xl w-full h-full col-span-1"
                    >
                        <div className="space-y-2">
                            <p className="font-bold text-xl">Motion Graphics</p>
                            <p className="font-normal text-sm">Product Animation</p>
                        </div>
                    </DirectionAwareHover>

                    
                    {/* Row 3, Col 2: Empty Spacer */}
                    <div className="col-span-1"></div>

                    {/* Row 3, Col 2: Portfolio Image 5 */}
                    <DirectionAwareHover 
                        imageUrl="/images/portfolio/portfolio-5.png"
                        className="rounded-3xl w-full h-full col-span-1"
                    >
                        <div className="space-y-2">
                            <p className="font-bold text-xl">UX/UI Design</p>
                            <p className="font-normal text-sm">Financial Dashboard</p>
                        </div>
                    </DirectionAwareHover>
                </div>

            </div>
        </section>
    );
};

export default Portfolio;
