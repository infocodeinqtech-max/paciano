import { useEffect, useRef, useState } from "react";
import storyImage from "@/images/story.png";
import aboutNature from "@/images/about-nature-first.jpg";
import aboutHospitality from "@/images/about-genuine-hospitality.jpg";
import aboutConscious from "@/images/about-conscious-living.jpg";

import riverside from "@/images/riverside-bliss.jpg";
import teaGarden from "@/images/tea-garden-walks.jpg";
import culinary from "@/images/culinary-delights.jpg";
import wellness from "@/images/wellness-spa.jpg";
import sustainable from "@/images/sustainable-stay.jpg";

/*
|--------------------------------------------------------------------------
| PACIANO — CINEMATIC ABOUT SECTION
|--------------------------------------------------------------------------
|
| Design direction:
|
| 1. Hero continues naturally into About.
| 2. Hero foliage visually continues into the cream section.
| 3. One restrained organic contour — NOT a repeated wave.
| 4. About Paciano remains a tiny editorial eyebrow.
| 5. Main typography is elegant but controlled.
| 6. Images are editorial compositions, NOT cards/carousel.
| 7. Leaves + leaf shadows are part of the environment.
| 8. Subtle entrance / parallax / breathing animation.
|
|--------------------------------------------------------------------------
*/

// const experiences = [
//   {
//     title: "Riverside Bliss",
//     description: "Unwind by the serene river and feel the calm.",
//     image: riverside,
//   },
//   {
//     title: "Tea Garden Walks",
//     description: "Stroll through lush tea gardens and breathe in freshness.",
//     image: teaGarden,
//   },
//   {
//     title: "Culinary Delights",
//     description: "Savor flavors crafted from the finest local ingredients.",
//     image: culinary,
//   },
//   {
//     title: "Wellness & Spa",
//     description: "Rejuvenate your mind, body and soul.",
//     image: wellness,
//   },
//   {
//     title: "Sustainable Stay",
//     description: "Committed to nature and a better tomorrow.",
//     image: sustainable,
//   },
// ];

// function ExperienceIcon({ type }: { type: number }) {
//   const common = `
//     h-[52px]
//     w-[52px]
//     text-[#3F542F]
//   `;

//   // Riverside Bliss
//   if (type === 0) {
//     return (
//       <svg viewBox="0 0 60 60" className={common} fill="none">
//         <circle
//           cx="30"
//           cy="30"
//           r="21"
//           stroke="currentColor"
//           strokeWidth="1.5"
//         />

//         <path
//           d="M12 28C18 22 23 35 30 28C37 21 42 35 48 28"
//           stroke="currentColor"
//           strokeWidth="1.5"
//           strokeLinecap="round"
//         />

//         <path
//           d="M15 36C22 32 29 39 36 35C40 33 43 34 46 36"
//           stroke="currentColor"
//           strokeWidth="1.2"
//           strokeLinecap="round"
//         />
//       </svg>
//     );
//   }

//   // Tea Garden Walks
//   if (type === 1) {
//     return (
//       <svg viewBox="0 0 60 60" className={common} fill="none">
//         <path
//           d="M30 49C30 39 30 29 36 15"
//           stroke="currentColor"
//           strokeWidth="1.5"
//           strokeLinecap="round"
//         />

//         <path
//           d="
//             M30 35
//             C21 33 16 27 17 19
//             C25 20 30 26 30 34
//           "
//           stroke="currentColor"
//           strokeWidth="1.5"
//         />

//         <path
//           d="
//             M34 28
//             C35 20 41 15 48 17
//             C46 24 41 29 34 29
//           "
//           stroke="currentColor"
//           strokeWidth="1.5"
//         />

//         <path
//           d="
//             M30 42
//             C24 40 20 37 18 33
//           "
//           stroke="currentColor"
//           strokeWidth="1.2"
//         />
//       </svg>
//     );
//   }

//   // Culinary Delights
//   if (type === 2) {
//     return (
//       <svg viewBox="0 0 60 60" className={common} fill="none">
//         <path
//           d="M13 31H47"
//           stroke="currentColor"
//           strokeWidth="1.5"
//           strokeLinecap="round"
//         />

//         <path
//           d="
//             M17 31
//             C17 22 23 17 30 17
//             C37 17 43 22 43 31
//           "
//           stroke="currentColor"
//           strokeWidth="1.5"
//         />

//         <path
//           d="M15 36H45"
//           stroke="currentColor"
//           strokeWidth="1.5"
//           strokeLinecap="round"
//         />

//         <path
//           d="M23 42H37"
//           stroke="currentColor"
//           strokeWidth="1.5"
//           strokeLinecap="round"
//         />

//         <circle cx="30" cy="11" r="2" stroke="currentColor" strokeWidth="1.3" />
//       </svg>
//     );
//   }

//   // Wellness & Spa
//   if (type === 3) {
//     return (
//       <svg viewBox="0 0 60 60" className={common} fill="none">
//         <path
//           d="
//             M30 49
//             C29 40 21 35 21 26
//             C21 18 25 13 30 10
//             C35 13 39 18 39 26
//             C39 35 31 40 30 49Z
//           "
//           stroke="currentColor"
//           strokeWidth="1.5"
//         />

//         <path
//           d="M30 18V43"
//           stroke="currentColor"
//           strokeWidth="1"
//           strokeLinecap="round"
//         />

//         <path
//           d="M30 28C25 24 23 21 22 18"
//           stroke="currentColor"
//           strokeWidth="1"
//         />

//         <path
//           d="M30 31C35 27 37 23 38 20"
//           stroke="currentColor"
//           strokeWidth="1"
//         />
//       </svg>
//     );
//   }

//   // Sustainable Stay
//   return (
//     <svg viewBox="0 0 60 60" className={common} fill="none">
//       <path
//         d="M29 49C29 39 30 28 36 15"
//         stroke="currentColor"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//       />

//       <path
//         d="
//           M30 35
//           C21 33 16 27 17 19
//           C25 20 30 26 30 34
//         "
//         stroke="currentColor"
//         strokeWidth="1.5"
//       />

//       <path
//         d="
//           M34 29
//           C36 20 42 16 49 18
//           C47 25 41 29 34 30
//         "
//         stroke="currentColor"
//         strokeWidth="1.5"
//       />

//       <circle cx="20" cy="21" r="1.5" fill="currentColor" />

//       <circle cx="15" cy="25" r="1" fill="currentColor" />
//     </svg>
//   );
// }
const experiences = [
  {
    title: "Riverside Bliss",
    description: "Unwind by the serene river and feel the calm.",
    image: riverside,
  },
  {
    title: "Tea Garden Walks",
    description: "Stroll through lush tea gardens and breathe in freshness.",
    image: teaGarden,
  },
  {
    title: "Culinary Delights",
    description: "Savor flavors crafted from the finest local ingredients.",
    image: culinary,
  },
  {
    title: "Wellness & Spa",
    description: "Rejuvenate your mind, body and soul.",
    image: wellness,
  },
  {
    title: "Sustainable Stay",
    description: "Committed to nature and a better tomorrow.",
    image: sustainable,
  },
];

