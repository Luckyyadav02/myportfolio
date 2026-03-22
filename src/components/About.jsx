import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Brain } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section-padding">
            <div className="container">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    <span>01.</span> About Me
                </motion.h2>
                
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="about-content"
                    style={{ maxWidth: '800px' }}
                >
                    <div className="about-text glass-card" style={{ padding: '3rem', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                        <p style={{ marginBottom: '1.5rem' }}><strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Lucky Yadav</strong> is a Computer Science Engineering student at Lovely Professional University with a strong interest in Software Engineering, Full-Stack Development, and building scalable system architectures.</p>
                        <p style={{ marginBottom: '1.5rem' }}>He has hands-on experience working with modern Web Technologies, Backend Frameworks, and Database Optimization. Through intense project-building, he has developed deep, practical skills in software lifecycle management and clean code principles.</p>
                        <p style={{ marginBottom: '1.5rem' }}>Lucky is passionate about continuous learning and proactively explores emerging technologies to develop applications that run faster, scale better, and provide exceptional user experiences.</p>
                        <p>His goal is to become an elite Software Engineer and contribute to building the infrastructure and applications of tomorrow.</p>
                        
                        <div className="about-highlights" style={{ display: 'flex', gap: '2rem', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border-glass)', flexWrap: 'wrap' }}>
                            <motion.div whileHover={{ y: -5, color: 'var(--accent-secondary)' }} transition={{ type: "spring", stiffness: 300 }} className="highlight-item" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                                <GraduationCap color="var(--accent-primary)" size={24} />
                                <span>CSE Student at LPU</span>
                            </motion.div>
                            <motion.div whileHover={{ y: -5, color: 'var(--accent-secondary)' }} transition={{ type: "spring", stiffness: 300 }} className="highlight-item" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                                <MapPin color="var(--accent-primary)" size={24} />
                                <span>Faridabad, India</span>
                            </motion.div>
                            <motion.div whileHover={{ y: -5, color: 'var(--accent-secondary)' }} transition={{ type: "spring", stiffness: 300 }} className="highlight-item" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                                <Brain color="var(--accent-primary)" size={24} />
                                <span>Software Engineering Focused</span>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
