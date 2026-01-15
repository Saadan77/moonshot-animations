"use client";

import ScrollReveal from "@/components/lightswind/scroll-reveal";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import AboutUsCards from "../AboutUsCards";
import { ArrowRight } from "lucide-react";
import Button from "../button/button";

const AboutUs = () => {
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
    <section
      id="about-us"
      className="relative isolate w-full bg-[#00060b] -mt-15 pt-15 text-white z-10 overflow-hidden"
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

      <div className="mx-auto max-w-[90%] px-6 pt-24 pb-56">
        <div className="pb-24 flex items-start max-md:flex-col">
          {/* Small "About Us" label */}
          <div className="mr-60 max-sm:mr-30 flex items-center gap-3 text-sm text-white">
            <img src="/images/about-us/icon.png" />
            <p className="font-poppins font-normal text-nowrap text-lg">
              About Us
            </p>
          </div>

          <div>
            {/* Heading */}
            <h2
              id="about-us-index-scroll-reveal"
              className="tracking-[-0.03em] font-normal"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              <ScrollReveal enableBlur={false}>
                Tech With Moonshot delivers smart digital <br /> design and
                strategy, navigating trends and metrics <br /> to craft
                powerful, tailored solutions for your brand.
              </ScrollReveal>
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                    @media screen and (min-width: 1366px) and (max-width: 1366px) {
                        #about-us-index-scroll-reveal p {
                           font-size: 33px;
                        }
                    }
                    @media screen and (min-width: 1024px) and (max-width: 1024px) {
                        #about-us-index-scroll-reveal p {
                           font-size: 21px;
                        }
                    }
                  `,
                }}
              />
            </h2>

            <div className="mt-8">
              <Button text="Learn More" href="/about-us" />
            </div>
          </div>
        </div>

        <AboutUsCards />
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
    </section>
  );
};

export default AboutUs;
