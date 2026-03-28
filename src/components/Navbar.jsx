import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Coding Profiles', href: '#coding-profiles' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '80px',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        transition: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        background: scrolled ? 'rgba(5, 5, 5, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(15px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-glass)' : '1px solid transparent',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <a href="#home" style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-1px' }}>
          LY<span style={{ color: 'var(--accent-primary)' }}>.</span>
        </a>

        {/* Desktop Nav */}
        <ul style={{ display: 'flex', gap: '2rem' }} className="desktop-nav">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="nav-link" style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ cursor: 'pointer', zIndex: 1001 }}>
          <div style={{ width: '25px', height: '2px', background: 'var(--text-primary)', margin: '5px 0', transition: '0.3s', transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></div>
          <div style={{ width: '25px', height: '2px', background: 'var(--text-primary)', margin: '5px 0', transition: '0.3s', opacity: mobileMenuOpen ? 0 : 1 }}></div>
          <div style={{ width: '25px', height: '2px', background: 'var(--text-primary)', margin: '5px 0', transition: '0.3s', transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '100%',
              height: '100vh',
              background: 'var(--bg-secondary)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1000,
            }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'center' }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
