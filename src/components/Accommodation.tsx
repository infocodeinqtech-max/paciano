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
import leafCta from "@/images/leaf-cta.png";
import belowleafCta from "@/images/paciano-leaf-transparent.png";

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
    images: [riversideRoom, riversideBalcony, riversideDetail],
    features: ["King Bed", "River View", "Private Balcony", "Outdoor Seating"],
  },

  {
    id: "garden",
    category: "Garden Residence",
    eyebrow: "GARDEN RESIDENCE",
    name: "Garden Sanctuary",
    description:
      "A quiet residence surrounded by greenery, crafted for slow mornings, private moments and effortless comfort.",
    images: [gardenRoom, gardenView, gardenBalcony],
    features: ["King Bed", "Garden View", "Private Terrace", "Outdoor Seating"],
  },

  {
    id: "valley",
    category: "Valley Retreat",
    eyebrow: "VALLEY RETREAT",
    name: "Mountain Stillness",
    description:
      "Open views, generous space and the stillness of the hills come together in a retreat made for deeper rest.",
    images: [riversideDetail, gardenView],
    features: ["King Bed", "Mountain View", "Private Balcony", "Lounge Area"],
  },

  {
    id: "family",
    category: "Family Sanctuary",
    eyebrow: "FAMILY SANCTUARY",
    name: "A Place Together",
    description:
      "Thoughtfully designed for togetherness, with room to breathe, reconnect and create unhurried memories.",
    images: [familyRoom, familyRoomTwo, familyView],
    features: [
      "2 King Beds",
      "Garden View",
      "Private Balcony",
      "Family Lounge",
    ],
  },
];

// ============================================================
// AMENITY ICON
// ============================================================

function AmenityIcon({ type }: { type: AmenityIconType }) {
  const className = "w-[18px] h-[18px] stroke-[1.2]";

  if (type === "bed") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M3 18v-7.5c0-.83.67-1.5 1.5-1.5h15c.83 0 1.5.67 1.5 1.5V18"
          stroke="currentColor"
        />
        <path d="M3 14h18" stroke="currentColor" />
        <path
          d="M5 9V6.5A1.5 1.5 0 0 1 6.5 5h4A1.5 1.5 0 0 1 12 6.5V9"
          stroke="currentColor"
        />
        <path d="M3 18v2M21 18v2" stroke="currentColor" />
      </svg>
    );
  }

  if (type === "balcony") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M4 5h16M5 5v5h14V5M3 10h18" stroke="currentColor" />
        <path d="M6 10v8M10 10v8M14 10v8M18 10v8" stroke="currentColor" />
        <path d="M3 18h18" stroke="currentColor" />
      </svg>
    );
  }

  if (type === "view") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M3 19h18" stroke="currentColor" />
        <path d="M4 18l6-7 3 3 4-6 3 10" stroke="currentColor" />
      </svg>
    );
  }

  if (type === "bath") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className}>
        <path
          d="M4 12h16v3.5A3.5 3.5 0 0 1 16.5 19h-9A3.5 3.5 0 0 1 4 15.5V12Z"
          stroke="currentColor"
        />
        <path d="M6 12V7a2 2 0 0 1 4 0v1" stroke="currentColor" />
        <path d="M10 8h5" stroke="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 10.5a10 10 0 0 1 16 0" stroke="currentColor" />
      <path d="M7 13.5a6.5 6.5 0 0 1 10 0" stroke="currentColor" />
      <path d="M10 16.5a3 3 0 0 1 4 0" stroke="currentColor" />
      <circle cx="12" cy="20" r="1" fill="currentColor" />
    </svg>
  );
}

// ============================================================
// COMPONENT
// ============================================================

