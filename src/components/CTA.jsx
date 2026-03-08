import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";

export default function CTA() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.3, once: true });
    const [initialRun, setInitialRun] = useState(false);

    useEffect(() => {
        if (isInView) {
            setInitialRun(true);
            const timer = setTimeout(() => {
                setInitialRun(false);
            }, 3000); // 3s for one complete rotation
            return () => clearTimeout(timer);
        }
    }, [isInView]);

    return (
        <section ref={ref} className="bg-white  px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-6xl mx-auto">
                {/* Socials & Logo Row */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8  pt-5 pb-5 border-b border-gray-50">
                    <div className="flex items-center gap-8 text-gray-900">
                        <a href="#" className="hover:scale-110 transition-transform">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2a10 10 0 1 0 10 10A10.009 10.009 0 0 0 12 2Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.093 20.093 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM10 3.707a8.82 8.82 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.755 45.755 0 0 0 10 3.707Zm-6.358 6.555a8.57 8.57 0 0 1 4.73-5.981 53.99 53.99 0 0 1 3.168 4.941 32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.641 31.641 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM12 20.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 15.113 13a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="#" className="hover:scale-110 transition-transform">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                        </a>
                        <a href="#" className="hover:scale-110 transition-transform">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd" />
                                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                            </svg>
                        </a>
                        <a href="#" className="hover:scale-110 transition-transform">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.75-.75a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0z" /></svg>
                        </a>
                    </div>

                    <img src="/logo.png" alt="MADS" width="40" height="40" className="h-10 w-auto" />

                    <div className="font-bold text-gray-900 tracking-tight text-lg">
                        STAY AUTHENTIC, STAY STYLISH
                    </div>
                </div>

                {/* Main CTA Part */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="text-center md:text-right space-y-2"
                    >
                        <h4 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Book a 15 minute call
                        </h4>
                        <p className="text-2xl md:text-3xl text-gray-500 font-small">
                            Schedule a call to elevate your brand
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ scaleY: 0 }}
                        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                        transition={{ duration: 1.0, ease: "easeInOut" }}
                        className="hidden md:block h-32 w-px bg-gray-900 origin-center"
                    ></motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-center"
                    >
                        <div className="relative group">
                            <button className="relative group p-[2px] overflow-hidden rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_0_40px_rgba(123,97,255,0.6)] cursor-pointer bg-[#7B61FF]/20">
                                {/* Moving glowing border line */}
                                <div
                                    className={`absolute inset-[-1000%] bg-border-glow animate-border-beam transition-opacity duration-1000 ${initialRun ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                                />

                                <div className="relative flex items-center gap-2 pl-10 pr-6 py-3 bg-white group-hover:bg-transparent rounded-full w-full h-full transition-all duration-500">
                                    {/* Purple gradient layer that fades in on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#000000] to-[#000000] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <span className="relative text-xl font-bold text-gray-900 group-hover:text-white tracking-wide transition-colors duration-500">Book A Call</span>
                                    <div className="relative transition-transform duration-500 group-hover:rotate-45">
                                        <span className="text-2xl leading-none text-gray-900 group-hover:text-white transition-colors duration-500">✦</span>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
