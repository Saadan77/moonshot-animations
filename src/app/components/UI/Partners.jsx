'use client';
import {
    Marquee,
    MarqueeContent,
    MarqueeItem,
} from '@/components/ui/shadcn-io/marquee';

export default function Partners() {
    return (
        <section className="relative z-50 bg-black mx-auto py-24 md:py-28 lg:py-32 overflow-hidden">
            <div>
                {/* Top meta label */}
                <div className="relative mx-auto w-[92%] pt-16 sm:pt-20 pb-12">
                    <div className="flex justify-between tracking-widest text-white/70 text-sm">
                        <p className="text-nowrap">08 — Partners</p>
                        <p className="text-[#41454a] text-end text-[20px] font-medium leading-tight">
                            Over <span className="text-white">10 Years</span> <br /> Partnership
                        </p>
                    </div>
                </div>

                {/* Logo Loop Section */}
                <div className="flex size-full items-center justify-center bg-black">
                    <Marquee>
                        <MarqueeContent>
                            {[
                                '/images/partners/logo_archin.png',
                                '/images/partners/logo_github.png',
                                '/images/partners/logo_union.png',
                                '/images/partners/logo_zm.png',
                            ].map((src, index) => (
                                <MarqueeItem key={index} className="h-66 w-66 mx-0">
                                    <div className="h-full w-full rounded-full bg-[#03182c]/100 flex items-center justify-center">
                                        <img
                                            alt={`Partner logo ${index + 1}`}
                                            className="max-h-full max-w-full object-contain"
                                            src={src}
                                        />
                                    </div>
                                </MarqueeItem>
                            ))}
                        </MarqueeContent>
                    </Marquee>
                </div>
            </div>
        </section>
    );
}