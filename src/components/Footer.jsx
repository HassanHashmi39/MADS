import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("idle"); // idle | loading | success

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || status !== "idle") return;

        setStatus("loading");

        // Simulate loading for 1 second
        setTimeout(() => {
            setStatus("success");
            // Optional: reset to idle after 3 seconds
            setTimeout(() => {
                setStatus("idle");
                setEmail("");
            }, 3000);
        }, 1500);
    };

    return (
        <footer className="bg-white text-black">
            <div className="max-w-7xl mx-auto px-8 lg:px-16">

                {/* ── Top: 4 link columns ── */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 py-8 border-b border-gray-200">

                    {/* Company */}
                    <div>
                        <h4 className="text-base font-bold mb-6 text-gray-900">Company</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li>
                                <Link to="/about" className="hover:text-gray-900 transition-colors duration-200 text-lime-500 font-medium">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/team" className="hover:text-gray-900 transition-colors duration-200">
                                    Our Team
                                </Link>
                            </li>
                            <li>
                                <Link to="/careers" className="hover:text-gray-900 transition-colors duration-200">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-gray-900 transition-colors duration-200">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-base font-bold mb-6 text-gray-900">Services</h4>
                        <ul className="space-y-4 text-sm text-gray-500">

                            <li>
                                <Link to="/services" className="hover:text-gray-900 transition-colors duration-200">
                                    Branding &amp; Strategy
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="hover:text-gray-900 transition-colors duration-200">
                                    Digital Marketing
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="hover:text-gray-900 transition-colors duration-200">
                                    App &amp; Web Development
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="hover:text-gray-900 transition-colors duration-200">
                                    Copy Writing
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-base font-bold mb-6 text-gray-900">Resources</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li>
                                <Link to="/blog" className="hover:text-gray-900 transition-colors duration-200">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link to="/case-studies" className="hover:text-gray-900 transition-colors duration-200">
                                    Case Studies
                                </Link>
                            </li>
                            <li>
                                <Link to="/design-insights" className="hover:text-gray-900 transition-colors duration-200">
                                    Design Insights
                                </Link>
                            </li>
                            <li>
                                <Link to="/tutorials" className="hover:text-gray-900 transition-colors duration-200">
                                    Tutorials
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-base font-bold mb-6 text-gray-900">Support</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li>
                                <Link to="/faqs" className="hover:text-gray-900 transition-colors duration-200">
                                    FAQs
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy-policy" className="hover:text-gray-900 transition-colors duration-200">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms-conditions" className="hover:text-gray-900 transition-colors duration-200">
                                    Terms &amp; Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* ── Bottom: Newsletter row ── */}
                <div className="py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

                    {/* Left: heading */}
                    <p className="text-xl font-bold text-gray-900 whitespace-nowrap">
                        Subscribe to our newsletter
                    </p>

                    {/* Right: input + button + note */}
                    <div className="flex flex-col items-end gap-2 w-full md:w-auto">
                        <form
                            className="flex items-center gap-0 w-full md:w-auto"
                            onSubmit={handleSubmit}
                        >
                            {/* Email input */}
                            <div className="flex items-center bg-gray-100 rounded-l-lg px-4 py-3 gap-2 flex-1 md:w-72 border border-gray-200 border-r-0">
                                {/* envelope icon */}
                                <svg
                                    className="w-4 h-4 text-gray-400 flex-shrink-0"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x="2" y="4" width="20" height="16" rx="2" />
                                    <path d="M22 7l-10 7L2 7" />
                                </svg>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="enter your email"
                                    className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none w-full"
                                    disabled={status !== "idle"}
                                />
                            </div>

                            {/* Subscribe button */}
                            <motion.button
                                type="submit"
                                disabled={status !== "idle"}
                                whileTap={{ scale: 0.95 }}
                                animate={{
                                    width: status === "idle" ? 140 : 46,
                                    borderRadius: "8px",
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 30
                                }}
                                className="relative flex items-center justify-center h-[46px] ml-2 bg-black text-white text-sm font-bold whitespace-nowrap overflow-hidden"
                            >
                                <AnimatePresence mode="wait">
                                    {status === "idle" && (
                                        <motion.span
                                            key="idle"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            Subscribe
                                        </motion.span>
                                    )}
                                    {status === "loading" && (
                                        <motion.div
                                            key="loading"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="flex items-center justify-center"
                                        >
                                            <svg className="animate-spin h-5 w-5 text-white/50" viewBox="0 0 24 24" fill="none">
                                                <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-100" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                            </svg>
                                        </motion.div>
                                    )}
                                    {status === "success" && (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="flex items-center justify-center"
                                        >
                                            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                        </form>

                        {/* Unsubscribe note */}
                        <p className="text-xs text-gray-400">
                            You will be able to unsubscribe at any time.
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    );
}

