import React from "react";
import { BotanicalDivider } from "./BotanicalCorners";

const frameClasses = [
  "rounded-[28px_28px_14px_14px]",
  "rounded-[14px_14px_28px_28px]",
  "rounded-[28px_14px_14px_28px]",
  "rounded-[14px_28px_28px_14px]"
];

export const PhotoGallery = ({ data }) => {
  const photos = [data.photos.secondaryCouple, ...data.photos.gallery];

  return (
    <section className="px-5 py-10 bg-[#FFF7F8] border-t border-[#F0D5DA]/80">
      <div className="text-center mb-7">
        <p className="font-hindi text-sm text-[#9B6874] font-medium">सुखद स्मृतियाँ</p>
        <h2 className="text-2xl font-serif text-[#5E2938] uppercase tracking-wider font-semibold">
          Glimpses of Love
        </h2>
        <BotanicalDivider />
      </div>

      <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
        {photos.map((photoUrl, index) => (
          <div
            key={photoUrl}
            className={`relative overflow-hidden ${frameClasses[index]} p-1.5 bg-gradient-to-br from-[#FFFDF9] via-[#F9E5E9] to-[#E8CDD3] border border-[#C5A059]/45 shadow-[0_8px_24px_rgba(94,41,56,0.12)] ${"aspect-[4/5]"}`}
          >
            <div className="w-full h-full overflow-hidden rounded-[inherit] bg-[#F5E4E7]">
              <img
                src={photoUrl}
                alt={`Kajal and Divyesh memory ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="pointer-events-none absolute inset-1.5 rounded-[inherit] ring-1 ring-white/70" />
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-[10px] tracking-[0.2em] uppercase text-[#9B6874] font-sans-ui">
        Together • Forever • Always
      </p>
    </section>
  );
};
