import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { Reveal } from '../components/ui/Reveal';
import { GradientText } from '../components/ui/GradientText';
import Lightbox from '../components/Lightbox';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import '../styles/Gallery.css';

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
    const [isMobile, setIsMobile] = useState(false);
    const [activeFilter, setActiveFilter] = useState('All');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const filteredData = activeFilter === 'All'
        ? mockTransformations
        : mockTransformations.filter((item) => item.category === activeFilter);

    // Mobile pagination
    const itemsPerPage = isMobile ? 1 : 6;
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const currentItems = isMobile 
        ? filteredData.slice(currentPage, currentPage + 1)
        : filteredData;

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

    const handleFilterChange = (cat) => {
        setActiveFilter(cat);
        setCurrentPage(0);
    };

    const nextPage = () => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
    const prevPage = () => setCurrentPage((prev) => Math.max(0, prev - 1));

    // Swipe handling for mobile
    const handleDragEnd = (e, info) => {
        if (isMobile) {
            if (info.offset.x < -50 && currentPage < totalPages - 1) {
                nextPage();
            } else if (info.offset.x > 50 && currentPage > 0) {
                prevPage();
            }
        }
    };

    return (
        <div className="gallery-page">
            {/* Hero Section */}
            <section style={{ 
                paddingTop: 'var(--header-height)',
                background: 'linear-gradient(180deg, white 0%, var(--brand-offwhite) 100%)',
                borderBottom: 'var(--border-thick)'
            }}>
                <div style={{ textAlign: 'center', padding: isMobile ? '3rem 1rem' : '4rem 2rem' }}>
                    <motion.span
                        style={{
                            display: 'inline-block',
                            padding: '0.5rem 1rem',
                            background: 'rgba(249, 115, 22, 0.1)',
                            borderRadius: '20px',
                            fontSize: '0.8rem',
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
                            fontSize: isMobile ? '2rem' : 'clamp(2.5rem, 6vw, 4rem)',
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
                            fontSize: isMobile ? '0.95rem' : '1.1rem',
                            color: '#666',
                            maxWidth: '600px',
                            margin: '0 auto 2rem',
                            lineHeight: 1.6
                        }}
                    >
                        Witness the life-changing results of our patients. 
                        {isMobile ? 'Tap to view full transformation.' : 'Hover over the images to see the incredible before and after transformations.'}
                    </motion.p>

                    {/* Filter Tabs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            flexWrap: 'wrap',
                            padding: isMobile ? '0 0.5rem' : '0'
                        }}
                    >
                        {categories.map((cat) => (
                            <motion.button
                                key={cat}
                                onClick={() => handleFilterChange(cat)}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    padding: isMobile ? '0.6rem 1rem' : '0.75rem 1.5rem',
                                    borderRadius: '30px',
                                    border: '2px solid',
                                    borderColor: activeFilter === cat ? 'var(--brand-orange)' : '#E5E7EB',
                                    background: activeFilter === cat ? 'var(--brand-orange)' : 'white',
                                    color: activeFilter === cat ? 'white' : 'var(--brand-black)',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    fontSize: isMobile ? '0.7rem' : '0.85rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    minHeight: '40px'
                                }}
                            >
                                {cat}
                            </motion.button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section style={{ padding: isMobile ? '1.5rem 1rem' : '3rem 2rem' }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${activeFilter}-${currentPage}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
                            gap: isMobile ? '1rem' : '2rem',
                            maxWidth: 'var(--container-width)',
                            margin: '0 auto'
                        }}
                        drag={isMobile ? "x" : false}
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={handleDragEnd}
                    >
                        {(isMobile ? currentItems : filteredData).map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                onClick={() => openLightbox(isMobile ? currentPage : index)}
                                style={{
                                    background: 'white',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                    cursor: 'pointer',
                                    position: 'relative'
                                }}
                                whileHover={isMobile ? {} : { 
                                    y: -10,
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div style={{ 
                                    position: 'relative',
                                    height: isMobile ? '220px' : '250px',
                                    overflow: 'hidden'
                                }}>
                                    <div style={{ display: 'flex', height: '100%' }}>
                                        <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                                            <img 
                                                src={item.beforeImage} 
                                                alt="Before" 
                                                style={{ 
                                                    width: '100%', 
                                                    height: '100%', 
                                                    objectFit: 'cover'
                                                }} 
                                                loading="lazy"
                                            />
                                            <span
                                                style={{
                                                    position: 'absolute',
                                                    bottom: '10px',
                                                    left: '10px',
                                                    background: 'rgba(0,0,0,0.7)',
                                                    color: 'white',
                                                    padding: '0.25rem 0.75rem',
                                                    borderRadius: '20px',
                                                    fontSize: '0.7rem',
                                                    fontWeight: 700,
                                                    textTransform: 'uppercase'
                                                }}
                                            >
                                                Before
                                            </span>
                                        </div>
                                        <div style={{ 
                                            position: 'absolute',
                                            left: '50%',
                                            top: 0,
                                            bottom: 0,
                                            width: '2px',
                                            background: 'white',
                                            transform: 'translateX(-50%)',
                                            zIndex: 2
                                        }} />
                                        <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                                            <img 
                                                src={item.afterImage} 
                                                alt="After" 
                                                style={{ 
                                                    width: '100%', 
                                                    height: '100%', 
                                                    objectFit: 'cover'
                                                }} 
                                                loading="lazy"
                                            />
                                            <span
                                                style={{
                                                    position: 'absolute',
                                                    bottom: '10px',
                                                    right: '10px',
                                                    background: 'var(--brand-orange)',
                                                    color: 'white',
                                                    padding: '0.25rem 0.75rem',
                                                    borderRadius: '20px',
                                                    fontSize: '0.7rem',
                                                    fontWeight: 700,
                                                    textTransform: 'uppercase'
                                                }}
                                            >
                                                After
                                            </span>
                                        </div>
                                    </div>
                                    
                                    {/* Zoom icon on mobile */}
                                    {isMobile && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '10px',
                                            right: '10px',
                                            background: 'rgba(0,0,0,0.5)',
                                            borderRadius: '50%',
                                            padding: '8px'
                                        }}>
                                            <ZoomIn size={16} color="white" />
                                        </div>
                                    )}
                                </div>
                                
                                <div style={{ padding: isMobile ? '1.25rem' : '1.5rem' }}>
                                    <span 
                                        style={{
                                            display: 'inline-block',
                                            padding: '0.25rem 0.75rem',
                                            background: 'rgba(249, 115, 22, 0.1)',
                                            color: 'var(--brand-orange)',
                                            borderRadius: '20px',
                                            fontSize: '0.7rem',
                                            fontWeight: 700,
                                            textTransform: 'uppercase',
                                            marginBottom: '0.75rem'
                                        }}
                                    >
                                        {item.category}
                                    </span>
                                    <h3 style={{ 
                                        fontSize: isMobile ? '1.1rem' : '1.3rem', 
                                        fontWeight: 800, 
                                        marginBottom: '0.5rem',
                                        color: 'var(--brand-black)'
                                    }}>
                                        {item.title}
                                    </h3>
                                    <p style={{ 
                                        color: '#666', 
                                        lineHeight: 1.5, 
                                        fontSize: isMobile ? '0.9rem' : '0.95rem' 
                                    }}>
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Mobile Pagination */}
                {isMobile && (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '1rem',
                        marginTop: '2rem'
                    }}>
                        <motion.button
                            onClick={prevPage}
                            disabled={currentPage === 0}
                            whileTap={{ scale: 0.9 }}
                            style={{
                                width: '44px',
                                height: '44px',
                                borderRadius: '50%',
                                border: '2px solid var(--brand-black)',
                                background: currentPage === 0 ? '#f0f0f0' : 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                opacity: currentPage === 0 ? 0.5 : 1
                            }}
                        >
                            <ChevronLeft size={20} />
                        </motion.button>
                        
                        <div style={{ display: 'flex', gap: '6px' }}>
                            {filteredData.map((_, i) => (
                                <motion.div
                                    key={i}
                                    onClick={() => setCurrentPage(i)}
                                    style={{
                                        width: i === currentPage ? '24px' : '8px',
                                        height: '8px',
                                        borderRadius: '4px',
                                        background: i === currentPage ? 'var(--brand-orange)' : '#ddd'
                                    }}
                                    transition={{ duration: 0.3 }}
                                />
                            ))}
                        </div>
                        
                        <motion.button
                            onClick={nextPage}
                            disabled={currentPage >= totalPages - 1}
                            whileTap={{ scale: 0.9 }}
                            style={{
                                width: '44px',
                                height: '44px',
                                borderRadius: '50%',
                                border: '2px solid var(--brand-black)',
                                background: currentPage >= totalPages - 1 ? '#f0f0f0' : 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                opacity: currentPage >= totalPages - 1 ? 0.5 : 1
                            }}
                        >
                            <ChevronRight size={20} />
                        </motion.button>
                    </div>
                )}
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
