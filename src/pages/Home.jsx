import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Check, Star, MessageSquare, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
    
    // Parallax effects
    const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

    useEffect(() => {
        if (location.state?.scrollToServices || location.hash === '#services-section') {
            const section = document.getElementById('services-section');
            if (section) {
                setTimeout(() => {
                    section.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <div className="home-container">
            {/* Enhanced Brutalist Hero */}
            <section className="hero">
                <div className="bg-grid"></div>
                <FloatingElements count={3} color="var(--brand-orange)" />

                <motion.div 
                    className="hero-content-wrapper"
                    style={{ y: heroY, opacity: heroOpacity }}
                >
                    {/* Left Text Side */}
                    <div className="hero-text-side">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
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
                                transition={{ delay: 0.6, duration: 0.8 }}
                            >
                                Advanced clinical engineering meets architectural aesthetics. 
                                We design hairlines that are structural masterpieces.
                            </motion.p>
                        </Reveal>

                        <Reveal delay={0.6}>
                            <MagneticButton 
                                className="btn-brutal magnetic-hover"
                                strength={0.2}
                            >
                                <Link to="/contact" className="btn-link">
                                    Start Consultation <ArrowRight className="btn-icon" />
                                </Link>
                            </MagneticButton>
                        </Reveal>
                    </div>

                    {/* Right Image Side */}
                    <motion.div 
                        className="hero-image-container-brutal" 
                        style={{ 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center',
                            position: 'relative'
                        }}
                    >
                        {/* Animated background blob */}
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
                        
                        <Reveal delay={0.3}>
                            <motion.div 
                                className="hero-image-wrapper"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <img
                                    src="/hero_woman_art.png"
                                    alt="Hair Cure - Premium Hair Restoration"
                                    className="hero-image"
                                />
                            </motion.div>
                        </Reveal>
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
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
            </section>

            {/* Enhanced Stats Section */}
            <section className="stats-brutal">
                <StaggerContainer className="stats-grid" staggerDelay={0.15}>
                    {[
                        { val: "4.9/5", label: "Patient Rating", suffix: "" },
                        { val: "1000+", label: "Successful Grafts", suffix: "" },
                        { val: "100%", label: "Natural Results", suffix: "" },
                        { val: "24/7", label: "Care Support", suffix: "" }
                    ].map((stat, i) => (
                        <StaggerItem key={i}>
                            <motion.div 
                                className="stat-box"
                                whileHover={{ 
                                    y: -10,
                                    transition: { type: "spring", stiffness: 400 }
                                }}
                            >
                                <motion.div 
                                    className="stat-number"
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, type: "spring" }}
                                >
                                    <AnimatedCounter value={stat.val} />
                                </motion.div>
                                <div className="stat-label">{stat.label}</div>
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </section>

            {/* Enhanced Services Section */}
            <section id="services-section" className="services-section" style={{ background: 'white', padding: 0 }}>
                <motion.div 
                    style={{ padding: '4rem 2rem', borderBottom: 'var(--border-thin)' }}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
                        <GradientText>Services</GradientText>
                    </h2>
                    <p className="section-subtitle">Comprehensive hair restoration solutions</p>
                </motion.div>

                <div className="services-list-brutal">
                    {[
                        { id: 'transplant', title: "Hair Transplant", desc: "FUE & FUT Techniques" },
                        { id: 'beard', title: "Beard Transplant", desc: "Facial Hair Restoration" },
                        { id: 'prp', title: "PRP Therapy", desc: "Platelet-Rich Plasma" },
                        { id: 'smp', title: "Scalp Micropigmentation", desc: "Cosmetic Density" },
                        { id: 'cosmetic', title: "Cosmetic Care", desc: "Non-Surgical Solutions" },
                        { id: 'dandruff', title: "Dandruff Control", desc: "Clinical Treatment" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <Link
                                to="/services"
                                state={{ serviceId: item.id }}
                                className="service-item-brutal"
                            >
                                <motion.div
                                    whileHover={{ x: 10 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <h3 className="service-title">{item.title}</h3>
                                    <p className="service-desc">{item.desc}</p>
                                </motion.div>
                                <motion.div
                                    className="service-arrow-wrapper"
                                    whileHover={{ scale: 1.2, rotate: 0 }}
                                    initial={{ rotate: -45 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <ArrowRight size={48} className="service-arrow" />
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* NEW SECTIONS: Estimator & Architects */}
            <Section_Estimator />
            <Section_Architects />

            {/* Enhanced Why Us Section */}
            <section className="why-us-section" style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                minHeight: '600px', 
                borderBottom: 'var(--border-thick)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Animated background */}
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

                <motion.div 
                    style={{ 
                        background: 'var(--brand-black)', 
                        color: 'white', 
                        padding: '4rem 2rem', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center',
                        position: 'relative',
                        zIndex: 1
                    }}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2 
                        style={{ 
                            fontSize: '3rem', 
                            fontWeight: 900, 
                            textTransform: 'uppercase', 
                            marginBottom: '2rem'
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
                            fontSize: '1.2rem', 
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
                    
                    <StaggerContainer style={{ listStyle: 'none', display: 'grid', gap: '1.5rem' }} staggerDelay={0.1}>
                        {[
                            { icon: '✦', text: 'Advanced Diagnostics' },
                            { icon: '✦', text: 'Master Surgeons' },
                            { icon: '✦', text: 'Lifetime Guarantee' }
                        ].map((feat, i) => (
                            <StaggerItem key={i}>
                                <motion.li 
                                    style={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        gap: '1rem', 
                                        fontSize: '1.1rem', 
                                        fontWeight: 700, 
                                        textTransform: 'uppercase' 
                                    }}
                                    whileHover={{ x: 10 }}
                                    className="feature-item"
                                >
                                    <motion.div 
                                        style={{ 
                                            width: '12px', 
                                            height: '12px', 
                                            background: 'var(--brand-pink)',
                                            borderRadius: '2px'
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
                        justifyContent: 'center' 
                    }}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <FloatingElements count={2} color="var(--brand-orange)" />
                    <motion.img 
                        src="/happy_patient_art.png" 
                        alt="Patient" 
                        style={{ maxWidth: '80%', filter: 'none', position: 'relative', zIndex: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                </motion.div>
            </section>

            {/* Testimonial Section */}
            <section className="testimonial-section" style={{ padding: '6rem 2rem', background: 'var(--brand-offwhite)' }}>
                <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto' }}>
                    <Reveal>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h2 className="section-title" style={{ fontSize: '2.5rem' }}>
                                What Our <GradientText>Patients</GradientText> Say
                            </h2>
                        </div>
                    </Reveal>
                    
                    <StaggerContainer 
                        style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                            gap: '2rem' 
                        }}
                        staggerDelay={0.15}
                    >
                        {[
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
                        ].map((testimonial, i) => (
                            <StaggerItem key={i}>
                                <motion.div
                                    style={{
                                        background: 'white',
                                        padding: '2.5rem',
                                        borderRadius: '12px',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                        position: 'relative',
                                    }}
                                    whileHover={{ 
                                        y: -10,
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                                    }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <div style={{ marginBottom: '1rem' }}>
                                        {[...Array(testimonial.rating)].map((_, j) => (
                                            <Star 
                                                key={j} 
                                                size={18} 
                                                fill="var(--brand-orange)" 
                                                color="var(--brand-orange)"
                                                style={{ marginRight: '4px' }}
                                            />
                                        ))}
                                    </div>
                                    <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#444', marginBottom: '1.5rem' }}>
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
            </section>
        </div>
    );
};

export default Home;
