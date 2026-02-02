import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/ui/Reveal';
import { StaggerContainer, StaggerItem } from '../components/ui/StaggerContainer';
import { GradientText } from '../components/ui/GradientText';
import { FloatingElements } from '../components/ui/FloatingElements';
import { MapPin, Phone, Mail, Instagram, Facebook, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ 
        name: '', 
        phone: '', 
        service: 'Hair Transplant', 
        message: '' 
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
        }, 1500);
    };

    const contactInfo = [
        { 
            icon: <MapPin size={24} />, 
            title: "Visit Us", 
            content: "First Floor, Makayiram Heights, Junction, near Edappazhanji Signal, Edapazhanji, Thiruvananthapuram, Kerala 695014",
            delay: 0
        },
        { 
            icon: <Phone size={24} />, 
            title: "Call Us", 
            content: "+91 95671 01002\n+91 95671 01004",
            delay: 0.1
        },
        { 
            icon: <Mail size={24} />, 
            title: "Email Us", 
            content: "info@haircure.com",
            delay: 0.2
        }
    ];

    return (
        <div className="contact-page" style={{ paddingTop: '80px', background: 'var(--brand-white)' }}>
            {/* Hero Section */}
            <section className="contact-hero" style={{ 
                padding: '8rem 2rem 6rem', 
                background: 'var(--brand-black)', 
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <FloatingElements count={3} color="var(--brand-orange)" />
                
                <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <Reveal>
                        <h1 style={{ 
                            fontSize: 'clamp(3rem, 8vw, 5rem)', 
                            fontWeight: 900, 
                            marginBottom: '2rem', 
                            textTransform: 'uppercase', 
                            letterSpacing: '-1px', 
                            lineHeight: 0.9 
                        }}>
                            Get in <GradientText>Touch</GradientText>
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
                            Have questions? Book your consultation or visit our clinic in Thiruvananthapuram.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Main Content */}
            <section className="contact-main" style={{ padding: '6rem 2rem', maxWidth: 'var(--container-width)', margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem' }}>
                    {/* Contact Info */}
                    <div className="contact-info">
                        <Reveal>
                            <h2 style={{ 
                                fontSize: '2.5rem', 
                                fontWeight: 900, 
                                marginBottom: '2rem', 
                                textTransform: 'uppercase',
                                color: 'var(--brand-black)'
                            }}>
                                Contact Info
                            </h2>
                            
                            <StaggerContainer style={{ display: 'grid', gap: '2.5rem' }} staggerDelay={0.1}>
                                {contactInfo.map((info, i) => (
                                    <StaggerItem key={i}>
                                        <motion.div 
                                            style={{ 
                                                display: 'flex', 
                                                gap: '1.5rem', 
                                                alignItems: 'flex-start' 
                                            }}
                                            whileHover={{ x: 10 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                        >
                                            <motion.div 
                                                style={{ 
                                                    width: '50px', 
                                                    height: '50px', 
                                                    background: 'var(--brand-black)', 
                                                    display: 'flex', 
                                                    alignItems: 'center', 
                                                    justifyContent: 'center', 
                                                    color: 'var(--brand-orange)', 
                                                    flexShrink: 0,
                                                    borderRadius: '12px'
                                                }}
                                                whileHover={{ 
                                                    background: 'var(--brand-orange)',
                                                    color: 'white',
                                                    rotate: 5
                                                }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                {info.icon}
                                            </motion.div>
                                            <div>
                                                <h4 style={{ 
                                                    fontSize: '1.2rem', 
                                                    fontWeight: 800, 
                                                    marginBottom: '0.5rem', 
                                                    textTransform: 'uppercase',
                                                    color: 'var(--brand-black)'
                                                }}>
                                                    {info.title}
                                                </h4>
                                                <p style={{ 
                                                    color: '#666', 
                                                    lineHeight: 1.6,
                                                    whiteSpace: 'pre-line'
                                                }}>
                                                    {info.content}
                                                </p>
                                            </div>
                                        </motion.div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>

                            {/* Social Links */}
                            <motion.div 
                                style={{ marginTop: '3rem' }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                <h4 style={{ 
                                    marginBottom: '1rem', 
                                    fontWeight: 800, 
                                    textTransform: 'uppercase',
                                    color: 'var(--brand-black)'
                                }}>
                                    Follow Us
                                </h4>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    {[
                                        { icon: <Instagram size={20} />, href: "#" },
                                        { icon: <Facebook size={20} />, href: "#" }
                                    ].map((social, i) => (
                                        <motion.a 
                                            key={i}
                                            href={social.href}
                                            className="social-icon"
                                            style={{ 
                                                width: '50px', 
                                                height: '50px', 
                                                background: 'white', 
                                                border: '2px solid var(--brand-black)', 
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                justifyContent: 'center', 
                                                color: 'var(--brand-black)',
                                                borderRadius: '12px'
                                            }}
                                            whileHover={{ 
                                                background: 'var(--brand-orange)', 
                                                color: 'white',
                                                borderColor: 'var(--brand-orange)',
                                                y: -5
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                        >
                                            {social.icon}
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        </Reveal>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-wrapper">
                        <Reveal delay={0.2}>
                            <motion.div 
                                className="contact-form" 
                                style={{ 
                                    background: '#F9FAFB', 
                                    padding: '3rem', 
                                    border: '1px solid #E5E7EB',
                                    borderRadius: '16px'
                                }}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                {submitted ? (
                                    <motion.div
                                        style={{ textAlign: 'center', padding: '2rem' }}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                    >
                                        <motion.div
                                            style={{
                                                width: '80px',
                                                height: '80px',
                                                background: '#10B981',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '0 auto 1.5rem'
                                            }}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                                        >
                                            <CheckCircle size={40} color="white" />
                                        </motion.div>
                                        <h3 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '1rem' }}>
                                            Thank You!
                                        </h3>
                                        <p style={{ color: '#666' }}>
                                            We've received your message and will get back to you soon.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <>
                                        <h3 style={{ 
                                            fontSize: '1.8rem', 
                                            fontWeight: 900, 
                                            marginBottom: '2rem', 
                                            textTransform: 'uppercase',
                                            color: 'var(--brand-black)'
                                        }}>
                                            Book Consultation
                                        </h3>
                                        
                                        <form style={{ display: 'grid', gap: '1.5rem' }} onSubmit={handleSubmit}>
                                            <div style={{ display: 'grid', gap: '0.5rem' }}>
                                                <label style={{ 
                                                    fontSize: '0.9rem', 
                                                    fontWeight: 700, 
                                                    color: 'var(--brand-black)', 
                                                    textTransform: 'uppercase' 
                                                }}>
                                                    Full Name
                                                </label>
                                                <motion.input 
                                                    type="text" 
                                                    placeholder="John Doe" 
                                                    required
                                                    style={{ 
                                                        padding: '1.2rem', 
                                                        borderRadius: '8px', 
                                                        border: '2px solid #E5E7EB', 
                                                        outline: 'none', 
                                                        background: 'white',
                                                        fontSize: '1rem',
                                                        transition: 'all 0.3s'
                                                    }}
                                                    whileFocus={{ 
                                                        borderColor: 'var(--brand-orange)',
                                                        boxShadow: '0 0 0 4px rgba(249, 115, 22, 0.1)'
                                                    }}
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                                />
                                            </div>
                                            
                                            <div style={{ display: 'grid', gap: '0.5rem' }}>
                                                <label style={{ 
                                                    fontSize: '0.9rem', 
                                                    fontWeight: 700, 
                                                    color: 'var(--brand-black)', 
                                                    textTransform: 'uppercase' 
                                                }}>
                                                    Phone Number
                                                </label>
                                                <motion.input 
                                                    type="tel" 
                                                    placeholder="+91 98765 43210" 
                                                    required
                                                    style={{ 
                                                        padding: '1.2rem', 
                                                        borderRadius: '8px', 
                                                        border: '2px solid #E5E7EB', 
                                                        outline: 'none', 
                                                        background: 'white',
                                                        fontSize: '1rem'
                                                    }}
                                                    whileFocus={{ 
                                                        borderColor: 'var(--brand-orange)',
                                                        boxShadow: '0 0 0 4px rgba(249, 115, 22, 0.1)'
                                                    }}
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                                />
                                            </div>
                                            
                                            <div style={{ display: 'grid', gap: '0.5rem' }}>
                                                <label style={{ 
                                                    fontSize: '0.9rem', 
                                                    fontWeight: 700, 
                                                    color: 'var(--brand-black)', 
                                                    textTransform: 'uppercase' 
                                                }}>
                                                    Service Interested In
                                                </label>
                                                <motion.select 
                                                    style={{ 
                                                        padding: '1.2rem', 
                                                        borderRadius: '8px', 
                                                        border: '2px solid #E5E7EB', 
                                                        outline: 'none', 
                                                        background: 'white', 
                                                        color: '#666',
                                                        fontSize: '1rem',
                                                        cursor: 'pointer'
                                                    }}
                                                    whileFocus={{ 
                                                        borderColor: 'var(--brand-orange)',
                                                        boxShadow: '0 0 0 4px rgba(249, 115, 22, 0.1)'
                                                    }}
                                                    value={formData.service}
                                                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                                                >
                                                    <option>Hair Transplant</option>
                                                    <option>PRP Therapy</option>
                                                    <option>Cosmetic Treatment</option>
                                                    <option>Beard Transplant</option>
                                                    <option>Scalp Micropigmentation</option>
                                                </motion.select>
                                            </div>
                                            
                                            <div style={{ display: 'grid', gap: '0.5rem' }}>
                                                <label style={{ 
                                                    fontSize: '0.9rem', 
                                                    fontWeight: 700, 
                                                    color: 'var(--brand-black)', 
                                                    textTransform: 'uppercase' 
                                                }}>
                                                    Message (Optional)
                                                </label>
                                                <motion.textarea 
                                                    placeholder="Tell us more about your concerns..." 
                                                    rows="4" 
                                                    style={{ 
                                                        padding: '1.2rem', 
                                                        borderRadius: '8px', 
                                                        border: '2px solid #E5E7EB', 
                                                        outline: 'none', 
                                                        resize: 'none', 
                                                        background: 'white',
                                                        fontSize: '1rem',
                                                        fontFamily: 'inherit'
                                                    }}
                                                    whileFocus={{ 
                                                        borderColor: 'var(--brand-orange)',
                                                        boxShadow: '0 0 0 4px rgba(249, 115, 22, 0.1)'
                                                    }}
                                                    value={formData.message}
                                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                                />
                                            </div>
                                            
                                            <motion.button 
                                                type="submit" 
                                                disabled={isSubmitting}
                                                style={{ 
                                                    background: 'var(--brand-black)', 
                                                    color: 'white', 
                                                    padding: '1.4rem', 
                                                    border: '2px solid var(--brand-black)', 
                                                    fontWeight: 900, 
                                                    textTransform: 'uppercase', 
                                                    letterSpacing: '1px', 
                                                    fontSize: '1.1rem', 
                                                    cursor: isSubmitting ? 'wait' : 'pointer', 
                                                    marginTop: '1rem',
                                                    borderRadius: '8px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: '0.5rem'
                                                }}
                                                whileHover={{ 
                                                    background: 'transparent', 
                                                    color: 'var(--brand-black)',
                                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                                                }}
                                                whileTap={{ scale: 0.98 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {isSubmitting ? (
                                                    <motion.div
                                                        style={{
                                                            width: '20px',
                                                            height: '20px',
                                                            border: '3px solid transparent',
                                                            borderTopColor: 'currentColor',
                                                            borderRadius: '50%'
                                                        }}
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    />
                                                ) : (
                                                    <>
                                                        Send Message <Send size={18} />
                                                    </>
                                                )}
                                            </motion.button>
                                        </form>
                                    </>
                                )}
                            </motion.div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section" style={{ padding: '0', borderTop: '1px solid #E5E7EB' }}>
                <Reveal width="100%">
                    <motion.div 
                        style={{ height: '500px', width: '100%', filter: 'grayscale(1) contrast(1.1)' }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
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
                    </motion.div>
                </Reveal>
            </section>
        </div>
    );
};

export default Contact;
