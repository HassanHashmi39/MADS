import React, { Suspense, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Video from "./components/Video";

// Lazy load non-critical components
const TrustBar = React.lazy(() => import("./components/TrustBar"));
const Gallery = React.lazy(() => import("./components/gallery"));
const Services = React.lazy(() => import("./components/Services"));
const WhyMads = React.lazy(() => import("./components/WhyMads"));
const Process = React.lazy(() => import("./components/Process"));
const Pricing = React.lazy(() => import("./components/Pricing"));
const Projects = React.lazy(() => import("./components/Projects"));
const TestimonialCircle = React.lazy(() => import("./components/TestimonialCircle"));
const CTA = React.lazy(() => import("./components/CTA"));
const Footer = React.lazy(() => import("./components/Footer"));
const ProjectsPage = React.lazy(() => import("./components/ProjectsPage"));
const ServicesPage = React.lazy(() => import("./components/ServicesPage"));
const BlogPage = React.lazy(() => import("./components/BlogPage"));
const BlogDetail = React.lazy(() => import("./components/BlogDetail"));
const FaqsPage = React.lazy(() => import("./components/FaqsPage"));
const PrivacyPolicy = React.lazy(() => import("./components/PrivacyPolicy"));
const TermsAndConditions = React.lazy(() => import("./components/TermsAndConditions"));
const ContactPage = React.lazy(() => import("./components/ContactPage"));
const TeamPage = React.lazy(() => import("./components/TeamPage"));
const CaseStudies = React.lazy(() => import("./components/CaseStudies"));
const DesignInsights = React.lazy(() => import("./components/DesignInsights"));
const Tutorials = React.lazy(() => import("./components/Tutorials"));
const Careers = React.lazy(() => import("./components/Careers"));

const CaseStudyDetail = React.lazy(() => import("./components/CaseStudyDetail"));
const DesignInsightDetail = React.lazy(() => import("./components/DesignInsightDetail"));
const TutorialDetail = React.lazy(() => import("./components/TutorialDetail"));
const JobDetail = React.lazy(() => import("./components/JobDetail"));

import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import { ScrollContext } from "./context/ScrollContext";

// ─── ScrollToTop on route change ─────────────────────────────────────────────
function ScrollToTop({ containerRef }) {
    const { pathname } = useLocation();

    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
    }, []);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        el.style.overflowY = "scroll"; // ensure unlocked on route change
        el.scrollTop = 0;
        const t1 = setTimeout(() => { if (el) el.scrollTop = 0; }, 50);
        const t2 = setTimeout(() => { if (el) el.scrollTop = 0; }, 150);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, [pathname, containerRef]);

    return null;
}

// ─── Scroll Gates Hook ────────────────────────────────────────────────────────
// Scroll freely → stops ONCE at TrustBar top, ONCE at Services top
// User scrolls again → continues freely
function useScrollGates(containerRef, enabled) {
    const gatesPassed = useRef({ trustbar: false, services: false });
    const frozen = useRef(false);
    const frozenAt = useRef(0);

    useEffect(() => {
        if (!enabled) return;
        const container = containerRef.current;
        if (!container) return;

        // Reset gates when hook mounts (e.g., on navigation back to home)
        gatesPassed.current = { trustbar: false, services: false };
        frozen.current = false;

        // Get scrollTop position of a section's top edge
        const getSectionScrollTop = (name) => {
            const el = container.querySelector(`[data-gate="${name}"]`);
            if (!el) return null;
            const cRect = container.getBoundingClientRect();
            const eRect = el.getBoundingClientRect();
            return Math.round(container.scrollTop + eRect.top - cRect.top);
        };

        // Lock: set overflow hidden so no further scrolling possible
        const freeze = (atScrollTop) => {
            container.scrollTop = atScrollTop;
            frozenAt.current = atScrollTop;
            frozen.current = true;
            container.style.overflowY = "hidden";
        };

        // Unlock: restore normal scrolling
        const unfreeze = () => {
            if (!frozen.current) return;
            frozen.current = false;
            container.style.overflowY = "scroll";
        };

        // Check gates on every scroll event
        const onScroll = () => {
            if (frozen.current) return;

            const scrollTop = container.scrollTop;

            // Gate 1: TrustBar
            if (!gatesPassed.current.trustbar) {
                const pos = getSectionScrollTop("trustbar");
                if (pos !== null && scrollTop >= pos - 2) {
                    gatesPassed.current.trustbar = true;
                    freeze(pos);
                    return;
                }
            }

            // Gate 2: Services
            if (!gatesPassed.current.services) {
                const pos = getSectionScrollTop("services");
                if (pos !== null && scrollTop >= pos - 2) {
                    gatesPassed.current.services = true;
                    freeze(pos);
                    return;
                }
            }
        };

        // Any user scroll intent (wheel/touch) unfreezes the gate
        const onWheel = () => { unfreeze(); };
        const onTouchStart = () => { unfreeze(); };

        container.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("wheel", onWheel, { passive: true });
        window.addEventListener("touchstart", onTouchStart, { passive: true });

        return () => {
            container.removeEventListener("scroll", onScroll);
            window.removeEventListener("wheel", onWheel);
            window.removeEventListener("touchstart", onTouchStart);
            // Ensure unlocked on unmount
            container.style.overflowY = "scroll";
        };
    }, [enabled, containerRef]);
}

