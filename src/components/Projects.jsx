import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, HeartPulse, LineChart, Hospital, Server } from 'lucide-react';

const projects = [
    {
        title: "Heart Disease Prediction",
        subtitle: "Machine Learning · Healthcare AI",
        desc: "Developed a machine learning model to predict the risk of heart disease using real-world cardiovascular data.",
        highlights: [
            "Cleaned & preprocessed messy cardiovascular data — handled missing values & outliers.",
            "Performed EDA to identify key health indicators driving risk.",
            "Trained & optimized multiple ML models achieving ~80% prediction accuracy.",
            "Improved interpretability by ranking the most influential risk features.",
        ],
        tech: ["Python", "Scikit-Learn", "Pandas", "Matplotlib"],
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
        accent: "#ff3366",
        accentSoft: "rgba(255,51,102,0.15)",
        icon: <HeartPulse size={22} />,
        github: "https://github.com/Luckyyadav02",
        demo: "#",
    },
    {
        title: "Sales Insights Dashboard",
        subtitle: "Data Analysis · Forecasting",
        desc: "Built an interactive sales analytics dashboard to analyze business performance and forecast future sales trends.",
        highlights: [
            "Developed a Streamlit dashboard integrating data visualization & prediction models.",
            "Used Linear Regression to forecast future sales with ~85% accuracy.",
            "Identified seasonal trends, patterns, and product performance insights.",
            "Enabled data-driven decisions through clear, interactive visual dashboards.",
        ],
        tech: ["Python", "Pandas", "Streamlit", "Power BI", "Linear Regression"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        accent: "#ff9933",
        accentSoft: "rgba(255,153,51,0.15)",
        icon: <LineChart size={22} />,
        github: "https://github.com/Luckyyadav02",
        demo: "#",
    },
    {
        title: "Hospital Management System",
        subtitle: "Java · OOP · Backend",
        desc: "A comprehensive Hospital Management System built in Java using core OOP principles to manage patients, doctors, appointments, and billing operations.",
        highlights: [
            "Designed modular class hierarchy — Patient, Doctor, Appointment, and Billing entities.",
            "Implemented CRUD operations for patient registration and doctor scheduling.",
            "Applied inheritance & polymorphism for clean, extensible system architecture.",
            "Managed appointment conflict detection and automated billing calculations.",
        ],
        tech: ["Java", "OOP", "Collections", "File I/O"],
        image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80",
        accent: "#00d4ff",
        accentSoft: "rgba(0,212,255,0.15)",
        icon: <Hospital size={22} />,
        github: "https://github.com/Luckyyadav02/Hospital_Management_System",
        demo: "#",
    },
    {
        title: "SpringBoot REST API",
        subtitle: "Spring Boot · REST · CRUD",
        desc: "A production-ready RESTful API built with Spring Boot demonstrating full CRUD operations, layered architecture, and database integration.",
        highlights: [
            "Built RESTful endpoints following industry-standard HTTP methods & status codes.",
            "Implemented layered architecture — Controller, Service, Repository (Spring Data JPA).",
            "Integrated MySQL database with Hibernate ORM for persistent data management.",
            "Tested all endpoints using Postman with proper request/response validation.",
        ],
        tech: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "REST API"],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
        accent: "#a855f7",
        accentSoft: "rgba(168,85,247,0.15)",
        icon: <Server size={22} />,
        github: "https://github.com/Luckyyadav02/SpringBoot-Rest-API-CRUD-operations",
        demo: "#",
    },
    {
        title: "Power BI Dashboards",
        subtitle: "Data Visualization · Business Intelligence",
        desc: "A collection of interactive Power BI dashboards providing deep business insights across sales, HR, and financial domains with rich visual storytelling.",
        highlights: [
            "Designed multi-page dashboards with drill-through filters & cross-report navigation.",
            "Built dynamic KPI cards, trend charts, and geo-maps for real-time business monitoring.",
            "Applied DAX measures for calculated metrics — YoY growth, moving averages & rankings.",
            "Transformed raw data using Power Query for clean, model-ready datasets.",
        ],
        tech: ["Power BI", "DAX", "Power Query", "Data Modeling", "Excel"],
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
        accent: "#10b981",
        accentSoft: "rgba(16,185,129,0.15)",
        icon: <LineChart size={22} />,
        github: "https://github.com/Luckyyadav02/POWERBI-DASHBOARDS-",
        demo: "#",
    },
];

