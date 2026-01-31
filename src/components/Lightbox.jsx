import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Lightbox.css';

const Lightbox = ({ isOpen, onClose, item, onPrev, onNext, hasPrev, hasNext }) => {
    // Lock body scroll when lightbox is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

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
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: 'spring', damping: 25 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className="lightbox-close" onClick={onClose}>
                        <X size={24} />
                    </button>

                    <div className="lightbox-images">
                        <div className="lightbox-image-wrapper">
                            <span className="lightbox-label">Before</span>
                            <img src={item.beforeImage} alt="Before" />
                        </div>
                        <div className="lightbox-image-wrapper">
                            <span className="lightbox-label">After</span>
                            <img src={item.afterImage} alt="After" />
                        </div>
                    </div>

                    <div className="lightbox-info">
                        <span className="lightbox-category">{item.category}</span>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>

                    <div className="lightbox-nav">
                        <button
                            className="lightbox-nav-btn"
                            onClick={onPrev}
                            disabled={!hasPrev}
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            className="lightbox-nav-btn"
                            onClick={onNext}
                            disabled={!hasNext}
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Lightbox;
