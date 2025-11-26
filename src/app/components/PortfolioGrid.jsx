"use client";

import React, { useState } from 'react';

const PortfolioGrid = () => {
    const [activeTab, setActiveTab] = useState('all');

    const portfolioItems = [
        {
            id: 1,
            title: 'cogni.wave',
            category: 'ui-ux',
            type: 'image',
            src: '/images/portfolio-page/projects/cogni-wave.mp4',
            isVideo: true,
        },
        {
            id: 2,
            title: 'Arching',
            category: 'branding',
            type: 'image',
            src: '/images/portfolio-page/projects/archin.png',
            isVideo: false,
        },
        {
            id: 3,
            title: 'Yuingair',
            category: 'motion',
            type: 'image',
            src: '/images/portfolio-page/projects/yuingair.png',
            isVideo: false,
        },
        {
            id: 4,
            title: 'Lime',
            category: 'mobile-app',
            type: 'video',
            src: '/images/portfolio-page/projects/lime.mp4',
            isVideo: true,
        },
        {
            id: 5,
            title: 'Netomi',
            category: 'ui-ux',
            type: 'image',
            src: '/images/portfolio-page/projects/netomi.png',
            isVideo: false,
        },
        {
            id: 6,
            title: 'Visio',
            category: 'branding',
            type: 'image',
            src: '/images/portfolio-page/projects/visio.png',
            isVideo: false,
        },
    ];

    const tabs = [
        { label: 'All Services', value: 'all' },
        { label: 'UI/UX', value: 'ui-ux' },
        { label: 'Branding', value: 'branding' },
        { label: 'Motion', value: 'motion' },
        { label: 'Mobile App', value: 'mobile-app' },
    ];

    const filteredItems = activeTab === 'all' 
        ? portfolioItems 
        : portfolioItems.filter(item => item.category === activeTab);

    return (
        <div className="min-h-screen bg-black py-16 px-6 lg:px-12">
            <div className="max-w-[90%] mx-auto">
                {/* Header Section */}
                <div className="mb-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                    {/* Filter Tabs */}
                    <div className="flex flex-col items-end gap-4">
                        <div className="flex flex-wrap gap-3 justify-end">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.value}
                                    onClick={() => setActiveTab(tab.value)}
                                    className={`relative z-10 px-12 py-4 rounded-full text-lg transition-all ${
                                        activeTab === tab.value
                                            ? 'bg-[#FA2889] text-white'
                                            : 'bg-[#041426] text-white hover:bg-[#FA2889]'
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className={`p-25 rounded-3xl overflow-hidden relative group h-screen ${
                                item.isVideo ? 'col-span-1 lg:col-span-2' : 'col-span-1'
                            }`}
                            style={{
                                backgroundImage: 'url(/images/portfolio-page/portfolio-cards-bg.png)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            {item.isVideo ? (
                                <video
                                    src={item.src}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover rounded-4xl"
                                    data-smoother-ignore
                                />
                            ) : (
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className="w-full h-full object-cover rounded-4xl"
                                    data-smoother-ignore
                                />
                            )}
                            <div className="absolute bottom-6 left-6">
                                <h3 className="text-white text-2xl font-light">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioGrid;
