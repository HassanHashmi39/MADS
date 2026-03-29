import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "motion/react";
import { useScrollContainer } from "../context/ScrollContext";

// --- Custom Visuals ---
const AnimatedNumber = ({ end }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const duration = 1200;
        let startTime = null;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeProgress * end));
            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [end, isInView]);
    return <span ref={ref}>{count}</span>;
};

const CounterVisual = ({ small = false }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.9 });

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const end = 4362;
        const duration = 2000;
        let startTime = null;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(easeProgress * end));
            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [isInView]);

    return (
        <div ref={ref} className={`bg-[#111] rounded-2xl flex flex-col items-center justify-center text-center mt-auto shadow-inner relative overflow-hidden group ${small ? "p-3 h-24" : "p-6 h-48 sm:h-56"
            }`}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`text-white font-bold font-mono tracking-tighter tabular-nums inline-block text-center ${small ? "text-3xl" : "text-5xl sm:text-7xl min-w-[4ch]"
                    }`}
            >
                {count}
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`text-white/60 mt-1 ${small ? "text-[10px]" : "text-sm sm:text-base max-w-[200px]"
                    }`}
            >
                followers
            </motion.div>
        </div>
    );
};

const StatsSliderVisual = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.8 });

    useEffect(() => {
        if (!isInView) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % 3);
        }, 3000); // 3 seconds per slide
        return () => clearInterval(interval);
    }, [isInView]);

    const slides = [
        { type: 'number', end: 500, label: "comments" },
        { type: 'number', end: 237, label: "reposts" },
        { type: 'number', end: 937, label: "likes" },
    ];

    return (
        <div ref={ref} className="bg-[#EBE5FF] rounded-[32px] p-6 flex flex-col items-center justify-center text-center mt-auto h-48 sm:h-64 shadow-sm relative overflow-hidden group">

            {/* Top Progress Indicators */}
            <div className="absolute top-6 left-8 right-8 flex gap-2">
                {[0, 1, 2].map(idx => (
                    <div key={idx} className="flex-1 h-[3px] rounded-full bg-[#1A1A1A]/10 overflow-hidden relative">
                        {activeIndex === idx && isInView && (
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 3, ease: "linear" }}
                                className="absolute top-0 left-0 h-full bg-[#1A1A1A]"
                            />
                        )}
                        {activeIndex > idx && (
                            <div className="absolute top-0 left-0 w-full h-full bg-[#1A1A1A]" />
                        )}
                    </div>
                ))}
            </div>

            <div className="flex-1 w-full flex flex-col items-center justify-center mt-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="flex flex-col items-center"
                    >
                        {slides[activeIndex].type === 'number' ? (
                            <>
                                <span className="text-[#1A1A1A] text-7xl sm:text-[84px] leading-none font-medium tracking-tight tabular-nums min-w-[3ch] inline-block text-center">
                                    <AnimatedNumber end={slides[activeIndex].end} />
                                </span>
                                <span className="text-[#1A1A1A]/80 text-[13px] mt-2 font-medium tracking-[0.2em] uppercase">
                                    {slides[activeIndex].label}
                                </span>
                            </>
                        ) : (
                            <div className="grid grid-cols-3 gap-2 w-28 h-20 opacity-90 mx-auto mt-2">
                                {/* Row 1 */}
                                <div className="flex justify-center items-end pb-1"><div className="w-8 h-4 border-[4px] border-[#1A1A1A] rounded-t-full border-b-0" /></div>
                                <div className="flex justify-center items-start pt-2"><div className="w-8 h-4 border-[4px] border-[#1A1A1A] rounded-b-full border-t-0" /></div>
                                <div className="flex justify-center items-center"><div className="w-6 h-10 border-[4px] border-[#1A1A1A] rounded-full" /></div>
                                {/* Row 2 */}
                                <div className="flex justify-center items-start pt-1"><div className="w-8 h-4 border-[4px] border-[#1A1A1A] rounded-b-full border-t-0" /></div>
                                <div className="flex justify-center items-end pb-2"><div className="w-8 h-4 border-[4px] border-[#1A1A1A] rounded-t-full border-b-0" /></div>
                                <div className="flex justify-center items-end pb-2 pr-2"><div className="w-6 h-[4px] bg-[#1A1A1A] rounded-full" /></div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

const CircleProgressVisual = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.9 });

    return (
        <div ref={ref} className="bg-[#F8F9FA] pb-5 rounded-3xl p-4 flex flex-col items-center justify-center mt-auto h-48 sm:h-56 shadow-sm relative overflow-hidden group border border-gray-100">
            <div className="relative w-40 h-40 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                    <circle cx="80" cy="80" r="70" stroke="#f1f1f1" strokeWidth="8" fill="none" />
                    <motion.circle cx="80" cy="80" r="70" stroke="url(#gradient)" strokeWidth="8" fill="none" strokeLinecap="round" strokeDasharray={440} strokeDashoffset={440} animate={isInView ? { strokeDashoffset: 440 - (440 * 0.75) } : { strokeDashoffset: 440 }} transition={{ duration: 2, ease: "easeOut" }} />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#C9A9E9" />
                            <stop offset="100%" stopColor="#7B61FF" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="flex flex-col items-center justify-center z-10 text-center">
                    <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.9, duration: 0.9 }} className="text-[10px] text-gray-500 font-medium tracking-wide uppercase mb-1">
                        Level 2<br />10 to 20 miles
                    </motion.span>
                    <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.6, duration: 0.9 }} className="text-3xl font-bold text-gray-900 leading-none">
                        191V
                    </motion.span>
                </div>
                <motion.div animate={isInView ? { opacity: 1, scale: 1, x: -30, y: -40 } : { opacity: 0, scale: 0, x: -10, y: -20 }} transition={{ delay: 0.8 }} className="absolute z-20 top-8 left-4 w-8 h-8 bg-white shadow-lg rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-[10px]">✦</span>
                </motion.div>
                <motion.div animate={isInView ? { opacity: 1, scale: 1, x: -45, y: 0 } : { opacity: 0, scale: 0, x: -5, y: -10 }} transition={{ delay: 1.0 }} className="absolute z-20 top-1/2 left-4 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-xs text-center w-full leading-none">❤️</span>
                </motion.div>
            </div>
        </div>
    );
};

