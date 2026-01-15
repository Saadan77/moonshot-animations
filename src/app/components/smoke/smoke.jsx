"use client";

import { useEffect, useRef } from "react";

export default function Smoke() {
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
    <>
      <div id="smoke" className="hidden lg:block" ref={smokeRef}></div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            #smoke {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 20;
                pointer-events: none;
                overflow: hidden;
            }

            #smoke .elem {
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
    </>
  );
}
