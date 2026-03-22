import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, HeartPulse, LineChart } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Heart Disease Prediction Using Machine Learning",
            desc: "Developed a machine learning model to predict the risk of heart disease using healthcare data.",
            highlights: [
                "Cleaned and preprocessed messy cardiovascular data by handling missing values and removing outliers.",
                "Performed exploratory data analysis to identify important health indicators.",
                "Trained and optimized multiple machine learning models to achieve approximately 80% prediction accuracy.",
                "Improved interpretability by identifying the most influential features affecting heart disease risk."
            ],
            tech: ["Python", "Scikit-Learn", "Pandas", "Matplotlib"],
            icon: <HeartPulse size={48} color="rgba(255,255,255,0.2)" />
        },
        {
            title: "Sales Insights – Sales Data Analysis & Prediction",
            desc: "Built an interactive sales analytics dashboard to analyze business performance and forecast future sales.",
            highlights: [
                "Developed a Streamlit dashboard integrating data visualization and prediction models.",
                "Used Linear Regression to forecast future sales with approximately 85% accuracy.",
                "Identified sales trends, seasonal patterns, and product performance insights.",
                "Enabled data-driven decision-making using clear visual dashboards."
            ],
            tech: ["Python", "Pandas", "Streamlit", "Power BI", "Linear Regression"],
            icon: <LineChart size={48} color="rgba(255,255,255,0.2)" />
        }
    ];

    return (
        <section id="projects" className="section-padding">
            <div className="container">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    <span>03.</span> Featured Projects
                </motion.h2>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
                    {projects.map((project, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            whileHover={{ y: -15, scale: 1.03, boxShadow: '0 25px 50px rgba(255,51,102,0.3)', borderColor: 'rgba(255,51,102,0.4)' }}
                            className="glass-card"
                            style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden', transition: 'box-shadow 0.3s ease, border-color 0.3s ease' }}
                        >
                            <div style={{ width: '100%', height: '200px', borderBottom: '1px solid var(--border-glass)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, rgba(255, 51, 102, 0.1) 0%, rgba(255, 153, 51, 0.1) 100%)' }}>
                                {project.icon}
                            </div>
                            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem', color: 'var(--text-primary)' }}>{project.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>{project.desc}</p>
                                
                                <ul style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    {project.highlights.map((item, i) => (
                                        <li key={i} style={{ fontSize: '0.9rem', color: 'var(--text-muted)', position: 'relative', paddingLeft: '1.2rem' }}>
                                            <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>▹</span> {item}
                                        </li>
                                    ))}
                                </ul>
                                
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginTop: 'auto', marginBottom: '2rem' }}>
                                    {project.tech.map(t => (
                                        <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-secondary)', background: 'rgba(255, 153, 51, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '4px' }}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <a href="#" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '4px', fontSize: '0.85rem', border: '1px solid var(--accent-primary)' }}>
                                        <ExternalLink size={14} /> View Demo
                                    </a>
                                    <a href="#" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '4px', fontSize: '0.85rem', border: '1px solid var(--accent-primary)' }}>
                                        <Github size={14} /> GitHub
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
