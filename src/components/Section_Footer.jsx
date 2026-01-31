import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, ArrowUpRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from './ui/Reveal';

const Section_Footer = () => {
    return (
        <footer style={{ background: 'var(--brand-black)', color: 'white', overflow: 'hidden' }}>
            {/* Top Massive CTA Section */}
            <div style={{
                padding: '6rem 2rem',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
            }}>
                <Reveal>
                    <h2 style={{
                        fontSize: 'clamp(3rem, 10vw, 8rem)',
                        lineHeight: 0.9,
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        marginBottom: '3rem',
                        letterSpacing: '-2px'
                    }}>
                        Ready to<br />
                        <span style={{ color: 'var(--brand-orange)' }}>Transform?</span>
                    </h2>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Link to="/contact" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '1rem',
                            padding: '1.5rem 4rem', background: 'white',
                            color: 'var(--brand-black)', fontWeight: 900, textTransform: 'uppercase',
                            borderRadius: '50px', textDecoration: 'none',
                            fontSize: '1.2rem',
                            transition: 'transform 0.2s',
                            marginBottom: '4rem'
                        }}
                            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            Book Consultation <ArrowUpRight size={24} />
                        </Link>
                    </div>
                </Reveal>

                {/* Stats Row */}
                <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    width: '100%', maxWidth: '1000px', gap: '2rem'
                }}>
                    {[
                        { val: "98%", label: "Success Rate" },
                        { val: "10k+", label: "Procedures" },
                        { val: "5/5", label: "Happiness", icon: <Star size={20} fill="var(--brand-yellow)" stroke="none" /> }
                    ].map((stat, i) => (
                        <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Reveal delay={i * 0.2}>
                                <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--brand-white)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                    {stat.val} {stat.icon}
                                </div>
                                <div style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', letterSpacing: '2px' }}>
                                    {stat.label}
                                </div>
                            </Reveal>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Links Section */}
            <div style={{ padding: '4rem 2rem 2rem', maxWidth: 'var(--container-width)', margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>

                    {/* Brand */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase' }}>
                            <div style={{ width: '20px', height: '20px', background: 'var(--brand-orange)', borderRadius: '50%' }}></div>
                            Hair Cure
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                            Diagnostic Estimator, Meet the Architects, and a World-Class Clinical Team dedicated to engineering your confidence.
                        </p>
                    </div>

                    {/* Links Grid for Mobile */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div>
                            <h4 style={{ color: 'white', marginBottom: '1.5rem', textTransform: 'uppercase', fontWeight: 800 }}>Explore</h4>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li><Link to="/" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Home</Link></li>
                                <li><Link to="/" state={{ scrollToServices: true }} style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Services</Link></li>
                                <li><Link to="/results" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Results</Link></li>
                                <li><Link to="/about" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>About</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ color: 'white', marginBottom: '1.5rem', textTransform: 'uppercase', fontWeight: 800 }}>Legal</h4>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li><Link to="/contact" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Contact</Link></li>
                                <li><span style={{ color: 'rgba(255,255,255,0.6)', cursor: 'default' }}>Privacy</span></li>
                                <li><span style={{ color: 'rgba(255,255,255,0.6)', cursor: 'default' }}>Terms</span></li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1.5rem', textTransform: 'uppercase', fontWeight: 800 }}>Visit Us</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'rgba(255,255,255,0.6)' }}>
                            <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><MapPin size={16} /> Edappazhanji, Trivandrum</p>
                            <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Phone size={16} /> +91 95671 01002</p>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                <a href="https://instagram.com" className="social-icon" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Instagram size={20} /></a>
                                <a href="https://facebook.com" className="social-icon" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Facebook size={20} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>
                    <p>&copy; {new Date().getFullYear()} Hai Cure.</p>
                    <p>Designed with Care.</p>
                </div>
            </div>
        </footer>
    );
};

export default Section_Footer;
