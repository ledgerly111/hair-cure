import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const GlowCard = ({ children, className = '', glowColor = 'var(--brand-orange)' }) => {
    const ref = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    
    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };
    
    return (
        <motion.div
            ref={ref}
            className={`glow-card ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                position: 'relative',
                overflow: 'hidden',
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
            {/* Glow effect */}
            <motion.div
                style={{
                    position: 'absolute',
                    width: '200px',
                    height: '200px',
                    background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    left: mousePosition.x - 100,
                    top: mousePosition.y - 100,
                    opacity: isHovered ? 0.15 : 0,
                    filter: 'blur(20px)',
                }}
                animate={{ opacity: isHovered ? 0.15 : 0 }}
                transition={{ duration: 0.3 }}
            />
            {children}
        </motion.div>
    );
};

export default GlowCard;
