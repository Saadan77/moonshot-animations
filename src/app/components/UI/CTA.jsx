import Image from "next/image";

export default function CTA() {
    return (
        <section
            className="relative flex flex-col items-center justify-start overflow-hidden bg-black py-28 md:py-36"
            style={{ fontFamily: 'var(--font-sora), sans-serif' }}
        >

            {/* Heading */}
            <div className="text-center relative">
                <p className="text-white/60 text-6xl mb-2 tracking-tight">Let’s start</p>
                <h2 className="text-white text-9xl max-sm:text-5xl font-semibold tracking-tight leading-tight">
                    <span className="block" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>Your <span className="italic" style={{ fontFamily: 'var(--font-playfair), serif' }}>Project</span></span>
                </h2>
            </div>

            <Image src="/images/elevate-icon.png" alt="Elevate Icon" width={100} height={100} className="w-[120px] relative z-10" />
            
            {/* Video container with outline */}
            <div className="relative min-h-screen z-10 -mt-10 border border-white/15 flex items-center justify-center"
            style={{
                borderRadius: "20rem"
            }}>
                <div className="flex flex-col items-center w-3/4">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover rounded-full items-center"
                    >
                        <source src="/videos/bg-cta.mp4" type="video/mp4" />
                    </video>
                    <p className="text-center text-3xl text-white/70" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
                        Ready to <span className="text-white">elevate<br /> your brand?</span>
                    </p>
                </div>
            </div>

            {/* Small prompt + button */}
            <div className="-mt-12 relative z-10 flex flex-col items-center">
                <button
                    type="button"
                    className="mt-6 h-12 w-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:scale-105 transition"
                    aria-label="Start your project"
                >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            {/* Bottom large background word/image */}
            <div>
                <img
                    src="/images/cta-unique.png"
                    alt="Unique typography"
                    className="w-full h-auto object-contain"
                    draggable={false}
                />
            </div>
        </section>
    );
};