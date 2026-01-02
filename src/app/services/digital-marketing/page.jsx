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

const data = [
  {
    src: "/images/services/digital-marketing/success-stories/image-1.png",
  },
  {
    src: "/images/services/digital-marketing/success-stories/image-2.png",
  },
  {
    src: "/images/services/digital-marketing/success-stories/image-3.png",
  },

  {
    src: "/images/services/digital-marketing/success-stories/image-1.png",
  },
  {
    src: "/images/services/digital-marketing/success-stories/image-2.png",
  },
  {
    src: "/images/services/digital-marketing/success-stories/image-3.png",
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

export default function DigitalMarketing() {
  const layoutImages = [
    {
      id: 1,
      thumbnail: "/images/services/digital-marketing/layout-grid/image-1.png",
      className: "md:col-span-2 md:row-span-2",
      content: null,
    },
    {
      id: 2,
      thumbnail: "/images/services/digital-marketing/layout-grid/image-2.png",
      className: "md:col-span-1",
      content: null,
    },
    {
      id: 3,
      thumbnail: "/images/services/digital-marketing/layout-grid/image-3.png",
      className: "md:col-span-1",
      content: null,
    },
  ];

  const webDevInfo = [
    {
      id: 1,
      title: "Discovery <br /> & Requirements",
      description:
        "We don't build on guesses. <br />Our websites start with clear requirements, <br />goals, and user journeys so the development <br />is aligned with real business needs.",
    },
    {
      id: 2,
      title: "Architecture, <br /> Wireframes & Flows",
      description:
        "From simple sites to complex <br />web apps, we plan the structure, flows, <br />and layouts so every page has a clear <br />purpose and leads users to action.",
    },
    {
      id: 3,
      title: "Pixel-perfect <br /> Frontend Development",
      description:
        "We turn designs into responsive, <br />fast, and clean code – using modern web <br />standards to make sure your website looks <br />and works great on every device.",
    },
    {
      id: 4,
      title: "Scalable & <br /> Data-Driven Web Builds",
      description:
        "We use best practices, testing, <br />and analytics to improve speed, stability, <br />and conversions, so your website keeps <br />getting better with real data over time.",
    },
  ];

  const WebDevCard = ({ card }) => {
    return (
      <div key={card.id} className="space-y-4">
        <p
          className="text-[clamp(16px,1.3vw,24px)] uppercase text-[#ecedcf]"
          dangerouslySetInnerHTML={{ __html: card.title }}
        ></p>
        <p
          className="text-[clamp(10px,0.9vw,16px)] font-light text-[#ecedcf]"
          dangerouslySetInnerHTML={{ __html: card.description }}
        />
      </div>
    );
  };

  return (
    <>
      {/* <CyberHologramLoader /> */}
      <section
        className="relative bg-black"
        style={{ fontFamily: "var(--font-sora), sans-serif" }}
      >
        <Navbar />

        <div className="min-h-screen flex items-center relative w-full overflow-hidden">
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
          <div
            className="absolute inset-0 col-span-1 brightness-125 h-[150vh]"
            style={{ backgroundImage: "url('/images/bg-hero.png')" }}
          />

          <DecorativeLines />

          {/* Industries Hero Section */}
          <div className="">
            <div className="relative z-10 ml-20 max-lg:ml-5">
              <div className="mb-16 flex items-center gap-3 text-sm text-white">
                <img src="/images/about-us/icon.png" />
                <p className="font-poppins font-medium text-lg">
                  Digital Marketing
                </p>
              </div>

              <h1 className="text-[clamp(30px,3.6vw,74px)] font-normal font-sora uppercase mb-4 tracking-tight leading-20.25 max-1600:leading-15 max-xl:leading-12 text-white">
                <AuroraText colors={["#ffffff", "#d1bd73"]}>
                  Ad Growth <br /> Campaigns That Drive{" "}
                </AuroraText>
                <span className="text-[clamp(32px,3.6vw,86px)] font-thin text-end items-end max-lg:text-start max-lg:items-start block">
                  <AuroraText colors={["#D42290", "#2DAEEF"]}>
                    Traffic & Sales
                  </AuroraText>
                </span>
              </h1>

              <p className="font-sora font-medium text-white/70 text-[clamp(10px,0.9vw,19px)]">
                From strategy to launch, we plan, run and optimize campaigns
                that grow your brand online.
              </p>
            </div>

            <img
              src="/images/services/digital-marketing/hero.png"
              className="absolute bottom-0 right-0 max-1600:w-1/2 max-xl:w-[45%] z-10 h-auto"
              alt="Digital Marketing Hero"
            />
          </div>
        </div>

        <div className="relative mt-20 py-5 px-24 max-lg:p-2 z-10 justify-center flex">
          <img
            src="/images/services/digital-marketing/section-2.png"
            className="h-auto w-full object-cover rounded-4xl items-center"
          />
        </div>

        <div>
          <div
            className="bg-top"
            style={{ backgroundImage: "url(/images/services/bg-gradient.png)" }}
          >
            <section className="py-24 lg:py-32 px-6 lg:px-36 bg-bottom min-h-screen">
              <div className="flex justify-end max-lg:justify-center">
                <h2 className="text-4xl lg:text-6xl font-sora font-light uppercase tracking-tight leading-snug mb-24 -ml-16 max-lg:ml-0">
                  <TextType
                    text="Results-driven"
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={false}
                    startOnVisible={true}
                    loop={true}
                  />
                  <br />
                  <TextType
                    text="digital marketing team"
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
                    src="/images/services/digital-marketing/section-3.png"
                    alt="Laptop showcasing website design"
                    className="h-full w-full object-cover"
                    style={{ mixBlendMode: "screen" }}
                  />
                </div>

                {/* Text column */}
                <div className="col-span-1 text-white space-y-4">
                  <div className="flex gap-16 max-lg:gap-8">
                    <div className="w-2 bg-white mt-5 mb-10">|</div>
                    <div className="tracking-[-0.03em]">
                      <ScrollReveal size="sm" enableBlur={false}>
                        Tech With Moonshot makes use of collaborative efforts to
                        give you a good website development services.
                        Additionally, our professional website developers give
                        you exclusive insights how to make user friendly,
                        interactive, secure and speedy websites. Moreover, our
                        front-end developers and back-end developers know how to
                        service your web development request in agile manner.
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

            <section className="h-screen">
              <img
                src="/images/services/digital-marketing/section-4.png"
                className="h-full w-full object-cover bg-center"
              />
            </section>
          </div>

          <div
            className="bg-no-repeat"
            style={{ backgroundImage: "url(/images/services/bg-gradient.png)" }}
          >
            <section id="digital-marketing" className="pt-64 pb-20">
              <div className="flex flex-col items-center">
                <h2 className="text-5xl 2xl:text-6xl font-sora font-light uppercase tracking-tight leading-snug">
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
              </div>

              <div id="digital-marketing-layout" className="my-20">
                <LayoutGrid cards={layoutImages} />
                <style jsx global>{`
                  #digital-marketing #digital-marketing-layout > div.grid {
                    gap: 50px !important;
                    padding: 5rem !important;
                  }
                  @media (max-width: 1024px) {
                    #digital-marketing #digital-marketing-layout > div.grid {
                      padding: 25px !important;
                    }
                  }
                  /* Hide the absolute overlay inside LayoutGrid cards */
                  #digital-marketing
                    #digital-marketing-layout
                    .grid
                    > div
                    > div
                    .absolute.bottom-0.left-0.right-0 {
                    display: none !important;
                  }
                `}</style>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 flex-wrap max-w-[95%] xl:max-w-[90%] mx-auto gap-4 xl:gap-8 2xl:gap-12 h-full items-center">
                {webDevInfo.map((card) => (
                  <WebDevCard key={card.id} card={card} />
                ))}
              </div>

              <div className="max-w-[90%] mx-auto my-20 min-w-[90%] text-white/30 w-px h-px bg-white/30"></div>

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

              <div className="lg:-mt-16 xl:-mt-20">
                <SuccessStories />
              </div>
            </section>
          </div>
        </div>

        <CTA />
        <Footer />
      </section>
    </>
  );
}
