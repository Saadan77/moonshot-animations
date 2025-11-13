import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

export default function Testimonials() {
    const testimonials = [
        {
            name: 'Adam Barron',
            designation: 'President, Newzky Jsc',
            quote:
                '"Tech With Moonshot strategists guided us along a clear path to digital success. Their dedicated product owner crafted a detailed, data-driven plan, and the digital experts drove our remarkable performance."',
            src: '/images/testimonial.png',
        },
        {
            name: 'Sofia Martinez',
            designation: 'Head of Product, VeloPay',
            quote:
                '"Their team embedded seamlessly with ours, simplifying roadmaps and shipping on time. The results exceeded our projections in both adoption and retention."',
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
        <section
            className="bg-black relative z-50"
            style={{ fontFamily: 'var(--font-sora), sans-serif' }}
        >
            <AnimatedTestimonials
                testimonials={testimonials}
                autoplay
                containerClass="mx-auto max-w-6xl px-6 py-24 md:py-28 lg:py-32"
                nameClass="text-2xl font-semibold text-white/70"
                designationClass="text-sm text-white/70"
                quoteClass="mt-8 text-2xl leading-relaxed text-white/70"
            />
        </section>
    );
}