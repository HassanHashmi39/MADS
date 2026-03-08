import { motion, useInView, useScroll, useTransform } from "motion/react";
import vectorImg from "../assets/vector.webp";
import { useScrollContainer } from "../context/ScrollContext";
import quillImg from "../assets/Quill.webp";
import { useState, useEffect, useRef } from "react";
import brand1 from "../assets/brands/Logo 1.webp";
import brand2 from "../assets/brands/image 54.webp";
import brand3 from "../assets/brands/image 55.webp";
import brand4 from "../assets/brands/image 56.webp";
import brand5 from "../assets/brands/image 57.webp";
import brand6 from "../assets/brands/image 58.webp";
import brand7 from "../assets/brands/image 59.webp";

// ─── Word-by-word animated text ────────────────────────────────────────────────
// Splits a string into words, each word slides up and fades light→dark one by one
function AnimatedWords({ text, className = "", delayOffset = 0, stagger = 0.07 }) {
    const words = text.split(" ");

    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: stagger,
                delayChildren: delayOffset,
            },
        },
    };

    const wordVariant = {
        hidden: { y: 36, opacity: 0, color: "#c8c8c8" },
        visible: {
            y: 0,
            opacity: 1,
            color: "#111111",
            transition: {
                y: { duration: 0.75, ease: [0.215, 0.61, 0.355, 1] },
                opacity: { duration: 0.55, ease: "easeOut" },
                color: { duration: 1.0, ease: "easeOut" },
            },
        },
    };

    return (
        <motion.span
            className={`inline-flex flex-wrap justify-center gap-x-[0.3em] ${className}`}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    variants={wordVariant}
                    className="inline-block overflow-hidden"
                    style={{ display: "inline-block" }}
                >
                    <motion.span
                        style={{ display: "inline-block" }}
                        variants={wordVariant}
                    >
                        {word}
                    </motion.span>
                </motion.span>
            ))}
        </motion.span>
    );
}

