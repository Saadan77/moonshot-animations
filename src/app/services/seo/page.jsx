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
import Smoke from "@/app/components/smoke/smoke";

const data = [
  {
    src: "/images/services/seo/success-stories/image-1.png",
  },
  {
    src: "/images/services/seo/success-stories/image-2.png",
  },
  {
    src: "/images/services/seo/success-stories/image-3.png",
  },

  {
    src: "/images/services/seo/success-stories/image-1.png",
  },
  {
    src: "/images/services/seo/success-stories/image-2.png",
  },
  {
    src: "/images/services/seo/success-stories/image-3.png",
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

export default function SEO() {
  const layoutImages = [
    {
      id: 1,
      thumbnail: "/images/services/seo/layout-grid/image-1.mp4",
      className: "md:col-span-2 md:row-span-2",
      content: null,
    },
    {
      id: 2,
      thumbnail: "/images/services/seo/layout-grid/image-2.png",
      className: "md:col-span-1",
      content: null,
    },
    {
      id: 3,
      thumbnail: "/images/services/seo/layout-grid/image-3.png",
      className: "md:col-span-1",
      content: null,
    },
  ];

  const webDevInfo = [
    {
      id: 1,
      title: "Sustainable High <br /> Performance",
      description:
        "Sustainable performance is at the heart of Tech With Moonshot. Our SEO strategy has unique performance platform making certain that performance remains high.",
    },
    {
      id: 2,
      title: "Competitive <br /> Audit",
      description:
        "Our SEO strategists analyze your competitors and the industry to make a pattern out of this analysis. The reason being it helps pushing the brand up within specific industry.",
    },
    {
      id: 3,
      title: "Content <br /> Strategy",
      description:
        "Tech With Moonshot SEO specialists initiate the project with content strategy to make a success out of SEO marketing.",
    },
    {
      id: 4,
      title: "Site <br /> Migration",
      description:
        "Site migration impacts your search rankings. But fortunately, our SEO experts do so without nose-diving page ranking.",
    },
    {
      id: 5,
      title: "Penalty <br /> Recovery",
      description:
        "Tech With Moonshot makes use of principled and organic SEO techniques making sure your brand enter good books of Google algorithms.",
    },
    {
      id: 6,
      title: "Hyper-Local <br /> SEO",
      description:
        "Tech With Moonshot specializes in creating niche keywords to boost brand value in a specific locality or industry.",
    },
    {
      id: 7,
      title: "Mobile First <br /> Strategy",
      description:
        "Our experts fabricate SEO scheme that complements your mobile first strategy giving you more business advantage.",
    },
    {
      id: 8,
      title: "Technical <br /> SEO",
      description:
        "Technical SEO gives your brand preferential status in Google page placement. Importantly, technical SEO is necessary to connect with Google algorithms.",
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

        <div className="flex items-center relative w-full overflow-visible">
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

          {/* Decorative Lines */}
          <DecorativeLines />

          {/* Hero Section */}
          <div className="py-[18%] max-2xl:py-[22%]">
            <div className="relative z-10 ml-20 max-lg:ml-5">
              <div className="mb-16 flex items-center gap-3 text-sm text-white">
                <img src="/images/about-us/icon.png" />
                <p className="font-poppins font-medium text-lg">SEO</p>
              </div>

              <h1 className="text-[clamp(40px,4vw,74px)] font-normal font-sora uppercase mb-4 tracking-tight leading-20.25 max-2xl:leading-15 max-xl:leading-12 text-white">
                <AuroraText colors={["#ffffff", "#d1bd73"]}>
                  Boosting <br /> Smart SEO That Drives{" "}
                </AuroraText>
                <span className="text-[clamp(50px,5vw,86px)] font-thin text-end items-end max-lg:text-start max-lg:items-start block">
                  <AuroraText colors={["#D42290", "#2DAEEF"]}>
                    Leads & Revenue
                  </AuroraText>
                </span>
              </h1>

              <p className="font-sora font-normal text-white/70 text-[clamp(11px,1.1vw,20px)]">
                From audits to content strategy, we plan and deliver SEO that
                boosts your visibility online
              </p>
            </div>

            <div>
              <img
                className="absolute inset-0 w-full h-auto"
                src="/images/services/bg-service-banner.png"
                alt="Hero Background Gradient"
              />
              <img
                src="/images/services/seo/hero.png"
                className="absolute w-[80%] -bottom-50 -right-90 max-1600:w-[85%] max-1600:-bottom-40 max-1280:-bottom-30 max-2xl:-right-80 max-xl:-right-60"
                alt="SEO Hero Image"
              />
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <img
            src="/images/services/seo/section-2.png"
            className="max-h-[95vh] w-[90%] mx-auto max-lg:w-full object-cover rounded-4xl items-center"
          />
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

          <section className="relative py-24 lg:py-52 px-6 lg:px-36">
            <div className="flex justify-end max-lg:justify-center">
              <h2 className="text-4xl lg:text-6xl font-sora font-light uppercase tracking-tight leading-snug mb-10 -ml-16 max-lg:ml-0">
                <TextType
                  text="Organic Search"
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={false}
                  startOnVisible={true}
                  loop={true}
                />
                <br />
                <TextType
                  text="Growth Strategy Studio"
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
              <div className="-mt-24 max-xl:mt-0 relative z-10 col-span-1 flex items-center justify-center">
                <img
                  src="/images/services/seo/section-3.png"
                  alt="Laptop showcasing website design"
                  className="w-full h-auto"
                />
              </div>

              {/* Text column */}
              <div className="col-span-1 text-white space-y-12">
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

          <img
            src="/images/services/seo/section-4.png"
            className="relative z-10 h-[125vh] w-full object-cover"
          />
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

          <section id="seo" className="relative z-10 pt-50">
            <Smoke />

            <div className="flex flex-col">
              <h2 className="mx-20 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-sora font-light uppercase tracking-tight leading-tight">
                <TextType
                  text="Modern SEO made for stronger"
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={false}
                  startOnVisible={true}
                  loop={true}
                />
                <br />
                <TextType
                  text="rankings and better user experience"
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={false}
                  startOnVisible={true}
                  loop={true}
                />
              </h2>
              <div className="mx-20 text-[24px] max-1440:text-[20px] max-1280:text-[16px] max-xl:text-[12px] lg:mt-10 leading-relaxed text-white/80">
                <TextType
                  text="Search Engine Optimization is crucial digital marketing tool to enhance the bottom-line. SEO sets itself off the ground with the help of keywords. Interestingly, the more organic these keywords are, the more organic people find your business online."
                  typingSpeed={15}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                  startOnVisible={true}
                  loop={true}
                />
              </div>
            </div>

            <div id="seo-layout" className="relative z-50">
              <LayoutGrid cards={layoutImages} />

              <style
                dangerouslySetInnerHTML={{
                  __html: `
                    #seo #seo-layout > div.grid {
                        gap: 50px !important;
                        padding: 5rem !important;
                    }
                    #seo #seo-layout img {
                        border-radius: 25.788px !important;
                    }
                    @media (max-width: 1024px) {
                        #seo #seo-layout > div.grid {
                            padding: 25px !important;
                        }
                    }
                    #seo #seo-layout .grid > div > div .absolute.bottom-0.left-0.right-0 {
                        display: none !important;
                    }
                `,
                }}
              />
            </div>
          </section>

          <div
            className="relative bg-top bg-no-repeat bg-cover"
            style={{
              backgroundImage: "url(/images/services/bg-gradient-1.png)",
            }}
          >
            <Smoke />

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

            <FormCTA />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
