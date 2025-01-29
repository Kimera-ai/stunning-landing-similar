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
          <path d="M10,25 A40,25 0 1,0 90,25" />
          
          {/* Airplane */}
          <path d="M75,15 L85,10 L90,15 L85,20 Z" />
          
          {/* Landmass details */}
          <path d="M30,20 C35,18 38,22 42,20 C45,18 48,22 52,20" />
          <path d="M60,25 C65,23 68,27 72,25" />
        </svg>
      </div>
    </div>
  );
};

export default GlobeIcon;