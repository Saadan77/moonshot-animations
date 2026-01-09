"use client";

import React, { useRef, useLayoutEffect, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import { AuroraText } from "@/components/ui/aurora-text";
import Dither from "@/components/Dither";
import Partners from "../components/UI/Partners";
import ScrollReveal from "@/components/lightswind/scroll-reveal";
import TextType from "@/components/TextType";
import { CountingNumber } from "@/components/ui/shadcn-io/counting-number";
import SlidingLogoMarquee from "@/components/lightswind/sliding-logo-marquee";
import AboutUsCards from "../components/AboutUsCards";
import DecorativeLines from "../components/DecorativeLines";
import Ribbons from "@/components/Ribbons";
import CyberHologramLoader from "../components/CyberHologramLoader";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUsPage() {
  const cards = [
    {
      id: 1,
      title: "Problem <br /> discovery",
      description:
        "Usability Studies <br /> User Interviews <br /> Stakeholder Interviews <br /> Competitive Research <br /> Insights Report <br /> User Journey",
    },
    {
      id: 2,
      title: "Design <br /> system ready",
      description:
        "Thinking Workshops <br /> Sitemaps <br /> Concepts <br /> Designs <br /> Prototypes <br /> Usability Studies",
    },
    {
      id: 3,
      title: "Design <br /> implementation",
      description:
        "Design <br /> Use Cases <br /> User Flows <br /> Various User Types <br /> Annotations <br /> Interactions",
    },
    {
      id: 4,
      title: "Development <br /> phase",
      description:
        "Frontend Development <br /> Backend Development <br /> API Integration <br /> Database Setup <br /> Code Reviews <br /> Version Control",
    },
    {
      id: 5,
      title: "Quality <br /> assurance",
      description:
        "Unit Testing <br /> Integration Testing <br /> System Testing <br /> User Acceptance Testing <br /> Bug Fixing <br /> Performance Optimization",
    },
    {
      id: 6,
      title: "Deployment <br /> and Testing",
      description:
        "Test Plans <br /> Functional Testing <br /> Usability Testing <br /> Performance Testing <br /> Security Testing <br /> Bug Tracking",
    },
  ];

  const Card = ({ card }) => {
    return (
      <>
        <div
          key={card.id}
          className="group relative w-[250px] overflow-hidden"
          style={{ height: "350px" }}
        >
          <div className="absolute inset-0 z-10 grid place-content-start">
            <p
              className="mb-10 px-4 text-[24px] uppercase text-white"
              dangerouslySetInnerHTML={{ __html: card.title }}
            ></p>
            <p
              className="px-4 text-[17px] text-white font-light leading-loose"
              dangerouslySetInnerHTML={{ __html: card.description }}
            />
          </div>
        </div>
        {card.id !== cards.length && (
          <div className="w-[250px]">
            <img
              src="/images/arrow.png"
              alt="arrow"
              className="-mt-[140px] h-auto w-full"
            />
          </div>
        )}
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
        ScrollTrigger.getAll().forEach((t) => {
          if (t.vars.trigger === carouselEl) {
            t.kill();
          }
        });

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
          scrollTrigger: {
            trigger: carouselEl,
            start: "top top",
            end: () => `+=${contentEl.scrollWidth - window.innerWidth}`,
            scrub: 1,
            pin: true,
            pinSpacing: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            fastScrollEnd: true,
            preventOverlaps: true,
            onLeave: () => {
              gsap.set(contentEl, { clearProps: "all" });
            },
            onEnterBack: () => {
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
          className="flex gap-4 absolute left-0 top-0 h-full items-center pr-[50vw]"
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
        />
      ),
    },
  ];

  const smokeRef = useRef(null);

  useEffect(() => {
    const container = smokeRef.current;
    if (!container) return;

    function spawn(x, y) {
      const el = document.createElement("div");
      el.className = "elem";
      el.style.left = `${x - 25}px`;
      el.style.top = `${y - 25}px`;
      container.appendChild(el);
      el.addEventListener("animationend", () => {
        if (el.parentNode) el.parentNode.removeChild(el);
      });
    }

    const interval = setInterval(() => {
      const rect = container.getBoundingClientRect();
      const x = Math.random() * rect.width;
      const y = Math.random() * rect.height;
      spawn(x, y);
      while (container.children.length > 30) {
        container.removeChild(container.firstChild);
      }
    }, 700);

    const onMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spawn(x, y);
    };

    window.addEventListener("mousemove", onMove);

    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      {/* <CyberHologramLoader /> */}
      <section
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

          <div
            className="absolute inset-0 col-span-1 brightness-125 h-[150vh]"
            style={{ backgroundImage: "url('/images/bg-hero.png')" }}
          />

          {/* Decorative Lines */}
          <DecorativeLines />

          {/* Hero Section */}
          <div className="pt-[18%] pb-[20%]">
            <div className="relative z-10 lg:ml-20 max-lg:py-[2em] max-lg:pl-[5em]">
              <div className="mb-16 flex items-center gap-3 text-sm text-white">
                <img src="/images/about-us/icon.png" />
                <p className="font-poppins font-medium text-lg">About Us</p>
              </div>

              <h1 className="font-normal font-sora uppercase mb-4 text-[clamp(35px,4vw,45px)] lg:text-[clamp(45px,4vw,74px)] tracking-tight leading-20.25 max-2xl:leading-15 max-xl:leading-13 text-white">
                <AuroraText colors={["#ffffff", "#d1bd73"]}>
                  Shaping <br /> Ideas That Define Our{" "}
                </AuroraText>
                <span className="text-[clamp(40px,4vw,50px)] lg:text-[clamp(50px,4vw,86px)] font-thin text-end items-end max-lg:text-start max-lg:items-start block">
                  <AuroraText colors={["#D42290", "#2DAEEF"]}>
                    Purpose & Vision
                  </AuroraText>
                </span>
              </h1>

              <p className="font-normal font-sora text-white/70 text-xs lg:text-[clamp(12px,1.08vw,20px)]">
                From our values to our craft, this is how we shape stories that
                define who we are with care
              </p>
            </div>

            <div className="hidden lg:block lg:absolute top-40 -right-60 max-1440:top-50 max-1440:-right-90 max-1280:-right-110 max-xl:-right-160 z-10">
              <img
                src="/images/about-us-bg.png"
                className="w-full max-1440:w-3/4 max-1280:w-3/5 max-xl:w-1/2 h-auto"
                alt="Astronaut"
              />
            </div>
          </div>
        </div>

        <div className="relative py-10 px-20 max-lg:p-5 z-10 justify-center flex">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-auto object-cover rounded-[34.137px] items-center"
          >
            <source src="/videos/about-us-video.webm" type="video/mp4" />
          </video>
        </div>

        <div
          className="bg-top overflow-hidden brightness-[1.2]"
          style={{ backgroundImage: "url(/images/services/bg-gradient.png)" }}
        >
          {/* Who We Are Section */}
          <div>
            <div className="relative z-10 max-w-[90%] mx-auto px-0 xl:px-8 py-10 md:py-48">
              <div className="space-y-10">
                <div className="flex items-center gap-3 text-xl text-[#808080]">
                  <span className="text-nowrap font-poppins font-normal">
                    01 — Who We Are
                  </span>
                </div>

                <div className="uppercase font-sora lg:scale-115 max-lg:mx-5 lg:ml-20 xl:ml-27">
                  <ScrollReveal>
                    From concept to execution, we build <br /> impactful digital
                    solutions that resonate <br /> with real people and deliver
                    results
                  </ScrollReveal>
                </div>

                <div className="w-full md:max-w-[90%] flex max-lg:flex-col justify-between gap-6">
                  <div className="text-[17px] max-1440:text-[14px] max-1280:text-[12px] max-xl:text-[10px] lg:mt-10 text-[#808080]">
                    <TextType
                      text="With expertise in areas such as web design, digital marketing, social media <br />management, and content creation, digital agencies play a crucial role."
                      typingSpeed={15}
                      pauseDuration={1500}
                      showCursor={true}
                      cursorCharacter="|"
                      startOnVisible={true}
                      loop={true}
                    />
                  </div>

                  <div className="flex gap-16 max-lg:gap-8">
                    <div>
                      <p className="text-[clamp(50px,6vw,110px)]">
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
                      <p className="text-[clamp(50px,6vw,110px)]">
                        {">"}
                        <CountingNumber
                          number={95}
                          inView={true}
                          transition={{ stiffness: 100, damping: 30 }}
                        />
                        <span className="text-[50px]">%</span>
                      </p>
                      <span className="text-xl">
                        Projects Success <br /> Rate
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-20">
                {/* <Gallery3D images={images} /> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-end gap-6">
                  <div className="w-full relative mx-auto h-auto overflow-hidden">
                    <Image
                      src="/images/about-us-page/image-1.png"
                      width={400}
                      height={400}
                      alt="Image 1"
                      className="w-full h-auto relative z-0 transition-all duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="w-full relative mx-auto h-auto overflow-hidden">
                    <Image
                      src="/images/about-us-page/image-2.png"
                      width={400}
                      height={400}
                      alt="Image 2"
                      className="w-full h-auto relative z-0 transition-all duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="w-full relative mx-auto h-auto overflow-hidden">
                    <Image
                      src="/images/about-us-page/image-3.png"
                      width={400}
                      height={400}
                      alt="Image 3"
                      className="w-full h-auto relative z-0 transition-all duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="w-full relative mx-auto h-auto overflow-hidden">
                    <Image
                      src="/images/about-us-page/image-4.png"
                      width={400}
                      height={400}
                      alt="Image 4"
                      className="w-full h-auto relative z-0 transition-all duration-300 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technologies Section */}
          <div>
            <div className="px-10 items-center py-10 md:py-48 bg-black">
              <div className="text-center relative z-10">
                <p className="font-poppins font-normal text-[#808080] text-xl tracking-tight mb-8">
                  02 - Technologies
                </p>
                <h2
                  className="min-h-37.5 lg:min-h-12.5 text-white font-normal text-center text-6xl max-2xl:text-5xl max-xl:text-4xl leading-tight uppercase"
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
                  className="min-h-37.5 lg:min-h-12.5 text-white font-normal text-center text-6xl max-2xl:text-5xl max-xl:text-4xl leading-tight uppercase"
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

                <div className="mt-8">
                  <SlidingLogoMarquee items={logos} />
                </div>
              </div>
            </div>

            {/* Glow ellipse below cards */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  className="w-[95%] h-37.5 rounded-t-full blur-[80px] in-out"
                  style={{
                    background:
                      "linear-gradient(119deg, rgba(57, 40, 255, 0.80) 14.54%, rgba(250, 40, 242, 0.80) 41.09%, rgba(35, 141, 250, 0.80) 55.83%, rgba(62, 95, 249, 0.80) 80.08%), linear-gradient(119deg, rgba(255, 198, 40, 0.80) 14.54%, rgba(250, 40, 137, 0.80) 41.09%, rgba(35, 141, 250, 0.80) 55.83%, rgba(62, 95, 249, 0.80) 80.08%)",
                    backgroundSize: "200% 100%, 200% 100%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Approach Section */}
        <div>
          <div className="relative">
            <div className="absolute -top-12 left-[48%] z-100">
              <Image
                src="/images/elevate-icon.png"
                alt="Elevate Icon"
                width={100}
                height={100}
                className="w-30 relative z-10"
              />
            </div>
          </div>
          <div
            className="bg-bottom bg-no-repeat bg-fixed px-5 md:px-20 py-10 md:py-48"
            style={{
              backgroundImage: "url(/images/about-us-page/bg-gradient.png)",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="flex max-md:flex-col items-start justify-between">
              <p className="text-[#808080] font-poppins font-normal text-lg">
                03 - Approach
              </p>

              <h2
                className="text-[clamp(30px,4vw,60px)] uppercase font-normal leading-[1.2]"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Method of making <br /> better result
              </h2>
              <div />
            </div>
            <div className="-mt-24 ml-[33.5%] max-1600:ml-[30.7%] max-1440:ml-[29%]">
              <HorizontalScrollCarousel />
            </div>
          </div>
        </div>

        {/* What Defines Us Section */}
        <div
          className="bg-[#00050A] relative pb-10 overflow-hidden"
          style={{ borderRadius: "34.137px" }}
        >
          <div id="smoke" ref={smokeRef}></div>
          <style
            dangerouslySetInnerHTML={{
              __html: `
                #smoke {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    overflow: hidden;
                }

                .elem {
                    position: absolute;
                    width: 50px;
                    height: 50px;
                    background: radial-gradient(circle,rgba(53, 160, 214, 0.14) 0%, rgba(0, 89, 255, 0) 80%);
                    pointer-events: none;
                    animation: ripple 2s ease-out forwards;
                }

                @keyframes ripple {
                    0% {
                        transform: scale(3) translateY(0);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(10) translateY(-10px);
                        opacity: 0;
                    }
                }
                `,
            }}
          />

          <div className="max-w-[90%] mx-auto relative py-36">
            <span className="text-lg text-[#808080] text-nowrap font-poppins font-normal">
              04 — What Defines Us
            </span>

            <p className="text-[clamp(50px,4vw,60px)] mt-5 uppercase font-sora ml-5 leading-tight">
              We deliver creative <br /> ideas to a crowded world.
            </p>

            <div className="lg:mb-10 lg:mt-20 xl:mb-30 xl:mt-40 2xl:mb-40 2xl:mt-50">
              <AboutUsCards />
            </div>
          </div>

          {/* Glow ellipse below cards */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="w-[95%] h-37.5 rounded-t-full blur-[80px] in-out"
                style={{
                  background:
                    "linear-gradient(119deg, rgba(57, 40, 255, 0.80) 14.54%, rgba(250, 40, 242, 0.80) 41.09%, rgba(35, 141, 250, 0.80) 55.83%, rgba(62, 95, 249, 0.80) 80.08%), linear-gradient(119deg, rgba(255, 198, 40, 0.80) 14.54%, rgba(250, 40, 137, 0.80) 41.09%, rgba(35, 141, 250, 0.80) 55.83%, rgba(62, 95, 249, 0.80) 80.08%)",
                  backgroundSize: "200% 100%, 200% 100%",
                }}
              />
            </div>
          </div>
        </div>

        <div id="about-us-partners" className="relative z-50">
          <div className="absolute -top-10 left-[48%] z-100">
            <Image
              src="/images/elevate-icon.png"
              alt="Elevate Icon"
              width={100}
              height={100}
              className="w-25 relative z-10"
            />
          </div>

          <div className="absolute z-10 inset-0 top-0">
            <img
              src="/images/about-us-page/bg-partners.png"
              alt="Background Bottom"
              className="w-full h-auto object-cover"
            />
          </div>

          <Partners />

          <style
            dangerouslySetInnerHTML={{
              __html: `
              #about-us-partners .bg-\\[\\#00060B\\] {
                background-color: #00060b36;
              }
              #home-partners-clip-path {
                display: none;
              }
              #about-us-partners #partners {
                margin-top: 0px;
                padding-top: 10rem;
              }

              /* About Us page-only section number overrides */
              #about-us-partners #partners .font-sora.flex.justify-between span.text-nowrap.font-sora.font-normal {
                position: relative;
                display: inline-block;
                color: transparent;
              }
              #about-us-partners #partners .font-sora.flex.justify-between span.text-nowrap.font-sora.font-normal::before {
                content: "05 — Partners";
                position: absolute;
                inset: 0;
                color: #808080;
              }

              #about-us-partners #partners .mb-6 > span.text-nowrap.font-sora.font-normal {
                position: relative;
                display: inline-block;
                color: transparent;
              }
              #about-us-partners #partners .mb-6 > span.text-nowrap.font-sora.font-normal::before {
                content: "06 — Testimonials";
                position: absolute;
                inset: 0;
                color: #808080;
              }
            `,
            }}
          />
        </div>

        <CTA />
        <Footer />
      </section>
    </>
  );
}
