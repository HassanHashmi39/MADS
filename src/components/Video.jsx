import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function Video() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.6 });

    return (
        <section ref={ref} className="h-screen w-full mx-auto bg-gray-900 relative flex items-center justify-center overflow-hidden shadow-2xl">
            <div
                className="relative w-full h-full flex items-center justify-center"
                key={isInView ? "playing" : "reset"}
            >
                {/* 3D Scene Container */}
                <div className="w-full h-full flex items-center justify-center pointer-events-none" style={{ perspective: '2000px' }}>

                    {/* Background Glow */}
                    <div className="absolute w-[600px] h-[600px] bg-[#7B61FF]/20 rounded-full blur-[120px] animate-pulse" />

                    {/* 3D Elements Wrapper */}
                    <motion.div
                        initial={{ rotateY: -45, rotateX: 20, scale: 0.8, opacity: 0 }}
                        animate={isInView ? { rotateY: 315, rotateX: -20, scale: 1, opacity: 1 } : { rotateY: -45, rotateX: 20, scale: 0.8, opacity: 0 }}
                        transition={{
                            duration: 3,
                            ease: [0.16, 1, 0.3, 1],
                            opacity: { duration: 1 }
                        }}
                        className="relative flex items-center justify-center"
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        {/* Central Glass Card */}
                        <motion.div
                            className="w-[300px] h-[400px] md:w-[400px] md:h-[500px] bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] shadow-2xl relative"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center" style={{ transformStyle: 'preserve-3d' }}>
                                <motion.div
                                    initial={{ translateZ: 0 }}
                                    animate={isInView ? { translateZ: 100 } : { translateZ: 0 }}
                                    transition={{ duration: 1, delay: 1 }}
                                    className="mb-8"
                                >
                                    <img src="/logo.png" alt="MADS" className="w-24 h-24 object-contain brightness-0 invert opacity-80" />
                                </motion.div>

                                <motion.h2
                                    initial={{ translateZ: 0, opacity: 0 }}
                                    animate={isInView ? { translateZ: 80, opacity: 1 } : { translateZ: 0, opacity: 0 }}
                                    transition={{ duration: 1, delay: 1.2 }}
                                    className="text-6xl font-bold text-white mb-4 tracking-tighter"
                                >
                                    MADS
                                </motion.h2>

                                <motion.p
                                    initial={{ translateZ: 0, opacity: 0 }}
                                    animate={isInView ? { translateZ: 50, opacity: 0.6 } : { translateZ: 0, opacity: 0 }}
                                    transition={{ duration: 1, delay: 1.4 }}
                                    className="text-xl text-white/60 font-medium"
                                >
                                    Crafting 3D Digital <br /> Excellence
                                </motion.p>
                            </div>
                        </motion.div>

                        {/* Floating Orbs around the card */}
                        {[...Array(6)].map((_, i) => {
                            const angle = i * 60;
                            const x = Math.cos(angle * Math.PI / 180) * 350;
                            const y = Math.sin(angle * Math.PI / 180) * 350;
                            const z = i % 2 === 0 ? 150 : -150;

                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0, x: 0, y: 0, z: 0 }}
                                    animate={isInView ? {
                                        opacity: 1,
                                        scale: 1,
                                        x: x,
                                        y: y,
                                        z: z
                                    } : { opacity: 0, scale: 0 }}
                                    transition={{
                                        duration: 2,
                                        delay: 1.5 + (i * 0.1),
                                        ease: "easeOut"
                                    }}
                                    className="absolute w-4 h-4 rounded-full bg-white/30 backdrop-blur-md border border-white/20"
                                />
                            );
                        })}

                        {/* Wireframe Grid Floor (Perspective) */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 0.15 } : { opacity: 0 }}
                            transition={{ duration: 2, delay: 0.5 }}
                            className="absolute w-[2000px] h-[2000px]"
                            style={{
                                backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
                                backgroundSize: '100px 100px',
                                transform: 'rotateX(90deg) translateZ(-400px)',
                                transformOrigin: 'center center'
                            }}
                        />
                    </motion.div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-24 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 2.5 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <div className="w-px h-16 bg-gradient-to-b from-transparent to-white/50" />
                        <span className="text-white/40 text-sm font-medium tracking-[0.3em] uppercase">Scroll to Discover</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
