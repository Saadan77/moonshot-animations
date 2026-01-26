"use client";

import Link from "next/link";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";

import { AuroraText } from "@/components/ui/aurora-text";
import Dither from "@/components/Dither";
import ScrollReveal from "@/components/lightswind/scroll-reveal";
import TextType from "@/components/TextType";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import DecorativeLines from "@/app/components/DecorativeLines";
import Button from "@/app/components/button/button";
import FormCTA from "@/app/components/FormCTA";
import HorizontalScrollCards from "@/app/components/HorizontalScroll";
import Smoke from "@/app/components/smoke/smoke";

const data = [
  {
    src: "/images/services/animations/success-stories/image-1.png",
  },
  {
    src: "/images/services/animations/success-stories/image-2.png",
  },
  {
    src: "/images/services/animations/success-stories/image-3.png",
  },
  {
    src: "/images/services/animations/success-stories/image-1.png",
  },
  {
    src: "/images/services/animations/success-stories/image-2.png",
  },
  {
    src: "/images/services/animations/success-stories/image-3.png",
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

export default function Animations() {
  const layoutImages = [
    {
      id: 1,
      thumbnail: "/images/services/animations/layout-grid/video-1.mp4",
      className: "md:col-span-3 md:row-span-2",
      content: null,
    },
    {
      id: 2,
      thumbnail: "/images/services/animations/layout-grid/video-2.webm",
      className: "md:col-span-2",
      content: null,
    },
    {
      id: 3,
      thumbnail: "/images/services/animations/layout-grid/video-3.mp4",
      className: "md:col-span-2",
      content: null,
    },
  ];

  const webDevInfo = [
    {
      id: 1,
      title: "Whiteboard <br /> Animation",
      description:
        "Whiteboard videos seek to involve and engage customers on wide array of topics.",
    },
    {
      id: 2,
      title: "Character <br /> Animation",
      description:
        "Characters revolutionize your products/services as they inject emotions into videos.",
    },
    {
      id: 3,
      title: "2D <br /> Animation",
      description:
        "2D Animations are eye-catchy, efficient and customer oriented.",
    },
    {
      id: 4,
      title: "3D <br /> Animation",
      description:
        "3D characters are user-friendly as well as effective tool to grab customer attention.",
    },
    {
      id: 5,
      title: "Explainer <br /> Videos",
      description:
        "Short video aims at explaining your product/service to your potential customers.",
    },
    {
      id: 6,
      title: "Motion <br /> Graphics",
      description:
        "Motion animation is crucial, for it disseminate your brand’s story effectively.",
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

        {/* Animations Hero Section */}
        <div className="py-[18%] max-lg:py-0 max-lg:pt-[24%] max-lg:pb-[10%] w-full flex">
          <div className="relative z-10 ml-20 max-lg:ml-5">
            <div className="mb-16 flex items-center gap-3 text-sm text-white">
              <img src="/images/about-us/icon.png" />
              <p className="font-poppins font-medium text-lg">Animations</p>
            </div>

            <h1 className="text-[clamp(30px,3.9vw,78px)] font-normal font-sora uppercase mb-4 tracking-tight leading-20.25 max-1600:leading-15 max-xl:leading-12 text-white">
              <AuroraText colors={["#ffffff", "#d1bd73"]}>
                Smooth Animations <br /> That Grow Your{" "}
              </AuroraText>
              <span className="text-[clamp(50px,4.5vw,82px)] font-thin text-end items-end max-lg:text-start max-lg:items-start block">
                <AuroraText colors={["#D42290", "#2DAEEF"]}>
                  Brand Reach
                </AuroraText>
              </span>
            </h1>

            <p className="font-sora font-normal text-white/70 text-[clamp(10px,1vw,19px)]">
              From concept frames to final render, we craft motion that brings
              your brand story to life
            </p>
          </div>

          <div>
            <img
              className="absolute inset-0 w-full h-auto"
              src="/images/services/bg-service-banner.png"
              alt="Hero Background Gradient"
            />
            <img
              className="absolute w-1/2 top-40 right-0 z-10"
              src="/images/services/animations/hero.png"
              alt="animations Hero"
            />
          </div>
        </div>
      </section>

      <div className="relative px-24 max-lg:p-2 z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="relative z-50 w-full h-full rounded-[34.137px] object-contain opacity-100"
        >
          <source
            src="/images/services/animations/section-2.mp4"
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

        <section className="relative py-24 lg:pt-52 lg:pb-24 px-6 lg:px-36">
          <div className="flex justify-center">
            <h2 className="ml-[30%] text-4xl lg:text-6xl font-sora font-light uppercase tracking-tight leading-snug mb-24 max-lg:ml-0">
              <TextType
                text="Expressive visual"
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={false}
                startOnVisible={true}
                loop={true}
              />
              <br />
              <TextType
                text="storytelling studio"
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
            <div className="-mt-54 relative z-10 col-span-1 flex items-center justify-center">
              <img
                src="/images/services/animations/section-3.png"
                alt="Laptop showcasing website design"
                className="h-full w-full object-cover"
                style={{ mixBlendMode: "screen", scale: "125%" }}
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
                    developers and back-end developers know how to service your
                    web development request in agile manner.
                  </ScrollReveal>
                </div>
              </div>
              <Button text="Get in Touch" href="/contact-us" />
            </div>
          </div>
        </section>

        <section>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="relative z-10 w-full h-full"
          >
            <source
              src="/images/services/animations/section-4.mp4"
              type="video/mp4"
            />
          </video>
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

        <section id="animations" className="relative z-10 pt-50">
          <div>
            <Smoke />

            <h2 className="mx-20 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-sora font-light uppercase tracking-tight leading-tight">
              <TextType
                text="High-impact animation"
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={false}
                startOnVisible={true}
                loop={true}
              />
              <br />
              <TextType
                text="crafted to captivate every audience"
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={false}
                startOnVisible={true}
                loop={true}
              />
            </h2>
            <div className="mx-20 text-[24px] max-1440:text-[20px] max-1280:text-[16px] max-lg:text-[12px] lg:mt-10 text-white/80 leading-relaxed">
              <TextType
                text="‘Tech With Moonshot’ recognizes the worth of video animation. The reason being it evokes customer interest and lead them to buy goods and services. In order to help our clients, our animators combine creative design, 3D special effects, live action and visual effects to give your concept a life."
                typingSpeed={15}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                startOnVisible={true}
                loop={true}
              />
            </div>
          </div>

          <div id="animations-layout" className="relative z-50">
            <LayoutGrid cards={layoutImages} />
            <style
              dangerouslySetInnerHTML={{
                __html: `
                  #animations #animations-layout > div.grid {
                    gap: 50px !important;
                    padding: 5rem !important;
                  }
                  #animations #animations-layout img {
                      border-radius: 25.788px !important;
                  }
                  @media (max-width: 1024px) {
                    #animations #animations-layout > div.grid {
                      padding: 25px !important;
                    }
                  }
                  @media (min-width: 48rem) { 
                    #animations #animations-layout .grid {
                        grid-template-columns: repeat(5, minmax(0, 1fr));
                    }
                  }
                  /* Hide the absolute overlay inside LayoutGrid cards */
                  #animations #animations-layout .grid > div > div .absolute.bottom-0.left-0.right-0 {
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
        <Smoke />

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

      <Footer />
    </>
  );
}