// ─── Inner App ────────────────────────────────────────────────────────────────
function InnerApp({ mainRef }) {
    const location = useLocation();
    const isHome = location.pathname === "/";

    useScrollGates(mainRef, isHome);

    return (
        <div className="min-h-screen relative overflow-hidden bg-white">
            <ThemeToggle />
            <Navbar />
            <main
                ref={mainRef}
                className="overflow-y-scroll h-screen"
                style={{ overscrollBehavior: "none" }}
            >
                <AnimatePresence mode="wait">
                    <Suspense fallback={
                        <div className="w-full min-h-screen flex items-center justify-center">
                            <motion.img
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.2 }}
                                exit={{ opacity: 0 }}
                                src="/logo.png"
                                alt=""
                                className="w-16 h-16 object-contain invert"
                            />
                        </div>
                    }>
                        <Routes location={location} key={location.pathname}>
                            <Route path="/" element={
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <section className="relative w-full">
                                        <Hero />
                                    </section>

                                    <section className="relative w-full h-screen">
                                        <Video />
                                    </section>

                                    {/* Gate 1: scroll stops HERE first */}
                                    <section data-gate="trustbar" className="relative w-full bg-white text-black">
                                        <TrustBar />
                                    </section>

                                    {/* Gate 2: scroll stops HERE second */}
                                    <section data-gate="services" className="relative w-full z-10">
                                        <div className="relative z-10 bg-white">
                                            <Services />
                                        </div>
                                    </section>

                                    <section className="relative h-[200vh] z-20">
                                        <div className="sticky top-0 h-screen overflow-hidden bg-white">
                                            <Gallery />
                                        </div>
                                    </section>

                                    <section className="relative h-[200vh] z-40 -mt-[100vh]">
                                        <div className="sticky top-0 h-screen overflow-hidden bg-white">
                                            <Process />
                                        </div>
                                    </section>

                                    <section className="relative h-[200vh] z-30 -mt-[100vh]">
                                        <div className="sticky top-0 h-screen overflow-hidden bg-white">
                                            <WhyMads />
                                        </div>
                                    </section>

                                    <section className="relative z-50 bg-white pt-20">
                                        <Projects />
                                        <Pricing />
                                        <TestimonialCircle />
                                    </section>
                                </motion.div>
                            } />
                            <Route path="/services" element={<ServicesPage />} />
                            <Route path="/projects" element={<ProjectsPage />} />
                            <Route path="/blog" element={<BlogPage />} />
                            <Route path="/blog/:id" element={<BlogDetail />} />
                            <Route path="/faqs" element={<FaqsPage />} />
                            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                            <Route path="/terms-conditions" element={<TermsAndConditions />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/team" element={<TeamPage />} />
                            <Route path="/case-studies" element={<CaseStudies />} />
                            <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
                            <Route path="/design-insights" element={<DesignInsights />} />
                            <Route path="/design-insights/:id" element={<DesignInsightDetail />} />
                            <Route path="/tutorials" element={<Tutorials />} />
                            <Route path="/tutorials/:id" element={<TutorialDetail />} />
                            <Route path="/careers" element={<Careers />} />
                            <Route path="/careers/:id" element={<JobDetail />} />
                        </Routes>
                    </Suspense>
                </AnimatePresence>

                <Suspense fallback={<div className="h-40 bg-white" />}>
                    <section className="relative z-50 bg-white">
                        <CTA />
                        <Footer />
                    </section>
                </Suspense>
            </main>
        </div >
    );
}

// ─── Root App ─────────────────────────────────────────────────────────────────
function App() {
    const mainRef = useRef(null);

    return (
        <ThemeProvider>
            <ScrollContext.Provider value={mainRef}>
                <Router>
                    <ScrollToTop containerRef={mainRef} />
                    <InnerApp mainRef={mainRef} />
                </Router>
            </ScrollContext.Provider>
        </ThemeProvider>
    );
}

export default App;
