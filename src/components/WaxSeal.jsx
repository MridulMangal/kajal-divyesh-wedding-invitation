import React from "react";

export const WaxSeal = ({ onClick, isBroken, initials, ariaLabel }) => {
  return (
    <button
      onClick={onClick}
      disabled={isBroken}
      aria-label={ariaLabel || "Open wedding invitation"}
      className={`relative z-30 group cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#C5A059]/40 rounded-full transition-all duration-700 ${
        isBroken 
          ? "opacity-0 scale-50 pointer-events-none" 
          : "opacity-100 scale-100 hover:scale-105 active:scale-95"
      }`}
    >
      {/* Outer organic irregular wax edge */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full wax-seal-btn flex items-center justify-center relative p-1 shadow-2xl">
        {/* Subtle decorative outer ring */}
        <div className="w-full h-full rounded-full border border-dashed border-[#f8ccd6]/30 flex items-center justify-center">
          {/* Inner embossed stamp chamber */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#541521]/60 flex flex-col items-center justify-center bg-gradient-to-br from-[#7e2436] to-[#591624] shadow-inner">
            <span className="text-[#f5d0d8] font-script text-lg sm:text-xl tracking-wider select-none drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
              {initials}
            </span>
            <div className="w-6 h-[1px] bg-[#f5d0d8]/30 mt-0.5"></div>
          </div>
        </div>

        {/* Gloss highlight reflection */}
        <div className="absolute top-1 left-3 w-8 h-4 bg-white/20 rounded-full blur-[2px] transform -rotate-45 pointer-events-none" />
      </div>
    </button>
  );
};
