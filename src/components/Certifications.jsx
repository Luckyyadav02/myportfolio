import React from 'react';
import { motion } from 'framer-motion';
import { Award, Medal, Laptop, Scroll, ExternalLink } from 'lucide-react';

const Certifications = () => {
    // When adding pictures to the 'public' folder, you reference them starting with a forward slash '/'
    // For example, if you place a file named "java-cert.png" in the public folder, the link is "/java-cert.png"
    const certs = [
        {
            title: "Java Programming",
            issuer: "NeoColab",
            date: "Jan 2025 – May 2025",
            icon: <Medal color="var(--accent-primary)" size={28} />,
            image: "/java-cert.png", // Name your picture 'java-cert.png' and place it in the public folder
            link: "/java-cert.png"
        },
        {
            title: "Data Structures & Algorithms",
            issuer: "NeoColab",
            date: "Aug 2024 – Dec 2024",
            icon: <Award color="var(--accent-primary)" size={28} />,
            image: "/dsa-cert.png", // Name your picture 'dsa-cert.png' and place it in the public folder
            link: "/dsa-cert.png"
        },
        {
            title: "Responsive Web Design Developer",
            issuer: "freeCodeCamp",
            date: "May 2023 – Oct 2023",
            icon: <Laptop color="var(--accent-primary)" size={28} />,
            image: "/webdesign-cert.png", // Name your picture 'webdesign-cert.png' and place it in the public folder
            link: "/webdesign-cert.png"
        }
    ];

    return (
        <section id="certifications" className="section-padding">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    <span>04.</span> Certifications & Training
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                    {certs.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ scale: 1.02, boxShadow: '0 15px 35px rgba(255, 51, 102, 0.15)' }}
                            className="glass-card"
                            style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', borderRadius: '24px' }}
                        >
                            {/* Header: Icon & Details */}
                            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                                <div style={{ background: 'rgba(255, 51, 102, 0.1)', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px', flexShrink: 0 }}>
                                    {cert.icon}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: '1.15rem', marginBottom: '0.4rem', color: 'var(--text-primary)', lineHeight: 1.4 }}>{cert.title}</h3>
                                    <p style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.9rem' }}>{cert.issuer}</p>
                                    <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)', fontSize: '0.8rem', marginTop: '0.3rem' }}>{cert.date}</p>
                                </div>
                            </div>

                            {/* Certificate Image Thumbnail Placeholder */}
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ display: 'block', borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', position: 'relative', marginTop: 'auto' }}
                            >
                                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} style={{ width: '100%', height: '180px', background: 'var(--bg-secondary)', position: 'relative' }}>

                                    <img
                                        src={cert.image}
                                        alt={`${cert.title} Certificate`}
                                        onError={(e) => {
                                            // This fallback ensures the site still looks good if the image in public folder isn't found yet!
                                            e.target.src = "https://images.unsplash.com/photo-1589330694653-efa6475304af?q=80&w=800&auto=format&fit=crop";
                                        }}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                    />
                                    {/* Overlay Gradient & View Text */}
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent 70%)', display: 'flex', alignItems: 'flex-end', padding: '1rem' }}>
                                        <span style={{ color: 'white', fontSize: '0.85rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <ExternalLink size={14} color="var(--accent-primary)" /> View Credential
                                        </span>
                                    </div>
                                </motion.div>
                            </a>
                        </motion.div>
                    ))}

                    {/* Featured Cert */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ y: -5, boxShadow: '0 15px 40px rgba(255, 51, 102, 0.2)' }}
                        className="glass-card"
                        style={{ padding: '2rem', display: 'flex', gap: '2rem', alignItems: 'center', gridColumn: '1 / -1', borderRadius: '24px', flexWrap: 'wrap' }}
                    >
                        <div style={{ flex: '1 1 300px' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                                <div style={{ background: 'rgba(255, 51, 102, 0.1)', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', flexShrink: 0 }}>
                                    <Scroll color="var(--accent-primary)" size={24} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>Python Programming – Dice Game Project</h3>
                                    <p style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.95rem' }}>Cipher Schools</p>
                                </div>
                            </div>
                            <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)', fontSize: '0.85rem', marginBottom: '1rem' }}>Jun 2025 – Jul 2025</p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                Created a console-based Dice Game application implementing loops, conditionals, random number generation, and score tracking for two-player gameplay.
                            </p>

                            <a href="/featured-cert.png" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                                <ExternalLink size={16} /> Verify Credential
                            </a>
                        </div>

                        {/* Featured Certificate Image */}
                        <div style={{ flex: '1 1 300px', borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                            <img
                                src="/featured-cert.png"
                                alt="Python Programming Certificate"
                                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1589330694653-efa6475304af?q=80&w=800&auto=format&fit=crop"; }}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
