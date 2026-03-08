import React from "react";
import { motion } from "motion/react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <div className="fixed right-10 top-1/2 -translate-y-1/2 z-[100] hidden md:block">
            <div className="flex flex-col items-center select-none">
                {/* Clean Modern Vertical Toggle */}
                <button
                    onClick={toggleTheme}
                    className={`relative w-[52px] h-[105px] rounded-full cursor-pointer transition-all duration-700 ease-in-out overflow-hidden shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1),0_0_10px_rgba(0,0,0,0.05)] border-0 ${isDarkMode ? "bg-gradient-to-b from-[#0f172a] to-[#1e293b]" : "bg-gradient-to-b from-[#7dd3fc] to-[#e0f2fe]"
                        }`}
                >
                    {/* Inner Track Shadow for depth */}
                    <div className="absolute inset-0 shadow-[inset_0_4px_10px_rgba(0,0,0,0.2)] rounded-full pointer-events-none z-10" />

                    {/* Background Layer: Modern Elements */}
                    <div className="absolute inset-0 pointer-events-none">

                        {/* Night State: Sparkling Stars */}
                        <motion.div
                            initial={false}
                            animate={{ opacity: isDarkMode ? 1 : 0, scale: isDarkMode ? 1 : 0.7 }}
                            className="absolute inset-0 p-4"
                        >
                            <svg className="absolute top-4 right-4 text-white opacity-80" width="8" height="8" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" />
                            </svg>
                            <div className="absolute top-12 left-3 w-1 h-1 bg-white rounded-full opacity-60" />
                            <div className="absolute top-8 left-6 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse" />
                            <svg className="absolute top-16 right-3 text-white opacity-40 scale-75" width="8" height="8" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10Z" />
                            </svg>
                        </motion.div>

                        {/* Day State: Soft Fluffy Clouds (at the bottom) */}
                        <div className="absolute bottom-[-5px] left-0 right-0 h-12">
                            <motion.div
                                animate={{ y: isDarkMode ? 15 : 0, opacity: isDarkMode ? 0 : 1 }}
                                transition={{ type: "spring", stiffness: 120 }}
                                className="relative w-full h-full"
                            >
                                {/* Layered gradient clouds for realism */}
                                <div className="absolute bottom-2 left-[-10px] w-14 h-14 bg-white/80 blur-[2px] rounded-full" />
                                <div className="absolute bottom-4 left-6 w-16 h-16 bg-white blur-[3px] rounded-full" />
                                <div className="absolute bottom-1 right-[-5px] w-12 h-12 bg-white/60 blur-[2px] rounded-full" />
                            </motion.div>
                        </div>
                    </div>

                    {/* Sliding Knob: Clean Sun/Moon */}
                    <motion.div
                        animate={{
                            y: isDarkMode ? 58 : 6,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 280,
                            damping: 24
                        }}
                        className={`absolute left-2 w-[36px] h-[36px] rounded-full z-30 flex items-center justify-center shadow-xl ${isDarkMode
                            ? "bg-[#e2e8f0] shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                            : "bg-[#fbbf24] shadow-[0_0_25px_rgba(251,191,36,0.5)]"
                            }`}
                    >
                        {/* Realistic Moon Craters (Soft shading) */}
                        <motion.div
                            animate={{ opacity: isDarkMode ? 1 : 0 }}
                            className="absolute inset-0 rounded-full flex items-center justify-center pointer-events-none"
                        >
                            <div className="absolute top-[15%] left-[15%] w-[25%] h-[25%] bg-black/10 rounded-full blur-[1px]" />
                            <div className="absolute bottom-[20%] right-[15%] w-[35%] h-[35%] bg-black/5 rounded-full blur-[1px]" />
                            <div className="absolute top-[45%] right-[25%] w-[15%] h-[15%] bg-black/10 rounded-full blur-[0.5px]" />
                        </motion.div>
                    </motion.div>
                </button>


            </div>
        </div>
    );
}
