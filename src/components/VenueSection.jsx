import React from "react";
import { BotanicalDivider } from "./BotanicalCorners";

export const VenueSection = ({ data }) => {
  return (
    <section className="px-6 py-10">
      <div className="text-center mb-6">
        <p className="font-hindi text-sm text-[#9B6874] font-medium">विवाह स्थल</p>
        <h2 className="text-2xl font-serif text-[#5E2938] uppercase tracking-wider font-semibold">
          The Venue
        </h2>
        <BotanicalDivider />
      </div>

      <div className="max-w-sm mx-auto bg-white/80 rounded-2xl p-6 border border-[#E8CDD3] shadow-sm text-center">
        {/* Architectural / Venue Icon */}
        <div className="w-12 h-12 mx-auto rounded-full bg-[#F8E7EA] flex items-center justify-center text-[#8A485A] mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 21C16 16.5 19 13.5 19 9.5C19 5.6 15.9 2.5 12 2.5C8.1 2.5 5 5.6 5 9.5C5 13.5 8 16.5 12 21Z" />
            <circle cx="12" cy="9.5" r="2.5" />
          </svg>
        </div>

        <h3 className="font-serif text-2xl text-[#5E2938] font-bold">
          {data.venue.name}
        </h3>
        <p className="font-hindi text-sm text-[#7C4050] font-medium mt-0.5">
          {data.venue.hindiName}
        </p>

        <p className="text-xs text-[#6F4750] mt-3 leading-relaxed font-sans-ui">
          {data.venue.city}
        </p>
        <p className="font-hindi text-xs text-[#8A5964]">
          {data.venue.hindiCity}
        </p>

        {/* Google Maps Search Button */}
        <div className="mt-6">
          <a
            href={data.venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-full bg-gradient-to-r from-[#8A485A] to-[#6E2E3E] text-[#FFF9F6] text-xs font-sans-ui font-medium tracking-wide shadow-md hover:shadow-lg transition-all transform active:scale-98"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};
