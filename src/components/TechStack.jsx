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
                            <motion.div whileHover={{ x: 10, color: 'var(--text-primary)' }} className="skill-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem', color: 'var(--text-secondary)' }}><i className="devicon-java-plain colored" style={{ fontSize: '1.5rem', width: '30px', textAlign: 'center' }}></i><span>Java</span></motion.div>
                            <motion.div whileHover={{ x: 10, color: 'var(--text-primary)' }} className="skill-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem', color: 'var(--text-secondary)' }}><i className="devicon-python-plain colored" style={{ fontSize: '1.5rem', width: '30px', textAlign: 'center' }}></i><span>Python</span></motion.div>
                            <motion.div whileHover={{ x: 10, color: 'var(--text-primary)' }} className="skill-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem', color: 'var(--text-secondary)' }}><i className="devicon-html5-plain colored" style={{ fontSize: '1.5rem', width: '30px', textAlign: 'center' }}></i><span>HTML</span></motion.div>
                            <motion.div whileHover={{ x: 10, color: 'var(--text-primary)' }} className="skill-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem', color: 'var(--text-secondary)' }}><i className="devicon-css3-plain colored" style={{ fontSize: '1.5rem', width: '30px', textAlign: 'center' }}></i><span>CSS</span></motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Libraries */}
                    <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(255,51,102,0.1)' }} className="tech-category glass-card" style={{ padding: '2rem' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-primary)'}}>
                            <Layers color="var(--accent-primary)" /> Libraries
                        </h3>
                        <motion.div variants={listVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <motion.div whileHover={{ x: 10, color: 'var(--text-primary)' }} className="skill-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
                                <i className="devicon-numpy-plain colored" style={{ fontSize: '1.5rem', width: '30px', textAlign: 'center' }}></i>
                                <span>NumPy</span>
                            </motion.div>
                            <motion.div whileHover={{ x: 10, color: 'var(--text-primary)' }} className="skill-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
                                <i className="devicon-pandas-plain colored" style={{ fontSize: '1.5rem', width: '30px', textAlign: 'center' }}></i>
                                <span>Pandas</span>
                            </motion.div>
                            <motion.div whileHover={{ x: 10, color: 'var(--text-primary)' }} className="skill-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="Scikit-Learn" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
    <span>Scikit-Learn</span>
</motion.div>

        <motion.div whileHover={{ x: 10, color: 'var(--text-primary)' }} className="skill-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg" alt="Matplotlib" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
    <span>Matplotlib</span>
              </motion.div>
                            <motion.div whileHover={{ x: 10, color: 'var(--text-primary)' }} className="skill-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
                                <img src="https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" alt="Seaborn" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                                <span>Seaborn</span>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Tools & Platforms */}
                    <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(255,51,102,0.1)' }} className="tech-category glass-card" style={{ padding: '2rem' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-primary)'}}>
                            <Wrench color="var(--accent-primary)" /> Tools & Platforms
                        </h3>
                        <motion.div variants={listVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <motion.div whileHover={{ x: 10, color: 'var(--text-primary)' }} className="skill-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
                                <i className="devicon-mysql-plain colored" style={{ fontSize: '1.5rem', width: '30px', textAlign: 'center' }}></i>
                                <span>MySQL</span>
                            </motion.div>
                            <motion.div whileHover={{ x: 10, color: 'var(--text-primary)' }} className="skill-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" alt="Power BI" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                                <span>Power BI</span>
                            </motion.div>
                            <motion.div whileHover={{ x: 10, color: 'var(--text-primary)' }} className="skill-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" alt="Excel" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                                <span>Excel</span>
                            </motion.div>
                            <motion.div whileHover={{ x: 10, color: 'var(--text-primary)' }} className="skill-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
                                <i className="devicon-vscode-plain colored" style={{ fontSize: '1.5rem', width: '30px', textAlign: 'center' }}></i>
                                <span>VS Code</span>
                            </motion.div>
                            <motion.div whileHover={{ x: 10, color: 'var(--text-primary)' }} className="skill-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
                                <i className="devicon-jupyter-plain colored" style={{ fontSize: '1.5rem', width: '30px', textAlign: 'center' }}></i>
                                <span>Jupyter Notebook</span>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Soft Skills */}
                    <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(255,51,102,0.1)' }} className="tech-category glass-card" style={{ padding: '2rem' }}>
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-primary)'}}>
                            <Users color="var(--accent-primary)" /> Soft Skills
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                            {["Problem Solving", "Team Work", "Project Management", "Adaptability"].map((skill) => (
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