function ExperienceIcon({ type }: { type: number }) {
  const common =
    "h-[54px] w-[54px] text-[#5F7138] transition-all duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)]";

  /* ============================================================
     01 — RIVERSIDE
  ============================================================ */
  if (type === 0) {
    return (
      <svg viewBox="0 0 64 64" className={common} fill="none">
        {/* sun */}
        <circle
          cx="32"
          cy="16"
          r="4"
          stroke="currentColor"
          strokeWidth="1.25"
        />

        {/* horizon */}
        <path
          d="M13 28C20 25 25 25 32 28C39 31 45 31 51 28"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />

        {/* river */}
        <path
          d="M10 36C17 32 23 32 30 36C37 40 43 40 54 35"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />

        <path
          d="M13 44C20 41 26 41 33 44C40 47 46 47 51 44"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />

        {/* tiny shore */}
        <path
          d="M18 51C25 49 38 49 46 51"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  /* ============================================================
     02 — TEA GARDEN
  ============================================================ */
  if (type === 1) {
    return (
      <svg viewBox="0 0 64 64" className={common} fill="none">
        {/* elegant central stem */}
        <path
          d="M32 53C31 42 32 31 38 13"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />

        {/* left leaf */}
        <path
          d="
            M32 38
            C23 36 17 30 17 22
            C25 23 31 29 32 37
          "
          stroke="currentColor"
          strokeWidth="1.25"
        />

        {/* right leaf */}
        <path
          d="
            M35 29
            C36 21 42 16 49 17
            C47 24 42 29 35 30
          "
          stroke="currentColor"
          strokeWidth="1.25"
        />

        {/* small leaf */}
        <path
          d="
            M31 46
            C25 44 21 40 20 35
            C26 36 30 40 32 45
          "
          stroke="currentColor"
          strokeWidth="1"
        />

        {/* tiny bud */}
        <circle cx="40" cy="12" r="1.7" fill="currentColor" />
      </svg>
    );
  }

  /* ============================================================
     03 — CULINARY
  ============================================================ */
  if (type === 2) {
    return (
      <svg viewBox="0 0 64 64" className={common} fill="none">
        {/* plate */}
        <ellipse
          cx="32"
          cy="38"
          rx="20"
          ry="7"
          stroke="currentColor"
          strokeWidth="1.2"
        />

        <ellipse
          cx="32"
          cy="37"
          rx="14"
          ry="4"
          stroke="currentColor"
          strokeWidth="0.9"
        />

        {/* food / botanical garnish */}
        <path
          d="M26 35C27 29 31 26 36 24"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
        />

        <path
          d="
            M29 30
            C25 29 23 26 24 23
            C28 24 30 26 30 30
          "
          stroke="currentColor"
          strokeWidth="1"
        />

        <path
          d="
            M34 27
            C36 23 40 21 43 22
            C41 26 38 28 34 28
          "
          stroke="currentColor"
          strokeWidth="1"
        />

        {/* plate base */}
        <path
          d="M18 48C26 51 39 51 47 48"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  /* ============================================================
     04 — WELLNESS
  ============================================================ */
  if (type === 3) {
    return (
      <svg viewBox="0 0 64 64" className={common} fill="none">
        {/* water / breathing */}
        <path
          d="
            M15 25
            C21 19 27 19 32 25
            C37 31 43 31 49 25
          "
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
        />

        <path
          d="
            M15 34
            C21 28 27 28 32 34
            C37 40 43 40 49 34
          "
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
        />

        {/* lotus */}
        <path
          d="
            M32 48
            C27 43 25 38 28 34
            C31 37 32 41 32 45
          "
          stroke="currentColor"
          strokeWidth="1.1"
        />

        <path
          d="
            M32 48
            C37 43 39 38 36 34
            C33 37 32 41 32 45
          "
          stroke="currentColor"
          strokeWidth="1.1"
        />

        <path
          d="M23 48H41"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  /* ============================================================
     05 — SUSTAINABLE STAY
  ============================================================ */

  return (
    <svg viewBox="0 0 64 64" className={common} fill="none">
      {/* earth / home */}
      <path
        d="
          M16 34
          C19 24 26 18 36 17
          C44 16 50 21 52 28
          C46 27 41 29 37 34
          C31 41 24 43 17 41
        "
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />

      {/* leaf */}
      <path
        d="M31 49C31 40 34 31 42 24"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />

      <path
        d="
          M33 38
          C27 36 24 32 24 27
          C30 28 34 32 34 37
        "
        stroke="currentColor"
        strokeWidth="1"
      />

      <path
        d="
          M37 31
          C39 26 43 23 48 24
          C46 29 42 32 37 33
        "
        stroke="currentColor"
        strokeWidth="1"
      />

      {/* tiny seed */}
      <circle cx="22" cy="19" r="1.5" fill="currentColor" />
    </svg>
  );
}
/* ==========================================================================
   BOTANICAL LEAF
   ========================================================================== */

function BotanicalLeaf({
  className = "",
  rotate = 0,
}: {
  className?: string;
  rotate?: number;
}) {
  return (
    <svg
      viewBox="0 0 120 220"
      className={`pointer-events-none absolute ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
      fill="none"
      aria-hidden="true"
    >
      {/* stem */}

      <path
        d="M60 220 C58 170 60 120 68 65 C71 43 79 22 91 5"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.55"
      />

      {/* leaves */}

      <path
        d="
          M65 72
          C37 70 17 53 15 29
          C38 30 60 44 67 66
          C68 69 68 71 65 72Z
        "
        fill="currentColor"
        opacity="0.20"
      />

      <path
        d="
          M67 106
          C90 100 106 85 110 64
          C88 65 70 78 65 99
          C64 102 64 104 67 106Z
        "
        fill="currentColor"
        opacity="0.17"
      />

      <path
        d="
          M60 142
          C34 136 18 120 17 99
          C39 102 56 114 63 134
          C64 137 64 140 60 142Z
        "
        fill="currentColor"
        opacity="0.16"
      />

      <path
        d="
          M59 169
          C81 163 95 150 100 132
          C80 134 65 145 59 161
          C58 164 57 167 59 169Z
        "
        fill="currentColor"
        opacity="0.14"
      />

      {/* leaf veins */}

      <path
        d="M65 69C46 55 31 43 18 31"
        stroke="currentColor"
        strokeWidth="0.65"
        opacity="0.4"
      />

      <path
        d="M68 103C82 91 96 77 108 66"
        stroke="currentColor"
        strokeWidth="0.65"
        opacity="0.35"
      />
    </svg>
  );
}

/* ==========================================================================
   LARGE SHADOW OF LEAVES
   ========================================================================== */

function LeafShadow({
  className = "",
  rotate = 0,
}: {
  className?: string;
  rotate?: number;
}) {
  return (
    <div
      className={`pointer-events-none absolute ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
      }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 420 420" className="h-full w-full" fill="none">
        <g fill="#66714f" opacity="0.055">
          <path d="M42 300C80 178 178 65 342 25C310 175 195 286 42 300Z" />

          <path d="M115 365C156 244 258 145 390 112C356 246 259 342 115 365Z" />

          <path d="M0 195C35 108 108 52 203 35C174 125 102 183 0 195Z" />
        </g>

        <g stroke="#78805e" strokeWidth="1" opacity="0.09">
          <path d="M45 298C122 236 205 140 337 28" />

          <path d="M116 363C184 296 264 202 388 114" />

          <path d="M3 193C55 147 117 90 201 37" />
        </g>
      </svg>
    </div>
  );
}

/* ==========================================================================
   HERO / ABOUT LIGHT CONTOUR
   ========================================================================== */

// function HeroAboutContour() {
//   return (
//     <div
//       className="
//         pointer-events-none
//         absolute
//         left-[-3%]
//         top-[-115px]
//         z-[40]
//         h-[190px]
//         w-[106%]
//       "
//       aria-hidden="true"
//     >
//       {/* atmospheric glow */}

//       <div
//         className="
//           absolute
//           bottom-[10px]
//           left-1/2
//           h-[100px]
//           w-[100%]
//           -translate-x-1/2
//           rounded-[50%]
//           bg-[#eee9dc]/60
//           blur-[28px]
//         "
//       />

//       {/* actual contour */}

//       <svg
//         viewBox="0 0 1600 220"
//         preserveAspectRatio="none"
//         className="
//           absolute
//           bottom-0
//           left-0
//           h-[180px]
//           w-full
//         "
//       >
//         <path
//           d="
//             M -20 132

//             C 110 111
//               205 109
//               315 127

//             C 430 146
//               520 162
//               625 151

//             C 750 138
//               823 102
//               945 103

//             C 1065 104
//               1150 129
//               1265 137

//             C 1370 145
//               1475 125
//               1620 99

//             L 1620 220
//             L -20 220
//             Z
//           "
//           fill="#eee9dc"
//         />
//       </svg>

//       {/* extremely subtle edge */}

//       <svg
//         viewBox="0 0 1600 220"
//         preserveAspectRatio="none"
//         className="
//           absolute
//           bottom-[38px]
//           left-0
//           h-[140px]
//           w-full
//           opacity-30
//           blur-[1.5px]
//         "
//       >
//         <path
//           d="
//             M -20 132

//             C 110 111
//               205 109
//               315 127

//             C 430 146
//               520 162
//               625 151

//             C 750 138
//               823 102
//               945 103

//             C 1065 104
//               1150 129
//               1265 137

//             C 1370 145
//               1475 125
//               1620 99
//           "
//           fill="none"
//           stroke="#d4cdb9"
//           strokeWidth="1.2"
//         />
//       </svg>
//     </div>
//   );
// }

/* ==========================================================================
   IMAGE — EDITORIAL, NOT CARD
   ========================================================================== */

function EditorialImage({
  src,
  alt = "",
  className = "",
  position = "center",
  delay = "0s",
}: {
  src: string;
  alt?: string;
  className?: string;
  position?: string;
  delay?: string;
}) {
  return (
    <div
      className={`
        paciano-editorial-image
        group
        relative
        overflow-hidden
        ${className}
      `}
      style={{
        animationDelay: delay,
      }}
    >
      <img
        src={src}
        alt={alt}
        className="
          h-full
          w-full
          object-cover
          transition-transform
          duration-[3000ms]
          ease-[cubic-bezier(.22,1,.36,1)]
          group-hover:scale-[1.045]
        "
        style={{
          objectPosition: position,
        }}
      />

      {/* warm cinematic grading */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-[#172319]/10
          via-transparent
          to-[#fff8e8]/[0.08]
        "
      />

      {/* sunlight atmosphere */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(
            ellipse_at_30%_12%,
            rgba(255,248,225,0.18),
            transparent_55%
          )]
        "
      />
    </div>
  );
}

/* ==========================================================================
   ORGANIC BOTANICAL SPRIG
   ========================================================================== */

function ImageLeafSprig({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 180 300"
      className={`
        pointer-events-none
        absolute
        ${className}
      `}
      style={{
        transform: flip ? "scaleX(-1)" : undefined,
      }}
      fill="none"
      aria-hidden="true"
    >
      {/* main stem */}

      <path
        d="
          M18 292
          C40 240 58 190 72 142
          C86 95 108 48 153 8
        "
        stroke="#69794a"
        strokeWidth="1.25"
        opacity="0.72"
      />

      {/* left leaf */}

      <path
        d="
          M61 177
          C36 174 17 159 10 137
          C35 136 58 148 67 169
          C68 173 67 176 61 177Z
        "
        fill="#899665"
        opacity="0.48"
      />

      {/* right leaf */}

      <path
        d="
          M73 139
          C96 131 113 113 117 91
          C94 94 77 108 70 128
          C69 133 69 137 73 139Z
        "
        fill="#758552"
        opacity="0.42"
      />

      {/* left leaf */}

      <path
        d="
          M43 221
          C22 217 8 203 4 185
          C24 186 43 197 50 214
          C51 218 49 220 43 221Z
        "
        fill="#a0aa83"
        opacity="0.36"
      />

      {/* upper right leaf */}

      <path
        d="
          M102 94
          C124 86 141 68 146 48
          C123 52 106 65 98 84
          C97 88 98 92 102 94Z
        "
        fill="#6e804c"
        opacity="0.40"
      />

      {/* tiny top leaf */}

      <path
        d="
          M126 52
          C143 46 154 34 157 20
          C141 23 130 32 125 44
          C124 47 124 50 126 52Z
        "
        fill="#899665"
        opacity="0.34"
      />

      {/* veins */}

      <path
        d="M63 173C42 160 27 148 13 139"
        stroke="#69794a"
        strokeWidth="0.65"
        opacity="0.5"
      />

      <path
        d="M73 136C90 122 104 107 115 93"
        stroke="#69794a"
        strokeWidth="0.65"
        opacity="0.45"
      />

      <path
        d="M43 218C27 207 16 196 6 187"
        stroke="#69794a"
        strokeWidth="0.6"
        opacity="0.38"
      />

      <path
        d="M102 91C118 78 133 62 145 49"
        stroke="#69794a"
        strokeWidth="0.6"
        opacity="0.4"
      />
    </svg>
  );
}

/* ==========================================================================
   PACIANO ORGANIC IMAGE
   ========================================================================== */

function OrganicImage({
  variant = "center",
  position = "center",
  className = "",
  delay = "0s",
}: {
  variant?: "left" | "center" | "right";
  position?: string;
  className?: string;
  delay?: string;
}) {
  const paths = {
    left: `
      M78 4
      C42 10 18 34 14 70
      C9 112 21 154 18 202
      C15 252 30 304 72 332
      C108 356 159 350 184 326
      C205 306 198 275 201 238
      C204 194 216 147 204 102
      C194 65 166 23 132 9
      C115 2 96 1 78 4
      Z
    `,

    center: `
      M103 4
      C62 8 35 31 31 70
      C27 106 39 128 34 164
      C28 210 34 274 51 319
      C64 352 94 370 130 367
      C170 364 198 340 205 305
      C214 260 201 224 208 184
      C214 147 230 114 216 75
      C202 34 164 1 103 4
      Z
    `,

    right: `
      M70 18
      C35 25 13 48 12 84
      C11 119 30 141 27 176
      C23 217 36 267 65 303
      C92 337 140 345 175 324
      C207 305 213 273 206 238
      C198 200 213 170 220 137
      C227 104 217 71 194 48
      C164 18 119 9 70 18
      Z
    `,
  };

  return (
    <div
      className={`
        paciano-organic-image
        group
        absolute
        ${className}
      `}
      style={
        {
          "--organic-delay": delay,
        } as React.CSSProperties
      }
    >
      <svg
        viewBox="0 0 235 375"
        preserveAspectRatio="none"
        className="h-full w-full overflow-visible"
      >
        <defs>
          {/* organic clipping shape */}

          <clipPath id={`paciano-organic-${variant}`}>
            <path d={paths[variant]} />
          </clipPath>

          {/* soft image highlight */}

          <radialGradient
            id={`paciano-highlight-${variant}`}
            cx="30%"
            cy="15%"
            r="80%"
          >
            <stop offset="0%" stopColor="#fff8e7" stopOpacity="0.20" />

            <stop offset="55%" stopColor="#fff8e7" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* image */}

        <g
          clipPath={`url(#paciano-organic-${variant})`}
          className="transition-transform duration-[2200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.045]"
          style={{
            transformOrigin: "center",
          }}
        >
          <image
            href={storyImage}
            x="0"
            y="0"
            width="235"
            height="375"
            preserveAspectRatio={`xMidYMid slice`}
          />

          {/* cinematic grading */}

          <rect
            x="0"
            y="0"
            width="235"
            height="375"
            fill="url(#paciano-highlight-${variant})"
          />

          <rect
            x="0"
            y="0"
            width="235"
            height="375"
            fill="#172319"
            opacity="0.035"
          />
        </g>
      </svg>

      {/* extremely subtle botanical edge */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[45%]
          opacity-0
          transition-opacity
          duration-1000
          group-hover:opacity-100
          shadow-[inset_0_0_35px_rgba(40,50,30,0.08)]
        "
      />
    </div>
  );
}

/* ==========================================================================
   ABOUT US
   ========================================================================== */

export default function AboutUs() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);

  const [visible, setVisible] = useState(false);
  const [experienceVisible, setExperienceVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -5% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const element = experienceRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setExperienceVisible(entry.isIntersecting);
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // useEffect(() => {
  //   const element = sectionRef.current;

  //   if (!element) return;

  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setVisible(true);

  //         observer.disconnect();
  //       }
  //     },
  //     {
  //       threshold: 0.08,
  //     },
  //   );

  //   observer.observe(element);

  //   return () => observer.disconnect();
  // }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`
    paciano-about
    relative
    overflow-hidden
    bg-[#F2EADD]
    text-[#17251B]

    ${visible ? "paciano-about-visible" : ""}
  `}
    >
      {/* ==========================================================
    BOTANICAL BACKGROUND
========================================================== */}

      <div
        className="
    pointer-events-none
    absolute
    inset-0
    z-0
    overflow-hidden
  "
        aria-hidden="true"
      >
        {/* LEFT — LARGE NATURAL BRANCH */}

        <ImageLeafSprig
          className="
      left-[-15px]
      top-[20px]
      h-[510px]
      w-[285px]
      opacity-[0.72]
    "
        />
        {/* LEFT LOWER — SMALLER BRANCH */}

        <ImageLeafSprig
          className="
      left-[270px]
      bottom-[180px]
      h-[210px]
      w-[125px]
      opacity-[0.28]
    "
          flip
        />
        {/* BETWEEN TEXT + IMAGE */}

        <ImageLeafSprig
          className="
      left-[29%]
      top-[285px]
      z-[25]
      h-[260px]
      w-[145px]
      opacity-[0.65]
    "
          flip
        />
        {/* ABOVE CENTRAL IMAGE */}

        <ImageLeafSprig
          className="
      left-[48%]
      top-[-35px]
      z-[30]
      h-[220px]
      w-[130px]
      opacity-[0.58]
    "
        />
        {/* RIGHT — LARGE BRANCH */}

        <ImageLeafSprig
          className="
      right-[-20px]
      top-[10px]
      z-[25]
      h-[500px]
      w-[280px]
      opacity-[0.70]
    "
          flip
        />
        {/* RIGHT LOWER */}

        <ImageLeafSprig
          className="
      right-[220px]
      bottom-[100px]
      h-[230px]
      w-[135px]
      opacity-[0.30]
    "
        />
        {/* ======================================================
      LEFT — HUGE SOFT LEAF SHADOW
  ====================================================== */}

        <LeafShadow
          className="
      left-[-145px]
      top-[30px]
      h-[620px]
      w-[520px]
    "
          rotate={-8}
        />

        {/* ======================================================
      RIGHT — HUGE SOFT LEAF SHADOW
  ====================================================== */}

        <LeafShadow
          className="
      right-[-155px]
      top-[90px]
      h-[600px]
      w-[510px]
    "
          rotate={8}
        />

        {/* ======================================================
      EXTRA FAINT LEAF SILHOUETTES
  ====================================================== */}

        <svg
          viewBox="0 0 500 700"
          className="
      absolute
      left-[-90px]
      top-[260px]
      h-[600px]
      w-[430px]
      opacity-[0.12]
    "
          fill="none"
        >
          <path
            d="
        M110 650
        C125 530 145 400 190 280
        C220 195 255 110 330 35
      "
            stroke="#78845F"
            strokeWidth="1.2"
          />

          <path
            d="
        M175 320
        C115 300 75 260 72 205
        C125 213 165 252 178 300
      "
            fill="#89936F"
            opacity=".38"
          />

          <path
            d="
        M195 255
        C255 235 300 190 315 135
        C260 148 215 190 194 238
      "
            fill="#89936F"
            opacity=".30"
          />

          <path
            d="
        M145 420
        C90 400 55 365 52 315
        C102 325 137 360 150 405
      "
            fill="#89936F"
            opacity=".28"
          />
        </svg>

        <svg
          viewBox="0 0 500 700"
          className="
      absolute
      right-[-110px]
      top-[210px]
      h-[600px]
      w-[430px]
      rotate-[4deg]
      opacity-[0.11]
    "
          fill="none"
        >
          <path
            d="
        M390 650
        C375 530 355 400 310 280
        C280 195 245 110 170 35
      "
            stroke="#78845F"
            strokeWidth="1.2"
          />

          <path
            d="
        M325 320
        C385 300 425 260 428 205
        C375 213 335 252 322 300
      "
            fill="#89936F"
            opacity=".38"
          />

          <path
            d="
        M305 255
        C245 235 200 190 185 135
        C240 148 285 190 306 238
      "
            fill="#89936F"
            opacity=".30"
          />

          <path
            d="
        M355 420
        C410 400 445 365 448 315
        C398 325 363 360 350 405
      "
            fill="#89936F"
            opacity=".28"
          />
        </svg>
      </div>

      {/* ==========================================================
      MAIN CONTENT
  ========================================================== */}

      <div
        className="
      relative
      z-10
      mx-auto
      max-w-[1600px]

      px-7
      pt-[70px]
      pb-[70px]

      sm:px-10

      lg:px-[70px]
      lg:pt-[70px]
      lg:pb-[90px]

      xl:px-[90px]
    "
      >
        {/* ========================================================
        TOP STORY
    ======================================================== */}

        <div className="grid items-center lg:grid-cols-[34%_66%]">
          {/* ======================================================
                LEFT — TEXT
            ====================================================== */}

          <div
            className="
                relative
                z-30
                max-w-[550px]
                lg:pr-[35px]
                "
          >
            {/* ABOUT PACIANO */}

            <div
              className="
            paciano-reveal

            mb-[25px]

            flex
            items-center
            gap-[10px]
          "
            >
              <svg
                viewBox="0 0 32 32"
                className="
              h-[21px]
              w-[21px]
              text-[#71863D]
            "
                fill="none"
              >
                <path
                  d="M16 27C16 19 18 12 23 5"
                  stroke="currentColor"
                  strokeWidth="1"
                />

                <path
                  d="
                M17 19
                C10 17 7 12 8 7
                C14 8 18 13 18 18
              "
                  fill="currentColor"
                  opacity=".8"
                />

                <path
                  d="
                M19 14
                C20 8 25 5 29 7
                C27 12 24 15 19 16
              "
                  fill="currentColor"
                  opacity=".5"
                />
              </svg>

              <span
                className="
              font-manrope
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.31em]
              text-[#68753F]
            "
              >
                About Paciano
              </span>
            </div>

            {/* ====================================================
            EXACT HEADLINE STYLE
        ==================================================== */}

            <h2
              className="
            paciano-reveal
            paciano-delay-1

            font-cormorant

            text-[45px]
            leading-[0.91]

            tracking-[-0.035em]

            text-[#17251B]

            sm:text-[65px]
            lg:text-[72px]
            xl:text-[67px]
          "
            >
              <span className="block">Inspired By</span>

              <span className="block">Nature.</span>

              <span
                className="
              mt-[3px]
              block

              italic
              font-normal

              text-[#78943F]
            "
              >
                Created For You.
              </span>
            </h2>

            {/* ====================================================
            DESCRIPTION
        ==================================================== */}

            <p
              className="
            paciano-reveal
            paciano-delay-2

            mt-[32px]

            max-w-[400px]

            font-manrope
            text-[12px]
            leading-[1.85]

            text-[#50584F]

            sm:text-[14px]
          "
            >
              Paciano is more than a resort — it&apos;s a sanctuary where
              nature, comfort and genuine hospitality come together to create
              unforgettable moments.{" "}
            </p>
            <p
              className="
            paciano-reveal
            paciano-delay-2

            mt-[20px]

            max-w-[400px]

            font-manrope
            text-[12px]
            leading-[1.85]
              font-semibold   
            text-[#50584F]

            sm:text-[14px]
          "
            >
              A place to retreat. A place to reconnect. A place that stays with
              you long after you leave.
            </p>

            {/* ============================================================
    PACIANO — DISCOVER OUR STORY
    Dark editorial text + light luxury arrow
============================================================ */}

            {/* ============================================================
    DISCOVER OUR STORY — LUXURY CTA
============================================================ */}

            <button
              type="button"
              className="
    group
    relative
    mt-[30px]

    inline-flex
    h-[48px]
    items-center

    cursor-pointer

    bg-transparent
    p-0

    text-[#17352A]

    transition-transform
    duration-700
    ease-[cubic-bezier(.22,1,.36,1)]

    hover:-translate-y-[2px]
  "
            >
              {/* ==========================================================
      SOFT OUTER ORBIT
  ========================================================== */}

              <span
                className="
      pointer-events-none
      absolute

      -left-[12px]
      -right-[12px]
      -top-[9px]
      -bottom-[9px]

      rounded-full

      border
      border-[#244536]/20

      opacity-0

      transition-all
      duration-[1200ms]
      ease-[cubic-bezier(.22,1,.36,1)]

      group-hover:-left-[17px]
      group-hover:-right-[17px]
      group-hover:-top-[12px]
      group-hover:-bottom-[12px]

      group-hover:border-[#244536]/45
      group-hover:opacity-100
    "
              />

              {/* ==========================================================
      LEFT BOTANICAL DETAIL
  ========================================================== */}

              <span
                className="
      relative
      z-10
      mr-[14px]

      flex
      h-[8px]
      w-[8px]

      items-center
      justify-center
    "
              >
                <span
                  className="
        absolute
        h-[6px]
        w-[6px]

        rotate-45

        border
        border-[#71863D]

        transition-all
        duration-700
        ease-out

        group-hover:rotate-[135deg]
        group-hover:bg-[#71863D]/15
      "
                />

                <span
                  className="
        absolute
        h-px
        w-[19px]

        bg-[#244536]/30
      "
                />
              </span>

              {/* ==========================================================
      DARK STORY TEXT
  ========================================================== */}

              <span
                className="
      relative
      z-10

      font-cormorant

      text-[19px]
      font-medium
      leading-none

      tracking-[0.035em]

      text-[#17352A]

      transition-all
      duration-[900ms]
      ease-[cubic-bezier(.22,1,.36,1)]

      group-hover:translate-x-[2px]
      group-hover:tracking-[0.065em]
    "
              >
                Discover Our Story
              </span>

              {/* ==========================================================
      ELEGANT UNDERLINE
  ========================================================== */}

              <span
                className="
      pointer-events-none
      absolute

      bottom-[1px]
      left-[22px]

      h-px
      w-[150px]

      overflow-hidden

      bg-[#244536]/25
    "
              >
                <span
                  className="
        absolute
        left-[-60px]
        top-0

        h-px
        w-[55px]

        bg-gradient-to-r
        from-transparent
        via-[#71863D]
        to-transparent

        transition-transform
        duration-[1600ms]
        ease-in-out

        group-hover:translate-x-[215px]
      "
                />
              </span>

              {/* ==========================================================
      LIGHT IVORY ARROW CIRCLE
  ========================================================== */}

              <span
                className="
      relative
      z-10

      ml-[22px]

      flex
      h-[42px]
      w-[42px]
      shrink-0

      items-center
      justify-center

      rounded-full

      border
      border-[#244536]/55

      bg-[#FFFDF6]

      shadow-[0_5px_18px_rgba(36,69,54,0.10)]

      transition-all
      duration-[1000ms]
      ease-[cubic-bezier(.22,1,.36,1)]

      group-hover:translate-x-[7px]
      group-hover:rotate-[-6deg]
      group-hover:border-[#244536]
      group-hover:bg-[#FFFFFF]
      group-hover:shadow-[0_10px_28px_rgba(36,69,54,0.16)]
    "
              >
                {/* Inner fine ring */}

                <span
                  className="
        pointer-events-none
        absolute
        inset-[4px]

        rounded-full

        border
        border-[#71863D]/30

        transition-all
        duration-[900ms]
        ease-out

        group-hover:inset-[6px]
        group-hover:border-[#71863D]/55
      "
                />

                {/* Arrow */}

                <span
                  className="
        relative
        z-10

        -translate-x-[1px]

        font-sans
        text-[15px]
        font-light

        text-[#17352A]

        transition-all
        duration-700
        ease-out

        group-hover:translate-x-[3px]
        group-hover:text-[#71863D]
      "
                >
                  →
                </span>
              </span>

              {/* ==========================================================
      TINY LIGHT SWEEP
  ========================================================== */}

              <span
                className="
      pointer-events-none
      absolute

      left-[-40px]
      top-1/2

      h-px
      w-[35px]

      -translate-y-1/2

      bg-gradient-to-r
      from-transparent
      via-[#71863D]
      to-transparent

      opacity-0

      transition-all
      duration-[1500ms]
      ease-in-out

      group-hover:left-[calc(100%-5px)]
      group-hover:opacity-80
    "
              />
            </button>
          </div>

          {/* ======================================================
          RIGHT — THE THREE PHOTOGRAPHIC PIECES
      ====================================================== */}
          {/* ==========================================================
    RIGHT — LUXURY THREE-PHOTO COMPOSITION
========================================================== */}

          <div
            className="
    relative
    mt-[50px]
    h-[530px]
    lg:mt-0
    lg:h-[585px]
    lg:translate-x-[3%]
    xl:translate-x-[4%]
  "
          >
            {/* ==========================================================
      SOFT ATMOSPHERIC GLOW
  ========================================================== */}

            <div
              className="
      pointer-events-none
      absolute
      left-1/2
      top-1/2
      z-0
      h-[500px]
      w-[600px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-[#D7D9C5]/25
      blur-[90px]
    "
            />

            {/* ==========================================================
      LEFT — NATURE
      slightly behind center
  ========================================================== */}

            <div
              className="
    paciano-reveal
    paciano-delay-2
    paciano-photo
    paciano-photo-left
    group

    absolute
    left-[0%]
    top-[82px]

    z-20

    h-[365px]
    w-[31%]

    overflow-hidden

    rounded-[78px_78px_58px_58px]

    bg-[#E9E1D1]

    shadow-[0_32px_75px_rgba(45,48,35,.16)]
  "
            >
              {/* LUXURY DOUBLE RIM */}

              <div
                className="
        pointer-events-none
        absolute
        inset-[6px]
        z-30
        rounded-[72px_72px_52px_52px]
        border
        border-[#FFFDF6]/90
      "
              />

              <div
                className="
        pointer-events-none
        absolute
        inset-[10px]
        z-30
        rounded-[68px_68px_48px_48px]
        border
        border-[#F4EEDF]/55
      "
              />

              <img
                src={aboutNature}
                alt="Nature surrounding Paciano"
                className="
        h-full
        w-full
        object-cover

        transition-transform
        duration-[5000ms]
        ease-[cubic-bezier(.22,1,.36,1)]

        group-hover:scale-[1.055]
      "
                style={{
                  objectPosition: "center center",
                }}
              />

              {/* cinematic warmth */}

              <div
                className="
        pointer-events-none
        absolute
        inset-0
        z-10

        bg-gradient-to-t
        from-[#172319]/[0.13]
        via-transparent
        to-[#fff8e8]/[0.10]
      "
              />

              {/* soft sunlight */}

              <div
                className="
        pointer-events-none
        absolute
        left-[10%]
        top-[8%]
        h-[150px]
        w-[190px]
        rounded-full
        bg-[#FFF8E7]/[0.10]
        blur-[50px]
      "
              />
            </div>

            {/* ==========================================================
      CENTER — HOSPITALITY
      dominant image
  ========================================================== */}

            <div
              className="
    paciano-reveal
    paciano-delay-3
    paciano-photo
    paciano-photo-center
    group

    absolute
    left-[29%]
    top-[0px]

    z-30

    h-[475px]
    w-[43%]

    overflow-hidden

    rounded-[92px_92px_66px_66px]

    bg-[#E9E1D1]

    shadow-[0_42px_100px_rgba(40,42,30,.22)]
  "
            >
              {/* MAIN WHITE RIM */}

              <div
                className="
        pointer-events-none
        absolute
        inset-[6px]
        z-30
        rounded-[86px_86px_60px_60px]
        border
        border-[#FFFDF7]/95
      "
              />

              {/* SECOND INNER RIM */}

              <div
                className="
        pointer-events-none
        absolute
        inset-[10px]
        z-30
        rounded-[82px_82px_56px_56px]
        border
        border-[#F5EDDE]/65
      "
              />

              <img
                src={aboutHospitality}
                alt="Genuine hospitality at Paciano"
                className="
        h-full
        w-full
        object-cover

        transition-transform
        duration-[5500ms]
        ease-[cubic-bezier(.22,1,.36,1)]

        group-hover:scale-[1.055]
      "
                style={{
                  objectPosition: "center center",
                }}
              />

              {/* cinematic grading */}

              <div
                className="
        pointer-events-none
        absolute
        inset-0
        z-10

        bg-gradient-to-t
        from-[#172319]/[0.16]
        via-transparent
        to-[#fff8e8]/[0.11]
      "
              />

              {/* warm sunlight */}

              <div
                className="
        pointer-events-none
        absolute
        left-[12%]
        top-[6%]
        h-[200px]
        w-[210px]
        rounded-full
        bg-[#FFF7DE]/[0.10]
        blur-[60px]
      "
              />

              {/* inner luxury shadow */}

              <div
                className="
        pointer-events-none
        absolute
        inset-0
        z-20
        rounded-[92px_92px_66px_66px]
        shadow-[inset_0_0_45px_rgba(30,40,25,.12)]
      "
              />
            </div>

            {/* ==========================================================
      RIGHT — CONSCIOUS LIVING
      overlaps CENTER
  ========================================================== */}

            <div
              className="
    paciano-reveal
    paciano-delay-4
    paciano-photo
    paciano-photo-right
    group

    absolute
    left-[72%]
    top-[82px]

    z-20

    h-[350px]
    w-[29%]

    overflow-hidden

    rounded-[78px_78px_54px_54px]

    bg-[#E9E1D1]

    shadow-[0_32px_75px_rgba(45,48,35,.16)]
  "
            >
              {/* ======================================================
        IMPORTANT:
        RIGHT IMAGE NOW HAS THE SAME WHITE LUXURY RIM
    ====================================================== */}

              <div
                className="
        pointer-events-none
        absolute
        inset-[6px]
        z-30
        rounded-[72px_72px_48px_48px]
        border
        border-[#FFFDF6]/95
      "
              />

              <div
                className="
        pointer-events-none
        absolute
        inset-[10px]
        z-30
        rounded-[68px_68px_44px_44px]
        border
        border-[#F4EEDF]/60
      "
              />

              <img
                src={aboutConscious}
                alt="Conscious living and dining"
                className="
        h-full
        w-full
        object-cover

        transition-transform
        duration-[4500ms]
        ease-[cubic-bezier(.22,1,.36,1)]

        group-hover:scale-[1.06]
      "
                style={{
                  objectPosition: "center center",
                }}
              />

              <div
                className="
        pointer-events-none
        absolute
        inset-0
        z-10

        bg-gradient-to-t
        from-[#172319]/[0.12]
        via-transparent
        to-[#fff8e8]/[0.10]
      "
              />

              <div
                className="
        pointer-events-none
        absolute
        inset-0
        z-20
        rounded-[78px_78px_54px_54px]
        shadow-[inset_0_0_38px_rgba(30,40,25,.10)]
      "
              />
            </div>

            {/* ==========================================================
      BOTANICAL BRANCH — WRAPS THE IMAGE GROUP
  ========================================================== */}

            {/* ==========================================================
    BOTANICAL BRANCH — BENEATH LEFT IMAGE
    Dense luxury foliage exactly like the reference
========================================================== */}

            <svg
              viewBox="0 0 360 220"
              className="
    pointer-events-none
    absolute
    left-[0%]
    bottom-[-2px]
    z-[35]
    h-[190px]
    w-[360px]
    overflow-visible
    text-[#78865C]
    paciano-bottom-branch
  "
              fill="none"
              aria-hidden="true"
            >
              {/* MAIN DELICATE STEM */}

              <path
                d="
      M8 207
      C45 194 77 178 106 158
      C137 137 165 111 193 82
      C220 54 247 32 279 15
    "
                stroke="currentColor"
                strokeWidth="1.15"
                strokeLinecap="round"
                opacity="0.62"
              />

              {/* SECONDARY FINE STEM */}

              <path
                d="
      M64 184
      C94 164 119 144 139 119
      C158 96 173 72 181 45
    "
                stroke="currentColor"
                strokeWidth="0.7"
                strokeLinecap="round"
                opacity="0.34"
              />

              {/* ==========================================================
      DELICATE LEAVES
      Long / narrow / slightly translucent
  ========================================================== */}

              <g fill="currentColor">
                {/* leaf 1 */}
                <path
                  d="
        M48 190
        C29 186 17 174 13 157
        C32 160 46 170 53 184
        C54 187 52 189 48 190Z
      "
                  opacity="0.34"
                />

                {/* leaf 2 */}
                <path
                  d="
        M76 176
        C56 170 45 157 42 140
        C61 145 75 156 81 170
        C82 173 80 175 76 176Z
      "
                  opacity="0.27"
                />

                {/* leaf 3 */}
                <path
                  d="
        M104 158
        C84 153 73 141 70 124
        C89 129 103 140 109 153
        C110 156 108 158 104 158Z
      "
                  opacity="0.39"
                />

                {/* leaf 4 */}
                <path
                  d="
        M121 148
        C126 129 138 114 155 105
        C154 123 143 140 128 150
        C125 152 122 151 121 148Z
      "
                  opacity="0.31"
                />

                {/* leaf 5 */}
                <path
                  d="
        M151 122
        C132 116 121 104 118 88
        C137 92 151 103 157 116
        C158 119 156 121 151 122Z
      "
                  opacity="0.34"
                />

                {/* leaf 6 */}
                <path
                  d="
        M166 110
        C172 91 185 77 202 69
        C201 87 190 103 174 113
        C171 115 168 114 166 110Z
      "
                  opacity="0.38"
                />

                {/* leaf 7 */}
                <path
                  d="
        M197 82
        C181 75 172 64 170 50
        C187 54 199 63 204 76
        C205 79 202 82 197 82Z
      "
                  opacity="0.28"
                />

                {/* leaf 8 */}
                <path
                  d="
        M217 67
        C224 51 236 39 250 34
        C248 50 239 63 225 70
        C222 71 219 70 217 67Z
      "
                  opacity="0.36"
                />

                {/* leaf 9 */}
                <path
                  d="
        M246 43
        C232 38 224 29 222 17
        C237 20 247 28 251 38
        C252 41 250 43 246 43Z
      "
                  opacity="0.25"
                />

                {/* tiny top leaf */}
                <path
                  d="
        M268 28
        C274 17 283 10 293 8
        C290 19 283 27 273 31
        C270 32 268 31 268 28Z
      "
                  opacity="0.32"
                />
              </g>

              {/* ==========================================================
      FINE LEAF VEINS
  ========================================================== */}

              <g
                stroke="#65744D"
                strokeWidth="0.55"
                strokeLinecap="round"
                opacity="0.42"
              >
                <path d="M49 187C35 176 24 166 15 159" />
                <path d="M77 173C63 163 51 152 43 142" />
                <path d="M105 155C91 145 79 134 71 126" />
                <path d="M125 148C136 133 146 118 153 107" />
                <path d="M152 119C138 109 126 99 119 90" />
                <path d="M169 110C181 95 192 81 200 71" />
                <path d="M198 79C187 69 177 59 172 51" />
                <path d="M219 67C231 54 241 42 248 36" />
                <path d="M247 41C237 33 228 24 224 19" />
                <path d="M270 28C279 19 286 12 291 9" />
              </g>

              {/* ==========================================================
      TINY WARM BOTANICAL SEEDS
  ========================================================== */}

              <g fill="#B6A66E" opacity="0.48">
                <circle cx="91" cy="167" r="1.7" />
                <circle cx="133" cy="135" r="1.8" />
                <circle cx="184" cy="94" r="1.7" />
                <circle cx="229" cy="57" r="1.8" />
                <circle cx="258" cy="35" r="1.5" />
              </g>
            </svg>

            {/* ==========================================================
    BOTANICAL BRANCH — OUTSIDE RIGHT IMAGE
    Reference-style vertical trailing branch
========================================================== */}

            <svg
              viewBox="0 0 170 430"
              className="
    pointer-events-none
    absolute
    right-[-8px]
    top-[-8px]
    z-[12]
    h-[445px]
    w-[175px]
    overflow-visible
    text-[#78865C]
    paciano-right-branch
  "
              fill="none"
              aria-hidden="true"
            >
              {/* ==========================================================
      LONG CURVED STEM
  ========================================================== */}

              <path
                d="
      M155 426
      C143 373 133 325 128 281
      C122 232 116 190 105 151
      C94 110 78 70 50 35
      C43 26 36 18 28 10
    "
                stroke="currentColor"
                strokeWidth="1.15"
                strokeLinecap="round"
                opacity="0.62"
              />

              {/* delicate secondary stem */}

              <path
                d="
      M132 306
      C111 273 96 237 88 199
      C79 158 71 121 53 91
    "
                stroke="currentColor"
                strokeWidth="0.65"
                strokeLinecap="round"
                opacity="0.30"
              />

              {/* ==========================================================
      ELONGATED REFERENCE-STYLE LEAVES
  ========================================================== */}

              <g fill="currentColor">
                {/* lower right */}
                <path
                  d="
        M136 377
        C151 367 161 351 162 334
        C147 340 137 352 132 367
        C131 372 132 375 136 377Z
      "
                  opacity="0.32"
                />

                {/* lower left */}
                <path
                  d="
        M126 341
        C108 335 96 323 91 307
        C108 309 122 319 130 333
        C132 337 130 340 126 341Z
      "
                  opacity="0.27"
                />

                {/* right */}
                <path
                  d="
        M121 300
        C138 292 149 278 152 261
        C136 266 124 278 117 292
        C116 296 117 299 121 300Z
      "
                  opacity="0.37"
                />

                {/* left */}
                <path
                  d="
        M112 263
        C94 258 82 246 77 230
        C95 233 108 243 116 256
        C118 260 116 262 112 263Z
      "
                  opacity="0.25"
                />

                {/* right */}
                <path
                  d="
        M107 225
        C124 217 135 203 138 187
        C121 191 109 203 103 217
        C102 221 103 224 107 225Z
      "
                  opacity="0.35"
                />

                {/* left */}
                <path
                  d="
        M98 190
        C81 184 70 173 66 158
        C83 161 96 171 103 183
        C105 187 103 189 98 190Z
      "
                  opacity="0.25"
                />

                {/* right */}
                <path
                  d="
        M91 155
        C107 147 117 134 119 119
        C104 123 93 134 87 147
        C86 151 87 154 91 155Z
      "
                  opacity="0.36"
                />

                {/* left */}
                <path
                  d="
        M79 122
        C64 117 54 107 50 94
        C65 97 76 106 83 116
        C85 120 83 122 79 122Z
      "
                  opacity="0.24"
                />

                {/* right upper */}
                <path
                  d="
        M69 91
        C83 82 91 70 92 56
        C79 60 69 70 64 82
        C63 86 65 89 69 91Z
      "
                  opacity="0.34"
                />

                {/* left upper */}
                <path
                  d="
        M57 63
        C43 59 34 50 31 38
        C45 41 56 49 61 58
        C63 61 61 63 57 63Z
      "
                  opacity="0.22"
                />

                {/* very top */}
                <path
                  d="
        M43 38
        C49 26 58 17 68 13
        C66 25 58 35 48 40
        C45 41 43 40 43 38Z
      "
                  opacity="0.31"
                />
              </g>

              {/* ==========================================================
                  FINE VEINS
              ========================================================== */}

              <g
                stroke="#65744D"
                strokeWidth="0.52"
                strokeLinecap="round"
                opacity="0.38"
              >
                <path d="M136 373C147 359 156 347 161 336" />
                <path d="M127 337C113 328 101 317 93 309" />
                <path d="M120 296C133 283 144 270 151 263" />
                <path d="M112 260C98 249 86 239 79 232" />
                <path d="M106 221C120 208 132 196 137 189" />
                <path d="M98 187C84 176 73 166 67 160" />
                <path d="M90 152C103 140 113 128 118 121" />
                <path d="M79 119C67 109 57 100 51 96" />
                <path d="M68 88C79 76 87 64 91 58" />
                <path d="M56 60C45 52 36 44 32 40" />
                <path d="M45 36C54 26 62 18 67 14" />
              </g>

              {/* ==========================================================
                  TINY GOLDEN SEEDS
              ========================================================== */}

              <g fill="#B7A66C" opacity="0.46">
                <circle cx="119" cy="282" r="1.7" />
                <circle cx="104" cy="207" r="1.6" />
                <circle cx="86" cy="139" r="1.7" />
                <circle cx="63" cy="77" r="1.5" />
                <circle cx="47" cy="48" r="1.6" />
              </g>
            </svg>

            {/* ==========================================================
              SMALL FLOATING LEAF
          ========================================================== */}

            <div
              className="
                pointer-events-none
                absolute

                right-[25%]
                top-[8px]

                z-50

                flex
                h-[60px]
                w-[54px]

                items-center
                justify-center

                rounded-full

                bg-[#F2EADD]

                shadow-[0_12px_30px_rgba(55,55,40,.13)]

                paciano-leaf-orbit
              "
            >
              <svg
                viewBox="0 0 40 40"
                className="
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
                  opacity=".7"
                />

                <path
                  d="
          M24 17
          C25 12 29 9 34 10
          C32 15 29 18 24 18
        "
                  fill="currentColor"
                  opacity=".45"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* ==========================================================
                EXPERIENCES TITLE
            ========================================================== */}

        <div
          className="
        paciano-reveal
        relative

        mt-[15px]

        text-center
      "
        >
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
            Experiences That Stay With You
          </span>

          <h3
            className="
          mt-[16px]

          font-cormorant

          text-[43px]
          leading-[.95]

          tracking-[-.025em]

          text-[#17251B]

          sm:text-[52px]
          lg:text-[60px]
        "
          >
            Moments Crafted by Nature,
            <br />
            <span className="italic text-[#789541]">Curated for You.</span>
          </h3>
        </div>

        {/* ==========================================================
    FIVE EXPERIENCES
========================================================== */}

        <div
          ref={experienceRef}
          className="
    paciano-experiences
    relative

    mt-[55px]

    grid
    grid-cols-2
    gap-x-[14px]
    gap-y-[35px]

    sm:grid-cols-3

    lg:grid-cols-5
    lg:gap-x-[18px]
    lg:gap-y-0

    xl:px-[10px]
  "
        >
          {experiences.map((experience, index) => (
            <article
              key={experience.title}
              className={`
  paciano-experience
  paciano-experience-${index + 1}

  group
  relative

  ${experienceVisible ? "paciano-experience-visible" : ""}
`}
              style={
                {
                  "--experience-delay": `${index * 450}ms`,
                  "--experience-y":
                    index === 1 || index === 3
                      ? "22px"
                      : index === 2
                        ? "35px"
                        : "0px",
                } as React.CSSProperties
              }
            >
              {/* =====================================================
              ${index === 1 ? "lg:translate-y-[22px]" : ""}
${index === 2 ? "lg:translate-y-[26px]" : ""}
${index === 3 ? "lg:translate-y-[22px]" : ""}
${index === 4 ? "lg:translate-y-0" : ""}
          ICON
      ===================================================== */}

              <div
                className="
          paciano-experience-icon

          relative
          z-10

          mx-auto

          flex
          h-[72px]
          w-[72px]

          items-center
          justify-center

          rounded-full

          border
          border-[#71803F]/20

          bg-[#F5EEE1]/55

          backdrop-blur-[2px]

          transition-all
          duration-[1200ms]
          ease-[cubic-bezier(.22,1,.36,1)]
        "
              >
                <ExperienceIcon type={index} />

                {/* tiny orbit */}
                {/* <span
                  className="
                    pointer-events-none
                    absolute
                    inset-[-5px]

                    rounded-full

                    border
                    border-[#71803F]/0

                    transition-all
                    duration-[1200ms]
                    ease-[cubic-bezier(.22,1,.36,1)]

                    group-hover:inset-[-9px]
                    group-hover:border-[#71803F]/20
                  "
                /> */}
                <span
                  className="
                    paciano-icon-orbit
                    pointer-events-none
                    absolute
                    inset-[-6px]
                    rounded-full
                  "
                />
              </div>

              {/* =====================================================
          TEXT
      ===================================================== */}

              <div
                className="
          relative
          z-10

          mt-[18px]

          text-center
        "
              >
                <h4
                  className="
    paciano-experience-title
    font-cormorant
    text-[28px]
    font-medium
    leading-[1.05]
    tracking-[-0.015em]
    text-[#17251B]
    transition-all
    duration-[1000ms]
    ease-[cubic-bezier(.22,1,.36,1)]
    group-hover:text-[#617638]
  "
                >
                  {experience.title}
                </h4>

                <p
                  className="
                    paciano-experience-description
    mx-auto
    mt-[14px]
    max-w-[220px]
    font-manrope
    text-[13px]
    font-normal
    leading-[1.65]
    tracking-[0.005em]
    text-[#555C52]
    transition-all
    duration-[1000ms]
    ease-[cubic-bezier(.22,1,.36,1)]
                  "
                >
                  {experience.description}
                </p>
              </div>

              {/* =====================================================
          IMAGE FRAME
      ===================================================== */}

              <div
                className="
    paciano-experience-image
    group/image
    relative
    mt-[23px]

    h-[270px]
    sm:h-[275px]
    lg:h-[285px]
    xl:h-[295px]

    overflow-hidden

    rounded-[70px_70px_28px_28px]

    bg-[#E7DFCF]

    shadow-[0_24px_60px_rgba(45,48,35,.12)]

    animate-paciano-card-float

    transition-shadow
    duration-[1200ms]

    hover:shadow-[0_32px_75px_rgba(45,48,35,.17)]

    will-change-transform

    motion-reduce:animate-none
  "
              >
                {/* soft botanical border */}

                <div
                  className="
            pointer-events-none
            absolute
            inset-[5px]
            z-20

            rounded-[65px_65px_24px_24px]

            border
            border-[#FFFDF5]/75

            transition-all
            duration-[1200ms]

            group-hover:inset-[8px]
            group-hover:border-[#FFFDF5]
          "
                />

                {/* image */}

                <img
                  src={experience.image}
                  alt={experience.title}
                  className="
                      paciano-experience-img

                      h-full
                      w-full

                      object-cover

                      transition-transform
                      duration-[5000ms]
                      ease-[cubic-bezier(.22,1,.36,1)]

                      group-hover:scale-[1.075]
                    "
                />

                {/* warm cinematic overlay */}

                <div
                  className="
            pointer-events-none
            absolute
            inset-0
            z-10

            bg-gradient-to-t
            from-[#172319]/[0.18]
            via-transparent
            to-[#FFF8E8]/[0.10]

            opacity-[0.85]

            transition-opacity
            duration-[1200ms]

            group-hover:opacity-100
          "
                />

                {/* moving light */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    left-0
                    top-0
                    z-20

                    h-full
                    w-[35%]

                    bg-gradient-to-r
                    from-transparent
                    via-[#FFF8E8]/[0.16]
                    to-transparent

                    opacity-0

                    -translate-x-[180%]
                    rotate-[12deg]

                   animate-paciano-image-sweep
                  "
                />
              </div>

              {/* =====================================================
                    BOTANICAL LINE BELOW IMAGE
                ===================================================== */}

              <div
                className="
                  paciano-experience-botanical

                  relative

                  mx-auto
                  mt-[17px]

                  h-[18px]
                  w-[55px]
                "
              >
                <svg
                  viewBox="0 0 55 18"
                  className="
            h-full
            w-full

            overflow-visible

            text-[#71883F]
          "
                  fill="none"
                >
                  <path
                    d="M27 17C27 11 29 7 35 2"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />

                  <path
                    d="
              M28 11
              C22 10 18 7 18 3
              C23 4 27 7 28 11
            "
                    fill="currentColor"
                    opacity=".65"
                  />

                  <path
                    d="
              M33 7
              C37 4 41 3 45 4
              C42 8 38 9 33 8
            "
                    fill="currentColor"
                    opacity=".42"
                  />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ============================================================
      ANIMATION
  ============================================================ */}

      <style>
        {`
       /* ==========================================================
          ABOUT PACIANO SECTION
        ========================================================== */
          .paciano-reveal {
            opacity: 0;
            translate: 0 65px;

            transition:
              opacity 2.8s cubic-bezier(.16, 1, .3, 1),
              translate 2.8s cubic-bezier(.16, 1, .3, 1);
          }

          .paciano-about-visible .paciano-reveal {
            opacity: 1;
            translate: 0 0;
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
      /* ==========================================================
        CINEMATIC PHOTO MOTION
      ========================================================== */

.paciano-photo {
  will-change: transform;
  transform-origin: center center;
}


/* LEFT PHOTO
   Slow vertical breathing + tiny rotation
---------------------------------------------------------- */

.paciano-about-visible .paciano-photo-left {
  animation:
    pacianoFloatLeft
    9s
    ease-in-out
    infinite
    1.4s;
}


/* CENTER PHOTO
   Almost imperceptible movement
---------------------------------------------------------- */

.paciano-about-visible .paciano-photo-center {
  animation:
    pacianoFloatCenter
    11s
    ease-in-out
    infinite
    1.7s;
}


/* RIGHT PHOTO
   Different rhythm so the three don't move together
---------------------------------------------------------- */

.paciano-about-visible .paciano-photo-right {
  animation:
    pacianoFloatRight
    10s
    ease-in-out
    infinite
    2s;
}


/* LEFT */

@keyframes pacianoFloatLeft {

  0% {
    transform:
      translate3d(0, 0, 0)
      rotate(0deg);
  }

  25% {
    transform:
      translate3d(-2px, -4px, 0)
      rotate(-0.15deg);
  }

  50% {
    transform:
      translate3d(2px, -7px, 0)
      rotate(0.15deg);
  }

  75% {
    transform:
      translate3d(1px, -3px, 0)
      rotate(0deg);
  }

  100% {
    transform:
      translate3d(0, 0, 0)
      rotate(0deg);
  }
}


/* CENTER */

@keyframes pacianoFloatCenter {

  0% {
    transform:
      translate3d(0, 0, 0)
      rotate(0deg);
  }

  25% {
    transform:
      translate3d(1px, -3px, 0)
      rotate(0.08deg);
  }

  50% {
    transform:
      translate3d(-1px, -6px, 0)
      rotate(-0.08deg);
  }

  75% {
    transform:
      translate3d(1px, -3px, 0)
      rotate(0.05deg);
  }

  100% {
    transform:
      translate3d(0, 0, 0)
      rotate(0deg);
  }
}


@keyframes pacianoFloatRight {

  0% {
    transform:
      translate3d(0, 0, 0)
      rotate(0deg);
  }

  25% {
    transform:
      translate3d(2px, -4px, 0)
      rotate(0.12deg);
  }

  50% {
    transform:
      translate3d(-1px, -7px, 0)
      rotate(-0.12deg);
  }

  75% {
    transform:
      translate3d(-1px, -3px, 0)
      rotate(-0.05deg);
  }

  100% {
    transform:
      translate3d(0, 0, 0)
      rotate(0deg);
  }
}

/* ==========================================================
   LEAF MOTION
========================================================== */

.paciano-floating-leaf {
  transform-origin: 50% 90%;
  animation:
    pacianoLeafSway
    7s
    ease-in-out
    infinite;
}

@keyframes pacianoLeafSway {

  0% {
    transform:
      rotate(8deg)
      translateY(0);
  }

  50% {
    transform:
      rotate(3deg)
      translateY(-8px);
  }

  100% {
    transform:
      rotate(8deg)
      translateY(0);
  }
}


/* ==========================================================
   SMALL LEAF CIRCLE
========================================================== */

.paciano-leaf-orbit {
  animation:
    pacianoLeafOrbit
    6s
    ease-in-out
    infinite;
}

@keyframes pacianoLeafOrbit {

  0% {
    transform:
      translateY(0)
      rotate(0deg);
  }

  50% {
    transform:
      translateY(-9px)
      rotate(5deg);
  }

  100% {
    transform:
      translateY(0)
      rotate(0deg);
  }
}


/* ==========================================================
   ACCESSIBILITY
========================================================== */

@media (prefers-reduced-motion: reduce) {

  .paciano-photo-left,
  .paciano-photo-center,
  .paciano-photo-right,
  .paciano-floating-leaf,
  .paciano-leaf-orbit {
    animation: none !important;
  }

}
    @media (prefers-reduced-motion: reduce) {

      .paciano-reveal {
        opacity: 1;
        transform: none;
        transition: none;
      }

    }
  /* ==========================================================
   PACIANO — CINEMATIC FIVE EXPERIENCE CARDS
   ========================================================== */

    .paciano-experience {
    transform: translateY(var(--experience-y, 0px));
      opacity: 0;
    }

    /* Start the cards only when they actually enter the viewport */
   .paciano-experience-visible {
  animation:
    pacianoExperienceReveal
    3.2s
    cubic-bezier(.22, 1, .36, 1)
    both;

  animation-delay: var(--experience-delay);
}


/* ----------------------------------------------------------
   CINEMATIC ENTRY
   IMPORTANT:
   No transform on the card itself.
   This keeps typography perfectly sharp.
   ---------------------------------------------------------- */

@keyframes pacianoExperienceReveal {
  0% {
    opacity: 0;
    transform:
      translateY(
        calc(var(--experience-y, 0px) + 18px)
      );
  }

  100% {
    opacity: 1;
    transform:
      translateY(var(--experience-y, 0px));
  }
}

/* ==========================================================
   ICON — SUBTLE ENTRY
   ========================================================== */

.paciano-experience-visible .paciano-experience-icon {
  animation:
    pacianoIconReveal
    1.2s
    cubic-bezier(.22, 1, .36, 1)
    both;

  animation-delay:
    calc(var(--experience-delay) + 250ms);
}

@keyframes pacianoIconReveal {
  0% {
    opacity: 0;
    transform: translateY(8px) scale(.96);
  }

  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}


/* ==========================================================
   TITLE
   CRISP — NO TRANSLATE / NO BLUR
   ========================================================== */

.paciano-experience-visible .paciano-experience-title {
  animation: pacianoTitleFade 900ms cubic-bezier(.22,1,.36,1) both;
  animation-delay: calc(var(--experience-delay) + 420ms);
}

@keyframes pacianoTitleFade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes pacianoDescriptionFade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
@keyframes pacianoTitleReveal {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}


/* ==========================================================
   DESCRIPTION
   CRISP — NO TRANSLATE / NO BLUR
   ========================================================== */

.paciano-experience-visible .paciano-experience-description {
  animation: pacianoDescriptionFade 900ms cubic-bezier(.22,1,.36,1) both;
  animation-delay: calc(var(--experience-delay) + 600ms);
}


@keyframes pacianoDescriptionReveal {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}


/* ==========================================================
   IMAGE — THIS IS WHERE THE CINEMATIC MOTION SHOULD LIVE
   ========================================================== */

.paciano-experience-visible .paciano-experience-img {
  animation:
    pacianoImagePush
    10s
    cubic-bezier(.22, 1, .36, 1)
    both;

  animation-delay:
    calc(var(--experience-delay) + 350ms);

  will-change: transform;
}

@keyframes pacianoImagePush {
  0% {
    transform: scale(1.075);
  }

  100% {
    transform: scale(1);
  }
}


/* ==========================================================
   LIGHT SWEEP
   ========================================================== */

.paciano-experience-visible .paciano-experience-image > div:last-child {
  animation:
    pacianoLightSweep
    3.2s
    cubic-bezier(.22, 1, .36, 1)
    both;

  animation-delay:
    calc(var(--experience-delay) + 900ms);
}


/* ==========================================================
   HOVER
   ========================================================== */

.paciano-experience:hover .paciano-experience-title {
  transform: translateY(-2px);
}

.paciano-experience:hover .paciano-experience-description {
  transform: translateY(-1px);
}

.paciano-experience:hover .paciano-experience-icon {
  transform: translateY(-3px);
}


/* ==========================================================
   REDUCED MOTION
   ========================================================== */

@media (prefers-reduced-motion: reduce) {
  .paciano-experience,
  .paciano-experience-icon,
  .paciano-experience-title,
  .paciano-experience-description,
  .paciano-experience-img,
  .paciano-experience-image > div:last-child {
    animation: none !important;
    transition: none !important;
  }

 
}




/* ==========================================================
   ICON — VERY SUBTLE LIFE
   ========================================================== */

@keyframes pacianoIconReveal {

  0% {
    opacity: 0;
    transform:
      translateY(12px)
      scale(.92)
      rotate(-3deg);
  }

  60% {
    opacity: 1;
  }

  100% {
    opacity: 1;
    transform:
      translateY(0)
      scale(1)
      rotate(0deg);
  }
}


/* ==========================================================
   DESCRIPTION — FOLLOWS TITLE
   ========================================================== */

.paciano-experience-visible .paciano-experience-description{
  animation:
    pacianoTextReveal
    1.2s
    cubic-bezier(.22,1,.36,1)
    both;

  animation-delay:
    calc(var(--experience-delay) + 650ms);
}


@keyframes pacianoTextReveal {

  0% {
    opacity: 0;
    transform: translateY(10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}


/* ==========================================================
   IMAGE — CINEMATIC SLOW PUSH
   ========================================================== */

.paciano-experience-visible .paciano-experience-img{
  animation:
    pacianoImagePush
    10s
    cubic-bezier(.22,1,.36,1)
    both;

  animation-delay:
    calc(var(--experience-delay) + 500ms);

  will-change: transform;
}


@keyframes pacianoImagePush {

  0% {
    transform: scale(1.075);
  }

  100% {
    transform: scale(1);
  }
}


/* ==========================================================
   MOVING LIGHT — ONE SLOW CINEMATIC SWEEP
   ========================================================== */

.paciano-experience-visible .paciano-experience-image > div:last-child {
  animation:
    pacianoLightSweep
    3.2s
    cubic-bezier(.22,1,.36,1)
    both;

  animation-delay:
    calc(var(--experience-delay) + 1.1s);
}


@keyframes pacianoLightSweep {

  0% {
    opacity: 0;
    transform:
      translateX(-180%)
      rotate(12deg);
  }

  20% {
    opacity: .7;
  }

  55% {
    opacity: .35;
  }

  100% {
    opacity: 0;
    transform:
      translateX(430%)
      rotate(12deg);
  }
}


/* ==========================================================
   HOVER — KEEP VERY REFINED
   ========================================================== */

.paciano-experience:hover .paciano-experience-title {
  transform: translateY(-2px);
}

.paciano-experience:hover .paciano-experience-description {
  transform: translateY(-1px);
}

.paciano-experience:hover .paciano-experience-icon {
  transform: translateY(-3px);
}


/* ==========================================================
   REDUCED MOTION
   ========================================================== */

@media (prefers-reduced-motion: reduce) {

  .paciano-experience,
  .paciano-experience-icon,
  .paciano-experience-title,
  .paciano-experience-description,
  .paciano-experience-img,
  .paciano-experience-image > div:last-child {
    animation: none !important;
  }

  .paciano-experience {
    opacity: 1;
    transform: none;
    filter: none;
  }
}

/* ==========================================================
   PACIANO — FIVE EXPERIENCE CARDS
   VERY SUBTLE LUXURY FLOAT
   ========================================================== */


 .paciano-experience-image {
  animation: pacianoCardFloat 9s ease-in-out infinite;
  will-change: transform;
}

.paciano-experience:nth-child(1) .paciano-experience-image {
  animation-delay: 0s;
}

.paciano-experience:nth-child(2) .paciano-experience-image {
  animation-delay: -2s;
}

.paciano-experience:nth-child(3) .paciano-experience-image {
  animation-delay: -4s;
}

.paciano-experience:nth-child(4) .paciano-experience-image {
  animation-delay: -6s;
}

.paciano-experience:nth-child(5) .paciano-experience-image {
  animation-delay: -8s;
}

@keyframes pacianoCardFloat {
  0% {
    transform: translate3d(0, 0, 0);
  }

  25% {
    transform: translate3d(0, -2px, 0);
  }

  50% {
    transform: translate3d(0, -4px, 0);
  }

  75% {
    transform: translate3d(0, -2px, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
}

.paciano-icon-orbit {
  border: 1px solid rgba(113, 128, 63, 0.18);
  border-top-color: rgba(113, 128, 63, 0.65);
  border-right-color: rgba(113, 128, 63, 0.32);

  animation:
    pacianoIconOrbit
    12s
    linear
    infinite;

  transform-origin: center;
}

@keyframes pacianoIconOrbit {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
  .paciano-experience:hover .paciano-icon-orbit {
  animation-duration: 7s;
  border-top-color: rgba(113, 128, 63, 0.85);
}

  `}
      </style>
    </section>
  );
}
