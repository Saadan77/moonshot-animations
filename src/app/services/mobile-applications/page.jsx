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
    src: "/images/services/mobile-applications/success-stories/image-1.png",
  },
  {
    src: "/images/services/mobile-applications/success-stories/image-2.png",
  },
  {
    src: "/images/services/mobile-applications/success-stories/image-3.png",
  },

  {
    src: "/images/services/mobile-applications/success-stories/image-1.png",
  },
  {
    src: "/images/services/mobile-applications/success-stories/image-2.png",
  },
  {
    src: "/images/services/mobile-applications/success-stories/image-3.png",
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

export default function MobileApplications() {
  const layoutImages = [
    {
      id: 1,
      thumbnail: "/images/services/mobile-applications/layout-grid/video-1.mp4",
      className: "md:col-span-2 md:row-span-2",
      content: null,
    },
    {
      id: 2,
      thumbnail: "/images/services/mobile-applications/layout-grid/image-2.png",
      className: "md:col-span-1",
      content: null,
    },
    {
      id: 3,
      thumbnail: "/images/services/mobile-applications/layout-grid/image-3.png",
      className: "md:col-span-1",
      content: null,
    },
  ];

  const webDevInfo = [
    {
      id: 1,
      title: "Mobile Application Strategy",
      description:
        "Tech With Moonshot focuses on strategy-making before development. We analyze customer requirements using data-driven agile methods.",
    },
    {
      id: 2,
      title: "User Experience Design",
      description:
        "We design intuitive and engaging mobile app experiences. Our UI/UX experts focus on increasing downloads, retention, and leads.",
    },
    {
      id: 3,
      title: "Mobile Application Development",
      description:
        "Our data-driven development approach helps build profitable mobile apps. Experienced developers create customer-focused applications.",
    },
    {
      id: 4,
      title: "Testing",
      description:
        "Our QA team rigorously tests every application to ensure quality, stability, and reliability.",
    },
    {
      id: 5,
      title: "Mobile Application Launch",
      description:
        "We assist in launching apps on the App Store and Play Store, providing full functionality, guides, and test documentation.",
    },
    {
      id: 6,
      title: "Support and Maintenance",
      description:
        "We provide continuous support and maintenance services. Our team is available 24/7 to keep your app running smoothly.",
    },
  ];

  return (
    <>
      {/* <CyberHologramLoader /> */}
      <Navbar />

      <section>
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

        {/* Industries Hero Section */}
        <div className="py-[18%] max-lg:py-0 max-lg:pt-[24%] max-lg:pb-[10%] w-full flex">
          <div className="relative z-10 ml-20 max-lg:ml-5">
            <div className="mb-16 flex items-center gap-3 text-sm text-white">
              <img src="/images/about-us/icon.png" />
              <p className="font-poppins font-medium text-lg">
                Mobile Applications
              </p>
            </div>

            <h1 className="text-[clamp(30px,3.55vw,74px)] font-normal font-sora uppercase mb-4 tracking-tight leading-20.25 max-1600:leading-15 max-xl:leading-12 text-white">
              <AuroraText colors={["#ffffff", "#d1bd73"]}>
                Crafting <br /> Apps That Power Your{" "}
              </AuroraText>
              <span className="text-[clamp(32px,3.6vw,86px)] font-thin text-end items-end max-lg:text-start max-lg:items-start block">
                <AuroraText colors={["#D42290", "#2DAEEF"]}>
                  Brand & Ambition
                </AuroraText>
              </span>
            </h1>

            <p className="font-sora font-normal text-white/70 text-[clamp(10px,1vw,19px)]">
              From ideas to app release we design and build mobile apps that
              show who you are on screen
            </p>
          </div>

          <img
            src="/images/services/mobile-applications/hero.png"
            className="absolute w-[45%] top-50 right-0 z-10 max-lg:relative max-lg:top-0 max-lg:right-0 h-auto"
            alt="mobile-applications Hero"
          />
        </div>
      </section>

      <div className="relative z-10 px-24 max-lg:p-2 justify-center flex">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full rounded-[34.137px] object-contain"
        >
          <source
            src="/images/services/mobile-applications/section-2.mp4"
            type="video/mp4"
          />
        </video>
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

        <section className="py-36 px-6 xl:px-20 lg:px-16 bg-bottom">
          <div className="flex justify-end max-lg:justify-center mr-20">
            <h2 className="text-[clamp(20px,3vw,60px)] font-sora font-light uppercase tracking-tight leading-snug mb-16 max-1440:mb-5 max-2xl:mb-4">
              <TextType
                text="Custom-built"
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={false}
                startOnVisible={true}
                loop={true}
              />
              <br />
              <TextType
                text="mobile application studio"
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={false}
                startOnVisible={true}
                loop={true}
              />
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image column */}
            <div className="-mt-70 max-1440:-mt-50 relative z-10 col-span-1 flex items-center justify-center">
              <img
                src="/images/services/mobile-applications/section-3.png"
                alt="Laptop showcasing website design"
                className="h-auto w-full max-1440:w-4/5 object-cover"
                style={{ mixBlendMode: "screen" }}
              />
            </div>

            {/* Text column */}
            <div className="col-span-1 text-white space-y-12">
              <div className="flex gap-16 max-lg:gap-8">
                <div className="w-4 bg-white self-stretch mt-7 mb-8.5" />
                <div className="tracking-[-0.03em] font-nomal font-sora">
                  <ScrollReveal size="sm" enableBlur={false}>
                    Tech With Moonshot makes use of collaborative efforts to
                    give you a good website development services. <br /> Additionally,
                    our professional website developers give you exclusive
                    insights how to make user friendly, interactive, secure and
                    speedy websites. Moreover, our front-end developers and
                    back-end developers know how to service your web development
                    request in agile manner.
                  </ScrollReveal>
                </div>
              </div>
              <Link
                href="#"
                className="relative z-10 group border border-[#979797] inline-flex items-center gap-5 rounded-full bg-[#041426] hover:bg-[#D42290] pr-1.5 pl-8 py-1.5 text-[15px] text-white/90 ring-1 ring-white/15 transition hover:ring-white/30"
              >
                <span className="relative top-[0.5px] font-sora text-[20px] max-1280:text-[17px] hover-group:bg-white hover-group:text-black">
                  Get in Touch
                </span>
                <span className="grid place-items-center rounded-full bg-[#D42290] group-hover:bg-white p-3">
                  <ArrowRight className="w-6 h-6 group-hover:text-black" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        <section>
          <img
            src="/images/services/mobile-applications/section-4.png"
            className="relative z-10 h-full w-full"
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

        <div id="mobile-applications" className="relative z-10 pt-64">
          <div>
            <h2 className="mx-20 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-sora font-light uppercase tracking-tight leading-tight">
              <TextType
                text="Modern mobile apps made for"
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={false}
                startOnVisible={true}
                loop={true}
              />
              <br />
              <TextType
                text="seamless in-app user experience"
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={false}
                startOnVisible={true}
                loop={true}
              />
            </h2>
            <div className="mx-20 text-[24px] max-1440:text-[20px] max-1280:text-[16px] max-xl:text-[12px] lg:mt-10 text-white/80 leading-relaxed">
              <TextType
                text="Increase customer retention, lead generation and brand loyalty with our data-backed and search engine optimized mobile applications. Our data analytical experts help you develop optimized mobile applications."
                typingSpeed={15}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                startOnVisible={true}
                loop={true}
              />
            </div>
          </div>

          <div id="mobile-applications-layout">
            <LayoutGrid cards={layoutImages} />
            <style
              dangerouslySetInnerHTML={{
                __html: `
                      #mobile-applications #mobile-applications-layout > div.grid {
                        gap: 50px !important;
                        padding: 5rem !important;
                      }
                      @media (max-width: 1024px) {
                        #mobile-applications
                          #mobile-applications-layout
                          > div.grid {
                          padding: 25px !important;
                        }
                      }
                      #mobile-applications #mobile-applications-layout img {
                          border-radius: 25.788px !important;
                      }
                      /* Hide the absolute overlay inside LayoutGrid cards */
                      #mobile-applications
                        #mobile-applications-layout
                        .grid
                        > div
                        > div
                        .absolute.bottom-0.left-0.right-0 {
                        display: none !important;
                      }
                    `,
              }}
            />
          </div>
        </div>
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

        <h2 className="max-w-[90%] mx-auto text-3xl md:text-4xl xl:text-6xl font-sora uppercase font-light tracking-tight leading-snug">
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

      <FormCTA />
      <Footer />
    </>
  );
}
