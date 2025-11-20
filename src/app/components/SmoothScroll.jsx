"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScroll({ children }) {
    const smoothWrapper = useRef(null);
    const smoothContent = useRef(null);

    useLayoutEffect(() => {
        if (!smoothWrapper.current || !smoothContent.current) return;

        const smoother = ScrollSmoother.create({
            wrapper: smoothWrapper.current,
            content: smoothContent.current,
            smooth: 2,
            effects: true,
            smoothTouch: 0.1,
        });

        try {
            smoother.effects(":not([data-smoother-ignore]) img, :not([data-smoother-ignore]) [data-speed]", { speed: "auto" });
        } catch (e) {
            try { smoother.effects("img:not([data-smoother-ignore]), [data-speed]", { speed: "auto" }); } catch (e) {}
        }

        const styleId = 'smoother-ignore-style';
        let styleEl = document.getElementById(styleId);
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = styleId;
            styleEl.innerHTML = `
                [data-smoother-ignore],
                [data-smoother-ignore] * {
                    transform: none !important;
                    will-change: auto !important;
                }
            `;
            document.head.appendChild(styleEl);
        }

        return () => {
            try { smoother.kill(); } catch (e) {}
            if (styleEl && styleEl.parentNode) styleEl.parentNode.removeChild(styleEl);
        };
    }, []);

    return (
        <div id="smooth-wrapper" ref={smoothWrapper}>
            <div id="smooth-content" ref={smoothContent}>
                {children}
            </div>
        </div>
    );
}
