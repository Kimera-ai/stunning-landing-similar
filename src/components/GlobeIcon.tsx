import React from "react";

const GlobeIcon = () => {
  return (
    <div className="relative w-24 h-12 mx-auto mb-4">
      <div className="absolute inset-0">
        <svg
          viewBox="0 0 100 50"
          className="w-full h-full fill-brand-red"
        >
          {/* Globe Arc */}
          <path 
            d="M20,30 A30,30 0 0,1 80,30" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          
          {/* Airplane Body */}
          <path d="M70,15 L80,18 L90,16 L80,13 Z" />
          
          {/* Airplane Tail */}
          <rect x="78" y="15.5" width="4" height="2" />
          
          {/* Airplane Vertical Stabilizer */}
          <path d="M79,13 L81,13 L80,11 Z" />
        </svg>
      </div>
    </div>
  );
};

export default GlobeIcon;