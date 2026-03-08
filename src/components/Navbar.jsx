import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { useScrollContainer } from "../context/ScrollContext";

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const location = useLocation();

    // Close menu when route changes
    React.useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const scrollContainerRef = useScrollContainer();

    return (
        <>

            <svg className="absolute w-0 h-0" aria-hidden="true">
                <defs>
                    <filter id="glass-lens" x="-20%" y="-100%" width="140%" height="300%" colorInterpolationFilters="sRGB">
                        <feImage
                            href="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJ1cmwoI2cpIi8+CjxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjAiIHkxPSIwIiB4Mj0iMCIgeTI9IjEiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSJibGFjayIvPgo8c3RvcCBvZmZzZXQ9IjIwJSIgc3RvcC1jb2xvcj0iYmxhY2siLz4KPHN0b3Agb2Zmc2V0PSIzMCUiIHN0b3AtY29sb3I9IiM4MDgwODAiLz4KPHN0b3Agb2Zmc2V0PSI3MCUiIHN0b3AtY29sb3I9IiM4MDgwODAiLz4KPHN0b3Agb2Zmc2V0PSI4MCUiIHN0b3AtY29sb3I9IndoaXRlIi8+CjxzdG9wIG9mZmNldD0iMTAwJSIgc3RvcC1jb2xvcj0id2hpdGUiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9zdmc+"
                            result="dispMap"
                            preserveAspectRatio="none"
                            x="0" y="0" width="100%" height="100%"
                        />
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="dispMap"
                            scale="50"
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                    </filter>
                </defs>
            </svg>

            <motion.nav
                className="fixed top-0 left-0 right-0 z-50 w-full"
            >
                <div className="w-full px-4 md:px-10 flex items-center justify-between relative h-[52px]">

                    {/* Layer 1: Triple-Zone Refraction Lens */}
                    <div className="absolute inset-0  pointer-events-none overflow-hidden"
                        style={{
                            backdropFilter: 'url(#glass-lens)',
                            WebkitBackdropFilter: 'url(#glass-lens)',
                        }}
                    />

                    <div className="absolute inset-0 pointer-events-none"
                        style={{
                            background: 'rgba(255, 255, 255, 0.003)',
                            boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255,255,255,0.7)',
                            border: '1px solid rgba(255, 255, 255, 0.4)',
                        }}
                    />

                    {/* Layer 3: Top Reflection Highlight */}
                    <div className="absolute top-0 left-[10%] right-[10%] h-[1.5px] rounded-full pointer-events-none"
                        style={{
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
                        }}
                    />

                    {/* Layer 4: Bottom Edge Light Catch */}
                    <div className="absolute bottom-0 left-[15%] right-[15%] h-[1px] rounded-full pointer-events-none"
                        style={{
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                        }}
                    />

                    {/* Logo */}
                    <div className="flex items-center shrink-0 relative z-10">
                        <Link to="/">
                            <img src="/logo.png" alt="MADS" width="40" height="40" className="h-10 w-auto object-contain" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-1 p-1 rounded-full relative z-10">
                        {["Home", "Services", "Projects"].map((item) => {
                            const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                            const isActive = location.pathname === path;
                            return (
                                <li key={item}>
                                    <Link
                                        to={path}
                                        className={`px-5 py-2 rounded-full font-medium transition-all duration-300 block text-sm ${isActive
                                            ? "text-black bg-white/50 shadow-[0_2px_8px_rgba(0,0,0,0.05)] border border-white/60"
                                            : "text-gray-500 hover:text-gray-900 hover:bg-white/20"
                                            }`}
                                    >
                                        {item}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>


                    {/* Desktop Cta */}
                    <motion.a
                        href="https://calendly.com/mads-ai/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover="hover"
                        initial="initial"
                        aria-label="Schedule a call with MADS Agency"
                        variants={{
                            initial: { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                            hover: { backgroundColor: "#737373ff" }
                        }}
                        transition={{ duration: 0.3 }}
                        className="hidden md:flex items-center justify-center relative z-10 shadow-sm overflow-hidden px-8 py-2.5 rounded-full font-bold text-sm text-black border border-gray-100 min-w-[160px] h-[44px]"
                    >
                        {/* Layer 1: Base Static Text (Black) */}
                        <div className="flex items-center justify-center gap-2 w-full h-full relative z-0">
                            Let's Talk
                        </div>

                        {/* Layer 2: Shutter + Revealed Text (White) */}
                        <motion.div
                            className="absolute inset-0 bg-black z-10 flex items-center justify-center overflow-hidden pointer-events-none"
                            variants={{
                                initial: { y: "100%" },
                                hover: { y: "0%" }
                            }}
                            transition={{
                                duration: 0.15,
                                ease: "easeInOut",
                                delay: 0.05 // Solid delay to ensure gray is visible
                            }}
                        >
                            {/* This div mirrors the content of Layer 1 but in white */}
                            <div className="flex items-center justify-center gap-2 text-white w-full">
                                <span className="whitespace-nowrap">Let's Talk</span>

                            </div>
                        </motion.div>
                    </motion.a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        className="md:hidden p-2 text-gray-600 hover:text-black focus:outline-none relative z-10"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {isOpen ? (
                                <path d="M18 6L6 18M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Mobile Menu Dropdown */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full left-0 right-0 mt-3 rounded-3xl p-4 md:hidden flex flex-col gap-4 overflow-hidden mx-2 z-20"
                                style={{
                                    background: 'white',
                                    border: '1px solid rgba(255,255,255,0.4)',
                                    boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.6), 0 8px 32px rgba(0,0,0,0.08), inset 2px 0 4px rgba(255,50,50,0.04), inset -2px 0 4px rgba(50,50,255,0.04)',
                                }}
                            >
                                <ul className="flex flex-col gap-2">
                                    {["Home", "Services", "Projects", "Team"].map((item) => {
                                        const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                                        const isActive = location.pathname === path;
                                        return (
                                            <li key={item}>
                                                <Link
                                                    to={path}
                                                    className={`block px-4 py-3 rounded-2xl font-medium transition-all duration-300 ${isActive
                                                        ? "text-black bg-white/60 shadow-sm"
                                                        : "text-gray-600 hover:bg-white/30"
                                                        }`}
                                                >
                                                    {item}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>

                                <motion.a
                                    href="https://calendly.com/mads-ai/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover="hover"
                                    initial="initial"
                                    aria-label="Schedule a call - Get Started"
                                    variants={{
                                        initial: { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                                        hover: { backgroundColor: "rgba(255, 255, 255, 0.6)" }
                                    }}
                                    transition={{ duration: 0.2 }}
                                    className="flex items-center justify-center relative overflow-hidden gap-2 w-full px-6 py-4 rounded-xl font-bold text-sm text-black border border-gray-100 h-[52px]"
                                >
                                    {/* Layer 1: Base Static Text */}
                                    <div className="flex items-center justify-center gap-2 w-full h-full relative z-0">
                                        Let's Talk  </div>

                                    {/* Layer 2: Shutter + Revealed Text */}
                                    <motion.div
                                        className="absolute inset-0 bg-black z-10 flex items-center justify-center overflow-hidden pointer-events-none"
                                        variants={{
                                            initial: { y: "100%" },
                                            hover: { y: "0%" }
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            ease: "easeInOut",
                                            delay: 0.2
                                        }}
                                    >
                                        <div className="flex items-center justify-center gap-2 text-white w-full px-6">
                                            <span className="whitespace-nowrap">Let's Talk</span>
                                            <motion.div
                                                className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center text-black shrink-0"
                                                variants={{
                                                    initial: { rotate: 0 },
                                                    hover: { rotate: 360, transition: { duration: 4, repeat: Infinity, ease: "linear" } }
                                                }}
                                            >
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                                </svg>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </motion.a>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </motion.nav>
        </>
    );
}
