"use client";

import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { GoArrowUpRight } from 'react-icons/go';

const CardNav = ({
    logo,
    logoAlt = 'Logo',
    items,
    className = '',
    ease = 'power3.out',
    menuColor,
    buttonBgColor,
    buttonTextColor
}) => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const navRef = useRef(null);
    const cardsRef = useRef([]);
    const tlRef = useRef(null);

    const calculateHeight = () => {
        const navEl = navRef.current;
        if (!navEl) return 260;

        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        if (isMobile) {
            const contentEl = navEl.querySelector('.card-nav-content');
            if (contentEl) {
                const wasVisible = contentEl.style.visibility;
                const wasPointerEvents = contentEl.style.pointerEvents;
                const wasPosition = contentEl.style.position;
                const wasHeight = contentEl.style.height;

                contentEl.style.visibility = 'visible';
                contentEl.style.pointerEvents = 'auto';
                contentEl.style.position = 'static';
                contentEl.style.height = 'auto';

                contentEl.offsetHeight;

                const topBar = 60;
                const padding = 16;
                const contentHeight = contentEl.scrollHeight;

                contentEl.style.visibility = wasVisible;
                contentEl.style.pointerEvents = wasPointerEvents;
                contentEl.style.position = wasPosition;
                contentEl.style.height = wasHeight;

                return topBar + contentHeight + padding;
            }
        }
        return 260;
    };

    const createTimeline = () => {
        const navEl = navRef.current;
        if (!navEl) return null;

        gsap.set(navEl, { height: 60, overflow: 'hidden' });
        gsap.set(cardsRef.current, { y: 50, opacity: 0 });

        const tl = gsap.timeline({ paused: true });

        tl.to(navEl, {
            height: calculateHeight,
            duration: 0.4,
            ease
        });

        tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.1');

        return tl;
    };

    useLayoutEffect(() => {
        const tl = createTimeline();
        tlRef.current = tl;

        return () => {
            tl?.kill();
            tlRef.current = null;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ease, items]);

    useLayoutEffect(() => {
        const handleResize = () => {
            if (!tlRef.current) return;

            if (isExpanded) {
                const newHeight = calculateHeight();
                gsap.set(navRef.current, { height: newHeight });

                tlRef.current.kill();
                const newTl = createTimeline();
                if (newTl) {
                    newTl.progress(1);
                    tlRef.current = newTl;
                }
            } else {
                tlRef.current.kill();
                const newTl = createTimeline();
                if (newTl) {
                    tlRef.current = newTl;
                }
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isExpanded]);

    const toggleMenu = () => {
        const tl = tlRef.current;
        if (!tl) return;
        if (!isExpanded) {
            setIsHamburgerOpen(true);
            setIsExpanded(true);
            tl.play(0);
        } else {
            setIsHamburgerOpen(false);
            tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
            tl.reverse();
        }
    };

    const setCardRef = i => el => {
        if (el) cardsRef.current[i] = el;
    };

    return (
        <div
            className={`card-nav-container absolute left-1/2 -translate-x-1/2 w-[90%] z-[99] top-[1.2em] md:top-[2em] ${className}`}
        >
            <nav
                ref={navRef}
                className={`card-nav ${isExpanded ? 'open' : ''} block h-[60px] p-0 rounded-xl shadow-md relative overflow-hidden will-change-[height]`}
            >
                <div className="card-nav-top absolute inset-x-0 top-0 h-[60px] flex items-center justify-between p-2 pl-[1.1rem] z-[2]">
                    <div
                        className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''} group h-full flex items-center gap-3 cursor-pointer order-2 md:order-none`}
                        onClick={toggleMenu}
                        role="button"
                        aria-label={isExpanded ? 'Close menu' : 'Open menu'}
                        tabIndex={0}
                        style={{ color: menuColor || '#fff' }}
                    >
                        <div className='bg-gray-800/50 backdrop-blur px-4 rounded-full flex gap-4 p-4'>
                            <div className="flex flex-col items-center justify-center gap-[6px]">
                                <div
                                    className={`hamburger-line w-[20px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${isHamburgerOpen ? 'translate-y-[4px] rotate-45' : ''
                                        } group-hover:opacity-75`}
                                />
                                <div
                                    className={`hamburger-line w-[20px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${isHamburgerOpen ? '-translate-y-[4px] -rotate-45' : ''
                                        } group-hover:opacity-75`}
                                />
                            </div>
                            <span className="text-sm font-medium" style={{ fontFamily: 'var(--font-sora), sans-serif' }}>
                                Menu
                            </span>
                        </div>
                        <a
                            href="tel:+19723315058"
                            className="hidden md:inline-flex text-white/60 hover:text-white text-sm transition-colors duration-300"
                            style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                        >
                            +1-972-331-5058
                        </a>
                    </div>

                    <div className="logo-container flex items-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 order-1 md:order-none">
                        <img src={logo} alt={logoAlt} className="logo h-[60px]" />
                    </div>

                    <div className="flex items-center gap-3 order-3">
                        <button
                            type="button"
                            className="hidden md:inline-flex border border-white/20 rounded-full px-5 py-2.5 items-center gap-2 font-medium cursor-pointer transition-all duration-300 hover:bg-white/10 text-white text-sm"
                            style={{ fontFamily: 'var(--font-sora), sans-serif' }}
                        >
                            Our Works
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-0.5">
                                <path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        <button
                            type="button"
                            className="hidden md:inline-flex rounded-full px-5 py-2.5 items-center gap-2 font-medium cursor-pointer transition-all duration-300 text-white text-sm group"
                            style={{
                                fontFamily: 'var(--font-sora), sans-serif',
                                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
                            }}
                        >
                            Let's Talk
                            <div className="w-5 h-5 rounded-full bg-[#FA2889] flex items-center justify-center">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>

                <div
                    className={`card-nav-content absolute left-0 right-0 top-[60px] bottom-0 p-2 flex flex-col items-stretch gap-2 justify-start z-[1] ${isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
                        } md:flex-row md:items-end md:gap-[12px]`}
                    aria-hidden={!isExpanded}
                >
                    {(items || []).slice(0, 3).map((item, idx) => (
                        <div
                            key={`${item.label}-${idx}`}
                            className="nav-card select-none relative flex flex-col gap-2 p-[12px_16px] rounded-[calc(0.75rem-0.2rem)] min-w-0 flex-[1_1_auto] h-auto min-h-[60px] md:h-full md:min-h-0 md:flex-[1_1_0%]"
                            ref={setCardRef(idx)}
                            style={{ backgroundColor: item.bgColor, color: item.textColor }}
                        >
                            <div className="nav-card-label font-normal tracking-[-0.5px] text-[18px] md:text-[22px]">
                                {item.label}
                            </div>
                            <div className="nav-card-links mt-auto flex flex-col gap-[2px]">
                                {item.links?.map((lnk, i) => (
                                    <a
                                        key={`${lnk.label}-${i}`}
                                        className="nav-card-link inline-flex items-center gap-[6px] no-underline cursor-pointer transition-opacity duration-300 hover:opacity-75 text-[15px] md:text-[16px]"
                                        href={lnk.href}
                                        aria-label={lnk.ariaLabel}
                                    >
                                        <GoArrowUpRight className="nav-card-link-icon shrink-0" aria-hidden="true" />
                                        {lnk.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default CardNav;
