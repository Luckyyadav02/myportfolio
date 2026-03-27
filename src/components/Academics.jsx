import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award, Calendar, MapPin } from 'lucide-react';

const Academics = () => {
    const educationData = [
        {
            degree: "Bachelor of Technology",
            major: "Computer Science and Engineering",
            institution: "Lovely Professional University",
            location: "Phagwara, Punjab",
            duration: "Aug ’2023 - Present",
            grade: "CGPA: 7.51",
            icon: <GraduationCap size={28} color="#fff" />,
            color: "var(--accent-primary)",
            glow: "rgba(255, 51, 102, 0.4)"
        },
        {
            degree: "Intermediate",
            major: "Class 12th (Senior Secondary)",
            institution: "Modern BP Public School",
            location: "Faridabad, Haryana",
            duration: "Apr ’2020 – Mar ’2022",
            grade: "Percentage: 81.4%",
            icon: <BookOpen size={28} color="#fff" />,
            color: "var(--accent-secondary, #FF9933)", // Fallback if variable doesn't exist
            glow: "rgba(255, 153, 51, 0.4)"
        },
        {
            degree: "Matriculation",
            major: "Class 10th (Secondary)",
            institution: "Modern BP Public School",
            location: "Faridabad, Haryana",
            duration: "Apr ’2019 – Mar ’2020",
            grade: "Percentage: 79.4%",
            icon: <Award size={28} color="#fff" />,
            color: "#00F0FF", // Neon cyan for variety
            glow: "rgba(0, 240, 255, 0.4)"
        }
    ];

    return (
        <section id="academics" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
            {/* Background glowing orbs for extra aesthetic */}
            <div style={{ position: 'absolute', top: '20%', left: '-10%', width: '300px', height: '300px', background: 'var(--accent-primary)', filter: 'blur(150px)', opacity: 0.1, zIndex: -1, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '10%', right: '-10%', width: '300px', height: '300px', background: 'var(--accent-secondary, #FF9933)', filter: 'blur(150px)', opacity: 0.1, zIndex: -1, pointerEvents: 'none' }} />

            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 className="section-title" style={{ justifyContent: 'center' }}>
                        <span style={{ color: 'var(--accent-primary)', marginRight: '10px' }}>🎓</span> 
                        Academic Journey
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
                        My educational background, shaping my foundation and passion for computer science.
                    </p>
                </motion.div>

                <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
                    {/* Glowing Timeline Line */}
                    <div className="timeline-line hidden-mobile" style={{
                        position: 'absolute',
                        left: '39px',
                        top: '0',
                        bottom: '0',
                        width: '3px',
                        background: 'linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary, #FF9933), #00F0FF)',
                        opacity: 0.2,
                        zIndex: 0,
                        borderRadius: '5px'
                    }}></div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        {educationData.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 80 }}
                                style={{
                                    display: 'flex',
                                    gap: '2.5rem',
                                    position: 'relative',
                                    zIndex: 1
                                }}
                            >
                                {/* Timeline Dot & Icon */}
                                <div className="timeline-icon-container" style={{
                                    width: '80px',
                                    flexShrink: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    position: 'relative',
                                    zIndex: 2
                                }}>
                                    <motion.div 
                                        whileHover={{ scale: 1.15, rotate: 10 }}
                                        transition={{ duration: 0.3, type: "spring" }}
                                        style={{
                                            width: '65px',
                                            height: '65px',
                                            borderRadius: '50%',
                                            background: `linear-gradient(135deg, ${edu.color}, #1a1a2e)`,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            boxShadow: `0 0 25px ${edu.glow}`,
                                            border: '2px solid rgba(255,255,255,0.15)',
                                            position: 'relative',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {edu.icon}
                                    </motion.div>
                                </div>

                                {/* Content Card */}
                                <motion.div
                                    whileHover={{ y: -8, boxShadow: `0 15px 40px ${edu.glow}` }}
                                    transition={{ duration: 0.3 }}
                                    className="glass-card"
                                    style={{
                                        flex: 1,
                                        padding: '2.5rem',
                                        borderRadius: '24px',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        borderTop: `1px solid ${edu.color}60`,
                                        background: 'linear-gradient(145deg, rgba(20,20,20,0.8) 0%, rgba(10,10,10,0.95) 100%)',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                >
                                    {/* Subtle glowing orb inside the top right corner of the card */}
                                    <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '180px', height: '180px', background: edu.color, filter: 'blur(90px)', opacity: 0.15, pointerEvents: 'none' }} />

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
                                        {/* Left Side: Details */}
                                        <div style={{ flex: '1 1 min-content' }}>
                                            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.6rem', fontWeight: '700', letterSpacing: '-0.5px', margin: '0 0 0.2rem 0' }}>
                                                {edu.degree}
                                            </h3>
                                            <p style={{ color: edu.color, fontSize: '1.15rem', fontWeight: '600', margin: '0 0 1.2rem 0', letterSpacing: '0.5px' }}>
                                                {edu.major}
                                            </p>
                                            
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-primary)', fontWeight: '500' }}>
                                                    <span style={{ fontSize: '1.05rem' }}>{edu.institution}</span>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                                    <MapPin size={16} color="var(--text-secondary)" /> <span>{edu.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Right Side: Duration & Grade */}
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1.2rem', minWidth: '180px' }}>
                                            <div style={{ 
                                                display: 'flex', alignItems: 'center', gap: '0.5rem',
                                                background: 'rgba(255, 255, 255, 0.05)', 
                                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                                padding: '0.5rem 1.2rem', 
                                                borderRadius: '30px', 
                                                color: 'var(--text-secondary)', 
                                                fontSize: '0.9rem',
                                                fontWeight: '500',
                                                boxShadow: 'inset 0 0 10px rgba(0,0,0,0.2)'
                                            }}>
                                                <Calendar size={14} color={edu.color} /> {edu.duration}
                                            </div>
                                            
                                            <motion.div 
                                                whileHover={{ scale: 1.03 }}
                                                style={{ 
                                                    background: `linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.2))`,
                                                    border: `1px solid ${edu.color}50`,
                                                    boxShadow: `inset 0 0 25px ${edu.glow}, 0 5px 15px rgba(0,0,0,0.3)`,
                                                    padding: '0.8rem 1.5rem', 
                                                    borderRadius: '16px', 
                                                    display: 'inline-flex', 
                                                    alignItems: 'center', 
                                                    justifyContent: 'center',
                                                    gap: '0.8rem',
                                                    marginTop: 'auto',
                                                    width: '100%'
                                                }}
                                            >
                                                <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Score</span>
                                                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.2rem' }}>
                                                    <span style={{ color: '#fff', fontWeight: '800', fontSize: '1.4rem', textShadow: `0 0 15px ${edu.color}` }}>
                                                        {edu.grade.replace('Percentage: ', '').replace('CGPA: ', '')}
                                                    </span>
                                                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '600' }}>
                                                        {edu.grade.includes('CGPA') ? 'CGPA' : '%'}
                                                    </span>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{__html: `
                @media (max-width: 768px) {
                    .timeline-line {
                        display: none !important;
                    }
                    .timeline-icon-container {
                        display: none !important;
                    }
                }
            `}} />
        </section>
    );
};

export default Academics;
