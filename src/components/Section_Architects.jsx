import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './ui/Reveal';
import { GlowCard } from './ui/GlowCard';
import { StaggerContainer, StaggerItem } from './ui/StaggerContainer';
import { GradientText } from './ui/GradientText';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Section_Architects = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const doctors = [
        { name: "Dr. Anjali Nair", role: "Chief Surgeon / Trichologist", img: "/doctor1.jpg", experience: "15+ years" },
        { name: "Dr. Rajesh Kumar", role: "Hair Transplant Specialist", img: "/doctor2.jpg", experience: "12+ years" },
        { name: "Sarah John", role: "Lead Technician", img: "/doctor3.jpg", experience: "8+ years" }
    ];

    const nextSlide = () => setActiveIndex((prev) => (prev + 1) % doctors.length);
    const prevSlide = () => setActiveIndex((prev) => (prev - 1 + doctors.length) % doctors.length);

    return (
        <section style={{ 
            padding: isMobile ? '3rem 1rem' : '6rem 2rem', 
            background: 'white', 
            position: 'relative', 
            overflow: 'hidden' 
        }}>
            {/* Background decoration - desktop only */}
            {!isMobile && (
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
            )}

            <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                <Reveal>
                    <div style={{ marginBottom: isMobile ? '2rem' : '4rem', maxWidth: '800px' }}>
                        <motion.span
                            style={{
                                display: 'inline-block',
                                fontSize: '0.8rem',
                                fontWeight: 800,
                                textTransform: 'uppercase',
                                color: 'var(--brand-orange)',
                                letterSpacing: '2px',
                                marginBottom: '0.75rem',
                                padding: '0.4rem 1rem',
                                background: 'rgba(249, 115, 22, 0.1)',
                                borderRadius: '30px',
                            }}
                            whileHover={isMobile ? {} : { scale: 1.05 }}
                        >
                            Our Team
                        </motion.span>
                        <h2 style={{ 
                            fontSize: isMobile ? '1.75rem' : 'clamp(2.5rem, 5vw, 4rem)', 
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

                {/* Mobile: Carousel / Desktop: Grid */}
                {isMobile ? (
                    <div style={{ position: 'relative' }}>
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                        >
                            <DoctorCard doctor={doctors[activeIndex]} isMobile={true} />
                        </motion.div>
                        
                        {/* Carousel Controls */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '1rem',
                            marginTop: '1.5rem'
                        }}>
                            <motion.button
                                onClick={prevSlide}
                                style={{
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '50%',
                                    border: '2px solid var(--brand-black)',
                                    background: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <ChevronLeft size={20} />
                            </motion.button>
                            
                            <div style={{ display: 'flex', gap: '6px' }}>
                                {doctors.map((_, i) => (
                                    <motion.div
                                        key={i}
                                        style={{
                                            width: i === activeIndex ? '24px' : '8px',
                                            height: '8px',
                                            borderRadius: '4px',
                                            background: i === activeIndex ? 'var(--brand-orange)' : '#ddd'
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                ))}
                            </div>
                            
                            <motion.button
                                onClick={nextSlide}
                                style={{
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '50%',
                                    border: '2px solid var(--brand-black)',
                                    background: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <ChevronRight size={20} />
                            </motion.button>
                        </div>
                    </div>
                ) : (
                    <StaggerContainer 
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}
                        staggerDelay={0.15}
                    >
                        {doctors.map((doc, i) => (
                            <StaggerItem key={i}>
                                <DoctorCard doctor={doc} isMobile={false} />
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                )}
            </div>
        </section>
    );
};

const DoctorCard = ({ doctor, isMobile }) => (
    <GlowCard glowColor="var(--brand-orange)">
        <motion.div
            style={{
                border: '2px solid #e5e7eb',
                background: '#F9FAFB',
                borderRadius: isMobile ? '20px' : '12px',
                overflow: 'hidden',
            }}
            whileHover={isMobile ? {} : { y: -5 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <div style={{ 
                height: isMobile ? '280px' : '350px', 
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
                        fontSize: isMobile ? '1.5rem' : '1.2rem'
                    }}
                    whileHover={isMobile ? {} : { scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                >
                    {doctor.name.charAt(0)}
                </motion.div>
                
                <motion.div
                    style={{
                        position: 'absolute',
                        bottom: '1rem',
                        right: '1rem',
                        background: 'var(--brand-orange)',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {doctor.experience}
                </motion.div>
            </div>
            
            <div style={{ padding: isMobile ? '1.5rem' : '2rem' }}>
                <h4 style={{ 
                    fontSize: isMobile ? '1.25rem' : '1.5rem', 
                    fontWeight: 800, 
                    color: 'var(--brand-black)', 
                    marginBottom: '0.5rem' 
                }}>
                    {doctor.name}
                </h4>
                <p style={{ 
                    color: 'var(--brand-orange)', 
                    fontWeight: 700, 
                    textTransform: 'uppercase', 
                    fontSize: '0.8rem', 
                    marginBottom: '1rem' 
                }}>
                    {doctor.role}
                </p>
                <p style={{ 
                    color: '#666', 
                    lineHeight: 1.6, 
                    fontSize: '0.9rem' 
                }}>
                    Dedicated to the art of hair restoration. 
                    {doctor.experience} of clinical excellence and patient care.
                </p>
            </div>
        </motion.div>
    </GlowCard>
);

export default Section_Architects;
