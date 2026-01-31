import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, ArrowRight } from 'lucide-react';

const Section_Estimator = () => {
    return (
        <section style={{ background: 'var(--brand-black)', color: 'white', padding: '6rem 2rem', position: 'relative', overflow: 'hidden' }}>
            {/* Background Decor */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at top right, #333 0%, transparent 60%)', opacity: 0.5 }}></div>

            <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto', position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                <div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '30px', marginBottom: '2rem' }}>
                        <Activity size={18} color="var(--brand-orange)" />
                        <span style={{ fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>AI-Powered Analysis</span>
                    </div>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1, marginBottom: '1.5rem' }}>
                        Diagnostic<br />
                        <span style={{ color: 'var(--brand-orange)' }}>Estimator</span>
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', maxWidth: '500px', marginBottom: '3rem', lineHeight: 1.6 }}>
                        Not sure what you need? Use our free diagnostic tool to assess your hair grade and get a preliminary cost estimate in under 2 minutes.
                    </p>
                    <Link to="/contact" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '1rem',
                        padding: '1.2rem 2.5rem', background: 'white',
                        color: 'var(--brand-black)', fontWeight: 900, textTransform: 'uppercase',
                        borderRadius: '0px', textDecoration: 'none',
                        transition: 'transform 0.2s',
                        border: '2px solid white'
                    }}
                        onMouseOver={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'white' }}
                        onMouseOut={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = 'var(--brand-black)' }}
                    >
                        Start Diagnosis <ArrowRight size={20} />
                    </Link>
                </div>

                {/* Visual Representation of Grades */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', opacity: 0.5 }}>
                    {[1, 2, 3, 4, 5, 6].map(grade => (
                        <div key={grade} style={{
                            aspectRatio: '1', border: '2px solid rgba(255,255,255,0.1)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontWeight: 900, fontSize: '1.5rem', color: 'rgba(255,255,255,0.2)'
                        }}>
                            G{grade}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Section_Estimator;
