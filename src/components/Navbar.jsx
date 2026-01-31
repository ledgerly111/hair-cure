import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

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

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="logo-container">
                        <div className="logo-icon">
                            <div className="logo-dot"></div>
                        </div>
                        Hair Cure<span style={{ color: 'var(--brand-yellow)' }}>.</span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="nav-links">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/" state={{ scrollToServices: true }} className="nav-link">Services</Link>
                        <Link to="/results" className="nav-link">Clinical Results</Link>
                        <Link to="/about" className="nav-link">About</Link>
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <Link to="/contact" className="nav-btn">
                            Book Now
                        </Link>

                        <button className="mobile-menu-btn" onClick={() => setIsOpen(true)}>
                            <Menu size={24} strokeWidth={3} />
                        </button>
                    </div>
                </div>
            </nav>

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
                            {/* Removed System Tag */}
                            <div />
                            <button className="close-btn" onClick={() => setIsOpen(false)}>
                                <X size={32} />
                            </button>
                        </div>

                        <div className="mobile-links-container">
                            {['Home', 'Services', 'Results', 'About', 'Contact'].map((item) => (
                                <motion.div
                                    key={item}
                                    variants={itemVariants}
                                    className="menu-item-wrapper"
                                >
                                    <Link
                                        to={item === 'Home' || item === 'Services' ? '/' : `/${item.toLowerCase()}`}
                                        state={item === 'Services' ? { scrollToServices: true } : {}}
                                        className="mobile-nav-link"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            {item === 'Results' ? 'Clinical Results' : item}
                                            <ArrowUpRight size={32} className="menu-arrow" />
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
