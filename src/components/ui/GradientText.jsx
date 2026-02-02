import React from 'react';
import { motion } from 'framer-motion';

export const GradientText = ({ children, className = '', animate = true }) => {
    return (
        <motion.span
            className={`gradient-text ${className}`}
            style={{
                background: 'linear-gradient(90deg, var(--brand-orange), var(--brand-yellow), var(--brand-pink), var(--brand-orange))',
                backgroundSize: '300% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
            }}
            animate={animate ? {
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            } : {}}
            transition={animate ? {
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
            } : {}}
        >
            {children}
        </motion.span>
    );
};

export default GradientText;
