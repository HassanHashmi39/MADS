import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

const categories = [
    { id: "services", label: "Services" },
    { id: "process", label: "Process" },
    { id: "pricing", label: "Pricing & Billing" },
    { id: "support", label: "General Support" },
];

const faqData = {
    services: [
        {
            question: "What specific industries does MADS specialize in?",
            answer: "MADS is a versatile agency that works across various sectors including High-Tech, Luxury Real Estate, E-commerce, and Professional Services. We specialize in transforming brands through high-end design and performance marketing."
        },
        {
            question: "Do you offer individual services or only full packages?",
            answer: "While we believe in a holistic approach for the best ROI, we do offer individual services like App Development, UI/UX Design, or specific Performance Marketing campaigns depending on your brand's current needs."
        },
        {
            question: "Can you help with rebranding an existing business?",
            answer: "Absolutely. Rebranding is one of our core strengths. We analyze your current market position, identify growth opportunities, and create a fresh, premium identity that resonates with your evolving audience."
        }
    ],
    process: [
        {
            question: "How long does a typical Branding & Strategy project take?",
            answer: "A comprehensive branding project typically spans 4 to 8 weeks. This includes research, strategy workshops, visual identity design, and delivery of brand guidelines."
        },
        {
            question: "What is your development process for web and mobile apps?",
            answer: "We follow an agile, design-first approach. It starts with deep discovery and wireframing, followed by premium UI design, and finally high-performance coding with rigorous testing phases."
        }
    ],
    pricing: [
        {
            question: "What is your typical pricing model?",
            answer: "We primarily work on a value-based project pricing model. For ongoing partnerships like Digital Marketing or Maintenance, we offer monthly retainer options tailored to your specific goals."
        },
        {
            question: "Do you require a deposit to start a project?",
            answer: "Yes, we typically require a 50% commencement fee to secure your slot in our production queue, with the remainder billed at key milestones or project completion."
        }
    ],
    support: [
        {
            question: "How do we communicate during the project?",
            answer: "We use a dedicated Slack channel for daily communication and scheduled weekly strategy calls via Zoom or Google Meet. You'll also have access to a custom Notion dashboard to track real-time progress."
        },
        {
            question: "Do you offer post-launch support and maintenance?",
            answer: "Yes, we provide 30 days of complimentary support after any launch. Beyond that, we offer various maintenance packages to ensure your platform stays secure, fast, and up-to-date."
        }
    ]
};

import { useTheme } from "../context/ThemeContext";

const FaqItem = ({ question, answer, isOpen, onClick }) => {
    const { isDarkMode } = useTheme();
    return (
        <div className="mb-4">
            <button
                onClick={onClick}
                className={`w-full transition-all duration-300 rounded-[1.5rem] p-6 text-left flex items-start justify-between group ${isDarkMode ? 'bg-[#1A1A1A] hover:bg-[#222]' : 'bg-white hover:bg-gray-50 border border-black/5 shadow-sm'
                    }`}
            >
                <span className={`font-bold text-lg md:text-xl pr-8 leading-tight ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    {question}
                </span>
                <div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen
                    ? (isDarkMode ? 'rotate-180 bg-white text-black border-white' : 'rotate-180 bg-black text-white border-black')
                    : (isDarkMode ? 'text-white border-gray-700' : 'text-black border-gray-200')
                    }`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6" />
                    </svg>
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className={`p-8 pt-4 text-lg leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function FaqsPage() {
    const { isDarkMode } = useTheme();
    const [activeTab, setActiveTab] = useState("services");
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`transition-colors duration-500 min-h-screen font-tomato outline-none ${isDarkMode ? 'bg-black text-white' : 'bg-[#f8f8f8] text-black'}`}
        >
            {/* Hero Section */}
            <div className="relative h-[60vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                        alt="City Background"
                        className={`w-full h-full object-cover grayscale transition-opacity duration-500 ${isDarkMode ? 'opacity-40' : 'opacity-10'}`}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-b from-transparent transition-colors duration-500 ${isDarkMode ? 'via-black/50 to-black' : 'via-white/50 to-[#f8f8f8]'}`} />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 max-w-4xl"
                >
                    <h1 className={`text-[4rem] md:text-[6rem] font-black leading-[0.9] mb-6 tracking-tighter overflow-hidden ${isDarkMode ? 'text-white' : 'text-black'}`}>
                        {"FREQUENTLY ASKED QUESTIONS".split(" ").map((word, i) => (
                            <motion.span
                                key={i}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: i * 0.1,
                                    ease: [0.215, 0.61, 0.355, 1]
                                }}
                                className="inline-block mr-4 last:mr-0"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className={`text-xl font-medium max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                    >
                        We're here to help with any questions you have about our premium services,
                        proven process, and how we can elevate your brand.
                    </motion.p>
                </motion.div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-6 -mt-20 relative z-20 pb-32">

                {/* Tab Switcher */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => {
                                setActiveTab(cat.id);
                                setOpenIndex(null);
                            }}
                            className={`px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${activeTab === cat.id
                                ? (isDarkMode ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]" : "bg-black text-white border-black shadow-lg")
                                : (isDarkMode ? "bg-[#111] text-gray-500 border-gray-800 hover:border-gray-600" : "bg-white text-gray-500 border-gray-200 hover:border-gray-400")
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* FAQ List */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {faqData[activeTab].map((item, index) => (
                        <FaqItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <div className="mt-20 text-center">
                    <p className={`mb-8 font-medium ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                        Still have questions? We're just a message away.
                    </p>
                    <Link
                        to="/contact"
                        className={`inline-flex items-center gap-4 px-10 py-5 rounded-full font-black uppercase text-sm tracking-widest hover:scale-105 transition-transform duration-300 ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'
                            }`}
                    >
                        Contact Our Team
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
