'use client';
import {
    Marquee,
    MarqueeContent,
    MarqueeFade,
    MarqueeItem,
} from '@/components/ui/shadcn-io/marquee';

export default function Partners() {
    return (
        <section className="relative bg-black mx-auto py-24 md:py-28 lg:py-32 overflow-hidden">
            <div className="max-w-[90%] items-center mx-auto">
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
                        <MarqueeFade side="left" />
                        <MarqueeFade side="right" />
                        <MarqueeContent>
                            {new Array(10).fill(null).map((_, index) => (
                                <MarqueeItem className="h-32 w-32" key={index}>
                                    <img
                                        alt={`Placeholder ${index}`}
                                        className="overflow-hidden rounded-full"
                                        src={`https://placehold.co/128x128?random=${index}`}
                                    />
                                </MarqueeItem>
                            ))}
                        </MarqueeContent>
                    </Marquee>
                </div>
            </div>
        </section>
    );
}