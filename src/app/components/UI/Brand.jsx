"use client";

import TextType from "@/components/TextType";

export default function Brand() {
    return (
        <section className="bg-[#34A5DC] py-30 relative z-50 min-h-screen flex items-center justify-center">
            <h2 className="z-20 text-[200px] max-lg:text-[120px] max-sm:text-[60px] text-center tracking-[-3%] leading-[221.93px] text-white uppercase font-semibold">
                <TextType
                    text="WE"
                    as="span"
                    className="block"
                    typingSpeed={100}
                    deletingSpeed={50}
                    pauseDuration={2000}
                    loop={false}
                    showCursor={false}
                    startOnVisible={true}
                />
                <br />
                <TextType
                    text="MAKE"
                    as="span"
                    className="block"
                    typingSpeed={100}
                    deletingSpeed={50}
                    initialDelay={300}
                    pauseDuration={2000}
                    loop={false}
                    showCursor={false}
                    startOnVisible={true}
                />
                <br />
                <TextType
                    text="YOUR"
                    as="span"
                    className="block"
                    typingSpeed={100}
                    deletingSpeed={50}
                    initialDelay={600}
                    pauseDuration={2000}
                    loop={false}
                    showCursor={false}
                    startOnVisible={true}
                />
                <br />
                <TextType
                    text="BRAND"
                    as="span"
                    className="block"
                    typingSpeed={100}
                    deletingSpeed={50}
                    initialDelay={900}
                    pauseDuration={2000}
                    loop={false}
                    showCursor={false}
                    startOnVisible={true}
                />
                <br />
                <TextType
                    text="SHINE!"
                    as="span"
                    className="block"
                    typingSpeed={100}
                    deletingSpeed={50}
                    initialDelay={1200}
                    pauseDuration={2000}
                    loop={false}
                    showCursor={true}
                    cursorCharacter="|"
                    startOnVisible={true}
                />
            </h2>
        </section>
    );
}