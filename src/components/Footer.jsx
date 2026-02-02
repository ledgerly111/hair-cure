import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/Footer.css';

const Footer = () => {
    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/', state: { scrollToServices: true } },
        { name: 'Results', path: '/results' },
        { name: 'Contact Us', path: '/contact' }
    ];

    const services = [
        { name: 'Hair Transplantation', path: '/services', state: { serviceId: 'transplant' } },
        { name: 'PRP Therapy', path: '/services', state: { serviceId: 'prp' } },
        { name: 'Scalp Micropigmentation', path: '/services', state: { serviceId: 'smp' } },
        { name: 'Beard Transplant', path: '/services', state: { serviceId: 'beard' } }
    ];

    return (
        <footer className="footer">
            <div className="footer-container">
                <motion.div 
                    className="footer-column"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0 }}
                >
                    <h3 className="footer-logo">Hair Cure</h3>
                    <p className="footer-desc">
                        Restoring confidence through advanced hair transplantation and cosmetic treatments. 
                        Rated 5.0 stars for our natural results and exceptional care.
                    </p>
                    
                    <div className="footer-social">
                        <motion.a 
                            href="https://www.instagram.com/haircureclinic/" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="social-icon"
                            whileHover={{ scale: 1.1, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Instagram size={20} />
                        </motion.a>
                        <motion.a 
                            href="https://www.facebook.com/haircureclinic/" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="social-icon"
                            whileHover={{ scale: 1.1, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Facebook size={20} />
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div 
                    className="footer-column"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    <h4>Quick Links</h4>
                    <ul className="footer-links">
                        {quickLinks.map((link, i) => (
                            <li key={i}>
                                <Link 
                                    to={link.path} 
                                    state={link.state}
                                    className="footer-link"
                                >
                                    <ArrowUpRight size={14} className="link-icon" />
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div 
                    className="footer-column"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <h4>Services</h4>
                    <ul className="footer-links">
                        {services.map((service, i) => (
                            <li key={i}>
                                <Link 
                                    to={service.path}
                                    state={service.state}
                                    className="footer-link"
                                >
                                    <ArrowUpRight size={14} className="link-icon" />
                                    {service.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div 
                    className="footer-column"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <h4>Contact Us</h4>
                    <div className="footer-contact">
                        <p>
                            <MapPin size={18} className="contact-icon" /> 
                            Edappazhanji, Thiruvananthapuram
                        </p>
                        <p>
                            <Phone size={18} className="contact-icon" /> 
                            +91 95671 01002
                        </p>
                        <p>
                            <Mail size={18} className="contact-icon" /> 
                            info@haircure.com
                        </p>
                    </div>
                </motion.div>
            </div>
            
            <motion.div 
                className="footer-bottom"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
            >
                <p>&copy; {new Date().getFullYear()} Hair Cure Transplant & Cosmetic Centre. All rights reserved.</p>
            </motion.div>
        </footer>
    );
};

export default Footer;
