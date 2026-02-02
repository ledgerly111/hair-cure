import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/ui/Reveal';
import { StaggerContainer, StaggerItem } from '../components/ui/StaggerContainer';
import { GradientText } from '../components/ui/GradientText';
import { FloatingElements } from '../components/ui/FloatingElements';
import { Shield, Users, Award, Clock, Sparkles, Target, Heart } from 'lucide-react';

const About = () => {
    const values = [
        { icon: <Shield size={32} />, title: "Integrity", desc: "Honest advice and transparent pricing. We believe in building trust through clear communication." },
        { icon: <Award size={32} />, title: "Excellence", desc: "Highest standards of surgical care. Our team is continuously trained on the latest techniques." },
        { icon: <Users size={32} />, title: "Care", desc: "Personalized attention and support. You're not just a patient; you're part of the Hair Cure family." },
        { icon: <Clock size={32} />, title: "Innovation", desc: "Latest hair restoration technology. We invest in cutting-edge equipment for superior results." }
    ];

    const stats = [
        { value: "15+", label: "Years Experience" },
        { value: "5000+", label: "Procedures Done" },
        { value: "98%", label: "Success Rate" },
        { value: "50k+", label: "Grafts Transplanted" }
    ];

    return (
        <div className="about-page" style={{ paddingTop: '80px', background: 'var(--brand-white)' }}>
            {/* Hero Section */}
            <section className="about-hero" style={{ 
                padding: '8rem 2rem 6rem', 
                background: 'var(--brand-black)', 
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <FloatingElements count={3} color="var(--brand-orange)" />
                
                <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <Reveal>
                        <motion.span
                            style={{
                                display: 'inline-block',
                                padding: '0.5rem 1.5rem',
                                background: 'rgba(249, 115, 22, 0.2)',
                                borderRadius: '30px',
                                fontSize: '0.9rem',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                marginBottom: '2rem',
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
                            fontSize: 'clamp(3rem, 8vw, 5rem)', 
                            fontWeight: 900, 
                            marginBottom: '2rem', 
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
                            fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', 
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
                padding: '4rem 2rem', 
                background: 'var(--brand-offwhite)',
                borderBottom: 'var(--border-thick)'
            }}>
                <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto' }}>
                    <StaggerContainer 
                        style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
                            gap: '2rem',
                            textAlign: 'center'
                        }}
                        staggerDelay={0.1}
                    >
                        {stats.map((stat, i) => (
                            <StaggerItem key={i}>
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <h3 style={{ 
                                        fontSize: '3rem', 
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
                                        fontSize: '0.9rem',
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
            <section className="about-content" style={{ padding: '6rem 2rem', maxWidth: 'var(--container-width)', margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <motion.div 
                        className="about-text"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Reveal>
                            <h2 style={{ 
                                fontSize: '2.5rem', 
                                fontWeight: 900, 
                                marginBottom: '1.5rem', 
                                textTransform: 'uppercase', 
                                color: 'var(--brand-black)' 
                            }}>
                                Our Philosophy
                            </h2>
                            <p style={{ color: '#444', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                                At Hair Cure, we believe that hair restoration is an <span style={{ fontWeight: 700, color: 'var(--brand-orange)' }}>art as much as a science</span>. Our team of experts combines years of surgical precision with an aesthetic eye to create results that are truly natural and life-changing.
                            </p>
                            <p style={{ color: '#444', fontSize: '1.1rem', lineHeight: 1.7 }}>
                                We utilize the latest FUE and Bio-FUE techniques to ensure minimal discomfort and maximum density for every patient. Every procedure is customized to match your unique hair characteristics and facial structure.
                            </p>
                        </Reveal>
                    </motion.div>

                    <motion.div 
                        className="about-image" 
                        style={{ textAlign: 'center' }}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <motion.div 
                            style={{ position: 'relative', display: 'inline-block' }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <motion.div 
                                style={{ 
                                    position: 'absolute', 
                                    top: '20px', 
                                    left: '20px', 
                                    width: '100%', 
                                    height: '100%', 
                                    border: '3px solid var(--brand-orange)', 
                                    zIndex: 0,
                                    borderRadius: '12px'
                                }}
                                initial={{ opacity: 0, x: -20, y: -20 }}
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
                                    borderRadius: '12px',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                                }} 
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="values-section" style={{ 
                padding: '6rem 2rem', 
                backgroundColor: '#F9FAFB', 
                borderTop: '1px solid #E5E7EB',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <Reveal>
                            <motion.span
                                style={{
                                    display: 'inline-block',
                                    padding: '0.5rem 1rem',
                                    background: 'rgba(249, 115, 22, 0.1)',
                                    borderRadius: '20px',
                                    fontSize: '0.85rem',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    color: 'var(--brand-orange)',
                                    marginBottom: '1rem'
                                }}
                            >
                                What Drives Us
                            </motion.span>
                            <h2 style={{ 
                                fontSize: 'clamp(2rem, 6vw, 3rem)', 
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
                            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
                            gap: '2rem' 
                        }}
                        staggerDelay={0.1}
                    >
                        {values.map((value, i) => (
                            <StaggerItem key={i}>
                                <motion.div 
                                    style={{ 
                                        background: 'white', 
                                        padding: '2.5rem', 
                                        border: '1px solid #E5E7EB', 
                                        textAlign: 'left', 
                                        height: '100%',
                                        borderRadius: '12px',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    whileHover={{ 
                                        y: -10,
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                        borderColor: 'var(--brand-orange)'
                                    }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <motion.div 
                                        style={{ 
                                            color: 'var(--brand-orange)', 
                                            marginBottom: '1.5rem',
                                            display: 'inline-flex',
                                            padding: '1rem',
                                            background: 'rgba(249, 115, 22, 0.1)',
                                            borderRadius: '12px'
                                        }}
                                        whileHover={{ rotate: 5, scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        {value.icon}
                                    </motion.div>
                                    <h3 style={{ 
                                        marginBottom: '1rem', 
                                        fontWeight: 800, 
                                        fontSize: '1.3rem', 
                                        textTransform: 'uppercase' 
                                    }}>
                                        {value.title}
                                    </h3>
                                    <p style={{ color: '#666', lineHeight: 1.6 }}>{value.desc}</p>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Mission Section */}
            <section style={{ padding: '6rem 2rem', background: 'var(--brand-black)', color: 'white' }}>
                <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto', textAlign: 'center' }}>
                    <Reveal>
                        <motion.div
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '80px',
                                height: '80px',
                                background: 'var(--brand-orange)',
                                borderRadius: '50%',
                                marginBottom: '2rem'
                            }}
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Target size={40} color="white" />
                        </motion.div>
                        
                        <h2 style={{ 
                            fontSize: 'clamp(2rem, 5vw, 3rem)', 
                            fontWeight: 900, 
                            textTransform: 'uppercase',
                            marginBottom: '1.5rem'
                        }}>
                            Our Mission
                        </h2>
                        
                        <p style={{ 
                            fontSize: '1.3rem', 
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
