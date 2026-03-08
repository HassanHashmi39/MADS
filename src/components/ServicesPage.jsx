import React from "react";
import { motion } from "motion/react";
import bdImg from "../assets/bd.webp";
import starImg from "../assets/Star 3.webp";


// ─── Character-by-character reveal animation ─────────────────────────────────
const TextReveal = ({ text, className = "", delayOffset = 0, stagger = 0.02, activeColor = "#111111", inactiveColor = "#9ca3af" }) => {
    const words = text.split(" ");
    let charCount = 0;

    return (
        <span className={`inline-flex flex-wrap justify-center ${className}`} style={{ gap: "0 0.25em" }}>
            {words.map((word, wordIndex) => {
                const chars = word.split("");
                return (
                    <span key={wordIndex} className="inline-block whitespace-nowrap">
                        {chars.map((char, charIndex) => {
                            const delay = delayOffset + (charCount++) * stagger;
                            return (
                                <span key={charIndex} style={{ overflow: "hidden", display: "inline-block" }}>
                                    <motion.span
                                        style={{ display: "inline-block" }}
                                        initial={{ y: 40, opacity: 0, color: inactiveColor, scale: 0.8 }}
                                        animate={{ y: 0, opacity: 1, color: activeColor, scale: 1 }}
                                        transition={{
                                            y: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1], delay },
                                            opacity: { duration: 0.6, ease: "easeOut", delay },
                                            color: { duration: 1.2, ease: "easeOut", delay },
                                            scale: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1], delay }
                                        }}
                                    >
                                        {char}
                                    </motion.span>
                                </span>
                            );
                        })}
                    </span>
                );
            })}
        </span>
    );
};

const servicesData = [
    {
        title: "Social",
        description:
            "  Scale your brand through viral content and strategic management across all platforms.",
        isReversed: false,
        images: [
            "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=50&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=50&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=50&w=800&auto=format&fit=crop",
        ],
    },
    {
        title: "Branding",
        description:
            "Crafting unique visual identities and long-term brand strategies.",
        isReversed: true,
        images: [
            "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=50&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=50&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1558655146-d09347e92766?q=50&w=800&auto=format&fit=crop",
        ],
    },
    {
        title: "Marketing",
        description: "Handle your Social Media Profiles like Instagram, Facebook, LinkedIn to create regular content for your audience.",
        isReversed: false,
        images: [
            "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=50&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=50&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1558655146-d09347e92766?q=50&w=800&auto=format&fit=crop",
        ],
    }
    ,
    {
        title: "App & Web",
        description: "We build custom mobile apps and websites that are fast, secure, and easy to use.",
        isReversed: true,
        images: [
            "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=50&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=50&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1558655146-d09347e92766?q=50&w=800&auto=format&fit=crop",
        ],
    },
    {
        title: "Writing",
        description: "We write compelling copy that converts readers into customers.",
        isReversed: false,
        images: [
            "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=50&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=50&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1558655146-d09347e92766?q=50&w=800&auto=format&fit=crop",
        ],
    }

];

// ================= CARD DECK SPREAD =================

const deckCards = [
    {
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=50&w=400&auto=format&fit=crop",
        label: "Social Media",
        handle: "@viral_mads",
        bg: "#ff5e00",
    },
    {
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=50&w=400&auto=format&fit=crop",
        label: "Branding",
        handle: "@brand_identity",
        bg: "#7c3aed",
    },
    {
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=50&w=400&auto=format&fit=crop",
        label: "Marketing",
        handle: "@mkt_experts",
        bg: "#0ea5e9",
    },
    {
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=50&w=400&auto=format&fit=crop",
        label: "App & Web",
        handle: "@dev_solutions",
        bg: "#10b981",
    },
    {
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=50&w=400&auto=format&fit=crop",
        label: "App & Web",
        handle: "@ux_mads",
        bg: "#f43f5e",
    },
    {
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=50&w=400&auto=format&fit=crop",
        label: "Copy Writing",
        handle: "@copy_queen",
        bg: "#f59e0b",
    },
];

