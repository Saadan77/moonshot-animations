"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import CTA from "@/app/components/CTA";

import { AuroraText } from "@/components/ui/aurora-text";
import Dither from "@/components/Dither";
import ScrollReveal from "@/components/lightswind/scroll-reveal";
import TextType from "@/components/TextType";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import DecorativeLines from "@/app/components/DecorativeLines";
import Image from "next/image";
import FormCTA from "@/app/components/FormCTA";
import HorizontalScrollCards from "@/app/components/HorizontalScroll";

const data = [
  {
    src: "/images/services/ssm/success-stories/image-1.png",
  },
  {
    src: "/images/services/ssm/success-stories/image-2.png",
  },
  {
    src: "/images/services/ssm/success-stories/image-3.png",
  },

  {
    src: "/images/services/ssm/success-stories/image-1.png",
  },
  {
    src: "/images/services/ssm/success-stories/image-2.png",
  },
  {
    src: "/images/services/ssm/success-stories/image-3.png",
  },
];

export function SuccessStories() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full">
      <Carousel items={cards} />
    </div>
  );
}

export default function SSM() {
  const layoutImages = [
    {
      id: 1,
      thumbnail: "/images/services/ssm/layout-grid/image1.png",
      className: "md:col-span-3 md:row-span-2",
      content: null,
    },
    {
      id: 2,
      thumbnail: "/images/services/ssm/layout-grid/image2.png",
      className: "md:col-span-2",
      content: null,
    },
    {
      id: 3,
      thumbnail: "/images/services/ssm/layout-grid/image3.png",
      className: "md:col-span-2",
      content: null,
    },
  ];

  const webDevInfo = [
    {
      id: 1,
      title: "Target <br /> Audience",
      description:
        "Our Social marketing starts with target audience in order to target right customers for your brand.",
    },
    {
      id: 2,
      title: "Practical <br /> Optimization",
      description:
        "Our social media marketing scheme involves practical optimization of social media campaigns, advertisements and paid promotions.",
    },
    {
      id: 3,
      title: "Inventive <br /> Content",
      description:
        "Tech With Moonshot put its weight behind inventive content, as it is crucial to lure customers towards your brand.",
    },
    {
      id: 4,
      title: "Advanced <br /> Reporting",
      description:
        "Using the Facebook pixels and Google analytics, Tech With Moonshot allows you to measure campaign performance.",
    },
    {
      id: 5,
      title: "Machine <br /> learning",
      description:
        "'Tech With Moonshot' utilizes machine learning to boost social media marketing of your brand.",
    },
    {
      id: 6,
      title: "ROI-based <br /> Reporting",
      description:
        "Our team knows ROI is important for your business. That's why our digital specialists give you ROI reports regularly.",
    },
  ];

  return (
    <>
      {/* <CyberHologramLoader /> */}
      <div
        className="relative bg-black overflow-x-hidden"
        style={{ fontFamily: "var(--font-sora), sans-serif" }}
      >
        <Navbar />

        <div className="min-h-screen flex items-center relative w-full overflow-visible">
          {/* <div className="absolute inset-0 w-full h-[125vh] opacity-20">
            <Dither
              waveColor={[0.01, 0.29, 0.62]}
              backgroundColor={[0.84, 0.13, 0.69]}
              disableAnimation={false}
              enableMouseInteraction={true}
              mouseRadius={0.3}
              colorNum={4}
              waveAmplitude={0.3}
              waveFrequency={3}
              waveSpeed={0.05}
            />
          </div> */}

          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              alt="linear-gradient-bg"
              width={1920}
              height={1080}
              src="/images/services/bg-service-banner.png"
              style={{ filter: "brightness(1.25)" }}
            />
          </div>

          <DecorativeLines />

          {/* Hero Section */}
          <div className="">
            <div className="relative z-10 ml-20 max-lg:ml-5">
              <div className="mb-16 flex items-center gap-3 text-sm text-white">
                <img src="/images/about-us/icon.png" />
                <p className="font-poppins font-medium text-lg">SMM</p>
              </div>

              <h1 className="text-[clamp(50px,3.6vw,82px)] font-normal font-sora uppercase mb-4 tracking-tight leading-20.25 max-1600:leading-17 max-xl:leading-15 text-white">
                <AuroraText colors={["#ffffff", "#d1bd73"]}>
                  Social Media <br /> That Grows Your{" "}
                </AuroraText>
                <span className="text-[clamp(50px,6vw,86px)] font-thin text-end items-end max-lg:text-start max-lg:items-start block">
                  <AuroraText colors={["#D42290", "#2DAEEF"]}>
                    Brand Reach
                  </AuroraText>
                </span>
              </h1>

              <p className="font-sora font-normal text-white/70 text-[clamp(10px,1vw,17px)]">
                From ideas to final posts, we plan & manage SMM that shows who
                you are online!
              </p>
            </div>

            <div>
              <img
                className="absolute inset-0 w-full h-auto"
                src="/images/services/bg-service-banner.png"
                alt="Hero Background Gradient"
              />
              <img
                src="/images/services/ssm/hero.png"
                className="absolute w-[45%] h-auto -bottom-15 right-30 max-xl:right-10"
                alt="Social Media Marketing Hero"
              />
            </div>
          </div>
        </div>

        <img
          src="/images/services/ssm/section-2.png"
          className="relative z-10 max-h-[95vh] w-[90%] mx-auto max-lg:w-full object-cover rounded-4xl items-center"
        />

        <div className="relative">
          <div className="absolute inset-0 z-0 -mt-[30%]">
            <Image
              alt="linear-gradient-bg"
              width={1920}
              height={1080}
              src="/images/services/bg-gradient-1.png"
            />
          </div>

          <section className="relative z-10 py-24 lg:pt-52 lg:pb-24 px-6 lg:px-36">
            <div className="flex justify-end">
              <h2 className="text-4xl lg:text-6xl font-sora font-light uppercase tracking-tight leading-snug mb-24 mr-24 max-lg:ml-0">
                <TextType
                  text="Modern social"
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={false}
                  startOnVisible={true}
                  loop={true}
                />
                <br />
                <TextType
                  text="media experience studio"
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={false}
                  startOnVisible={true}
                  loop={true}
                />
              </h2>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-9 gap-12">
              {/* Image column */}
              <div className="-mt-54 max-xl:mt-0 relative z-10 col-span-5 flex items-center justify-center">
                <img
                  src="/images/services/ssm/section-3.png"
                  alt="Laptop showcasing website design"
                  className="h-auto w-full object-cover scale-110"
                  style={{ mixBlendMode: "screen" }}
                />
              </div>

              {/* Text column */}
              <div className="col-span-4 text-white space-y-12">
                <div className="flex gap-16 max-lg:gap-8">
                  <div className="w-4 bg-white self-stretch mt-7 mb-8.5" />
                  <div className="tracking-[-0.03em] font-nomal font-sora">
                    <ScrollReveal size="sm" enableBlur={false}>
                      Tech With Moonshot makes use of collaborative efforts to
                      give you a good website development services. <br />{" "}
                      Additionally, our professional website developers give you
                      exclusive insights how to make user friendly, interactive,
                      secure and speedy websites. Moreover, our front-end
                      developers and back-end developers know how to service
                      your web development request in agile manner.
                    </ScrollReveal>
                  </div>
                </div>
                <Link
                  href="#"
                  className="relative z-10 group border border-[#979797] inline-flex items-center gap-5 rounded-full bg-[#041426] hover:bg-[#D42290] pr-1.5 pl-8 py-1.5 text-[15px] text-white/90 ring-1 ring-white/15 transition hover:ring-white/30"
                >
                  <span className="relative top-[0.5px] font-sora text-[20px] hover-group:bg-white hover-group:text-black">
                    Get in Touch
                  </span>
                  <span className="grid place-items-center rounded-full bg-[#D42290] group-hover:bg-white p-3">
                    <ArrowRight className="w-6 h-6 group-hover:text-black" />
                  </span>
                </Link>
              </div>
            </div>
          </section>

          <section className="max-h-screen overflow-hidden">
            <img
              src="/images/services/ssm/sec-4.png"
              className="relative z-10 h-full w-full object-cover"
            />
          </section>
        </div>

        <div className="relative">
          <div className="absolute inset-0 z-0 -mt-[30%]">
            <Image
              alt="linear-gradient-bg"
              width={1920}
              height={1080}
              src="/images/services/bg-gradient-1.png"
            />
          </div>

          <section id="ssm" className="pt-64">
            <div className="flex flex-col">
              <h2 className="mx-20 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-sora font-light uppercase tracking-tight leading-tight">
                <TextType
                  text="Modern social media made"
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={false}
                  startOnVisible={true}
                  loop={true}
                />
                <br />
                <TextType
                  text="for engaging audience connection"
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={false}
                  startOnVisible={true}
                  loop={true}
                />
              </h2>
              <div className="mx-20 text-[24px] max-1440:text-[20px] max-1280:text-[16px] max-xl:text-[12px] lg:mt-10 leading-relaxed text-white/80">
                <TextType
                  text="Social media advertising is one of the most pronounced and useful means to give wings to your profitability. The paid advertisements on Facebook, Instagram, Snap Chat, YouTube, TikTok, and other potential platforms are consequential in this digitized globe to give sustenance to brands."
                  typingSpeed={15}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                  startOnVisible={true}
                  loop={true}
                />
              </div>
            </div>

            <div id="ssm-layout">
              <LayoutGrid cards={layoutImages} />

              <style
                dangerouslySetInnerHTML={{
                  __html: `
                        #ssm #ssm-layout > div.grid {
                            gap: 50px !important;
                            padding: 5rem !important;
                        }
                        #ssm #ssm-layout img {
                            border-radius: 25.788px !important;
                        }
                        @media (max-width: 1024px) {
                            #ssm #ssm-layout > div.grid {
                                padding: 25px !important;
                            }
                        }
                        @media (min-width: 48rem) { 
                          #ssm #ssm-layout .grid {
                            grid-template-columns: repeat(5, minmax(0, 1fr));
                          }
                        }
                        #ssm #ssm-layout .grid > div > div .absolute.bottom-0.left-0.right-0 {
                            display: none !important;
                        }
                    `,
                }}
              />
            </div>
          </section>
        </div>

        <div
          className="relative bg-top bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url(/images/services/bg-gradient-1.png)",
          }}
        >
          <section className="relative">
            <HorizontalScrollCards cards={webDevInfo} />
          </section>

          <div className="max-w-[90%] min-w-[90%] max-xl:max-w-[95%] max-xl:min-w-[95%] mx-auto my-35 text-white/30 w-px h-px bg-white/30"></div>

          <h2 className="max-w-[90%] mx-auto text-4xl xl:text-6xl font-sora uppercase font-light tracking-tight leading-snug">
            <TextType
              text="200+"
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={false}
              startOnVisible={true}
              loop={true}
            />
            <br />
            <TextType
              text="Success Stories"
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={false}
              startOnVisible={true}
              loop={true}
            />
          </h2>

          <section className="relative lg:-mt-16 xl:-mt-20 z-50">
            <SuccessStories />
          </section>

          <div
            className="w-full h-130 -mt-150 relative z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, #00050A 50%)",
            }}
          />

          <div className="relative z-30 -mt-32 bg-[#00050A]">
            <FormCTA />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
