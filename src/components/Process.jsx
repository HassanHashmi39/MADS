import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";

const TypingText = ({ text }) => {
    const [displayText, setDisplayText] = useState("");
    useEffect(() => {
        let i = 0;
        setDisplayText("");
        const interval = setInterval(() => {
            setDisplayText(text.slice(0, i + 1));
            i++;
            if (i >= text.length) clearInterval(interval);
        }, 15);
        return () => clearInterval(interval);
    }, [text]);

    return <span>{displayText}</span>;
};

const VideoButton = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <motion.div
            animate={{ height: (isMobile && isHovered) ? 320 : 56 }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                mass: 0.8
            }}
            className="flex justify-center mb-6 md:mb-16 px-6 relative z-20"
        >
            <motion.div
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onClick={() => setIsHovered(!isHovered)}
                className="absolute top-0 cursor-pointer overflow-hidden rounded-[28px] bg-[#1d1d1d] shadow-2xl w-[220px]"
                animate={{
                    height: isHovered ? 320 : 56,
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    mass: 0.8
                }}
            >
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
                </video>

                {/* Overlays */}
                <div className={`absolute inset-0 bg-black/30 transition-opacity duration-500 ${isHovered ? 'opacity-10' : 'opacity-40'}`} />

                {/* Button Content (Collapsed) */}
                <motion.div
                    className="absolute inset-x-0 h-14 flex items-center justify-center gap-3 px-6"
                    animate={{
                        opacity: isHovered ? 0 : 1,
                        y: isHovered ? -20 : 0
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <span className="text-white font-medium text-sm tracking-wide">How it works!</span>

                </motion.div>

                {/* Card Content (Expanded) */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        scale: isHovered ? 1 : 0.8
                    }}
                    transition={{ duration: 0.4, delay: isHovered ? 0.1 : 0 }}
                >

                </motion.div>

                {/* Bottom Shine */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>
        </motion.div>
    );
};

