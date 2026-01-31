import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterProps> = ({ beforeImage, afterImage, alt }) => {
  const [isResizing, setIsResizing] = useState(false);
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (containerRef.current) {
      const { left, width } = containerRef.current.getBoundingClientRect();
      const x = clientX - left;
      const newPos = Math.max(0, Math.min(100, (x / width) * 100));
      setPosition(newPos);
    }
  }, []);

  const onMouseMove = (e: React.MouseEvent) => {
    if (isResizing) handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (isResizing) handleMove(e.touches[0].clientX);
  };

  const onMouseUp = () => setIsResizing(false);

  useEffect(() => {
    if (isResizing) {
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchend', onMouseUp);
    }
    return () => {
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchend', onMouseUp);
    };
  }, [isResizing]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/5] md:aspect-square overflow-hidden border-2 border-brand-black group select-none cursor-ew-resize"
      onMouseDown={() => setIsResizing(true)}
      onTouchStart={() => setIsResizing(true)}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
    >
      {/* Before Image (Background) */}
      <img 
        src={beforeImage} 
        alt={`Before ${alt}`} 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute top-4 left-4 bg-brand-black text-white px-2 py-1 text-xs font-black uppercase tracking-widest pointer-events-none">
        Before
      </div>

      {/* After Image (Foreground - Clipped) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img 
          src={afterImage} 
          alt={`After ${alt}`} 
          className="absolute inset-0 w-full h-full object-cover max-w-none" 
        />
        <div className="absolute top-4 right-4 bg-brand-yellow text-brand-black px-2 py-1 text-xs font-black uppercase tracking-widest">
          After
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-brand-black cursor-ew-resize z-10"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-brand-white border-2 border-brand-black bg-white rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
          <ChevronLeft size={16} className="text-brand-black -mr-1" />
          <ChevronRight size={16} className="text-brand-black -ml-1" />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;