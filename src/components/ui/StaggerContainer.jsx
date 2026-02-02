import React from 'react';
import { motion } from 'framer-motion';

export const StaggerContainer = ({ 
    children, 
    className = '',
    staggerDelay = 0.1,
    delayChildren = 0
}) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: delayChildren,
            },
        },
    };
    
    return (
        <motion.div
            className={className}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem = ({ children, className = '', direction = 'up' }) => {
    const directions = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { y: 0, x: 40 },
        right: { y: 0, x: -40 },
    };
    
    const itemVariants = {
        hidden: { 
            opacity: 0, 
            ...directions[direction]
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.5,
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
