"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import SmoothScroll from "../components/SmoothScroll";
import { AuroraText } from "@/components/ui/aurora-text";
import Dither from "@/components/Dither";
import Partners from "../components/UI/Partners";
import ScrollReveal from "@/components/lightswind/scroll-reveal";
import TextType from "@/components/TextType";
import { CountingNumber } from "@/components/ui/shadcn-io/counting-number";
import { Gallery3D } from "../components/Gallery3D";
import SlidingLogoMarquee from "@/components/lightswind/sliding-logo-marquee";
import AboutUsCards from "../components/AboutUsCards";
import DecorativeLines from "../components/DecorativeLines";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUsPage() {
  const cards = [
    {
      id: 1,
      title: "Problem discovery",
      description:
        "Usability Studies <br /> User Interviews <br /> Stakeholder Interviews <br /> Competitive Research <br /> Insights Report <br /> User Journey",
    },
    {
      id: 2,
      title: "Design system ready",
      description:
        "Thinking Workshops <br /> Sitemaps <br /> Concepts <br /> Designs <br /> Prototypes <br /> Usability Studies",
    },
    {
      id: 3,
      title: "Design implementation",
      description:
        "Design <br /> Use Cases <br /> User Flows <br /> Various User Types <br /> Annotations <br /> Interactions",
    },
    {
      id: 4,
      title: "Development phase",
      description:
        "Frontend Development <br /> Backend Development <br /> API Integration <br /> Database Setup <br /> Code Reviews <br /> Version Control",
    },
    {
      id: 5,
      title: "Quality assurance",
      description:
        "Unit Testing <br /> Integration Testing <br /> System Testing <br /> User Acceptance Testing <br /> Bug Fixing <br /> Performance Optimization",
    },
    {
      id: 6,
      title: "Deployment and Testing",
      description:
        "Test Plans <br /> Functional Testing <br /> Usability Testing <br /> Performance Testing <br /> Security Testing <br /> Bug Tracking",
    },
    {
      id: 7,
      title: "Maintenance and iteration",
      description:
        "Monitoring & Analytics <br /> Bug Fixes <br /> Performance Optimization <br /> Feature Enhancements <br /> User Feedback Integration <br /> Regular Updates",
    },
  ];

  const Card = ({ card }) => {
    return (
      <>
        <div
          key={card.id}
          className="group relative w-[500px] overflow-hidden"
          style={{ height: "500px" }}
        >
          <div className="absolute inset-0 z-10 grid place-content-center">
            <p className="px-4 text-[24px] font-black uppercase text-white">
              {card.title}
            </p>
            <p
              className="px-4 text-[17px] text-white"
              dangerouslySetInnerHTML={{ __html: card.description }}
            />
          </div>
        </div>
        <img src="/images/arrow.png" alt="arrow" className="h-auto w-[207px]" />
      </>
    );
  };

  const HorizontalScrollCarousel = () => {
    const carouselRef = useRef(null);
    const contentRef = useRef(null);

    useGSAP(() => {}, { scope: carouselRef });

    useLayoutEffect(() => {
      const carouselEl = carouselRef.current;
      const contentEl = contentRef.current;
      if (!carouselEl || !contentEl) return;

      let tween;
      let st;

      const waitForMedia = () => {
        const media = Array.from(
          contentEl.querySelectorAll("img, video, picture, source")
        );
        if (!media.length) return Promise.resolve();
        const pending = media.map((m) => {
          // images
          if (m.tagName.toLowerCase() === "img") {
            if (m.complete && m.naturalWidth !== 0) return Promise.resolve();
            return new Promise((resolve) => {
              const onLoad = () => {
                m.removeEventListener("load", onLoad);
                m.removeEventListener("error", onLoad);
                resolve();
              };
              m.addEventListener("load", onLoad);
              m.addEventListener("error", onLoad);
            });
          }
          if (
            m.tagName.toLowerCase() === "video" ||
            m.tagName.toLowerCase() === "source"
          ) {
            if (m.readyState >= 1) return Promise.resolve();
            return new Promise((resolve) => {
              const onLoaded = () => {
                m.removeEventListener("loadedmetadata", onLoaded);
                m.removeEventListener("loadeddata", onLoaded);
                resolve();
              };
              m.addEventListener("loadedmetadata", onLoaded);
              m.addEventListener("loadeddata", onLoaded);
              setTimeout(resolve, 2000);
            });
          }
          return Promise.resolve();
        });
        return Promise.all(pending);
      };

      const setup = () => {
        ScrollTrigger.getAll().forEach((t) => {});

        const totalWidth = contentEl.scrollWidth;
        const viewportWidth = window.innerWidth;

        if (totalWidth <= viewportWidth) {
          if (tween) tween.kill();
          if (st) st.kill();
          return;
        }

        tween = gsap.to(contentEl, {
          x: () => -(contentEl.scrollWidth - window.innerWidth),
          ease: "none",
          onUpdate: () => {},
          scrollTrigger: {
            trigger: carouselEl,
            start: "top top",
            end: () => `+=${contentEl.scrollWidth - window.innerWidth}`,
            scrub: true,
            pin: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onRefresh: (self) => {
              if (tween) tween.invalidate();
            },
          },
        });

        st = tween.scrollTrigger;
      };

      let cancelled = false;
      waitForMedia().then(() => {
        if (cancelled) return;
        requestAnimationFrame(() => {
          if (cancelled) return;
          setup();
          window.addEventListener("load", () => ScrollTrigger.refresh());
        });
      });

      const ro = new ResizeObserver(() => {
        if (tween && tween.scrollTrigger) {
          ScrollTrigger.refresh();
        }
      });
      ro.observe(contentEl);

      return () => {
        cancelled = true;
        if (tween) tween.kill();
        if (st) st.kill();
        ro.disconnect();
      };
    }, []);

    return (
      <section ref={carouselRef} className="relative h-[75vh]">
        <div
          ref={contentRef}
          className="flex gap-4 absolute left-0 top-0 h-full items-center"
        >
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </section>
    );
  };

  const logos = [
    {
      id: "1",
      content: (
        <Image
          src="/images/about-us-page/slider-logos/logo-1.png"
          width={200}
          height={200}
          alt="Logo"
          data-smoother-ignore
        />
      ),
    },
    {
      id: "2",
      content: (
        <Image
          src="/images/about-us-page/slider-logos/logo-2.png"
          width={200}
          height={200}
          alt="Logo"
          data-smoother-ignore
        />
      ),
    },
    {
      id: "3",
      content: (
        <Image
          src="/images/about-us-page/slider-logos/logo-3.png"
          width={200}
          height={200}
          alt="Logo"
          data-smoother-ignore
        />
      ),
    },
    {
      id: "4",
      content: (
        <Image
          src="/images/about-us-page/slider-logos/logo-4.png"
          width={200}
          height={200}
          alt="Logo"
          data-smoother-ignore
        />
      ),
    },
    {
      id: "5",
      content: (
        <Image
          src="/images/about-us-page/slider-logos/logo-5.png"
          width={200}
          height={200}
          alt="Logo"
          data-smoother-ignore
        />
      ),
    },
    {
      id: "6",
      content: (
        <Image
          src="/images/about-us-page/slider-logos/logo-6.png"
          width={200}
          height={200}
          alt="Logo"
          data-smoother-ignore
        />
      ),
    },
    {
      id: "7",
      content: (
        <Image
          src="/images/about-us-page/slider-logos/logo-7.png"
          width={200}
          height={200}
          alt="Logo"
          data-smoother-ignore
        />
      ),
    },
    {
      id: "8",
      content: (
        <Image
          src="/images/about-us-page/slider-logos/logo-8.png"
          width={200}
          height={200}
          alt="Logo"
          data-smoother-ignore
        />
      ),
    },
  ];

  const images = [
    {
      position: [0.8, 0, 2.5],
      rotation: [0, 0, 0],
      url: "/images/about-us-page/image-1.png",
    },
    {
      position: [-0.6, 0, 2.5],
      rotation: [0, 0, 0],
      url: "/images/about-us-page/image-2.png",
    },
    {
      position: [-1.75, 0, 3.25],
      rotation: [0, Math.PI / 2.5, 0],
      url: "/images/about-us-page/image-3.png",
    },
    {
      position: [1.75, 0, 3.25],
      rotation: [0, -Math.PI / 2.5, 0],
      url: "/images/about-us-page/image-4.png",
    },
  ];

  return (
    <SmoothScroll>
      <section
        className="relative bg-black"
        style={{ fontFamily: "var(--font-sora), sans-serif" }}
      >
        <Navbar />

        <div className="py-30 min-h-screen flex justify-center items-end relative w-full overflow-visible">
          <div className="absolute inset-0 w-full h-[125vh] opacity-20">
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
          </div>

          <div
            className="absolute inset-0 brightness-125 h-[150vh]"
            style={{ backgroundImage: "url('/images/bg-hero.png')" }}
          />

          {/* Decorative Lines */}
          <DecorativeLines />

          {/* Industries Hero Section */}
          <div className="flex max-lg:flex-col items-center justify-between gap-8">
            <div className="z-10 ml-20 max-lg:ml-5">
              <div className="mb-16 flex items-center gap-3 text-sm text-white/80">
                <div className="flex items-center gap-[3px]">
                  <span className="block h-2.5 w-0.5 rounded bg-white/70" />
                  <span className="block h-2.5 w-0.5 rounded bg-white/50" />
                  <span className="block h-2.5 w-0.5 rounded bg-white/30" />
                </div>
                <p className="font-bold text-lg">About Us</p>
              </div>

              <h1 className="font-normal font-sora uppercase mb-4 text-[66px] max-xl:text-[40px] max-sm:text-[30px] tracking-tight leading-none text-white">
                <AuroraText colors={["#ffffff", "#d1bd73"]}>
                  Shaping <br /> Ideas That Define Our{" "}
                </AuroraText>
                <span className="font-extralight text-end items-end max-lg:text-start max-lg:items-start block">
                  <AuroraText colors={["#D42290", "#2DAEEF"]}>
                    Purpose & Vision
                  </AuroraText>
                </span>
              </h1>

              <p className="font-light text-white/70 md:text-md lg:text-lg">
                From our values to our craft, this is how we shape stories that
                define who we are with care
              </p>
            </div>

            <img
              src="/images/about-us-bg.png"
              className="w-1/2 max-md:w-3/4 h-auto z-10"
              alt="Astronaut"
            />
          </div>
        </div>

        <div className="relative p-10 max-lg:p-1 z-10 justify-center flex">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-auto w-3/4 object-cover rounded-4xl items-center"
          >
            <source src="/videos/about-us-video.webm" type="video/mp4" />
          </video>
        </div>

        {/* Who We Are Section */}
        <div>
          <div className="relative z-10 max-w-[90%] mx-auto px-6 lg:px-8 py-5">
            <div className="space-y-10">
              <div className="flex items-center gap-3 text-lg text-[#808080]">
                <span className="text-nowrap font-poppins">
                  03 — Who we are
                </span>
              </div>

              <div className="uppercase font-sora scale-105 ml-10">
                <ScrollReveal>
                  From concept to execution, we build impactful digital
                  solutions that resonate with real people and deliver results
                </ScrollReveal>
              </div>

              <div className="flex max-lg:flex-col items-center justify-center gap-6">
                <div className="max-w-[50%] min-w-[50%] max-lg:min-w-full text-[#808080]">
                  <TextType
                    text="With expertise in areas such as web design, digital marketing, social media management, and content creation, digital agencies play a crucial role."
                    typingSpeed={15}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                    startOnVisible={true}
                    loop={true}
                  />
                </div>

                <div className="flex gap-8">
                  <div>
                    <p className="text-[120px] xl:text-[80px] sm:text-[60px]">
                      <CountingNumber
                        number={400}
                        inView={true}
                        transition={{ stiffness: 100, damping: 30 }}
                      />
                      +
                    </p>
                    <span className="text-xl">
                      Successful Projects <br /> Delivered
                    </span>
                  </div>
                  <div>
                    <p className="text-[120px] xl:text-[80px] sm:text-[60px]">
                      {"<"}
                      <CountingNumber
                        number={95}
                        inView={true}
                        transition={{ stiffness: 100, damping: 30 }}
                      />
                      %
                    </p>
                    <span className="text-xl">
                      Projects Success <br /> Rate
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Gallery3D images={images} />
          </div>
        </div>

        {/* Technologies Section */}
        <div>
          <div className="px-10 items-center py-20 bg-black">
            <div className="text-center relative z-10 space-y-8">
              <p className="text-white/60 text-2xl tracking-tight">
                05 - Technologies
              </p>
              <h2
                className="min-h-[150px] lg:min-h-[50px] text-white font-normal text-center text-6xl md:text-4xl max-sm:text-2xl leading-tight uppercase"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                <TextType
                  text={["Advanced Tech Stack for"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={false}
                  startOnVisible={true}
                  loop={true}
                />
              </h2>

              <h2
                className="min-h-[150px] lg:min-h-[50px] text-white font-normal text-center text-6xl md:text-4xl max-sm:text-2xl leading-tight uppercase"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                <TextType
                  text={["Performance, Scalability & Innovation"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={false}
                  startOnVisible={true}
                  loop={true}
                />
              </h2>

              <div style={{ transform: "translate3d(0, 0, 0)" }}>
                <SlidingLogoMarquee items={logos} />
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -bottom-8 left-[45%] z-100"
              style={{ transform: "translate3d(0, 0, 0)" }}
            >
              <Image
                src="/images/elevate-icon.png"
                alt="Elevate Icon"
                width={100}
                height={100}
                className="w-[120px] relative z-10"
              />
            </div>
          </div>

          {/* Linear Gradient Background Lines */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
              <div
                className="w-screen h-[200px] rounded-full blur-[120px] opacity-80"
                style={{
                  background:
                    "linear-gradient(119.09deg, #4f00ff 14.54%, #ff83bc 41.09%, rgba(35, 141, 250, 0.8) 55.83%, rgba(62, 95, 249, 0.8) 80.08%), linear-gradient(119.09deg, rgba(57, 40, 255, 0.8) 14.54%, rgba(250, 40, 137, 0.8) 41.09%, rgba(35, 141, 250, 0.8) 55.83%, rgba(62, 95, 249, 0.8) 80.08%)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Approach Section */}
        <div className="bg-black relative p-20 z-50 overflow-visible">
          <div className="flex max-md:flex-col items-start">
            <div className="mr-60 max-sm:mr-30 flex items-center gap-3 text-sm text-white/80">
              <div className="flex items-center gap-[3px]">
                <span className="block h-2.5 w-0.5 rounded bg-white/70" />
                <span className="block h-2.5 w-0.5 rounded bg-white/50" />
                <span className="block h-2.5 w-0.5 rounded bg-white/30" />
              </div>
              <p className="text-lg">06 - Approach</p>
            </div>

            <h2
              className="max-w-[40%] text-[60px] lg:text-[40px] max-sm:text-[30px] max-md:max-w-full uppercase font-normal"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Method of making better result
            </h2>
          </div>
          {/* <HorizontalScrollCarousel /> */}
        </div>

        {/* What Defines Us Section */}
        <div className="max-w-[90%] mx-auto bg-black relative py-20 mb-20">
          <div className="space-y-10">
            <div className="flex items-center gap-3 text-lg text-[#808080]">
              <span className="text-nowrap font-poppins">
                05 — What defines us
              </span>
            </div>

            <div className="uppercase font-sora scale-105 ml-10">
              <ScrollReveal>We deliver creative</ScrollReveal>
              <ScrollReveal>ideas to a crowded world.</ScrollReveal>
            </div>

            <AboutUsCards />
          </div>
        </div>

        <Partners />

        <CTA />
        <Footer />
      </section>
    </SmoothScroll>
  );
}
