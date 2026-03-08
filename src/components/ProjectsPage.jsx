import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import bdImg from "../assets/bd.webp";
import starImg from "../assets/Star 3.webp";
import ProjectDetail from "./ProjectDetail";

const QuickView = ({ project, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = 'unset'; };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[110] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={onClose}
        >
            <button
                onClick={onClose}
                className="absolute right-6 top-6 text-white/60 hover:text-white transition-colors z-[120]"
            >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative max-w-5xl w-full h-auto max-h-[85vh] rounded-xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-white/60">Creative Direction ~ MADS Agency</p>
                </div>
            </motion.div>
        </motion.div>
    );
};

const ProjectsPage = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [quickViewProject, setQuickViewProject] = useState(null);

    const projects = [
        { title: "Project One", image: "https://images.unsplash.com/photo-1524168204150-c72bb4931bb5?q=50&w=800&auto=format&fit=crop", span: "lg:col-span-1 lg:row-span-1" },
        { title: "Project Two", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=50&w=800&auto=format&fit=crop", span: "lg:col-span-1 lg:row-span-1" },
        { title: "Project Three", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=50&w=800&auto=format&fit=crop", span: "lg:col-span-1 lg:row-span-1" },
        { title: "Project Four", image: "https://images.unsplash.com/photo-1560472355-536de3962603?q=50&w=800&auto=format&fit=crop", span: "lg:col-span-1 lg:row-span-1" },
        { title: "Project Five", image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc206e?q=50&w=800&auto=format&fit=crop", span: "lg:col-span-1 lg:row-span-1" },
        { title: "Project Six", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=50&w=800&auto=format&fit=crop", span: "lg:col-span-2 lg:row-span-1" },
        { title: "Project Seven", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=50&w=800&auto=format&fit=crop", span: "lg:col-span-1 lg:row-span-1" },
        { title: "Project Eight", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=50&w=800&auto=format&fit=crop", span: "lg:col-span-1 lg:row-span-1" },
        { title: "Project Nine", image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=50&w=800&auto=format&fit=crop", span: "lg:col-span-1 lg:row-span-1" },
        { title: "Project Ten", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=50&w=800&auto=format&fit=crop", span: "lg:col-span-2 lg:row-span-2" },
        { title: "Project Eleven", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=50&w=800&auto=format&fit=crop", span: "lg:col-span-2 lg:row-span-1" },
        { title: "Project Twelve", image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=50&w=800&auto=format&fit=crop", span: "lg:col-span-4 lg:row-span-1" }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-h-screen font-tomato outline-none"
        >

            {/* Project Full Detail Overlay */}
            <AnimatePresence mode="wait">
                {selectedProject && (
                    <ProjectDetail
                        project={selectedProject}
                        projects={projects}
                        onSelectProject={setSelectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {quickViewProject && (
                    <QuickView
                        project={quickViewProject}
                        onClose={() => setQuickViewProject(null)}
                    />
                )}
            </AnimatePresence>


            <div
                className="fixed inset-0 bg-contain bg-center bg-no-repeat opacity-90 pointer-events-none -z-20"
                style={{ backgroundImage: `url(${starImg})` }}
            />



            {/* ================= HERO ================= */}

            <section className="min-h-screen pt-24 px-4 flex items-center justify-center relative z-10">

                <div className="max-w-6xl text-center px-6 py-10">

                    <p className="text-gray-900 tracking-normal text-sm md:text-md font-semibold mb-4 uppercase">
                        Designs that Deliver Results
                    </p>

                    <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-10 max-w-6xl mx-auto">
                        Every Project reflects Strategy, Storytelling{" "}
                        <br className="hidden md:block" />
                        & scroll stopping Visuals
                    </h1>

                    <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-medium opacity-80">
                        People expect more of brands than ever before. They expect brands to go beyond.
                        We innovate and create at the intersections to bring forth the best possible
                        growth solutions for our clients. Ogilvy inspires brands and people
                        to impact the world
                    </p>

                </div>
            </section>

            <section className="relative z-20 bg-white px-4 sm:px-8 lg:px-16 pb-32 pt-10 max-w-[1500px] mx-auto">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px] sm:auto-rows-[300px]">
                    {projects.map((project, index) => {
                        const themes = [
                            { shadow: "hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]", overlay: "bg-purple-900/30", grad: "from-purple-900/95 via-purple-900/60" },
                            { shadow: "hover:shadow-[0_0_40px_rgba(239,68,68,0.5)]", overlay: "bg-red-900/30", grad: "from-red-900/95 via-red-900/60" },
                            { shadow: "hover:shadow-[0_0_40px_rgba(163,230,53,0.4)]", overlay: "bg-lime-950/40", grad: "from-lime-950/95 via-lime-900/70" },
                            { shadow: "hover:shadow-[0_0_40px_rgba(0,0,0,0.6)]", overlay: "bg-black/40", grad: "from-black/95 via-black/60" }
                        ];
                        const theme = themes[index % 4];

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 80, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, delay: (index % 4) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                onClick={() => setSelectedProject(project)}
                                className={`group relative bg-gray-200 rounded-[1.5rem] overflow-hidden ${project.span}
                            transition-all duration-500 cursor-pointer shadow-sm ${theme.shadow}`}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Persistent Top Info */}
                                <div className="absolute top-6 left-6 z-10 text-white drop-shadow-lg">
                                    <h3 className="text-xl md:text-2xl font-bold leading-tight drop-shadow-md">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm md:text-base opacity-90 font-medium">
                                        for MADS Agency
                                    </p>
                                </div>

                                {/* Hover Overlay with Bottom Buttons */}
                                <div className={`absolute inset-0 ${theme.overlay} opacity-0 group-hover:opacity-100 transition-all duration-500`}>
                                    <div className={`absolute inset-0 bg-gradient-to-t ${theme.grad} to-transparent flex flex-col justify-end p-8`}>
                                        <div className="flex flex-wrap items-center gap-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            {/* Quick View */}
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setQuickViewProject(project);
                                                }}
                                                className="flex items-center gap-2 text-sm md:text-base font-semibold hover:opacity-80 transition-opacity"
                                            >
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                                </svg>
                                                Quick View
                                            </button>

                                            {/* Full Project */}
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedProject(project);
                                                }}
                                                className="flex items-center gap-2 text-sm md:text-base font-semibold hover:opacity-80 transition-opacity"
                                            >
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a4 4 0 0 0-4-4H2z"></path>
                                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a4 4 0 0 1 4-4h6z"></path>
                                                </svg>
                                                Full Project
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </section>

        </motion.div>
    );
};

export default ProjectsPage;
