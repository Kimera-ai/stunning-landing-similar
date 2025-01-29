import React from "react";

const GlobeIcon = () => {
  return (
    <div className="relative w-24 h-12 mx-auto mb-4">
      <div className="absolute inset-0">
        <svg
          viewBox="0 0 100 50"
          className="w-full h-full fill-brand-red"
        >
          {/* Base globe curve */}
          <path d="M10,25 C10,40 90,40 90,25 C90,10 10,10 10,25" />
          
          {/* Airplane */}
          <path d="M55,15 L65,12 L68,15 L65,18 Z" />
          
          {/* Upper landmass details */}
          <path d="M20,20 C30,15 40,22 50,18 C60,15 70,22 80,18" />
          
          {/* Lower landmass details */}
          <path d="M25,30 C35,27 45,32 55,28 C65,25 75,30 85,27" />
          
          {/* Additional curve details */}
          <path d="M15,25 C25,23 35,27 45,24" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
};

export default GlobeIcon;