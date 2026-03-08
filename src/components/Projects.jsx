import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useSpring, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';

function Counter({ value, duration = 1.2, dark = false }) {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.1 });

    const numericValue = parseInt(value) || 0;
    const suffix = value.replace(/[0-9]/g, '');

    const springValue = useSpring(0, {
        duration: duration * 1000,
        bounce: 0,
    });

    useEffect(() => {
        if (inView) {
            springValue.set(numericValue);
        } else {
            springValue.set(0);
        }
    }, [inView, numericValue, springValue]);

    const displayValue = useTransform(springValue, (latest) =>
        Math.floor(latest) + suffix
    );

    return (
        <motion.span ref={ref} className={`text-6xl font-bold mb-4 inline-block min-h-[60px] ${dark ? 'text-white' : 'text-gray-900'}`}>
            {displayValue}
        </motion.span>
    );
}

export default function Projects() {
    const sectionRef = useRef(null);
    const isSectionInView = useInView(sectionRef, { amount: 0.2 });

    const stats = [
        { label: "Years of Experience", value: "7+" },
        { label: "Projects", value: "139+" },
        { label: "Happy Clients", value: "94+" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
    const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);

    const projectItems = [
        {
            title: "Germanyaaao",
            category: "Branding",
            image: "https://images.unsplash.com/photo-1560472355-536de3962603?q=50&w=600&auto=format&fit=crop",
            color: "bg-red-600",
            highlights: [
                "Building strong brand identity for German market",
                "Social media growth strategy implementation",
                "Content creation and community engagement"
            ]
        },
        {
            title: "Cura",
            category: "Wellness",
            image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=50&w=600&auto=format&fit=crop",
            color: "bg-lime-400",
            highlights: [
                "Wellness brand positioning and awareness",
                "Health-focused content marketing",
                "Customer engagement and retention"
            ]
        },
        {
            title: "Lumina",
            category: "Technology",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=50&w=600&auto=format&fit=crop",
            color: "bg-blue-500",
            highlights: [
                "Tech product launch campaigns",
                "B2B lead generation strategy",
                "Digital presence optimization"
            ]
        },
        {
            title: "Vanguard",
            category: "Finance",
            image: "https://images.unsplash.com/photo-1560472355-536de3962603?q=50&w=600&auto=format&fit=crop",
            color: "bg-purple-600",
            highlights: [
                "Financial services brand trust building",
                "Professional audience targeting",
                "Thought leadership content creation"
            ]
        },
        {
            title: "Clenzer",
            category: "Wellness",
            image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=50&w=600&auto=format&fit=crop",
            color: "bg-red-400",
            highlights: [
                "Wellness brand positioning and awareness",
                "Health-focused content marketing",
                "Customer engagement and retention"
            ]
        }
    ];

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % projectItems.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + projectItems.length) % projectItems.length);
    };

    // Auto-slide logic
    useEffect(() => {
        let interval;
        if (isSectionInView && !isAutoplayPaused) {
            interval = setInterval(() => {
                nextSlide();
            }, 2000);
        }
        return () => clearInterval(interval);
    }, [isSectionInView, isAutoplayPaused]);

    // Reset when out of view
    useEffect(() => {
        if (!isSectionInView) {
            setCurrentIndex(0);
        }
    }, [isSectionInView]);

    const current = projectItems[currentIndex];

    // Upcoming images: next 3 in queue
    const upcomingIndices = [1, 2, 3].map((offset) => (currentIndex + offset) % projectItems.length);

    return (
        <section style={{ background: "#ffffffff" }} ref={sectionRef} className="bg-white min-h-screen flex flex-col justify-center pt-20 lg:pt-12">
            <div className="max-w-7xl mx-auto px-4 pb-20 lg:pb-20">
                <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-center mb-12 h-auto lg:h-[280px]">

                    {/* ─── MOBILE: Image with arrows + title ─── */}
                    <div className="flex lg:hidden items-center justify-center gap-4 w-full relative z-30">
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                prevSlide();
                            }}
                            className="text-3xl hover:scale-125 transition-transform cursor-pointer p-4 -ml-2 select-none"
                        >
                            ←
                        </button>

                        {/* Mobile Active Image - fade in/out */}
                        <div
                            className="w-[220px] h-[220px] rounded-[24px] flex-shrink-0 overflow-hidden shadow-lg relative"
                            onMouseEnter={() => setIsAutoplayPaused(true)}
                            onMouseLeave={() => setIsAutoplayPaused(false)}
                        >
                            <AnimatePresence mode="sync">
                                <motion.img
                                    key={currentIndex}
                                    src={current.image}
                                    alt={current.title}
                                    width="220"
                                    height="220"
                                    decoding="async"
                                    className="w-full h-full object-cover absolute inset-0"
                                    initial={{ opacity: 0, scale: 0.4 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1 }}
                                    transition={{ duration: 0.2, ease: [0.34, 1.2, 0.64, 1] }}
                                />
                            </AnimatePresence>
                        </div>

                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                nextSlide();
                            }}
                            className="text-3xl hover:scale-125 transition-transform cursor-pointer p-4 -mr-2 select-none"
                        >
                            →
                        </button>
                    </div>

                    {/* Mobile Title - animated */}
                    <div className="flex lg:hidden flex-col items-center text-center overflow-hidden min-h-[60px] justify-center">
                        <div className="grid">
                            <AnimatePresence mode="sync">
                                <motion.h3
                                    key={currentIndex}
                                    className="text-xl font-bold leading-tight text-gray-900 col-start-1 row-start-1"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.08, ease: "easeInOut" }}
                                >
                                    {current.title} — {current.category}
                                </motion.h3>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* ─── DESKTOP: Large Active Image ─── */}
                    <div
                        className="hidden lg:block w-[280px] h-[280px] rounded-[24px] flex-shrink-0 overflow-hidden shadow-lg relative cursor-pointer"
                        onMouseEnter={() => setIsAutoplayPaused(true)}
                        onMouseLeave={() => setIsAutoplayPaused(false)}
                    >
                        <AnimatePresence mode="sync">
                            <motion.img
                                key={currentIndex}
                                src={current.image}
                                alt={current.title}
                                width="280"
                                height="280"
                                fetchPriority="high"
                                decoding="async"
                                className="w-full h-full object-cover absolute inset-0"
                                initial={{ opacity: 0, scale: 0.4 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1 }}
                                transition={{ duration: 0.08, ease: [0.34, 1.2, 0.64, 1] }}
                            />
                        </AnimatePresence>
                    </div>

                    {/* ─── DESKTOP: Title & Controls ─── */}
                    <div className="hidden lg:flex flex-col justify-center gap-2 min-w-[200px] overflow-hidden relative z-30">
                        {/* Title fades + slides up on change */}
                        <div className="grid min-h-[60px] items-center">
                            <AnimatePresence mode="sync">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.08, ease: "easeInOut" }}
                                    className="col-start-1 row-start-1"
                                >
                                    <h3 className="text-xl font-bold leading-tight text-gray-900">
                                        {current.title} <br />
                                        <span className="text-gray-500 font-medium">{current.category}</span>
                                    </h3>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="flex gap-4 mt-2">
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    prevSlide();
                                }}
                                aria-label="Previous project"
                                className="text-2xl hover:scale-125 transition-transform cursor-pointer p-2 -ml-2 select-none"
                            >
                                ←
                            </button>
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    nextSlide();
                                }}
                                aria-label="Next project"
                                className="text-2xl hover:scale-125 transition-transform cursor-pointer p-2 select-none"
                            >
                                →
                            </button>
                        </div>
                    </div>

                    {/* ─── DESKTOP: Upcoming images queue ─── */}
                    <div className="hidden lg:flex flex-1 gap-4 overflow-hidden items-center h-full">
                        <AnimatePresence mode="popLayout">
                            {upcomingIndices.map((idx, position) => (
                                <motion.div
                                    key={`${idx}-${currentIndex}`}
                                    className="flex-shrink-0 rounded-[24px] overflow-hidden cursor-pointer"
                                    style={{ width: 180, height: 180 }}
                                    initial={{
                                        opacity: 0,
                                        x: 60,
                                        scale: 0.88,
                                    }}
                                    animate={{
                                        opacity: position === 0 ? 0.92 : position === 1 ? 0.72 : 0.50,
                                        x: 0,
                                        scale: position === 0 ? 1 : position === 1 ? 0.96 : 0.92,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        x: -60,
                                        scale: 0.88,
                                    }}
                                    transition={{
                                        duration: 0.1,
                                        ease: [0.15, 0.36, 0.35, 0.84],
                                        delay: position * 0.01,
                                    }}
                                    onClick={nextSlide}
                                >
                                    <img
                                        src={projectItems[idx].image}
                                        alt={projectItems[idx].title}
                                        width="180"
                                        height="180"
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* ─── BOTTOM CONTENT ─── */}
                <div className="flex flex-col md:flex-row pb-12 items-start md:items-center gap-y-8 md:gap-x-12">

                    {/* Left Side */}
                    <div className="space-y-4 md:space-y-6 flex-1">
                        <div className="flex items-center gap-4 md:gap-6">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Changing Brands</h2>
                            <svg className="hidden sm:block w-12 h-6 text-gray-900 flex-shrink-0" viewBox="0 0 50 24" fill="none">
                                <path d="M0 12H48M48 12L37 1M48 12L37 23" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </div>
                        <p className="text-lg md:text-xl text-gray-500 leading-tight">
                            Creating impactful experiences <span className="text-lime-400">✦</span> for our clients
                        </p>
                    </div>

                    {/* Right Side - highlights change with current slide */}
                    <div
                        className="flex-1 mt-8 md:mt-0 flex flex-col items-start"
                        onMouseEnter={() => setIsAutoplayPaused(true)}
                        onMouseLeave={() => setIsAutoplayPaused(false)}
                    >
                        <p className="mb-4 text-sm">
                            Here <br />
                            We give your brands a MADS new look
                        </p>
                        <div className="w-full max-w-lg">
                            <div className="grid min-h-[180px] items-start">
                                <AnimatePresence mode="sync">
                                    <motion.div
                                        key={currentIndex}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.15, ease: "easeInOut" }}
                                        className="space-y-3 col-start-1 row-start-1"
                                    >
                                        {current.highlights.map((highlight, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center justify-between py-2 border-b border-gray-100 group cursor-pointer hover:border-gray-900 transition-colors"
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className={`w-8 h-8 ${current.color} rounded-full`}></div>
                                                    <p className="text-gray-600 font-medium text-sm">{highlight}</p>
                                                </div>
                                                <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-900 transition-colors" viewBox="0 0 16 16" fill="none" stroke="currentColor">
                                                    <path d="M4 12L12 4M12 4H6M12 4V10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        ))}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                            <Link to="/projects" aria-label="Explore all our projects" className="relative z-10 text-gray-900 font-bold flex items-center gap-2 hover:gap-4 transition-all mt-4 ml-auto text-sm">
                                Explore all our Projects <span>→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* ─── FULL WIDTH DARK STATS SECTION ─── */}
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={isSectionInView ? { height: "30vh", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 1.8, ease: [0.92, 1, 0.96, 1] }}
                className="w-full bg-gray-900 overflow-hidden flex flex-col justify-center border-t border-gray-900"
            >
                <div className="max-w-7xl mx-auto px-4 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                                animate={isSectionInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 30 }}
                                transition={{ duration: 0.6, delay: 0.3 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                                className="flex flex-col items-center md:items-start text-center md:text-left border-r border-gray-800 last:border-0 pb-8 md:pb-0"
                            >
                                <Counter value={stat.value} dark />
                                <span className="text-xl text-gray-500 font-medium">{stat.label}</span>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={isSectionInView ? { width: "100%" } : { width: 0 }}
                                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 + index * 0.15 }}
                                    className="h-1 bg-gray-800 mt-8 rounded-full"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
