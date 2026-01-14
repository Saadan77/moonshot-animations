"use client";

import Link from "next/link";
import {
  ArrowRight,
  Gauge,
  Laptop,
  Search,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  User,
} from "lucide-react";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

import { AuroraText } from "@/components/ui/aurora-text";
import Dither from "@/components/Dither";
import ScrollReveal from "@/components/lightswind/scroll-reveal";
import TextType from "@/components/TextType";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import DecorativeLines from "@/app/components/DecorativeLines";
import Ribbons from "@/components/Ribbons";
import Image from "next/image";
import ServiceCard from "@/app/components/ServiceCard";
import FormCTA from "@/app/components/FormCTA";
import HorizontalScrollCards from "@/app/components/HorizontalScroll";

const data = [
  {
    src: "/images/services/web-development/success-stories/image-1.png",
  },
  {
    src: "/images/services/web-development/success-stories/image-2.png",
  },
  {
    src: "/images/services/web-development/success-stories/image-3.png",
  },
  {
    src: "/images/services/web-development/success-stories/image-4.png",
  },
  {
    src: "/images/services/web-development/success-stories/image-1.png",
  },
  {
    src: "/images/services/web-development/success-stories/image-2.png",
  },
  {
    src: "/images/services/web-development/success-stories/image-3.png",
  },
  {
    src: "/images/services/web-development/success-stories/image-4.png",
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

export default function WebDevelopment() {
  const layoutImages = [
    {
      id: 1,
      thumbnail: "/images/services/web-development/layout-grid/image-1.png",
      className: "md:col-span-3 md:row-span-2",
      content: null,
    },
    {
      id: 2,
      thumbnail: "/images/services/web-development/layout-grid/image-2.png",
      className: "md:col-span-2",
      content: null,
    },
    {
      id: 3,
      thumbnail: "/images/services/web-development/layout-grid/image-3.png",
      className: "md:col-span-2",
      content: null,
    },
  ];

  const webDevInfo = [
    {
      id: 1,
      title: "Web Portal <br /> Development",
      description:
        "Our expert programmers develop customer-focused web portals comprising all the necessary functionalities and characteristics to make your business effective and efficient.",
    },
    {
      id: 2,
      title: "Custom Web <br /> Development",
      description:
        "Tech With Moonshot fabricate tailor-made websites to transform your ideas into workable reality.",
    },
    {
      id: 3,
      title: "E-Commerce Web <br /> Development",
      description:
        "Our expert team develops economical and affordable e-commerce websites for you.",
    },
    {
      id: 4,
      title: "Enterprise <br /> Web Development",
      description:
        "We use best practices, testing, and analytics to improve speed, stability, and conversions, so your website keeps getting better with real data over time.",
    },
  ];

  return (
    <>
      {/* <CyberHologramLoader /> */}
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

      <section>
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
        <div className="py-[18%] max-lg:py-0 max-lg:pt-[24%] max-lg:pb-[10%] w-full flex">
          <div className="relative z-10 ml-20 max-lg:ml-5">
            <div className="mb-16 flex items-center gap-3 text-sm text-white">
              <img src="/images/about-us/icon.png" />
              <p className="font-poppins font-medium text-lg">
                Website Development
              </p>
            </div>

            <h1 className="text-[clamp(30px,4vw,74px)] font-normal font-sora uppercase mb-4 tracking-tight leading-20.25 max-2xl:leading-15 max-xl:leading-12 text-white">
              <AuroraText colors={["#ffffff", "#d1bd73"]}>
                Building <br /> Sites That Shape Your{" "}
              </AuroraText>
              <span className="text-[clamp(40px,4.5vw,86px)] font-thin text-end items-end max-lg:text-start max-lg:items-start block">
                <AuroraText colors={["#D42290", "#2DAEEF"]}>
                  Brand & Profile
                </AuroraText>
              </span>
            </h1>

            <p className="font-sora font-normal text-white/70 text-[clamp(10px,1.1vw,20px)]">
              From first ideas to final code, we design and build websites that
              show who you are online
            </p>
          </div>

          <img
            src="/images/services/web-development/hero-cropped.png"
            className="absolute -top-10 max-1600:top-15 right-0 z-10 w-[90%] h-auto"
            alt="Astronaut"
          />
        </div>
      </section>

      <div className="relative px-5 md:px-20 z-10">
        <img
          src="/images/services/web-development/sec-2.png"
          className="h-auto w-full object-cover rounded-[34.137px]"
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

        <section className="py-24 lg:py-32 px-6 lg:px-36 bg-bottom">
          <div className="flex justify-end max-lg:justify-center">
            <h2 className="text-white text-4xl lg:text-6xl font-sora font-light uppercase tracking-tight leading-snug mb-20 -ml-16 max-lg:ml-0">
              <TextType
                text="Human-centered"
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={false}
                startOnVisible={true}
                loop={true}
              />
              <br />
              <TextType
                text="web development Studio"
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={false}
                startOnVisible={true}
                loop={true}
              />
            </h2>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-36 max-xl:gap-0">
            {/* Image column */}
            <div className="-mt-10 relative z-10 flex items-center justify-center">
              <img
                src="/images/services/web-development/section-3.png"
                alt="Laptop showcasing website design"
                className="h-auto w-full scale-125"
                style={{ mixBlendMode: "screen" }}
              />
            </div>

            {/* Text column */}
            <div className="text-white space-y-12">
              <div className="flex items-stretch gap-16 max-lg:gap-8">
                <div className="w-1 bg-white self-stretch mt-7 mb-8.5" />
                <div className="tracking-[-0.03em]">
                  <ScrollReveal size="sm" enableBlur={false}>
                    Tech With Moonshot makes use of collaborative efforts to
                    give you a good website development services. Additionally,
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
            src="/images/services/web-development/section-4.png"
            className="h-[85%] w-full object-cover"
          />
        </section>
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

        <div id="web-dev" className="relative z-10 pt-20">
          <div>
            <h2 className="mx-20 text-5xl 2xl:text-6xl font-sora font-light uppercase tracking-tight leading-tight">
              <TextType
                text="Multifaceted Web Development Services"
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={false}
                startOnVisible={true}
                loop={true}
              />
            </h2>
            <div className="mx-20 text-[24px] max-1440:text-[20px] max-1280:text-[16px] max-xl:text-[12px] lg:mt-10 text-white/80 leading-relaxed">
              <TextType
                text="‘Tech With Moonshot’ allows a range of software development services. Interestingly, our professional programmers work with you to deliver customized and meaningful web development services."
                typingSpeed={15}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                startOnVisible={true}
                loop={true}
              />
            </div>
          </div>

          <div id="web-dev-layout">
            <LayoutGrid cards={layoutImages} />
            <style
              dangerouslySetInnerHTML={{
                __html: `
                      #web-dev #web-dev-layout > div.grid {
                          gap: 50px !important;
                          padding: 5rem !important;
                      }
                      #web-dev #web-dev-layout img {
                          border-radius: 25.788px !important;
                      }
                      @media (max-width: 1024px) {
                          #web-dev #web-dev-layout > div.grid {
                              padding: 25px !important;
                          }
                      }
                      @media (min-width: 48rem) { 
                          #web-dev #web-dev-layout .grid {
                              grid-template-columns: repeat(5, minmax(0, 1fr));
                          }
                      }
                      #web-dev #web-dev-layout .grid > div > div .absolute.bottom-0.left-0.right-0 {
                          display: none !important;
                      }
                  `,
              }}
            />
          </div>
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

        <div className="max-w-[90%] min-w-[90%] max-xl:max-w-[95%] max-xl:min-w-[95%] mx-auto my-20 1440:my-30 text-white/30 w-px h-px bg-white/30"></div>

        {/* Success Stories Section */}
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

      {/* <section className="py-20 px-20">
        <h2
          className="relative z-50 my-8 min-h-37.5 lg:min-h-12.5 text-white font-normal text-center text-6xl max-2xl:text-5xl max-xl:text-4xl leading-tight uppercase"
          style={{ fontFamily: "var(--font-sora), sans-serif" }}
        >
          <TextType
            text={["Specialties"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={false}
            startOnVisible={true}
            loop={true}
          />
        </h2>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            title="Responsive Design"
            description="Responsive websites are workable across multiple platforms to increase the reach of your brand."
            icon={<Laptop />}
          />

          <ServiceCard
            title="Conversion-driven Design"
            description="Our web applications are fabricated in a way that promotes lead conversion."
            icon={<TrendingUp />}
          />

          <ServiceCard
            title="Search Engine Optimized"
            description="Tech With Moonshot professionals give our partners optimized and keyword loaded web applications."
            icon={<Search />}
          />

          <ServiceCard
            title="Safety and security"
            description="Our team fashions web applications that are secured with SSL certification."
            icon={<ShieldCheck />}
          />

          <ServiceCard
            title="Mobile Ready"
            description="It is advantageous for our partners to build applications that are also mobile-ready and convertible."
            icon={<Smartphone />}
          />

          <ServiceCard
            title="User Experience"
            description="Without proper induction of efficacious user experience, no web application is worthy for your brand."
            icon={<User />}
          />

          <div className="md:col-start-2">
            <ServiceCard
              title="Speed"
              description="Google algorithms pick up those web applications that are easily loadable and speedy. Fortunately, our web developers have abundant skills to accelerate the web speed."
              icon={<Gauge />}
            />
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="min-w-screen h-37.5 rounded-t-full blur-[80px] in-out"
              style={{
                background:
                  "linear-gradient(119deg, rgba(57, 40, 255, 0.80) 14.54%, rgba(250, 40, 242, 0.80) 41.09%, rgba(35, 141, 250, 0.80) 55.83%, rgba(62, 95, 249, 0.80) 80.08%), linear-gradient(119deg, rgba(255, 198, 40, 0.80) 14.54%, rgba(250, 40, 137, 0.80) 41.09%, rgba(35, 141, 250, 0.80) 55.83%, rgba(62, 95, 249, 0.80) 80.08%)",
                backgroundSize: "200% 100%, 200% 100%",
              }}
            />
          </div>
        </div>
      </section> */}

      <FormCTA />
      <Footer />
    </>
  );
}
