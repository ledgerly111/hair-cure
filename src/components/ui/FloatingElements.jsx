import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const FloatingElements = ({ count = 5, color = 'var(--brand-orange)' }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        const checkMotion = () => {
            const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
            setPrefersReducedMotion(mediaQuery.matches);
        };
        
        checkMobile();
        checkMotion();
        
        window.addEventListener('resize', checkMobile);
        
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        mediaQuery.addEventListener('change', checkMotion);
        
        return () => {
            window.removeEventListener('resize', checkMobile);
            mediaQuery.removeEventListener('change', checkMotion);
        };
    }, []);

    // Don't render on mobile or if user prefers reduced motion
    if (isMobile || prefersReducedMotion) {
        return null;
    }

    // Limit count on lower-end devices
    const elementCount = Math.min(count, 3);

    const elements = Array.from({ length: elementCount }, (_, i) => ({
        id: i,
        size: Math.random() * 100 + 50,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 5 + 8, // Slower for better performance
        delay: Math.random() * 3,
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
                        willChange: 'transform',
                    }}
                    animate={{
                        y: [0, -20, 0],
                        x: [0, 10, 0],
                        scale: [1, 1.05, 1],
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
