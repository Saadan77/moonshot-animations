"use client";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import { AuroraText } from "@/components/ui/aurora-text";
import Dither from "@/components/Dither";
import { LayoutGrid } from "@/components/ui/layout-grid";
import DecorativeLines from "../components/DecorativeLines";
import Ribbons from "@/components/Ribbons";
import Image from "next/image";
import Smoke from "../components/smoke/smoke";

export default function Portfolio() {
  const topCards = [
    {
      id: 1,
      title: "Education",
      description:
        "We specialise in putting education providers front and centre so they attract the right pupils and parents.",
      thumbnail: "/images/industries/image-1.png",
      className: "md:col-span-1",
      content: null,
    },
    {
      id: 2,
      title: "Beauty",
      description:
        "Beauty is no longer confined to magazines or in-stores. Understanding where your customers are spending their time and money online is vital.",
      thumbnail: "/images/industries/image-2.png",
      className: "md:col-span-1",
      content: null,
    },
    {
      id: 3,
      title: "Technology",
      description:
        "Being an innovative technology company means your needs are constantly changing. Our team are experienced in creating strategies that adapt and evolve with you.",
      thumbnail: "/images/industries/image-4.png",
      className: "md:col-span-1 md:row-span-2 technology",
      content: null,
    },
    {
      id: 4,
      title: "Finance",
      description:
        "We know you like numbers. We do too. In a heavily contested digital marketplace, Tech With Moonshot can create truly optimised campaigns that deliver on the business metrics that matter.",
      thumbnail: "/images/industries/image-3.png",
      className: "md:col-span-2",
      content: null,
    },
    {
      id: 5,
      title: "Real Estate",
      description:
        "Real estate isn't the only industry all about location, location, location. Be found when it matters most.",
      thumbnail: "/images/industries/image-5.png",
      className:
        "md:col-span-3 h-[320px] 1600:h-[650px] 2xl:h-[550px] xl:h-[450px] max-xl:h-[350px] real-estate",
      content: null,
    },
    {
      id: 6,
      title: "Legal",
      description:
        "The care and ethics you take with your business should flow into your online strategy. Our team understand both.",
      thumbnail: "/images/industries/image-6.png",
      className: "md:col-span-1 md:row-span-2 legal",
      content: null,
    },
    {
      id: 7,
      title: "Utilities",
      description:
        "Working with brands, such as Water Corporation, means we understand the digital marketing needs of large-scale utilities.",
      thumbnail: "/images/industries/image-7.png",
      className:
        "md:col-span-1 h-[320px] 1600:h-[650px] 2xl:h-[550px] xl:h-[450px] max-xl:h-[350px]",
      content: null,
    },
    {
      id: 8,
      title: "Government",
      description:
        "We create proposals and respond to tenders in a way that enables government departments to understand their return on investment.",
      thumbnail: "/images/industries/image-8.png",
      className:
        "md:col-span-1 h-[320px] 1600:h-[650px] 2xl:h-[550px] xl:h-[450px] max-xl:h-[350px]",
      content: null,
    },
    {
      id: 9,
      title: "Medical",
      description:
        "The medical industry has a lot of nuances surrounding privacy and confidentiality. Tech With Moonshot has experience successfully navigating these.",
      thumbnail: "/images/industries/image-9.png",
      className: "md:col-span-2",
      content: null,
    },
  ];

  const bottomCards = [
    {
      id: 10,
      title: "Retail and E-Commerce",
      description:
        "We understand what makes an e-commerce strategy truly effective.",
      thumbnail: "/images/industries/image-10.png",
      className:
        "md:col-span-2 h-[320px] 1600:h-[650px] 2xl:h-[550px] xl:h-[450px] max-xl:h-[350px]",
      content: null,
    },
    {
      id: 11,
      title: "Artificial Intelligence",
      description:
        "We help AI brands simplify complex ideas into clear digital experiences that drive awareness, trust, and adoption.",
      thumbnail: "/images/industries/image-11.png",
      className:
        "md:col-span-2 h-[320px] 1600:h-[650px] 2xl:h-[550px] xl:h-[450px] max-xl:h-[350px]",
      content: null,
    },
  ];

  return (
    <>
      {/* <CyberHologramLoader /> */}
      <section>
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

        <div className="flex items-center relative w-full overflow-hidden">
          {/* Dither Background */}
          {/* <div className="absolute inset-0 w-full h-full opacity-20">
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
          <div className="pt-[18%] pb-[22%]">
            <div className="relative z-10 ml-20 max-sm:ml-10">
              <div className="mb-16 flex items-center gap-3 text-sm text-white">
                <img src="/images/about-us/icon.png" />
                <p className="font-poppins font-medium text-lg">Industries</p>
              </div>

              <h1 className="text-[clamp(26px,3.4vw,66px)] font-normal font-sora uppercase mb-4 tracking-tight leading-20.25 max-1600:leading-17 max-1440:leading-15 max-1280:leading-13 max-xl:leading-10 text-white">
                <AuroraText colors={["#ffffff", "#d1bd73"]}>
                  Innovating Industries
                  <br />
                  Demonstrating Our Multi
                </AuroraText>
                <span className="text-[clamp(40px,4vw,86px)] font-thin text-end items-end block">
                  <AuroraText colors={["#D42290", "#2DAEEF"]}>
                    Sector Strength
                  </AuroraText>
                </span>
              </h1>

              <p className="font-sora font-normal text-white/70 text-[clamp(10px,1.05vw,20px)]">
                From conceptual sketches to digital experiences, here's how we
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
                src="/images/industries/city-bg.png"
                className="hidden lg:block absolute z-10 w-[45%] h-auto top-40 -right-10"
                alt="City"
              />
            </div>
          </div>
        </div>

        <div className="-mt-10 rounded-[34.137px] py-10 lg:py-20 2xl:py-30 bg-[#00060B] relative z-10">
          <div className="absolute inset-0 rounded-[34.137px] overflow-hidden pointer-events-none">
            <Smoke />
          </div>

          <div
            id="industries-grid"
            className="relative z-50"
            style={{
              ["--img-opacity"]: "0.8",
            }}
          >
            <LayoutGrid cards={topCards} showDescriptions={true} />
            <style
              dangerouslySetInnerHTML={{
                __html: `
                  #industries-grid .layout-grid-top-overlay {
                    display: block !important;
                  }
                  #industries-grid .group:hover [data-industry-overlay] {
                    background: linear-gradient(rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 1) 100%) !important;
                  }
                  #industries-grid .real-estate img, #industries-grid .technology img {
                    object-position: center !important;
                  }
                  #industries-grid .technology #card-title, #industries-grid .legal #card-title {
                    background: none !important;
                    top: 0 !important;
                    bottom: auto !important;
                  }
                  #industries-grid #industries-grid .legal #industry-layout-grid-top-overlay {
                    background: linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.90) 100%) !important;
                  }
                  #industries-grid .technology #industry-layout-grid-top-overlay {
                    background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%) !important;
                  }
                  #industries-grid .technology:hover #industry-layout-grid-top-overlay {
                    background: linear-gradient(rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.5) 100%) !important;
                  }
                `,
              }}
            />
            <div id="bottom-industries-grid">
              <LayoutGrid cards={bottomCards} showDescriptions={true} />
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                    @media (min-width: 768px) {
                        #bottom-industries-grid > .grid {
                            grid-template-columns: repeat(4, minmax(0, 1fr));
                        }
                        
                        #bottom-industries-grid > .grid {
                            padding-top: 1.5%;
                            padding-bottom: 0%;
                        }
                    }
                `,
                }}
              />
            </div>
          </div>

          <CTA />
        </div>

        <Footer />
      </section>
    </>
  );
}
