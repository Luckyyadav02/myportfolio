import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Hero = () => {
  // 🔥 Roles
  const roles = [
    "Software Engineering Enthusiast",
    "Backend Developer",
    "Data Analyst"
  ];

  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      // When word is fully typed
      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      // When word is deleted
      if (isDeleting && text === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex, roles]);

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
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', damping: 12, stiffness: 100 },
    },
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexWrap: 'wrap-reverse',
          alignItems: 'center',
          gap: '2rem',
          justifyContent: 'space-between',
        }}
      >

        {/* Left Side */}
        <motion.div
          style={{ flex: '1 1 300px', maxWidth: '650px' }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
            Hi, my name is
          </motion.p>

          <motion.h1 variants={itemVariants} style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', fontWeight: 800 }}>
            Lucky Yadav
          </motion.h1>

          {/* 🔥 Typing Effect */}
          <motion.h2
            variants={itemVariants}
            style={{
              fontSize: 'clamp(1.2rem, 3vw, 2rem)',
              color: 'var(--text-secondary)',
              marginBottom: '1.5rem',
              minHeight: '2.5rem',
            }}
          >
            <span className="gradient-text">
              {text}
              <span style={{ borderRight: '2px solid', marginLeft: '5px' }}></span>
            </span>
          </motion.h2>

          <motion.p variants={itemVariants} style={{ marginBottom: '2.5rem' }}>
            Passionate about building scalable applications and solving real-world problems.
          </motion.p>

          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <motion.a href="#projects" className="btn btn-primary">View Projects</motion.a>

            <motion.a href="#contact" className="btn btn-secondary">
              Contact Me
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Download size={18} /> Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}
        >
          <img
            src="/profile.jpeg"
            alt="profile"
            style={{ width: '300px', borderRadius: '20px' }}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;