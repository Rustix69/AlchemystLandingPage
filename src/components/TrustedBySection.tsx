import React, { useEffect, useRef } from 'react';

const TrustedBySection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollCarousel = () => {
      if (carouselRef.current) {
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth - carouselRef.current.clientWidth) {
          // Reset to start when reaching the end
          carouselRef.current.scrollLeft = 0;
        } else {
          // Scroll by 1px every 20ms (smooth animation)
          carouselRef.current.scrollLeft += 1;
        }
      }
    };
    
    // Start the animation
    const intervalId = setInterval(scrollCarousel, 20);
    
    return () => clearInterval(intervalId);
  }, []);

  // Array of image sources (using 12 instances of the same images)
  const images = [
    '/yc.png', '/100x.png', '/ipv.png', '/wtf.png',
    '/yc.png', '/100x.png', '/ipv.png', '/wtf.png',
    '/yc.png', '/100x.png', '/ipv.png', '/wtf.png'
  ];

  return (
    <div className="mt-16 animate-fade-in-up">
      <p className="text-lg text-gray-300 uppercase tracking-wider mb-8 font-medium text-center">Trusted by</p>
      
      <div className="relative overflow-hidden">
        <div 
          ref={carouselRef}
          className="flex gap-16 overflow-x-auto scrollbar-hide"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            whiteSpace: 'nowrap'
          }}
        >
          {/* First set of images */}
          {images.map((src, index) => (
            <div key={`img-${index}`} className="flex-shrink-0">
              <img 
                src={src} 
                alt={`Trusted partner ${index + 1}`} 
                className="h-16 opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
          
          {/* Duplicate set for seamless looping */}
          {images.map((src, index) => (
            <div key={`img-dup-${index}`} className="flex-shrink-0">
              <img 
                src={src} 
                alt={`Trusted partner ${index + 1}`} 
                className="h-16 opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
        
        {/* Gradient overlays for fade effect */}
        <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-background to-transparent"></div>
        <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-background to-transparent"></div>
      </div>
    </div>
  );
};

export default TrustedBySection; 