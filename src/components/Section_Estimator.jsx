import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Activity, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from './ui/Reveal';
import { GradientText } from './ui/GradientText';

const Section_Estimator = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [selectedGrade, setSelectedGrade] = useState(null);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section style={{ 
            background: 'var(--brand-black)', 
            color: 'white', 
            padding: isMobile ? '3rem 1rem' : '6rem 2rem', 
            position: 'relative', 
            overflow: 'hidden' 
        }}>
            {/* Background elements */}
            <motion.div 
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at top right, #333 0%, transparent 60%)',
                    opacity: 0.5
                }}
            />
            
            {/* Floating orbs - desktop only */}
            {!isMobile && [...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    style={{
                        position: 'absolute',
                        width: 100 + i * 50,
                        height: 100 + i * 50,
                        background: 'radial-gradient(circle, rgba(249, 115, 22, 0.1) 0%, transparent 70%)',
                        borderRadius: '50%',
                        left: `${20 + i * 30}%`,
                        top: `${30 + i * 20}%`,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        x: [0, 10, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 5 + i,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.5,
                    }}
                />
            ))}

            <div style={{ 
                maxWidth: 'var(--container-width)', 
                margin: '0 auto', 
                position: 'relative', 
                zIndex: 1, 
                display: 'grid', 
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: isMobile ? '2rem' : '4rem', 
                alignItems: 'center' 
            }}>
                <div>
                    <Reveal>
                        <motion.div 
                            style={{ 
                                display: 'inline-flex', 
                                alignItems: 'center', 
                                gap: '0.5rem', 
                                background: 'rgba(255,255,255,0.1)', 
                                padding: isMobile ? '0.4rem 0.75rem' : '0.5rem 1rem', 
                                borderRadius: '30px', 
                                marginBottom: '1.5rem',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}
                            whileHover={isMobile ? {} : { scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <Activity size={isMobile ? 16 : 18} color="var(--brand-orange)" />
                            <span style={{ 
                                fontWeight: 700, 
                                textTransform: 'uppercase', 
                                fontSize: isMobile ? '0.7rem' : '0.8rem', 
                                letterSpacing: '1px' 
                            }}>
                                AI-Powered Analysis
                            </span>
                        </motion.div>
                    </Reveal>
                    
                    <Reveal delay={0.1}>
                        <h2 style={{ 
                            fontSize: isMobile ? '2rem' : 'clamp(2.5rem, 5vw, 4rem)', 
                            fontWeight: 900, 
                            textTransform: 'uppercase', 
                            lineHeight: 1.1, 
                            marginBottom: '1.25rem' 
                        }}>
                            Diagnostic<br />
                            <GradientText>Estimator</GradientText>
                        </h2>
                    </Reveal>
                    
                    <Reveal delay={0.2}>
                        <p style={{ 
                            fontSize: isMobile ? '1rem' : '1.2rem', 
                            color: 'rgba(255,255,255,0.7)', 
                            maxWidth: '500px', 
                            marginBottom: isMobile ? '2rem' : '3rem', 
                            lineHeight: 1.6 
                        }}>
                            Not sure what you need? Use our free diagnostic tool to assess your hair grade and get a preliminary cost estimate in under 2 minutes.
                        </p>
                    </Reveal>
                    
                    <Reveal delay={0.3}>
                        <Link to="/contact" style={{ textDecoration: 'none' }}>
                            <motion.button
                                style={{
                                    display: 'inline-flex', 
                                    alignItems: 'center', 
                                    gap: '0.75rem',
                                    padding: isMobile ? '1rem 1.75rem' : '1.2rem 2.5rem', 
                                    background: 'white',
                                    color: 'var(--brand-black)', 
                                    fontWeight: 900, 
                                    textTransform: 'uppercase',
                                    borderRadius: '12px', 
                                    textDecoration: 'none',
                                    border: '2px solid white',
                                    cursor: 'pointer',
                                    fontSize: isMobile ? '0.9rem' : '1rem',
                                    width: isMobile ? '100%' : 'auto',
                                    justifyContent: isMobile ? 'center' : 'flex-start'
                                }}
                                whileHover={isMobile ? {} : { 
                                    background: 'transparent', 
                                    color: 'white',
                                    boxShadow: '0 0 30px rgba(249, 115, 22, 0.5)'
                                }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ duration: 0.2 }}
                            >
                                Start Diagnosis <ArrowRight size={isMobile ? 18 : 20} />
                            </motion.button>
                        </Link>
                    </Reveal>
                </div>

                {/* Visual Representation of Grades */}
                <Reveal delay={0.2}>
                    <motion.div 
                        style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(3, 1fr)', 
                            gap: isMobile ? '0.5rem' : '1rem' 
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[1, 2, 3, 4, 5, 6].map((grade, i) => (
                            <motion.div 
                                key={grade} 
                                onClick={() => setSelectedGrade(grade)}
                                style={{
                                    aspectRatio: '1', 
                                    border: `2px solid ${selectedGrade === grade ? 'var(--brand-orange)' : 'rgba(255,255,255,0.1)'}`,
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    fontWeight: 900, 
                                    fontSize: isMobile ? '1.25rem' : '1.5rem', 
                                    color: selectedGrade === grade ? 'var(--brand-orange)' : 'rgba(255,255,255,0.3)',
                                    background: selectedGrade === grade ? 'rgba(249, 115, 22, 0.1)' : 'rgba(255,255,255,0.02)',
                                    borderRadius: '12px',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s'
                                }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={isMobile ? {} : { 
                                    borderColor: 'var(--brand-orange)',
                                    color: 'var(--brand-orange)',
                                    background: 'rgba(249, 115, 22, 0.1)',
                                    scale: 1.05
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                G{grade}
                            </motion.div>
                        ))}
                    </motion.div>
                    
                    {selectedGrade && (
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{
                                textAlign: 'center',
                                marginTop: '1rem',
                                fontSize: '0.9rem',
                                color: 'rgba(255,255,255,0.6)'
                            }}
                        >
                            Grade {selectedGrade} selected. Book a consultation for detailed analysis.
                        </motion.p>
                    )}
                </Reveal>
            </div>
        </section>
    );
};

export default Section_Estimator;
