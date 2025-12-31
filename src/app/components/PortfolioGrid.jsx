"use client";

import { ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'wouter';

const PortfolioGrid = () => {
    const [activeTab, setActiveTab] = useState('all');

    const portfolioItems = [
        {
            id: 1,
            title: 'cogni.wave',
            category: 'ui-ux',
            type: 'image',
            src: '/images/portfolio-page/projects/cogni-wave.mp4',
            bg: '/images/portfolio-page/portfolio-cards-bg/bg-1.png',
            isVideo: true,
        },
        {
            id: 2,
            title: 'Arching',
            category: 'branding',
            type: 'image',
            src: '/images/portfolio-page/projects/archin.png',
            bg: '/images/portfolio-page/portfolio-cards-bg/bg-2.png',
            isVideo: false,
        },
        {
            id: 3,
            title: 'Yuingair',
            category: 'motion',
            type: 'image',
            src: '/images/portfolio-page/projects/yuingair.png',
            bg: '',
            isVideo: false,
        },
        {
            id: 4,
            title: 'Lime Armadillo',
            category: 'mobile-app',
            type: 'video',
            src: '/images/portfolio-page/projects/lime.mp4',
            bg: '/images/portfolio-page/portfolio-cards-bg/bg-4.png',
            isVideo: true,
        },
        {
            id: 5,
            title: 'Netomi',
            category: 'ui-ux',
            type: 'image',
            src: '/images/portfolio-page/projects/netomi-2.png',
            bg: '/images/portfolio-page/portfolio-cards-bg/bg-5.png',
            isVideo: false,
        },
        {
            id: 6,
            title: 'Visio AI',
            category: 'branding',
            type: 'image',
            src: '/images/portfolio-page/projects/visio.png',
            bg: '/images/portfolio-page/portfolio-cards-bg/bg-6.png',
            isVideo: false,
        },
    ];

    const tabs = [
        { label: 'All', value: 'all' },
        { label: 'Mobile Application', value: 'mobile-app' },
        { label: 'UI/UX', value: 'ui-ux' },
        { label: 'Branding', value: 'branding' },
        { label: 'Web Development', value: 'web-development' },
        { label: 'Animations', value: 'animations' },
    ];

    const filteredItems = activeTab === 'all'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeTab);

    return (
        <div className="min-h-screen bg-[#00050a] py-16 lg:px-12">
            <div className="max-w-[95%] mx-auto">
                {/* Header Section */}
                <div className="mb-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                    {/* Filter Tabs */}
                    <div className="flex flex-col items-end gap-4">
                        <div className="flex flex-wrap gap-6 justify-end">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.value}
                                    onClick={() => setActiveTab(tab.value)}
                                    className={`relative z-10 px-12 py-4 rounded-full text-lg transition-all ${activeTab === tab.value
                                        ? 'bg-[#D42290] text-white'
                                        : 'bg-[#041426] text-white hover:bg-[#D42290]'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-md:gap-24">
                    {filteredItems.map((item, index) => (
                        <div
                            key={item.id}
                            className={`bg-black p-30 max-sm:p-5 rounded-4xl relative group h-screen ${item.isVideo ? 'col-span-1 lg:col-span-2' : 'col-span-1'
                                }`}
                        >
                            {item.bg && (
                                <div
                                    className={`rounded-3xl absolute inset-0 ${item.isVideo ? 'opacity-100' : 'opacity-30'} bg-cover bg-center bg-no-repeat`}
                                    style={{
                                        backgroundImage: `url(${item.bg})`,
                                    }}
                                />
                            )}

                            {item.isVideo ? (
                                <video
                                    src={item.src}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className='relative z-10 w-full h-full object-cover rounded-4xl'
                                />
                            ) : (
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className={`relative z-10 w-full h-full object-cover rounded-4xl`}
                                />
                            )}
                            <h3 className="relative mt-10 -ml-20 max-md:ml-0 text-white text-5xl font-light tracking-tighter">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioGrid;
