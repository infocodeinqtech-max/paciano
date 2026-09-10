import { useEffect, useMemo, useRef, useState } from "react";

import riversideRoom from "@/images/river-side-room.png";
import riversideBalcony from "@/images/river-side-room.png";
import riversideDetail from "@/images/river-view.png";

import gardenRoom from "@/images/garden-view.png";
import gardenView from "@/images/garden-room.png";
import gardenBalcony from "@/images/room2.png";

import familyRoom from "@/images/family-room.png";
import familyRoomTwo from "@/images/room1.png";
import familyView from "@/images/home-room-1.webp";
import mistMountains from "@/images/paciano-mist-mountains.png";

// ============================================================
// TYPES
// ============================================================

type Stay = {
  id: string;
  category: string;
  name: string;
  description: string;
  images: string[];
  features: string[];
  eyebrow?: string;
};


const DEFAULT_STAYS: Stay[] = [
  {
    id: "riverside",
    category: "Riverside Suite",
    eyebrow: "RIVERSIDE SUITE",
    name: "Riverfront Serenity",
    description:
      "Wake to the gentle rhythm of the river and unwind in a space where modern comfort meets nature’s calm.",
    images: [
      riversideRoom,
      riversideBalcony,
      riversideDetail,
    ],
    features: [
      "King Bed",
      "River View",
      "Private Balcony",
      "Outdoor Seating",
    ],
  },

  {
    id: "garden",
    category: "Garden Residence",
    eyebrow: "GARDEN RESIDENCE",
    name: "Garden Sanctuary",
    description:
      "A quiet residence surrounded by greenery, crafted for slow mornings, private moments and effortless comfort.",
    images: [
      gardenRoom,
      gardenView,
      gardenBalcony,
    ],
    features: [
      "King Bed",
      "Garden View",
      "Private Terrace",
      "Outdoor Seating",
    ],
  },

  {
    id: "valley",
    category: "Valley Retreat",
    eyebrow: "VALLEY RETREAT",
    name: "Mountain Stillness",
    description:
      "Open views, generous space and the stillness of the hills come together in a retreat made for deeper rest.",
    images: [    
      riversideDetail,
      gardenView,
    ],
    features: [
      "King Bed",
      "Mountain View",
      "Private Balcony",
      "Lounge Area",
    ],
  },

  {
    id: "family",
    category: "Family Sanctuary",
    eyebrow: "FAMILY SANCTUARY",
    name: "A Place Together",
    description:
      "Thoughtfully designed for togetherness, with room to breathe, reconnect and create unhurried memories.",
    images: [
      familyRoom,
      familyRoomTwo,
      familyView,
    ],
    features: [
      "2 King Beds",
      "Garden View",
      "Private Balcony",
      "Family Lounge",
    ],
  },
];

type AccommodationProps = {
  stays?: Stay[];
  onStaySelect?: (stay: Stay) => void;
};

