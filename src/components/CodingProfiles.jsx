import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { ExternalLink, Code2, Terminal, Award, Zap } from 'lucide-react';

export default function CodingProfiles() {
    const [leetCodeStats, setLeetCodeStats] = useState(null);
    const [gfgStats, setGfgStats] = useState(null);
    const [loadingLeetCode, setLoadingLeetCode] = useState(true);
    const [loadingGfg, setLoadingGfg] = useState(true);

    useEffect(() => {
        const fetchLeetCode = async () => {
            try {
                const response = await fetch('https://leetcode-stats-api.herokuapp.com/Luckyyadav302');
                if (!response.ok) throw new Error("API not okay");
                const data = await response.json();
                if (data.status === "success" || data.totalSolved !== undefined) {
                    setLeetCodeStats(data);
                } else {
                    throw new Error("Invalid LeetCode format");
                }
            } catch (error) {
                console.error("Failed to fetch LeetCode stats, using fallback", error);
                setLeetCodeStats({
                    totalSolved: 84,
                    totalQuestions: 3879,
                    easySolved: 47,
                    totalEasy: 933,
                    mediumSolved: 32,
                    totalMedium: 2030,
                    hardSolved: 5,
                    totalHard: 916,
                    ranking: 1689866,
                    isFallback: true
                });
            } finally {
                setLoadingLeetCode(false);
            }
        };

        const fetchGfg = async () => {
             try {
                 const response = await fetch('https://gfgstatscard.vercel.app/luckyyad?raw=true');
                 if (!response.ok) throw new Error("API not okay");
                 const data = await response.json();
                 if (data && data.userHandle) {
                     setGfgStats(data);
                 } else {
                     throw new Error("Invalid GFG data format");
                 }
             } catch (error) {
                 console.error("Failed to fetch GFG stats, using fallback", error);
                 // Fallback static data if API is down or blocked by CORS
                 setGfgStats({
                     total_problems_solved: 154,
                     total_score: 510,
                     Basic: 60,
                     School: 15,
                     Easy: 52,
                     Medium: 20,
                     Hard: 7,
                     isFallback: true
                 });
             } finally {
                 setLoadingGfg(false);
             }
        };

        fetchLeetCode();
        fetchGfg();
    }, []);

    // Enhanced Progress Ring with glow effect
    const ProgressRing = ({ radius, stroke, progress, total, color, children }) => {
        const normalizedRadius = radius - stroke * 2;
        const circumference = normalizedRadius * 2 * Math.PI;
        const validTotal = total > 0 ? total : 1; 
        const offset = circumference - (Math.min(progress, validTotal) / validTotal) * circumference;

        return (
            <div style={{ position: 'relative', width: radius * 2, height: radius * 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* Glow behind the ring */}
                <div style={{
                    position: 'absolute', inset: 0,
                    background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
                    opacity: 0.15, filter: 'blur(15px)', borderRadius: '50%'
                }} />
                
                <svg height={radius * 2} width={radius * 2} style={{ transform: 'rotate(-90deg)', filter: 'drop-shadow(0px 0px 4px rgba(0,0,0,0.5))' }}>
                    <circle
                        stroke="var(--bg-secondary)"
                        fill="transparent"
                        strokeWidth={stroke}
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                    />
                    <motion.circle
                        stroke={color}
                        fill="transparent"
                        strokeWidth={stroke}
                        strokeDasharray={circumference + ' ' + circumference}
                        style={{ strokeDashoffset: circumference }}
                        strokeLinecap="round"
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset: offset }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
                    />
                </svg>
                <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2 }}>
                    {children}
                </div>
            </div>
        );
    };

    // Compact Linear Progress
    const LinearProgress = ({ label, value, total, color }) => {
        const percentage = total > 0 ? (value / total) * 100 : Math.min((value / 200) * 100, 100);
        return (
            <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    <span style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: color, display: 'inline-block', boxShadow: `0 0 8px ${color}` }}></span>
                        {label}
                    </span>
                    <span>
                        <span style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.9rem' }}>
                            <CountUp end={value || 0} duration={2.5} />
                        </span> 
                        {total > 0 && <span style={{ opacity: 0.4, fontSize: '0.75rem' }}> / {total}</span>}
                    </span>
                </div>
                <div style={{ height: '6px', background: 'var(--bg-secondary)', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.03)' }}>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                        style={{ 
                            height: '100%', 
                            background: `linear-gradient(90deg, ${color}dd, ${color})`, 
                            borderRadius: '10px',
                            boxShadow: `0 0 10px ${color}88`
                        }}
                    />
                </div>
            </div>
        );
    };

    return (
        <section id="coding-profiles" className="section-padding" style={{ position: 'relative' }}>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h2 className="section-title">
                        <span>05.</span> Coding Profiles
                    </h2>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                    
                    {/* LeetCode Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, scale: 1.01 }}
                        transition={{ duration: 0.4, type: 'spring', stiffness: 100 }}
                        className="glass-card"
                        style={{ 
                            padding: '2rem', 
                            borderRadius: '20px', 
                            display: 'flex', flexDirection: 'column', gap: '1.5rem',
                            borderTop: '1px solid rgba(255, 161, 22, 0.3)',
                            background: 'linear-gradient(145deg, rgba(25,25,25,0.6) 0%, rgba(10,10,10,0.8) 100%)',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                        }}
                    >
                        {/* Header */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ 
                                    background: 'linear-gradient(135deg, rgba(255, 161, 22, 0.2), rgba(255, 161, 22, 0.05))', 
                                    padding: '10px', borderRadius: '14px', color: '#FFA116',
                                    border: '1px solid rgba(255, 161, 22, 0.2)'
                                }}>
                                    <Code2 size={24} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', margin: 0, fontWeight: 700 }}>LeetCode</h3>
                                    {leetCodeStats && !loadingLeetCode && (
                                        <div style={{ color: 'var(--accent-primary)', fontSize: '0.8rem', marginTop: '0.2rem', fontWeight: 600 }}>
                                            <Award size={12} style={{display: 'inline', marginRight: '4px', transform: 'translateY(-1px)'}} /> 
                                            Rank: {leetCodeStats.ranking?.toLocaleString() || 'N/A'}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <motion.a 
                                whileHover={{ scale: 1.1, rotate: 5, color: '#FFA116' }}
                                href="https://leetcode.com/u/Luckyyadav302/" 
                                target="_blank" rel="noopener noreferrer" 
                                style={{ color: 'var(--text-secondary)', padding: '0.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '10px' }}
                            >
                                <ExternalLink size={18} />
                            </motion.a>
                        </div>

                        {loadingLeetCode ? (
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '150px', gap: '1rem' }}>
                                <div style={{ width: '30px', height: '30px', border: '3px solid rgba(255, 161, 22, 0.2)', borderTopColor: '#FFA116', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
                                <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', animation: 'pulse 1.5s infinite' }}>Loading...</span>
                            </div>
                        ) : leetCodeStats ? (
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', justifyContent: 'center' }}>
                                {/* Left Ring */}
                                <div style={{ flexShrink: 0 }}>
                                    <ProgressRing radius={60} stroke={8} progress={leetCodeStats.totalSolved} total={leetCodeStats.totalQuestions} color="#FFA116">
                                        <span style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1 }}>
                                            <CountUp end={leetCodeStats.totalSolved} duration={2.5} />
                                        </span>
                                        <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.3rem', fontWeight: 600, letterSpacing: '0.5px' }}>SOLVED</span>
                                    </ProgressRing>
                                </div>
                                
                                {/* Right Bars */}
                                <div style={{ flex: '1 1 180px', display: 'flex', flexDirection: 'column', gap: '1rem', background: 'rgba(0,0,0,0.2)', padding: '1.25rem', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.02)' }}>
                                    <LinearProgress label="Easy" value={leetCodeStats.easySolved} total={leetCodeStats.totalEasy} color="#00b8a3" />
                                    <LinearProgress label="Medium" value={leetCodeStats.mediumSolved} total={leetCodeStats.totalMedium} color="#ffc01e" />
                                    <LinearProgress label="Hard" value={leetCodeStats.hardSolved} total={leetCodeStats.totalHard} color="#ef4743" />
                                </div>
                            </div>
                        ) : (
                            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <p style={{ color: '#ef4743' }}>Failed to load LeetCode data.</p>
                            </div>
                        )}
                    </motion.div>

                    {/* GeeksForGeeks Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, scale: 1.01 }}
                        transition={{ duration: 0.4, type: 'spring', stiffness: 100, delay: 0.1 }}
                        className="glass-card"
                        style={{ 
                            padding: '2rem', 
                            borderRadius: '20px', 
                            display: 'flex', flexDirection: 'column', gap: '1.5rem',
                            borderTop: '1px solid rgba(47, 141, 70, 0.3)',
                            background: 'linear-gradient(145deg, rgba(25,25,25,0.6) 0%, rgba(10,10,10,0.8) 100%)',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                        }}
                    >
                        {/* Header */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ 
                                    background: 'linear-gradient(135deg, rgba(47, 141, 70, 0.2), rgba(47, 141, 70, 0.05))', 
                                    padding: '10px', borderRadius: '14px', color: '#2f8d46',
                                    border: '1px solid rgba(47, 141, 70, 0.2)'
                                }}>
                                    <Terminal size={24} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', margin: 0, fontWeight: 700 }}>GeeksForGeeks</h3>
                                    {gfgStats && !loadingGfg && (
                                        <div style={{ color: '#2f8d46', fontSize: '0.8rem', marginTop: '0.2rem', fontWeight: 600 }}>
                                            <Zap size={12} style={{display: 'inline', marginRight: '4px', transform: 'translateY(-1px)'}} /> 
                                            Score: {gfgStats.total_score || 0}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <motion.a 
                                whileHover={{ scale: 1.1, rotate: 5, color: '#2f8d46' }}
                                href="https://www.geeksforgeeks.org/profile/luckyyad?tab=activity" 
                                target="_blank" rel="noopener noreferrer" 
                                style={{ color: 'var(--text-secondary)', padding: '0.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '10px' }}
                            >
                                <ExternalLink size={18} />
                            </motion.a>
                        </div>

                        {loadingGfg ? (
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '150px', gap: '1rem' }}>
                                <div style={{ width: '30px', height: '30px', border: '3px solid rgba(47, 141, 70, 0.2)', borderTopColor: '#2f8d46', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
                                <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', animation: 'pulse 1.5s infinite' }}>Loading...</span>
                            </div>
                        ) : gfgStats ? (
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', justifyContent: 'center' }}>
                                {/* Left Ring */}
                                <div style={{ flexShrink: 0 }}>
                                    <ProgressRing radius={60} stroke={8} progress={gfgStats.total_problems_solved} total={gfgStats.total_problems_solved ? Math.max(gfgStats.total_problems_solved * 2, 400) : 400} color="#2f8d46">
                                        <span style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1 }}>
                                            <CountUp end={gfgStats.total_problems_solved} duration={2.5} />
                                        </span>
                                        <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.3rem', fontWeight: 600, letterSpacing: '0.5px' }}>SOLVED</span>
                                    </ProgressRing>
                                </div>
                                
                                {/* Right Bars */}
                                <div style={{ flex: '1 1 180px', display: 'flex', flexDirection: 'column', gap: '1rem', background: 'rgba(0,0,0,0.2)', padding: '1.25rem', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.02)' }}>
                                    <LinearProgress label="Basic/Sch." value={(gfgStats.Basic || 0) + (gfgStats.School || 0)} total={0} color="#00b8a3" />
                                    <LinearProgress label="Easy" value={gfgStats.Easy || 0} total={0} color="#2f8d46" />
                                    <LinearProgress label="Medium" value={gfgStats.Medium || 0} total={0} color="#ffc01e" />
                                    <LinearProgress label="Hard" value={gfgStats.Hard || 0} total={0} color="#ef4743" />
                                </div>
                            </div>
                        ) : (
                            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <p style={{ color: '#ef4743' }}>Failed to load GeeksForGeeks data.</p>
                            </div>
                        )}
                    </motion.div>

                </div>
            </div>

            <style>{`
                @keyframes spin { 
                    0% { transform: rotate(0deg); } 
                    100% { transform: rotate(360deg); } 
                }
                @keyframes pulse {
                    0% { opacity: 0.6; }
                    50% { opacity: 1; }
                    100% { opacity: 0.6; }
                }
            `}</style>
        </section>
    );
}
