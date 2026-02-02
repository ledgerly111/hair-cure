import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const MagneticButton = ({ children, className = '', strength = 0.3, ...props }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    
    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        
        setPosition({
            x: distanceX * strength,
            y: distanceY * strength
        });
    };
    
    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };
    
    return (
        <motion.button
            ref={ref}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.5 }}
            {...props}
        >
            <motion.span
                animate={{ x: position.x * 0.5, y: position.y * 0.5 }}
                transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.5 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
                {children}
            </motion.span>
        </motion.button>
    );
};

export default MagneticButton;
