import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Track scroll for navbar styling
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const menuVariants = {
        closed: {
            clipPath: "circle(0% at calc(100% - 40px) 40px)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        open: {
            clipPath: "circle(150% at calc(100% - 40px) 40px)",
            transition: {
                type: "spring",
                stiffness: 60,
                damping: 20,
                restDelta: 2,
                staggerChildren: 0.08,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        closed: { opacity: 0, x: 50, filter: 'blur(10px)' },
        open: {
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',
            transition: { ease: [0.22, 1, 0.36, 1], duration: 0.8 }
        }
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/', state: { scrollToServices: true } },
        { name: 'Results', path: '/results' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <>
            <motion.nav 
                className="navbar"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                style={{
                    background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.9)',
                    boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.1)' : 'none',
                }}
            >
                <div className="navbar-container">
                    <Link to="/" className="logo-container">
                        <motion.div 
                            className="logo-icon"
                            whileHover={{ rotate: 180, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <div className="logo-dot"></div>
                        </motion.div>
                        <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Hair Cure<span style={{ color: 'var(--brand-yellow)' }}>.</span>
                        </motion.span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="nav-links">
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i }}
                            >
                                <Link 
                                    to={link.path} 
                                    state={link.state}
                                    className="nav-link"
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <Link to="/contact" className="nav-btn">
                            Book Now
                        </Link>

                        <motion.button 
                            className="mobile-menu-btn" 
                            onClick={() => setIsOpen(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Menu size={24} strokeWidth={3} />
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                    >
                        <div className="menu-header">
                            <div />
                            <motion.button 
                                className="close-btn" 
                                onClick={() => setIsOpen(false)}
                                whileHover={{ rotate: 90, scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <X size={32} />
                            </motion.button>
                        </div>

                        <div className="mobile-links-container">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    variants={itemVariants}
                                    className="menu-item-wrapper"
                                >
                                    <Link
                                        to={link.path}
                                        state={link.state}
                                        className="mobile-nav-link"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <span>{link.name}</span>
                                            <motion.div
                                                initial={{ opacity: 0, x: -20 }}
                                                whileHover={{ opacity: 1, x: 0 }}
                                            >
                                                <ArrowUpRight size={32} className="menu-arrow" />
                                            </motion.div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Menu Footer */}
                        <motion.div 
                            className="menu-footer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <p style={{ color: 'rgba(0,0,0,0.5)', fontSize: '0.9rem' }}>
                                © 2026 Hair Cure. All rights reserved.
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
