import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";

const BlogDetail = () => {
    useParams();

    // In a real app, you'd fetch data based on ID. 
    // For now, we'll use placeholder content that feels premium.

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="bg-white min-h-screen pt-32 pb-20 font-tomato"
        >
            <div className="max-w-4xl mx-auto px-6">
                {/* Back Link */}
                <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-black transition-colors mb-12 group"
                >
                    <span className="transition-transform group-hover:-translate-x-1">←</span> Back to Blog
                </Link>

                {/* Hero Section */}
                <div>
                    <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
                        <span className="text-black">Category .</span> Gym <span className="ml-2">| 22 Feb 2026</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black text-black uppercase leading-[1] tracking-tighter mb-10">
                        The Ultimate Guide to Full-Body Home Training
                    </h1>

                    <div className="flex items-center gap-4 mb-12 py-6 border-y border-gray-100">
                        <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                            <img src="https://i.pravatar.cc/150?u=mads" alt="Author" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <p className="text-sm font-black text-black uppercase">MADS Agency</p>
                            <p className="text-xs text-gray-400 font-medium">Creative Direction & Strategy</p>
                        </div>
                    </div>
                </div>

                {/* Main Image */}
                <div className="w-full aspect-video rounded-[3rem] overflow-hidden mb-16 shadow-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                        alt="Workout"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Article Content */}
                <div className="prose prose-xl max-w-none">
                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 font-medium italic">
                        "Your body is a temple, but it's also a high-performance machine. In this deep dive, we explore how to optimize your home setup for maximum aesthetic and functional results."
                    </p>

                    <h2 className="text-3xl font-black text-black uppercase tracking-tight mt-16 mb-6">01. THE FOUNDATION</h2>
                    <p className="text-gray-500 leading-relaxed mb-8">
                        Consistent movement is recognized as a safe and effective mode of exercise when the goal is to improve fitness, health, or both. Something as simple as a daily brisk walk can help someone ...
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <div className="bg-[#D9F99D] p-10 rounded-[2rem] my-12 border border-black/5">
                        <h3 className="text-xl font-black text-black uppercase mb-4 tracking-tight">Key Takeaway</h3>
                        <p className="text-black/70 font-medium leading-relaxed">
                            Focus on compound movements that engage multiple muscle groups simultaneously. This not only saves time but also triggers a higher metabolic response.
                        </p>
                    </div>

                    <h2 className="text-3xl font-black text-black uppercase tracking-tight mt-16 mb-6">02. GEAR THAT MATTERS</h2>
                    <p className="text-gray-500 leading-relaxed mb-8">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <blockquote className="border-l-4 border-black pl-8 my-12 font-black text-3xl text-black uppercase tracking-tighter italic">
                        "DESIGN IS NOT JUST WHAT IT LOOKS LIKE. DESIGN IS HOW YOU MOVE THROUGH IT."
                    </blockquote>
                </div>

                {/* Footer of article */}
                <div className="mt-20 pt-10 border-t border-gray-100 flex flex-wrap gap-3">
                    {["Training", "Health", "Design"].map(tag => (
                        <span key={tag} className="px-4 py-2 bg-gray-50 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-500">
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Related CTA */}
                <div className="mt-24 bg-black rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="relative z-10 text-white">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 italic">
                            Want to level up<br />your Brand?
                        </h2>
                        <Link
                            to="/contact"
                            className="inline-block bg-[#bef264] text-black px-10 py-5 rounded-full font-black uppercase text-sm tracking-widest hover:scale-105 transition-transform"
                        >
                            Let's Talk Today
                        </Link>
                    </div>
                    {/* Background decoration */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[1px] border-white/10 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-[1px] border-white/10 rounded-full"></div>
                </div>

            </div>
        </motion.div>
    );
};

export default BlogDetail;
