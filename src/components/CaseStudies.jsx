import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const caseStudies = [
    { id: 1, title: "Fintech Rebranding", category: "Branding", color: "bg-black", text: "text-white" },
    { id: 2, title: "E-Commerce App UI", category: "UI/UX", color: "bg-lime-400", text: "text-black" },
    { id: 3, title: "Healthcare Platform", category: "Web Dev", color: "bg-gray-200", text: "text-black" },
    { id: 4, title: "SaaS Dashboard Workflow", category: "Product", color: "bg-black", text: "text-white" },
];

const CaseStudies = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-h-screen bg-[#f3f3f2] pt-32 pb-24 px-4 sm:px-6 lg:px-8 font-tomato outline-none"
        >
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                {/* ... existing h1, p, grid content ... */}
                {/* I'll include the rest of the body to ensure correct nesting */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-7xl lg:text-[80px] font-tomatoGrotesk text-gray-900 text-center mb-8 leading-[1.1] tracking-tight"
                >
                    Real Results, <br />
                    <span className="italic font-light text-gray-500">Real Impact.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-gray-600 text-center max-w-2xl text-lg md:text-xl font-medium mb-16"
                >
                    Explore how we've helped our clients achieve their boldest visions through strategy, design, and innovation.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
                    {caseStudies.map((item, index) => (
                        <Link to={`/case-studies/${item.id}`} key={item.id} className="block">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                                className="group relative bg-white rounded-[2rem] p-8 md:p-12 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 cursor-pointer border border-gray-100"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -mr-8 -mt-8 transition-transform duration-700 group-hover:scale-150 ease-out" />
                                <div className="relative z-10 flex flex-col h-full justify-between min-h-[200px]">
                                    <div className="flex justify-between items-start">
                                        <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${item.color} ${item.text}`}>
                                            {item.category}
                                        </span>
                                        <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-colors duration-300">
                                            <svg className="w-4 h-4 text-gray-900 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-3xl font-tomatoGrotesk font-bold text-gray-900 mt-12 group-hover:text-gray-600 transition-colors">
                                        {item.title}
                                    </h3>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default CaseStudies;
