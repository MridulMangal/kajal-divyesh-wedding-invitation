import React from "react";
import { BotanicalDivider } from "./BotanicalCorners";

export const EventDetails = ({ data }) => {
  return (
    <section className="px-6 py-10 bg-[#FFF7F8] border-y border-[#F0D5DA]/80">
      <div className="text-center mb-8">
        <p className="font-hindi text-sm text-[#9B6874] font-medium">शुभ मांगलिक प्रसंग</p>
        <h2 className="text-2xl font-serif text-[#5E2938] uppercase tracking-wider font-semibold">
          Wedding Ceremonies
        </h2>
        <BotanicalDivider />
      </div>

      <div className="space-y-6 max-w-sm mx-auto">
        {data.events.map((event) => (
          <div 
            key={event.id}
            className="relative bg-white/90 rounded-2xl p-6 shadow-sm border border-[#E8CDD3] text-center"
          >
            {/* Corner Accent */}
            <div className="absolute top-2 right-2 text-[#C5A059] opacity-40">
              ✦
            </div>

            <div className="inline-block bg-[#F8E7EA] text-[#6E2E3E] font-hindi text-xs font-semibold px-3 py-1 rounded-full mb-3 border border-[#E0B8C2]">
              {event.badgeHindi}
            </div>

            <h3 className="font-serif text-xl sm:text-2xl text-[#5E2938] font-bold">
              {event.badgeEnglish}
            </h3>

            <p className="text-xs text-[#8A5B66] italic font-serif mt-1">
              {event.description}
            </p>

            <div className="my-4 border-t border-dashed border-[#E8CDD3]" />

            <div className="grid grid-cols-2 gap-2 text-left bg-[#FFFBF8] p-3 rounded-xl border border-[#F2DEE2]">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#9B6874] font-sans-ui">Date & Day</p>
                <p className="text-xs font-semibold text-[#4A2B33]">{event.date}</p>
                <p className="text-[11px] font-hindi text-[#7A4955]">{event.day}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#9B6874] font-sans-ui">Timing</p>
                <p className="text-xs font-semibold text-[#4A2B33]">{event.time}</p>
                <p className="text-[11px] font-hindi text-[#7A4955]">{data.hindiTime}</p>
              </div>
            </div>

            <div className="mt-4 pt-1">
              <p className="text-[11px] uppercase tracking-wider text-[#9B6874] font-sans-ui">Location</p>
              <p className="text-xs font-medium text-[#4A2B33]">{event.venue}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
