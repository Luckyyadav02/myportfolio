import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Linkedin, Github, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';

// ─────────────────────────────────────────────
// 🔧 EMAILJS CONFIG — fill in your own values
//    after signing up at https://www.emailjs.com
// ─────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // e.g. 'template_xyz456'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // e.g. 'aBcDeFgHiJkLmNoP'

const inputStyle = {
    width: '100%',
    padding: '1rem 1.2rem',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid var(--border-glass)',
    borderRadius: '8px',
    color: 'var(--text-primary)',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
};

const Contact = () => {
    const formRef = useRef(null);

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors,   setErrors]   = useState({});
    const [status,   setStatus]   = useState('idle'); // idle | loading | success | error

    // ── validation ──────────────────────────────
    const validate = () => {
        const e = {};
        if (!formData.name.trim())                        e.name    = 'Name is required.';
        if (!formData.email.trim())                       e.email   = 'Email is required.';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
                                                          e.email   = 'Enter a valid email.';
        if (!formData.message.trim())                     e.message = 'Message is required.';
        else if (formData.message.trim().length < 10)     e.message = 'Message must be at least 10 characters.';
        return e;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    // ── submit ───────────────────────────────────
    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length) {
            setErrors(validationErrors);
            return;
        }

        setStatus('loading');

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY
            );
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            console.error('EmailJS error:', err);
            setStatus('error');
        }
    };

    // ── field focus helpers ──────────────────────
    const onFocus = (e) => (e.target.style.borderColor = 'var(--accent-secondary)');
    const onBlur  = (e) => (e.target.style.borderColor = errors[e.target.name] ? '#ef4444' : 'var(--border-glass)');

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
                        <span>06.</span> Get In Touch
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem', maxWidth: '600px' }}>
                        Interested in collaborating, discussing projects, or exploring opportunities? Feel free to reach out.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem' }}>

                        {/* ── Left: contact info ── */}
                        <div className="contact-info">
                            {[
                                { Icon: Mail,   label: 'Email',    content: <a href="mailto:luckyyadav4149a@gmail.com" style={{ color: 'var(--text-secondary)' }}>luckyyadav4149a@gmail.com</a> },
                                { Icon: Phone,  label: 'Phone',    content: <a href="tel:+918595656302"              style={{ color: 'var(--text-secondary)' }}>+91 8595656302</a> },
                                { Icon: MapPin, label: 'Location', content: <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Faridabad, Haryana, India</p> },
                            ].map(({ Icon, label, content }) => (
                                <div key={label} style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                                    <Icon color="var(--accent-primary)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.3rem', color: 'var(--text-primary)' }}>{label}</h4>
                                        {content}
                                    </div>
                                </div>
                            ))}

                            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
                                {[
                                    { href: 'https://linkedin.com/in/luckyyadav02', Icon: Linkedin },
                                    { href: 'https://github.com/Luckyyadav02',      Icon: Github },
                                ].map(({ href, Icon }) => (
                                    <a
                                        key={href}
                                        href={href}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '45px', height: '45px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', borderRadius: '50%', color: 'var(--text-primary)', transition: '0.3s' }}
                                        onMouseOver={(e) => (e.currentTarget.style.background = 'var(--gradient-primary)')}
                                        onMouseOut={(e)  => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
                                    >
                                        <Icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* ── Right: form ── */}
                        <form ref={formRef} onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                            {/* Name */}
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    style={{ ...inputStyle, borderColor: errors.name ? '#ef4444' : 'var(--border-glass)' }}
                                />
                                {errors.name && <p style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.3rem' }}>{errors.name}</p>}
                            </div>

                            {/* Email */}
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    style={{ ...inputStyle, borderColor: errors.email ? '#ef4444' : 'var(--border-glass)' }}
                                />
                                {errors.email && <p style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.3rem' }}>{errors.email}</p>}
                            </div>

                            {/* Message */}
                            <div>
                                <textarea
                                    name="message"
                                    rows="5"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    style={{ ...inputStyle, resize: 'vertical', borderColor: errors.message ? '#ef4444' : 'var(--border-glass)' }}
                                />
                                {errors.message && <p style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.3rem' }}>{errors.message}</p>}
                            </div>

                            {/* Submit button */}
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={status === 'loading'}
                                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
                            >
                                {status === 'loading' ? (
                                    <><Loader size={18} style={{ animation: 'spin 1s linear infinite' }} /> Sending…</>
                                ) : (
                                    <><Send size={18} /> Send Message</>
                                )}
                            </button>

                            {/* Success / Error banners */}
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.35)', borderRadius: '8px', color: '#4ade80' }}
                                >
                                    <CheckCircle size={20} />
                                    <span>Message sent! I'll get back to you soon.</span>
                                </motion.div>
                            )}
                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.35)', borderRadius: '8px', color: '#f87171' }}
                                >
                                    <AlertCircle size={20} />
                                    <span>Something went wrong. Please try again or email me directly.</span>
                                </motion.div>
                            )}
                        </form>
                    </div>
                </motion.div>
            </div>

            {/* Spinner keyframe */}
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </section>
    );
};

export default Contact;
