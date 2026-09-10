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
    LUXURY ROOM NAVIGATION
====================================================== */}

        <div
          className={`
    relative
    mt-9
    sm:mt-11
    lg:mt-12
    w-full

    transition-all
    duration-[1400ms]
    ease-[cubic-bezier(0.16,1,0.3,1)]

    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
  `}
        >
          <div
            className="
      mx-auto
      flex
      w-full
      max-w-[1180px]
      flex-col
      items-center
      justify-center
      gap-7

      lg:flex-row
      lg:gap-0
    "
          >
            {/* ====================================================
        ROOM COLLECTION
    ==================================================== */}

            <div
              className="
    flex
    w-full
    items-end
    justify-center

    gap-3
    sm:gap-8

    lg:w-auto
    lg:gap-8
  "
            >
              {stays.map((item, index) => {
                const active = index === activeStay;

                return (
                  <button
                    key={item.id}
                    onClick={() => changeStay(index)}
                    disabled={isTransitioning}
                    aria-label={`View ${item.name}`}
                    className="
          group
          relative

          flex
          min-w-0
          flex-1
          flex-col
          items-center

          px-2
          sm:px-4
          lg:min-w-[170px]

          text-center

          disabled:pointer-events-none
        "
                  >
                    {/* =====================================================
            BESPOKE PACIANO ICON
        ===================================================== */}

                    <span
                      className={`
            relative
            mb-4

            flex
            h-[42px]
            w-[54px]
            items-center
            justify-center

            ${
              active
                ? "text-[#667A42]"
                : "text-[#9A9F91] group-hover:text-[#667A42]"
            }

            transition-colors
            duration-[900ms]
            ease-out
          `}
                    >
                      {/* ================= RIVER ================= */}

                      {index === 0 && (
                        <svg
                          viewBox="0 0 54 42"
                          className="h-[38px] w-[50px]"
                          fill="none"
                        >
                          <path
                            d="M5 15
                   C11 9 17 9 23 15
                   C29 21 36 21 49 13"
                            stroke="currentColor"
                            strokeWidth="1"
                            className="
                  animate-[riverWave_5s_ease-in-out_infinite]
                "
                          />

                          <path
                            d="M5 21
                   C12 15 18 15 24 21
                   C30 27 38 27 49 19"
                            stroke="currentColor"
                            strokeWidth=".8"
                            opacity=".65"
                            className="
                  animate-[riverWave_6s_ease-in-out_infinite_reverse]
                "
                          />

                          <path
                            d="M11 28
                   C17 24 22 24 28 28
                   C34 32 39 32 44 29"
                            stroke="currentColor"
                            strokeWidth=".7"
                            opacity=".38"
                            className="
                  animate-[riverWave_7s_ease-in-out_infinite]
                "
                          />

                          <circle
                            cx="8"
                            cy="9"
                            r="1.4"
                            fill="currentColor"
                            opacity=".65"
                            className="
                  animate-[riverDrop_4s_ease-in-out_infinite]
                "
                          />
                        </svg>
                      )}

                      {/* ================= GARDEN ================= */}

                      {index === 1 && (
                        <svg
                          viewBox="0 0 54 42"
                          className="h-[40px] w-[48px]"
                          fill="none"
                        >
                          <path
                            d="M27 36
                   C27 27 27 18 31 7"
                            stroke="currentColor"
                            strokeWidth="1"
                            className="
                  origin-bottom
                  animate-[stemSway_6s_ease-in-out_infinite]
                "
                          />

                          <path
                            d="
                  M28 23
                  C20 22 15 17 15 11
                  C22 11 28 15 28 23Z
                "
                            stroke="currentColor"
                            strokeWidth="1"
                            className="
                  origin-bottom-right
                  animate-[leafBreath_5s_ease-in-out_infinite]
                "
                          />

                          <path
                            d="
                  M30 16
                  C31 10 36 6 42 7
                  C40 13 36 17 30 16Z
                "
                            stroke="currentColor"
                            strokeWidth="1"
                            opacity=".75"
                            className="
                  origin-bottom-left
                  animate-[leafBreath_6s_ease-in-out_infinite_reverse]
                "
                          />

                          <path
                            d="M18 31C23 28 31 28 37 31"
                            stroke="currentColor"
                            strokeWidth=".7"
                            opacity=".3"
                          />
                        </svg>
                      )}

                      {/* ================= VALLEY ================= */}

                      {index === 2 && (
                        <svg
                          viewBox="0 0 54 42"
                          className="h-[37px] w-[54px]"
                          fill="none"
                        >
                          <path
                            d="
                  M5 33
                  L17 19
                  L23 26
                  L34 10
                  L49 33
                "
                            stroke="currentColor"
                            strokeWidth="1"
                            className="
                  animate-[mountainReveal_7s_ease-in-out_infinite]
                "
                          />

                          <path
                            d="M25 33L34 22L42 33"
                            stroke="currentColor"
                            strokeWidth=".7"
                            opacity=".38"
                          />

                          <path
                            d="M4 34H50"
                            stroke="currentColor"
                            strokeWidth=".8"
                            opacity=".5"
                          />

                          <path
                            d="
                  M31 13
                  L34 10
                  L37 14
                "
                            stroke="currentColor"
                            strokeWidth=".7"
                            opacity=".5"
                            className="
                  animate-[mountainPeak_5s_ease-in-out_infinite]
                "
                          />
                        </svg>
                      )}

                      {/* ================= FAMILY ================= */}

                      {index === 3 && (
                        <svg
                          viewBox="0 0 54 42"
                          className="h-[38px] w-[54px]"
                          fill="none"
                        >
                          <circle
                            cx="19"
                            cy="12"
                            r="3"
                            stroke="currentColor"
                            strokeWidth="1"
                            className="
                  animate-[personBreath_5s_ease-in-out_infinite]
                "
                          />

                          <circle
                            cx="35"
                            cy="12"
                            r="3"
                            stroke="currentColor"
                            strokeWidth="1"
                            className="
                  animate-[personBreath_5s_ease-in-out_infinite_reverse]
                "
                          />

                          <path
                            d="
                  M10 32
                  C10 24 14 20 19 20
                  C24 20 27 24 27 32
                "
                            stroke="currentColor"
                            strokeWidth="1"
                          />

                          <path
                            d="
                  M27 32
                  C27 24 30 20 35 20
                  C40 20 44 24 44 32
                "
                            stroke="currentColor"
                            strokeWidth="1"
                          />

                          <path
                            d="M6 34H48"
                            stroke="currentColor"
                            strokeWidth=".6"
                            opacity=".25"
                          />
                        </svg>
                      )}
                    </span>

                    {/* =====================================================
            ROOM NAME
        ===================================================== */}

                    <span
                      className={`
            relative

            font-cormorant
            text-[19px]
            sm:text-[20px]
            lg:text-[21px]

            leading-none
            tracking-[0.005em]
            whitespace-nowrap

            transition-all
            duration-[1000ms]
            ease-[cubic-bezier(0.16,1,0.3,1)]

            ${
              active
                ? "text-[#263B2C]"
                : "text-[#747B70] group-hover:text-[#40533D]"
            }
          `}
                    >
                      {item.name}
                    </span>

                    {/* =====================================================
            ACTIVE EDITORIAL MARK
        ===================================================== */}

                    <span
                      className={`
            absolute
            -bottom-[13px]

            left-1/2
            -translate-x-1/2

            h-px

            bg-[#71883F]

            transition-all
            duration-[1000ms]
            ease-[cubic-bezier(0.16,1,0.3,1)]

            ${
              active
                ? "w-[82px] opacity-100"
                : "w-0 opacity-0 group-hover:w-[38px] group-hover:opacity-50"
            }
          `}
                    />

                    {/* tiny active point */}

                    <span
                      className={`
            absolute
            -bottom-[15px]
            left-1/2
            -translate-x-1/2

            h-[3px]
            w-[3px]

            bg-[#71883F]

            ${
              active
                ? "opacity-100 animate-[activePoint_4s_ease-in-out_infinite]"
                : "opacity-0"
            }
          `}
                    />
                  </button>
                );
              })}
            </div>
            {/* ====================================================
        VERTICAL DIVIDER
    ==================================================== */}

            <span
              className="
        hidden
        h-[58px]
        w-px
        bg-[#AEB3A3]/50

        lg:mx-7
        lg:block
      "
            />

            {/* ====================================================
        EXPLORE ALL STAYS
    ==================================================== */}

            {/* <button
              type="button"
              className="
        group
        relative

        flex
        items-center
        gap-5

        py-2
        pl-3
        pr-1

        text-left

        transition-all
        duration-[900ms]
        ease-[cubic-bezier(0.16,1,0.3,1)]

        hover:translate-x-1
      "
            >
         

              <span className="flex flex-col">
                <span
                  className="
            font-manrope
            text-[9px]
            font-medium
            uppercase
            tracking-[0.42em]
            text-[#7B8478]

            transition-all
            duration-500

            group-hover:text-[#718247]
          "
                >
                  Explore the
                </span>

                <span
                  className="
            mt-[5px]

            font-cormorant
            text-[25px]
            leading-none
            tracking-[-0.01em]
            text-[#26382D]

            transition-all
            duration-700

            group-hover:tracking-[0.01em]
          "
                >
                  Collection
                </span>

                

                <span
                  className="
            mt-[9px]
            h-px
            w-[48px]

            origin-left
            bg-[#718247]/50

            transition-all
            duration-[900ms]
            ease-[cubic-bezier(0.16,1,0.3,1)]

            group-hover:w-[82px]
            group-hover:bg-[#718247]
          "
                />
              </span>

            
              <span
                className="
          relative
          flex
          h-[62px]
          w-[62px]
          shrink-0
          items-center
          justify-center

          rounded-full

          border
          border-[#687957]/55

          text-[#304237]

          transition-all
          duration-[900ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]

          group-hover:scale-[1.08]
          group-hover:border-[#526A3D]
          group-hover:bg-[#26382D]
          group-hover:text-[#F4EDE1]

          animate-[exploreBreath_5s_ease-in-out_infinite]
        "
              >
               

                <span
                  className="
            absolute
            inset-[-6px]

            rounded-full

            border
            border-dashed
            border-[#718247]/25

            transition-transform
            duration-[1400ms]
            ease-linear

            group-hover:rotate-180
          "
                />

             

                <span
                  className="
            absolute
            inset-[7px]

            rounded-full

            border
            border-[#718247]/25

            transition-all
            duration-700

            group-hover:inset-[10px]
            group-hover:border-[#A6B77D]/60
          "
                />

                <span
                  className="
            relative
            z-10

            text-[21px]
            leading-none

            transition-transform
            duration-700
            ease-[cubic-bezier(0.16,1,0.3,1)]

            group-hover:translate-x-1
          "
                >
                  →
                </span>
              </span>
            </button> */}

            {/* ==================================================
    EXPLORE THE COLLECTION
    PACIANO EDITORIAL CTA
================================================== */}

            {/* =====================================================
    EXPLORE COLLECTION — EDITORIAL LINK
===================================================== */}

            <button
              type="button"
              className="
    group

    relative

    flex
    min-w-[215px]

    items-center

    py-3
    pl-1
    pr-0

    text-left
  "
            >
              {/* TEXT */}

              <span
                className="
      relative
      z-10

      flex
      flex-col
    "
              >
                <span
                  className="
        font-manrope
        text-[8px]
        font-medium
        uppercase
        tracking-[0.38em]

        text-[#6F7D63]

        transition-colors
        duration-700

        group-hover:text-[#71883F]
      "
                >
                  Explore the
                </span>

                <span
                  className="
        mt-[3px]

        font-cormorant
        text-[29px]
        leading-none
        tracking-[-0.015em]

        text-[#263B2C]

        transition-all
        duration-[900ms]
        ease-[cubic-bezier(0.16,1,0.3,1)]

        group-hover:translate-x-[3px]
      "
                >
                  Collection
                </span>
              </span>

              {/* =====================================================
      LINE + ARROW
  ===================================================== */}

              <span
                className="
      relative

      ml-7

      flex
      flex-1
      items-center

      self-end
      mb-[4px]
    "
              >
                {/* base line */}

                <span
                  className="
        h-px
        w-full

        bg-[#71883F]/35

        transition-all
        duration-[900ms]
        ease-[cubic-bezier(0.16,1,0.3,1)]

        group-hover:bg-[#71883F]
      "
                />

                {/* moving green line */}

                <span
                  className="
        absolute
        left-0

        h-[1px]
        w-[34px]

        bg-[#71883F]

        animate-[collectionLineTravel_5s_ease-in-out_infinite]
      "
                />

                {/* arrow */}

                <span
                  className="
        relative

        ml-3

        flex
        h-[18px]
        w-[18px]

        items-center
        justify-center

        font-manrope
        text-[16px]
        font-light

        text-[#334A38]

        transition-all
        duration-[700ms]

        group-hover:translate-x-[4px]
        group-hover:text-[#71883F]
      "
                >
                  →
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
                className="
                  group
                  mt-6
                  inline-flex
                  items-center
                  gap-4
                  rounded-full
                  border
                  border-white/70
                  px-5
                  py-2.5
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-white
                  transition-all
                  duration-500
                  hover:bg-white
                  hover:text-[#24382D]
                "
              >
                Explore This Room
                <span
                  className="
                    flex
                    items-center
                    justify-center
                    w-6
                    h-6
                    rounded-full
                    border
                    border-white/50
                    transition-all
                    duration-500
                    group-hover:border-[#24382D]/40
                  "
                >
                  →
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
              PREVIOUS BUTTON
          ==================================================== */}

          <button
            onClick={previousStay}
            disabled={isTransitioning}
            aria-label="Previous stay"
            className="
              absolute
              left-0
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              hidden
              lg:flex
              items-center
              justify-center
              w-12
              h-12
              rounded-full
              bg-[#F4EDE1]
              border
              border-[#9EA58F]/50
              text-[#34443A]
              shadow-[0_8px_25px_rgba(30,40,32,0.10)]
              transition-all
              duration-500
              hover:bg-[#24382D]
              hover:text-white
              hover:scale-110
              disabled:opacity-40
            "
          >
            ←
          </button>

          {/* ====================================================
              NEXT BUTTON
          ==================================================== */}

          <button
            onClick={nextStay}
            disabled={isTransitioning}
            aria-label="Next stay"
            className="
              absolute
              right-0
              top-1/2
              translate-x-1/2
              -translate-y-1/2
              hidden
              lg:flex
              items-center
              justify-center
              w-12
              h-12
              rounded-full
              bg-[#F4EDE1]
              border
              border-[#9EA58F]/50
              text-[#34443A]
              shadow-[0_8px_25px_rgba(30,40,32,0.10)]
              transition-all
              duration-500
              hover:bg-[#24382D]
              hover:text-white
              hover:scale-110
              disabled:opacity-40
            "
          >
            →
          </button>
        </div>

        {/* ======================================================
            AMENITIES
        ====================================================== */}

        <div
          className={`
            mt-7
            pt-5
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
   ARROW — CONTINUOUS LUXURY GLIDE
===================================================== */

@keyframes arrowGlide {

  0% {
    transform: translateX(-4px);
    opacity: 0.55;
  }

  35% {
    transform: translateX(0);
    opacity: 1;
  }

  65% {
    transform: translateX(4px);
    opacity: 1;
  }

  100% {
    transform: translateX(-4px);
    opacity: 0.55;
  }

}


/* =====================================================
   ARROW TRAIL
===================================================== */

@keyframes arrowTrail {

  0% {
    transform: translateX(-15px);
    opacity: 0;
  }

  30% {
    transform: translateX(0);
    opacity: 0.65;
  }

  70% {
    transform: translateX(12px);
    opacity: 0;
  }

  100% {
    transform: translateX(12px);
    opacity: 0;
  }

}

        `}
      </style>
    </section>
  );
}
