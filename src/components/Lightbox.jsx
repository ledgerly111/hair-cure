import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Lightbox.css';

const Lightbox = ({ isOpen, onClose, item, onPrev, onNext, hasPrev, hasNext }) => {
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Lock body scroll when lightbox is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.touchAction = 'none';
        } else {
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
        };
    }, [isOpen]);

    // Handle swipe gestures
    const handleDragEnd = (e, info) => {
        if (!isMobile) return;
        
        const threshold = 50;
        if (info.offset.x < -threshold && hasNext) {
            onNext();
        } else if (info.offset.x > threshold && hasPrev) {
            onPrev();
        } else if (info.offset.y > threshold) {
            onClose();
        }
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return;
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft' && hasPrev) onPrev();
            if (e.key === 'ArrowRight' && hasNext) onNext();
        };
        
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, hasPrev, hasNext, onClose, onPrev, onNext]);

    if (!isOpen || !item) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="lightbox-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="lightbox-content"
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    onClick={(e) => e.stopPropagation()}
                    drag={isMobile ? "y" : false}
                    dragConstraints={{ top: 0, bottom: 0 }}
                    dragElastic={0.2}
                    onDragEnd={handleDragEnd}
                >
                    {/* Swipe hint for mobile */}
                    {isMobile && (
                        <div style={{
                            position: 'absolute',
                            top: '8px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '40px',
                            height: '4px',
                            background: 'rgba(255,255,255,0.3)',
                            borderRadius: '2px',
                            zIndex: 11
                        }} />
                    )}

                    <button 
                        className="lightbox-close" 
                        onClick={onClose}
                        aria-label="Close"
                    >
                        <X size={isMobile ? 20 : 24} />
                    </button>

                    <div 
                        className="lightbox-images"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                            gap: '2px',
                            background: '#000'
                        }}
                    >
                        <div className="lightbox-image-wrapper">
                            <span className="lightbox-label">Before</span>
                            <img 
                                src={item.beforeImage} 
                                alt="Before" 
                                style={{
                                    width: '100%',
                                    height: isMobile ? '200px' : '350px',
                                    objectFit: 'cover',
                                    display: 'block'
                                }}
                            />
                        </div>
                        <div className="lightbox-image-wrapper">
                            <span className="lightbox-label">After</span>
                            <img 
                                src={item.afterImage} 
                                alt="After" 
                                style={{
                                    width: '100%',
                                    height: isMobile ? '200px' : '350px',
                                    objectFit: 'cover',
                                    display: 'block'
                                }}
                            />
                        </div>
                    </div>

                    <div className="lightbox-info" style={{
                        padding: isMobile ? '1.25rem' : '1.5rem',
                        textAlign: 'center'
                    }}>
                        <span className="lightbox-category">{item.category}</span>
                        <h2 style={{
                            fontSize: isMobile ? '1.25rem' : '1.5rem',
                            fontWeight: 800,
                            marginBottom: '0.5rem',
                            color: 'var(--brand-black)'
                        }}>
                            {item.title}
                        </h2>
                        <p style={{
                            color: '#666',
                            fontSize: isMobile ? '0.9rem' : '0.95rem',
                            maxWidth: '500px',
                            margin: '0 auto',
                            lineHeight: 1.6
                        }}>
                            {item.description}
                        </p>
                    </div>

                    <div className="lightbox-nav" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1rem',
                        paddingBottom: isMobile ? 'calc(1.5rem + env(safe-area-inset-bottom))' : '1.5rem'
                    }}>
                        <button
                            className="lightbox-nav-btn"
                            onClick={onPrev}
                            disabled={!hasPrev}
                            aria-label="Previous"
                            style={{
                                background: 'var(--brand-orange)',
                                border: 'none',
                                color: 'white',
                                width: isMobile ? '48px' : '44px',
                                height: isMobile ? '48px' : '44px',
                                borderRadius: '50%',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                opacity: hasPrev ? 1 : 0.3,
                                transition: 'all 0.2s'
                            }}
                        >
                            <ChevronLeft size={isMobile ? 24 : 20} />
                        </button>
                        <button
                            className="lightbox-nav-btn"
                            onClick={onNext}
                            disabled={!hasNext}
                            aria-label="Next"
                            style={{
                                background: 'var(--brand-orange)',
                                border: 'none',
                                color: 'white',
                                width: isMobile ? '48px' : '44px',
                                height: isMobile ? '48px' : '44px',
                                borderRadius: '50%',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                opacity: hasNext ? 1 : 0.3,
                                transition: 'all 0.2s'
                            }}
                        >
                            <ChevronRight size={isMobile ? 24 : 20} />
                        </button>
                    </div>

                    {/* Swipe indicator text for mobile */}
                    {isMobile && (
                        <p style={{
                            textAlign: 'center',
                            fontSize: '0.75rem',
                            color: '#999',
                            marginBottom: '1rem'
                        }}>
                            Swipe to navigate • Drag down to close
                        </p>
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Lightbox;
