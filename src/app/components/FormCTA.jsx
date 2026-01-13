"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Button from "./button/button";
import RotatingText from "@/components/RotatingText";
import TextType from "@/components/TextType";
import { PhoneCall } from "lucide-react";
import { GoLocation } from "react-icons/go";
import CTA from "./CTA";

export default function FormCTA() {
  const tags = [
    "UI/UX Design",
    "Website Development",
    "E-commerce",
    "Branding",
    "Web Applications",
    "Animations",
    "Mobile Applications",
    "SEO",
    "SMM",
    "Google Adwords",
    "Email Marketing",
    "Digital Marketing",
  ];

  const [selectedTag, setSelectedTag] = useState(false);

  const toggleTag = (t) => {
    setSelectedTag(t);
  };

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
    <div className="relative z-50">
      <div id="service-smoke-form-cta" ref={smokeRef}></div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            #service-smoke-form-cta {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                overflow: hidden;
            }

            #service-smoke-form-cta .elem {
                position: absolute;
                width: 50px;
                height: 50px;
                background: radial-gradient(circle,rgba(53, 160, 214, 0.14) 0%, rgba(0, 89, 255, 0) 80%);
                pointer-events: none;
                animation: ripple-cta 2s ease-out forwards;
            }

            @keyframes ripple-cta {
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
      <div className="py-50 bg-[#00060b] rounded-[34.137px]">
        <div className="max-w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-9 items-center gap-16">
          {/* Left content */}
          <div className="col-span-4">
            <p className="font-poppins font-normal text-[20px] text-[#989898] mb-4">
              Get in Touch
            </p>

            <h2
              style={{ fontFamily: "Inter, sans-serif" }}
              className="leading-tight text-white mb-6 block text-[clamp(50px,4.2vw,75px)]"
            >
              <span className="flex items-center gap-x-4">
                Have a{" "}
                <RotatingText
                  texts={["Project?", "Idea?", "Vision?", "Goal?", "Dream?"]}
                  mainClassName="inline-block text-white overflow-hidden justify-center rounded-lg"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={5000}
                />{" "}
                <br />
              </span>
              Let’s
              <span
                className="italic"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {" "}
                Talk!
              </span>
            </h2>

            <div className="1600:min-h-26.5 text-[#989898] text-[clamp(10px,1.04vw,20px)] font-poppins leading-relaxed tracking-widest mb-8">
              <TextType
                text="Ready to take your triathlon performance to the next <br />level? Reach out today and let's create a personalized training <br />plan for you."
                typingSpeed={15}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                startOnVisible={true}
                loop={true}
              />
            </div>

            <div className="h-[1.5px] bg-[#888] my-12" />

            <div className="space-y-8 text-white text-[clamp(10px,1.4vw,24px)]">
              <div className="flex items-center gap-4">
                <PhoneCall className="w-10 h-10 max-lg:h-8 md:h-8 fill-white" />
                <Link href="tel:+19723315058" className="hover:underline">
                  +1-972-331-5058
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <GoLocation className="w-10 h-10 max-lg:h-8 md:h-8" />
                <Link
                  href="https://share.google/nqL7znJrG0VweAWyG"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  1200 East Collins Boulevard <br /> Suite 106 Richardson Texas
                  75081
                </Link>
              </div>
            </div>
          </div>

          {/* Right form */}
          <form className=" relative z-50 col-span-5">
            <div className="bg-[#011322] rounded-[25px] xl:mx-6 p-8 xl:p-10 1366:p-14 2xl:p-16 max-sm:p-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-poppins font-normal text-white text-sm">
                <input
                  placeholder="Email"
                  className="w-full rounded-[90px] py-3 px-8 bg-[#000911] border border-[#18354D] outline-none"
                />
                <input
                  placeholder="Full Name"
                  className="w-full rounded-[90px] py-3 px-8 bg-[#000911] border border-[#18354D] outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 font-poppins font-normal text-white text-sm">
                <input
                  placeholder="Project Budget"
                  className="w-full rounded-[90px] py-3 px-8 bg-[#000911] border border-[#18354D] outline-none"
                />
                <input
                  placeholder="Business Name"
                  className="w-full rounded-[90px] py-3 px-8 bg-[#000911] border border-[#18354D] outline-none"
                />
              </div>

              <textarea
                placeholder="Tell us more about your product and goals"
                rows={6}
                className="w-full rounded-[25px] mt-6 p-8 text-white text-sm bg-[#000911] border border-[#18354D] outline-none"
              />

              <p className="text-white my-4 text-sm 1366:text-base">
                How can we help you?
              </p>

              <div className="space-y-6">
                {[tags.slice(0, 4), tags.slice(4, 8), tags.slice(8, 12)].map(
                  (row, rowIdx) => (
                    <div
                      key={`tag-row-${rowIdx}`}
                      className="w-full flex flex-wrap lg:flex-nowrap lg:justify-between"
                    >
                      {row.map((t) => {
                        const isSelected = selectedTag === t;
                        return (
                          <button
                            key={t}
                            type="button"
                            onClick={() => toggleTag(t)}
                            className={`py-4 px-8 max-1600:px-5 max-1366:px-4.5 max-xl:px-3 max-xl:py-3 rounded-full bg-[#000911] text-[13px] max-1600:text-[12px] max-1440:text-[11px] max-1336:text-[10px] max-1280:text-[9px] transition-colors duration-200 border ${
                              isSelected
                                ? "border-white/80 text-white/80"
                                : "border-[#18354D] text-[#999999]"
                            } hover:border-white/80 hover:text-white/80 cursor-pointer`}
                          >
                            {t}
                          </button>
                        );
                      })}
                    </div>
                  )
                )}
              </div>

              <div className="flex justify-between items-center mt-8">
                <Button text="Send Message" href="#" />
                <div className="lg:text-xs 1366:text-sm text-end">
                  <p className="text-[#A3A3A3]">Prefer email?</p>
                  <Link
                    href="mailto:moonshottech@gmail.com"
                    className="text-white hover:underline"
                  >
                    moonshottech@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <CTA />
    </div>
  );
}
