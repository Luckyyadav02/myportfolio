import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section-padding">
            <div className="container">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card contact-content"
                    style={{ padding: '4rem' }}
                >
                    <h2 className="section-title" style={{ marginBottom: '1rem' }}>
                        <span>05.</span> Get In Touch
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem', maxWidth: '600px' }}>
                        Interested in collaborating, discussing projects, or exploring opportunities? Feel free to reach out.
                    </p>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem' }}>
                        <div className="contact-info">
                            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                                <Mail color="var(--accent-primary)" style={{ marginTop: '0.2rem' }} />
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.3rem', color: 'var(--text-primary)' }}>Email</h4>
                                    <a href="mailto:luckyyadav4149a@gmail.com" style={{ color: 'var(--text-secondary)' }}>luckyyadav4149a@gmail.com</a>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                                <Phone color="var(--accent-primary)" style={{ marginTop: '0.2rem' }} />
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.3rem', color: 'var(--text-primary)' }}>Phone</h4>
                                    <a href="tel:+918595656302" style={{ color: 'var(--text-secondary)' }}>+91 8595656302</a>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                                <MapPin color="var(--accent-primary)" style={{ marginTop: '0.2rem' }} />
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.3rem', color: 'var(--text-primary)' }}>Location</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>Faridabad, Haryana, India</p>
                                </div>
                            </div>
                            
                            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
                                <a href="https://linkedin.com/in/luckyyadav02" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '45px', height: '45px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', borderRadius: '50%', color: 'var(--text-primary)', transition: '0.3s' }} onMouseOver={(e) => {e.currentTarget.style.background='var(--gradient-primary)'}} onMouseOut={(e) => {e.currentTarget.style.background='rgba(255,255,255,0.05)'}}>
                                    <Linkedin size={20} />
                                </a>
                                <a href="https://github.com/Luckyyadav02" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '45px', height: '45px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', borderRadius: '50%', color: 'var(--text-primary)', transition: '0.3s' }} onMouseOver={(e) => {e.currentTarget.style.background='var(--gradient-primary)'}} onMouseOut={(e) => {e.currentTarget.style.background='rgba(255,255,255,0.05)'}}>
                                    <Github size={20} />
                                </a>
                            </div>
                        </div>
                        
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <input type="text" id="name" required placeholder="Your Name" style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-glass)', borderRadius: '8px', color: 'var(--text-primary)', fontSize: '1rem', outline: 'none' }} onFocus={(e) => e.target.style.borderColor='var(--accent-secondary)'} onBlur={(e) => e.target.style.borderColor='var(--border-glass)'} />
                            </div>
                            <div>
                                <input type="email" id="email" required placeholder="Your Email" style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-glass)', borderRadius: '8px', color: 'var(--text-primary)', fontSize: '1rem', outline: 'none' }} onFocus={(e) => e.target.style.borderColor='var(--accent-secondary)'} onBlur={(e) => e.target.style.borderColor='var(--border-glass)'} />
                            </div>
                            <div>
                                <textarea id="message" rows="5" required placeholder="Your Message" style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-glass)', borderRadius: '8px', color: 'var(--text-primary)', fontSize: '1rem', resize: 'vertical', outline: 'none' }} onFocus={(e) => e.target.style.borderColor='var(--accent-secondary)'} onBlur={(e) => e.target.style.borderColor='var(--border-glass)'}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }} onClick={(e) => e.preventDefault()}>
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
