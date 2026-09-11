import { useEffect, useRef, useState } from "react";

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
import collectionCta from "@/images/paciano-collection-cta.png";
import leafCta from "@/images/leaf-cta.png";

// ============================================================
// TYPES
// ============================================================

type AmenityIconType = "bed" | "balcony" | "view" | "bath" | "wifi";

type Stay = {
  id: string;
  name: string;
  eyebrow: string;
  title: string;
  description: string;

  images: string[];

  amenities: {
    label: string;
    icon: AmenityIconType;
  }[];
};

// ============================================================
// STAYS
// ============================================================

const stays: Stay[] = [
  {
    id: "riverside",
    name: "Riverside Suite",
    eyebrow: "RIVERSIDE SUITE",
    title: "Wake to Tranquility",
    description:
      "Wake to the gentle rhythm of the river, framed by mountains and softened by the quiet of nature.",

    images: [riversideRoom, riversideBalcony, riversideDetail],

    amenities: [
      {
        label: "King Bed",
        icon: "bed",
      },
      {
        label: "Private Balcony",
        icon: "balcony",
      },
      {
        label: "River & Mountain View",
        icon: "view",
      },
      {
        label: "Luxury Bathroom",
        icon: "bath",
      },
      {
        label: "Complimentary Wi-Fi",
        icon: "wifi",
      },
    ],
  },

  {
    id: "garden",
    name: "Garden Residence",
    eyebrow: "GARDEN RESIDENCE",
    title: "Wake Among Greenery",
    description:
      "A peaceful retreat overlooking Paciano's gardens, where quiet mornings unfold beneath open skies and surrounding greenery.",

    images: [gardenRoom, gardenView, gardenBalcony],

    amenities: [
      {
        label: "King Bed",
        icon: "bed",
      },
      {
        label: "Garden Outlook",
        icon: "view",
      },
      {
        label: "Private Sitting Area",
        icon: "balcony",
      },
      {
        label: "Luxury Bathroom",
        icon: "bath",
      },
      {
        label: "Complimentary Wi-Fi",
        icon: "wifi",
      },
    ],
  },

  {
    id: "valley",
    name: "Valley Retreat",
    eyebrow: "VALLEY RETREAT",
    title: "Closer to the Wild",
    description:
      "A quiet escape where mountain views stretch beyond the room and every morning begins a little slower.",
    images: [riversideRoom, riversideDetail, riversideBalcony],
    amenities: [
      {
        label: "King Bed",
        icon: "bed",
      },
      {
        label: "Private Balcony",
        icon: "balcony",
      },
      {
        label: "Valley View",
        icon: "view",
      },
      {
        label: "Luxury Bathroom",
        icon: "bath",
      },
      {
        label: "Complimentary Wi-Fi",
        icon: "wifi",
      },
    ],
  },

  {
    id: "family",
    name: "Family Sanctuary",
    eyebrow: "FAMILY SANCTUARY",
    title: "Space to Be Together",
    description:
      "Thoughtfully arranged for families, with generous space to slow down, reconnect and enjoy the landscape together.",

    images: [familyRoom, familyRoomTwo, familyView],

    amenities: [
      {
        label: "Two Comfortable Beds",
        icon: "bed",
      },
      {
        label: "Spacious Interior",
        icon: "balcony",
      },
      {
        label: "Nature View",
        icon: "view",
      },
      {
        label: "Luxury Bathroom",
        icon: "bath",
      },
      {
        label: "Complimentary Wi-Fi",
        icon: "wifi",
      },
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
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.14,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
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
      id="stays"
      className="
        relative
        overflow-hidden
        bg-[#F4EDE1]
        text-[#203127]
      "
    >
      {/* ========================================================
          TOP CURVED TRANSITION FROM EXPERIENCES
      ======================================================== */}

      <div
        className="
          absolute
          top-[-35px]
          left-1/2
          -translate-x-1/2
          w-[125%]
          h-[100px]
          rounded-[0_0_50%_50%]
          bg-[#F4EDE1]
          z-20
          pointer-events-none
        "
      />

      {/* ========================================================
          CENTER BOTANICAL MARK
      ======================================================== */}

      <div
        className="
          absolute
          top-[58px]
          left-1/2
          -translate-x-1/2
          z-30
          text-[#75825F]
        "
      ></div>

      {/* ========================================================
          MAIN CONTENT
      ======================================================== */}

      <div
        className="
            relative
            z-10
            max-w-[1480px]
            mx-auto
            px-5
            sm:px-8
            lg:px-12
            pt-[50px]
            sm:pt-[58px]
            lg:pt-[64px]
            pb-[65px]
        "
      >
        {/* ======================================================
    STAYS INTRO
====================================================== */}

        <div
          className={`
    relative
    z-20
    flex
    flex-col
    items-center
    justify-center
    text-center
    transition-all
    duration-[1200ms]
    ease-[cubic-bezier(0.16,1,0.3,1)]
    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
  `}
        >
          {/* Botanical mark */}

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
            AMENITIES — ABOVE ROOM IMAGE
        ====================================================== */}

          <div
            className={`
            mb-7
            pb-5
            border-t
            border-[#AEB3A3]/45
            transition-all
            duration-[1200ms]
            delay-300
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          `}
          >
            <div
              className="
              flex
              flex-wrap
              justify-center
              lg:justify-between
              items-center
            "
            >
              {stay.amenities.map((amenity, index) => (
                <div
                  key={amenity.label}
                  className="
                    flex
                    items-center
                    gap-3
                    px-4
                    sm:px-6
                    py-2
                    text-[#657066]
                  "
                >
                  <AmenityIcon type={amenity.icon} />

                  <span
                    className="
                      text-[10px]
                      whitespace-nowrap
                    "
                  >
                    {amenity.label}
                  </span>

                  {index < stay.amenities.length - 1 && (
                    <span
                      className="
                        hidden
                        lg:block
                        ml-4
                        w-px
                        h-5
                        bg-[#B6BAAD]/50
                      "
                    />
                  )}
                </div>
              ))}
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
                max-w-[560px]
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

          <div
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
          </div>
        </div>

        {/* ========================================================
    CINEMATIC MIST / MOUNTAIN TRANSITION
======================================================== */}

        <div
          className="
    relative
    mt-[-10px]
    h-[260px]
    overflow-hidden
    pointer-events-none
  "
        >
          {/* TOP FADE */}

          <div
            className="
      absolute
      inset-x-0
      top-0
      h-[110px]
      z-20
      bg-gradient-to-b
      from-[#F4EDE1]
      via-[#F4EDE1]/80
      to-transparent
    "
          />

          {/* MOUNTAIN IMAGE */}

          <div
            className={`
      absolute
      inset-x-[-5%]
      bottom-[-20px]
      h-[230px]
      transition-all
      duration-[2200ms]
      ease-out
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
    `}
          >
            <img
              src={mistMountains}
              alt=""
              className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        object-center
        opacity-45
        animate-[mistDrift_22s_ease-in-out_infinite_alternate]
      "
            />

            {/* FADE INTO BACKGROUND */}

            <div
              className="
        absolute
        inset-0
        bg-gradient-to-b
        from-transparent
        via-[#F4EDE1]/35
        to-[#F4EDE1]
      "
            />

            {/* SIDE FADE */}

            <div
              className="
        absolute
        inset-0
        bg-gradient-to-r
        from-[#F4EDE1]
        via-transparent
        to-[#F4EDE1]
      "
            />
          </div>

          {/* PACIANO SIGNATURE */}

          <div
            className="
      absolute
      left-1/2
      bottom-10
      -translate-x-1/2
      z-30
      text-center
      animate-[signatureFloat_7s_ease-in-out_infinite]
    "
          >
            <div
              className="
        mx-auto
        mb-3
        text-[#75825F]
      "
            >
              <svg width="27" height="27" viewBox="0 0 24 24" fill="none">
                <path d="M12 21V8" stroke="currentColor" strokeWidth="1" />

                <path
                  d="M12 13C8 12 6 9 6 7C10 7 12 9 12 13Z"
                  stroke="currentColor"
                  strokeWidth="1"
                />

                <path
                  d="M12 10C13 6 16 4 19 4C19 8 16 10 12 10Z"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
            </div>

            <p
              className="
        text-[10px]
        tracking-[0.45em]
        uppercase
        text-[#68705F]
      "
            >
              Paciano
            </p>

            <p
              className="
        mt-1
        text-[8px]
        tracking-[0.35em]
        uppercase
        text-[#8B907F]
      "
            >
              Stay Close to Nature
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

            100% {
                transform: scale(1.08) translate3d(12px, -4px, 0);
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
