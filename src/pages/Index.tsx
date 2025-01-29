import React from "react";
import Logo from "@/components/Logo";
import GlobeIcon from "@/components/GlobeIcon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D3E4FD] via-[#E5DEFF] to-[#D6BCFA] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg mx-auto text-center">
        <Logo />
        
        <div className="mt-16 mb-8 text-right">
          <h2 className="text-2xl font-bold" style={{ direction: "rtl" }}>
            הדיוטי פרי מזמין אתכם לחוויית
          </h2>
        </div>

        <GlobeIcon />

        <div className="mb-8">
          <h1 className="text-5xl font-black tracking-wide mb-4">
            PERFECT
          </h1>
          <h1 className="text-5xl font-black tracking-wide mb-8">
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
          <span>←</span>
          <span>לחצו כאן כדי להתחיל</span>
        </button>
      </div>
    </div>
  );
};

export default Index;