import React from "react";
import { BotanicalFlourish } from "./BotanicalCorners";

export const FooterSection = ({ data }) => {
  return (
    <footer className="relative px-6 pt-10 pb-16 text-center bg-[#FDF0F3] border-t border-[#F0D5DA]">
      <BotanicalFlourish className="absolute bottom-2 left-2 rotate-180" />
      <BotanicalFlourish className="absolute bottom-2 right-2 -rotate-90" />

      <p className="font-hindi text-sm text-[#733342] font-semibold">
        सादर आमंत्रण
      </p>
      <p className="text-xs font-serif italic text-[#8A5B66] mt-0.5">
        With Warm Regards & Best Compliments
      </p>

      <div className="w-16 h-[1px] bg-[#C5A059]/40 mx-auto my-4"></div>

      <p className="font-script text-3xl text-[#5E2938]">
        {data.bride.name} & {data.groom.name}
      </p>

      <p className="text-[10px] tracking-widest uppercase text-[#9B6874] font-sans-ui mt-3">
        {data.date.full} • {data.venue.city}
      </p>
    </footer>
  );
};
