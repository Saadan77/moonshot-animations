"use client";

import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

export default function Testimonials() {
    const testimonials = [
        {
            name: 'Adam Barron',
            designation: 'President, Newzky Jsc',
            quote:
                '"Tech With Moonshot strategists guided us along a clear path to digital success. Their product owner crafted a detailed plan with remarkable performance."',
            src: '/images/testimonial-image.png',
        },
        {
            name: 'Sofia Martinez',
            designation: 'Head of Product, VeloPay',
            quote:
                '"Their team embedded seamlessly with ours, simplifying roadmaps and shipping on time. The results exceeded our projections and expectations."',
            src: '/images/testimonial-image.png',
        },
        {
            name: 'James Patel',
            designation: 'CTO, Nimbus Cloudware',
            quote:
                '"From UX audits to production rollout, every step felt intentional. The collaboration unlocked speed without sacrificing quality."',
            src: '/images/testimonial-image.png',
        },
    ];

    return (
        <section
            className="relative bg-[#00060B] mt-60 mb-30"
            style={{ fontFamily: 'var(--font-sora), sans-serif' }}
        >
            {/* DottedMap Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0" />
                {/* <DottedMap markers={markers} /> */}
                <img src="/images/testimonials-map.png" alt="Dotted Map" className="w-full h-full object-cover" />
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
    );
}