import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/ui/Reveal';
import { Shield, Users, Award, Clock } from 'lucide-react';

const About = () => {
    return (
        <div className="about-page" style={{ paddingTop: '80px', background: 'var(--brand-white)' }}>
            <section className="about-hero" style={{ padding: '8rem 2rem 6rem', background: 'var(--brand-black)', color: 'white' }}>
                <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto', textAlign: 'center' }}>
                    <Reveal>
                        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 900, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '-1px', lineHeight: 0.9 }}>
                            <span style={{ color: 'var(--brand-orange)' }}>Precision.</span><br />
                            Artistry.<br />
                            Confidence.
                        </h1>
                        <p style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', color: 'rgba(255,255,255,0.7)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
                            We are more than just a clinic. We are your partners in restoring confidence and excellence in hair restoration.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="about-content" style={{ padding: '6rem 2rem', maxWidth: 'var(--container-width)', margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <div className="about-text">
                        <Reveal>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1.5rem', textTransform: 'uppercase', color: 'var(--brand-black)' }}>Our Philosophy</h2>
                            <p style={{ color: '#444', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                                At Hair Cure, we believe that hair restoration is an <span style={{ fontWeight: 700, color: 'var(--brand-black)' }}>art as much as a science</span>. Our team of experts combines years of surgical precision with an aesthetic eye to create results that are truly natural and life-changing.
                            </p>
                            <p style={{ color: '#444', fontSize: '1.1rem', lineHeight: 1.7 }}>
                                We utilize the latest FUE and Bio-FUE techniques to ensure minimal discomfort and maximum density for every patient.
                            </p>
                        </Reveal>
                    </div>

                    <div className="about-image" style={{ textAlign: 'center' }}>
                        <Reveal delay={0.2}>
                            <div style={{ position: 'relative', display: 'inline-block' }}>
                                <div style={{ position: 'absolute', top: '20px', left: '20px', width: '100%', height: '100%', border: '2px solid var(--brand-orange)', zIndex: 0 }}></div>
                                <img src="/hero_doctor.png" alt="About Doctor" style={{ position: 'relative', zIndex: 1, maxWidth: '100%', height: 'auto', grayscale: '100%' }} />
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="values-section" style={{ padding: '6rem 2rem', backgroundColor: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
                <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <Reveal>
                            <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--brand-black)' }}>Our Core Values</h2>
                        </Reveal>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
                        {[
                            { icon: <Shield size={32} />, title: "Integrity", desc: "Honest advice and transparent pricing." },
                            { icon: <Award size={32} />, title: "Excellence", desc: "Highest standards of surgical care." },
                            { icon: <Users size={32} />, title: "Care", desc: "Personalized attention and support." },
                            { icon: <Clock size={32} />, title: "Innovation", desc: "Latest hair restoration tech." }
                        ].map((value, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div style={{ background: 'white', padding: '2.5rem', border: '1px solid #E5E7EB', textAlign: 'left', height: '100%', transition: 'transform 0.2s' }}
                                    onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                                    onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    <div style={{ color: 'var(--brand-orange)', marginBottom: '1.5rem', display: 'inline-block' }}>{value.icon}</div>
                                    <h3 style={{ marginBottom: '1rem', fontWeight: 800, fontSize: '1.2rem', textTransform: 'uppercase' }}>{value.title}</h3>
                                    <p style={{ color: '#666', lineHeight: 1.6 }}>{value.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
