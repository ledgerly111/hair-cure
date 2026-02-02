import React from 'react';
import { motion } from 'framer-motion';

export const FloatingElements = ({ count = 5, color = 'var(--brand-orange)' }) => {
    const elements = Array.from({ length: count }, (_, i) => ({
        id: i,
        size: Math.random() * 100 + 50,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
    }));
    
    return (
        <div style={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 0,
        }}>
            {elements.map((el) => (
                <motion.div
                    key={el.id}
                    style={{
                        position: 'absolute',
                        width: el.size,
                        height: el.size,
                        borderRadius: '50%',
                        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
                        left: `${el.x}%`,
                        top: `${el.y}%`,
                        opacity: 0.05,
                        filter: 'blur(40px)',
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 15, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: el.duration,
                        repeat: Infinity,
                        delay: el.delay,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingElements;