export default function Accomodation({
  stays = DEFAULT_STAYS,
  onStaySelect,
}: AccommodationProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isChanging, setIsChanging] = useState(false);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const activeStay = useMemo(
    () => stays[activeIndex] ?? stays[0],
    [stays, activeIndex],
  );

  const changeStay = (nextIndex: number) => {
    if (stays.length <= 1 || isChanging) return;

    const normalized = (nextIndex + stays.length) % stays.length;
    if (normalized === activeIndex) return;

    setDirection(normalized > activeIndex ? 1 : -1);
    setIsChanging(true);
    setActiveIndex(normalized);

    window.setTimeout(() => setIsChanging(false), 650);
  };

  const previous = () => changeStay(activeIndex - 1);
  const next = () => changeStay(activeIndex + 1);

  // Reveal the section when it enters the viewport.
  // This fixes the old .paciano-about-visible selector, which was never
  // actually being added to the DOM.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  if (!activeStay) return null;

  return (
    <section
      ref={sectionRef}
      id="stay"
      className={`relative overflow-hidden bg-[#f2eee3] px-5 py-24 sm:px-8 lg:px-14 xl:px-20 ${
        isSectionVisible ? "paciano-about-visible" : ""
      }`}
    >
      {/* Organic botanical background */}
      <svg
        className="pointer-events-none absolute -right-20 top-8 h-[360px] w-[300px] opacity-[0.16]"
        viewBox="0 0 300 360"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M258 12C229 86 220 155 237 214C248 253 264 300 277 348"
          stroke="#74844a"
          strokeWidth="1"
        />
        <path d="M231 91C196 67 171 72 153 103C187 113 213 108 231 91Z" fill="#8b9865" />
        <path d="M226 145C260 116 284 121 297 150C271 165 247 164 226 145Z" fill="#8b9865" />
        <path d="M231 204C195 181 170 187 153 216C185 229 214 222 231 204Z" fill="#8b9865" />
      </svg>

 
      {/* Intro */}
      <div className="relative z-10 mx-auto max-w-[1180px] text-center">
        <div className="paciano-intro-reveal">

        {/* Small botanical sprout above OUR STAYS */}
        <div className="mb-3 flex justify-center">
          {/* <svg
            width="34"
            height="30"
            viewBox="0 0 34 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="overflow-visible"
          >
            {/* stem
            <path
              d="M17 29C17 22 17 16 18.5 9"
              stroke="#71803F"
              strokeWidth="1"
              strokeLinecap="round"
            />

            {/* left leaf 
            <path
              d="M17.8 13.2
                C11.4 13.2 7.3 9.9 6.2 4.1
                C12.4 4.2 17.2 7.1 17.8 13.2Z"
              fill="#71803F"
            />

            {/* right leaf 
            <path
              d="M18.2 9.8
                C20.1 4.2 24.2 1.8 29.3 2.5
                C28.2 7.8 24.5 10.5 18.2 9.8Z"
              fill="#71803F"
            />
          </svg> */}
          <svg
            viewBox="0 0 40 40"
            className="
          mx-auto
          mb-[9px]

          h-[25px]
          w-[25px]

          text-[#71883F]
        "
            fill="none"
          >
            <path
              d="M20 34C20 25 21 17 27 8"
              stroke="currentColor"
              strokeWidth="1"
            />

            <path
              d="
            M21 22
            C15 20 12 16 13 11
            C18 12 22 16 22 21
          "
              fill="currentColor"
            />

            <path
              d="
            M24 17
            C25 12 29 9 34 10
            C32 15 29 18 24 18
          "
              fill="currentColor"
              opacity=".5"
            />
          </svg>
        </div>

        {/* OUR STAYS */}
        <div className="flex items-center justify-center gap-4">
          {/* <span className="h-px w-10 bg-[#7d8958]/55" /> */}

          <span
            className="
              font-manrope
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#71803F]
            "
          >
            Stays That Feel Like an Escape
          </span>

          {/* <span className="h-px w-10 bg-[#7d8958]/55" /> */}
        </div>

        <h2
          className="
            mt-5
            font-cormorant
            text-[48px]
            font-normal
            leading-[0.92]
            tracking-[-0.025em]
            text-[#173321]
            sm:text-[60px]
            lg:text-[68px]
          "
        >
          Spaces Crafted for Your Escape,
        </h2>

        <p
          className="
            mt-1
            font-cormorant
            text-[38px]
            font-normal
            italic
            leading-[0.95]
            tracking-[-0.02em]
            text-[#84934d]
            sm:text-[48px]
            lg:text-[52px]
          "
        >
          Made to Be Yours. 
        </p>

        <p
          className="
          paciano-reveal
          paciano-delay-2
          mt-[32px]
          mx-auto
          max-w-[680px]
          font-manrope
          text-[12px]
          leading-[1.85]
          text-[#50584F]
          sm:text-[14px]
          "
        >
          Thoughtfully designed stays that blend comfort, nature and understated luxury.<br/>
          Find the perfect space for your next escape.
        </p>

        </div>
      </div>

      {/* Stay category navigation */}
      <div className="relative z-20 mx-auto mt-12 flex max-w-[1180px] items-end justify-center">
        <div className="grid w-full grid-cols-2 border-b border-[#173321]/10 sm:grid-cols-4 lg:w-auto lg:border-b-0">
          {stays.map((stay, index) => {
            const active = index === activeIndex;

            return (
              <button
                key={stay.id}
                type="button"
                onClick={() => changeStay(index)}
                className={`group relative min-w-[150px] px-5 pb-4 pt-3 text-center outline-none sm:px-7 lg:min-w-[190px] ${
                  active ? "paciano-stay-active" : ""
                }`}
              >
                <span
                  className={`paciano-stay-icon paciano-stay-icon-${index} mx-auto mb-3 flex h-9 items-center justify-center text-[#78865b] transition-all duration-700 ${
                    active
                      ? "scale-105 opacity-100"
                      : "opacity-55 group-hover:opacity-100"
                  }`}
                >
                  {index === 0 && (
                    <svg width="35" height="27" viewBox="0 0 35 27" fill="none" aria-hidden="true">
                      <path className="paciano-wave-line paciano-wave-1" d="M3 9C8 5 12 5 17 9C22 13 27 13 32 9" stroke="currentColor" strokeWidth="1.2" />
                      <path className="paciano-wave-line paciano-wave-2" d="M3 15C8 11 12 11 17 15C22 19 27 19 32 15" stroke="currentColor" strokeWidth="1.2" />
                      <path className="paciano-wave-line paciano-wave-3" d="M3 21C8 17 12 17 17 21C22 25 27 25 32 21" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg width="28" height="30" viewBox="0 0 28 30" fill="none" aria-hidden="true">
                      <g className="paciano-leaf-icon" style={{ transformOrigin: "14px 18px" }}>
                        <path d="M14 28V8M14 14C8 13 5 10 4 5C9 5 13 8 14 14ZM14 18C20 17 23 14 24 9C19 9 15 12 14 18Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                    </svg>
                  )}
                  {index === 2 && (
                    <svg width="34" height="28" viewBox="0 0 34 28" fill="none" aria-hidden="true">
                      <path className="paciano-mountain-icon" d="M3 24L13 11L19 18L25 7L31 24H3Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                    </svg>
                  )}
                  {index === 3 && (
                    <svg width="36" height="29" viewBox="0 0 36 29" fill="none" aria-hidden="true">
                      <g className="paciano-family-icon" style={{ transformOrigin: "18px 15px" }}>
                        <circle cx="10" cy="8" r="3" stroke="currentColor" strokeWidth="1.1" />
                        <circle cx="26" cy="8" r="3" stroke="currentColor" strokeWidth="1.1" />
                        <circle cx="18" cy="4" r="3" stroke="currentColor" strokeWidth="1.1" />
                        <path d="M3 25C3 19 6 16 10 16C14 16 17 19 17 25M19 25C19 19 22 16 26 16C30 16 33 19 33 25" stroke="currentColor" strokeWidth="1.1" />
                      </g>
                    </svg>
                  )}
                </span>

                <span
                  className={`block font-cormorant text-[18px] leading-none transition-all duration-500 text-[#173321]${
                    active
                      ? "translate-y-[-1px] text-[#173321]"
                      : "text-[#687064] group-hover:translate-y-[-1px] group-hover:text-[#173321]"
                  }`}
                >
                  {stay.category}
                </span>

                <span
                  className={`absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-[#84934d] transition-all duration-700 ${
                    active ? "w-[118px] opacity-100" : "w-0 opacity-0"
                  }`}
                />

                {index < stays.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-0 top-1/2 hidden h-[62px] w-px -translate-y-1/2 bg-[#173321]/14 lg:block"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Brand-led editorial CTA — intentionally not a pill/button */}
        <button
          type="button"
          onClick={() => onStaySelect?.(activeStay)}
          className="paciano-stay-cta group ml-7 hidden items-center gap-5 border-l border-[#173321]/15 pb-3 pl-7 lg:flex"
        >
          <span className="text-left">
            <span className="block font-jost text-[10px] font-medium uppercase tracking-[0.28em] text-[#7b865a] transition-colors duration-500 group-hover:text-[#596a38]">
              A Place to Belong
            </span>
            <span className="mt-1 block font-cormorant text-[22px] leading-none text-[#173321]">
              Find Your Paciano
            </span>
          </span>

          <span className="relative flex h-12 w-12 items-center justify-center text-[#173321]">
            <span className="absolute inset-0 rounded-full border border-[#7e8c59]/45 transition-all duration-700 group-hover:scale-[1.08] group-hover:border-[#71803f]" />
            <span className="absolute inset-[5px] rounded-full border border-[#84934d]/25 transition-all duration-700 group-hover:rotate-45 group-hover:scale-[0.92]" />
            <span className="relative text-[19px] font-light transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </span>
        </button>
      </div>

      {/* Main accommodation showcase */}
      <div className="relative z-10 mx-auto mt-7 max-w-[1420px]">
        <div className="relative overflow-hidden rounded-[28px] bg-[#173321] shadow-[0_30px_90px_rgba(31,43,30,0.16)]">
          <div className="grid min-h-[590px] lg:grid-cols-[minmax(0,1fr)_390px]">
            {/* Room image — intentionally the visual hero */}
            <div className="relative min-h-[430px] overflow-hidden lg:min-h-[590px]">
              <div
                key={activeStay.id}
                className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${
                  isChanging
                    ? direction > 0
                      ? "translate-x-5 scale-[1.025] opacity-0"
                      : "-translate-x-5 scale-[1.025] opacity-0"
                    : "translate-x-0 scale-100 opacity-100"
                }`}
              >
                <img
                   src={activeStay.images[0]}
                  alt={activeStay.name}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-9 left-8 z-10 max-w-[220px] text-white sm:bottom-12 sm:left-12">
                <div className="mb-5 h-px w-16 bg-[#c7d37c]" />
                <p className="font-cormorant text-[28px] leading-[0.92] tracking-[0.01em]">
                  A quieter
                  <br />
                  kind of
                  <br />
                  <span className="italic text-[#cbd779]">luxury.</span>
                </p>
                <p className="mt-5 max-w-[190px] font-lora text-[10px] italic leading-[1.55] text-white/80">
                  Where the river slows, the mountains breathe, and time feels different.
                </p>
              </div>

              <button
                type="button"
                onClick={previous}
                aria-label="Previous stay"
                className="absolute left-5 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/65 bg-white/85 text-[#173321] backdrop-blur-sm transition-all duration-500 hover:scale-105"
              >
                ←
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next stay"
                className="absolute right-5 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/65 bg-white/85 text-[#173321] backdrop-blur-sm transition-all duration-500 hover:scale-105"
              >
                →
              </button>

              <div className="absolute bottom-8 right-7 z-20 flex items-center gap-3 text-white">
                <span className="font-jost text-[9px] tracking-[0.18em]">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <span className="h-px w-8 bg-white/55" />
                <span className="font-jost text-[9px] tracking-[0.18em]">
                  {String(stays.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Editorial information panel */}
            <div className="relative overflow-hidden bg-[#f2eee3]">
              {/* This organic divider is SVG/CSS, not a background image. */}
              <svg
                className="pointer-events-none absolute -left-[86px] top-0 z-20 h-full w-[130px]"
                viewBox="0 0 130 590"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M130 0C72 72 64 135 83 194C103 256 103 319 72 370C41 421 31 481 59 590L130 590Z"
                  fill="#f2eee3"
                />
                <path
                  d="M130 0C72 72 64 135 83 194C103 256 103 319 72 370C41 421 31 481 59 590"
                  stroke="#89965f"
                  strokeWidth="1.4"
                  opacity="0.75"
                />
              </svg>

              <svg
                className="pointer-events-none absolute bottom-[-25px] right-[-10px] h-[210px] w-[180px] opacity-[0.20]"
                viewBox="0 0 180 210"
                fill="none"
                aria-hidden="true"
              >
                <path d="M142 208C125 163 110 121 76 86C60 70 48 49 45 19" stroke="#72804e" strokeWidth="1" />
                <path d="M89 104C112 84 130 87 141 105C122 117 104 117 89 104Z" fill="#9ba876" />
                <path d="M65 80C44 65 28 68 20 86C37 96 52 94 65 80Z" fill="#9ba876" />
              </svg>

              <div className="relative z-30 flex h-full min-h-[590px] flex-col px-8 py-10 sm:px-10">
                <div
                  key={`content-${activeStay.id}`}
                  className={`flex flex-1 flex-col transition-all duration-600 ${
                    isChanging ? "translate-y-3 opacity-0" : "translate-y-0 opacity-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="h-px w-7 bg-[#84934d]" />
                    <span className="font-jost text-[8px] font-medium uppercase tracking-[0.28em] text-[#71804c]">
                      {activeStay.eyebrow}
                    </span>
                    <span className="h-px w-7 bg-[#84934d]" />
                  </div>

                  <h3 className="mt-5 font-cormorant text-[42px] font-normal leading-[0.94] tracking-[-0.02em] text-[#173321] sm:text-[48px]">
                    {activeStay.name}
                  </h3>

                  <p className="mt-5 max-w-[300px] font-lora text-[13px] leading-[1.7] text-[#687163]">
                    {activeStay.description}
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-5">
                    {activeStay.features.map((feature, index) => (
                      <div key={feature} className="flex items-center gap-3">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center text-[#52623d]">
                          {index === 0 && (
                            <svg width="24" height="22" viewBox="0 0 24 22" fill="none">
                              <path d="M4 11V8C4 6.3 5.3 5 7 5H17C18.7 5 20 6.3 20 8V11M3 11H21V17H3V11ZM6 17V19M18 17V19" stroke="currentColor" strokeWidth="1.1" />
                              <path d="M6 8H18" stroke="currentColor" strokeWidth="1.1" />
                            </svg>
                          )}
                          {index === 1 && (
                            <svg width="24" height="22" viewBox="0 0 24 22" fill="none">
                              <path d="M4 4L20 4V18H4V4Z" stroke="currentColor" strokeWidth="1.1" />
                              <path d="M4 4L12 11L20 4" stroke="currentColor" strokeWidth="1.1" />
                            </svg>
                          )}
                          {index === 2 && (
                            <svg width="24" height="22" viewBox="0 0 24 22" fill="none">
                              <path d="M3 12C5 9 8 9 10 12C12 15 15 15 17 12C19 9 21 9 22 11" stroke="currentColor" strokeWidth="1.1" />
                              <path d="M3 16H21" stroke="currentColor" strokeWidth="1.1" />
                            </svg>
                          )}
                          {index === 3 && (
                            <svg width="24" height="22" viewBox="0 0 24 22" fill="none">
                              <path d="M12 20V8M12 13C8 12 6 9 6 6C9 6 11 8 12 13ZM12 16C16 15 18 12 18 9C15 9 13 11 12 16Z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
                            </svg>
                          )}
                        </span>
                        <span className="font-lora text-[11px] text-[#65705f]">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => onStaySelect?.(activeStay)}
                    className="group mt-9 flex h-[48px] w-full max-w-[285px] items-center justify-between rounded-full bg-[#173321] pl-6 pr-2 text-[#f2eee3] shadow-[0_12px_30px_rgba(23,51,33,0.14)] transition-all duration-500 hover:bg-[#22452f]"
                  >
                    <span className="font-jost text-[9px] font-medium uppercase tracking-[0.24em]">
                      Explore This Stay
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#c6d477] text-[#173321] transition-transform duration-500 group-hover:translate-x-0.5">
                      →
                    </span>
                  </button>

                  <div className="mt-auto pt-10">
                    <div className="h-px w-full bg-[#173321]/10" />
                    <div className="mt-5 flex items-end justify-between gap-5">
                      <div>
                        <span className="font-lora text-[11px] italic text-[#64705e]">Riverside calm</span>
                        <span className="mx-2 text-[#8a975e]">·</span>
                        <span className="font-lora text-[11px] italic text-[#64705e]">Tea gardens</span>
                        <span className="mx-2 text-[#8a975e]">·</span>
                        <span className="font-lora text-[11px] italic text-[#64705e]">Slow living</span>
                      </div>
                      <div className="shrink-0 text-right">
                        <p className="font-jost text-[9px] font-medium uppercase tracking-[0.32em] text-[#748046]">Paciano</p>
                        <p className="mt-1 font-jost text-[6px] uppercase tracking-[0.28em] text-[#89917d]">Stay a little longer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`          
          /* ========================================================
             PACIANO — icon choreography
             Still before the section arrives; gently alive after scroll.
             ======================================================== */

          .paciano-stay-icon {
            transform-origin: 50% 70%;
            will-change: transform, opacity;
          }

          .paciano-about-visible .paciano-stay-icon-0 {
            animation: paciano-icon-float-0 5.8s ease-in-out infinite;
            animation-delay: 0.10s;
          }

          .paciano-about-visible .paciano-stay-icon-1 {
            animation: paciano-icon-float-1 6.4s ease-in-out infinite;
            animation-delay: 0.45s;
          }

          .paciano-about-visible .paciano-stay-icon-2 {
            animation: paciano-icon-float-2 7s ease-in-out infinite;
            animation-delay: 0.80s;
          }

          .paciano-about-visible .paciano-stay-icon-3 {
            animation: paciano-icon-float-3 6.7s ease-in-out infinite;
            animation-delay: 1.15s;
          }

          .paciano-about-visible .paciano-wave-1 {
            animation: paciano-wave-1 4.8s ease-in-out infinite;
            animation-delay: 0.15s;
          }

          .paciano-about-visible .paciano-wave-2 {
            animation: paciano-wave-2 4.8s ease-in-out infinite;
            animation-delay: 0.33s;
          }

          .paciano-about-visible .paciano-wave-3 {
            animation: paciano-wave-3 4.8s ease-in-out infinite;
            animation-delay: 0.51s;
          }

          .paciano-about-visible .paciano-leaf-icon {
            animation: paciano-leaf-breathe 5.6s ease-in-out infinite;
            animation-delay: 0.45s;
          }

          .paciano-about-visible .paciano-mountain-icon {
            animation: paciano-mountain-breathe 6.2s ease-in-out infinite;
            animation-delay: 0.80s;
          }

          .paciano-about-visible .paciano-family-icon {
            animation: paciano-family-breathe 5.9s ease-in-out infinite;
            animation-delay: 1.15s;
          }

          @keyframes paciano-icon-float-0 {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-1px); }
          }

          @keyframes paciano-icon-float-1 {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-1px) rotate(-1deg); }
          }

          @keyframes paciano-icon-float-2 {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-1px); }
          }

          @keyframes paciano-icon-float-3 {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-1px) scale(1.008); }
          }

          @keyframes paciano-wave-1 {
            0%, 100% { transform: translateX(0) scaleX(1); opacity: .72; }
            50% { transform: translateX(1px) scaleX(1.025); opacity: .92; }
          }

          @keyframes paciano-wave-2 {
            0%, 100% { transform: translateX(0) scaleX(1); opacity: .78; }
            50% { transform: translateX(1.5px) scaleX(1.035); opacity: 1; }
          }

          @keyframes paciano-wave-3 {
            0%, 100% { transform: translateX(0) scaleX(1); opacity: .72; }
            50% { transform: translateX(1px) scaleX(1.025); opacity: .9; }
          }

          @keyframes paciano-leaf-breathe {
            0%, 100% { transform: rotate(0deg); }
            35% { transform: rotate(-1.5deg); }
            70% { transform: rotate(1deg); }
          }

          @keyframes paciano-mountain-breathe {
            0%, 100% { transform: translateY(0) scaleY(1); }
            50% { transform: translateY(-1px) scaleY(1.008); }
          }

          @keyframes paciano-family-breathe {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-1px) scale(1.012); }
          }

          .group:hover .paciano-stay-icon {
            color: #596b3d;
            opacity: 1;
          }

          @media (prefers-reduced-motion: reduce) {
            .paciano-stay-icon,
            .paciano-wave-line,
            .paciano-leaf-icon,
            .paciano-mountain-icon,
            .paciano-family-icon {
              animation: none !important;
            }
          }

          .paciano-stay-cta {
            transition: transform 700ms cubic-bezier(.16, 1, .3, 1);
          }

          .paciano-stay-cta:hover {
            transform: translateX(3px);
          }

          .paciano-stay-cta:focus-visible {
            outline: 1px solid rgba(126, 140, 89, 0.65);
            outline-offset: 5px;
          }

          .paciano-intro-reveal {
            opacity: 0;
            transform: translateY(52px);
            transition:
              opacity 1.25s cubic-bezier(.16, 1, .3, 1),
              transform 1.25s cubic-bezier(.16, 1, .3, 1);
          }

          .paciano-about-visible .paciano-intro-reveal {
            opacity: 1;
            transform: translateY(0);
          }

          .paciano-reveal {
            opacity: 0;
            transform: translateY(28px);
            transition:
              opacity 1.2s cubic-bezier(.16, 1, .3, 1),
              transform 1.2s cubic-bezier(.16, 1, .3, 1);
          }

          .paciano-about-visible .paciano-reveal {
            opacity: 1;
            transform: translateY(0);
          }

          .paciano-delay-1 {
            transition-delay: 0.2s;
          }

          .paciano-delay-2 {
            transition-delay: 0.45s;
          }

          .paciano-delay-3 {
            transition-delay: 0.7s;
          }

          .paciano-delay-4 {
            transition-delay: 0.95s;
          }
          
          `}
        </style>
    </section>
  );
}
