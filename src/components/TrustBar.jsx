import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useScrollContainer } from "../context/ScrollContext";
import { useState, useEffect, useRef } from "react";
import brand1 from "../assets/brands/Logo 1.webp";
import brand2 from "../assets/brands/image 54.webp";
import brand3 from "../assets/brands/image 55.webp";
import brand4 from "../assets/brands/image 56.webp";
import brand5 from "../assets/brands/image 57.webp";
import brand6 from "../assets/brands/image 58.webp";
import brand7 from "../assets/brands/image 59.webp";

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

    useEffect(() => {
        if (isInView) {
            setAnimate(true);
            setIntroComplete(true);
        } else {
            setAnimate(false);
            setIntroComplete(false);
        }
    }, [isInView]);



    return (
        <section ref={ref} className="bg-white min-h-[50vh] pt-8 pb-12 flex flex-col justify-center overflow-hidden z-0">
            <motion.div
                style={{ opacity, scale }}
                className="max-w-full mx-auto text-left w-full flex flex-col items-start justify-start  "
            >

                {/* Intro Text Wrapper */}
                <div className="flex flex-col items-start origin-left w-full px-2 md:px-5 ">
                    {/* ── Heading — Fade In ─────────────────────────────── */}
                    <h2 className="text-md md:text-xl font-bold mb-4 flex flex-wrap items-center justify-start tracking-tight leading-snug max-w-full gap-x-2">
                        {animate && (
                            <>
                                <motion.span
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                >
                                    Your Profile Shouldn't Just Exist
                                </motion.span>

                                <motion.span
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                                >
                                    It Should Sell
                                </motion.span>
                            </>
                        )}
                    </h2>

                    {/* ── Subtext ────────────────────────────────────────────── */}
                    <div className="flex flex-col items-start">

                        {/* Line 1 */}
                        <p className="text-sm md:text-lg font-medium tracking-tight flex flex-wrap justify-start items-center text-left gap-x-[0.28em]">
                            {animate && (
                                <motion.span
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                                >
                                    We create impactful experiences for our Clients
                                </motion.span>
                            )}
                        </p>

                        {/* Line 2 */}
                        <p className="text-sm md:text-lg font-medium tracking-tight flex flex-wrap justify-start items-center text-left gap-x-[0.28em]">
                            {animate && (
                                <motion.span
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                                >
                                    every time they Engage with a Brand
                                </motion.span>
                            )}
                        </p>
                    </div>
                </div>

                {/* Brands Marquee */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
                    className="relative overflow-hidden w-full bg-white mt-10"
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
                                className="h-4 md:h-9 w-auto max-w-[100px] md:max-w-[150px] object-contain shrink-0"
                            />
                        ))}
                    </motion.div>
                </motion.div>

            </motion.div>
        </section>
    );
}