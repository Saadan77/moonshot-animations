import Carousel from "@/components/Carousel";
import TextType from "@/components/TextType";

export default function Proficients() {
    return (
        <section className="px-10 items-center py-52 bg-[#00080F] relative z-50">
            {/* Heading */}
            <div className="text-center relative z-10 space-y-8">
                <p className="text-white/60 text-2xl tracking-tight font-poppins font-light">05 <span className="-mr-2">—</span> — Profecients</p>
                <h2 className="text-white text-7xl max-sm:text-3xl tracking-tight leading-tight">
                    <span className="block" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
                        <TextType
                            text="Performance"
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={false}
                            startOnVisible={true}
                            loop={true}
                        />
                        {" "}
                        <span className="italic" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                            <TextType
                                text="Specialists"
                                typingSpeed={75}
                                pauseDuration={1500}
                                showCursor={false}
                                startOnVisible={true}
                                loop={true}
                            />
                        </span>
                    </span>
                </h2>
            </div>

            <div className="flex justify-center mt-16">
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