export default function Accommodation() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const landscapeRef = useRef<HTMLDivElement | null>(null);
  const landscapeLeafRef = useRef<HTMLImageElement | null>(null);
  const landscapeMountainsRef = useRef<HTMLImageElement | null>(null);
  const landscapeSignatureRef = useRef<HTMLDivElement | null>(null);

  // Current room
  const [activeStay, setActiveStay] = useState(0);

  // Current image inside room
  const [activeImage, setActiveImage] = useState(0);

  // Incoming room during cinematic transition
  const [incomingStay, setIncomingStay] = useState<number | null>(null);

  // Incoming image during image transition
  const [incomingImage, setIncomingImage] = useState<number | null>(null);

  // Section reveal
  const [visible, setVisible] = useState(false);

  // Prevent multiple clicks during transition
  const [isTransitioning, setIsTransitioning] = useState(false);

  // ============================================================
  // SECTION INTERSECTION OBSERVER
  // ============================================================

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

  // ============================================================
  // CINEMATIC LANDSCAPE SCROLL PARALLAX
  // ============================================================

  useEffect(() => {
    const section = sectionRef.current;
    const landscape = landscapeRef.current;

    if (!section || !landscape) return;

    let ticking = false;

    const updateLandscape = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      /*
      Progress:
      0 = section is entering viewport
      1 = section has moved through viewport
    */

      const progress = Math.max(
        0,
        Math.min(
          1,
          (viewportHeight - rect.top) / (viewportHeight + rect.height * 0.35),
        ),
      );

      /*
      Very restrained movement.

      The purpose is NOT to look like a parallax website.
      It should feel like the landscape is breathing.
    */

      const mountainY = -progress * 18;
      const mountainX = Math.sin(progress * Math.PI * 2) * 10;

      const leafY = progress * 24;
      const leafX = -progress * 12;

      const signatureY = progress * -8;

      landscape.style.setProperty("--mountain-y", `${mountainY}px`);

      landscape.style.setProperty("--mountain-x", `${mountainX}px`);

      landscape.style.setProperty("--leaf-y", `${leafY}px`);

      landscape.style.setProperty("--leaf-x", `${leafX}px`);

      landscape.style.setProperty("--signature-y", `${signatureY}px`);

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateLandscape);
        ticking = true;
      }
    };

    updateLandscape();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateLandscape);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateLandscape);
    };
  }, []);
  // ============================================================
  // CHANGE ROOM — CINEMATIC TRANSITION
  // ============================================================

  const changeStay = (nextIndex: number) => {
    if (nextIndex === activeStay || isTransitioning) {
      return;
    }

    setIsTransitioning(true);

    // Put new scene behind the current scene
    setIncomingStay(nextIndex);

    /*
      Animation sequence:

      0ms
      Current image visible
      New image enlarged + invisible

      ~80ms
      New image starts appearing

      850ms
      New image becomes the official scene
    */

    window.setTimeout(() => {
      setActiveStay(nextIndex);

      setActiveImage(0);

      setIncomingStay(null);

      setIsTransitioning(false);
    }, 900);
  };

  // ============================================================
  // CHANGE IMAGE INSIDE SAME ROOM
  // ============================================================

  const changeImage = (nextIndex: number) => {
    if (nextIndex === activeImage || isTransitioning) {
      return;
    }

    setIsTransitioning(true);

    setIncomingImage(nextIndex);

    window.setTimeout(() => {
      setActiveImage(nextIndex);

      setIncomingImage(null);

      setIsTransitioning(false);
    }, 750);
  };

  // ============================================================
  // NEXT / PREVIOUS
  // ============================================================

  const nextStay = () => {
    const next = (activeStay + 1) % stays.length;

    changeStay(next);
  };

  const previousStay = () => {
    const previous = (activeStay - 1 + stays.length) % stays.length;

    changeStay(previous);
  };

  const stay = stays[activeStay];

  const incoming = incomingStay !== null ? stays[incomingStay] : null;

  // ============================================================
  // RENDER
  // ============================================================

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
        <path
          d="M231 91C196 67 171 72 153 103C187 113 213 108 231 91Z"
          fill="#8b9865"
        />
        <path
          d="M226 145C260 116 284 121 297 150C271 165 247 164 226 145Z"
          fill="#8b9865"
        />
        <path
          d="M231 204C195 181 170 187 153 216C185 229 214 222 231 204Z"
          fill="#8b9865"
        />
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

          <div
            className="
      flex
      items-center
      justify-center
      gap-4
    "
          >
            <span
              className="
        w-10
        h-px
        bg-[#899475]/45
      "
            />

            <span
              className="
        font-manrope
        text-[10px]
        font-semibold
        uppercase
        tracking-[0.38em]
        text-[#71803F]
      "
            >
              Our Stays
            </span>

            <span
              className="
        w-10
        h-px
        bg-[#899475]/45
      "
            />
          </div>

          {/* MAIN HEADING */}

          <h2
            className="
      mt-[16px]
      max-w-[950px]
      font-cormorant
      text-[43px]
      leading-[.95]
      tracking-[-.025em]
      text-[#17251B]
      sm:text-[52px]
      lg:text-[60px]
    "
          >
            Where Every Stay,
            <br />
            <span className="italic text-[#789541]">
              Feels Like Home in Nature.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
      mt-5
      max-w-[700px]
      px-4
      font-manrope
      text-[12px]
      leading-[1.8]
      text-[#657067]
      sm:text-[13px]
      lg:text-[14px]
    "
          >
            Wake to misty mountains, unwind beside the river, and let nature set
            the pace. Our stays are crafted for quiet comfort, generous space
            and a deeper sense of belonging.
          </p>
        </div>

        {/* ======================================================
    PACIANO STAY NAVIGATION
    REFERENCE-MATCHED HORIZONTAL CAPSULE
====================================================== */}

        <div
          className={`
    relative
    mt-10
    sm:mt-11
    lg:mt-12
    w-full
    transition-all
    duration-[1400ms]
    ease-[cubic-bezier(0.16,1,0.3,1)]
    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
  `}
        >
          {/* ====================================================
      CAPSULE
      SAME WIDTH AS IMAGE BELOW
  ==================================================== */}

          <div
            className="
      relative
      w-full
      min-h-[96px]
      flex
      items-center
      rounded-[60px]
      border
      border-[#C9C8BC]/75
      bg-[#F7F3E9]/90
      shadow-[0_12px_40px_rgba(65,73,55,0.065)]
      backdrop-blur-[8px]
      overflow-visible
    "
          >
            {/* very subtle inner border */}

            <div
              aria-hidden="true"
              className="
        pointer-events-none
        absolute
        inset-[1px]
        rounded-[59px]
        border
        border-white/50
      "
            />

            {/* ==================================================
                NAVIGATION + COLLECTION CTA
                Reference-matched horizontal capsule
            ================================================== */}

            <div
              className="
                relative
                z-20
                flex
                min-h-[94px]
                w-full
                items-stretch
                overflow-visible
              "
            >
              {/* Four stay navigation items */}
              <div className="grid min-w-0 flex-1 grid-cols-4">
                {stays.map((item, index) => {
                  const active = index === activeStay;

                  const descriptors = [
                    "RIVER & MOUNTAINS",
                    "GARDENS & GREENS",
                    "HILLS & HORIZONS",
                    "TOGETHER IN NATURE",
                  ];

                  return (
                    <div
                      key={item.id}
                      className="
                        relative
                        min-w-0
                     
                        last:border-r-0
                      "
                    >
                      <button
                        type="button"
                        onClick={() => changeStay(index)}
                        disabled={isTransitioning}
                        aria-label={`View ${item.name}`}
                        className="
                          group
                          relative
                          flex
                          h-full
                          w-full
                          items-center
                          justify-center
                          gap-4
                          px-3
                          outline-none
                          transition-all
                          duration-500
                          disabled:pointer-events-none
                          sm:gap-5
                          lg:px-5
                        "
                      >
                        {/* Icon */}
                        <span
                          className={`
                            relative
                            z-10
                            flex
                            h-[56px]
                            w-[56px]
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            transition-all
                            duration-700
                            ease-[cubic-bezier(0.16,1,0.3,1)]
                            ${
                              active
                                ? "border-[#879368]/55 bg-[#879368] text-[#F8F5EA] shadow-[0_0_0_3px_rgba(139,150,107,0.08),0_6px_24px_rgba(86,99,61,0.20)]"
                                : "border-[#C6C7BC]/80 bg-[#F8F5ED]/55 text-[#7E867A] group-hover:border-[#9DA77F]/80 group-hover:bg-[#E9EAD9] group-hover:text-[#657547] group-hover:shadow-[0_5px_18px_rgba(92,105,67,0.10)]"
                            }
                          `}
                        >
                          <span
                            aria-hidden="true"
                            className={`
                              pointer-events-none
                              absolute
                              inset-[5px]
                              rounded-full
                              border
                              transition-all
                              duration-700
                              ${
                                active
                                  ? "border-white/20"
                                  : "border-[#B8BCAD]/30 group-hover:border-[#9BA77A]/45"
                              }
                            `}
                          />

                          {index === 0 && (
                            <svg
                              viewBox="0 0 44 34"
                              className="relative z-10 h-[27px] w-[34px]"
                              fill="none"
                            >
                              <path
                                d="M3 10 C9 5 15 5 21 10 C27 15 33 15 41 9"
                                stroke="currentColor"
                                strokeWidth="1.15"
                              />
                              <path
                                d="M3 16 C9 11 15 11 21 16 C27 21 34 21 41 15"
                                stroke="currentColor"
                                strokeWidth="1"
                                opacity=".68"
                              />
                              <path
                                d="M7 23 C13 19 19 19 24 23 C29 27 35 27 39 24"
                                stroke="currentColor"
                                strokeWidth=".75"
                                opacity=".42"
                              />
                            </svg>
                          )}

                          {index === 1 && (
                            <svg
                              viewBox="0 0 44 34"
                              className="relative z-10 h-[29px] w-[31px] origin-bottom transition-transform duration-700 group-hover:-rotate-3"
                              fill="none"
                            >
                              <path
                                d="M21 29 C21 22 21 15 24 5"
                                stroke="currentColor"
                                strokeWidth="1.1"
                              />
                              <path
                                d="M22 20 C16 19 12 15 12 10 C18 10 22 13 22 20Z"
                                stroke="currentColor"
                                strokeWidth="1.1"
                              />
                              <path
                                d="M23 14 C24 9 28 6 33 7 C31 12 28 15 23 15Z"
                                stroke="currentColor"
                                strokeWidth="1.1"
                                opacity=".75"
                              />
                            </svg>
                          )}

                          {index === 2 && (
                            <svg
                              viewBox="0 0 44 34"
                              className="relative z-10 h-[28px] w-[35px] transition-transform duration-700 group-hover:-translate-y-0.5"
                              fill="none"
                            >
                              <path
                                d="M2 27 L13 14 L19 21 L28 7 L42 27"
                                stroke="currentColor"
                                strokeWidth="1.1"
                              />
                              <path
                                d="M20 27 L28 17 L36 27"
                                stroke="currentColor"
                                strokeWidth=".8"
                                opacity=".42"
                              />
                              <path
                                d="M2 28 H42"
                                stroke="currentColor"
                                strokeWidth=".8"
                                opacity=".45"
                              />
                            </svg>
                          )}

                          {index === 3 && (
                            <svg
                              viewBox="0 0 44 34"
                              className="relative z-10 h-[29px] w-[34px]"
                              fill="none"
                            >
                              <circle
                                cx="15"
                                cy="9"
                                r="3"
                                stroke="currentColor"
                                strokeWidth="1"
                              />
                              <circle
                                cx="29"
                                cy="9"
                                r="3"
                                stroke="currentColor"
                                strokeWidth="1"
                              />
                              <path
                                d="M7 29 C7 21 11 17 15 17 C20 17 22 21 22 29"
                                stroke="currentColor"
                                strokeWidth="1"
                              />
                              <path
                                d="M22 29 C22 21 24 17 29 17 C34 17 38 21 38 29"
                                stroke="currentColor"
                                strokeWidth="1"
                              />
                            </svg>
                          )}
                        </span>

                        {/* Text is vertically centred against the icon */}
                        <span className="flex min-w-0 flex-col items-start justify-center text-left">
                          <span
                            className={`
                              whitespace-nowrap
                              font-cormorant
                              font-medium
                              text-[21px]
                              leading-[1]
                              tracking-[0]
                              antialiased
                              transition-colors
                              duration-500

                              sm:text-[20px]
                              lg:text-[20px]

                              ${active ? "text-[#1F3026]" : "text-[#3A4840] group-hover:text-[#26382D]"}
                            `}
                          >
                            {item.name}
                          </span>

                          <span
                            className={`
                              mt-[7px]
                              whitespace-nowrap
                              font-manrope
                              text-[10px]
                              font-medium
                              uppercase
                              tracking-[0.29em]
                              transition-colors
                              duration-500
                              sm:text-[9px]
                              ${
                                active
                                  ? "text-[#718043]"
                                  : "text-[#657067] group-hover:text-[#78855F]"
                              }
                            `}
                          >
                            {descriptors[index]}
                          </span>
                        </span>

                        {/* Reference-style active/hover underline.
                            It is deliberately below the content, never touching the icon. */}
                        <span
                          aria-hidden="true"
                          className={`
                          pointer-events-none
                          absolute
                          bottom-[24px]
                          left-1/2
                          h-px
                          w-[218px]
                          -translate-x-1/2
                          origin-center
                          bg-gradient-to-r
                          from-transparent
                          via-[#71833F]
                          to-transparent
                          transition-all
                          duration-[750ms]
                          ease-[cubic-bezier(0.16,1,0.3,1)]
                          ${
                            active
                              ? "scale-x-100 opacity-100"
                              : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                          }
                        `}
                        >
                          <span
                            className={`
                                  pointer-events-none
                                  absolute
                                  left-1/2
                                  top-1/2
                                  h-[5px]
                                  w-[5px]
                                  -translate-x-1/2
                                  -translate-y-1/2
                                  rounded-full
                                  bg-[#71833F]
                                  shadow-[0_0_6px_1px_rgba(113,131,63,0.18)]
                                  transition-all
                                  duration-500
                                  ${
                                    active
                                      ? "scale-100 opacity-100"
                                      : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                                  }
                                `}
                          />
                        </span>
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* CTA divider — same visual height as the navigation dividers */}
              <span
                aria-hidden="true"
                className="
                  my-auto
                  h-[52px]
                  w-px
                  shrink-0
                  bg-[#C2C5B9]/80
                "
              />

              {/* Collection CTA */}
              <button
                type="button"
                onClick={() => {
                  document.getElementById("stays")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                aria-label="Explore the Paciano collection"
                className="
                  group
                  relative
                  flex
                  min-h-[116px]
                  w-[260px]
                  shrink-0
                  items-center
                  justify-center
                  overflow-visible
                  outline-none
                  sm:w-[275px]
                  lg:w-[290px]
                "
              >
                {/* Leaf is a separate transparent asset, so the CTA remains
                    fully clickable/animatable. */}
                <img
                  src={leafCta}
                  alt=""
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    right-[-58px]
                    top-1/2
                    z-0
                    h-[112px]
                    w-auto
                    max-w-none
                    -translate-y-1/2
                    object-contain
                    opacity-80
                    transition-all
                    duration-[900ms]
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                    group-hover:translate-x-[7px]
                    group-hover:rotate-[1.5deg]
                    group-hover:opacity-100
                  "
                />

                <span
                  className="
                    relative
                    z-10
                    flex
                    items-center
                    gap-5
                    pr-2
                  "
                >
                  <span className="flex flex-col items-start text-left">
                    <span
                      className="
                        font-manrope
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.42em]
                        text-[#718043]
                        transition-all
                        duration-500
                        group-hover:tracking-[0.47em]
                      "
                    >
                      Explore the
                    </span>

                    <span
                      className="
                        mt-[2px]
                        font-cormorant
                        text-[28px]
                        leading-[.9]
                        tracking-[-0.025em]
                        text-[#25372C]
                        sm:text-[30px]
                      "
                    >
                      Collection
                    </span>

                    <span className="relative mt-[8px] h-[9px] w-[74px] overflow-visible">
                      <svg
                        viewBox="0 0 110 12"
                        className="
                          h-[9px]
                          w-[78px]
                          origin-left
                          text-[#71833F]
                          transition-transform
                          duration-700
                          group-hover:scale-x-[1.12]
                        "
                        fill="none"
                      >
                        <path
                          d="M1 7 C25 2 51 2 76 6 C89 8 100 8 109 4"
                          stroke="currentColor"
                          strokeWidth="1"
                        />
                      </svg>
                    </span>
                  </span>

                  <span
                    className="
                      relative
                      flex
                      h-[56px]
                      w-[56px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#A9AE9B]
                      text-[#25372C]
                      transition-all
                      duration-700
                      ease-[cubic-bezier(0.16,1,0.3,1)]
                      group-hover:border-[#71833F]
                      group-hover:bg-[#71833F]
                      group-hover:text-white
                      group-hover:shadow-[0_8px_22px_rgba(88,103,57,0.16)]
                    "
                  >
                    <span
                      className="
                        text-[18px]
                        leading-none
                        transition-transform
                        duration-700
                        group-hover:translate-x-1
                      "
                    >
                      →
                    </span>
                  </span>
                </span>
              </button>
            </div>
          </div>

          {/* ======================================================
            CINEMATIC ROOM IMAGE
        ====================================================== */}

          <div
            className={`
            relative
            mt-8
            transition-all
            duration-[1500ms]
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }
          `}
          >
            {/* ====================================================
              IMAGE FRAME
          ==================================================== */}

            <div
              className="
              relative
              overflow-hidden
              h-[470px]
                sm:h-[560px]
                lg:h-[680px]
                xl:h-[700px]
              rounded-[20px]
              sm:rounded-[26px]
              bg-[#303A32]
              shadow-[0_35px_100px_rgba(43,49,42,0.18)]
            "
            >
              {/* ==================================================
                CURRENT ROOM IMAGE
            ================================================== */}

              <div
                className={`
                absolute
                inset-0
                transition-all
                duration-[900ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                  incomingStay !== null
                    ? "opacity-0 scale-[0.965]"
                    : "opacity-100 scale-100"
                }
              `}
              >
                <img
                  src={stay.images[activeImage]}
                  alt={stay.name}
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    object-center
                    animate-[luxuryRoomDrift_18s_ease-in-out_infinite_alternate]
                    "
                />
              </div>

              {/* ==================================================
                INCOMING ROOM IMAGE
            ================================================== */}

              {incoming && (
                <div
                  className="
                  absolute
                  inset-0
                  opacity-100
                  scale-100
                  animate-[roomEnter_1200ms_cubic-bezier(0.16,1,0.3,1)]
                "
                >
                  <img
                    src={incoming.images[0]}
                    alt={incoming.name}
                    className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    object-center
                  "
                  />
                </div>
              )}

              {/* ==================================================
                SAME ROOM IMAGE TRANSITION
            ================================================== */}

              {incomingImage !== null && (
                <div
                  className="
                  absolute
                  inset-0
                  animate-[imageEnter_750ms_cubic-bezier(0.22,1,0.36,1)]
                "
                >
                  <img
                    src={stay.images[incomingImage]}
                    alt=""
                    className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    object-center
                  "
                  />
                </div>
              )}

              {/* ==================================================
                CINEMATIC DARK GRADIENT
            ================================================== */}

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/70
                via-black/15
                to-transparent
                pointer-events-none
              "
              />

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-r
                from-black/35
                via-transparent
                to-transparent
                pointer-events-none
              "
              />

              {/* ==================================================
                SOFT LIGHT
            ================================================== */}

              <div
                className="
                absolute
                inset-0
                pointer-events-none
                bg-[radial-gradient(circle_at_62%_25%,rgba(255,244,214,0.16),transparent_38%)]
              "
              />

              {/* ==================================================
                ROOM INFORMATION
            ================================================== */}

              <div
                key={`${activeStay}-${activeImage}`}
                className="
                absolute
                left-7
                sm:left-10
                lg:left-14
                bottom-9
                sm:bottom-11
                lg:bottom-14
                max-w-[720px]
                text-white
                animate-[contentEnter_850ms_ease-out]
              "
              >
                <p
                  className="
                  text-[9px]
                  sm:text-[10px]
                  tracking-[0.4em]
                  uppercase
                  text-white/80
                "
                >
                  {stay.eyebrow}
                </p>

                <h3
                  className="
                  mt-2
                  font-serif
                  text-[35px]
                  sm:text-[44px]
                  lg:text-[52px]
                  leading-[0.98]
                  tracking-[-0.035em]
                "
                >
                  {stay.title}
                </h3>

                <p
                  className="
                  mt-4
                  font-manrope
                  max-w-[490px]
                  text-[13px]
                    sm:text-[14px]
                    lg:text-[15px]
                  leading-[1.75]
                  text-white/85
                "
                >
                  {stay.description}
                </p>

                <button
                  type="button"
                  className="
                    group
                    relative
                    mt-6
                    inline-flex
                    h-[46px]
                    items-center
                    gap-4
                    overflow-hidden
                    rounded-full
                    border
                    border-white/65
                    px-[7px]
                    pl-5
                    pr-[7px]
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.25em]
                    text-white
                    transition-all
                    duration-700
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                    hover:border-white
                    hover:bg-white
                    hover:text-[#24382D]
                    hover:tracking-[0.29em]
                  "
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-[32%] -translate-x-[140%] skew-x-[-18deg] bg-white/20 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[390%]"
                  />

                  <span className="relative z-10 whitespace-nowrap">
                    Explore This Room
                  </span>

                  <span className="relative z-10 flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full border border-white/55 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-[#24382D]/30 group-hover:bg-[#24382D] group-hover:text-white group-hover:scale-[1.04]">
                    <svg
                      viewBox="0 0 18 18"
                      fill="none"
                      aria-hidden="true"
                      className="h-[14px] w-[14px] transition-transform duration-700 group-hover:translate-x-0.5"
                    >
                      <path
                        d="M2.5 9H14.5M10 4.5L14.5 9L10 13.5"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                {/* ==================================================
                    ROOM AMENITIES — BELOW EXPLORE THIS ROOM
                    Dynamic for the selected stay
                ================================================== */}

                <div
                  className="
                    mt-5
                    flex
                    max-w-[700px]
                    flex-wrap
                    items-center
                    gap-x-5
                    gap-y-2
                    border-t
                    border-white/20
                    pt-4
                  "
                >
                  {stay.amenities.map((amenity, index) => (
                    <div
                      key={amenity.label}
                      className="
                        flex
                        items-center
                        gap-2
                        text-white/80
                        transition-colors
                        duration-500
                        hover:text-white
                      "
                    >
                      <span className="flex h-[19px] w-[19px] items-center justify-center [&_svg]:h-[16px] [&_svg]:w-[16px]">
                        <AmenityIcon type={amenity.icon} />
                      </span>

                      <span
                        className="
                          whitespace-nowrap
                          font-manrope
                          text-[9px]
                          font-medium
                          tracking-[0.035em]
                        "
                      >
                        {amenity.label}
                      </span>

                      {index < stay.amenities.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="ml-1 h-3 w-px bg-white/20"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* ==================================================
                IMAGE COUNTER
            ================================================== */}

              <div
                className="
                absolute
                right-7
                sm:right-10
                bottom-9
                sm:bottom-11
                flex
                items-center
                gap-3
                text-white/80
              "
              >
                <span
                  className="
                  text-[10px]
                  tracking-[0.3em]
                "
                >
                  {String(activeImage + 1).padStart(2, "0")}
                </span>

                <span
                  className="
                  w-10
                  h-px
                  bg-white/40
                "
                />

                <span
                  className="
                  text-[10px]
                  tracking-[0.3em]
                "
                >
                  {String(stay.images.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* ====================================================
              PREVIOUS BUTTON — EDITORIAL ARROW
          ==================================================== */}

            <button
              type="button"
              onClick={previousStay}
              disabled={isTransitioning}
              aria-label="Previous stay"
              className="
                group
                absolute
                left-0
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                hidden
                lg:flex
                h-[54px]
                w-[54px]
                items-center
                justify-center
                rounded-full
                border
                border-[#C5C5B8]/80
                bg-[#F7F2E8]/96
                text-[#53604F]
                shadow-[0_10px_30px_rgba(44,52,43,0.12)]
                backdrop-blur-sm
                transition-all
                duration-500
                ease-[cubic-bezier(0.16,1,0.3,1)]
                hover:border-[#71833F]/70
                hover:bg-[#FBF8F0]
                hover:shadow-[0_14px_34px_rgba(44,52,43,0.16)]
                disabled:pointer-events-none
                disabled:opacity-40
              "
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-[4px] rounded-full border border-[#D5D4C9]/70 transition-all duration-500 group-hover:border-[#AAB58C]/70 group-hover:scale-[0.94]"
              />

              <svg
                viewBox="0 0 30 18"
                fill="none"
                aria-hidden="true"
                className="relative z-10 h-[17px] w-[28px] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-1"
              >
                <path
                  d="M27 9H5"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <path
                  d="M10 3.5L4.5 9L10 14.5"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span
                aria-hidden="true"
                className="absolute left-[9px] top-1/2 h-[3px] w-[3px] -translate-y-1/2 rounded-full bg-[#71833F] opacity-0 transition-all duration-500 group-hover:left-[7px] group-hover:opacity-80"
              />
            </button>

            {/* ====================================================
              NEXT BUTTON — EDITORIAL ARROW
          ==================================================== */}

            <button
              type="button"
              onClick={nextStay}
              disabled={isTransitioning}
              aria-label="Next stay"
              className="
                group
                absolute
                right-0
                top-1/2
                translate-x-1/2
                -translate-y-1/2
                hidden
                lg:flex
                h-[54px]
                w-[54px]
                items-center
                justify-center
                rounded-full
                border
                border-[#C5C5B8]/80
                bg-[#F7F2E8]/96
                text-[#53604F]
                shadow-[0_10px_30px_rgba(44,52,43,0.12)]
                backdrop-blur-sm
                transition-all
                duration-500
                ease-[cubic-bezier(0.16,1,0.3,1)]
                hover:border-[#71833F]/70
                hover:bg-[#FBF8F0]
                hover:shadow-[0_14px_34px_rgba(44,52,43,0.16)]
                disabled:pointer-events-none
                disabled:opacity-40
              "
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-[4px] rounded-full border border-[#D5D4C9]/70 transition-all duration-500 group-hover:border-[#AAB58C]/70 group-hover:scale-[0.94]"
              />

              <svg
                viewBox="0 0 30 18"
                fill="none"
                aria-hidden="true"
                className="relative z-10 h-[17px] w-[28px] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
              >
                <path
                  d="M3 9H25"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <path
                  d="M20 3.5L25.5 9L20 14.5"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span
                aria-hidden="true"
                className="absolute right-[9px] top-1/2 h-[3px] w-[3px] -translate-y-1/2 rounded-full bg-[#71833F] opacity-0 transition-all duration-500 group-hover:right-[7px] group-hover:opacity-80"
              />
            </button>
          </div>

          {/* ======================================================
            CLOSING QUOTE
        ====================================================== */}

          {/* <div
            className={`
            mt-12
            text-center
            transition-all
            duration-[1500ms]
            delay-500
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
          >
            <span
              className="
              block
              mx-auto
              mb-4
              w-8
              h-px
              bg-[#899475]/50
            "
            />

            <p
              className="
              font-serif
              italic
              text-[18px]
              sm:text-[21px]
              leading-[1.45]
              text-[#53614F]
            "
            >
              “More than a stay,
              <br />a deeper connection.”
            </p>
          </div> */}
        </div>

        {/* ========================================================
    PACIANO LANDSCAPE — ROOM INTO THE MIST
======================================================== */}

        <div
          className="
    relative
    left-1/2
    -translate-x-1/2

    mt-0
    w-screen

    h-[383px]
    sm:h-[330px]
    lg:h-[360px]

    overflow-x-hidden

    bg-[#F4EDE1]
  "
        >
          {/* ------------------------------------------------------
      MIST MOUNTAINS
      Full width and clearly visible
  ------------------------------------------------------ */}

          <img
            src={mistMountains}
            alt=""
            aria-hidden="true"
            className="
      absolute
      left-0
      bottom-0

      w-full
      h-auto

      min-h-[220px]

      object-cover
      object-bottom

      opacity-[0.72]

      mix-blend-multiply

      animate-[mistDrift_32s_ease-in-out_infinite_alternate]

      z-10
    "
          />

          {/* ------------------------------------------------------
      TOP SOFT TRANSITION
  ------------------------------------------------------ */}

          <div
            className="
      absolute
      inset-x-0
      top-0

      h-[90px]

      z-20

      bg-gradient-to-b
      from-[#F4EDE1]
      via-[#F4EDE1]/55
      to-transparent
    "
          />

          {/* ------------------------------------------------------
      BOTTOM MIST
  ------------------------------------------------------ */}

          <div
            className="
      absolute
      inset-x-0
      bottom-0

      h-[75px]

      z-20

      bg-gradient-to-t
      from-[#F4EDE1]
      via-[#F4EDE1]/35
      to-transparent
    "
          />

          {/* ------------------------------------------------------
      LEFT BOTANICAL LEAF
  ------------------------------------------------------ */}

          <img
            src={belowleafCta}
            alt=""
            aria-hidden="true"
            className="
      absolute

      left-[-25px]
      sm:left-[-20px]
      lg:left-[-12px]

      top-[-95px]
      lg:top-[-120px]

      z-30

      h-[330px]
      sm:h-[350px]
      lg:h-[375px]

      w-auto

      opacity-[0.28]

      mix-blend-multiply

      pointer-events-none
    "
          />

          {/* ------------------------------------------------------
      PACIANO SIGNATURE
  ------------------------------------------------------ */}

          <div
            className="
      absolute

      left-1/2
      bottom-[158px]

      z-40

      -translate-x-1/2

      flex
      flex-col
      items-center

      text-center

      animate-[signatureFloat_7s_ease-in-out_infinite]
    "
          >
            <div
              className="
      mb-3
      text-[#71883F]
    "
            >
              <svg width="25" height="25" viewBox="0 0 40 40" fill="none">
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

            <p
              className="
        font-cormorant

        text-[22px]
        
        sm:text-[24px]

        leading-none

        uppercase
        tracking-[0.40em]

        text-[#65715B]
      "
            >
              PACIANO
            </p>

            <p
              className="
        mt-[8px]

        font-manrope

        text-[9px]
        sm:text-[9px]

        leading-none

        uppercase
        tracking-[0.42em]

        text-[#77806F]
      "
            >
              STAY CLOSE TO NATURE
            </p>
          </div>
        </div>

        {/* Close MAIN CONTENT wrapper opened near line 429 */}
      </div>

      {/* ========================================================
          ANIMATIONS
          Kept INSIDE component — no separate CSS file.
      ======================================================== */}

      <style>
        {`

          @keyframes roomEnter {

      0% {
        opacity: 0;
        transform: scale(1.075);
        filter: brightness(0.72) saturate(0.88);
      }

      18% {
        opacity: 0.35;
      }

      55% {
        opacity: 0.82;
      }

      100% {
        opacity: 1;
        transform: scale(1);
        filter: brightness(1) saturate(1);
      }

    }

           @keyframes imageEnter {

      0% {
        opacity: 0;
        transform: scale(1.065);
        filter: brightness(0.82);
      }

      35% {
        opacity: 0.7;
      }

      100% {
        opacity: 1;
        transform: scale(1);
        filter: brightness(1);
      }

    }


         @keyframes contentEnter {

      0% {
        opacity: 0;
        transform: translateY(25px);
        filter: blur(4px);
      }

      45% {
        opacity: 0.5;
        filter: blur(1px);
      }

      100% {
        opacity: 1;
        transform: translateY(0);
        filter: blur(0);
      }

    }
      @keyframes mistReveal {

      0% {
        opacity: 0;
        transform: translateY(25px) scale(1.04);
      }

      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }

    }



          @media (prefers-reduced-motion: reduce) {

      *,
      *::before,
      *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }

    }

        @keyframes mistDrift {
  0% {
    transform: scale(1.04) translate3d(-12px, 0, 0);
  }

  50% {
    transform: scale(1.06) translate3d(0, -3px, 0);
  }

  100% {
    transform: scale(1.04) translate3d(12px, 0, 0);
  }
}


            @keyframes signatureFloat {

            0%,
            100% {
                transform: translateY(0);
            }

            50% {
                transform: translateY(-5px);
            }

            }

            @keyframes luxuryRoomDrift {

            0% {
                transform: scale(1);
            }

            100% {
                transform: scale(1.035);
            }

            }

            @keyframes stayIconFloat {
            0%,
            100% {
                transform: translateY(0) rotate(0deg);
            }

            50% {
                transform: translateY(-3px) rotate(1deg);
            }
            }

            @keyframes exploreBreath {
            0%,
            100% {
                transform: translateY(0);
            }

            50% {
                transform: translateY(-3px);
            }
            }

            @keyframes collectionFrame {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-2px);
  }

}


/* =====================================================
   UNDERLINE — SLOW BREATHING
===================================================== */

@keyframes collectionLine {

  0%,
  100% {
    width: 52px;
    opacity: 0.55;
  }

  50% {
    width: 72px;
    opacity: 0.9;
  }

}


/* =====================================================
   CTA GLINT — VERY SUBTLE
===================================================== */

@keyframes ctaGlint {

  0% {
    transform: translateX(0);
    opacity: 0;
  }

  35% {
    opacity: 0.8;
  }

  100% {
    transform: translateX(26px);
    opacity: 0;
  }

}

        `}
      </style>
    </section>
  );
}
