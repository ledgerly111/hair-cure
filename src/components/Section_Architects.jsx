import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './ui/Reveal';
import { GlowCard } from './ui/GlowCard';
import { StaggerContainer, StaggerItem } from './ui/StaggerContainer';
import { GradientText } from './ui/GradientText';

const Section_Architects = () => {
    const doctors = [
        { name: "Dr. Anjali Nair", role: "Chief Surgeon / Trichologist", img: "/doctor1.jpg", experience: "15+ years" },
        { name: "Dr. Rajesh Kumar", role: "Hair Transplant Specialist", img: "/doctor2.jpg", experience: "12+ years" },
        { name: "Sarah John", role: "Lead Technician", img: "/doctor3.jpg", experience: "8+ years" }
    ];

    return (
        <section style={{ padding: '6rem 2rem', background: 'white', position: 'relative', overflow: 'hidden' }}>
            {/* Background decoration */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '10%',
                    right: '-5%',
                    width: '300px',
                    height: '300px',
                    background: 'radial-gradient(circle, rgba(249, 115, 22, 0.1) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(40px)',
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

            <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                <Reveal>
                    <div style={{ marginBottom: '4rem', maxWidth: '800px' }}>
                        <motion.span
                            style={{
                                display: 'inline-block',
                                fontSize: '0.9rem',
                                fontWeight: 800,
                                textTransform: 'uppercase',
                                color: 'var(--brand-orange)',
                                letterSpacing: '2px',
                                marginBottom: '1rem',
                                padding: '0.5rem 1rem',
                                background: 'rgba(249, 115, 22, 0.1)',
                                borderRadius: '30px',
                            }}
                            whileHover={{ scale: 1.05 }}
                        >
                            Our Team
                        </motion.span>
                        <h2 style={{ 
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                            fontWeight: 900, 
                            textTransform: 'uppercase', 
                            lineHeight: 1.1, 
                            color: 'var(--brand-black)' 
                        }}>
                            Meet the<br />
                            <GradientText>Architects.</GradientText>
                        </h2>
                    </div>
                </Reveal>

                <StaggerContainer 
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}
                    staggerDelay={0.15}
                >
                    {doctors.map((doc, i) => (
                        <StaggerItem key={i}>
                            <GlowCard glowColor="var(--brand-orange)">
                                <motion.div
                                    style={{
                                        border: '2px solid #e5e7eb',
                                        background: '#F9FAFB',
                                        borderRadius: '12px',
                                        overflow: 'hidden',
                                    }}
                                    whileHover={{ y: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div style={{ 
                                        height: '350px', 
                                        background: '#e5e7eb', 
                                        position: 'relative', 
                                        overflow: 'hidden' 
                                    }}>
                                        <motion.div 
                                            style={{ 
                                                width: '100%', 
                                                height: '100%', 
                                                background: 'linear-gradient(135deg, #d1d5db 0%, #9ca3af 100%)',
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                justifyContent: 'center', 
                                                color: '#6b7280', 
                                                fontWeight: 700, 
                                                textTransform: 'uppercase',
                                                fontSize: '1.2rem'
                                            }}
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            {doc.name.charAt(0)}
                                        </motion.div>
                                        
                                        {/* Experience badge */}
                                        <motion.div
                                            style={{
                                                position: 'absolute',
                                                bottom: '1rem',
                                                right: '1rem',
                                                background: 'var(--brand-orange)',
                                                color: 'white',
                                                padding: '0.5rem 1rem',
                                                borderRadius: '20px',
                                                fontSize: '0.8rem',
                                                fontWeight: 700,
                                            }}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + i * 0.1 }}
                                        >
                                            {doc.experience}
                                        </motion.div>
                                    </div>
                                    
                                    <div style={{ padding: '2rem' }}>
                                        <h4 style={{ 
                                            fontSize: '1.5rem', 
                                            fontWeight: 800, 
                                            color: 'var(--brand-black)', 
                                            marginBottom: '0.5rem' 
                                        }}>
                                            {doc.name}
                                        </h4>
                                        <p style={{ 
                                            color: 'var(--brand-orange)', 
                                            fontWeight: 700, 
                                            textTransform: 'uppercase', 
                                            fontSize: '0.9rem', 
                                            marginBottom: '1rem' 
                                        }}>
                                            {doc.role}
                                        </p>
                                        <p style={{ 
                                            color: '#666', 
                                            lineHeight: 1.6, 
                                            fontSize: '0.95rem' 
                                        }}>
                                            Dedicated to the art of hair restoration. 
                                            {doc.experience} of clinical excellence and patient care.
                                        </p>
                                    </div>
                                </motion.div>
                            </GlowCard>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
};

export default Section_Architects;
