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
          <path d="M15,25 A35,22 0 1,0 85,25" />
          
          {/* Airplane */}
          <path d="M60,15 L70,12 L73,15 L70,18 Z" />
          
          {/* Landmass details */}
          <path d="M25,22 C35,18 45,24 55,20 C65,18 75,24 85,20" />
          <path d="M30,28 C40,25 50,29 60,26" />
        </svg>
      </div>
    </div>
  );
};

export default GlobeIcon;