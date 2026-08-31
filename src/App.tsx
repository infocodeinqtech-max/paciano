import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* FIXED NAVBAR */}
      <Navbar scrolled={scrolled} />

      {/* ENTIRE PACIANO JOURNEY */}
      <main className="overflow-hidden bg-[#ece6d8]">
        {/* CHAPTER 01 — ARRIVAL */}
        <HeroSection />

        {/* CHAPTER 02 — THE STORY */}
        <div className="relative z-20 -mt-[90px]">
          {/* <StoryIntroSection /> */}
        </div>

        {/* CHAPTER 03 — STAY */}
        {/* <ImmersiveStaySection /> */}

        {/* CHAPTER 04 — THE RIVER */}
        {/* <RiverJourneySection /> */}

        {/* CHAPTER 05 — EXPERIENCES */}
        {/* <ExperiencesSection /> */}

        {/* CHAPTER 06 — INDULGENCE */}
        {/* <IndulgenceSection /> */}

        {/* CHAPTER 07 — NIGHTFALL */}
        {/* <NightfallSection /> */}

        {/* FINAL CHAPTER — YOUR ESCAPE */}
        {/* <EscapeCTASection /> */}
      </main>
    </>
  );
}
