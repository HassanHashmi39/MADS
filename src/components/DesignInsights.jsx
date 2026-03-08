import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";

const insights = [
    { title: "The Future of Glassmorphism", date: "Mar 10, 2026", type: "UI Trends", id: "glassmorphism" },
    { title: "Typography in Modern Branding", date: "Feb 28, 2026", type: "Typography", id: "typography" },
    { title: "Psychology of Micro-interactions", date: "Jan 15, 2026", type: "UX Design", id: "micro-interactions" },
    { title: "Designing for Next-Gen Wearables", date: "Jan 02, 2026", type: "Product", id: "wearables" },
    { title: "Spatial Computing Interfaces", date: "Dec 18, 2025", type: "Innovation", id: "spatial" },
];

const DesignInsights = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-h-[150vh] bg-[#f3f3f2] text-black pt-40 pb-24 px-4 sm:px-6 lg:px-8 font-tomato outline-none"
        >
            <div className="max-w-7xl mx-auto flex flex-col items-center flex-1">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-8xl lg:text-[100px] font-tomatoGrotesk text-center leading-[0.9] tracking-tighter mb-4">
                        DESIGN <br /> <span className="text-lime-400 italic">INSIGHTS</span>
                    </h1>
                </motion.div>

                <p className="text-gray-600 mt-12 mb-20 max-w-xl text-center text-lg md:text-xl font-medium">
                    Deep dives into the mechanics of what makes an interface beautiful, functional, and timeless.
                </p>

                <div className="w-full max-w-4xl border-t border-black/10">
                    {insights.map((insight, idx) => (
                        <Link to={`/design-insights/${insight.id}`} key={idx} className="block">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group flex flex-col md:flex-row items-start md:items-center justify-between py-10 border-b border-black/10 cursor-pointer relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-lime-400/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                                <div className="relative z-10 w-full md:w-auto">
                                    <span className="text-sm font-mono text-gray-500 block mb-2">{insight.date}</span>
                                    <h3 className="text-2xl md:text-4xl font-bold font-tomatoGrotesk text-gray-900 group-hover:text-black transition-colors duration-300">
                                        {insight.title}
                                    </h3>
                                </div>
                                <div className="relative z-10 mt-4 md:mt-0 flex items-center gap-4">
                                    <span className="text-sm font-bold tracking-widest uppercase text-gray-500 border border-black/20 px-4 py-1 rounded-full group-hover:border-black group-hover:text-black transition-colors bg-white">
                                        {insight.type}
                                    </span>
                                    <svg className="w-6 h-6 text-gray-900 group-hover:text-black transform group-hover:rotate-45 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default DesignInsights;
