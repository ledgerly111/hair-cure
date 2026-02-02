import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Instagram, Facebook, ArrowUpRight, Star, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from './ui/Reveal';
import { AnimatedCounter } from './ui/AnimatedCounter';
import { GradientText } from './ui/GradientText';
import { StaggerContainer, StaggerItem } from './ui/StaggerContainer';

const Section_Footer = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const stats = [
        { val: "98%", label: "Success Rate" },
        { val: "10k+", label: "Procedures" },
        { val: "5/5", label: "Happiness", icon: <Star size={isMobile ? 16 : 20} fill="var(--brand-yellow)" stroke="none" /> }
    ];

    const exploreLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/', state: { scrollToServices: true } },
        { name: 'Results', path: '/results' },
        { name: 'About', path: '/about' }
    ];

    const legalLinks = [
        { name: 'Contact', path: '/contact' },
        { name: 'Privacy', path: '#' },
        { name: 'Terms', path: '#' }
    ];

    return (
        <footer style={{ background: 'var(--brand-black)', color: 'white', overflow: 'hidden' }}>
            {/* Top Massive CTA Section */}
            <div style={{
                padding: isMobile ? '4rem 1.5rem' : '6rem 2rem',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative'
            }}>
                {/* Background glow */}
                {!isMobile && (
                    <motion.div
                        style={{
                            position: 'absolute',
                            width: '600px',
                            height: '600px',
                            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%)',
                            borderRadius: '50%',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                )}

                <div style={{ position: 'relative', zIndex: 1 }}>
                    <Reveal>
                        <motion.span
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.5rem 1rem',
                                background: 'rgba(249, 115, 22, 0.2)',
                                borderRadius: '30px',
                                fontSize: '0.8rem',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                color: 'var(--brand-orange)',
                                marginBottom: '1.5rem'
                            }}
                            whileHover={isMobile ? {} : { scale: 1.05 }}
                        >
                            <Sparkles size={14} /> Start Your Journey
                        </motion.span>

                        <h2 style={{
                            fontSize: isMobile ? '2.5rem' : 'clamp(3rem, 10vw, 8rem)',
                            lineHeight: 0.9,
                            fontWeight: 900,
                            textTransform: 'uppercase',
                            marginBottom: '2rem',
                            letterSpacing: '-2px'
                        }}>
                            Ready to<br />
                            <GradientText>Transform?</GradientText>
                        </h2>

                        <motion.div 
                            style={{ display: 'flex', justifyContent: 'center' }}
                            whileHover={isMobile ? {} : { scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link to="/contact" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                                padding: isMobile ? '1.25rem 2.5rem' : '1.5rem 4rem', 
                                background: 'white',
                                color: 'var(--brand-black)', 
                                fontWeight: 900, 
                                textTransform: 'uppercase',
                                borderRadius: '50px', 
                                textDecoration: 'none',
                                fontSize: isMobile ? '1rem' : '1.2rem',
                                transition: 'all 0.3s',
                                marginBottom: '3rem',
                                boxShadow: '0 10px 40px rgba(249, 115, 22, 0.3)'
                            }}>
                                Book Consultation <ArrowUpRight size={20} />
                            </Link>
                        </motion.div>
                    </Reveal>

                    {/* Stats Row */}
                    <StaggerContainer
                        style={{
                            display: 'grid', 
                            gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : 'repeat(auto-fit, minmax(200px, 1fr))',
                            width: '100%', 
                            maxWidth: '1000px', 
                            gap: isMobile ? '0.75rem' : '2rem',
                            margin: '0 auto'
                        }}
                        staggerDelay={0.1}
                    >
                        {stats.map((stat, i) => (
                            <StaggerItem key={i}>
                                <motion.div 
                                    style={{ 
                                        display: 'flex', 
                                        flexDirection: 'column', 
                                        alignItems: 'center',
                                        padding: isMobile ? '1rem 0.5rem' : '1.5rem',
                                        borderRadius: '16px',
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid rgba(255,255,255,0.05)'
                                    }}
                                    whileHover={isMobile ? {} : { 
                                        background: 'rgba(255,255,255,0.08)',
                                        y: -5
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <div style={{ 
                                        fontSize: isMobile ? '1.75rem' : '3rem', 
                                        fontWeight: 900, 
                                        color: 'var(--brand-white)', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        gap: '4px',
                                        marginBottom: '0.5rem'
                                    }}>
                                        <AnimatedCounter value={stat.val} />
                                        {stat.icon}
                                    </div>
                                    <div style={{ 
                                        fontSize: isMobile ? '0.65rem' : '0.9rem', 
                                        fontWeight: 700, 
                                        textTransform: 'uppercase', 
                                        color: 'rgba(255,255,255,0.5)', 
                                        letterSpacing: '1px'
                                    }}>
                                        {stat.label}
                                    </div>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </div>

            {/* Bottom Links Section */}
            <div style={{ 
                padding: isMobile ? '3rem 1.5rem 1.5rem' : '4rem 2rem 2rem', 
                maxWidth: 'var(--container-width)', 
                margin: '0 auto' 
            }}>
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))', 
                    gap: isMobile ? '2rem' : '3rem', 
                    marginBottom: '3rem' 
                }}>
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0 }}
                    >
                        <motion.div 
                            style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '10px', 
                                marginBottom: '1rem', 
                                fontSize: '1.5rem', 
                                fontWeight: 900, 
                                textTransform: 'uppercase' 
                            }}
                            whileHover={isMobile ? {} : { x: 5 }}
                        >
                            <div style={{ 
                                width: '20px', 
                                height: '20px', 
                                background: 'var(--brand-orange)', 
                                borderRadius: '50%' 
                            }} />
                            Hair Cure
                        </motion.div>
                        <p style={{ 
                            color: 'rgba(255,255,255,0.6)', 
                            lineHeight: 1.6,
                            fontSize: isMobile ? '0.9rem' : '1rem'
                        }}>
                            Diagnostic Estimator, Meet the Architects, and a World-Class Clinical Team dedicated to engineering your confidence.
                        </p>
                    </motion.div>

                    {/* Links Grid */}
                    <motion.div 
                        style={{ 
                            display: 'grid', 
                            gridTemplateColumns: '1fr 1fr', 
                            gap: '2rem' 
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div>
                            <h4 style={{ 
                                color: 'white', 
                                marginBottom: '1rem', 
                                textTransform: 'uppercase', 
                                fontWeight: 800,
                                fontSize: '0.9rem'
                            }}>
                                Explore
                            </h4>
                            <ul style={{ 
                                listStyle: 'none', 
                                padding: 0, 
                                display: 'flex', 
                                flexDirection: 'column', 
                                gap: '0.75rem' 
                            }}>
                                {exploreLinks.map((link, i) => (
                                    <motion.li 
                                        key={i}
                                        whileHover={isMobile ? {} : { x: 5 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        <Link 
                                            to={link.path} 
                                            state={link.state}
                                            style={{ 
                                                color: 'rgba(255,255,255,0.6)', 
                                                textDecoration: 'none',
                                                fontSize: isMobile ? '0.85rem' : '0.95rem'
                                            }}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ 
                                color: 'white', 
                                marginBottom: '1rem', 
                                textTransform: 'uppercase', 
                                fontWeight: 800,
                                fontSize: '0.9rem'
                            }}>
                                Legal
                            </h4>
                            <ul style={{ 
                                listStyle: 'none', 
                                padding: 0, 
                                display: 'flex', 
                                flexDirection: 'column', 
                                gap: '0.75rem' 
                            }}>
                                {legalLinks.map((link, i) => (
                                    <motion.li 
                                        key={i}
                                        whileHover={isMobile ? {} : { x: 5 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        <Link 
                                            to={link.path}
                                            style={{ 
                                                color: 'rgba(255,255,255,0.6)', 
                                                textDecoration: 'none',
                                                fontSize: isMobile ? '0.85rem' : '0.95rem'
                                            }}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h4 style={{ 
                            color: 'white', 
                            marginBottom: '1rem', 
                            textTransform: 'uppercase', 
                            fontWeight: 800,
                            fontSize: '0.9rem'
                        }}>
                            Visit Us
                        </h4>
                        <div style={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            gap: '0.75rem', 
                            color: 'rgba(255,255,255,0.6)',
                            fontSize: isMobile ? '0.85rem' : '0.95rem'
                        }}>
                            <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <MapPin size={14} /> Edappazhanji, Trivandrum
                            </p>
                            <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Phone size={14} /> +91 95671 01002
                            </p>
                            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.75rem' }}>
                                <motion.a 
                                    href="https://instagram.com" 
                                    style={{ 
                                        background: 'rgba(255,255,255,0.1)', 
                                        color: 'white', 
                                        width: '40px', 
                                        height: '40px', 
                                        borderRadius: '50%', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center'
                                    }}
                                    whileHover={isMobile ? {} : { 
                                        background: 'var(--brand-orange)', 
                                        scale: 1.1,
                                        y: -3
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Instagram size={18} />
                                </motion.a>
                                <motion.a 
                                    href="https://facebook.com" 
                                    style={{ 
                                        background: 'rgba(255,255,255,0.1)', 
                                        color: 'white', 
                                        width: '40px', 
                                        height: '40px', 
                                        borderRadius: '50%', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center'
                                    }}
                                    whileHover={isMobile ? {} : { 
                                        background: 'var(--brand-orange)', 
                                        scale: 1.1,
                                        y: -3
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Facebook size={18} />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div 
                    style={{ 
                        borderTop: '1px solid rgba(255,255,255,0.1)', 
                        paddingTop: '1.5rem', 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        flexWrap: 'wrap', 
                        gap: '0.5rem', 
                        color: 'rgba(255,255,255,0.4)', 
                        fontSize: isMobile ? '0.75rem' : '0.9rem' 
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <p>&copy; {new Date().getFullYear()} Hair Cure Transplant & Cosmetic Centre.</p>
                    <p>Designed with Care.</p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Section_Footer;
