'use client';
import {
    Marquee,
    MarqueeContent,
    MarqueeItem,
} from '@/components/ui/shadcn-io/marquee';
import Testimonials from './Testimonials';

export default function Partners() {
    return (
        <section className="relative z-50 bg-[#00060B] mx-auto py-24 md:py-28 lg:py-32 overflow-hidden">
            <div className=''>
                {/* Top meta label */}
                <div className="relative mx-auto w-[92%] pt-16 sm:pt-20 pb-12">
                    <div className="font-sora flex justify-between tracking-widest text-[#808080] text-[20px]">
                        <div className="text-[20px] text-[#808080]">
                            <span className='text-nowrap font-poppins font-light'>08 — Partners</span>
                        </div>
                        <p className="text-[#41454a] text-end text-[26px] tracking-[-0.03em]">
                            Over <span className="text-white">10 Years</span> <br /> Partnership
                        </p>
                    </div>
                </div>

                {/* Logo Loop Section */}
                <div className="flex size-full items-center justify-center">
                    <Marquee>
                        <MarqueeContent speed={150}>
                            {[
                                '/images/partners/logo_archin.png',
                                '/images/partners/logo_github.png',
                                '/images/partners/logo_union.png',
                                '/images/partners/logo_usa.png',
                                '/images/partners/logo_squarespace.png',
                                '/images/partners/logo_zm.png',
                            ].map((src, index) => (
                                <MarqueeItem key={index} className="h-66 w-66 mx-0">
                                    <div className="h-full w-full rounded-full bg-[#03182c] flex items-center justify-center">
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

            <Testimonials />
        </section>
    );
}