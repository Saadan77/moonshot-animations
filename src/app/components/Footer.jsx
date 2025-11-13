"use client";

export default function Footer() {
    return (
        <footer
            className="relative bg-[#0A1628] text-white overflow-hidden z-50"
            style={{ fontFamily: 'var(--font-sora), sans-serif' }}
        >
            <div className="relative z-10 mx-auto max-w-[90%] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                {/* Main Grid */}
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-16">
                    {/* Left Column - Location & Inquiry */}
                    <div className="space-y-8 lg:col-span-2">
                        <div className="space-y-8">
                            {/* Location */}
                            <div>
                                <p className="text-xs uppercase tracking-wider text-white/50 mb-3">
                                    LOCATION
                                </p>
                                <address className="not-italic text-sm leading-relaxed text-white/80">
                                    1200 East Collins Boulevard
                                    <br />
                                    Suite 106 Richardson Texas 75081
                                </address>
                            </div>
                        </div>

                        {/* Logo */}
                        <div className="">
                            <img
                                src="/images/primary-logo.png"
                                alt="Moonshot Tech"
                                className="w-3/4 h-auto"
                            />
                        </div>
                    </div>

                    {/* Middle Column - Links */}
                    <div className="col-span-1 space-y-8">
                        {/* Inquiry */}
                        <div>
                            <p className="text-xs uppercase tracking-wider text-white/50 mb-3">
                                INQUIRY
                            </p>
                            <div className="space-y-2 text-sm text-white/80">
                                <a
                                    href="mailto:info@gmail.com"
                                    className="block hover:text-white transition-colors"
                                >
                                    info@gmail.com
                                </a>
                                <a
                                    href="tel:+19723315058"
                                    className="block hover:text-white transition-colors"
                                >
                                    +1-972-331-5058
                                </a>
                            </div>
                        </div>

                        <div>
                            <p className="text-xs uppercase tracking-wider text-white/50 mb-6">
                                LINKS
                            </p>
                            <ul className="space-y-3 text-sm">
                                {['About', 'Services', 'Project', 'Case Studies', 'Industries', 'Contact'].map(
                                    (link) => (
                                        <li key={link}>
                                            <a
                                                href="#"
                                                className="text-white/80 hover:text-white transition-colors inline-block"
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>

                    {/* Logo + Tagline + Newsletter */}
                    <div className="col-span-1">
                        <div className="space-y-8">
                            {/* Company Title */}
                            <div className="">
                                <h2 className="text-2xl font-semibold tracking-tight">
                                    MOONSHOT TECH
                                </h2>
                                <p className="mt-3 text-sm text-white/70 max-w-md">
                                    We hope to empower user and simplify
                                    <br />
                                    their everyday lives
                                </p>
                            </div>

                            {/* Social Icons */}
                            <div className="flex gap-3">
                                <a
                                    href="#"
                                    className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                                    aria-label="Twitter/X"
                                >
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                                    aria-label="Instagram"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                                    aria-label="Facebook"
                                >
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                                    aria-label="YouTube"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </a>
                            </div>

                            {/* Newsletter */}
                            <div className="space-y-4">
                                <div className="flex gap-2 text-sm">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <rect x="2" y="4" width="20" height="16" rx="2" />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                    <span className="text-white/90">Newsletter</span>
                                </div>

                                <form className="flex flex-col sm:flex-row gap-3 max-w-md">
                                    <input
                                        type="email"
                                        placeholder="your email"
                                        className="w-full sm:flex-1 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors"
                                    />
                                    <button
                                        type="submit"
                                        className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path d="M5 12h14m0 0l-7-7m7 7l-7 7" />
                                        </svg>
                                    </button>
                                </form>

                                <p className="text-xs text-white/50">
                                    By subscribing, you accept our newsletter
                                    <br />
                                    terms and privacy policy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/10">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
                        <p>© 2025 Moonshot Tech. All Rights Reserved</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-white/70 transition-colors">
                                Terms & Conditions
                            </a>
                            <a href="#" className="hover:text-white/70 transition-colors">
                                FAQ's
                            </a>
                            <a href="#" className="hover:text-white/70 transition-colors">
                                Privacy Policy
                            </a>
                        </div>

                        {/* Scroll to Top */}
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                            aria-label="Scroll to top"
                        >
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M12 19V5m0 0l-7 7m7-7l7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <img
                src="/images/footer-moonshot.png"
                alt="Unique typography"
                className="w-full h-auto object-contain mb-10"
                draggable={false}
            />
        </footer>
    );
}
