"use client";

import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import { DottedMap } from '@/components/ui/dotted-map';

const markers = [
    { lat: 40.7128, lng: -74.006, size: 0.3 }, // New York
    { lat: 34.0522, lng: -118.2437, size: 0.3 }, // Los Angeles
    { lat: 51.5074, lng: -0.1278, size: 0.3 }, // London
    { lat: -33.8688, lng: 151.2093, size: 0.3 }, // Sydney
    { lat: 48.8566, lng: 2.3522, size: 0.3 }, // Paris
    { lat: 35.6762, lng: 139.6503, size: 0.3 }, // Tokyo
    { lat: 55.7558, lng: 37.6176, size: 0.3 }, // Moscow
    { lat: 39.9042, lng: 116.4074, size: 0.3 }, // Beijing
    { lat: 28.6139, lng: 77.209, size: 0.3 }, // New Delhi
    { lat: -23.5505, lng: -46.6333, size: 0.3 }, // São Paulo
    { lat: 1.3521, lng: 103.8198, size: 0.3 }, // Singapore
    { lat: 25.2048, lng: 55.2708, size: 0.3 }, // Dubai
    { lat: 52.52, lng: 13.405, size: 0.3 }, // Berlin
    { lat: 19.4326, lng: -99.1332, size: 0.3 }, // Mexico City
    { lat: -26.2041, lng: 28.0473, size: 0.3 }, // Johannesburg
];

export default function Testimonials() {
    const testimonials = [
        {
            name: 'Adam Barron',
            designation: 'President, Newzky Jsc',
            quote:
                '"Tech With Moonshot strategists guided us along a clear path to digital success. Their product owner crafted a detailed plan with remarkable performance."',
            src: '/images/testimonial.png',
        },
        {
            name: 'Sofia Martinez',
            designation: 'Head of Product, VeloPay',
            quote:
                '"Their team embedded seamlessly with ours, simplifying roadmaps and shipping on time. The results exceeded our projections and expectations."',
            src: '/images/testimonial.png',
        },
        {
            name: 'James Patel',
            designation: 'CTO, Nimbus Cloudware',
            quote:
                '"From UX audits to production rollout, every step felt intentional. The collaboration unlocked speed without sacrificing quality."',
            src: '/images/testimonial.png',
        },
    ];

    return (
        <>
            <section
                className="relative bg-[#00060B] mt-50"
                style={{ fontFamily: 'var(--font-sora), sans-serif' }}
            >
                {/* DottedMap Background */}
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                    <div className="absolute inset-0" />
                    <DottedMap markers={markers} />
                </div>

                {/* Content */}
                <div className="relative z-10">
                    <AnimatedTestimonials
                        testimonials={testimonials}
                        autoplay
                        containerClass="mx-auto max-w-6xl px-6 py-24 md:py-28 lg:py-32"
                        nameClass="text-2xl font-semibold text-white/70"
                        designationClass="text-sm text-white/70"
                        quoteClass="mt-8 text-2xl leading-relaxed text-white/70"
                    />
                </div>
            </section>
        </>
    );
}