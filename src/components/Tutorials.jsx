import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const tutorials = [
    { id: "framer", title: "Building Advanced Animations with Framer Motion", level: "Expert", duration: "12 mins", icon: "✨" },
    { id: "nextjs", title: "Next.js App Router Masterclass", level: "Intermediate", duration: "25 mins", icon: "🚀" },
    { id: "figma", title: "Figma to React Workflow Automation", level: "Advanced", duration: "40 mins", icon: "🎨" },
    { id: "gsap", title: "GSAP Scrolling Techniques", level: "Intermediate", duration: "18 mins", icon: "📜" },
    { id: "webgl", title: "WebGL Shader Concepts for UI", level: "Expert", duration: "35 mins", icon: "🔮" },
    { id: "tailwind", title: "Design Systems in Tailwind", level: "Beginner", duration: "10 mins", icon: "🛠️" },
];

const Tutorials = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-h-screen bg-white text-black pt-32 pb-24 px-4 sm:px-6 lg:px-8 font-tomato outline-none"
        >
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                {/* ... existing header and grid content ... */}
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1 className="text-6xl md:text-8xl lg:text-[110px] font-tomatoGrotesk text-center leading-[0.9] tracking-tighter mb-4 text-gray-900 border-2 border-black inline-block p-4 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] uppercase">
                        Tutorials
                    </h1>
                </motion.div>

                <p className="text-gray-600 mt-12 mb-16 max-w-2xl text-center text-lg md:text-xl font-medium">
                    Learn by building. Master cutting edge development and immersive design techniques with our curated video tutorials.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {tutorials.map((tut, index) => (
                        <Link to={`/tutorials/${tut.id}`} key={index} className="block group">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                                className="bg-gray-50 border-2 border-black p-6 flex flex-col justify-between h-[300px] hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer rounded-xl"
                            >
                                <div className="flex justify-between items-start">
                                    <span className="text-4xl">{tut.icon}</span>
                                    <div className="flex flex-col items-end gap-1">
                                        <span className="text-xs font-bold uppercase tracking-wider bg-black text-white px-2 py-1 rounded">
                                            {tut.level}
                                        </span>
                                        <span className="text-xs font-bold text-gray-500">
                                            {tut.duration}
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-tomatoGrotesk font-bold text-gray-900 leading-tight mb-4 group-hover:text-lime-500 transition-colors">
                                        {tut.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-black font-bold uppercase text-sm tracking-widest border-t-2 border-black pt-4 w-full">
                                        Watch Video
                                        <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Tutorials;
