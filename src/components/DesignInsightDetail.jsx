import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";

const insightsData = {
    "glassmorphism": {
        title: "The Future of Glassmorphism",
        date: "Mar 10, 2026",
        type: "UI Trends",
        content: "Glassmorphism continues to evolve. In 2026, we see deeper integration with spatial computing and dynamic lighting. The trend now relies on real-time rendering of blurs to create depth without sacrificing performance. We use a combination of white, black, lime-400, purple, and red to accent these translucent surfaces, providing a modern layout structure."
    },
    "typography": {
        title: "Typography in Modern Branding",
        date: "Feb 28, 2026",
        type: "Typography",
        content: "Typography remains the cornerstone of branding. Bold serifs combined with stark sans-serif body text create a beautiful dichotomy. Using vivid colors like red and purple against stark black and white backgrounds ensures maximum readability and visceral impact."
    },
    "micro-interactions": {
        title: "Psychology of Micro-interactions",
        date: "Jan 15, 2026",
        type: "UX Design",
        content: "Micro-interactions are the secret ingredient to habit-forming products. A subtle lime-400 glow when a button is pressed or a smooth color transition to purple upon success taps directly into the user's dopamine receptors."
    },
    "wearables": {
        title: "Designing for Next-Gen Wearables",
        date: "Jan 02, 2026",
        type: "Product",
        content: "Next-generation wearables demand high-contrast interfaces. Stripping away unnecessary elements and relying heavily on a black background with stark white and vibrant lime-400 interfaces keeps cognitive load strictly to a minimum."
    },
    "spatial": {
        title: "Spatial Computing Interfaces",
        date: "Dec 18, 2025",
        type: "Innovation",
        content: "Spatial computing shifts the paradigm. Design isn't just flat vectors anymore; it involves z-axis depth manipulation. Accent lighting in red and purple helps guide the user's vision natively within 3D environments."
    },
};

const DesignInsightDetail = () => {
    const { id } = useParams();
    const insight = insightsData[id];

    if (!insight) {
        return <div className="min-h-screen flex items-center justify-center text-black font-tomato font-bold text-2xl">Insight Not Found</div>;
    }

    return (
        <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="min-h-screen bg-[#f3f3f2] text-black pt-32 pb-24 px-4 sm:px-6 lg:px-8 font-tomato relative"
        >
            <div className="max-w-4xl mx-auto flex flex-col relative z-10">
                <Link to="/design-insights" className="text-lime-600 hover:text-black transition-colors mb-8 font-bold flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Insights
                </Link>

                <div className="flex items-center gap-4 mb-6 text-sm font-bold uppercase tracking-widest">
                    <span className="text-gray-500">{insight.date}</span>
                    <span className="text-lime-600 border border-lime-600 px-3 py-1 rounded-full">{insight.type}</span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-[80px] font-tomatoGrotesk leading-tight tracking-tighter mb-12 text-gray-900">
                    {insight.title}
                </h1>

                <div className="prose prose-lg max-w-none text-gray-700">
                    <p className="leading-relaxed text-xl md:text-2xl border-l-4 border-lime-400 pl-6 mb-8 text-gray-800">
                        {insight.content}
                    </p>
                    <p className="leading-relaxed mb-6">
                        To build experiences that resonate with users, we meticulously harness the full spectrum of our core design colors. Black and white structure the narrative, giving the user's eye a place to rest. Our vibrant accents—specifically <strong>lime-400</strong>, and very occasionally <strong>purple</strong> or <strong>red</strong>—are utilized to guide interaction and evoke emotion.
                    </p>
                    <div className="w-full h-[2px] bg-gradient-to-r from-lime-400 via-lime-200 to-lime-600 my-12" />
                    <h2 className="text-3xl font-bold text-black mb-6">Putting it into practice</h2>
                    <p className="leading-relaxed">
                        When approaching a new problem space, always ground your typography and high-level components with ample contrast...
                        (Detailed case breakdown continues here, focusing on delivering the absolute highest quality user experience utilizing the aforementioned palette.)
                    </p>
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime-400/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/50 rounded-full blur-[100px] pointer-events-none" />
        </motion.div>
    );
};

export default DesignInsightDetail;
