import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const TextReveal = ({ 
    children, 
    className = '',
    delay = 0,
    once = true
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: "-50px" });
    
    const words = children.split(' ');
    
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.05,
                delayChildren: delay,
            },
        },
    };
    
    const wordVariants = {
        hidden: { 
            opacity: 0, 
            y: 20,
            rotateX: -90,
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };
    
    return (
        <motion.span
            ref={ref}
            className={className}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{ display: 'inline-flex', flexWrap: 'wrap' }}
        >
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    variants={wordVariants}
                    style={{ 
                        display: 'inline-block', 
                        marginRight: '0.3em',
                        perspective: '1000px',
                    }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default TextReveal;
