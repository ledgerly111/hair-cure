import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h3>Hair Cure</h3>
                    <p>Restoring confidence through advanced hair transplantation and cosmetic treatments. Rated 5.0 stars for our natural results and exceptional care.</p>
                </div>

                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/gallery">Before & After</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Services</h3>
                    <ul className="footer-links">
                        <li><Link to="/services">Hair Transplantation</Link></li>
                        <li><Link to="/services">PRP Therapy</Link></li>
                        <li><Link to="/services">Scalp Micropigmentation</Link></li>
                        <li><Link to="/services">Dandruff Treatment</Link></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Contact Us</h3>
                    <p><MapPin size={18} style={{ display: 'inline', marginRight: '10px', color: 'var(--primary-blue)' }} /> Edappazhanji, Thiruvananthapuram</p>
                    <p><Phone size={18} style={{ display: 'inline', marginRight: '10px', color: 'var(--primary-blue)' }} /> +91 95671 01002</p>
                    <p><Mail size={18} style={{ display: 'inline', marginRight: '10px', color: 'var(--primary-blue)' }} /> info@haircure.com</p>
                    <div className="social-links">
                        <a href="https://www.instagram.com/haircureclinic/" target="_blank" rel="noreferrer" className="social-icon"><Instagram size={20} /></a>
                        <a href="https://www.facebook.com/haircureclinic/" target="_blank" rel="noreferrer" className="social-icon"><Facebook size={20} /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Hair Cure Transplant & Cosmetic Centre. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
