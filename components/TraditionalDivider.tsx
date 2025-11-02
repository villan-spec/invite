
import React from 'react';

const TraditionalDivider: React.FC = () => {
  return (
    <div className="flex justify-center items-center my-8 md:my-12">
      <div className="h-px bg-yellow-700 bg-opacity-50 flex-grow"></div>
      <svg
        className="mx-4 text-yellow-700"
        width="50"
        height="50"
        viewBox="0 0 100 100"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 0 L65 35 L100 50 L65 65 L50 100 L35 65 L0 50 L35 35 Z" />
      </svg>
      <div className="h-px bg-yellow-700 bg-opacity-50 flex-grow"></div>
    </div>
  );
};

export default TraditionalDivider;
