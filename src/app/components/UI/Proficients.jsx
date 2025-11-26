import Carousel from "@/components/Carousel";

export default function Proficients() {
    return (
        <section className="px-10 items-center py-52 bg-[#00080F] relative z-50">
            {/* Heading */}
            <div className="text-center relative z-10 space-y-8">
                <p className="text-white/60 text-2xl tracking-tight">05 - Profecients</p>
                <h2 className="text-white text-7xl max-sm:text-3xl font-semibold tracking-tight leading-tight">
                    <span className="block" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>Performance <span className="italic" style={{ fontFamily: 'var(--font-playfair), serif' }}>Specialists</span></span>
                </h2>
            </div>

            <div className="flex justify-center mt-12">
                <Carousel
                    autoplay={false}
                    autoplayDelay={3000}
                    pauseOnHover={true}
                    loop={true}
                    round={false}
                />
            </div>
        </section>
    );
}