import LiquidEther from "@/components/LiquidEther";
import Image from "next/image";

export default function CTA() {
    return (
        <section
            className="relative flex flex-col items-center justify-start overflow-hidden bg-[#00060B] pt-28 md:pt-36"
            style={{ fontFamily: 'var(--font-sora), sans-serif' }}
        >
            {/* Left Gradient */}
            <div className="absolute -left-10 top-60 bottom-0 w-[600px] pointer-events-none">
                <div
                    className="w-full h-1/3"
                    style={{
                        background: 'linear-gradient(90deg, rgba(250, 40, 137, 0.4) 0%, rgba(62, 95, 249, 0.3) 50%, transparent 100%)',
                        filter: 'blur(80px)',
                        opacity: 0.6
                    }}
                />
            </div>

            {/* Right Gradient */}
            <div className="absolute -right-20 top-160 bottom-0 w-[600px] pointer-events-none">
                <div
                    className="w-full h-1/3"
                    style={{
                        background: 'linear-gradient(270deg, rgba(93, 66, 255, 0.4) 0%, rgba(255, 159, 252, 0.3) 50%, transparent 100%)',
                        filter: 'blur(80px)',
                        opacity: 0.6
                    }}
                />
            </div>

            {/* LiquidEther Background */}
            <div className="absolute inset-0 pointer-events-none opacity-40" style={{ zIndex: 0 }}>
                <LiquidEther
                    colors={['#5227FF', '#FF9FFC', '#B19EEF']}
                    mouseForce={20}
                    cursorSize={100}
                    isViscous={false}
                    viscous={30}
                    iterationsViscous={32}
                    iterationsPoisson={32}
                    resolution={0.5}
                    isBounce={false}
                    autoDemo={true}
                    autoSpeed={0.5}
                    autoIntensity={2.2}
                    takeoverDuration={0.25}
                    autoResumeDelay={3000}
                    autoRampDuration={0.6}
                />
            </div>

            {/* Heading */}
            <div className="text-center relative z-10">
                <p className="text-white/60 text-6xl mb-2 tracking-tight font-sora font-light">Let’s start</p>
                <h2 className="text-white text-9xl max-sm:text-5xl font-medium tracking-tight leading-tight">
                    <span className="block" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>Your <span className="italic" style={{ fontFamily: 'var(--font-playfair), serif' }}>Project</span></span>
                </h2>
            </div>

            <Image src="/images/elevate-icon.png" alt="Elevate Icon" width={100} height={100} className="w-[120px] relative z-10" data-smoother-ignore />

            {/* Video container with outline */}
            <div className="relative min-h-[75vh] md:min-h-screen max-w-[35%] max-xl:max-w-[50%] z-10 -mt-10 flex items-center justify-center border border-white/30"
                style={{
                    borderRadius: "1333.3px",
                    transform: 'translate3d(0, 0, 0)',
                    isolation: 'isolate'
                }}>
                <div className="flex flex-col items-center space-y-6 py-10">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover rounded-full items-center"
                        style={{
                            mixBlendMode: 'screen',
                        }}
                    >
                        <source src="/videos/bg-cta-webm.webm" type="video/mp4" />
                    </video>


                    <p className="text-center text-3xl max-sm:text-xl text-white/70" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
                        Ready to <span className="text-white">elevate<br /> your brand?</span>
                    </p>
                </div>
            </div>

            {/* Small prompt + button */}
            <div className="-mt-12 relative z-10 flex flex-col items-center">
                <button
                    type="button"
                    className="mt-6 h-12 w-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:scale-105 hover:rotate-270 transition"
                    aria-label="Start your project"
                >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            {/* Bottom large background word/image */}
            <div data-smoother-ignore>
                <img
                    src="/images/cta-unique.png"
                    alt="Unique typography"
                    className="w-full h-auto object-contain mt-20 opacity-40"
                    draggable={false}
                />
            </div>

            {/* Bottom large gradient */}
            <div className="-mt-64 relative w-screen inset-0 flex items-center justify-center pointer-events-none z-50">
                <div
                    className="w-screen h-[200px] rounded-full blur-[120px] opacity-80"
                    style={{
                        background:
                            "linear-gradient(119.09deg, #4f00ff 14.54%, #ff83bc 41.09%, rgba(35, 141, 250, 0.8) 55.83%, rgba(62, 95, 249, 0.8) 80.08%), linear-gradient(119.09deg, rgba(57, 40, 255, 0.8) 14.54%, rgba(250, 40, 137, 0.8) 41.09%, rgba(35, 141, 250, 0.8) 55.83%, rgba(62, 95, 249, 0.8) 80.08%)",
                    }}

                />
            </div>
        </section>
    );
};