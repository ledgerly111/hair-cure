import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    
    // Touch handling for swipe to close
    const x = useMotionValue(0);
    const opacity = useTransform(x, [0, 100], [1, 0]);
    const scale = useTransform(x, [0, 100], [1, 0.95]);

    // Track scroll for navbar styling
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
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
            document.body.style.touchAction = 'none';
        } else {
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
        };
    }, [isOpen]);

    // Handle swipe to close
    const handleDragEnd = useCallback((_, info) => {
        if (info.offset.x > 80 || info.velocity.x > 500) {
            setIsOpen(false);
        }
    }, []);

    const menuVariants = {
        closed: {
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        open: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
                staggerChildren: 0.08,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        closed: { opacity: 0, x: 30 },
        open: {
            opacity: 1,
            x: 0,
            transition: { 
                type: "spring",
                stiffness: 300,
                damping: 24
            }
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
                className={`navbar ${scrolled ? 'scrolled' : ''}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
                <div className="navbar-container">
                    <Link to="/" className="logo-container">
                        <motion.div 
                            className="logo-icon"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400 }}
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

                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                        {/* Quick Call Button - Mobile Only */}
                        <motion.a 
                            href="tel:+919567101002"
                            className="hide-desktop"
                            style={{
                                width: '44px',
                                height: '44px',
                                background: 'var(--brand-orange)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                            }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Phone size={20} />
                        </motion.a>

                        <Link to="/contact" className="nav-btn">
                            Book Now
                        </Link>

                        <motion.button 
                            className="mobile-menu-btn" 
                            onClick={() => setIsOpen(true)}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Open menu"
                        >
                            <Menu size={22} strokeWidth={2.5} />
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            style={{
                                position: 'fixed',
                                inset: 0,
                                background: 'rgba(0,0,0,0.5)',
                                zIndex: 199,
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                        />
                        
                        {/* Menu Panel */}
                        <motion.div
                            className="mobile-menu"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                            style={{ x, opacity, scale }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 100 }}
                            dragElastic={0.2}
                            onDragEnd={handleDragEnd}
                            dragSnapToOrigin={false}
                        >
                            {/* Swipe handle indicator */}
                            <div className="hide-desktop" style={{
                                position: 'absolute',
                                top: '12px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '40px',
                                height: '4px',
                                background: 'rgba(0,0,0,0.2)',
                                borderRadius: '2px',
                            }} />

                            <div className="menu-header">
                                <div />
                                <motion.button 
                                    className="close-btn" 
                                    onClick={() => setIsOpen(false)}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label="Close menu"
                                >
                                    <X size={24} />
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
                                            <div style={{ 
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                justifyContent: 'space-between' 
                                            }}>
                                                <span>{link.name}</span>
                                                <ArrowUpRight size={24} className="menu-arrow" />
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}

                                {/* Quick Contact Buttons - Mobile */}
                                <motion.div 
                                    variants={itemVariants}
                                    className="quick-contact-bar"
                                >
                                    <a 
                                        href="tel:+919567101002"
                                        className="quick-contact-btn secondary"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <Phone size={18} />
                                        Call
                                    </a>
                                    <Link 
                                        to="/contact"
                                        className="quick-contact-btn"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Book Now
                                    </Link>
                                </motion.div>
                            </div>

                            <motion.div 
                                className="menu-footer"
                                variants={itemVariants}
                            >
                                <p>© 2026 Hair Cure. All rights reserved.</p>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
