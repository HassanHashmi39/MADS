import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";

const caseStudiesData = {
    "1": { title: "Fintech Rebranding", category: "Branding", color: "bg-black", text: "text-white" },
    "2": { title: "E-Commerce App UI", category: "UI/UX", color: "bg-lime-400", text: "text-black" },
    "3": { title: "Healthcare Platform", category: "Web Dev", color: "bg-gray-200", text: "text-black" },
    "4": { title: "SaaS Dashboard Workflow", category: "Product", color: "bg-black", text: "text-white" },
};

const CaseStudyDetail = () => {
    const { id } = useParams();
    const study = caseStudiesData[id];

    if (!study) {
        return <div className="min-h-screen flex items-center justify-center text-black font-tomato font-bold text-2xl">Case Study Not Found</div>;
    }

    return (
        <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="min-h-screen bg-white text-black pt-32 pb-24 px-4 sm:px-6 lg:px-8 font-tomato"
        >
            <div className="max-w-4xl mx-auto flex flex-col relative z-10">
                <Link to="/case-studies" className="text-lime-500 hover:text-black transition-colors mb-8 font-bold flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Case Studies
                </Link>

                <div className="flex items-center gap-4 mb-6">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${study.color} ${study.text}`}>
                        {study.category}
                    </span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-[90px] font-tomatoGrotesk leading-[0.9] tracking-tighter mb-12">
                    {study.title}
                </h1>

                <div className="w-full h-[400px] bg-gray-100 rounded-3xl mb-12 flex items-center justify-center overflow-hidden border-4 border-black relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-lime-400/30 via-lime-200/20 to-black/5 mix-blend-multiply opacity-50 group-hover:opacity-100 transition-opacity" />
                    <span className="text-2xl font-bold uppercase tracking-widest text-gray-400 z-10">Project Showcase Media</span>
                </div>

                <div className="prose prose-lg max-w-none text-gray-700">
                    <h2 className="text-3xl font-bold text-black mb-6">The Challenge</h2>
                    <p className="leading-relaxed border-l-4 border-lime-400 pl-4 mb-8">
                        Our client demanded a radical shift in their target demographic alignment and a completely bespoke layout leveraging heavy contrast and minimalist elements. Utilizing a stark palette of white, black, and our signature lime-400 glow.
                    </p>
                    <h2 className="text-3xl font-bold text-black mb-6">Execution & Polish</h2>
                    <p className="leading-relaxed">
                        We engineered a fully custom design system to maintain consistency while leaving room for vibrant artistic expression. The process involved 12 iterative cycles of user testing, validating micro-interactions primarily with lime-400 hover states and highlighting paths clearly against the dark UI elements.
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default CaseStudyDetail;
