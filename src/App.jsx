import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 250);
      cursorY.set(e.clientY - 250);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className="app-container">
      {/* Advanced Spotlight Mouse Tracker */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,51,102,0.15) 0%, rgba(255,153,51,0.05) 40%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 9999,
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          mixBlendMode: 'screen',
        }}
      />

      {/* Background Orbs */}
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />
      <div className="bg-orb orb-3" />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <footer>
        <div className="container" style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--border-glass)', marginTop: '4rem', paddingBottom: '3rem' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>&copy; 2026 Lucky Yadav — Designed with React & Framer Motion.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
