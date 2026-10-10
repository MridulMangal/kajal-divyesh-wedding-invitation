import React from "react";
import { BotanicalFlourish, BotanicalDivider } from "./BotanicalCorners";

export const HeroSection = ({ data }) => {
  return (
    <section className="relative px-6 pt-12 pb-10 text-center">
      {/* Ornate corner botanicals */}
      <BotanicalFlourish className="absolute top-4 left-4" />
      <BotanicalFlourish className="absolute top-4 right-4 rotate-90" />

      {/* Sacred Traditional Invocation */}
      <div className="space-y-1 mb-5">
        <p className="text-xs uppercase tracking-[0.28em] text-[#9B6874] font-sans-ui font-semibold">
          || श्री गणेशाय नमः ||
        </p>
        <p className="font-hindi text-xs sm:text-sm text-[#7A4B56] font-medium">
          ईश्वर की कृपा से
        </p>
        <p className="text-[11px] italic text-[#8A5B66] font-serif">
          With love and blessings
        </p>
      </div>

      <BotanicalDivider />

      {/* Couple Announcement */}
      <div className="my-6">
        <h1 className="font-script text-5xl sm:text-6xl text-[#5E2938] leading-tight drop-shadow-sm">
          {data.bride.name}
        </h1>
        <div className="flex items-center justify-center my-2 gap-3">
          <span className="h-[1px] w-8 bg-[#C5A059]/40"></span>
          <span className="font-script text-3xl sm:text-4xl text-[#C5A059] italic">&</span>
          <span className="h-[1px] w-8 bg-[#C5A059]/40"></span>
        </div>
        <h1 className="font-script text-5xl sm:text-6xl text-[#5E2938] leading-tight drop-shadow-sm">
          {data.groom.name}
        </h1>
      </div>

      {/* Bilingual invitation statement */}
      <div className="max-w-xs mx-auto my-6 text-[#5A3840] leading-relaxed">
        <p className="font-hindi text-sm font-semibold text-[#6E2E3E]">
          सादर आमंत्रण
        </p>
        <p className="text-xs sm:text-sm italic mt-1 font-serif text-[#6D424D]">
          "With love and blessings, we warmly invite you to celebrate our special day as we unite in holy matrimony."
        </p>
        <p className="font-hindi text-xs text-[#804D59] mt-2">
          आप सपरिवार सादर आमंत्रित हैं।
        </p>
      </div>

      {/* Elegant Date & Venue Stamp */}
      <div className="mt-8 inline-block bg-[#F8E7EA]/60 border border-[#C5A059]/40 rounded-full px-6 py-2.5 shadow-sm">
        <p className="text-xs sm:text-sm tracking-widest font-sans-ui font-medium text-[#5E2938]">
          {data.date.formattedPill}
        </p>
        <p className="text-[11px] tracking-wider uppercase text-[#8A505F] font-sans-ui mt-0.5">
          {data.time} • {data.venue.name}, {data.venue.city.split(',')[0]}
        </p>
      </div>
    </section>
  );
};
