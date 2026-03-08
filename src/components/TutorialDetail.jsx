import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";

const tutorialsData = {
    "framer": { title: "Building Advanced Animations with Framer Motion", level: "Expert", duration: "12 mins", icon: "✨" },
    "nextjs": { title: "Next.js App Router Masterclass", level: "Intermediate", duration: "25 mins", icon: "🚀" },
    "figma": { title: "Figma to React Workflow Automation", level: "Advanced", duration: "40 mins", icon: "🎨" },
    "gsap": { title: "GSAP Scrolling Techniques", level: "Intermediate", duration: "18 mins", icon: "📜" },
    "webgl": { title: "WebGL Shader Concepts for UI", level: "Expert", duration: "35 mins", icon: "🔮" },
    "tailwind": { title: "Design Systems in Tailwind", level: "Beginner", duration: "10 mins", icon: "🛠️" },
};

const TutorialDetail = () => {
    const { id } = useParams();
    const tut = tutorialsData[id];

    if (!tut) {
        return <div className="min-h-screen flex items-center justify-center text-black font-tomato font-bold text-2xl">Tutorial Not Found</div>;
    }

    return (
        <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="min-h-screen bg-[#f3f3f2] text-black pt-32 pb-24 px-4 sm:px-6 lg:px-8 font-tomato"
        >
            <div className="max-w-5xl mx-auto flex flex-col relative z-10">
                <Link to="/tutorials" className="text-lime-500 hover:text-black transition-colors mb-8 font-bold flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Video Library
                </Link>

                <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm font-bold uppercase tracking-widest bg-black text-white px-3 py-1 rounded">
                        {tut.level}
                    </span>
                    <span className="text-sm font-bold text-gray-500">
                        {tut.duration}
                    </span>
                    <span className="text-2xl">{tut.icon}</span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-[70px] font-tomatoGrotesk leading-tight tracking-tighter mb-12">
                    {tut.title}
                </h1>

                {/* Placeholder Video Player */}
                <div className="w-full aspect-video bg-black rounded-3xl mb-12 flex items-center justify-center relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-lime-500/10 via-transparent to-lime-300/10 opacity-50 transition-opacity" />
                    <div className="w-20 h-20 bg-lime-400 rounded-full flex items-center justify-center text-black group-hover:scale-110 transition-transform cursor-pointer z-10">
                        <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-300 pt-12">
                    <div className="md:col-span-2 prose prose-lg max-w-none text-gray-700">
                        <h2 className="text-3xl font-bold text-black mb-6">Course Overview</h2>
                        <p className="leading-relaxed border-l-4 border-lime-400 pl-4 mb-8">
                            Dive deep into the core mechanics of top-tier web development. We will explore how to integrate specific brand colors—focusing heavily on white, black, and lime-400, while avoiding overuse of red and purple—to enhance the perceived performance.
                        </p>
                        <p className="leading-relaxed mb-6">
                            In this {tut.duration} session, you'll learn the techniques we use internally to craft our signature user interfaces. Get your editor ready.
                        </p>
                    </div>
                    <div className="bg-white border border-gray-200 p-8 rounded-3xl h-fit">
                        <h3 className="font-bold text-xl mb-4 text-black">Resources</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="flex items-center text-gray-800 font-bold hover:text-black hover:underline">
                                    <svg className="w-5 h-5 mr-2 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                    </svg>
                                    GitHub Repository
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center text-gray-800 font-bold hover:text-black hover:underline">
                                    <svg className="w-5 h-5 mr-2 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Cheat Sheet (PDF)
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default TutorialDetail;
