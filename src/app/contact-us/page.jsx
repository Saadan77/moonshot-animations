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
import { Link } from "wouter";

export default function ContactUs() {
    const tags = [
        'UI/UX Design',
        'Website Development',
        'Ecommerce',
        'Branding',
        'Web Applications',
        'Animations',
        'Mobile Applications',
        'SEO',
        'SSM',
        'Google Adwords',
        'Email Marketing',
        'Digital Marketing',
    ];

    const [selectedTag, setSelectedTag] = useState(tags[0]);

    const toggleTag = (t) => {
        setSelectedTag(t);
    };

    return (
        <section
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
        >
            <Navbar />

            <div className="max-sm:hidden fixed inset-0 z-9999 pointer-events-none">
                <Ribbons
                    baseThickness={6}
                    colors={['#FA2889']}
                    speedMultiplier={0.4}
                    maxAge={500}
                    enableFade={true}
                />
            </div>

            <div className="min-h-screen flex justify-center items-end relative w-full overflow-hidden">
                {/* Dither Background */}
                <div className="absolute inset-0 w-full h-full opacity-20">
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

                {/* Background Image */}
                <div
                    className="absolute inset-0 brightness-125"
                    style={{
                        backgroundImage:
                            "url('/images/bg-hero.png')",
                    }}
                />

                {/* Decorative Lines */}
                <DecorativeLines />

                {/* Hero Section */}
                <div className="flex flex-col 2xl:flex-row items-center gap-8 max-2xl:mt-50">
                    <div className="z-20 ml-20 max-sm:ml-10">
                        <div className="mb-16 flex items-center gap-3 text-sm text-white/80">
                            <div className="flex items-center gap-[3px]">
                                <span className="block h-2.5 w-0.5 rounded bg-white/70" />
                                <span className="block h-2.5 w-0.5 rounded bg-white/50" />
                                <span className="block h-2.5 w-0.5 rounded bg-white/30" />
                            </div>
                            <p className="font-bold text-lg">Contact</p>
                        </div>

                        <h1 className="font-normal font-sora uppercase mb-4 tracking-tight leading-none text-white">
                            <div className="text-[68px] max-xl:text-[50px] max-sm:text-[30px]">
                                <AuroraText colors={["#ffffff", "#d1bd73"]}>
                                    Let’s Start a <br /> Conversation Connect{" "}
                                </AuroraText>
                            </div>
                            <span className="text-[86px] max-xl:text-[60px] max-sm:text-[40px] font-extralight text-end items-end max-2xl:text-start max-2xl:items-start block">
                                <AuroraText colors={["#D42290", "#2DAEEF"]}>
                                    With Our Team
                                </AuroraText>
                            </span>
                        </h1>

                        <p className="font-light text-white/70 text-sm md:text-md lg:text-xl max-lg:px-1">
                            From quick questions to big ideas, here’s how we turn your message into real progress
                        </p>
                    </div>

                    <img src="/images/contact-us-hero.png" className="w-2/5 max-md:w-3/4 h-auto z-100" alt="City" />
                </div>
            </div>

            <div className="py-50 bg-[#00050A] rounded-[34.137px] -mt-10 relative z-100">
                <div className="max-w-[80%] mx-auto grid lg:grid-cols-2 items-start gap-16">
                    {/* Left content */}
                    <div>
                        <p className="text-[20px] text-[#989898] mb-4">02 — Get in Touch</p>

                        <h2 style={{ fontFamily: 'Inter, sans-serif' }} className="leading-tight text-white mb-6 block text-[60px] max-xl:text-[40px] max-sm:text-[30px]">
                            <span className="flex items-center gap-x-4">
                                Have a <RotatingText
                                    texts={['Project?', 'Idea?', 'Vision?', 'Goal?', 'Dream?', 'Challenge?']}
                                    mainClassName="inline-block text-white overflow-hidden justify-center rounded-lg"
                                    staggerFrom={"last"}
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    exit={{ y: "-120%" }}
                                    staggerDuration={0.025}
                                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                    rotationInterval={5000}
                                /> <br />
                            </span>
                            Let’s
                            <span className="italic" style={{ fontFamily: 'Playfair Display, serif' }}>
                                {" "} Talk!
                            </span>
                        </h2>

                        <div className="text-[#989898] text-[20px] max-w-lg leading-relaxed mb-8">
                            <TextType text="Ready to take your triathlon performance to the next level? Reach out today and let's create a personalized training plan for you."
                                typingSpeed={15}
                                pauseDuration={1500}
                                showCursor={true}
                                cursorCharacter="|" startOnVisible={true} loop={true} />
                        </div>

                        <div className="border-t border-gray-700 my-8" />

                        <ul className="space-y-6 text-white text-[24px] lg:text-[15px] md:text-[12px] max-sm:text-[10px]">
                            <li className="flex items-center gap-4">
                                <PhoneCall className="w-10 h-10 hover:w-12 hover:h-12 max-lg:h-8 md:h-8 transition-all transition-duration-200 text-white fill-amber-50" />
                                <span>+1-972-331-5058</span>
                            </li>

                            <li className="flex items-center gap-4">
                                <GoLocation className="w-10 h-10 hover:w-12 hover:h-12 max-lg:h-8 md:h-8 transition-all transition-duration-200 text-white fill-white" />
                                <span>1200 East Collins Boulevard <br /> Suite 106 Richardson Texas 75081</span>
                            </li>
                        </ul>
                    </div>

                    {/* Right form */}
                    <form>
                        <div style={{ background: "#011322" }} className="rounded-2xl p-12 max-lg:p-8 max-sm:p-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input placeholder="Email" className="w-full rounded-[90px] py-3 px-4 text-white text-sm bg-[#000911] border border-[#18354D] outline-none" />
                                <input placeholder="Full Name" className="w-full rounded-[90px] py-3 px-4 text-white text-sm bg-[#000911] border border-[#18354D] outline-none" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                <input placeholder="Project Budget" className="w-full rounded-[90px] py-3 px-4 text-white text-sm bg-[#000911] border border-[#18354D] outline-none" />
                                <input placeholder="Business Name" className="w-full rounded-[90px] py-3 px-4 text-white text-sm bg-[#000911] border border-[#18354D] outline-none" />
                            </div>

                            <textarea placeholder="Tell us more about your product and goals" rows={6} className="w-full rounded-[20px] mt-4 p-4 text-white text-sm bg-[#000911] border border-[#18354D] outline-none" />

                            <p className="text-white my-4">How can we help you?</p>
                            <div className="flex flex-wrap gap-y-5 gap-x-1">
                                {tags.map((t) => {
                                    const isSelected = selectedTag === t;
                                    return (
                                        <button
                                            key={t}
                                            type="button"
                                            onClick={() => toggleTag(t)}
                                            className={`py-4 px-6 rounded-full bg-[#000911] text-[13px] transition-colors duration-200 border ${isSelected ? 'border-white/80 text-white/80' : 'border-[#18354D] text-[#999999]'} hover:border-white/80 hover:text-white/80 cursor-pointer`}
                                        >
                                            {t}
                                        </button>
                                    );
                                })}
                            </div>

                            <div className="flex justify-between items-center mt-8">
                                <Link
                                    href="#"
                                    className="group border border-[#979797] inline-flex items-center gap-3 rounded-full bg-[#0F172A]/60 hover:bg-[#D42290] pr-1.5 pl-6 py-1.5 text-[15px] text-white/90 ring-1 ring-white/15 transition hover:ring-white/30"
                                >
                                    <span className="relative top-[0.5px] font-sora text-[20px]">Send Message</span>
                                    <span className="grid place-items-center rounded-full bg-[#D42290] group-hover:bg-white p-3">
                                        <ArrowRight className="w-6 h-6 group-hover:text-black" />
                                    </span>
                                </Link>
                                <div className="items-end">
                                    <p className="text-[#A3A3A3]">Prefer email?</p>
                                    <p className="text-white">moonshottech@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <CTA />
            <Footer />
        </section>
    );
} 