const spreadCfg = [
    { x: 0, y: -20, scale: 1.0, rotate: 0 },
    { x: 180, y: 30, scale: 1.0, rotate: 0 },
    { x: 360, y: 80, scale: 1.0, rotate: 0 },
    { x: 540, y: 130, scale: 1.0, rotate: 0 },
    { x: 720, y: 180, scale: 1.0, rotate: 0 },
    { x: 900, y: 230, scale: 1.0, rotate: 0 },
];

function CardDeckSpread() {
    const [phase, setPhase] = React.useState("hidden");

    React.useEffect(() => {
        const rise = setTimeout(() => setPhase("rise"), 800);
        const spread = setTimeout(() => setPhase("spread"), 2800);
        return () => { clearTimeout(rise); clearTimeout(spread); };
    }, []);

    const W = 280;  // card width
    const H = 280;  // card height

    // i=0 = First card (anchored)
    // i=1-4 cascade to BOTTOM-RIGHT, overlapping each other
    // size is now uniform and rotation is removed as per user request

    return (
        // Slightly left of center so the rightward spread stays on-screen
        <div
            className="absolute pointer-events-none"
            style={{
                left: "35%",
                top: "62%",
                transform: "translateY(-50%)",
                overflow: "visible",
                zIndex: 20, // Increased to be on top of text z-10
            }}
        >
            <div style={{ position: "relative", width: W, height: H }}>
                {deckCards.map((card, i) => {
                    const sp = spreadCfg[i];
                    // successive cards overlap the previous ones (right card on top)
                    const zIdx = 10 + i;

                    // During "rise" phase: nearly stacked, tiny offsets for depth feel
                    const riseX = i * 2;
                    const riseY = i * 2;
                    const riseRotate = i * 1;

                    return (
                        <motion.div
                            key={i}
                            whileHover="hover"
                            initial="initial"
                            style={{
                                position: "absolute",
                                width: W,
                                height: H,
                                top: 0,
                                left: 0,
                                zIndex: zIdx,
                                transformOrigin: "top left",
                                cursor: "pointer",
                                pointerEvents: "auto", // ADDED THIS LINE
                            }}
                            animate={
                                phase === "hidden"
                                    ? { y: 420, x: 0, scale: 1, rotate: 0, opacity: 0 }
                                    : phase === "rise"
                                        ? { y: riseY, x: riseX, scale: 1, rotate: riseRotate, opacity: 1 }
                                        : { y: sp.y, x: sp.x, scale: sp.scale, rotate: sp.rotate, opacity: 1 }
                            }
                            transition={
                                phase === "rise"
                                    ? { duration: 1.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }
                                    : phase === "spread"
                                        ? { duration: 1.8, delay: (deckCards.length - 1 - i) * 0.12, ease: [0.34, 1.2, 0.64, 1] }
                                        : {}
                            }
                        >
                            {/* Hover Tag Pill */}
                            <motion.div
                                variants={{
                                    initial: { opacity: 0, y: 15, scale: 0.8, x: "-10%" },
                                    hover: { opacity: 1, y: -20, scale: 1, x: "-10%" }
                                }}
                                className="absolute -top-4 left-1/2 z-50 pointer-events-none"
                            >
                                <div className="relative">
                                    <div
                                        className="px-4 py-1.5 rounded-full text-white text-[12px] font-bold shadow-xl whitespace-nowrap"
                                        style={{ backgroundColor: card.bg }}
                                    >
                                        {card.handle}
                                    </div>
                                    {/* Small tail/triangle */}
                                    <div
                                        className="w-3 h-3 rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2 -z-10"
                                        style={{ backgroundColor: card.bg }}
                                    />
                                </div>
                            </motion.div>

                            {/* Inner Image Wrapper with clip */}
                            <div
                                className="w-full h-full overflow-hidden rounded-[24px] shadow-2xl relative bg-white "
                                style={{
                                    boxShadow: "0 25px 65px rgba(0,0,0,0.15), 0 8px 20px rgba(0,0,0,0.1)"
                                }}
                            >
                                <img
                                    src={card.image}
                                    alt={card.label}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />


                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

// ================= SHOWCASE SECTION =================


const ShowcaseSection = ({ service }) => {
    const [isInView, setIsInView] = React.useState(false);
    const [shouldSlide, setShouldSlide] = React.useState(false);
    const [showContent, setShowContent] = React.useState(false);
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const nextImage = () =>
        setCurrentIndex((p) => (p + 1) % service.images.length);

    const prevImage = () =>
        setCurrentIndex((p) =>
            p === 0 ? service.images.length - 1 : p - 1
        );

    React.useEffect(() => {
        if (isInView) {
            const slideTimer = setTimeout(() => setShouldSlide(true), 1800);
            const contentTimer = setTimeout(() => setShowContent(true), 3000);
            return () => {
                clearTimeout(slideTimer);
                clearTimeout(contentTimer);
            };
        } else {
            setShouldSlide(false);
            setShowContent(false);
        }
    }, [isInView]);

    return (
        <motion.div
            layout
            onViewportEnter={() => setIsInView(true)}
            onViewportLeave={() => setIsInView(false)}
            viewport={{ amount: 0.3 }}
            className={`min-h-[85vh] md:min-h-screen flex flex-col md:flex-row ${service.isReversed ? "md:flex-row-reverse" : "md:flex-row"
                } bg-white px-4 sm:px-6 md:px-12 overflow-hidden border-b`}
        >
            {/* ================= LEFT COLUMN ================= */}
            <motion.div
                layout
                initial={{ width: "100%" }}
                animate={shouldSlide ? { width: "45%" } : { width: "100%" }}
                transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
                className={`w-full flex flex-col justify-center relative z-10 py-12 md:py-0 ${shouldSlide
                    ? (service.isReversed ? "md:items-end md:text-right" : "md:items-start md:text-left")
                    : "items-center text-center"
                    }`}
            >
                {/* TITLE */}
                <motion.h2
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[1.1] tracking-tight"
                >
                    {service.title}
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={showContent ? { opacity: 1 } : { opacity: 0 }}
                    transition={{
                        duration: 1.5,
                        delay: 0.2,
                        ease: "easeInOut"
                    }}
                    className="mt-6 md:mt-10 px-4 md:px-6 text-gray-800 text-sm md:text-[15px] leading-relaxed max-w-sm"
                >
                    {service.description}
                </motion.p>

                {/* Read More Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={showContent ? { opacity: 1 } : { opacity: 0 }}
                    transition={{
                        duration: 1.2,
                        delay: 0.5,
                        ease: "easeInOut"
                    }}
                    className="mt-10 md:mt-12 px-4"
                >
                    <button className="group px-8 py-3.5 border-2 border-black rounded-full text-sm font-medium tracking-wide hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-3">
                        Read more
                        <span className="w-8 h-8 border border-black rounded-full flex items-center justify-center group-hover:border-white transition-colors">
                            →
                        </span>
                    </button>
                </motion.div>
            </motion.div>

            {/* ================= RIGHT COLUMN (GALLERY) ================= */}
            <motion.div
                initial={{ width: "0%", opacity: 0 }}
                animate={shouldSlide ? { width: "55%", opacity: showContent ? 1 : 0 } : { width: "0%", opacity: 0 }}
                transition={{ width: { duration: 1.2, ease: [0.65, 0, 0.35, 1] }, opacity: { duration: 0.8 } }}
                className="flex gap-4 md:gap-6 items-center relative"
            >
                {/* First Image */}
                <motion.div
                    initial={{ opacity: 0, x: service.isReversed ? -80 : 80, filter: "brightness(2)" }}
                    animate={showContent ? { opacity: 1, x: 0, filter: "brightness(1)" } : { opacity: 0, x: service.isReversed ? -80 : 80, filter: "brightness(2)" }}
                    transition={{ duration: 1.5, delay: service.isReversed ? 2.2 : 0.8, ease: "easeOut" }}
                    className="flex-1 h-[400px] sm:h-[500px] md:h-[600px] rounded-[1rem] md:rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl relative"
                >
                    <img
                        src={service.images[currentIndex]}
                        alt=""
                        className="w-full h-full object-cover rounded-[1rem] md:rounded-[2rem] lg:rounded-[3rem]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent pointer-events-none"></div>
                </motion.div>

                {/* Second Image */}
                <motion.div
                    initial={{ opacity: 0, x: service.isReversed ? -100 : 100, filter: "brightness(2)" }}
                    animate={showContent ? { opacity: 1, x: 0, filter: "brightness(1)" } : { opacity: 0, x: service.isReversed ? -100 : 100, filter: "brightness(2)" }}
                    transition={{ duration: 1.5, delay: service.isReversed ? 0.8 : 2.2, ease: "easeOut" }}
                    className="flex-1 h-[400px] sm:h-[500px] md:h-[600px] rounded-[1rem] md:rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl relative"
                >
                    <img
                        src={service.images[(currentIndex + 1) % service.images.length]}
                        alt=""
                        className="w-full h-full object-cover rounded-[1rem] md:rounded-[2rem] lg:rounded-[3rem]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent pointer-events-none"></div>
                </motion.div>

                {/* Centered Scroll Button with Navigation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={showContent ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 3.0 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex justify-center w-full pointer-events-none"
                >
                    <div className="px-6 py-3 bg-white/90 backdrop-blur-sm border border-gray-300 rounded-full text-xs font-medium tracking-wider hover:bg-white transition-all duration-300 flex items-center gap-4 shadow-xl pointer-events-auto">
                        <span>Scroll</span>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={prevImage}
                                className="hover:scale-110 transition-transform p-1"
                                aria-label="Previous image"
                            >
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                            </button>
                            <button
                                onClick={nextImage}
                                className="hover:scale-110 transition-transform p-1"
                                aria-label="Next image"
                            >
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

// ================= MAIN PAGE =================

const ServicesPage = () => {
    const [isGrowthInView, setIsGrowthInView] = React.useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-h-screen font-tomato outline-none"
        >
            {/* BACKGROUND */}
            <div
                className="fixed inset-0 bg-cover bg-center -z-30"
                style={{ backgroundImage: `url(${bdImg})` }}
            />
            <div
                className="fixed inset-0 bg-contain bg-center opacity-90 -z-20 pointer-events-none bg-no-repeat "
                style={{ backgroundImage: `url(${starImg})` }}
            />

            {/* HERO */}
            <section className="min-h-screen pb-20 flex pt-32 justify-center text-center relative overflow-hidden">
                <div className="max-w-8xl relative z-10">
                    <p className="uppercase tracking-widest  mb-2">
                        <TextReveal
                            text="Strategic Branding & Visual Design that gets you noticed"
                            activeColor="#000000ff"
                            inactiveColor="#d1d5db"
                            delayOffset={0.2}
                            stagger={0.015}
                        />
                    </p>
                    <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight">
                        <TextReveal
                            text="We help Founders, Coaches & Creators Stand out Digitally"
                            delayOffset={0.8}
                            stagger={0.02}
                        />
                        <br />
                        <TextReveal
                            text="with Scroll stopping Visuals & Branding"
                            delayOffset={1.6}
                            stagger={0.02}
                        />
                    </h1>
                </div>

                {/* Card Deck Spread Animation - Moved after text to ensure layering */}
                <CardDeckSpread />
            </section>

            {/* UNIFIED GROWTH & MARQUEE SECTION */}
            <motion.section
                onViewportEnter={() => setIsGrowthInView(true)}
                onViewportLeave={() => setIsGrowthInView(false)}
                animate={{
                    backgroundColor: isGrowthInView ? ["#000000", "#4b5563", "#F3EEFF"] : "#ffffff"
                }}
                viewport={{ amount: 0.2, margin: "-10%" }}
                transition={isGrowthInView ? { duration: 4, times: [0, 0.5, 0.75], ease: "easeInOut" } : { duration: 0 }}
                className="min-h-screen flex flex-col relative z-20 overflow-hidden"
            >
                {/* MARQUEE (Top of Section) */}
                <motion.div
                    animate={{
                        borderColor: isGrowthInView ? ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.2)", "rgba(0,0,0,0.1)"] : "rgba(0,0,0,0.1)"
                    }}
                    transition={isGrowthInView ? { duration: 4, times: [0, 0.5, 0.75] } : { duration: 0 }}
                    className="border-y py-4 md:py-8 overflow-hidden bg-white/5 backdrop-blur-sm"
                >
                    <motion.div
                        animate={isGrowthInView ? { x: ["50vw", "-2500px"] } : { x: "50vw" }}
                        transition={isGrowthInView ? { duration: 30, repeat: Infinity, ease: "linear" } : { duration: 0 }}
                        className="flex whitespace-nowrap gap-12 items-center"
                    >
                        {[...Array(6)].map((_, i) => (
                            <motion.span
                                key={i}
                                animate={{
                                    color: isGrowthInView ? ["rgba(255,255,255,0.9)", "rgba(255,255,255,0.9)", "rgba(0,0,0,0.9)"] : "rgba(0,0,0,0.9)"
                                }}
                                transition={isGrowthInView ? { duration: 4, times: [0, 0.5, 0.75] } : { duration: 0 }}
                                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter hover:text-purple-600 transition-colors duration-500"
                            >
                                3x Engagement in 3 Months, Otherwise MADS work for free until you succeed •
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>

                {/* GROWTH VISUALIZATION (Centered) */}
                <div className="flex-grow flex items-center justify-center py-20">
                    <div className="max-w-7xl mx-auto w-full relative px-6">
                        {/* Top Left Labels */}
                        <div className="absolute -top-12 left-6 flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                                <motion.span
                                    animate={{
                                        color: isGrowthInView ? ["#ffffff", "#ffffff", "#9ca3af"] : "#9ca3af"
                                    }}
                                    transition={isGrowthInView ? { duration: 4, times: [0, 0.5, 0.75] } : { duration: 0 }}
                                    className="text-[10px] font-bold uppercase tracking-[0.2em]"
                                >
                                    Month before
                                </motion.span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#916FFF]"></div>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#916FFF]">With MADS</span>
                            </div>
                        </div>

                        {/* Top Right Labels */}
                        <div className="absolute -top-12 right-6 hidden lg:flex flex-col gap-0 text-right">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Our Promise</span>
                            <motion.span
                                animate={{
                                    color: isGrowthInView ? ["#ffffff", "#ffffff", "#000000"] : "#000000"
                                }}
                                transition={isGrowthInView ? { duration: 4, times: [0, 0.5, 0.75] } : { duration: 0.5 }}
                                className="text-[10px] font-bold uppercase tracking-[0.2em]"
                            >
                                Your Future
                            </motion.span>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                            {/* Circle Visualization */}
                            <div className="flex items-center gap-3 md:gap-6 flex-wrap justify-center relative">
                                {/* 1st Month */}
                                <motion.div
                                    animate={isGrowthInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="flex flex-col items-center gap-4"
                                >
                                    <motion.div
                                        animate={{ backgroundColor: isGrowthInView ? ["rgba(255,255,255,0.05)", "rgba(255,255,255,0.1)", "rgba(255,255,255,1)"] : "rgba(255,255,255,0.05)" }}
                                        transition={isGrowthInView ? { duration: 4, times: [0, 0.5, 0.75] } : { duration: 0 }}
                                        className="w-28 h-28 md:w-36 md:h-36 rounded-full border border-white/20 flex items-center justify-center text-center relative overflow-hidden shadow-2xl"
                                    >
                                        <motion.div
                                            animate={isGrowthInView ? { height: "33%", backgroundColor: ["#a2e635", "#ef4444", "#916FFF"] } : { height: "0%", backgroundColor: "#a2e635" }}
                                            transition={isGrowthInView ? {
                                                height: { duration: 1, ease: "easeInOut" },
                                                backgroundColor: { duration: 4, times: [0, 0.5, 0.75] }
                                            } : { duration: 0 }}
                                            className="absolute bottom-0 left-0 right-0 w-full opacity-95 shadow-[0_-10px_20px_rgba(0,0,0,0.1)]"
                                        />
                                        <div className="flex flex-col relative z-10">
                                            <motion.span
                                                animate={{ color: isGrowthInView ? ["#ffffff", "#ffffff", "#000000"] : "#ffffff" }}
                                                transition={isGrowthInView ? { duration: 4, times: [0, 0.5, 0.75] } : { duration: 0 }}
                                                className="text-sm md:text-xl font-bold"
                                            >
                                                1st
                                            </motion.span>
                                            <motion.span
                                                animate={{ color: isGrowthInView ? ["#ffffff", "#ffffff", "rgba(0,0,0,0.4)"] : "rgba(255,255,255,0.4)" }}
                                                transition={isGrowthInView ? { duration: 4, times: [0, 0.5, 0.75] } : { duration: 0 }}
                                                className="text-[10px] md:text-sm font-bold uppercase tracking-tighter"
                                            >
                                                Month
                                            </motion.span>
                                        </div>
                                    </motion.div>
                                </motion.div>

                                {/* Connector Arrow */}
                                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-white/10 z-10 -mx-1 backdrop-blur-sm shadow-sm">
                                    <span className="text-xs text-purple font-bold">→</span>
                                </div>

                                {/* 2nd Month */}
                                <motion.div
                                    animate={isGrowthInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="flex flex-col items-center gap-4"
                                >
                                    <motion.div
                                        animate={{ backgroundColor: isGrowthInView ? ["rgba(255,255,255,0.05)", "rgba(255,255,255,0.1)", "rgba(255,255,255,1)"] : "rgba(255,255,255,0.05)" }}
                                        transition={isGrowthInView ? { duration: 4, times: [0, 0.5, 0.75] } : { duration: 0 }}
                                        className="w-40 h-40 md:w-56 md:h-56 rounded-full border border-white/20 flex items-center justify-center text-center relative overflow-hidden shadow-2xl"
                                    >
                                        <motion.div
                                            animate={isGrowthInView ? { height: "66%", backgroundColor: ["#a2e635", "#ef4444", "#916FFF"] } : { height: "0%", backgroundColor: "#a2e635" }}
                                            transition={isGrowthInView ? {
                                                height: { duration: 1.1, delay: 1.3, ease: "easeInOut" },
                                                backgroundColor: { duration: 4, times: [0, 0.5, 0.75] }
                                            } : { duration: 0 }}
                                            className="absolute bottom-0 left-0 right-0 w-full opacity-95 shadow-[0_-15px_30px_rgba(0,0,0,0.15)]"
                                        />
                                        <div className="flex flex-col relative z-10">
                                            <motion.span
                                                animate={{ color: isGrowthInView ? ["#ffffff", "#ffffff", "#000000"] : "#ffffff" }}
                                                transition={isGrowthInView ? { duration: 4, times: [0, 0.5, 0.75] } : { duration: 0 }}
                                                className="text-xl md:text-4xl font-bold"
                                            >
                                                2nd
                                            </motion.span>
                                            <motion.span
                                                animate={{ color: isGrowthInView ? ["#ffffff", "#ffffff", "rgba(0,0,0,0.4)"] : "rgba(255,255,255,0.4)" }}
                                                transition={isGrowthInView ? { duration: 4, times: [0, 0.5, 0.75] } : { duration: 0 }}
                                                className="text-xs md:text-xl font-bold uppercase tracking-tighter"
                                            >
                                                Month
                                            </motion.span>
                                        </div>
                                    </motion.div>
                                </motion.div>

                                {/* Connector Arrow */}
                                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-white/10 z-10 -mx-1 backdrop-blur-sm shadow-sm">
                                    <span className="text-xs text-purple font-bold">→</span>
                                </div>

                                {/* 3rd Month */}
                                <motion.div
                                    animate={isGrowthInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="flex flex-col items-center gap-4"
                                >
                                    <motion.div
                                        animate={{ backgroundColor: isGrowthInView ? ["rgba(255,255,255,0.05)", "rgba(255,255,255,0.1)", "rgba(255,255,255,1)"] : "rgba(255,255,255,0.05)" }}
                                        transition={isGrowthInView ? { duration: 4, times: [0, 0.5, 0.75] } : { duration: 0 }}
                                        className="w-60 h-60 md:w-80 md:h-80 rounded-full border border-white/20 flex items-center justify-center text-center relative overflow-hidden shadow-2xl"
                                    >
                                        <motion.div
                                            animate={isGrowthInView ? { height: "100%", backgroundColor: ["#a2e635", "#ef4444", "#916FFF"] } : { height: "0%", backgroundColor: "#a2e635" }}
                                            transition={isGrowthInView ? {
                                                height: { duration: 1.4, delay: 2.6, ease: "easeInOut" },
                                                backgroundColor: { duration: 4, times: [0, 0.5, 0.75] }
                                            } : { duration: 0 }}
                                            className="absolute bottom-0 left-0 right-0 w-full shadow-[0_-20px_40px_rgba(0,0,0,0.2)]"
                                        />
                                        <div className="flex flex-col relative z-10">
                                            <motion.span
                                                animate={{ color: isGrowthInView ? ["#ffffff", "#ffffff", "#ffffff"] : "#ffffff" }}
                                                className="text-4xl md:text-8xl font-black drop-shadow-md tracking-tighter"
                                            >
                                                3rd
                                            </motion.span>
                                            <motion.span
                                                animate={{ color: isGrowthInView ? ["rgba(255,255,255,0.8)", "rgba(255,255,255,0.8)", "rgba(255,255,255,0.95)"] : "rgba(255,255,255,0.4)" }}
                                                className="text-xl md:text-4xl font-bold uppercase tracking-tighter"
                                            >
                                                Month
                                            </motion.span>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Bottom Row Labels */}
                        <div className="flex flex-col md:flex-row items-end justify-between mt-24 gap-8">
                            {/* Bottom Left Indicator & Icons */}
                            <div className="flex items-center gap-6 ml-0 md:ml-6">

                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-[#916FFF] flex items-center justify-center shadow-lg shadow-[#916FFF]/30">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-[#916FFF] flex items-center justify-center shadow-lg shadow-[#916FFF]/30">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-[#916FFF] flex items-center justify-center shadow-lg shadow-[#916FFF]/30">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Right Stats */}
                            <div className="flex items-center gap-6 text-left mr-0 md:mr-6">
                                <motion.span
                                    animate={{ color: isGrowthInView ? ["#a2e635", "#ef4444", "#916FFF"] : "#916FFF" }}
                                    transition={isGrowthInView ? { duration: 4, times: [0, 0.5, 0.75] } : { duration: 0 }}
                                    className="text-6xl md:text-9xl font-black tracking-tighter drop-shadow-sm"
                                >
                                    1,500
                                </motion.span>
                                <div className="flex flex-col">
                                    <motion.span
                                        animate={{ color: isGrowthInView ? ["#ffffff", "#ffffff", "#000000"] : "#ffffff" }}
                                        transition={isGrowthInView ? { duration: 4, times: [0, 0.5, 0.75] } : { duration: 0 }}
                                        className="text-sm md:text-2xl font-black leading-none uppercase tracking-tighter"
                                    >
                                        Accelerating Brands
                                    </motion.span>
                                    <span className="text-[10px] md:text-sm font-bold text-gray-500 mt-2 uppercase tracking-widest">Growth metric annually</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* SERVICES */}
            <div className="relative z-20 bg-white">
                {servicesData.map((service, i) => (
                    <ShowcaseSection key={i} service={service} />
                ))}
            </div>
        </motion.div>
    );
};

export default ServicesPage;
