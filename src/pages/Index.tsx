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
      <div className="w-full max-w-6xl mx-auto text-center mt-32">
        <Logo />
        
        <div className="mt-12 mb-10 text-center">
          <h2 className="text-5xl font-bold tracking-wider" style={{ direction: "rtl", letterSpacing: '0.02em', wordSpacing: '0.2em' }}>
            הדיוטי פרי מזמין
          </h2>
          <h2 className="text-5xl font-bold tracking-wider" style={{ direction: "rtl", letterSpacing: '0.02em', wordSpacing: '0.2em' }}>
            אתכם לחוויית
          </h2>
        </div>

        <GlobeIcon />

        <div className="mb-32">
          <h1 className="text-8xl font-bold tracking-wide mb-4">
            PERFECT
          </h1>
          <h1 className="text-8xl font-bold tracking-wide mb-4">
            HAIR CARE
          </h1>
          <h2 className="text-5xl font-bold" style={{ direction: "rtl" }}>
            מסביב לעולם!
          </h2>
        </div>

        <a 
          href="https://booth.kimera.ai/event-set/ec9f7b54-7339-4faf-90ba-f12f54cbe3da"
          className="inline-block bg-brand-red text-white px-12 py-6 rounded-full text-4xl font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all w-fit mx-auto animate-[breath_4s_ease-in-out_infinite]"
          style={{ direction: "rtl" }}
        >
          <span>לחצו כאן כדי להתחיל</span>
          <span>←</span>
        </a>
      </div>
    </div>
  );
};

export default Index;