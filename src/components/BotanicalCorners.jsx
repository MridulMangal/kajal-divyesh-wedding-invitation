import React from "react";

export const BotanicalFlourish = ({ className = "" }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`w-14 h-14 opacity-40 pointer-events-none ${className}`}
  >
    <path 
      d="M10 90C15 65 35 45 60 40M60 40C45 35 30 20 25 5M60 40C75 42 88 55 90 70M60 40L85 15" 
      stroke="#C5A059" 
      strokeWidth="1.2" 
      strokeLinecap="round" 
    />
    <circle cx="85" cy="15" r="2.5" fill="#C98F9B" />
    <circle cx="25" cy="5" r="2.5" fill="#C98F9B" />
    <circle cx="90" cy="70" r="2.5" fill="#C98F9B" />
    <path 
      d="M50 48C46 54 48 62 55 65C62 62 64 54 60 48" 
      fill="#E8CDD3" 
      opacity="0.7" 
    />
  </svg>
);

export const BotanicalDivider = () => (
  <div className="flex items-center justify-center my-6 gap-3 opacity-60">
    <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C5A059]"></span>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="1.2">
      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#FDF7F5" />
    </svg>
    <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C5A059]"></span>
  </div>
);