const ProjectCard = ({ project, idx }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                background: 'rgba(255,255,255,0.03)',
                border: `1px solid ${hovered ? project.accent + '66' : 'var(--border-glass)'}`,
                boxShadow: hovered ? `0 30px 60px ${project.accent}33` : '0 4px 20px rgba(0,0,0,0.2)',
                transform: hovered ? 'translateY(-12px)' : 'translateY(0)',
                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* ── Image Banner ── */}
            <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img
                    src={project.image}
                    alt={project.title}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transform: hovered ? 'scale(1.08)' : 'scale(1)',
                        transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                        filter: 'brightness(0.55)',
                    }}
                />

                {/* gradient overlay */}
                <div style={{
                    position: 'absolute', inset: 0,
                    background: `linear-gradient(to bottom, ${project.accent}22 0%, rgba(0,0,0,0.7) 100%)`,
                }} />

                {/* icon badge */}
                <div style={{
                    position: 'absolute', top: '1.2rem', left: '1.2rem',
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    background: project.accentSoft,
                    border: `1px solid ${project.accent}55`,
                    backdropFilter: 'blur(8px)',
                    borderRadius: '30px',
                    padding: '0.4rem 0.9rem',
                    color: project.accent,
                    fontSize: '0.8rem',
                    fontWeight: 600,
                }}>
                    {project.icon}
                    {project.subtitle}
                </div>

                {/* title over image */}
                <div style={{ position: 'absolute', bottom: '1.2rem', left: '1.4rem', right: '1.4rem' }}>
                    <h3 style={{
                        fontSize: '1.45rem',
                        fontWeight: 700,
                        color: '#fff',
                        textShadow: '0 2px 12px rgba(0,0,0,0.7)',
                        margin: 0,
                    }}>
                        {project.title}
                    </h3>
                </div>
            </div>

            {/* ── Body ── */}
            <div style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.2rem', lineHeight: 1.6 }}>
                    {project.desc}
                </p>

                {/* highlights */}
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.6rem', paddingLeft: 0, listStyle: 'none' }}>
                    {project.highlights.map((item, i) => (
                        <li key={i} style={{ display: 'flex', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--text-muted)', alignItems: 'flex-start' }}>
                            <span style={{ color: project.accent, flexShrink: 0, marginTop: '2px' }}>▹</span>
                            {item}
                        </li>
                    ))}
                </ul>

                {/* tech pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.8rem', marginTop: 'auto' }}>
                    {project.tech.map(t => (
                        <span key={t} style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.75rem',
                            color: project.accent,
                            background: project.accentSoft,
                            border: `1px solid ${project.accent}44`,
                            padding: '0.25rem 0.75rem',
                            borderRadius: '20px',
                            letterSpacing: '0.02em',
                        }}>
                            {t}
                        </span>
                    ))}
                </div>

                {/* action buttons */}
                <div style={{ display: 'flex', gap: '0.8rem' }}>
                    <a
                        href={project.demo}
                        style={{
                            flex: 1,
                            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.45rem',
                            padding: '0.65rem 1rem',
                            borderRadius: '8px',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            background: hovered ? project.accent : 'transparent',
                            border: `1px solid ${project.accent}`,
                            color: hovered ? '#fff' : project.accent,
                            transition: 'all 0.3s',
                            textDecoration: 'none',
                        }}
                    >
                        <ExternalLink size={14} /> Live Demo
                    </a>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            flex: 1,
                            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.45rem',
                            padding: '0.65rem 1rem',
                            borderRadius: '8px',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid var(--border-glass)',
                            color: 'var(--text-secondary)',
                            transition: 'all 0.3s',
                            textDecoration: 'none',
                        }}
                        onMouseOver={e => { e.currentTarget.style.borderColor = project.accent; e.currentTarget.style.color = project.accent; }}
                        onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--border-glass)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                    >
                        <Github size={14} /> GitHub
                    </a>
                </div>
            </div>

            {/* glow border line at bottom on hover */}
            <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: '3px',
                background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
                opacity: hovered ? 1 : 0,
                transition: 'opacity 0.4s',
            }} />
        </motion.div>
    );
};

const Projects = () => (
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

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
                gap: '2.5rem',
            }}>
                {projects.map((project, idx) => (
                    <ProjectCard key={idx} project={project} idx={idx} />
                ))}
            </div>
        </div>
    </section>
);

export default Projects;
