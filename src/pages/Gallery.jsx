import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from '../components/ui/Reveal';
import { StaggerContainer, StaggerItem } from '../components/ui/StaggerContainer';
import { GradientText } from '../components/ui/GradientText';
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
            {/* Hero Section */}
            <section className="gallery-hero" style={{ paddingTop: '80px' }}>
                <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                    <motion.span
                        style={{
                            display: 'inline-block',
                            padding: '0.5rem 1rem',
                            background: 'rgba(249, 115, 22, 0.1)',
                            borderRadius: '20px',
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            color: 'var(--brand-orange)',
                            marginBottom: '1rem'
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Our Results
                    </motion.span>
                    
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{
                            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                            fontWeight: 900,
                            textTransform: 'uppercase',
                            marginBottom: '1rem',
                            color: 'var(--brand-black)'
                        }}
                    >
                        <GradientText>Transformations</GradientText>
                    </motion.h1>
                    
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{
                            fontSize: '1.1rem',
                            color: '#666',
                            maxWidth: '600px',
                            margin: '0 auto 2rem',
                            lineHeight: 1.6
                        }}
                    >
                        Witness the life-changing results of our patients. Hover over the images to see the incredible before and after transformations.
                    </motion.p>

                    {/* Filter Tabs */}
                    <motion.div
                        className="filter-tabs"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            flexWrap: 'wrap'
                        }}
                    >
                        {categories.map((cat, i) => (
                            <motion.button
                                key={cat}
                                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                                onClick={() => setActiveFilter(cat)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '30px',
                                    border: '2px solid',
                                    borderColor: activeFilter === cat ? 'var(--brand-orange)' : '#E5E7EB',
                                    background: activeFilter === cat ? 'var(--brand-orange)' : 'white',
                                    color: activeFilter === cat ? 'white' : 'var(--brand-black)',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    fontSize: '0.85rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s'
                                }}
                            >
                                {cat}
                            </motion.button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="gallery-container" style={{ padding: '2rem' }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        className="gallery-grid"
                        key={activeFilter}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                            gap: '2rem',
                            maxWidth: 'var(--container-width)',
                            margin: '0 auto'
                        }}
                    >
                        {filteredData.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className="ba-card"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                onClick={() => openLightbox(index)}
                                style={{
                                    background: 'white',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                    cursor: 'pointer'
                                }}
                                whileHover={{ 
                                    y: -10,
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                                }}
                            >
                                <div className="ba-image-container" style={{ position: 'relative', overflow: 'hidden' }}>
                                    <div style={{ display: 'flex', height: '250px' }}>
                                        <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                                            <img 
                                                src={item.beforeImage} 
                                                alt="Before" 
                                                style={{ 
                                                    width: '100%', 
                                                    height: '100%', 
                                                    objectFit: 'cover'
                                                }} 
                                            />
                                            <motion.span
                                                style={{
                                                    position: 'absolute',
                                                    bottom: '10px',
                                                    left: '10px',
                                                    background: 'rgba(0,0,0,0.7)',
                                                    color: 'white',
                                                    padding: '0.25rem 0.75rem',
                                                    borderRadius: '20px',
                                                    fontSize: '0.75rem',
                                                    fontWeight: 700,
                                                    textTransform: 'uppercase'
                                                }}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 }}
                                            >
                                                Before
                                            </motion.span>
                                        </div>
                                        <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                                            <img 
                                                src={item.afterImage} 
                                                alt="After" 
                                                style={{ 
                                                    width: '100%', 
                                                    height: '100%', 
                                                    objectFit: 'cover'
                                                }} 
                                            />
                                            <motion.span
                                                style={{
                                                    position: 'absolute',
                                                    bottom: '10px',
                                                    right: '10px',
                                                    background: 'var(--brand-orange)',
                                                    color: 'white',
                                                    padding: '0.25rem 0.75rem',
                                                    borderRadius: '20px',
                                                    fontSize: '0.75rem',
                                                    fontWeight: 700,
                                                    textTransform: 'uppercase'
                                                }}
                                                initial={{ opacity: 0, x: 10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 }}
                                            >
                                                After
                                            </motion.span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="ba-info" style={{ padding: '1.5rem' }}>
                                    <motion.span 
                                        style={{
                                            display: 'inline-block',
                                            padding: '0.25rem 0.75rem',
                                            background: 'rgba(249, 115, 22, 0.1)',
                                            color: 'var(--brand-orange)',
                                            borderRadius: '20px',
                                            fontSize: '0.75rem',
                                            fontWeight: 700,
                                            textTransform: 'uppercase',
                                            marginBottom: '0.75rem'
                                        }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {item.category}
                                    </motion.span>
                                    <h3 style={{ 
                                        fontSize: '1.3rem', 
                                        fontWeight: 800, 
                                        marginBottom: '0.5rem',
                                        color: 'var(--brand-black)'
                                    }}>
                                        {item.title}
                                    </h3>
                                    <p style={{ color: '#666', lineHeight: 1.5, fontSize: '0.95rem' }}>
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
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
