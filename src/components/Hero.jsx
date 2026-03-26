import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { type: 'spring', damping: 12, stiffness: 100 } },
  };

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap-reverse', alignItems: 'center', gap: '2rem', justifyContent: 'space-between' }}>

        {/* Left Side: Text Content */}
        <motion.div
          style={{ flex: '1 1 300px', maxWidth: '650px' }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)', fontSize: 'clamp(1rem, 2vw, 1.1rem)', marginBottom: '1.5rem', fontWeight: 500 }}>
            Hi, my name is
          </motion.p>

          <motion.h1 variants={itemVariants} style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-2px', textShadow: '0 10px 30px rgba(255, 51, 102, 0.3)' }}>
            Lucky Yadav
          </motion.h1>

          <motion.h2 variants={itemVariants} style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)', color: 'var(--text-secondary)', fontWeight: 600, lineHeight: 1.3, marginBottom: '1.5rem' }}>
            <span className="gradient-text">Software Engineering Enthusiast</span>
          </motion.h2>

          <motion.p variants={itemVariants} style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            Passionate about building highly scalable applications, solving complex software engineering problems, and designing robust, user-centric systems.
          </motion.p>

          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <motion.a whileHover={{ scale: 1.05, boxShadow: '0 5px 20px rgba(255,51,102,0.4)', y: -5 }} whileTap={{ scale: 0.95 }} href="#projects" className="btn btn-primary" style={{ transition: 'none' }}>View Projects</motion.a>
            <motion.a whileHover={{ scale: 1.05, boxShadow: '0 5px 20px rgba(255,255,255,0.1)', y: -5 }} whileTap={{ scale: 0.95 }} href="#contact" className="btn btn-secondary" style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--border-glass)', transition: 'none' }}>
              Contact Me
            </motion.a>
            <motion.a whileHover={{ scale: 1.05, borderColor: 'var(--accent-primary)', color: 'var(--text-primary)', boxShadow: 'inset 0 0 10px rgba(255,51,102,0.2)', y: -5 }} whileTap={{ scale: 0.95 }} href="/resume.pdf" download="resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'none' }}>
              <Download size={18} /> Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side: Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center', position: 'relative', maxWidth: '450px' }}
        >
          {/* Decorative background glow behind the image */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '120%',
            height: '120%',
            background: 'radial-gradient(circle, rgba(255,51,102,0.15) 0%, transparent 70%)',
            filter: 'blur(40px)',
            zIndex: 0,
            pointerEvents: 'none'
          }} />

          {/* Square Image Container with Link */}
          <a href="/profile.jpeg" target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', maxWidth: '400px', zIndex: 1 }}>
            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{
                width: '100%',
                aspectRatio: '1 / 1',
                borderRadius: '2rem',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 25px 50px -12px rgba(255, 51, 102, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                background: 'linear-gradient(145deg, var(--bg-secondary), rgba(255,51,102,0.05))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {/* Inner frame/glow for premium look */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, rgba(255,51,102,0.2), transparent 50%)', zIndex: 1, pointerEvents: 'none' }} />

              {/* REPLACE src WITH YOUR IMAGE */}
              <img
                src="/profile.jpeg"
                alt="Lucky Yadav"
                style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'relative', zIndex: 0 }}
              />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
