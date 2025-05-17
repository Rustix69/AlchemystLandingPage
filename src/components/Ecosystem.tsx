'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const Ecosystem = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollCarousel = () => {
      if (carouselRef.current) {
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
          // Reset to start when reaching the middle (where duplicates begin)
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

  // Array of image sources from the trusted folder
  const images = [
    '/trusted/aws.png',
    '/trusted/conquest.png',
    '/trusted/google.png',
    '/trusted/headstart.png',
    '/trusted/microsoft.png',
    '/trusted/nasscom.png',
    '/trusted/nsrcel.png',
    '/trusted/nvidia.png',
    '/trusted/razorpay.png',
    '/trusted/techstars.png',
    '/trusted/wharton.png',
    '/trusted/Startup-India-Logo1-02 1.png',
    '/trusted/MeitY Startup Hub-Logo-FINAL_5 1 1.png',
    '/trusted/lablab.ai-1080x1080-1-1024x1024 1.png',
    '/trusted/Grafana.png'
  ];

  return (
    <div className="mt-16 animate-fade-in-up">
      <p className="text-lg text-gray-300 uppercase tracking-wider mb-8 font-medium text-center">Ecosystem Partners</p>
      
      <div className="relative overflow-hidden">
        <div 
          ref={carouselRef}
          className="flex gap-12 md:gap-16 overflow-x-auto scrollbar-hide py-4"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            whiteSpace: 'nowrap'
          }}
        >
          {/* First set of images */}
          {images.map((src, index) => (
            <div key={`img-${index}`} className="flex-shrink-0 flex items-center justify-center h-16 w-36">
              <Image 
                src={src} 
                alt={`Trusted partner ${index + 1}`} 
                width={120}
                height={60}
                className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
          
          {/* Duplicate set for seamless looping */}
          {images.map((src, index) => (
            <div key={`img-dup-${index}`} className="flex-shrink-0 flex items-center justify-center h-16 w-36">
              <Image 
                src={src} 
                alt={`Trusted partner ${index + 1}`} 
                width={120}
                height={60}
                className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity"
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

export default Ecosystem; 