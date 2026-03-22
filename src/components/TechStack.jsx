import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, Wrench, Users } from 'lucide-react';

const TechStack = () => {
    const listVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="tech-stack" className="section-padding">
            <div className="container">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    <span>02.</span> Tech Stack
                </motion.h2>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {/* Programming Languages */}
                    <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(255,51,102,0.1)' }} className="tech-category glass-card" style={{ padding: '2rem' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-primary)'}}>
                            <Code2 color="var(--accent-primary)" /> Languages
                        </h3>
                        <motion.div variants={listVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <motion.div whileHover={{ x: 10, color: 'var(--text-primary)' }} className="skill-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem', color: 'var(--text-secondary)' }}><i className="devicon-javascript-plain colored" style={{ fontSize: '1.5rem', width: '30px', textAlign: 'center' }}></i><span>JavaScript (ES6+)</span></motion.div>
                            <motion.div whileHover={{ x: 10, color: 'var(--text-primary)' }} className="skill-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem', color: 'var(--text-secondary)' }}><i className="devicon-python-plain colored" style={{ fontSize: '1.5rem', width: '30px', textAlign: 'center' }}></i><span>Python</span></motion.div>
                            <motion.div whileHover={{ x: 10, color: 'var(--text-primary)' }} className="skill-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem', color: 'var(--text-secondary)' }}><i className="devicon-java-plain colored" style={{ fontSize: '1.5rem', width: '30px', textAlign: 'center' }}></i><span>Java</span></motion.div>
                            <motion.div whileHover={{ x: 10, color: 'var(--text-primary)' }} className="skill-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem', color: 'var(--text-secondary)' }}><i className="devicon-typescript-plain colored" style={{ fontSize: '1.5rem', width: '30px', textAlign: 'center' }}></i><span>TypeScript</span></motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Libraries & Frameworks */}
                    <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(255,51,102,0.1)' }} className="tech-category glass-card" style={{ padding: '2rem' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-primary)'}}>
                            <Layers color="var(--accent-primary)" /> Frameworks
                        </h3>
                        <motion.div variants={listVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <motion.div whileHover={{ x: 10, color: 'var(--text-primary)' }} className="skill-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem', color: 'var(--text-secondary)' }}><i className="devicon-react-original colored" style={{ fontSize: '1.5rem', width: '30px', textAlign: 'center' }}></i><span>React.js</span></motion.div>
                            <motion.div whileHover={{ x: 10, color: 'var(--text-primary)' }} className="skill-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem', color: 'var(--text-secondary)' }}><i className="devicon-nodejs-plain colored" style={{ fontSize: '1.5rem', width: '30px', textAlign: 'center' }}></i><span>Node.js</span></motion.div>
                            <motion.div whileHover={{ x: 10, color: 'var(--text-primary)' }} className="skill-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem', color: 'var(--text-secondary)' }}><i className="devicon-express-original colored" style={{ fontSize: '1.5rem', width: '30px', textAlign: 'center', filter: 'invert(1)' }}></i><span>Express.js</span></motion.div>
                            <motion.div whileHover={{ x: 10, color: 'var(--text-primary)' }} className="skill-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem', color: 'var(--text-secondary)' }}><i className="devicon-mongodb-plain colored" style={{ fontSize: '1.5rem', width: '30px', textAlign: 'center' }}></i><span>MongoDB</span></motion.div>
                            <motion.div whileHover={{ x: 10, color: 'var(--text-primary)' }} className="skill-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem', color: 'var(--text-secondary)' }}><i className="devicon-git-plain colored" style={{ fontSize: '1.5rem', width: '30px', textAlign: 'center' }}></i><span>Git Version Control</span></motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Tools & Platforms */}
                    <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(255,51,102,0.1)' }} className="tech-category glass-card" style={{ padding: '2rem' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-primary)'}}>
                            <Wrench color="var(--accent-primary)" /> Tools
                        </h3>
                        <motion.div variants={listVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <motion.div whileHover={{ x: 10, color: 'var(--text-primary)' }} className="skill-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem', color: 'var(--text-secondary)' }}><i className="devicon-vscode-plain colored" style={{ fontSize: '1.5rem', width: '30px', textAlign: 'center' }}></i><span>VS Code</span></motion.div>
                            <motion.div whileHover={{ x: 10, color: 'var(--text-primary)' }} className="skill-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem', color: 'var(--text-secondary)' }}><i className="devicon-postman-plain colored" style={{ fontSize: '1.5rem', width: '30px', textAlign: 'center' }}></i><span>Postman APIs</span></motion.div>
                            <motion.div whileHover={{ x: 10, color: 'var(--text-primary)' }} className="skill-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem', color: 'var(--text-secondary)' }}><i className="devicon-docker-plain colored" style={{ fontSize: '1.5rem', width: '30px', textAlign: 'center' }}></i><span>Docker Containerization</span></motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Soft Skills */}
                    <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(255,51,102,0.1)' }} className="tech-category glass-card" style={{ padding: '2rem' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-primary)'}}>
                            <Users color="var(--accent-primary)" /> Soft Skills
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                            {["Problem Solving", "System Design", "Agile Methodology", "Code Reviewing"].map((skill) => (
                                <motion.span whileHover={{ scale: 1.1, borderColor: 'var(--accent-primary)', color: 'var(--text-primary)' }} key={skill} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', padding: '0.5rem 1rem', borderRadius: '50px', fontSize: '0.9rem', color: 'var(--text-secondary)', cursor: 'default' }}>
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
