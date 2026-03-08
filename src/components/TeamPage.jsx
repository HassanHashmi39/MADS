import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import img1 from "../assets/untitled folder/_DSC1954.webp";
import img2 from "../assets/untitled folder/_DSC1957.webp";
import img3 from "../assets/untitled folder/_DSC1989.webp";
import img4 from "../assets/untitled folder/_DSC1991.webp";
import img5 from "../assets/untitled folder/_DSC1996.webp";
import img6 from "../assets/untitled folder/_DSC1999.webp";
import img7 from "../assets/untitled folder/_DSC2003.webp";

const categories = [
    "View all",
    "Management",
    "Product",
    "Design",
    "Marketing",
    "Customer Success",
];

const teamleaders = [
    {
        id: 1,
        name: "Alex Rivera",
        role: "CEO",
        image: img1,
    },
    {
        id: 2,
        name: "Sarah Chen",
        role: "Founder",
        image: img2,
    },
    {
        id: 3,
        name: "Marcus Thorne",
        role: "Co-Founder",
        image: img3,
    },
    {
        id: 4,
        name: "Elena Rossi",
        role: "Director",
        image: img4,
    },
    {
        id: 5,
        name: "David Park",
        role: "Product Manager",
        image: img5,
    },
    {
        id: 6,
        name: "Lisa Wong",
        role: "Account Manager",
        category: "Customer Success",
        image: img6,
    },
    {
        id: 7,
        name: "James Miller",
        role: "Marketing Head",
        category: "Management",
        image: img7,
    }
];
const teamMembers = [
    {
        id: 1,
        name: "Alex Rivera",
        role: "Creative Director",
        category: "Design",
        image: img1,
    },
    {
        id: 2,
        name: "Sarah Chen",
        role: "Digital Strategist",
        category: "Marketing",
        image: img2,
    },
    {
        id: 3,
        name: "Marcus Thorne",
        role: "Lead Developer",
        category: "Product",
        image: img3,
    },
    {
        id: 4,
        name: "Elena Rossi",
        role: "Senior Designer",
        category: "Design",
        image: img4,
    },
    {
        id: 5,
        name: "David Park",
        role: "Content Creator",
        category: "Marketing",
        image: img5,
    },
    {
        id: 6,
        name: "Lisa Wong",
        role: "Account Manager",
        category: "Customer Success",
        image: img6,
    },
    {
        id: 7,
        name: "James Miller",
        role: "Marketing Head",
        category: "Management",
        image: img7,
    }
];

const TeamPage = () => {
    const [activeCategory, setActiveCategory] = useState("View all");

    const [sliderIndex, setSliderIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(() => {
            setSliderIndex((prev) => prev + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, [isHovered]);

    const visibleCards = [];
    for (let i = 0; i < 4; i++) {
        const memberIndex = (sliderIndex + i) % teamleaders.length;
        visibleCards.push({
            member: teamleaders[memberIndex],
            offset: i,
            key: `${sliderIndex + i}`
        });
    }

    const currentSliderMember = teamleaders[sliderIndex % teamleaders.length];

    const filteredMembers = activeCategory === "View all"
        ? teamMembers
        : teamMembers.filter(member => member.category === activeCategory);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-h-screen bg-[#f3f3f2] pt-32 pb-24 px-4 sm:px-6 lg:px-8 font-tomato outline-none"
        >
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Header */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-6xl lg:text-[72px] font-tomatoGrotesk text-gray-900 text-center mb-6 leading-[1.1] tracking-tight"
                >
                    Meet the team that makes <br className="hidden md:block" /> the <span className="italic font-light">magic</span> happen
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-600 font-tomatoGrotesk text-center max-w-2xl text-lg md:text-[20px] font-medium mb-12"
                >
                    Meet our diverse team of world-class creators, designers, and problem solvers.
                </motion.p>

                {/* Slider Section */}
                <div className="w-full max-w-7xl mx-auto my-16 md:my-32 flex flex-col md:flex-row items-center gap-12 lg:gap-8 overflow-hidden lg:overflow-visible">
                    {/* Left Typography */}
                    <div className="w-full md:w-[40%] flex flex-col font-serif uppercase tracking-tighter leading-[0.9] text-[90px] md:text-[110px] lg:text-[130px] pl-4 md:pl-0 z-10 shrink-0">
                        <span className="font-normal text-gray-900">Meet</span>
                        <span className="italic text-lime-400 font-light">Our</span>
                        <span className="font-normal text-gray-900">Leaders</span>
                    </div>

                    {/* Right Slider */}
                    <div
                        className="w-full md:w-[60%] relative h-[500px] md:h-[600px] flex flex-col items-start justify-center pl-4 lg:pl-12"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div className="relative w-full h-[400px] md:h-[480px]">
                            <AnimatePresence initial={false}>
                                {visibleCards.map((card) => (
                                    <motion.div
                                        key={card.key}
                                        initial={{
                                            opacity: 0,
                                            x: (card.offset + 1) * 80,
                                            scale: 1 - ((card.offset + 1) * 0.15)
                                        }}
                                        animate={{
                                            opacity: 1 - (card.offset * 0.25),
                                            x: card.offset * 120, // 120px overlap
                                            scale: 1 - (card.offset * 0.15),
                                            zIndex: 10 - card.offset,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            x: -150,
                                            scale: 1.05,
                                            zIndex: 10
                                        }}
                                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                        className="absolute top-0 left-0 w-[240px] md:w-[320px] h-full overflow-hidden shadow-[0_30px_50px_rgba(0,0,0,0.15)] bg-[#e0e0e0] origin-left"
                                    >
                                        <img src={card.member.image} alt={card.member.name} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Slider Info */}
                        <div className="relative mt-8 w-[240px] md:w-[320px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={sliderIndex}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex flex-col items-center"
                                >
                                    <h3 className="text-2xl md:text-[28px] font-serif text-gray-900 mb-4 text-center">
                                        {currentSliderMember.name}
                                    </h3>
                                    <div className="flex gap-2 justify-center flex-wrap">
                                        <span className="px-4 py-1.5 rounded-full border border-[#d0d0c0] text-[10px] md:text-[11px] font-semibold text-gray-600 tracking-wider uppercase bg-transparent">
                                            {currentSliderMember.role}
                                        </span>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap justify-center items-center gap-1 md:gap-2 mb-16"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-xl text-[15px] font-semibold transition-all duration-200 ${activeCategory === category
                                ? "bg-white text-gray-900 shadow-sm border border-gray-200"
                                : "text-gray-500 hover:text-gray-900 border border-transparent"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Team Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-[1300px]"
                >
                    <AnimatePresence>
                        {filteredMembers.map((member) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                key={member.id}
                                className="relative rounded-[2rem] overflow-hidden aspect-[3/4] group border border-gray-200/60 bg-white"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    loading="lazy"
                                    decoding="async"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-x-3 bottom-3 md:inset-x-4 md:bottom-4 z-10">
                                    <div className="bg-white/95 backdrop-blur-md border border-white/60 rounded-[1.25rem] p-4 md:p-5 text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
                                        <h3 className="font-bold text-gray-900 text-lg md:text-[22px] leading-tight mb-1">{member.name}</h3>
                                        <p className="text-gray-500 text-[15px] font-medium">{member.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default TeamPage;
