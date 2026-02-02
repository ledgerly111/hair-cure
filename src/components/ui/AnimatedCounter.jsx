import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

export const AnimatedCounter = ({ value, suffix = '', prefix = '', duration = 2 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hasAnimated, setHasAnimated] = useState(false);
    
    // Extract numeric value from string like "4.9/5" or "1000+"
    const numericMatch = value.toString().match(/[\d.]+/);
    const numericValue = numericMatch ? parseFloat(numericMatch[0]) : 0;
    const isInteger = Number.isInteger(numericValue);
    
    const springValue = useSpring(0, {
        duration: duration * 1000,
        bounce: 0
    });
    
    const displayValue = useTransform(springValue, (latest) => {
        if (isInteger) {
            return Math.floor(latest);
        }
        return latest.toFixed(1);
    });
    
    const [display, setDisplay] = useState('0');
    
    useEffect(() => {
        if (isInView && !hasAnimated) {
            springValue.set(numericValue);
            setHasAnimated(true);
        }
    }, [isInView, hasAnimated, numericValue, springValue]);
    
    useEffect(() => {
        const unsubscribe = displayValue.on("change", (latest) => {
            setDisplay(String(latest));
        });
        return () => unsubscribe();
    }, [displayValue]);
    
    // Reconstruct the full value with prefix/suffix
    const fullValue = value.toString();
    const beforeNumber = fullValue.substring(0, fullValue.indexOf(String(numericValue)));
    const afterNumber = fullValue.substring(fullValue.indexOf(String(numericValue)) + String(numericValue).length);
    
    return (
        <motion.span ref={ref} className="counter-value">
            {prefix}{beforeNumber}{display}{afterNumber}{suffix}
        </motion.span>
    );
};

export default AnimatedCounter;
