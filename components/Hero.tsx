import React from 'react';
import FallingPetals from './FallingPetals';

interface HeroProps {
  offsetY: number;
}

const Hero: React.FC<HeroProps> = ({ offsetY }) => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
      
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-100 ease-out"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/1583244/pexels-photo-1583244.jpeg?_gl=1*1axlq59*_ga*MTk3ODE3MzA1LjE3NTk5MDk1Mjg.*_ga_8JE65Q40S6*czE3NjIwMDA4NzgkbzIkZzEkdDE3NjIwMDA4OTgkajQwJGwwJGgw')", 
          transform: `scale(${1 + offsetY * 0.00015}) translateY(${offsetY * 0.1}px)`,
          zIndex: 0,
        }}
      />

      {/* Subtle Dark Overlay for contrast */}
      <div className="absolute inset-0 bg-black opacity-20" style={{ zIndex: 1 }} />
      
      <FallingPetals />
      
      <div className="relative z-20 p-4" style={{ transform: `translateY(-${offsetY * 0.2}px)` }}>
        <h1 className="font-tangerine text-6xl md:text-9xl text-white" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.6)' }}>
          Srinesh & Deepika Sri
        </h1>
        <p className="font-cormorant text-xl md:text-3xl mt-4 text-gray-200" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.6)' }}>
          The Sacred Union
        </p>
        <p className="font-cormorant text-lg md:text-2xl mt-8 tracking-widest text-white bg-black bg-opacity-25 backdrop-blur-sm px-4 py-2 rounded-lg inline-block shadow-lg">
          12 . 02 . 2026
        </p>
      </div>

       {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-8 h-8 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>
    </div>
  );
};

export default Hero;