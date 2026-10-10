import React from "react";
import { BotanicalDivider } from "./BotanicalCorners";

export const StorySection = ({ data }) => {
  return (
    <section className="px-6 py-10 border-t border-[#F0D5DA]/60">
      <div className="text-center mb-6">
        <p className="font-hindi text-sm text-[#9B6874] font-medium">हमारी कहानी</p>
        <h2 className="text-2xl font-serif text-[#5E2938] uppercase tracking-wider font-semibold">
          Our Story
        </h2>
        <BotanicalDivider />
      </div>

      {/* Featured Hero Photo Frame */}
      <div className="relative mx-auto max-w-sm rounded-2xl p-2 bg-gradient-to-b from-[#F7DFE4] to-[#EED2D8] shadow-md border border-[#C5A059]/30">
        <div className="overflow-hidden rounded-xl aspect-[4/5] bg-[#F5E4E7] relative">
          <img 
            src={data.photos.heroCouple} 
            alt="Kajal and Divyesh" 
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          {/* Soft vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#3E1A24]/40 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Narrative Card */}
      <div className="mt-6 text-center max-w-sm mx-auto space-y-3">
        <p className="text-sm sm:text-base font-serif italic text-[#5E3942] leading-relaxed px-2">
          “{data.story.quoteEnglish}”
        </p>
        <div className="w-10 h-[1px] bg-[#C5A059]/50 mx-auto my-4"></div>
        <p className="font-hindi text-xs text-[#804D59]">
          प्रेम, विश्वास और साथ — एक नई शुरुआत।
        </p>
      </div>
    </section>
  );
};
