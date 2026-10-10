import React, { useRef, useState } from "react";
import { WEDDING_DATA } from "./weddingData";
import { OpeningEnvelope } from "./components/OpeningEnvelope";
import { HeroSection } from "./components/HeroSection";
import { StorySection } from "./components/StorySection";
import { EventDetails } from "./components/EventDetails";
import { VenueSection } from "./components/VenueSection";
import { PhotoGallery } from "./components/PhotoGallery";
import { RSVPSection } from "./components/RSVPSection";
import { FooterSection } from "./components/FooterSection";

export function App() {
  const [isOpened, setIsOpened] = useState(false);
  const songRef = useRef(null);

  const startSong = () => {
    songRef.current?.play().catch(() => {});
  };

  return (
    <div className="min-h-[100dvh] bg-[#24131A] flex items-center justify-center sm:py-8 sm:px-4">
      <audio ref={songRef} src="/song.mpeg" loop preload="auto" />
      {/* 
        Stage 1: Opening Interactive Envelope Screen 
        Visible when website loads. Unmounts cleanly upon opening.
      */}
      {!isOpened && (
        <OpeningEnvelope 
          weddingData={WEDDING_DATA}
          onMusicStart={startSong}
          onOpenComplete={() => setIsOpened(true)} 
        />
      )}

      {/* 
        Stage 2: Main Wedding Invitation Stationery
        Mobile-first presentation: max-w-md viewport framed inside a luxury backdrop on desktop screens.
      */}
      <main 
        className={`w-full max-w-[430px] sm:max-w-[540px] lg:max-w-[640px] min-h-[100dvh] sm:min-h-0 sm:rounded-[32px] overflow-hidden shadow-2xl paper-texture border border-[#E8CDD3]/80 transition-opacity duration-1000 ${
          isOpened ? "opacity-100 animate-fade-in-up" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Subtle decorative top bar border */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#C98F9B] via-[#C5A059] to-[#C98F9B]" />

        {/* Section 1: Hero Banner */}
        <HeroSection data={WEDDING_DATA} />

        {/* Section 2: Couple Story */}
        <StorySection data={WEDDING_DATA} />

        {/* Section 3: Confirmed Wedding Event Details */}
        <EventDetails data={WEDDING_DATA} />

        {/* Section 4: Venue & Google Maps Navigation */}
        <VenueSection data={WEDDING_DATA} />

        {/* Section 5: Photo Gallery */}
        <PhotoGallery data={WEDDING_DATA} />

        {/* Section 6: Interactive RSVP Form */}
        <RSVPSection />

        {/* Section 7: Footer */}
        <FooterSection data={WEDDING_DATA} />
      </main>
    </div>
  );
}

export default App;
