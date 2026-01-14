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
    src: "/images/services/branding/success-stories/image-1.png",
  },
  {
    src: "/images/services/branding/success-stories/image-2.png",
  },
  {
    src: "/images/services/branding/success-stories/image-3.png",
  },

  {
    src: "/images/services/branding/success-stories/image-1.png",
  },
  {
    src: "/images/services/branding/success-stories/image-2.png",
  },
  {
    src: "/images/services/branding/success-stories/image-3.png",
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

export default function Branding() {
  const layoutImages = [
    {
      id: 1,
      thumbnail: "/images/services/branding/layout-grid/image-1.png",
      className: "md:col-span-2 md:row-span-2",
      content: null,
    },
    {
      id: 2,
      thumbnail: "/images/services/branding/layout-grid/image-2.png",
      className: "md:col-span-1",
      content: null,
    },
    {
      id: 3,
      thumbnail: "/images/services/branding/layout-grid/image-3.png",
      className: "md:col-span-1",
      content: null,
    },
  ];

  const webDevInfo = [
    {
      id: 1,
      title: "Logo Ownership <br /> Right",
      description:
        "It is our religion to give our <br />partners outright copyrights <br />of all products they co-opt.",
    },
    {
      id: 2,
      title: "Social Media <br /> Expertise",
      description:
        "Our team fabricates impressive <br />social media banners and posts <br />to illuminate different facets of <br />your brand across the globe.",
    },
    {
      id: 3,
      title: "Best Stationery <br /> Designing",
      description:
        "Our team invents expressive <br />stationery designs to highlight <br />brand identity and values.",
    },
    {
      id: 4,
      title: "ROI Boost via <br /> Landing Pages",
      description:
        "Make effective use of advertising <br />investment with our UX/UI designed <br />landing pages.",
    },
    {
      id: 5,
      title: "Money Back <br /> Guarantee",
      description:
        "All our branding services feature <br />money back guarantee to give you <br />convenience at our cost.",
    },
    {
      id: 6,
      title: "Industry Specific <br /> Designs",
      description:
        "Our expert strategists make use of <br />industry-specific trends to create <br />insurmountable value for your brand.",
    },
    {
      id: 7,
      title: "Unique <br /> Designs",
      description:
        "Uncommon designs allow our partners <br />to develop exclusive brand <br />positioning.",
    },
  ];

  return (
    <>
      {/* <CyberHologramLoader /> */}

      <Navbar />

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

      {/* Industries Hero Section */}
      <section className="py-[18%] max-lg:py-0 max-lg:pt-[24%] max-lg:pb-[10%] w-full flex items-center">
        <div className="relative z-10 ml-20 max-lg:ml-5">
          <div className="mb-16 flex items-center gap-3 text-sm text-white">
            <img src="/images/about-us/icon.png" />
            <p className="font-poppins font-medium text-lg">Branding</p>
          </div>

          <h1 className="text-[clamp(30px,3.6vw,70px)] font-normal font-sora uppercase mb-4 tracking-tight leading-20.25 max-1600:leading-15 max-xl:leading-12 text-white">
            <AuroraText colors={["#ffffff", "#d1bd73"]}>
              Branding <br /> Brands That Shape You{" "}
            </AuroraText>
            <span className="text-[clamp(50px,4vw,86px)] font-thin text-end items-end max-lg:text-start max-lg:items-start block">
              <AuroraText colors={["#D42290", "#2DAEEF"]}>
                Brand & Persona
              </AuroraText>
            </span>
          </h1>

          <p className="font-sora font-normal text-white/70 text-[clamp(10px,1vw,19px)]">
            From early spark to brand logo, we create and shape profiles that
            show who you are online
          </p>
        </div>

        <div className="absolute w-4/6 max-1600:w-3/4 max-1280:w-4/6 top-40 -right-60 max-1440:-right-52.5 max-1280:-right-35 z-10">
          <img
            src="/images/services/branding/hero.png"
            className=""
            alt="Branding Hero"
          />
        </div>
      </section>

      <section className="relative px-24 max-lg:p-2 z-10 justify-center flex">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="relative z-10 w-full h-full rounded-[34.137px] object-contain opacity-90"
        >
          <source
            src="/images/services/branding/section-2.mp4"
            type="video/mp4"
          />
        </video>
      </section>

      <div className="relative">
        <div className="absolute inset-0 z-0 -mt-[30%]">
          <Image
            alt="linear-gradient-bg"
            width={1920}
            height={1080}
            src="/images/services/bg-gradient-1.png"
          />
        </div>

        <section className="relative z-10 py-24 lg:py-52 px-6 lg:px-36">
          <div className="flex justify-end max-lg:justify-center">
            <h2 className="text-4xl lg:text-6xl font-sora font-light uppercase tracking-tight leading-snug mb-24 -ml-16 max-lg:ml-0">
              <TextType
                text="Identity-first"
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={false}
                startOnVisible={true}
                loop={true}
              />
              <br />
              <TextType
                text="Modern Branding Studio"
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
                src="/images/services/branding/section-3.png"
                alt="Laptop showcasing website design"
                className="h-full w-full object-cover"
                style={{ mixBlendMode: "screen", scale: "150%" }}
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

        <section>
          <img
            src="/images/services/branding/section-4.png"
            className="relative z-10 h-full w-full object-cover bg-center"
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

        <div id="branding" className="relative z-10 pt-64">
          <div>
            <h2 className="mx-20 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-sora font-light uppercase tracking-tight leading-snug">
              <TextType
                text="Modern web dev made for"
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={false}
                startOnVisible={true}
                loop={true}
              />
              <br />
              <TextType
                text="Immersive website user experience"
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={false}
                startOnVisible={true}
                loop={true}
              />
            </h2>
            <div className="mx-20 text-[24px] max-1440:text-[20px] max-1280:text-[16px] max-xl:text-[12px] lg:mt-10 text-[#808080]">
              <TextType
                text="Branding is mandatory for businesses, as it changes how target audience perceive your brand; it increases brand awareness, and it drives sales. Branding gives your business competitive advantage and grows business value."
                typingSpeed={15}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                startOnVisible={true}
                loop={true}
              />
            </div>
          </div>

          <div id="branding-layout">
            <LayoutGrid cards={layoutImages} />
            <style
              dangerouslySetInnerHTML={{
                __html: `
                  #branding #branding-layout > div.grid {
                    gap: 50px !important;
                    padding: 5rem !important;
                  }
                  #branding #branding-layout img {
                      border-radius: 25.788px !important;
                  }
                  @media (max-width: 1024px) {
                    #branding #branding-layout > div.grid {
                      padding: 25px !important;
                    }
                  }
                  /* Hide the absolute overlay inside LayoutGrid cards */
                  #branding
                    #branding-layout
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
    </>
  );
}
