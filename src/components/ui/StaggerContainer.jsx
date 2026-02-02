import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const StaggerContainer = ({ 
    children, 
    className = '',
    staggerDelay = 0.1,
    delayChildren = 0
}) => {
    const [isMobile, setIsMobile] = useState(false);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Simpler animation on mobile
    const containerVariants = {
        hidden: { opacity: shouldReduceMotion ? 1 : 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: isMobile ? staggerDelay * 0.5 : staggerDelay,
                delayChildren: isMobile ? delayChildren * 0.7 : delayChildren,
            },
        },
    };

    return (
        <motion.div
            className={className}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: isMobile ? "-5%" : "-50px" }}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem = ({ children, className = '', direction = 'up' }) => {
    const [isMobile, setIsMobile] = useState(false);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const directions = {
        up: { y: isMobile ? 20 : 40, x: 0 },
        down: { y: isMobile ? -20 : -40, x: 0 },
        left: { y: 0, x: isMobile ? 20 : 40 },
        right: { y: 0, x: isMobile ? -20 : -40 },
    };

    // Simpler animation for mobile and reduced motion
    const itemVariants = {
        hidden: shouldReduceMotion ? { 
            opacity: 0 
        } : { 
            opacity: 0, 
            ...directions[direction]
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: isMobile ? 0.3 : 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <motion.div className={className} variants={itemVariants}>
            {children}
        </motion.div>
    );
};

export default StaggerContainer;
