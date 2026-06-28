/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Metrics from './components/Metrics';
import Timeline from './components/Timeline';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about-section', label: 'Philosophy' },
  { id: 'portfolio-section', label: 'Works' },
  { id: 'metrics-section', label: 'Metrics' },
  { id: 'timeline-section', label: 'Process' },
  { id: 'services-section', label: 'Services' },
  { id: 'showcase-section', label: 'Showcase' },
  { id: 'testimonials-section', label: 'Reviews' },
  { id: 'contact-section', label: 'Consult' }
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isSnapping, setIsSnapping] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading sequence to guarantee smooth loading feel
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    const observerOptions = {
      root: null, // relative to viewport
      rootMargin: '-40% 0px -40% 0px', // trigger more reliably when section occupies the center of the screen
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    // Custom Scroll event listener for external triggers
    const handleScrollEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ targetId: string }>;
      if (customEvent.detail && customEvent.detail.targetId) {
        handleDotClick(customEvent.detail.targetId);
      }
    };

    window.addEventListener('scrollToSection', handleScrollEvent as EventListener);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener('scrollToSection', handleScrollEvent as EventListener);
    };
  }, []);

  const handleDotClick = (id: string) => {
    setIsSnapping(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    // Re-enable CSS snaps safely after the smooth scroll completes
    setTimeout(() => {
      setIsSnapping(true);
    }, 1000);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
            }}
            className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center pointer-events-none select-none"
          >
            <div className="flex flex-col items-center gap-6">
              {/* Elegant minimal logo / name */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="flex flex-col items-center gap-3 text-center"
              >
                <span className="text-zinc-300 font-mono text-[9px] tracking-[0.4em] uppercase">
                  D E S I G N
                </span>
                <h1 className="text-zinc-900 font-sans text-2xl sm:text-3xl tracking-[0.3em] font-light uppercase">
                  4 FOLDS
                </h1>
                <p className="text-zinc-400 font-mono text-[10px] tracking-[0.2em] uppercase mt-1">
                  Design Studio
                </p>
              </motion.div>

              {/* Sophisticated fine progress indicator line */}
              <div className="w-36 h-[1px] bg-zinc-100 overflow-hidden relative mt-2">
                <motion.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ 
                    duration: 1.6, 
                    ease: [0.25, 1, 0.5, 1],
                    repeat: 0,
                  }}
                  className="absolute top-0 bottom-0 w-1/2 bg-zinc-800"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main
        id="main-scroll-container"
        className={`h-screen w-full no-scrollbar scroll-smooth relative selection:bg-zinc-900 selection:text-white text-zinc-900 bg-[#faf9f6] ${
          isSnapping ? 'snap-y snap-mandatory' : ''
        } ${isLoading ? 'overflow-hidden' : 'overflow-y-scroll'}`}
      >
        {/* Absolute Decorative Background Orbs across pages scroll */}
        <div className="absolute top-[120vh] -left-[15rem] w-[40rem] h-[40rem] rounded-full bg-cyan-500/4 blur-[130px] pointer-events-none z-0" />
        <div className="absolute top-[280vh] -right-[15rem] w-[50rem] h-[50rem] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none z-0" />
        <div className="absolute top-[450vh] -left-[20rem] w-[45rem] h-[45rem] rounded-full bg-purple-500/4 blur-[140px] pointer-events-none z-0" />
        <div className="absolute top-[650vh] -right-[15rem] w-[45rem] h-[45rem] rounded-full bg-teal-500/4 blur-[140px] pointer-events-none z-0" />

        {/* Structured Sections fitting viewport snaps */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: isLoading ? 0 : 1, scale: isLoading ? 0.98 : 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative z-10 w-full flex flex-col"
        >
        {/* 1. Hero Section Section */}
        <div id="home" className="snap-start snap-always w-full h-screen shrink-0 overflow-hidden relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <Hero />
          </motion.div>
        </div>

        {/* 2. Philosophy & About Sector */}
        <div id="about-section" className="snap-start snap-always w-full h-screen shrink-0 overflow-y-auto no-scrollbar relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <About />
          </motion.div>
        </div>

        {/* 3. Portfolio & Built Commissions */}
        <div id="portfolio-section" className="snap-start snap-always w-full h-screen shrink-0 overflow-y-auto no-scrollbar relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <Portfolio />
          </motion.div>
        </div>

        {/* 4. Global Studio Metrics */}
        <div id="metrics-section" className="snap-start snap-always w-full h-screen shrink-0 overflow-y-auto no-scrollbar flex flex-col justify-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <Metrics />
          </motion.div>
        </div>

        {/* 5. Precise Development Phases */}
        <div id="timeline-section" className="snap-start snap-always w-full h-screen shrink-0 overflow-y-auto no-scrollbar relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <Timeline />
          </motion.div>
        </div>

        {/* 6. Capabilities & Bento Layouts */}
        <div id="services-section" className="snap-start snap-always w-full h-screen shrink-0 overflow-y-auto no-scrollbar relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <Services />
          </motion.div>
        </div>

        {/* 7. Immersive Cinematic Film Showcase */}
        <div id="showcase-section" className="snap-start snap-always w-full h-screen shrink-0 overflow-y-auto no-scrollbar relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            <Showcase />
          </motion.div>
        </div>

        {/* 8. Testimonials & Client Reviews */}
        <div id="testimonials-section" className="snap-start snap-always w-full h-screen shrink-0 overflow-y-auto no-scrollbar flex flex-col justify-center relative justify-items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <Testimonials />
          </motion.div>
        </div>

        {/* 9. Proposal Consultations + Luxury Footer combined inside final unified viewport snap */}
        <div id="contact-section" className="snap-start snap-always w-full h-screen shrink-0 overflow-y-auto no-scrollbar relative flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-grow flex flex-col h-full justify-between"
          >
            <div className="flex-grow flex items-center justify-center">
              <Contact />
            </div>
            <Footer />
          </motion.div>
        </div>
        </motion.div>
      </main>
    </>
  );
}
