import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/ui/Reveal';
import { StaggerContainer, StaggerItem } from '../components/ui/StaggerContainer';
import { GradientText } from '../components/ui/GradientText';
import { Shield, Users, Award, Clock, Target } from 'lucide-react';

const About = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const values = [
        { icon: <Shield size={isMobile ? 24 : 32} />, title: "Integrity", desc: "Honest advice and transparent pricing. We believe in building trust through clear communication." },
        { icon: <Award size={isMobile ? 24 : 32} />, title: "Excellence", desc: "Highest standards of surgical care. Our team is continuously trained on the latest techniques." },
        { icon: <Users size={isMobile ? 24 : 32} />, title: "Care", desc: "Personalized attention and support. You're not just a patient; you're part of the Hair Cure family." },
        { icon: <Clock size={isMobile ? 24 : 32} />, title: "Innovation", desc: "Latest hair restoration technology. We invest in cutting-edge equipment for superior results." }
    ];

    const stats = [
        { value: "15+", label: "Years Experience" },
        { value: "5000+", label: "Procedures Done" },
        { value: "98%", label: "Success Rate" },
        { value: "50k+", label: "Grafts Transplanted" }
    ];

    return (
        <div style={{ paddingTop: 'var(--header-height)', background: 'var(--brand-white)' }}>
            {/* Hero Section */}
            <section style={{ 
                padding: isMobile ? '4rem 1.5rem' : '8rem 2rem 6rem', 
                background: 'var(--brand-black)', 
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <Reveal>
                        <motion.span
                            style={{
                                display: 'inline-block',
                                padding: '0.5rem 1rem',
                                background: 'rgba(249, 115, 22, 0.2)',
                                borderRadius: '30px',
                                fontSize: '0.8rem',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                marginBottom: '1.5rem',
                                color: 'var(--brand-orange)'
                            }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            About Us
                        </motion.span>
                    </Reveal>
                    
                    <Reveal>
                        <h1 style={{ 
                            fontSize: isMobile ? '2.5rem' : 'clamp(3rem, 8vw, 5rem)', 
                            fontWeight: 900, 
                            marginBottom: '1.5rem', 
                            textTransform: 'uppercase', 
                            letterSpacing: '-1px', 
                            lineHeight: 0.9 
                        }}>
                            <GradientText>Precision.</GradientText><br />
                            Artistry.<br />
                            Confidence.
                        </h1>
                    </Reveal>
                    
                    <Reveal delay={0.2}>
                        <p style={{ 
                            fontSize: isMobile ? '1rem' : 'clamp(1.2rem, 3vw, 1.5rem)', 
                            color: 'rgba(255,255,255,0.7)', 
                            maxWidth: '700px', 
                            margin: '0 auto', 
                            lineHeight: 1.6 
                        }}>
                            We are more than just a clinic. We are your partners in restoring confidence and excellence in hair restoration.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Stats Section */}
            <section style={{ 
                padding: isMobile ? '2rem 1rem' : '4rem 2rem', 
                background: 'var(--brand-offwhite)',
                borderBottom: 'var(--border-thick)'
            }}>
                <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto' }}>
                    <StaggerContainer 
                        style={{ 
                            display: 'grid', 
                            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(150px, 1fr))', 
                            gap: isMobile ? '1rem' : '2rem',
                            textAlign: 'center'
                        }}
                        staggerDelay={0.1}
                    >
                        {stats.map((stat, i) => (
                            <StaggerItem key={i}>
                                <motion.div
                                    whileHover={isMobile ? {} : { y: -5 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                    style={{
                                        padding: isMobile ? '1rem' : '1.5rem',
                                        background: 'white',
                                        borderRadius: '16px',
                                        boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                                    }}
                                >
                                    <h3 style={{ 
                                        fontSize: isMobile ? '2rem' : '3rem', 
                                        fontWeight: 900, 
                                        color: 'var(--brand-orange)',
                                        marginBottom: '0.5rem'
                                    }}>
                                        {stat.value}
                                    </h3>
                                    <p style={{ 
                                        fontWeight: 700, 
                                        textTransform: 'uppercase',
                                        color: 'var(--brand-black)',
                                        fontSize: isMobile ? '0.7rem' : '0.85rem',
                                        letterSpacing: '1px'
                                    }}>
                                        {stat.label}
                                    </p>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Philosophy Section */}
            <section style={{ padding: isMobile ? '3rem 1rem' : '6rem 2rem', maxWidth: 'var(--container-width)', margin: '0 auto' }}>
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', 
                    gap: isMobile ? '2rem' : '4rem', 
                    alignItems: 'center' 
                }}>
                    <motion.div 
                        initial={{ opacity: 0, x: isMobile ? 0 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Reveal>
                            <h2 style={{ 
                                fontSize: isMobile ? '1.75rem' : '2.5rem', 
                                fontWeight: 900, 
                                marginBottom: '1.25rem', 
                                textTransform: 'uppercase', 
                                color: 'var(--brand-black)' 
                            }}>
                                Our Philosophy
                            </h2>
                            <p style={{ color: '#444', fontSize: isMobile ? '1rem' : '1.1rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
                                At Hair Cure, we believe that hair restoration is an <span style={{ fontWeight: 700, color: 'var(--brand-orange)' }}>art as much as a science</span>. Our team of experts combines years of surgical precision with an aesthetic eye to create results that are truly natural and life-changing.
                            </p>
                            <p style={{ color: '#444', fontSize: isMobile ? '1rem' : '1.1rem', lineHeight: 1.7 }}>
                                We utilize the latest FUE and Bio-FUE techniques to ensure minimal discomfort and maximum density for every patient. Every procedure is customized to match your unique hair characteristics and facial structure.
                            </p>
                        </Reveal>
                    </motion.div>

                    <motion.div 
                        style={{ textAlign: 'center' }}
                        initial={{ opacity: 0, x: isMobile ? 0 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <motion.div 
                            style={{ position: 'relative', display: 'inline-block' }}
                            whileHover={isMobile ? {} : { scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <motion.div 
                                style={{ 
                                    position: 'absolute', 
                                    top: '15px', 
                                    left: '15px', 
                                    width: '100%', 
                                    height: '100%', 
                                    border: '3px solid var(--brand-orange)', 
                                    zIndex: 0,
                                    borderRadius: '16px'
                                }}
                                initial={{ opacity: 0, x: -15, y: -15 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            />
                            <img 
                                src="/hero_doctor.png" 
                                alt="About Doctor" 
                                style={{ 
                                    position: 'relative', 
                                    zIndex: 1, 
                                    maxWidth: '100%', 
                                    height: 'auto',
                                    borderRadius: '16px',
                                    boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
                                }} 
                                loading="lazy"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Core Values Section */}
            <section style={{ 
                padding: isMobile ? '3rem 1rem' : '6rem 2rem', 
                backgroundColor: '#F9FAFB', 
                borderTop: '1px solid #E5E7EB',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <div style={{ textAlign: 'center', marginBottom: isMobile ? '2rem' : '4rem' }}>
                        <Reveal>
                            <motion.span
                                style={{
                                    display: 'inline-block',
                                    padding: '0.4rem 1rem',
                                    background: 'rgba(249, 115, 22, 0.1)',
                                    borderRadius: '20px',
                                    fontSize: '0.8rem',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    color: 'var(--brand-orange)',
                                    marginBottom: '1rem'
                                }}
                            >
                                What Drives Us
                            </motion.span>
                            <h2 style={{ 
                                fontSize: isMobile ? '1.75rem' : 'clamp(2rem, 6vw, 3rem)', 
                                fontWeight: 900, 
                                textTransform: 'uppercase', 
                                color: 'var(--brand-black)' 
                            }}>
                                Our Core Values
                            </h2>
                        </Reveal>
                    </div>
                    
                    <StaggerContainer 
                        style={{ 
                            display: 'grid', 
                            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(240px, 1fr))', 
                            gap: isMobile ? '1rem' : '2rem' 
                        }}
                        staggerDelay={0.1}
                    >
                        {values.map((value, i) => (
                            <StaggerItem key={i}>
                                <motion.div 
                                    style={{ 
                                        background: 'white', 
                                        padding: isMobile ? '1.5rem' : '2.5rem', 
                                        border: '1px solid #E5E7EB', 
                                        textAlign: 'left', 
                                        height: '100%',
                                        borderRadius: '16px',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    whileHover={isMobile ? {} : { 
                                        y: -10,
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                        borderColor: 'var(--brand-orange)'
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <motion.div 
                                        style={{ 
                                            color: 'var(--brand-orange)', 
                                            marginBottom: '1.25rem',
                                            display: 'inline-flex',
                                            padding: '0.75rem',
                                            background: 'rgba(249, 115, 22, 0.1)',
                                            borderRadius: '12px'
                                        }}
                                        whileHover={isMobile ? {} : { rotate: 5, scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        {value.icon}
                                    </motion.div>
                                    <h3 style={{ 
                                        marginBottom: '0.75rem', 
                                        fontWeight: 800, 
                                        fontSize: isMobile ? '1.1rem' : '1.3rem', 
                                        textTransform: 'uppercase' 
                                    }}>
                                        {value.title}
                                    </h3>
                                    <p style={{ color: '#666', lineHeight: 1.6, fontSize: isMobile ? '0.9rem' : '1rem' }}>
                                        {value.desc}
                                    </p>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Mission Section */}
            <section style={{ 
                padding: isMobile ? '3rem 1.5rem' : '6rem 2rem', 
                background: 'var(--brand-black)', 
                color: 'white' 
            }}>
                <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto', textAlign: 'center' }}>
                    <Reveal>
                        <motion.div
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: isMobile ? '64px' : '80px',
                                height: isMobile ? '64px' : '80px',
                                background: 'var(--brand-orange)',
                                borderRadius: '50%',
                                marginBottom: '1.5rem'
                            }}
                            whileHover={isMobile ? {} : { scale: 1.1, rotate: 10 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Target size={isMobile ? 32 : 40} color="white" />
                        </motion.div>
                        
                        <h2 style={{ 
                            fontSize: isMobile ? '1.75rem' : 'clamp(2rem, 5vw, 3rem)', 
                            fontWeight: 900, 
                            textTransform: 'uppercase',
                            marginBottom: '1.25rem'
                        }}>
                            Our Mission
                        </h2>
                        
                        <p style={{ 
                            fontSize: isMobile ? '1rem' : '1.3rem', 
                            color: 'rgba(255,255,255,0.8)', 
                            maxWidth: '800px', 
                            margin: '0 auto',
                            lineHeight: 1.7
                        }}>
                            To restore not just hair, but confidence. We strive to provide world-class hair restoration 
                            services that are accessible, affordable, and deliver natural-looking results that last a lifetime.
                        </p>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};

export default About;
