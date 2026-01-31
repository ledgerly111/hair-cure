import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Check, Star, MessageSquare } from 'lucide-react';
import { motion, LayoutGroup } from 'motion/react';
import { Reveal } from '../components/ui/Reveal';
import { TextRotate } from '../components/ui/text-rotate';
import '../styles/Home.css';

import Section_Architects from '../components/Section_Architects';
import Section_Estimator from '../components/Section_Estimator';


const Home = () => {
    const location = useLocation();
    // Removed useWordLoop hook as TextRotate handles animation internally

    // Handle scroll to services if redirected or navigated
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
            {/* Brutalist Hero */}
            <section className="hero">
                <div className="bg-grid"></div>

                <div className="hero-content-wrapper">
                    {/* Left Text Side */}
                    <div className="hero-text-side">
                        {/* Removed hero badge per user request */}

                        <Reveal delay={0.2}>
                            <h1 className="hero-title">
                                Restore.<br />
                                <span style={{ color: 'var(--brand-orange)' }}>Confidence.</span><br />
                                Naturally.
                            </h1>
                        </Reveal>

                        <Reveal delay={0.4}>
                            <p className="hero-subtitle">
                                Advanced clinical engineering meets architectural aesthetics. We design hairlines that are structural masterpieces.
                            </p>
                        </Reveal>

                        <Reveal delay={0.6}>
                            <Link to="/contact" className="btn-brutal">
                                Start Consultation <ArrowRight />
                            </Link>
                        </Reveal>
                    </div>

                    {/* Right Image Side - Clean Minimal Design */}
                    <div className="hero-image-container-brutal" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Reveal delay={0.3}>
                            <div className="w-full h-full flex items-center justify-center p-4 sm:p-8 md:p-12">
                                <img
                                    src="/hero_image.png"
                                    alt="Hair Cure - Premium Hair Restoration"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: '12px'
                                    }}
                                />
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Brutalist Stats */}
            <section className="stats-brutal">
                {[
                    { val: "4.9/5", label: "Patient Rating" },
                    { val: "1000+", label: "Successful Grafts" },
                    { val: "100%", label: "Natural Results" },
                    { val: "24/7", label: "Care Support" }
                ].map((stat, i) => (
                    <div key={i} className="stat-box">
                        <div className="stat-number">{stat.val}</div>
                        <div className="stat-label">{stat.label}</div>
                    </div>
                ))}
            </section>

            {/* Brutalist Services List - RENAMED to Services per user request */}
            <section id="services-section" className="services-section" style={{ background: 'white', padding: 0 }}>
                <div style={{ padding: '4rem 2rem', borderBottom: 'var(--border-thin)' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, textTransform: 'uppercase' }}>Services</h2>
                </div>

                <div className="services-list-brutal">
                    {[
                        { id: 'transplant', title: "Hair Transplant", desc: "FUE & FUT Techniques" },
                        { id: 'beard', title: "Beard Transplant", desc: "Facial Hair Restoration" },
                        { id: 'prp', title: "PRP Therapy", desc: "Platelet-Rich Plasma" },
                        { id: 'smp', title: "Scalp Micropigmentation", desc: "Cosmetic Density" },
                        { id: 'cosmetic', title: "Cosmetic Care", desc: "Non-Surgical Solutions" },
                        { id: 'dandruff', title: "Dandruff Control", desc: "Clinical Treatment" }
                    ].map((item, i) => (
                        <Reveal key={i} delay={i * 0.1} width="100%" x={-50} y={0}>
                            <Link
                                to="/services"
                                state={{ serviceId: item.id }}
                                className="service-item-brutal"
                            >
                                <div>
                                    <h3 className="service-title">{item.title}</h3>
                                    <p className="service-desc">{item.desc}</p>
                                </div>
                                <ArrowRight size={48} className="service-arrow" />
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* NEW SECTIONS: Estimator & Architects */}
            <Section_Estimator />
            <Section_Architects />

            {/* Why Us / Clinical Journey */}
            <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', minHeight: '600px', borderBottom: 'var(--border-thick)' }}>
                <div style={{ background: 'var(--brand-black)', color: 'white', padding: '4rem 2rem', display: 'flex', flexDirection: 'column', justifyCenter: 'center' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '2rem', color: 'var(--brand-yellow)' }}>
                        Why Choose<br />Hair Cure?
                    </h2>
                    <p style={{ fontSize: '1.2rem', lineHeight: 1.6, opacity: 0.8, marginBottom: '2rem' }}>
                        We don't just restore hair; we engineer confidence. Our clinic uses state-of-the-art diagnostic tools to blueprint your perfect hairline before touching a single follicle.
                    </p>
                    <ul style={{ listStyle: 'none', display: 'grid', gap: '1.5rem' }}>
                        {[' Advanced Diagnostics', ' Master Surgeons', ' Lifetime Guarantee'].map(feat => (
                            <li key={feat} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase' }}>
                                <div style={{ width: '12px', height: '12px', background: 'var(--brand-pink)' }}></div>
                                {feat}
                            </li>
                        ))}
                    </ul>
                </div>
                <div style={{ background: 'var(--brand-offwhite)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyCenter: 'center' }}>
                    <img src="/happy_patient.png" alt="Patient" style={{ maxWidth: '80%', filter: 'grayscale(100%) contrast(1.2)' }} />
                </div>
            </section>
        </div>
    );
};

export default Home;
