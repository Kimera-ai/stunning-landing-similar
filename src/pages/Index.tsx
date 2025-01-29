import React from "react";
import Logo from "@/components/Logo";
import GlobeIcon from "@/components/GlobeIcon";
import { Button } from "@/components/ui/button";

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
        
        <div className="mt-12 mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-wider" style={{ direction: "rtl", letterSpacing: '0.02em', wordSpacing: '0.2em' }}>
            הדיוטי פרי מזמין אתכם לחוויית
          </h2>
        </div>

        <GlobeIcon />

        <div className="mb-8">
          <h1 className="text-5xl font-bold tracking-wide mb-4">
            PERFECT
          </h1>
          <h1 className="text-5xl font-bold tracking-wide mb-4">
            HAIR CARE
          </h1>
          <h2 className="text-3xl font-bold" style={{ direction: "rtl" }}>
            מסביב לעולם!
          </h2>
        </div>

        <Button 
          asChild
          className="bg-brand-red text-white px-12 py-4 rounded-full text-xl font-bold flex items-center gap-2 mx-auto hover:bg-opacity-90 transition-all"
          style={{ direction: "rtl" }}
        >
          <a href="https://booth.kimera.ai/event-set/ec9f7b54-7339-4faf-90ba-f12f54cbe3da">
            <span>לחצו כאן כדי להתחיל</span>
            <span>←</span>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Index;