// Simpler version: each word is its own motion element (no nested span)
function WordReveal({ text, className = "", delayOffset = 0, stagger = 0.08 }) {
    const words = text.split(" ");

    return (
        <span className={`inline-flex flex-wrap justify-center ${className}`} style={{ gap: "0 0.28em" }}>
            {words.map((word, i) => (
                <span key={i} style={{ overflow: "hidden", display: "inline-block" }}>
                    <motion.span
                        style={{ display: "inline-block" }}
                        initial={{ y: 40, opacity: 0, color: "#c8c8c8" }}
                        animate={{ y: 0, opacity: 1, color: "#111111" }}
                        transition={{
                            y: { duration: 0.75, ease: [0.215, 0.61, 0.355, 1], delay: delayOffset + i * stagger },
                            opacity: { duration: 0.6, ease: "easeOut", delay: delayOffset + i * stagger },
                            color: { duration: 1.1, ease: "easeOut", delay: delayOffset + i * stagger },
                        }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}

export default function TrustBar() {
    const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7];

    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.3, margin: "-5%", once: true });
    const scrollContainerRef = useScrollContainer();
    const { scrollYProgress } = useScroll({
        target: ref,
        container: scrollContainerRef,
        offset: ["start start", "end start"]
    });

    const [animate, setAnimate] = useState(false);
    const [introComplete, setIntroComplete] = useState(false);
    const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 375);

    // Fade out ONLY during the final overlap/exit phase
    const opacity = useTransform(scrollYProgress, [0.7, 0.95], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.7, 0.95], [1, 0.98]);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = windowWidth < 768;
    const scaleFactor = isMobile ? 1 : 1.2;

    useEffect(() => {
        let startTimer;
        let endTimer;

        if (isInView) {
            startTimer = setTimeout(() => setAnimate(true), 150);
            // 3300ms = 150ms (animate delay) + ~2750ms (last word finishes) + 400ms buffer
            endTimer = setTimeout(() => setIntroComplete(true), 3300);

            // Lock the scroll to force users to pause and watch the animation
            if (scrollContainerRef.current) {
                scrollContainerRef.current.style.overflowY = "hidden";
                setTimeout(() => {
                    if (scrollContainerRef.current) {
                        scrollContainerRef.current.style.overflowY = "";
                    }
                }, 500);
            }
        } else {
            setAnimate(false);
            setIntroComplete(false);
        }

        return () => {
            clearTimeout(startTimer);
            clearTimeout(endTimer);
        };
    }, [isInView, scrollContainerRef]);

    const reveal = { duration: 1.2, ease: [0.22, 1, 0.36, 1] };

    return (
        <section ref={ref} className="bg-white min-h-[50vh] pt-8 pb-12 flex flex-col justify-center overflow-hidden z-0">
            <motion.div
                style={{ opacity, scale }}
                className="mx-auto text-center w-full flex flex-col items-center justify-center"
            >

                {/* Intro Text Wrapper: Starts Big, Shrinks Down */}
                <motion.div
                    initial={{ scale: scaleFactor }}
                    animate={{ scale: introComplete ? 1 : scaleFactor }}
                    transition={{ scale: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } }}
                    className="flex flex-col items-center origin-center w-full"
                >
                    {/* ── Heading — word by word ─────────────────────────────── */}
                    <h2 className="text-md md:text-xl font-bold mb-4 flex flex-wrap items-center justify-center tracking-tight leading-snug px-4 max-w-full">

                        {animate && (
                            <>
                                {/* Line 1 words */}
                                <WordReveal
                                    text="Your Profile Shouldn't Just Exist"
                                    delayOffset={0}
                                    stagger={0.09}
                                    className="text-center w-full md:w-auto md:inline-flex"
                                />

                                {/* Animated arrow — appears after "Exist" */}
                                <motion.span
                                    className="inline-flex items-center overflow-visible mx-2 my-2 md:my-0"
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={{ width: isMobile ? 50 : 105, opacity: 1 }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 5 * 0.09 + 0.25 }}
                                >
                                    <svg width={isMobile ? "50" : "105"} height="24" viewBox={isMobile ? "0 0 50 24" : "0 0 105 24"} className={`${isMobile ? "w-[50px]" : "w-[105px]"} shrink-0 overflow-visible`}>
                                        <motion.path
                                            d={isMobile ? "M 0 12 L 45 12" : "M 0 12 L 100 12"}
                                            stroke="#111"
                                            strokeWidth="1.5"
                                            fill="none"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 5 * 0.09 + 0.25 }}
                                        />
                                        <motion.g
                                            initial={{ x: 0, y: 12, opacity: 1 }}
                                            animate={{ x: isMobile ? 45 : 100, y: 12, opacity: 1 }}
                                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 5 * 0.09 + 0.25 }}
                                        >
                                            <path
                                                d="M-7 -5.5 L0 0 L-7 5.5"
                                                stroke="#111"
                                                strokeWidth="1.5"
                                                fill="none"
                                                strokeLinejoin="miter"
                                            />
                                        </motion.g>
                                    </svg>
                                </motion.span>

                                {/* Line 2 words — offset after line 1 words done */}
                                <WordReveal
                                    text="It Should Sell"
                                    delayOffset={5 * 0.09 + 0.5}
                                    stagger={0.09}
                                    className="text-center w-full md:w-auto md:inline-flex"
                                />
                            </>
                        )}
                    </h2>

                    {/* ── Subtext — word by word ─────────────────────────────── */}
                    <div className="flex flex-col items-center">

                        {/* Line 1 */}
                        <p className="text-sm md:text-lg font-medium tracking-tight  flex flex-wrap justify-center items-center px-4 text-center gap-x-[0.28em]">
                            {animate && (
                                <>
                                    <WordReveal text="We create impactful" delayOffset={0.85} stagger={0.07} />

                                    {/* ✦ icon — appears inline */}
                                    <motion.span
                                        initial={{ width: 0, opacity: 0 }}
                                        animate={{ width: "auto", opacity: 1 }}
                                        transition={{ ...reveal, delay: 0.85 + 3 * 0.07 + 0.15 }}
                                        className="text-red-500 inline-flex items-center justify-center shrink-0 overflow-hidden"
                                    >
                                        <span className="w-5 h-5 flex items-center justify-center">✦</span>
                                    </motion.span>

                                    <WordReveal text="experiences for our" delayOffset={0.85 + 3 * 0.07 + 0.3} stagger={0.07} />

                                    {/* vector img */}
                                    <motion.span
                                        initial={{ width: 0, opacity: 0 }}
                                        animate={{ width: "auto", opacity: 1 }}
                                        transition={{ ...reveal, delay: 0.85 + 6 * 0.07 + 0.45 }}
                                        className="inline-flex items-center justify-center shrink-0 overflow-hidden"
                                    >
                                        <img
                                            src={vectorImg}
                                            alt="Mood"
                                            loading="lazy"
                                            width="15"
                                            height="15"
                                            className="w-3 h-3 md:w-5 md:h-5 object-contain"
                                        />
                                    </motion.span>

                                    <WordReveal text="Clients" delayOffset={0.85 + 7 * 0.07 + 0.55} stagger={0.07} />
                                </>
                            )}
                        </p>

                        {/* Line 2 */}
                        <p className="text-sm md:text-lg font-medium tracking-tight flex flex-wrap justify-center items-center px-4 text-center gap-x-[0.28em]">
                            {animate && (
                                <>
                                    <WordReveal text="every time they Engage with a Brand" delayOffset={1.5} stagger={0.07} />

                                    {/* quill icon */}
                                    <motion.span
                                        initial={{ width: 0, opacity: 0 }}
                                        animate={{ width: "auto", opacity: 1 }}
                                        transition={{ ...reveal, delay: 1.5 + 7 * 0.07 + 0.2 }}
                                        className="inline-flex items-center justify-center shrink-0 overflow-hidden"
                                    >
                                        <img
                                            src={quillImg}
                                            alt="Engagement"
                                            loading="lazy"
                                            width="24"
                                            height="24"
                                            className="w-4 h-4 md:w-6 md:h-6 object-contain translate-y-0.5"
                                        />
                                    </motion.span>
                                </>
                            )}
                        </p>

                    </div>
                </motion.div>

                {/* Brands Marquee - Appears after text shrinks */}
                <motion.div
                    initial={{ opacity: 0, y: 30, height: 0, marginTop: 0 }}
                    animate={{
                        opacity: introComplete ? 1 : 0,
                        y: introComplete ? 0 : 30,
                        height: introComplete ? "auto" : 0,
                        marginTop: introComplete ? "2.5rem" : 0
                    }}
                    transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1], delay: 0.2 }}
                    className="relative overflow-hidden w-full bg-white"
                >
                    <motion.div
                        className="flex gap-10 md:gap-20 whitespace-nowrap items-center  grayscale  hover:grayscale-0 transition-opacity duration-700"
                        animate={{ x: [0, -1000] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30,
                                ease: "linear",
                            },
                        }}
                    >
                        {[...brands, ...brands, ...brands, ...brands].map((logo, i) => (
                            <img
                                key={i}
                                src={logo}
                                alt="Brand Logo"
                                loading="lazy"
                                decoding="async"
                                width="120"
                                height="48"
                                className="h-3 md:h-9 w-auto object-contain shrink-0"
                            />
                        ))}
                    </motion.div>
                </motion.div>

            </motion.div>
        </section>
    );
}