export default function Process() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.2, once: false });
    const [hoveredStep, setHoveredStep] = useState(null);

    const steps = [
        {
            number: 1,
            title: "Book a Call",
            description: "Let’s Discuss Your Goals and Transform Your Online Presence",
            pos: { x: 100, y: 45 },
            align: "top",
            color: "#7B61FF", // Purple
        },
        {
            number: 2,
            title: "Discovery & Planning",
            description: "It’s about understanding your brand & creating plan for your success.",
            pos: { x: 279, y: 60 },
            align: "bottom",
            color: "#a3e635", // lime-400
        },
        {
            number: 3,
            title: "Proposal & Agreement",
            description: "This step ensures transparency & sets clear expectations for both of us.",
            pos: { x: 500, y: 140 },
            align: "bottom",
            color: "#ef4444", // Red
        },
        {
            number: 4,
            title: "Launch & Support",
            description: "Ensures you can use your new tools and strategies to achieve your goals.",
            pos: { x: 700, y: 55 },
            align: "bottom",
            color: "#3b82f6", // Blue
        },
        {
            number: 5,
            title: "Execution",
            description: "You’ll see your brand come to life with designs, strategies",
            pos: { x: 850, y: 45 },
            align: "top",
            color: "#1d1d1d", // Black (using #1d1d1d for better feel)
        },
    ];

    const pathData = "M 50 100 C 150 20, 250 20, 350 100 S 550 180, 650 100 S 850 20, 950 100";

    const isDarkBackground = hoveredStep && hoveredStep.color !== "#a3e635";

    return (
        <motion.section
            ref={ref}
            animate={{
                backgroundColor: hoveredStep ? hoveredStep.color : "#ffffff"
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative w-full min-h-screen overflow-hidden z-0 font-tomato pt-24 pb-10 md:pt-12 transition-colors duration-500 flex flex-col items-center justify-start shadow-[0_-40px_80px_rgba(0,0,0,0.1),0_40px_80px_rgba(0,0,0,0.1)]"
        >

            <div className="max-w-[1400px] mx-auto px-6 relative z-10" key={isInView ? "active" : "inactive"}>
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={isInView ? (hoveredStep ? { opacity: 0, y: -20, pointerEvents: "none" } : { opacity: 1, y: 0, pointerEvents: "auto" }) : { opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`text-[28px] md:text-[54px] font-medium text-center lg:tracking-tight mb-4 md:mb-6 transition-colors duration-500 ${hoveredStep ? (isDarkBackground ? "text-white" : "text-black") : "text-[#1D1D1D]"
                        }`}
                >
                    Here’s how to Start
                </motion.h2>

                <motion.div
                    animate={{
                        opacity: hoveredStep ? 0 : 1,
                        scale: hoveredStep ? 0.95 : 1,
                        pointerEvents: hoveredStep ? "none" : "auto"
                    }}
                    transition={{ duration: 0.4 }}
                >
                    <VideoButton />
                </motion.div>


                {/* Desktop Curve */}
                <div className="hidden lg:block relative w-full aspect-[1000/200] max-w-[1200px] mx-auto mb-25 mt-32">
                    {/* SVG Progress Line */}
                    <div className="absolute inset-0 pointer-events-none">
                        <svg
                            className="w-full h-full"
                            viewBox="0 0 1000 200"
                            preserveAspectRatio="xMidYMid meet"
                            fill="none"
                        >
                            <defs>
                                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                                    <stop offset="0%" stopColor={hoveredStep ? (isDarkBackground ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)") : "#e5e5e5"} />
                                    <stop offset="25%" stopColor={hoveredStep ? (isDarkBackground ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.3)") : "#a3a3a3"} />
                                    <stop offset="50%" stopColor={hoveredStep ? (isDarkBackground ? "white" : "black") : "#000000"} />
                                    <stop offset="75%" stopColor={hoveredStep ? (isDarkBackground ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.3)") : "#a3a3a3"} />
                                    <stop offset="100%" stopColor={hoveredStep ? (isDarkBackground ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)") : "#e5e5e5"} />
                                </linearGradient>

                                {/* Static bold center mask */}
                                <linearGradient id="thickMaskGrad" x1="0" y1="0" x2="1" y2="0">
                                    <stop offset="0%" stopColor="black" />
                                    <stop offset="20%" stopColor="black" />
                                    <stop offset="45%" stopColor="white" />
                                    <stop offset="55%" stopColor="white" />
                                    <stop offset="80%" stopColor="black" />
                                    <stop offset="100%" stopColor="black" />
                                </linearGradient>
                                <mask id="thickMask">
                                    <rect x="0" y="0" width="1000" height="200" fill="url(#thickMaskGrad)" />
                                </mask>

                                {/* Static medium mask */}
                                <linearGradient id="mediumMaskGrad" x1="0" y1="0" x2="1" y2="0">
                                    <stop offset="0%" stopColor="black" />
                                    <stop offset="5%" stopColor="black" />
                                    <stop offset="25%" stopColor="white" />
                                    <stop offset="75%" stopColor="white" />
                                    <stop offset="95%" stopColor="black" />
                                    <stop offset="100%" stopColor="black" />
                                </linearGradient>
                                <mask id="mediumMask">
                                    <rect x="0" y="0" width="1000" height="200" fill="url(#mediumMaskGrad)" />
                                </mask>

                            </defs>

                            <motion.path
                                d={pathData}
                                stroke="url(#lineGrad)"
                                strokeWidth="0.5"
                                strokeLinecap="round"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                                transition={{ duration: 10, ease: [0.45, 0, 0.55, 1] }}
                            />

                            <motion.path
                                d={pathData}
                                stroke={hoveredStep ? (isDarkBackground ? "white" : "black") : "#555"}
                                strokeWidth="0.8"
                                strokeLinecap="round"
                                fill="none"
                                mask="url(#mediumMask)"
                                initial={{ pathLength: 0 }}
                                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                                transition={{ duration: 10, ease: [0.45, 0, 0.55, 1] }}
                            />

                            {/* Bold center — static mask, stays in middle */}
                            <motion.path
                                d={pathData}
                                stroke={hoveredStep ? (isDarkBackground ? "white" : "black") : "#111"}
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                fill="none"
                                mask="url(#thickMask)"
                                initial={{ pathLength: 0 }}
                                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                                transition={{ duration: 10, ease: [0.45, 0, 0.55, 1] }}
                            />

                            {/* Barik moving header — 5-unit dash travels tip to end via dashoffset, stays at endpoint */}
                            <motion.path
                                d={pathData}
                                pathLength="100"
                                stroke={hoveredStep ? (isDarkBackground ? "white" : "#111") : "#111"}
                                strokeWidth="0.1"
                                strokeLinecap="round"
                                strokeDasharray="5 100"
                                initial={{ strokeDashoffset: 5 }}
                                animate={isInView ? { strokeDashoffset: -95 } : { strokeDashoffset: 5 }}
                                transition={{ duration: 10, ease: [0.45, 0, 0.55, 1] }}
                                fill="none"
                                style={{ pointerEvents: 'none' }}
                            />
                        </svg>
                    </div>

                    {steps.map((step, i) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
                            transition={{
                                delay: isInView
                                    ? (i === 0 ? 0 : i === 1 ? 2 : i === 2 ? 5 : i === 3 ? 6.5 : 8.2)
                                    : 0,
                                duration: 1,
                                type: "spring"
                            }}
                            className="absolute flex flex-col items-center"
                            style={{
                                left: `${(step.pos.x / 1000) * 100}%`,
                                top: `${(step.pos.y / 200) * 100}%`,
                                transform: "translate(-50%, -50%)",
                            }}
                            onMouseEnter={() => setHoveredStep(step)}
                            onMouseLeave={() => setHoveredStep(null)}
                        >
                            <AnimatePresence>
                                {hoveredStep?.number === step.number && (
                                    <motion.div
                                        initial={{ opacity: 0, y: step.align === "top" ? 20 : -10, scale: 0.9 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: step.align === "top" ? 20 : -10, scale: 0.9 }}
                                        className={`absolute z-[50] w-[280px] pointer-events-none 
                                            ${step.align === "top" ? "-top-48" : "top-24"} 
                                            left-1/2 -translate-x-1/2`}
                                    >
                                        <div className={`p-5 rounded-2xl backdrop-blur-2xl border shadow-2xl text-center ${isDarkBackground
                                            ? "bg-white/10 border-white/20 text-white"
                                            : "bg-black/5 border-black/10 text-black"
                                            }`}>
                                            <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                                            <p className="text-sm font-light leading-relaxed">
                                                <TypingText text={step.description} />
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {step.align === "top" && (
                                <div className={`absolute -top-15 w-64 text-center transition-opacity duration-300 ${hoveredStep ? "opacity-0" : "opacity-100"}`}>
                                    <h3 className="font-semibold text-xl">{step.title}</h3>
                                </div>
                            )}
                            <div
                                className={`w-[35px] h-[35px] rounded-full border-2 flex items-center justify-center text-xs font-bold shadow-sm z-10 transition-all duration-300 transform cursor-pointer ${hoveredStep?.number === step.number
                                    ? "scale-125 bg-white text-black border-transparent shadow-xl"
                                    : hoveredStep
                                        ? "scale-90 opacity-40 bg-white/20 border-white/40 text-white"
                                        : "bg-white/90 border-[#7B61FF] text-black hover:scale-110"
                                    }`}
                            >
                                {step.number}
                            </div>
                            {step.align === "bottom" && (
                                <div className={`absolute top-16 w-64 text-center transition-opacity duration-300 ${hoveredStep ? "opacity-0" : "opacity-100"}`}>
                                    <h3 className="font-semibold text-xl">
                                        {step.title}
                                    </h3>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Mobile/Tablet Layout */}
                <div className="lg:hidden space-y-8 md:space-y-16 relative py-6 md:py-12">
                    <div className={`absolute left-[15px] top-4 bottom-4 w-[2px] transition-colors duration-500 ${hoveredStep ? (isDarkBackground ? "bg-white/20" : "bg-black/10") : "bg-gray-200"}`} />

                    {steps.map((step, i) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: isInView ? i * 0.2 : 0 }}
                            className="flex items-start gap-6 relative"
                            onMouseEnter={() => setHoveredStep(step)}
                            onMouseLeave={() => setHoveredStep(null)}
                        >
                            <div className={`w-[32px] h-[32px] shrink-0 rounded-full border-2 flex items-center justify-center text-xs font-bold shadow-sm z-10 relative transition-all duration-300 ${hoveredStep?.number === step.number
                                ? "bg-white text-black border-transparent scale-110"
                                : hoveredStep
                                    ? "bg-white/20 border-white/40 text-white opacity-40"
                                    : "border-[#7B61FF] bg-white text-[#7B61FF]"
                                }`}>
                                {step.number}
                            </div>
                            <div className="flex flex-col pt-1 relative">
                                <h3 className={`font-semibold text-xl transition-colors duration-500 ${hoveredStep ? (isDarkBackground ? "text-white" : "text-black") : "text-gray-900"
                                    }`}>
                                    {step.title}
                                </h3>
                                <AnimatePresence>
                                    {hoveredStep?.number === step.number && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className={`mt-2 p-4 rounded-xl backdrop-blur-xl border shadow-lg max-w-[260px] ${isDarkBackground
                                                ? "bg-white/10 border-white/20 text-white"
                                                : "bg-black/5 border-black/10 text-black"
                                                }`}
                                        >
                                            <p className="text-sm font-light leading-relaxed">
                                                <TypingText text={step.description} />
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Quote Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? (hoveredStep ? { opacity: 0, y: 20, pointerEvents: "none" } : { opacity: 1, y: 0, pointerEvents: "auto" }) : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className={`text-center mt-1 lg:mt-3 mb-4 max-w-5xl mx-auto transition-colors duration-500 ${hoveredStep ? (isDarkBackground ? "text-white" : "text-black") : "text-[#1D1D1D]"
                        }`}
                >
                    <p className="text-[15px] md:text-[26px] font-small leading-relaxed tracking-tight">
                        With over 5 years of combined experience, we’ll help you become a
                        trusted expert in your field and turn your audience into potential
                        customers.
                    </p>
                </motion.div>
            </div>

        </motion.section>
    );
}
