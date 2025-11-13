"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

export default function SmoothScroll({ children }) {
    const smoothWrapper = useRef(null);
    const smoothContent = useRef(null);

    useGSAP(() => {
        if (!smoothWrapper.current || !smoothContent.current) return;

        const smoother = ScrollSmoother.create({
            wrapper: smoothWrapper.current,
            content: smoothContent.current,
            smooth: 2,
            effects: true,
            smoothTouch: 0.1,
        });

        // Apply parallax effects to images and sections
        smoother.effects("img, [data-speed]", { speed: "auto" });

        return () => {
            smoother.kill();
        };
    }, { scope: smoothWrapper });

    return (
        <div id="smooth-wrapper" ref={smoothWrapper}>
            <div id="smooth-content" ref={smoothContent}>
                {children}
            </div>
        </div>
    );
}
