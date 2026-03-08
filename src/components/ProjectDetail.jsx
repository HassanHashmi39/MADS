import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const ProjectDetail = ({ project, projects, onSelectProject, onClose }) => {
    const [showCredits, setShowCredits] = useState(false);
    // Find next project
    const currentIndex = projects.findIndex(p => p.title === project.title);
    const nextProject = projects[(currentIndex + 1) % projects.length];

    // Prevent background scroll when open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = 'unset'; };
    }, []);

    return (
        <motion.div
            key={project.title}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-white overflow-y-auto"
        >
            {/* Project Header */}
            <div className="max-w-7xl mx-auto px-6 py-10 relative">
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">{project.title}</h2>
                    <p className="text-sm text-gray-500 font-medium">Commercial ~ {project.title} for MADS</p>

                    <button
                        onClick={onClose}
                        className="absolute right-6 top-10 text-gray-400 hover:text-black transition-colors"
                        aria-label="Close project"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    <div className="w-full h-px bg-gray-200 mt-10 mb-20" />
                </div>

                {/* Left Sidebar Label (Functional - Back to Projects) */}
                <div
                    onClick={onClose}
                    className="hidden lg:block fixed left-8 top-1/2 -rotate-90 origin-left cursor-pointer group/sidebar z-50"
                >
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-bold tracking-[0.4em] uppercase text-gray-400 group-hover/sidebar:text-black transition-all duration-300 border-r border-gray-200 pr-6">
                            Work
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-black opacity-0 -translate-x-4 group-hover/sidebar:opacity-100 group-hover/sidebar:translate-x-0 transition-all duration-500">
                            ← Back to Gallery
                        </span>
                    </div>
                </div>

                {/* Project Intro Content */}
                <div className="max-w-2xl mx-auto text-center space-y-12 mb-20">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                        The Strategic Art of Building <br /> {project.title}
                    </h1>

                    <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                        <p>
                            Working closely with our friends at the {project.title} team, we designed and directed
                            an impactful growth campaign. This collaboration allowed us to explore new digital frontiers
                            and set new benchmarks in brand storytelling.
                        </p>
                        <p>
                            Breathing new life into their digital presence, the strategy goes deep into the consumer's
                            mind, taking the audience on a journey of discovery and connection. Every visual and
                            every pixel serves a purpose.
                        </p>
                    </div>
                </div>

                {/* Hero Showcase Image */}
                <div className="relative group mb-8">
                    <img
                        src={project.image}
                        alt="Hero view"
                        loading="lazy"
                        className="w-full h-auto aspect-video object-cover rounded-sm shadow-sm"
                    />
                    {/* Social Floating Icons Style */}
                    <div className="absolute right-4 top-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-10 h-10 bg-black/80 rounded flex items-center justify-center text-white cursor-pointer hover:bg-black transition-colors">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                        </div>
                        <div className="w-10 h-10 bg-black/80 rounded flex items-center justify-center text-white cursor-pointer hover:bg-black transition-colors">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        </div>
                        <div className="w-10 h-10 bg-black/80 rounded flex items-center justify-center text-white cursor-pointer hover:bg-black transition-colors">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                        </div>
                    </div>
                </div>

                {/* Supporting Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    <img
                        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=50&w=800"
                        alt="Detail 1"
                        loading="lazy"
                        className="w-full h-full object-cover rounded-sm"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=50&w=800"
                        alt="Detail 2"
                        loading="lazy"
                        className="w-full h-full object-cover rounded-sm"
                    />
                </div>

                {/* Credits Toggle Section */}
                <div className="border-t border-gray-100 mt-20">
                    <div className="flex items-center justify-between py-10">
                        <button
                            onClick={() => setShowCredits(!showCredits)}
                            className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-gray-900 hover:opacity-60 transition-opacity"
                        >
                            <div className="flex flex-col gap-1 w-4">
                                <div className="h-[2px] w-full bg-current" />
                                <div className="h-[2px] w-3/4 bg-current" />
                                <div className="h-[2px] w-full bg-current" />
                            </div>
                            {showCredits ? "Close Credits" : "View Credits"}
                        </button>

                        <div className="flex items-center gap-6 text-gray-400">
                            <button className="hover:text-black transition-colors">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </button>
                            <button className="hover:text-black transition-colors">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                            </button>
                        </div>
                    </div>

                    <AnimatePresence>
                        {showCredits && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="py-20 space-y-12">
                                    <h2 className="text-5xl font-bold text-gray-900">Credits</h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                                        <div className="space-y-2">
                                            <p className="text-sm font-bold text-gray-900">Client:</p>
                                            <p className="text-gray-500 font-medium">{project.title} for MADS</p>
                                        </div>

                                        <div className="space-y-2">
                                            <p className="text-sm font-bold text-gray-900">Direction, Design & Animation:</p>
                                            <p className="text-gray-500 font-medium">MADS Studio Team</p>
                                        </div>

                                        <div className="space-y-4">
                                            <p className="text-sm font-bold text-gray-900">MADS Team:</p>
                                            <div className="text-gray-500 space-y-1 font-medium">
                                                <p>Ahmed Raza</p>
                                                <p>Sami Khan</p>
                                                <p>Uzair Ahmed</p>
                                                <p>Hassan Ali</p>
                                                <p>Zainab Khalid</p>
                                                <p>Bilal Mansoor</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Footer Quote Area */}
                <div className="py-20 border-t border-gray-100 text-center">
                    <p className="text-xl font-medium text-gray-500 mb-8">Next Project</p>
                    <h2
                        onClick={() => onSelectProject(nextProject)}
                        className="text-4xl font-bold text-gray-900 cursor-pointer hover:text-black transition-colors"
                    >
                        Discover {nextProject.title} →
                    </h2>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDetail;
