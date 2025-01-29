import React from "react";
import Logo from "@/components/Logo";
import GlobeIcon from "@/components/GlobeIcon";

const Index = () => {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-4 bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: 'url("/lovable-uploads/17a8f2cb-825a-4da8-be4c-d807f9645f35.png")',
        backgroundSize: 'cover'
      }}
    >
      <div className="w-full max-w-lg mx-auto text-center">
        <Logo />
        
        <div className="mt-16 mb-8 text-center">
          <h2 className="text-2xl font-bold" style={{ direction: "rtl" }}>
            הדיוטי פרי מזמין אתכם לחוויית
          </h2>
        </div>

        <GlobeIcon />

        <div className="mb-8">
          <h1 className="text-5xl font-light tracking-wide mb-4">
            PERFECT
          </h1>
          <h1 className="text-5xl font-light tracking-wide mb-8">
            HAIR CARE
          </h1>
          <h2 className="text-2xl font-bold" style={{ direction: "rtl" }}>
            מסביב לעולם!
          </h2>
        </div>

        <button 
          className="bg-brand-red text-white px-12 py-4 rounded-full text-xl font-bold flex items-center gap-2 mx-auto hover:bg-opacity-90 transition-all"
          style={{ direction: "rtl" }}
        >
          <span>לחצו כאן כדי להתחיל</span>
          <span>←</span>
        </button>
      </div>
    </div>
  );
};

export default Index;