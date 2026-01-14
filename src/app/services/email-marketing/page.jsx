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
import HorizontalScrollCards from "@/app/components/HorizontalScroll";

const data = [
  {
    src: "/images/services/email-marketing/success-stories/image-1.png",
  },
  {
    src: "/images/services/email-marketing/success-stories/image-2.png",
  },
  {
    src: "/images/services/email-marketing/success-stories/image-3.png",
  },

  {
    src: "/images/services/email-marketing/success-stories/image-1.png",
  },
  {
    src: "/images/services/email-marketing/success-stories/image-2.png",
  },
  {
    src: "/images/services/email-marketing/success-stories/image-3.png",
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

export default function EmailMarketing() {
  const layoutImages = [
    {
      id: 1,
      thumbnail: "/images/services/email-marketing/layout-grid/image-1.png",
      className: "md:col-span-1 md:row-span-1",
      content: null,
    },
    {
      id: 2,
      thumbnail: "/images/services/email-marketing/layout-grid/image-2.png",
      className: "md:col-span-2",
      content: null,
    },
  ];

  const webDevInfo = [
    {
      id: 1,
      title: "Conversion-driven <br /> Layout",
      description:
        "Our e-mail marketing has built-in layout <br />that seeks lead conversion. <br />Additionally, it is optimized, user <br />interactive and mobile friendly.",
    },
    {
      id: 2,
      title: "Error Free <br /> E-mails",
      description:
        "Error filled emails hurt brand image. <br />That's why 'Tech With Moonshot' <br />makes sure our email-marketing is <br />impeccable from every angle.",
    },
    {
      id: 3,
      title: "Data-Driven <br /> Content",
      description:
        "Tech With Moonshot' emailing specialists <br />make use of data-driven content to <br />make email promotions search engine <br />optimized.",
    },
    {
      id: 4,
      title: "Targeted <br /> Emails",
      description:
        "Segmented email marketing produce <br />better results in terms of reach <br />and lead generation.",
    },
    {
      id: 5,
      title: "Personalization",
      description:
        "Email-marketing is more effectual <br />when they deliver personalized <br />messages to targeted niche.",
    },
    {
      id: 6,
      title: "AI <br /> embedded",
      description:
        "AI embedded email marketing strategies <br />are more productive, as they use <br />algorithm to predict sophisticated <br />taglines for target audience.",
    },
    {
      id: 7,
      title: "Go beyond <br /> text",
      description:
        "Send images, videos, apps, and emoji <br />to tell your story and drive action <br />in the most powerful way possible.",
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

          {/* Decorative Lines */}
          <DecorativeLines />

          {/* Hero Section */}
          <div className="py-[18%] max-2xl:py-[22%]">
            <div className="relative z-10 ml-20 max-lg:ml-5">
              <div className="mb-16 flex items-center gap-3 text-sm text-white">
                <img src="/images/about-us/icon.png" />
                <p className="font-poppins font-medium text-lg">
                  Email Marketing
                </p>
              </div>

              <h1 className="text-[clamp(40px,3.8vw,72px)] font-normal font-sora uppercase mb-4 tracking-tight leading-20.25 max-2xl:leading-15 max-xl:leading-12 text-white">
                <AuroraText colors={["#ffffff", "#d1bd73"]}>
                  Driving <br /> Emails That Power Your{" "}
                </AuroraText>
                <span className="text-[clamp(50px,4.5vw,82px)] font-thin text-end items-end max-lg:text-start max-lg:items-start block">
                  <AuroraText colors={["#D42290", "#2DAEEF"]}>
                    Brand & Growth
                  </AuroraText>
                </span>
              </h1>

              <p className="text-wrap font-sora font-normal text-white/70 text-[clamp(10px,1vw,20px)]">
                From bold concepts to polished sends, we create email flows that
                clearly reflect who you are online
              </p>
            </div>

            <img
              src="/images/services/email-marketing/hero.png"
              className="absolute w-[40%] max-xl:w-[35%] h-auto bottom-0 max-xl:bottom-50 right-0 z-10"
              alt="Email Marketing Hero"
            />
          </div>
        </div>

        <div className="relative p-5 max-lg:p-5 z-10 justify-center flex">
          <img
            src="/images/services/email-marketing/section-2.png"
            className="h-auto w-[95%] max-lg:w-full object-cover rounded-4xl items-center"
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
              <h2 className="text-4xl lg:text-6xl font-sora font-light uppercase tracking-tight leading-snug mb-24 -ml-16 max-lg:ml-0">
                <TextType
                  text="Performance-driven"
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={false}
                  startOnVisible={true}
                  loop={true}
                />
                <br />
                <TextType
                  text="Email Marketing Studio"
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={false}
                  startOnVisible={true}
                  loop={true}
                />
              </h2>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-24">
              {/* Image column */}
              <div className="-mt-50 max-xl:mt-0 relative z-10 col-span-1 flex items-center justify-center">
                <img
                  src="/images/services/email-marketing/section-3.png"
                  alt="Laptop showcasing website design"
                  className="h-full w-full object-cover"
                  style={{ mixBlendMode: "screen" }}
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

          <img
            src="/images/services/email-marketing/section-4.png"
            className="relative z-10 h-[110vh] w-full object-cover"
          />
        </div>

        <div className="relative">
          <div className="absolute inset-0 z-0 -mt-[20%]">
            <Image
              alt="linear-gradient-bg"
              width={1920}
              height={1080}
              src="/images/services/bg-gradient-1.png"
            />
          </div>

          <section id="email-marketing" className="pt-64">
            <div className="flex flex-col">
              <h2 className="mx-20 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-sora font-light uppercase tracking-tight leading-tight">
                <TextType
                  text="Modern email flows made for"
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={false}
                  startOnVisible={true}
                  loop={true}
                />
                <br />
                <TextType
                  text="immersive customer engagement"
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={false}
                  startOnVisible={true}
                  loop={true}
                />
              </h2>
              <div className="mx-20 relative z-50 text-[24px] max-1440:text-[20px] max-1280:text-[16px] max-xl:text-[12px] lg:mt-10 leading-relaxed text-white/80">
                <TextType
                  text="E-mail is a powerful tool to connect with masses as it sends them personalized messages. The research clarifies the fact that email marketing is more effective than SMM. Additionally, it is used to convert web surfers into members and eventually loyal patrons."
                  typingSpeed={15}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                  startOnVisible={true}
                  loop={true}
                />
              </div>
            </div>

            <div id="email-marketing-layout">
              <LayoutGrid cards={layoutImages} />

              <style
                dangerouslySetInnerHTML={{
                  __html: `
                        #email-marketing #email-marketing-layout > div.grid {
                            gap: 50px !important;
                            padding: 5rem !important;
                        }
                        #email-marketing #email-marketing-layout img {
                            border-radius: 25.788px !important;
                        }
                        @media (max-width: 1024px) {
                            #email-marketing #email-marketing-layout > div.grid {
                                padding: 25px !important;
                            }
                        }
                        #email-marketing #email-marketing-layout .grid > div > div .absolute.bottom-0.left-0.right-0 {
                            display: none !important;
                        }
                    `,
                }}
              />
            </div>
          </section>

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
