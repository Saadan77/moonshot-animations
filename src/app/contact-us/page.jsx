"use client";

import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import { AuroraText } from "@/components/ui/aurora-text";
import Dither from "@/components/Dither";
import { ArrowRight, PhoneCall, Ribbon } from "lucide-react";
import { GoLocation } from "react-icons/go";
import RotatingText from "@/components/RotatingText";
import TextType from "@/components/TextType";
import DecorativeLines from "../components/DecorativeLines";
import Ribbons from "@/components/Ribbons";
import Button from "../components/button/button";
import Link from "next/link";
import Image from "next/image";

export default function ContactUs() {
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
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [budget, setBudget] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const toggleTag = (t) => {
    setSelectedTag(t);
  };

  const validate = () => {
    const e = {};
    if (!fullName.trim()) e.fullName = "Full name is required.";
    if (!email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      e.email = "Enter a valid email.";
    if (!message.trim()) e.message = "Please tell us about your project.";
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      // TODO: replace with actual submit logic
      console.log({ email, fullName, budget, businessName, message, selectedTag });
      alert("Message sent — (demo).");
      setEmail("");
      setFullName("");
      setBudget("");
      setBusinessName("");
      setMessage("");
      setSelectedTag(false);
    }
  };

  return (
    <>
      {/* <CyberHologramLoader /> */}
      <section style={{ fontFamily: "var(--font-sora), sans-serif" }}>
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
              style={{filter: "brightness(1.25)"}}
            />
          </div>

          {/* Decorative Lines */}
          <DecorativeLines />

          {/* Hero Section */}
          <div className="pt-[18%] pb-[22%]">
            <div className="relative z-10 ml-20 max-sm:ml-10">
              <div className="mb-16 flex items-center gap-3 text-sm text-white">
                <img src="/images/about-us/icon.png" />
                <p className="font-poppins font-medium text-lg">Contact</p>
              </div>

              <h1 className="text-[clamp(26px,3.5vw,72px)] font-normal font-sora uppercase mb-4 tracking-tight leading-20.25 max-1600:leading-15 max-1280:leading-13 max-xl:leading-11 text-white">
                <AuroraText colors={["#ffffff", "#d1bd73"]}>
                  Let’s Start a <br /> Conversation Connect{" "}
                </AuroraText>
                <span className="text-[clamp(45px,4vw,86px)] font-thin text-end items-end block">
                  <AuroraText colors={["#D42290", "#2DAEEF"]}>
                    With Our Team
                  </AuroraText>
                </span>
              </h1>

              <p className="font-sora font-normal text-white/70 text-[clamp(10px,1.08vw,22px)]">
                From quick questions to big ideas, here’s how we turn your
                message into real progress
              </p>
            </div>

            <img
              src="/images/contact-us-hero.png"
              className="hidden lg:block w-[38.5%] h-auto absolute bottom-2 right-30 max-1600:right-30 max-xl:right-10 z-10"
              alt="City"
            />
          </div>
        </div>

        <div className="-mt-10 py-50 bg-[#00050A] rounded-[34.137px] relative z-10">
          <div className="max-w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-9 items-center gap-16">
            {/* Left content */}
            <div className="col-span-4">
              <p className="font-poppins font-normal text-[20px] text-[#989898] mb-4">
                01 — Get in Touch
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
                  <Link href="tel:+19723315058" className="hover:underline">+1-972-331-5058</Link>
                </div>

                <div className="flex items-center gap-4">
                  <GoLocation className="w-10 h-10 max-lg:h-8 md:h-8" />
                  <Link href="https://share.google/nqL7znJrG0VweAWyG" className="hover:underline" target="_blank" rel="noopener noreferrer">
                    1200 East Collins Boulevard <br /> Suite 106 Richardson
                    Texas 75081
                  </Link>
                </div>
              </div>
            </div>

            {/* Right form */}
            <form className="col-span-5" onSubmit={handleSubmit} noValidate>
              <div className="bg-[#011322] rounded-[25px] xl:mx-6 p-8 xl:p-10 1366:p-14 2xl:p-16 max-sm:p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-poppins font-normal text-white text-sm">
                  <div>
                    <input
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-[90px] py-3 px-8 bg-[#000911] border border-[#18354D] outline-none"
                    />
                    {errors.email ? <p className="text-red-400 text-sm mt-2">{errors.email}</p> : null}
                  </div>
                  <div>
                    <input
                      placeholder="Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full rounded-[90px] py-3 px-8 bg-[#000911] border border-[#18354D] outline-none"
                    />
                    {errors.fullName ? <p className="text-red-400 text-sm mt-2">{errors.fullName}</p> : null}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 font-poppins font-normal text-white text-sm">
                  <input
                    placeholder="Project Budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full rounded-[90px] py-3 px-8 bg-[#000911] border border-[#18354D] outline-none"
                  />
                  <input
                    placeholder="Business Name"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full rounded-[90px] py-3 px-8 bg-[#000911] border border-[#18354D] outline-none"
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Tell us more about your product and goals"
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-[25px] mt-6 p-8 text-white text-sm bg-[#000911] border border-[#18354D] outline-none"
                  />
                  {errors.message ? <p className="text-red-400 text-sm mt-2">{errors.message}</p> : null}
                </div>

                <p className="text-white my-4 text-sm 1366:text-base">How can we help you?</p>

                <div className="space-y-6">
                  {[tags.slice(0, 4), tags.slice(4, 8), tags.slice(8, 12)].map(
                    (row, rowIdx) => (
                      <div key={`tag-row-${rowIdx}`} className="w-full flex flex-wrap lg:flex-nowrap lg:justify-between">
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
                  <button type="submit" className="group border border-[#979797] inline-flex items-center gap-5 rounded-full bg-[#041426] hover:bg-[#D42290] pr-1.5 pl-8 py-1.5 text-[15px] text-white/90 ring-1 ring-white/15 transition hover:ring-white/30">
                    <span className="text-nowrap relative top-[0.5px] font-sora text-[17px] xl:text-[20px]">Send Message</span>
                    <span className="grid place-items-center rounded-full bg-[#D42290] group-hover:bg-white p-3">
                      <ArrowRight className="w-6 h-6 group-hover:text-black" />
                    </span>
                  </button>
                  <div className="lg:text-xs 1366:text-sm text-end">
                    <p className="text-[#A3A3A3]">Prefer email?</p>
                    <Link href="mailto:moonshottech@gmail.com" className="text-white hover:underline">moonshottech@gmail.com</Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <CTA />
        <Footer />
      </section>
    </>
  );
}
