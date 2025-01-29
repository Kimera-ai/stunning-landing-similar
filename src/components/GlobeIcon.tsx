import React from "react";

const GlobeIcon = () => {
  return (
    <div className="relative w-24 h-12 mx-auto mb-4">
      <div className="absolute inset-0">
        <svg
          viewBox="0 0 100 50"
          className="w-full h-full fill-brand-red"
        >
          <path d="M50,0 A25,25 0 1,1 50,50 A25,25 0 1,1 50,0 Z" />
          <path d="M75,25 L90,20 L95,25 L90,30 Z" />
        </svg>
      </div>
    </div>
  );
};

export default GlobeIcon;