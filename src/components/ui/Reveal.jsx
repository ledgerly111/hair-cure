import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation, useReducedMotion } from 'framer-motion';

export const Reveal = ({ 
    children, 
    width = "fit-content", 
    delay = 0.25, 
    x = 0, 
    y = 50,
    once = true
}) => {
    const ref = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const shouldReduceMotion = useReducedMotion();
    
    // Use larger viewport margin on mobile for earlier trigger
    const margin = isMobile ? "-10%" : "-20%";
    const isInView = useInView(ref, { once, margin });
    const mainControls = useAnimation();

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (shouldReduceMotion) {
            mainControls.set("visible");
            return;
        }
        
        if (isInView) {
            mainControls.start("visible");
        } else if (!once) {
            mainControls.start("hidden");
        }
    }, [isInView, mainControls, once, shouldReduceMotion]);

    // Simpler animation for mobile and reduced motion
    const variants = shouldReduceMotion ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    } : {
        hidden: { 
            opacity: 0, 
            x: isMobile ? x * 0.5 : x, 
            y: isMobile ? y * 0.5 : y 
        },
        visible: { 
            opacity: 1, 
            x: 0, 
            y: 0 
        }
    };

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={variants}
                initial="hidden"
                animate={mainControls}
                transition={{ 
                    duration: isMobile ? 0.4 : 0.5, 
                    delay: isMobile ? delay * 0.7 : delay, 
                    ease: "easeOut" 
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Reveal;
