import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Star, Sparkles, ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Reveal } from '../components/ui/Reveal';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';
import { MagneticButton } from '../components/ui/MagneticButton';
import { GradientText } from '../components/ui/GradientText';
import { FloatingElements } from '../components/ui/FloatingElements';
import { StaggerContainer, StaggerItem } from '../components/ui/StaggerContainer';
import { TextReveal } from '../components/ui/TextReveal';
import '../styles/Home.css';

import Section_Architects from '../components/Section_Architects';
import Section_Estimator from '../components/Section_Estimator';

const Home = () => {
    const location = useLocation();
    const { scrollYProgress } = useScroll();
    const [isMobile, setIsMobile] = useState(false);
    
    // Check if mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    
    // Parallax effects - disabled on mobile
    const heroY = useTransform(scrollYProgress, [0, 0.2], [0, isMobile ? 0 : -50]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

    useEffect(() => {
        if (location.state?.scrollToServices || location.hash === '#services-section') {
            const section = document.getElementById('services-section');
            if (section) {
                setTimeout(() => {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }, [location]);

    // Simplified animations for mobile
    const fadeInUp = {
        initial: { opacity: 0, y: isMobile ? 15 : 30 },
        animate: { opacity: 1, y: 0 },
        transition: { 
            duration: isMobile ? 0.4 : 0.6,
            ease: [0.22, 1, 0.36, 1]
        }
    };

    const services = [
        { id: 'transplant', title: "Hair Transplant", desc: "FUE & FUT Techniques" },
        { id: 'beard', title: "Beard Transplant", desc: "Facial Hair Restoration" },
        { id: 'prp', title: "PRP Therapy", desc: "Platelet-Rich Plasma" },
        { id: 'smp', title: "Scalp Micropigmentation", desc: "Cosmetic Density" },
        { id: 'cosmetic', title: "Cosmetic Care", desc: "Non-Surgical Solutions" },
        { id: 'dandruff', title: "Dandruff Control", desc: "Clinical Treatment" }
    ];

    const stats = [
        { val: "4.9/5", label: "Patient Rating" },
        { val: "1000+", label: "Successful Grafts" },
        { val: "100%", label: "Natural Results" },
        { val: "24/7", label: "Care Support" }
    ];

    const testimonials = [
        { 
            text: "The results exceeded my expectations. The team was professional and caring throughout the entire process.", 
            author: "Rahul K.",
            rating: 5 
        },
        { 
            text: "Best decision I ever made. My confidence is back and I couldn't be happier with the natural results.", 
            author: "Arun M.",
            rating: 5 
        },
        { 
            text: "From consultation to follow-up, the care was exceptional. Highly recommend Hair Cure to anyone.", 
            author: "Vikram S.",
            rating: 5 
        }
    ];

    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero">
                <div className="bg-grid"></div>
                {!isMobile && <FloatingElements count={3} color="var(--brand-orange)" />}

                <motion.div 
                    className="hero-content-wrapper"
                    style={{ y: heroY, opacity: heroOpacity }}
                >
                    {/* Left Text Side */}
                    <div className="hero-text-side">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="hero-badge"
                        >
                            <span className="badge-text">
                                <Sparkles size={14} /> Premium Hair Restoration
                            </span>
                        </motion.div>

                        <Reveal delay={0.2}>
                            <h1 className="hero-title">
                                <TextReveal delay={0.3}>Restore.</TextReveal>
                                <br />
                                <GradientText className="hero-gradient-text">Confidence.</GradientText>
                                <br />
                                <TextReveal delay={0.5}>Naturally.</TextReveal>
                            </h1>
                        </Reveal>

                        <Reveal delay={0.4}>
                            <motion.p 
                                className="hero-subtitle"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                Advanced clinical engineering meets architectural aesthetics. 
                                We design hairlines that are structural masterpieces.
                            </motion.p>
                        </Reveal>

                        <Reveal delay={0.6}>
                            <MagneticButton 
                                className="btn-brutal magnetic-hover"
                                strength={isMobile ? 0 : 0.2}
                            >
                                <Link to="/contact" className="btn-link">
                                    Start Consultation <ArrowRight className="btn-icon" size={20} />
                                </Link>
                            </MagneticButton>
                        </Reveal>
                    </div>

                    {/* Right Image Side */}
                    <motion.div 
                        className="hero-image-container-brutal"
                    >
                        {/* Animated background blob - only on desktop */}
                        {!isMobile && (
                            <motion.div
                                style={{
                                    position: 'absolute',
                                    width: '80%',
                                    height: '80%',
                                    background: 'radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%)',
                                    borderRadius: '50%',
                                    filter: 'blur(60px)',
                                }}
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.5, 0.8, 0.5],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            />
                        )}
                        
                        <Reveal delay={0.3}>
                            <motion.div 
                                className="hero-image-wrapper"
                                whileHover={isMobile ? {} : { scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <img
                                    src="/hero_woman_art.png"
                                    alt="Hair Cure - Premium Hair Restoration"
                                    className="hero-image"
                                    loading="eager"
                                />
                            </motion.div>
                        </Reveal>
                    </motion.div>
                </motion.div>

                {/* Scroll indicator - desktop only */}
                {!isMobile && (
                    <motion.div 
                        className="scroll-indicator"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.5 }}
                    >
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <div className="scroll-line"></div>
                        </motion.div>
                    </motion.div>
                )}
            </section>

            {/* Stats Section */}
            <section className="stats-brutal">
                <StaggerContainer className="stats-grid" staggerDelay={isMobile ? 0.08 : 0.15}>
                    {stats.map((stat, i) => (
                        <StaggerItem key={i}>
                            <motion.div 
                                className="stat-box"
                                whileHover={isMobile ? {} : { y: -10 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                <motion.div 
                                    className="stat-number"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                                >
                                    <AnimatedCounter value={stat.val} />
                                </motion.div>
                                <div className="stat-label">{stat.label}</div>
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </section>

            {/* Services Section */}
            <section id="services-section" className="services-section" style={{ background: 'white', padding: 0 }}>
                <motion.div 
                    className="section-header"
                    initial={{ opacity: 0, x: isMobile ? -15 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: isMobile ? 0.4 : 0.6 }}
                >
                    <h2 className="section-title">
                        <GradientText>Services</GradientText>
                    </h2>
                    <p className="section-subtitle">Comprehensive hair restoration solutions</p>
                </motion.div>

                <div className="services-list-brutal">
                    {services.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: isMobile ? -20 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.05, duration: 0.4 }}
                        >
                            <Link
                                to="/services"
                                state={{ serviceId: item.id }}
                                className="service-item-brutal"
                            >
                                <motion.div
                                    whileHover={isMobile ? {} : { x: 10 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                    style={{ flex: 1 }}
                                >
                                    <h3 className="service-title">{item.title}</h3>
                                    <p className="service-desc">{item.desc}</p>
                                </motion.div>
                                <motion.div
                                    className="service-arrow-wrapper"
                                    whileHover={isMobile ? {} : { scale: 1.2, rotate: 0 }}
                                    initial={{ rotate: 0 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <ChevronRight size={28} className="service-arrow" />
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* NEW SECTIONS: Estimator & Architects */}
            <Section_Estimator />
            <Section_Architects />

            {/* Why Us Section */}
            <section className="why-us-section" style={{ 
                display: 'grid', 
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', 
                minHeight: isMobile ? 'auto' : '600px', 
                borderBottom: 'var(--border-thick)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {!isMobile && (
                    <motion.div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.05) 0%, transparent 50%)',
                        }}
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                )}

                <motion.div 
                    style={{ 
                        background: 'var(--brand-black)', 
                        color: 'white', 
                        padding: isMobile ? '3rem 1.5rem' : '4rem 2rem', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center',
                        position: 'relative',
                        zIndex: 1
                    }}
                    initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: isMobile ? 0.5 : 0.8 }}
                >
                    <motion.h2 
                        style={{ 
                            fontSize: isMobile ? '2rem' : '3rem', 
                            fontWeight: 900, 
                            textTransform: 'uppercase', 
                            marginBottom: '1.5rem'
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Why Choose<br />
                        <GradientText>Hair Cure?</GradientText>
                    </motion.h2>
                    
                    <motion.p 
                        style={{ 
                            fontSize: isMobile ? '1rem' : '1.2rem', 
                            lineHeight: 1.6, 
                            opacity: 0.8, 
                            marginBottom: '2rem' 
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        We don't just restore hair; we engineer confidence. Our clinic uses state-of-the-art diagnostic tools to blueprint your perfect hairline before touching a single follicle.
                    </motion.p>
                    
                    <StaggerContainer 
                        style={{ listStyle: 'none', display: 'grid', gap: isMobile ? '1rem' : '1.5rem' }} 
                        staggerDelay={0.1}
                    >
                        {[
                            { text: 'Advanced Diagnostics' },
                            { text: 'Master Surgeons' },
                            { text: 'Lifetime Guarantee' }
                        ].map((feat, i) => (
                            <StaggerItem key={i}>
                                <motion.li 
                                    style={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        gap: '1rem', 
                                        fontSize: isMobile ? '1rem' : '1.1rem', 
                                        fontWeight: 700, 
                                        textTransform: 'uppercase' 
                                    }}
                                    whileHover={isMobile ? {} : { x: 10 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="feature-item"
                                >
                                    <motion.div 
                                        style={{ 
                                            width: '10px', 
                                            height: '10px', 
                                            background: 'var(--brand-pink)',
                                            borderRadius: '2px',
                                            flexShrink: 0
                                        }}
                                        whileHover={{ rotate: 180, scale: 1.2 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    />
                                    {feat.text}
                                </motion.li>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </motion.div>
                
                <motion.div 
                    style={{ 
                        background: '#d0f0fd', 
                        position: 'relative', 
                        overflow: 'hidden', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        padding: isMobile ? '2rem' : '0',
                        minHeight: isMobile ? '300px' : 'auto'
                    }}
                    initial={{ opacity: 0, x: isMobile ? 0 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: isMobile ? 0.5 : 0.8 }}
                >
                    {!isMobile && <FloatingElements count={2} color="var(--brand-orange)" />}
                    <motion.img 
                        src="/happy_patient_art.png" 
                        alt="Patient" 
                        style={{ 
                            maxWidth: isMobile ? '70%' : '80%', 
                            filter: 'none', 
                            position: 'relative', 
                            zIndex: 1 
                        }}
                        whileHover={isMobile ? {} : { scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                </motion.div>
            </section>

            {/* Testimonial Section */}
            <section className="testimonial-section" style={{ 
                background: 'var(--brand-offwhite)',
                padding: isMobile ? '3rem 0' : '6rem 2rem'
            }}>
                <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: isMobile ? '0 1rem' : '0' }}>
                    <Reveal>
                        <div style={{ textAlign: 'center', marginBottom: isMobile ? '2rem' : '4rem' }}>
                            <h2 className="section-title" style={{ fontSize: isMobile ? '1.75rem' : '2.5rem' }}>
                                What Our <GradientText>Patients</GradientText> Say
                            </h2>
                        </div>
                    </Reveal>
                    
                    {/* Mobile: Horizontal scroll / Desktop: Grid */}
                    <div className={isMobile ? 'testimonial-cards' : undefined}>
                        <StaggerContainer 
                            style={isMobile ? undefined : { 
                                display: 'grid', 
                                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                                gap: '2rem' 
                            }}
                            staggerDelay={0.1}
                        >
                            {testimonials.map((testimonial, i) => (
                                <StaggerItem key={i} className={isMobile ? 'testimonial-card' : undefined}>
                                    <motion.div
                                        style={{
                                            background: 'white',
                                            padding: isMobile ? '1.5rem' : '2.5rem',
                                            borderRadius: '16px',
                                            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                            height: isMobile ? 'auto' : '100%',
                                        }}
                                        whileHover={isMobile ? {} : { 
                                            y: -10,
                                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        <div style={{ marginBottom: '1rem' }}>
                                            {[...Array(testimonial.rating)].map((_, j) => (
                                                <Star 
                                                    key={j} 
                                                    size={isMobile ? 16 : 18} 
                                                    fill="var(--brand-orange)" 
                                                    color="var(--brand-orange)"
                                                    style={{ marginRight: '4px' }}
                                                />
                                            ))}
                                        </div>
                                        <p style={{ 
                                            fontSize: isMobile ? '1rem' : '1.1rem', 
                                            lineHeight: 1.6, 
                                            color: '#444', 
                                            marginBottom: '1.5rem' 
                                        }}>
                                            "{testimonial.text}"
                                        </p>
                                        <p style={{ fontWeight: 800, color: 'var(--brand-black)' }}>
                                            — {testimonial.author}
                                        </p>
                                    </motion.div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Swipe indicator for mobile */}
                    {isMobile && (
                        <div className="swipe-indicator">
                            {testimonials.map((_, i) => (
                                <div key={i} className={`swipe-dot ${i === 0 ? 'active' : ''}`} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Home;
