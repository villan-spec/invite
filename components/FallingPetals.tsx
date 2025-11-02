import React from 'react';

const FallingPetals: React.FC = () => {
  const petals = Array.from({ length: 30 });

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {petals.map((_, index) => {
        const style = {
          left: `${Math.random() * 100}vw`,
          animationDuration: `${Math.random() * 5 + 8}s, ${Math.random() * 3 + 2}s`,
          animationDelay: `${Math.random() * 5}s`,
        };
        const isMarigold = Math.random() > 0.5;
        return <div key={index} className={`petal ${isMarigold ? 'marigold' : ''}`} style={style} />;
      })}
    </div>
  );
};

export default FallingPetals;