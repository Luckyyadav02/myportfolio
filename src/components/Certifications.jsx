import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Award, Medal, Laptop, ExternalLink, Shield, Network, Cpu, Trophy, ChevronLeft, ChevronRight, Code, Server } from 'lucide-react';

const Certifications = () => {
    const sliderRef = useRef(null);

    const scroll = (direction) => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: direction * 460, behavior: 'smooth' });
        }
    };

    // ─── ALL CERTIFICATES ───────────────────────────────────────────────────────
    // Place each image in your /public folder with the filename shown in "image:"
    const certs = [
        // ── 2026 ──────────────────────────────────────────────────────────────
        {
            title: "Oracle Cloud Infrastructure 2025 – Foundations Associate",
            issuer: "Oracle University",
            date: "Mar 18, 2026",
            icon: <Shield color="var(--accent-primary)" size={24} />,
            image: "/oracle-cn-cert.png",        // eCertificate_CN.pdf  →  oracle-cn-cert.png
            link: "/oracle-cn-cert.png",
        },
        {
            title: "Python Developer Certification",
            issuer: "freeCodeCamp",
            date: "Mar 23, 2026",
            icon: <Medal color="var(--accent-primary)" size={24} />,
            image: "/python-fcc-cert.png",
            link: "https://freecodecamp.org/certification/luckyyadav02/python-v9",
        },
        {
            title: "Oracle Cloud Infrastructure 2025 – AI Foundations Associate",
            issuer: "Oracle University",
            date: "Feb 23, 2026",
            icon: <Shield color="var(--accent-primary)" size={24} />,
            image: "/oracle-ai-cert.png",
            link: "/oracle-ai-cert.png",
        },
        {
            title: "Oracle Data Platform 2025 – Certified Foundations Associate",
            issuer: "Oracle University",
            date: "Feb 23, 2026",
            icon: <Award color="var(--accent-primary)" size={24} />,
            image: "/oracle-data-cert.png",
            link: "/oracle-data-cert.png",
        },
        // ── 2025 ──────────────────────────────────────────────────────────────
        {
            title: "Data Structures & Algorithms",
            issuer: "CipherSchools",
            date: "Jul 2025",
            icon: <Award color="var(--accent-primary)" size={24} />,
            image: "/dsa-cert.png",              // Certificate.png  →  dsa-cert.png
            link: "/dsa-cert.png",
        },
        {
            title: "Java Programming",
            issuer: "NeoColab / iamneo",
            date: "Jan 2025 – May 2025",
            icon: <Medal color="var(--accent-primary)" size={24} />,
            image: "/java-cert.png",             // java_cert.jpg  →  java-cert.png
            link: "/java-cert.png",
        },
        // ── 2024 ──────────────────────────────────────────────────────────────
        {
            title: "Object Oriented Programming",
            issuer: "NeoColab / iamneo",
            date: "Aug 2024 – Dec 2024",
            icon: <Code color="var(--accent-primary)" size={24} />,
            image: "/oops-cert.png",             // oops.png  →  oops-cert.png
            link: "/oops-cert.png",
        },
        {
            title: "Data Structures and Algorithm",
            issuer: "NeoColab / iamneo",
            date: "Aug 2024 – Dec 2024",
            icon: <Cpu color="var(--accent-primary)" size={24} />,
            image: "/dsa-neo-cert.png",          // dsa.png  →  dsa-neo-cert.png
            link: "/dsa-neo-cert.png",
        },
        {
            title: "Packet Switching Networks and Algorithms",
            issuer: "University of Colorado via Coursera",
            date: "Oct 29, 2024",
            icon: <Network color="var(--accent-primary)" size={24} />,
            image: "/packet-switching-cert.png",
            link: "https://coursera.org/verify/EV4O0T80977W",
        },
        {
            title: "Fundamentals of Network Communication",
            issuer: "University of Colorado via Coursera",
            date: "Sep 25, 2024",
            icon: <Network color="var(--accent-primary)" size={24} />,
            image: "/network-cert.png",
            link: "https://coursera.org/verify/VEDM45EINFH7",
        },
        {
            title: "Digital Systems: From Logic Gates to Processors",
            issuer: "UAB via Coursera",
            date: "Sep 25, 2024",
            icon: <Server color="var(--accent-primary)" size={24} />,
            image: "/digital-systems-cert.png",
            link: "https://coursera.org/verify/57IXRJEPPSO4",
        },
        {
            title: "HackWithVertos 1.0 – 24 Hour Hackathon",
            issuer: "Student Organization ECHO, LPU",
            date: "Feb 16–17, 2024",
            icon: <Trophy color="var(--accent-primary)" size={24} />,
            image: "/hackathon-cert.png",
            link: "/hackathon-cert.png",
        },
        {
            title: "Software Engineering: Implementation and Testing",
            issuer: "HKUST via Coursera",
            date: "Apr 29, 2024",
            icon: <Code color="var(--accent-primary)" size={24} />,
            image: "/software-eng-cert.png",     // CERTIFICATE_Software.jpeg  →  software-eng-cert.png
            link: "https://coursera.org/verify/QNYMHL6SGTBH",
        },
        {
            title: "Computer Programming",
            issuer: "NeoColab / iamneo",
            date: "Jan 2024 – May 2024",
            icon: <Cpu color="var(--accent-primary)" size={24} />,
            image: "/c-programming-cert.png",    // C_programing_cetificate.pdf  →  c-programming-cert.png
            link: "/c-programming-cert.png",
        },
        // ── 2023 ──────────────────────────────────────────────────────────────
        {
            title: "Responsive Web Design Developer",
            issuer: "freeCodeCamp",
            date: "Oct 31, 2023",
            icon: <Laptop color="var(--accent-primary)" size={24} />,
            image: "/webdesign-cert.png",
            link: "https://freecodecamp.org/certification/fcc757f4831-912e-4935-9eb7-eb75559a1b7f/responsive-web-design",
        },
        {
            title: "Digital Systems: From Logic Gates to Processors",
            issuer: "UAB via Coursera",
            date: "Sep 25, 2024",
            icon: <Server color="var(--accent-primary)" size={24} />,
            image: "/digital-systems-cert.png",
            link: "https://coursera.org/verify/57IXRJEPPSO4",
        },
        {
            title: "HackWithVertos 1.0 – 24 Hour Hackathon",
            issuer: "Student Organization ECHO, LPU",
            date: "Feb 16–17, 2024",
            icon: <Trophy color="var(--accent-primary)" size={24} />,
            image: "/hackathon-cert.png",
            link: "/hackathon-cert.png",
        },
    ];
    // ────────────────────────────────────────────────────────────────────────────

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

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem' }}
                >
                    {certs.length} credentials earned
                </motion.p>

                {/* Slider wrapper */}
                <div style={{ position: 'relative' }}>

                    {/* Left arrow */}
                    <button
                        onClick={() => scroll(-1)}
                        aria-label="Scroll left"
                        style={{
                            position: 'absolute', left: '-22px', top: '50%', transform: 'translateY(-50%)',
                            zIndex: 10, background: 'var(--bg-secondary)', border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '50%', width: '44px', height: '44px', display: 'flex',
                            alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.3)', transition: 'background 0.2s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,51,102,0.15)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'var(--bg-secondary)'}
                    >
                        <ChevronLeft size={20} color="var(--accent-primary)" />
                    </button>

                    {/* Scrollable track */}
                    <div
                        ref={sliderRef}
                        style={{
                            display: 'flex',
                            gap: '1.5rem',
                            overflowX: 'auto',
                            paddingBottom: '0.5rem',
                            scrollSnapType: 'x mandatory',
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    >
                        <style>{`
                            #cert-track::-webkit-scrollbar { display: none; }
                        `}</style>

                        {certs.map((cert, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.04 }}
                                whileHover={{ y: -6, boxShadow: '0 18px 40px rgba(255,51,102,0.18)' }}
                                className="glass-card"
                                style={{
                                    minWidth: '400px',
                                    maxWidth: '400px',
                                    padding: '1.8rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1.25rem',
                                    borderRadius: '24px',
                                    scrollSnapAlign: 'start',
                                    flexShrink: 0,
                                }}
                            >
                                {/* Header */}
                                <div style={{ display: 'flex', gap: '0.9rem', alignItems: 'flex-start' }}>
                                    <div style={{
                                        background: 'rgba(255,51,102,0.1)',
                                        width: '54px', height: '54px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        borderRadius: '14px', flexShrink: 0,
                                    }}>
                                        {cert.icon}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ fontSize: '1.05rem', marginBottom: '0.35rem', color: 'var(--text-primary)', lineHeight: 1.4 }}>
                                            {cert.title}
                                        </h3>
                                        <p style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.88rem' }}>{cert.issuer}</p>
                                        <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)', fontSize: '0.8rem', marginTop: '0.25rem' }}>{cert.date}</p>
                                    </div>
                                </div>

                                {/* Thumbnail */}
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'block', borderRadius: '12px', overflow: 'hidden',
                                        border: '1px solid rgba(255,255,255,0.06)', marginTop: 'auto',
                                    }}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                        style={{ width: '100%', height: '230px', background: 'var(--bg-secondary)', position: 'relative' }}
                                    >
                                        <img
                                            src={cert.image}
                                            alt={`${cert.title} Certificate`}
                                            onError={e => {
                                                e.target.src = "https://images.unsplash.com/photo-1589330694653-efa6475304af?q=80&w=800&auto=format&fit=crop";
                                            }}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                        />
                                        <div style={{
                                            position: 'absolute', inset: 0,
                                            background: 'linear-gradient(to top, rgba(0,0,0,0.75), transparent 65%)',
                                            display: 'flex', alignItems: 'flex-end', padding: '0.7rem',
                                        }}>
                                            <span style={{ color: 'white', fontSize: '0.85rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                                <ExternalLink size={14} color="var(--accent-primary)" /> View Credential
                                            </span>
                                        </div>
                                    </motion.div>
                                </a>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right arrow */}
                    <button
                        onClick={() => scroll(1)}
                        aria-label="Scroll right"
                        style={{
                            position: 'absolute', right: '-22px', top: '50%', transform: 'translateY(-50%)',
                            zIndex: 10, background: 'var(--bg-secondary)', border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '50%', width: '44px', height: '44px', display: 'flex',
                            alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.3)', transition: 'background 0.2s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,51,102,0.15)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'var(--bg-secondary)'}
                    >
                        <ChevronRight size={20} color="var(--accent-primary)" />
                    </button>
                </div>

                {/* Scroll hint */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ color: 'var(--text-secondary)', fontSize: '0.78rem', textAlign: 'center', marginTop: '1.25rem', opacity: 0.5 }}
                >
                    ← use arrows or swipe to explore all {certs.length} certificates →
                </motion.p>
            </div>
        </section>
    );
};

export default Certifications;
