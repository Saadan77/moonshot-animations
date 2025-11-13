import Carousel from "@/components/Carousel";

export default function Proficients() {
    return (
        <section className="px-10 items-center py-20 bg-black space-y-4">
            {/* Heading */}
            <div className="text-center relative z-10">
                <p className="text-white/60 text-2xl mb-2 tracking-tight">05 - Profecients</p>
                <h2 className="text-white text-7xl max-sm:text-3xl font-semibold tracking-tight leading-tight">
                    <span className="block" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>Performance <span className="italic" style={{ fontFamily: 'var(--font-playfair), serif' }}>Specialists</span></span>
                </h2>
            </div>

            <div className="flex justify-center">
                <Carousel
                    autoplay={true}
                    autoplayDelay={3000}
                    pauseOnHover={true}
                    loop={true}
                    round={false}
                />
            </div>
        </section>
    );
}