"use client";

import { Tabs } from '@/components/ui/tabs';
import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

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

                {/* First Row - 3 Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    {/* Column 1: Section Label + Heading */}
                    <div className="space-y-6">
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

                    {/* Column 2: First Portfolio Image */}
                    <div className="rounded-3xl overflow-hidden">
                        <img
                            src="/images/portfolio/portfolio-1.png"
                            alt="Portfolio 1"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Column 3: Filter Tags */}
                    <div className="flex flex-col justify-start gap-3">
                        <Tags />
                    </div>
                </div>

                {/* Second Row - 2 Images Aligned to End */}
                <div className="flex flex-row max-sm:flex-col gap-8 mb-8 justify-end">
                    <img
                        src="/images/portfolio/portfolio-2.png"
                        alt="Portfolio 2"
                        className="h-1/2 object-contain"
                    />
                    <img
                        src="/images/portfolio/portfolio-3.png"
                        alt="Portfolio 3"
                        className="h-1/2 object-contain"
                    />
                </div>

                {/* Third Row - 2 Images with Space Between */}
                <div className="flex flex-row max-sm:flex-col gap-8 justify-between">
                    <img
                        src="/images/portfolio/portfolio-4.png"
                        alt="Portfolio 4"
                        className="h-1/2 object-cover"
                    />

                    <img
                        src="/images/portfolio/portfolio-5.png"
                        alt="Portfolio 5"
                        className="h-1/2 object-cover"
                    />
                </div>

            </div>
        </section>
    );
};

export default Portfolio;
