import React, { useState } from "react";
import { WaxSeal } from "./WaxSeal";
import { BotanicalFlourish } from "./BotanicalCorners";

export const OpeningEnvelope = ({ onOpenComplete, onMusicStart, weddingData }) => {
  // Opening step: 0 = idle, 1 = seal-broken, 2 = flap-opened, 3 = card-ejected
  const [openingStep, setOpeningStep] = useState(0);
  const handleSealTap = () => {
    if (openingStep > 0) return;

    onMusicStart?.();

    // Step 1: Compress and fade the seal (300ms)
    setOpeningStep(1);

    // Step 2: Open top envelope flap in 3D (600ms)
    setTimeout(() => {
      setOpeningStep(2);
    }, 350);

    // Step 3: Card slides up from pocket (1100ms)
    setTimeout(() => {
      setOpeningStep(3);
    }, 900);

    // Step 4: Cinematic dissolve to full wedding invitation
    setTimeout(() => {
      if (onOpenComplete) onOpenComplete();
    }, 2000);
  };

  return (
    <section 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#25151C] px-4 py-8 overflow-x-hidden overflow-y-auto"
      style={{
        backgroundImage: "radial-gradient(circle at center, #3F212D 0%, #1D0E15 100%)"
      }}
    >
      {/* Ambient background glow */}
      <div className="absolute w-[320px] h-[320px] rounded-full bg-[#C98F9B]/15 blur-3xl pointer-events-none" />

      {/* Intro Header */}
      <div className={`text-center mb-6 transition-all duration-700 ${openingStep > 1 ? "opacity-0 -translate-y-4" : "opacity-100"}`}>
        <p className="text-[#E8CDD3] text-xs uppercase tracking-[0.25em] font-sans-ui font-medium">
          Wedding Invitation
        </p>
        <p className="font-hindi text-[#D9A3AF] text-sm mt-1">
          सादर आमंत्रण
        </p>
      </div>

      {/* 3D Envelope Container */}
      <div className="envelope-perspective relative w-full max-w-[380px] aspect-[19/13] shrink-0">
        {/* Envelope Shell */}
        <div className={`relative w-full h-full envelope-wrapper transition-all duration-1000 ${
          openingStep >= 3 ? "scale-95 translate-y-12 opacity-0" : "scale-100"
        }`}>
          
          {/* Back Paper Lining */}
          <div className="absolute inset-0 bg-[#E3B8C1] rounded-lg shadow-2xl overflow-hidden border border-[#D9A3AF]/40">
            {/* Inner envelope pattern */}
            <div className="w-full h-full opacity-15 bg-[radial-gradient(#843c4f_1px,transparent_1px)] [background-size:12px_12px]" />
          </div>

          {/* Invitation Card peeking & sliding out */}
          <div 
            className={`absolute left-3 right-3 top-3 bottom-3 bg-[#FFFBF8] rounded-md shadow-md p-4 flex flex-col items-center justify-center text-center border border-[#C5A059]/40 transition-all duration-1000 ease-out z-10 ${
              openingStep >= 3 
                ? "-translate-y-36 scale-105 shadow-2xl z-20" 
                : openingStep >= 2 
                  ? "-translate-y-10" 
                  : "translate-y-0"
            }`}
          >
            <BotanicalFlourish className="absolute top-1 left-1 !w-8 !h-8 opacity-30" />
            <BotanicalFlourish className="absolute top-1 right-1 !w-8 !h-8 opacity-30 rotate-90" />
            
            <p className="text-[10px] tracking-widest text-[#9B6874] uppercase font-sans-ui">
              The Wedding Of
            </p>
            <h2 className="font-script text-2xl sm:text-3xl text-[#5E2938] my-1">
              {weddingData.bride.name} & {weddingData.groom.name}
            </h2>
            <div className="w-8 h-[1px] bg-[#C5A059]/60 my-1"></div>
            <p className="text-[11px] font-sans-ui text-[#7A4B56]">
              {weddingData.date.full}
            </p>
            <p className="text-[10px] font-hindi text-[#A06C78]">
              {weddingData.venue.hindiCity}
            </p>
          </div>

          {/* Envelope Pocket Left/Right folds (SVG paths for realism) */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            <svg 
              className="w-full h-full drop-shadow-md" 
              viewBox="0 0 380 260" 
              fill="none" 
              preserveAspectRatio="none"
            >
              {/* Bottom fold triangle */}
              <polygon points="0,260 380,260 190,135" fill="#E8CDD3" />
              {/* Left fold */}
              <polygon points="0,0 0,260 190,135" fill="#DFC0C7" />
              {/* Right fold */}
              <polygon points="380,0 380,260 190,135" fill="#D8B5BD" />
              {/* Subtle seam shadows */}
              <line x1="0" y1="260" x2="190" y2="135" stroke="rgba(0,0,0,0.06)" strokeWidth="1.5" />
              <line x1="380" y1="260" x2="190" y2="135" stroke="rgba(0,0,0,0.06)" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Top Flap (3D foldable flap) */}
          <div 
            className={`envelope-flap absolute top-0 left-0 right-0 h-[135px] z-25 origin-top pointer-events-none ${
              openingStep >= 2 ? "open" : ""
            }`}
          >
            <svg 
              className="w-full h-full drop-shadow-sm" 
              viewBox="0 0 380 135" 
              fill="none" 
              preserveAspectRatio="none"
            >
              <polygon points="0,0 380,0 190,135" fill="#E8CDD3" />
              <line x1="0" y1="0" x2="190" y2="135" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
              <line x1="380" y1="0" x2="190" y2="135" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
            </svg>
          </div>

          {/* Centered Wax Seal positioned on flap junction */}
          <div className="absolute left-1/2 top-[135px] -translate-x-1/2 -translate-y-1/2 z-30">
            <WaxSeal 
              onClick={handleSealTap} 
              isBroken={openingStep >= 1} 
              initials={weddingData.initials}
              ariaLabel="Tap to open the wedding invitation"
            />
          </div>

        </div>
      </div>

      {/* Tactile Tap Hint */}
      <div className={`mt-8 text-center transition-all duration-500 ${openingStep > 0 ? "opacity-0" : "opacity-100"}`}>
        <p className="pulse-hint text-sm sm:text-base font-sans-ui text-[#E8CDD3] tracking-wide font-light">
          Tap seal to open
        </p>
        <p className="font-hindi text-xs text-[#D9A3AF] mt-1 font-normal">
          आमंत्रण खोलने के लिए स्पर्श करें
        </p>
      </div>

      {/* Accessibility bypass button for users preferring immediate skip */}
      <button 
        onClick={() => {
          onMusicStart?.();
          onOpenComplete?.();
        }}
        className="mt-6 text-[11px] text-[#A06C78] hover:text-[#E8CDD3] underline underline-offset-4 tracking-wider uppercase font-sans-ui transition-colors"
      >
        Skip animation
      </button>
    </section>
  );
};
