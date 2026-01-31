import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { motion } from 'framer-motion';

const Section_Architects = () => {
    return (
        <section style={{ padding: '6rem 2rem', background: 'white' }}>
            <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto' }}>
                <Reveal>
                    <div style={{ marginBottom: '4rem', maxWidth: '800px' }}>
                        <h2 style={{ fontSize: '1rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--brand-orange)', letterSpacing: '2px', marginBottom: '1rem' }}>
                            Our Team
                        </h2>
                        <h3 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1, color: 'var(--brand-black)' }}>
                            Meet the<br />Architects.
                        </h3>
                    </div>
                </Reveal>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        {/* Doctor 1 */}
                        {[
                            { name: "Dr. Anjali Nair", role: "Chief Surgeon / Trichologist", img: "/doctor1.jpg" },
                            { name: "Dr. Rajesh Kumar", role: "Hair Transplant Specialist", img: "/doctor2.jpg" },
                            { name: "Sarah John", role: "Lead Technician", img: "/doctor3.jpg" }
                        ].map((doc, i) => (
                            <Reveal key={i} delay={i * 0.2}>
                                <div style={{ group: 'group', border: '1px solid #e5e7eb', background: '#F9FAFB' }}>
                                    <div style={{ height: '350px', background: '#e5e7eb', position: 'relative', overflow: 'hidden' }}>
                                        {/* Placeholder for image */}
                                        <div style={{ width: '100%', height: '100%', background: '#d1d5db', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6b7280', fontWeight: 700, textTransform: 'uppercase' }}>
                                            Image {i + 1}
                                        </div>
                                    </div>
                                    <div style={{ padding: '2rem' }}>
                                        <h4 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--brand-black)', marginBottom: '0.5rem' }}>{doc.name}</h4>
                                        <p style={{ color: 'var(--brand-orange)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '1rem' }}>{doc.role}</p>
                                        <p style={{ color: '#666', lineHeight: 1.6, fontSize: '0.95rem' }}>
                                            Dedicated to the art of hair restoration. 10+ years of clinical excellence and patient care.
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section_Architects;
