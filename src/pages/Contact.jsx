import React, { useState } from 'react';
import { Reveal } from '../components/ui/Reveal';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', phone: '', service: 'Hair Transplant', message: '' });

    return (
        <div className="contact-page" style={{ paddingTop: '80px', background: 'var(--brand-white)' }}>
            <section className="contact-hero" style={{ padding: '8rem 2rem 6rem', background: 'var(--brand-black)', color: 'white' }}>
                <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto', textAlign: 'center' }}>
                    <Reveal>
                        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 900, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '-1px', lineHeight: 0.9 }}>
                            Get in <span style={{ color: 'var(--brand-orange)' }}>Touch</span>
                        </h1>
                        <p style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', color: 'rgba(255,255,255,0.7)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
                            Have questions? Book your consultation or visit our clinic in Thiruvananthapuram.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="contact-main" style={{ padding: '6rem 2rem', maxWidth: 'var(--container-width)', margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem' }}>
                    <div className="contact-info">
                        <Reveal>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '2rem', textTransform: 'uppercase' }}>Contact Info</h2>
                            <div style={{ display: 'grid', gap: '2.5rem' }}>
                                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div style={{ width: '50px', height: '50px', background: 'var(--brand-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-orange)', flexShrink: 0 }}>
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Visit Us</h4>
                                        <p style={{ color: '#666', lineHeight: 1.6 }}>First Floor, Makayiram Heights, Junction, near Edappazhanji Signal, Edapazhanji, Thiruvananthapuram, Kerala 695014</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div style={{ width: '50px', height: '50px', background: 'var(--brand-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-orange)', flexShrink: 0 }}>
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Call Us</h4>
                                        <p style={{ color: '#666', lineHeight: 1.6 }}>+91 95671 01002<br />+91 95671 01004</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div style={{ width: '50px', height: '50px', background: 'var(--brand-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-orange)', flexShrink: 0 }}>
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Email Us</h4>
                                        <p style={{ color: '#666', lineHeight: 1.6 }}>info@haircure.com</p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginTop: '3rem' }}>
                                <h4 style={{ marginBottom: '1rem', fontWeight: 800, textTransform: 'uppercase' }}>Follow Us</h4>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <a href="#" className="social-icon" style={{ width: '50px', height: '50px', background: 'white', border: '2px solid var(--brand-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-black)', transition: 'all 0.2s' }}
                                        onMouseOver={e => { e.currentTarget.style.background = 'var(--brand-black)'; e.currentTarget.style.color = 'white' }}
                                        onMouseOut={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = 'var(--brand-black)' }}
                                    ><Instagram /></a>
                                    <a href="#" className="social-icon" style={{ width: '50px', height: '50px', background: 'white', border: '2px solid var(--brand-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-black)', transition: 'all 0.2s' }}
                                        onMouseOver={e => { e.currentTarget.style.background = 'var(--brand-black)'; e.currentTarget.style.color = 'white' }}
                                        onMouseOut={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = 'var(--brand-black)' }}
                                    ><Facebook /></a>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="contact-form-wrapper">
                        <Reveal delay={0.2}>
                            <div className="contact-form" style={{ background: '#F9FAFB', padding: '3.5rem', border: '1px solid #E5E7EB' }}>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '2rem', textTransform: 'uppercase' }}>Book Consultation</h3>
                                <form style={{ display: 'grid', gap: '1.5rem' }}>
                                    <div style={{ display: 'grid', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--brand-black)', textTransform: 'uppercase' }}>Full Name</label>
                                        <input type="text" placeholder="John Doe" style={{ padding: '1.2rem', borderRadius: '0', border: '2px solid #E5E7EB', outline: 'none', background: 'white' }} onFocus={(e) => e.target.style.borderColor = 'var(--brand-orange)'} onBlur={(e) => e.target.style.borderColor = '#E5E7EB'} />
                                    </div>
                                    <div style={{ display: 'grid', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--brand-black)', textTransform: 'uppercase' }}>Phone Number</label>
                                        <input type="tel" placeholder="+91 98765 43210" style={{ padding: '1.2rem', borderRadius: '0', border: '2px solid #E5E7EB', outline: 'none', background: 'white' }} onFocus={(e) => e.target.style.borderColor = 'var(--brand-orange)'} onBlur={(e) => e.target.style.borderColor = '#E5E7EB'} />
                                    </div>
                                    <div style={{ display: 'grid', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--brand-black)', textTransform: 'uppercase' }}>Service Interested In</label>
                                        <select style={{ padding: '1.2rem', borderRadius: '0', border: '2px solid #E5E7EB', outline: 'none', background: 'white', color: '#666' }}>
                                            <option>Hair Transplant</option>
                                            <option>PRP Therapy</option>
                                            <option>Cosmetic Treatment</option>
                                        </select>
                                    </div>
                                    <div style={{ display: 'grid', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--brand-black)', textTransform: 'uppercase' }}>Message (Optional)</label>
                                        <textarea placeholder="Tell us more..." rows="4" style={{ padding: '1.2rem', borderRadius: '0', border: '2px solid #E5E7EB', outline: 'none', resize: 'none', background: 'white' }} onFocus={(e) => e.target.style.borderColor = 'var(--brand-orange)'} onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}></textarea>
                                    </div>
                                    <button type="submit" style={{ background: 'var(--brand-black)', color: 'white', padding: '1.4rem', border: '2px solid var(--brand-black)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '1.1rem', cursor: 'pointer', marginTop: '1rem', transition: 'all 0.2s' }}
                                        onMouseOver={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--brand-black)' }}
                                        onMouseOut={e => { e.currentTarget.style.background = 'var(--brand-black)'; e.currentTarget.style.color = 'white' }}
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="map-section" style={{ padding: '0', borderTop: '1px solid #E5E7EB' }}>
                <Reveal width="100%">
                    <div style={{ height: '500px', width: '100%', filter: 'grayscale(1) contrast(1.1)' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3945.867768567!2d76.9688282!3d8.5044549!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbcf0b2b5163%3A0xf5240a75bc37e32a!2sHair%20Cure%20Transplant%20%26%20Cosmetic%20Centre!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Hair Cure Location"
                        ></iframe>
                    </div>
                </Reveal>
            </section>
        </div>
    );
};

export default Contact;
