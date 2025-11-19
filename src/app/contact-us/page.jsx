"use client";

import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import { AuroraText } from "@/components/ui/aurora-text";
import Dither from "@/components/Dither";
import SmoothScroll from "../components/SmoothScroll";
import Astronaut from "../components/3D Models/Astronaut";
import { PhoneCall } from "lucide-react";
import { GoLocation } from "react-icons/go";
import RotatingText from "@/components/RotatingText";
import TextType from "@/components/TextType";

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

    // single selected tag (only one active at a time). default to first tag
    const [selectedTag, setSelectedTag] = useState(tags[0]);

    const toggleTag = (t) => {
        // always set the clicked tag as selected (single-select). keep selected if same clicked.
        setSelectedTag(t);
    };

    return (
        <SmoothScroll>
            <section
                className="relative"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
                <Navbar />

                <div className="min-h-screen flex justify-center items-end relative w-full overflow-hidden bg-black">
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
                    <div>
                        {[
                            '15%',
                            '30%',
                            '45%',
                            '60%',
                            '75%',
                            '90%'
                        ].map((left) => (
                            <div
                                key={left}
                                style={{ left }}
                                className="absolute top-0 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 pointer-events-none z-50"
                            >
                                <div
                                    className="w-px h-screen"
                                    style={{
                                        background:
                                            'linear-gradient(to bottom, rgba(187,187,187,0) 0%, rgba(187,187,187,0.12) 12%, rgba(187,187,187,0.12) 88%, rgba(187,187,187,0) 100%)'
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Industries Hero Section */}
                    <div className="max-w-[90%] max-md:mt-50 flex max-md:flex-col items-center justify-center gap-8 overflow-visible">
                        <div className="z-10">
                            {/* Small "Industries" label */}
                            <div className="mb-6 flex items-center gap-3 text-sm text-white/80">
                                <div className="flex items-center gap-[3px]">
                                    <span className="block h-2.5 w-0.5 rounded bg-white/70" />
                                    <span className="block h-2.5 w-0.5 rounded bg-white/50" />
                                    <span className="block h-2.5 w-0.5 rounded bg-white/30" />
                                </div>
                                <p className="font-bold text-lg">Contact</p>
                            </div>

                            <h1 className="font-sora mb-4 text-[60px] max-xl:text-[40px] max-sm:text-[30px] uppercase tracking-tight leading-none text-white">
                                <AuroraText colors={["#ffffff", "#d1bd73"]}>
                                    Let’s Start a <br /> Conversation Connect{" "}
                                </AuroraText>
                                <span className="text-end max-md:text-start max-md:items-start items-end block w-full">
                                    <AuroraText colors={["#03499F", "#D722AF", "#03499F"]}>
                                        With Our Team
                                    </AuroraText>
                                </span>
                            </h1>

                            <p className="font-light text-white/70 md:text-md lg:text-lg">
                                From quick questions to big ideas, here’s how we turn your message into real progress
                            </p>
                        </div>

                        <div className="z-50"><Astronaut /></div>
                    </div>
                </div>

                <div className="py-50 bg-[#00050A]">
                    <div className="max-w-[80%] mx-auto grid lg:grid-cols-2 items-start gap-16">
                        {/* Left content */}
                        <div>
                            <p className="text-[20px] text-[#989898] mb-4">02 — Get in Touch</p>

                            <h2 style={{ fontFamily: 'Inter, sans-serif' }} className="leading-tight text-white mb-6 block text-[60px] max-xl:text-[40px] max-sm:text-[30px]">
                                <span className="flex items-center gap-x-4">
                                    Have a <RotatingText
                                        texts={['Project?', 'Idea?', 'Vision?', 'Goal?', 'Dream?', 'Challenge?']}
                                        mainClassName="inline-block px-3 py-2 text-white overflow-hidden justify-center rounded-lg"
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

                            <p className="text-[#989898] text-[20px] max-w-lg leading-relaxed mb-8">
                                <TextType text="Ready to take your triathlon performance to the next level? Reach out today and let's create a personalized training plan for you."
                                    typingSpeed={15}
                                    pauseDuration={1500}
                                    showCursor={true}
                                    cursorCharacter="|" startOnVisible={true} loop={true} />
                            </p>

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

                                <div className="mt-6">
                                    <button
                                        type="button"
                                        className="relative group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-white cursor-pointer transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FA2889]/60 active:scale-[0.97] overflow-hidden bg-[linear-gradient(135deg,#1a1a2e_0%,#16213e_100%)] border border-gray-200"
                                        style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                                    >
                                        {/* Animated gradient overlay (keeps same colors, just a gentle drift) */}
                                        {/* <span
                                            className="
                                            pointer-events-none absolute inset-0 opacity-0
                                            group-hover:opacity-100 transition-opacity duration-500
                                            bg-[radial-gradient(circle_at_15%_20%,rgba(250,40,137,0.20),transparent_60%),radial-gradient(circle_at_85%_80%,rgba(93,126,255,0.25),transparent_65%)]
                                            "
                                        /> */}
                                        <span className="text-[20px] lg:text-[15px] max-sm:text-[12px] relative z-10 transition-transform duration-300 group-hover:translate-x-0.5">
                                            Send Message
                                        </span>
                                        <div
                                            className="
                                            relative z-10 w-10 h-10 rounded-full bg-[#FA2889]
                                            flex items-center justify-center
                                            shadow-[0_0_0_0_rgba(250,40,137,0.6)]
                                            group-hover:shadow-[0_0_0_6px_rgba(250,40,137,0.15)]
                                            transition-all duration-400
                                            animate-none group-hover:animate-pulsePink
                                            "
                                        >
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="transition-transform duration-300 group-hover:translate-x-px">
                                                <path
                                                    d="M5 12h14m0 0l-7-7m7 7l-7 7"
                                                    stroke="white"
                                                    strokeWidth="2.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        {/* Soft glossy sweep */}
                                        {/* <span
                                            className="
                                            pointer-events-none absolute inset-0
                                            before:absolute before:top-0 before:-left-full before:h-full before:w-[50%]
                                            before:bg-linear-to-r before:from-white/0 before:via-white/20 before:to-white/0
                                            before:skew-x-25
                                            before:transition-transform before:duration-900
                                            group-hover:before:translate-x-[250%]
                                            "
                                        /> */}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <CTA />
                <Footer />
            </section>
        </SmoothScroll>
    );
} 