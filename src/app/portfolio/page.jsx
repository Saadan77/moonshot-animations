"use client";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import { AuroraText } from "@/components/ui/aurora-text";
import Dither from "@/components/Dither";
import PortfolioGrid from "../components/PortfolioGrid";
import DecorativeLines from "../components/DecorativeLines";
import Ribbons from "@/components/Ribbons";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  return (
    <>
      {/* <CyberHologramLoader /> */}
      <section className="overflow-x-hidden">
        <div className="max-sm:hidden fixed inset-0 z-9999 pointer-events-none">
          <Ribbons
            baseThickness={6}
            colors={["#D42290"]}
            speedMultiplier={0.4}
            maxAge={500}
            enableFade={true}
          />
        </div>

        <Navbar />

        <div className="flex items-center relative w-full overflow-visible">
          {/* Dither Background */}
          {/* <div className="absolute inset-0 w-full h-[200vh] opacity-20">
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
          <div className="py-[18%] max-lg:py-0 max-lg:pt-[24%] max-lg:pb-[10%]">
            <div className="relative z-20 lg:ml-20 max-lg:px-[5em] max-sm:px-[3em]">
              <div className="mb-16 flex items-center gap-3 text-sm text-white">
                <img src="/images/about-us/icon.png" />
                <p className="font-medium font-poppins text-lg">Portfolio</p>
              </div>

              <h1 className="font-normal font-sora uppercase mb-4 text-[clamp(14px,4.5vw,40px)] sm:text-[clamp(30px,5vw,50px)] lg:text-[clamp(30px,3.5vw,66px)] tracking-tight leading-20.25 max-2xl:leading-15 max-xl:leading-12 max-sm:leading-snug text-white">
                <AuroraText colors={["#ffffff", "#d1bd73"]}>
                  Designing <br /> Dreams Showcasing Our{" "}
                </AuroraText>
                <span className="text-[clamp(20px,5vw,50px)] sm:text-[clamp(40px,5vw,60px)] lg:text-[clamp(50px,5vw,86px)] font-thin text-end items-end block">
                  <AuroraText colors={["#D42290", "#2DAEEF"]}>
                    Creative Journey
                  </AuroraText>
                </span>
              </h1>

              <p className="font-normal font-sora text-white/70 text-[clamp(9px,2vw,20px)] sm:text-[clamp(10px,1.55vw,20px)] lg:text-[clamp(10px,1.08vw,20px)]">
                From conceptual sketches to digital experiences, here’s how we
                turn imagination into design
              </p>
            </div>

            <div>
              <img
                className="absolute inset-0 w-full h-auto"
                src="/images/services/bg-service-banner.png"
                alt="Hero Background Gradient"
              />
              <img
                src="/images/portfolio-page/portfolio-hero-image.png"
                className="hidden lg:block absolute top-50 -right-80 z-10 w-[70%] max-1600:w-3/8 max-1440:w-[35%] max-1366:w-[30%] max-xl:w-[25%] h-auto rotate-[7.76deg] max-1600:-right-550 max-1440:top-35 max-1440:-right-570 max-1366:top-50 max-1366:-right-580 max-1280:top-40 max-1280:-right-590 max-xl:top-35 max-xl:-right-620"
                alt="Portfolio Hero"
              />
            </div>
          </div>
        </div>

        <PortfolioGrid />

        <div className="w-screen flex justify-center pt-6 pb-20 bg-[#00050a]">
          <Link
            href="#"
            className="group inline-flex items-center gap-6 rounded-full bg-[#2626264D] hover:bg-[#D42290] pr-1.5 pl-8 py-1.5 text-white/90 transition-all duration-300"
          >
            <span className="relative top-[0.5px] font-sora text-[18px] max-lg:text-[15px] whitespace-nowrap">
              See More
            </span>
            <span className="grid place-items-center rounded-full bg-[#333333] group-hover:bg-white p-3">
              <ChevronRight className="w-6 h-6 group-hover:text-black" />
            </span>
          </Link>
        </div>

        <CTA />
        <Footer />
      </section>
    </>
  );
}
