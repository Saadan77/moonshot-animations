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
import Ribbons from "@/components/Ribbons";
import Image from "next/image";
import FormCTA from "@/app/components/FormCTA";
import HorizontalScroll from "@/app/components/HorizontalScroll";
import HorizontalContainerAnimation from "@/app/components/HorizontalScroll";
import HorizontalScrollCards from "@/app/components/HorizontalScroll";

const data = [
  {
    src: "/images/services/e-commerce/success-stories/image-1.png",
  },
  {
    src: "/images/services/e-commerce/success-stories/image-2.png",
  },
  {
    src: "/images/services/e-commerce/success-stories/image-3.png",
  },

  {
    src: "/images/services/e-commerce/success-stories/image-1.png",
  },
  {
    src: "/images/services/e-commerce/success-stories/image-2.png",
  },
  {
    src: "/images/services/e-commerce/success-stories/image-3.png",
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

export default function Ecommerce() {
  const layoutImages = [
    {
      id: 1,
      thumbnail: "/images/services/e-commerce/layout-grid/video-1.mp4",
      className: "md:col-span-2 md:row-span-2",
      content: null,
    },
    {
      id: 2,
      thumbnail: "/images/services/e-commerce/layout-grid/video-2.mp4",
      className: "md:col-span-1",
      content: null,
    },
    {
      id: 3,
      thumbnail: "/images/services/e-commerce/layout-grid/image-3.png",
      className: "md:col-span-1",
      content: null,
    },
  ];

  const webDevInfo = [
    {
      id: 1,
      title: "Mobile Compatibility",
      description:
        "Make your e-commerce website mobile-, tablet- and desktop-friendly. Our team fabricates new or existing e-commerce websites that are responsive and user-friendly.",
    },
    {
      id: 2,
      title: "Logistics Integration",
      description:
        "Our e-commerce website allows businesses to integrate logistics operations making you focus on your sales without wasting time on integration complexity.",
    },
    {
      id: 3,
      title: "Check-out Features",
      description:
        "Our team offers you effective check-out options. Our easy-to-use and responsive technology allow your customer check-out without hassle.",
    },
    {
      id: 4,
      title: "Payment Gateway",
      description:
        "Our e-commerce website designers deploy highly secure payment gateways using unbreakable payment modules to reach maximum customers.",
    },
    {
      id: 5,
      title: "Robust Product Showcasing",
      description:
        "Showcase your unlimited range of products with our e-commerce website without getting help from developers.",
    },
    {
      id: 6,
      title: "Shopping <br /> Cart",
      description:
        "Our shopping cart feature is backed by the most sophisticated technology that makes it easier for customers to shop online.",
    },
  ];

  const WebDevCard = ({ card }) => {
    return (
      <div key={card.id} className="space-y-8">
        <p
          className="text-[clamp(16px,1.3vw,24px)] uppercase text-white"
          dangerouslySetInnerHTML={{ __html: card.title }}
        ></p>
        <p
          className="text-[clamp(10px,0.9vw,16px)] font-light text-white"
          dangerouslySetInnerHTML={{ __html: card.description }}
        />
      </div>
    );
  };

  return (
    <>
      {/* <CyberHologramLoader /> */}
      <div
        className="relative bg-black overflow-x-hidden"
        style={{ fontFamily: "var(--font-sora), sans-serif" }}
      >
        <Navbar />

        <div className="max-sm:hidden fixed inset-0 z-9999 pointer-events-none">
          <Ribbons
            baseThickness={6}
            colors={["#D42290"]}
            speedMultiplier={0.4}
            maxAge={500}
            enableFade={true}
          />
        </div>

        <div className="flex items-center relative w-full overflow-visible">
          {/* Dither Background */}
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
          <div className="absolute inset-0 z-0 -mt-[10%]">
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
          <div className="py-[18%]">
            <div className="relative z-10 ml-20 max-lg:ml-15 max-sm:ml-10">
              <div className="mb-16 flex items-center gap-3 text-sm text-white">
                <img src="/images/about-us/icon.png" />
                <p className="font-poppins font-medium text-lg">E-commerce</p>
              </div>

              <h1 className="text-[clamp(40px,4vw,82px)] font-normal max-lg:text-start max-lg:items-start blockfont-thin font-sora uppercase mb-4 tracking-tight leading-none text-white">
                <AuroraText colors={["#ffffff", "#d1bd73"]}>
                  Building E-commerce <br /> That Powers Your{" "}
                </AuroraText>
                <span className="text-[clamp(32px,3.6vw,86px)] font-thin text-end items-end max-lg:text-start max-lg:items-start block">
                  <AuroraText colors={["#D42290", "#2DAEEF"]}>
                    Brand & Growth
                  </AuroraText>
                </span>
              </h1>

              <p className="font-sora font-normal text-white/70 text-[clamp(10px,1vw,20px)]">
                From first idea to live launch, we design and build websites
                that fuel your growth online
              </p>
            </div>

            <img
              src="/images/services/e-commerce/hero.png"
              className="absolute w-1/2 top-20 right-10 z-10 h-auto"
              alt="E-commerce Hero"
            />
          </div>
        </div>

        <div className="relative z-10 py-10 px-24 max-lg:p-2 justify-center flex">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full rounded-[34.137px] object-contain opacity-90"
          >
            <source
              src="/images/services/e-commerce/section-2.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="relative">
          <div className="absolute inset-0 z-0 -mt-[50%]">
            <Image
              alt="linear-gradient-bg"
              width={1920}
              height={1080}
              src="/images/services/bg-gradient-1.png"
            />
          </div>

          <section className="relative z-10 py-24 lg:py-32 px-6 lg:px-36">
            <div className="flex justify-end max-lg:justify-center">
              <h2 className="text-4xl lg:text-6xl font-sora font-light uppercase tracking-tight leading-snug mb-24 -ml-16 max-lg:ml-0">
                <TextType
                  text="Customer-focused"
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={false}
                  startOnVisible={true}
                  loop={true}
                />
                <br />
                <TextType
                  text="E-commerce development"
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={false}
                  startOnVisible={true}
                  loop={true}
                />
              </h2>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
              {/* Image column */}
              <div className="-mt-26 relative z-10 col-span-1 flex items-center justify-center">
                <img
                  src="/images/services/e-commerce/section-3.png"
                  alt="Laptop showcasing website design"
                  className="h-full w-full object-cover scale-200"
                  style={{ mixBlendMode: "screen" }}
                  data-smoother-ignore
                />
              </div>

              {/* Text column */}
              <div className="col-span-1 text-white space-y-12">
                <div className="flex gap-16 max-lg:gap-8">
                  <div className="w-1 bg-white min-h-79">|</div>
                  <div className="tracking-[-0.03em]">
                    <ScrollReveal size="sm" enableBlur={false}>
                      Tech With Moonshot makes use of collaborative efforts to{" "}
                      <br />
                      give you a good website development services. <br />
                      Additionally, our professional website developers give you{" "}
                      <br />
                      exclusive insights how to make user friendly, interactive,{" "}
                      <br />
                      secure and speedy websites. Moreover, our front-end <br />
                      developers and back-end developers know how to service{" "}
                      <br />
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

          <section className="relative z-10 h-[125vh]">
            <img
              src="/images/services/e-commerce/section-4.png"
              className="h-full w-full object-cover"
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

          <section id="e-commerce" className="pt-64">
            <div className="relative flex flex-col">
              <h2 className="mx-20 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-sora font-light uppercase tracking-tight leading-tight">
                <TextType
                  text="Multiple E-commerce"
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={false}
                  startOnVisible={true}
                  loop={true}
                />
                <br />
                <TextType
                  text="Development Platforms"
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={false}
                  startOnVisible={true}
                  loop={true}
                />
              </h2>
              <div className="mx-20 text-[24px] max-1440:text-[20px] max-1280:text-[16px] max-xl:text-[12px] lg:mt-2.5 leading-relaxed text-white/80">
                <TextType
                  text="‘Tech With Moonshot’ allows you to choose from multiple e-commerce development platforms. Importantly, our e-commerce consultants recommend you a platform as per your brand requirements and demands."
                  typingSpeed={15}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                  startOnVisible={true}
                  loop={true}
                />
              </div>

              <div id="e-commerce-layout" className="relative">
                <LayoutGrid cards={layoutImages} />

                <style
                  dangerouslySetInnerHTML={{
                    __html: `
                        #e-commerce #e-commerce-layout > div.grid {
                            gap: 50px !important;
                            padding: 5rem !important;
                        }
                        #e-commerce #e-commerce-layout img {
                            border-radius: 25.788px !important;
                        }
                        @media (max-width: 1024px) {
                            #e-commerce #e-commerce-layout > div.grid {
                                padding: 25px !important;
                            }
                        }
                        #e-commerce #e-commerce-layout .grid > div > div .absolute.bottom-0.left-0.right-0 {
                            display: none !important;
                        }
                    `,
                  }}
                />
              </div>
            </div>
          </section>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 flex-wrap max-w-[95%] xl:max-w-[90%] mx-auto gap-4 xl:gap-8 2xl:gap-12 h-full items-center">
                {webDevInfo.map((card) => (
                  <WebDevCard key={card.id} card={card} />
                ))}
              </div> */}

          <div
            className="relative bg-center bg-no-repeat bg-cover"
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

            <section className="relative pb-20 lg:-mt-16 xl:-mt-20">
              <SuccessStories />
            </section>
          </div>
        </div>

        <FormCTA />
        <Footer />
      </div>
    </>
  );
}
