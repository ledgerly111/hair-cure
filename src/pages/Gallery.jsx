import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from '../components/Lightbox';
import '../styles/Gallery.css';

// Mock data - will be replaced with Supabase data later
const mockTransformations = [
    {
        id: 1,
        category: 'Hair Transplant',
        title: 'FUE Hair Restoration',
        description: '3000 grafts transplanted with natural hairline design.',
        beforeImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
        afterImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=400&fit=crop',
    },
    {
        id: 2,
        category: 'Hair Transplant',
        title: 'Crown Restoration',
        description: 'Complete crown coverage with 2500 grafts.',
        beforeImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=400&fit=crop',
        afterImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=400&fit=crop',
    },
    {
        id: 3,
        category: 'PRP Therapy',
        title: 'Hair Density Improvement',
        description: '6 sessions of PRP therapy for thicker, healthier hair.',
        beforeImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=400&fit=crop',
        afterImage: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=400&fit=crop',
    },
    {
        id: 4,
        category: 'Cosmetic',
        title: 'Scalp Micropigmentation',
        description: 'Natural-looking hairline recreation using SMP technique.',
        beforeImage: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&h=400&fit=crop',
        afterImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=400&fit=crop',
    },
    {
        id: 5,
        category: 'Hair Transplant',
        title: 'Receding Hairline Fix',
        description: 'Restored natural hairline with 2000 grafts.',
        beforeImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=400&fit=crop',
        afterImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
    },
    {
        id: 6,
        category: 'PRP Therapy',
        title: 'Female Pattern Hair Loss',
        description: 'Remarkable improvement after 8 PRP sessions.',
        beforeImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=400&fit=crop',
        afterImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=400&fit=crop',
    },
];

const categories = ['All', 'Hair Transplant', 'PRP Therapy', 'Cosmetic'];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const filteredData = activeFilter === 'All'
        ? mockTransformations
        : mockTransformations.filter((item) => item.category === activeFilter);

    const openLightbox = (index) => {
        setSelectedIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const goToPrev = () => {
        setSelectedIndex((prev) => Math.max(0, prev - 1));
    };

    const goToNext = () => {
        setSelectedIndex((prev) => Math.min(filteredData.length - 1, prev + 1));
    };

    return (
        <div className="gallery-page">
            <section className="gallery-hero">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Transformations
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Witness the life-changing results of our patients. Hover over the images to see the incredible before and after transformations.
                </motion.p>

                <motion.div
                    className="filter-tabs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                            onClick={() => setActiveFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>
            </section>

            <section className="gallery-container">
                <motion.div
                    className="gallery-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    key={activeFilter}
                >
                    {filteredData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="ba-card"
                            variants={cardVariants}
                            onClick={() => openLightbox(index)}
                        >
                            <div className="ba-image-container">
                                <img src={item.beforeImage} alt="Before" className="ba-image before" />
                                <img src={item.afterImage} alt="After" className="ba-image after" />
                                <div className="ba-slider"></div>
                                <div className="ba-labels">
                                    <span className="ba-label">Before</span>
                                    <span className="ba-label">After</span>
                                </div>
                            </div>
                            <div className="ba-info">
                                <span className="ba-category">{item.category}</span>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            <Lightbox
                isOpen={lightboxOpen}
                onClose={closeLightbox}
                item={filteredData[selectedIndex]}
                onPrev={goToPrev}
                onNext={goToNext}
                hasPrev={selectedIndex > 0}
                hasNext={selectedIndex < filteredData.length - 1}
            />
        </div>
    );
};

export default Gallery;