const ServiceCard = ({ title, description, tags, image, bgColor = "bg-white", textColor = "text-gray-900", tagBg = "bg-gray-100", tagText = "text-gray-600", sharedLayoutId, customVisual, small = false, fullBackground = false, showTags = true, showDescription = true }) => {
    return (
        <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 1.3 }}
            className={`${fullBackground ? "bg-black" : bgColor} ${small ? "p-4 rounded-[24px]" : "p-8 rounded-[40px]"} border border-gray-200 flex flex-col h-full hover:shadow-2xl cursor-pointer overflow-hidden relative group`}
        >
            {fullBackground && image && (
                <div className="absolute inset-0 z-0">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
            )}

            <div className="relative z-10 flex flex-col h-full">
                {/* Tags */}
                {showTags && tags && tags.length > 0 && (
                    <div className={`flex flex-wrap gap-1.5 ${small ? "mb-3" : "mb-6"}`}>
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className={`${small ? "px-2 py-0.5 text-[9px]" : "px-4 py-1.5 text-xs"} ${tagBg} ${tagText} font-medium rounded-full`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Title */}
                <h3 className={`${small ? "text-lg" : "text-3xl"} font-bold ${fullBackground ? "text-white" : textColor} ${small ? "mb-1.5" : "mb-3"}`}>
                    {title}
                </h3>

                {/* Description */}
                {showDescription && description && (
                    <p className={`${fullBackground ? "text-white/80" : "text-gray-500"} ${small ? "text-[11px]" : "text-sm"} leading-relaxed`}>
                        {description}
                    </p>
                )}

                {/* Image Box (Below description) */}
                {image && !fullBackground && (
                    <motion.div
                        className="mt-8 flex-1 w-full rounded-[32px] overflow-hidden bg-gray-100 relative"
                        layoutId={sharedLayoutId}
                    >
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </motion.div>
                )}

                {/* Custom Visual (e.g., Sliders or Charts) */}
                {customVisual && (
                    <div className={`mt-auto ${small ? "pt-3" : "pt-8"}`}>
                        {customVisual}
                    </div>
                )}

                {/* fallback Arrow for cards without image/visual */}
                {!image && !customVisual && (
                    <div className={`${small ? "mt-4" : "mt-8"} self-end`}>
                        <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

const Tag = ({ children, icon, type, bgColor }) => {
    const baseStyles = "flex-shrink-0  flex items-center whitespace-nowrap cursor-default";

    if (type === "outline") {
        return (
            <div className={`${baseStyles} px-2 border border-gray-900 rounded-full`}>
                <span className="text-sm">{icon}</span>
                <span className="text-gray-900 text-sm">{children}</span>
            </div>
        );
    }

    if (type === "circle") {
        return (
            <div className={`${baseStyles} `}>
                <div className={`w-6 h-6 mx-2 ${bgColor} rounded-full flex items-center justify-center`}>
                    <span className="text-white text-sm">{icon}</span>
                </div>
                <span className=" text-gray-900 text-sm">{children}</span>
            </div>
        );
    }

    if (type === "highlight") {
        return (
            <div className={`${baseStyles} px-1  ${bgColor} rounded-full border ${bgColor}`}>
                <div className="bg-white/20 mx-2 w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-sm">{icon}</span>
                </div>
                <span className=" text-gray-900 text-sm">{children}</span>
            </div>
        );
    }

    return null;
};

const Row = ({ children, reverse = false }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    const initialX = "60vw";
    const burstX = reverse ? "calc(60vw + 5%)" : "calc(60vw - 5%)";
    const endX = reverse ? "calc(60vw + 50%)" : "calc(60vw - 50%)";

    return (
        <div className="flex justify-start overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <motion.div
                ref={ref}
                initial={{ x: initialX }}
                animate={inView ? {
                    x: [initialX, burstX, endX]
                } : {}}
                transition={{
                    duration: 120,
                    repeat: Infinity,
                    ease: ["easeOut", "linear"],
                    times: [0, 0.00625, 1], // 0.75s at 120s total
                    repeatType: "loop"
                }}
                className="flex gap-10 whitespace-nowrap min-w-max"
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
};







const ServiceSection = ({ id, hero, left, right, bottom }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const ref = useRef(null);
    const isSectionInView = useInView(ref, { once: true, amount: 0.9 });

    useEffect(() => {
        let resizeTimer;
        const checkMobile = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => setIsMobile(window.innerWidth < 768), 150);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile, { passive: true });
        return () => {
            window.removeEventListener('resize', checkMobile);
            clearTimeout(resizeTimer);
        };
    }, []);

    const scrollContainerRef = useScrollContainer();
    const { scrollYProgress } = useScroll({
        target: ref,
        container: scrollContainerRef,
        offset: ["start end", "end start"]
    });

    // Consolidated Parallax: Side cards move SIGNIFICANTLY faster than the Hero card
    const convergePoint = 0.6;
    const sideExitY = -1400;  // Extremely high speed exit for sides/bottom
    const heroExitY = -80;   // Very slow, sticky exit for Hero

    // Hero card stays almost stationary to keep focus
    const yHero = useTransform(scrollYProgress, [0, convergePoint, 1], [80, 0, heroExitY]);

    // Side cards start from lower and zoom past the hero at high speed
    const yLeft = useTransform(scrollYProgress, [0, convergePoint, 1], [200, -128, sideExitY - 128]);
    const yRight = useTransform(scrollYProgress, [0, convergePoint, 1], [200, -192, sideExitY - 192]);

    // Bottom cards follow the extreme high-speed side parallax
    const yBottom = useTransform(scrollYProgress, [0, convergePoint, 1], [200, 0, sideExitY]);

    // Hero Entry Opacity: 50% when start showing, 100% when fully in view
    const heroRef = useRef(null);
    const { scrollYProgress: heroScrollY } = useScroll({
        target: heroRef,
        container: scrollContainerRef,
        offset: ["start end", "0.8 end"]
    });
    const heroOpacity = useTransform(heroScrollY, [0, 1], [0.5, 1]);
    const heroScale = useTransform(heroScrollY, [0, 1], [0.95, 1]);

    useEffect(() => {
        let timer;
        let unlockTimer;

        if (isSectionInView && !isExpanded) {
            // Lock the scroll briefly so they see the expansion starts
            if (scrollContainerRef.current) {
                scrollContainerRef.current.style.overflowY = "hidden";

                unlockTimer = setTimeout(() => {
                    if (scrollContainerRef.current) {
                        scrollContainerRef.current.style.overflowY = "";
                    }
                }, 500);
            }

            // Start animation sequence when section enters view
            timer = setTimeout(() => {
                setIsExpanded(true);
            }, 2000); // Give user time to see the Hero card first
        }
        return () => {
            clearTimeout(timer);
            clearTimeout(unlockTimer);
        };
    }, [isSectionInView, isExpanded, scrollContainerRef]);

    return (
        <div ref={ref} className="z-10 max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative text-black">
            <motion.div layout className="grid grid-cols-1 md:grid-cols-[1fr_2.2fr_1fr] gap-6 min-h-[600px] relative">
                {!isExpanded ? (
                    <motion.div
                        layout
                        className="md:col-span-3 flex justify-center items-center relative -mx-4 sm:-mx-6 lg:-mx-8"
                        key="hero-card-container"
                    >
                        <motion.div
                            ref={heroRef}
                            layoutId={`hero-card-container-${id}`}
                            className="w-[95vw] h-[450px] relative overflow-hidden md:rounded-[40px] group z-20"
                            whileHover="hover"
                            style={{ opacity: heroOpacity, scale: heroScale, y: !isMobile ? yHero : 0 }}
                            transition={{ duration: 2.5, ease: [0.32, 0.72, 0, 1] }}
                        >
                            <ServiceCard {...hero} sharedLayoutId={`hero-image-${id}`} />

                            <div
                                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 w-max"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                >
                                    <motion.button
                                        onClick={() => setIsExpanded(true)}
                                        layout="position"
                                        className="flex flex-col items-center cursor-pointer group"
                                    >
                                        <motion.div
                                            animate={isSectionInView ? { y: 65 } : { y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
                                            className="relative z-20 -mt-8"
                                        >
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-900  overflow-visible">
                                                <path d="M12 4v16m-7-7l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                        </motion.div>

                                        <div className="w-16 h-16 bg-white/80 backdrop-blur-md rounded-full flex flex-col items-center justify-center -mb-8 pt-1 shadow-lg border border-white/30 text-gray-800 font-medium text-[10px] leading-tight transition-colors group-hover:bg-white/90">
                                            <span>Explore</span>
                                            <span>more</span>
                                        </div>
                                    </motion.button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                ) : (
                    <>
                        {/* Card 1 - Left */}
                        <motion.div
                            className="h-auto w-[325px] md:w-[435px] min-h-[400px] md:h-[500px] md:mt-32 order-2 md:order-1"
                            style={!isMobile ? { y: yLeft } : undefined}
                            initial={{ opacity: 0, x: -100, scale: 0.98 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
                            key="card-left"
                        >
                            <ServiceCard {...left} />
                        </motion.div>

                        {/* Middle — Hero card only, no bottom cards here */}
                        <motion.div layout className="flex flex-col items-center order-1 pb-10 md:order-2">
                            {/* Card 2 - Hero (Middle) */}
                            <motion.div
                                layoutId={`hero-card-container-${id}`}
                                transition={{ duration: 2.5, ease: [0.32, 0.72, 0, 1] }}
                                style={!isMobile ? { y: yHero } : undefined}
                                key="card-middle"
                                className="w-[325px] md:w-[435px] h-[320px] md:h-[380px] z-20"
                            >
                                <div className="h-full w-full relative">
                                    <ServiceCard {...hero} sharedLayoutId={`hero-image-${id}`} />
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Card 3 - Right */}
                        <motion.div
                            className="h-auto w-[325px] md:w-[435px] min-h-[400px] md:h-[450px] md:mt-48 order-3"
                            style={!isMobile ? { y: yRight } : undefined}
                            initial={{ opacity: 0, x: 100, scale: 0.98 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
                            key="card-right"
                        >
                            <ServiceCard {...right} />
                        </motion.div>
                    </>
                )}
            </motion.div>

            {/* Bottom Cards — full-width 2-column row BELOW the top 3 cards, same ySideFast parallax */}
            {isExpanded && (
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-9 "
                    style={!isMobile ? { y: yBottom } : undefined}
                    initial={{ opacity: 0, y: 50, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
                >
                    {bottom.map((card, idx) => (
                        <div key={idx} className="h-[380px] md:h-[420px]">
                            <ServiceCard {...card} />
                        </div>
                    ))}
                </motion.div>
            )}
        </div >
    );
};

export default function Services() {
    const allTags = [
        { name: "Brand Identity & Logo Design", icon: "✧", type: "outline" },
        { name: "Content Creation", icon: "✎", type: "circle", bgColor: "bg-red-600" },
        { name: "UI UX Design", icon: "⬢", type: "highlight", bgColor: "bg-[#E9FFC2]" },
        { name: "Brand Strategy", icon: "✦", type: "circle", bgColor: "bg-[#7B61FF]" },
        { name: "Ad & Campaign Design / Management", icon: "🥸", type: "outline" },
        { name: "Email Marketing", icon: "✉️", type: "highlight", bgColor: "bg-[#E0D7FF]" },
        { name: "App Design", icon: "📱", type: "circle", bgColor: "bg-[#A3E635]" },
        { name: "Photography & Cinematography", icon: "📷", type: "outline" },
        { name: "Creative Direction", icon: "✮", type: "circle", bgColor: "bg-red-500" },
        { name: "Brand Guidelines", icon: "📔", type: "highlight", bgColor: "bg-rose-200" },
        { name: "Content Strategy", icon: "⚡️", type: "circle", bgColor: "bg-[#7B61FF]" },
        { name: "Website Design", icon: "💻", type: "highlight", bgColor: "bg-[#E9FFC2]" },
        { name: "Script Writing", icon: "✍️", type: "circle", bgColor: "bg-red-600" },
        { name: "Influencer Marketing", icon: "💎", type: "outline" },
        { name: "Logotype", icon: "🔥", type: "circle", bgColor: "bg-[#7B61FF]" },
        { name: "User Research & Persona Building", icon: "👤", type: "highlight", bgColor: "bg-[#E9FFC2]" },
        { name: "Brand Voice", icon: "📢", type: "circle", bgColor: "bg-red-600" },
        { name: "Rebranding", icon: "💀", type: "outline" },
        { name: "Analytics & Growth", icon: "📈", type: "highlight", bgColor: "bg-[#E0D7FF]" },
        { name: "SEO & SEM", icon: "⚙️", type: "circle", bgColor: "bg-[#A3E635]" },
    ];

    const serviceSections = [
        {
            hero: {
                title: "Social Media Management",
                description: "We craft unique and memorable brand identities that reflect your business values and resonate with your audience.",
                tags: ["SMM Strategy & Planning", "Content Creation"],
                image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=50&w=800&auto=format&fit=crop",
                fullBackground: true,
                showTags: false,
                showDescription: false
            },
            left: {
                title: "Branding & Strategy",
                description: "We craft unique and memorable brand identities that reflect your business values and resonate with your audience.",
                tags: ["Logo", "Creative Branding", "Visual Identity"],
                bgColor: "bg-white",
                customVisual: <StatsSliderVisual />
            },
            right: {
                title: "Digital Marketing",
                description: "We craft memorable brand identities that reflect your business",
                tags: ["Email Marketing", "Analytics & Reporting"],
                bgColor: "bg-white",
                customVisual: <CircleProgressVisual />
            },
            bottom: [
                {
                    title: "Copy Writing",
                    description: "We craft unique and memorable brand identities.",
                    tags: ["Ad Copy & Campaign lines"],
                    bgColor: "bg-[#F3F4F6]",
                    customVisual: <CounterVisual small={true} />
                },
                {
                    title: "App & Web Development",
                    description: "We craft unique and memorable brand identities.",
                    tags: ["App & Website Design"],
                    bgColor: "bg-[#F3F4F6]",
                    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=50&w=800&auto=format&fit=crop"
                }
            ]
        }
    ];

    return (
        <section className="relative z-0 bg-white flex flex-col justify-center pt-10 overflow-hidden">

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-7"
                >
                    <h2 className="text-4xl md:text-6xl text-gray-900 mb-4">
                        What We Offer
                    </h2>
                    <p className="text-gray-500">At MADS! We are committed to delivering exceptional services</p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                className="flex flex-col mb-4"
            >
                <Row>
                    {allTags.map((item, idx) => (
                        <Tag key={idx} {...item}>{item.name}</Tag>
                    ))}
                </Row>
            </motion.div>

            {serviceSections.map((section, idx) => (
                <ServiceSection key={idx} id={idx} {...section} />
            ))}
        </section>
    );
}