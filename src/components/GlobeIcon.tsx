import React from "react";

const GlobeIcon = () => {
  return (
    <div className="relative w-24 h-12 mx-auto mb-4">
      <div className="absolute inset-0">
        <svg
          viewBox="0 0 100 50"
          className="w-full h-full fill-brand-red"
        >
          {/* Half circle base */}
          <path d="M20,25 A30,20 0 1,0 80,25" />
          
          {/* Airplane */}
          <path d="M65,18 L75,15 L78,18 L75,21 Z" />
          
          {/* Landmass details */}
          <path d="M35,22 C40,20 45,24 50,22 C55,20 60,24 65,22" />
          <path d="M45,28 C50,26 55,30 60,28" />
        </svg>
      </div>
    </div>
  );
};

export default GlobeIcon;