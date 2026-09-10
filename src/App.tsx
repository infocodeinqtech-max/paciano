import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Accommodation from "./components/Accommodation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCanadianMapleLeaf } from "@fortawesome/free-brands-svg-icons";
import storyImage from "@/images/story.png";

function LeafIcon() {
  return (
    <div className="flex h-[55px] w-[55px] items-center justify-center overflow-visible">
      <FontAwesomeIcon
        icon={faCanadianMapleLeaf}
        className="
          text-[#8b8957]
          scale-[3]
          transform
        "
      />
    </div>
  );
}

function StoryIntroSection() {
  {
    /* Animation CSS */
  }
  return (
    <>
      <style>{`@keyframes pacianoLeafFloat {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(8deg);
          }
        }

        @keyframes pacianoIconBreathe {
          0%, 100% {
            transform: translateY(0) scale(1) rotate(-4deg);
          }

          50% {
            transform: translateY(-10px) scale(1.15) rotate(5deg);
          }
        }

        @keyframes pacianoFadeUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pacianoImageFloat {
          0%, 100% {
            transform: scale(1) translateY(0);
          }

          50% {
            transform: scale(1.02) translateY(-8px);
          }
        }

        .paciano-leaf-icon {
          animation: pacianoIconBreathe 3.5s ease-in-out infinite;
        }

        .paciano-fade-1 {
          animation: pacianoFadeUp 1s ease-out both;
        }

        .paciano-fade-2 {
          animation: pacianoFadeUp 1.2s 0.2s ease-out both;
        }

        .paciano-fade-3 {
          animation: pacianoFadeUp 1.2s 0.45s ease-out both;
        }

        .paciano-fade-4 {
          animation: pacianoFadeUp 1.2s 0.7s ease-out both;
        }

        .paciano-leaf-float {
          animation: pacianoLeafFloat 5s ease-in-out infinite;
        }

        .paciano-image-float {
          animation: pacianoImageFloat 8s ease-in-out infinite;
        }
      `}</style>

      <section
        className="
    relative
    overflow-hidden
    bg-[#eeeadf]
    py-24
    sm:py-28
    lg:-mt-[90px]
    lg:min-h-[920px]
    lg:py-0
  "
      >
        {/* ============================================================
          TOP CURVED CONNECTION FROM HERO
      ============================================================ */}

        <div className="pointer-events-none absolute left-0 top-0 z-20 h-[210px] w-full">
          <svg
            viewBox="0 0 1440 210"
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            <path
              d="
              M0,34
              C115,88 205,96 332,76
              C460,56 555,104 690,88
              C835,70 940,34 1075,68
              C1210,102 1320,80 1440,42
              L1440,210
              L0,210
              Z
            "
              fill="#eeeadf"
            />
          </svg>
        </div>

        {/* ============================================================
          BACKGROUND ATMOSPHERE
      ============================================================ */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* left large soft botanical shadow */}
          <div
            className="absolute -left-[15%] top-[8%] h-[70%] w-[48%] blur-[95px]"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(87,103,76,0.16) 0%, rgba(118,127,104,0.08) 40%, transparent 72%)",
            }}
          />

          {/* center warm glow */}
          <div
            className="absolute left-[20%] top-[18%] h-[60%] w-[55%] blur-[100px]"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(202,174,105,0.16) 0%, rgba(230,218,183,0.08) 45%, transparent 72%)",
            }}
          />

          {/* right subtle mist */}
          <div
            className="absolute -right-[12%] top-[5%] h-[68%] w-[45%] blur-[100px]"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(115,126,101,0.12) 0%, transparent 72%)",
            }}
          />

          {/* left-bottom dark landscape shadow */}
          <div
            className="absolute -bottom-[10%] -left-[12%] h-[48%] w-[58%] blur-[70px]"
            style={{
              background:
                "radial-gradient(ellipse at bottom left, rgba(38,59,44,0.18) 0%, rgba(65,82,64,0.09) 45%, transparent 75%)",
            }}
          />

          {/* EXTREME LEFT LEAF SHADOW */}
          <svg
            viewBox="0 0 360 760"
            className="absolute -left-[8%] top-[8%] h-[78%] w-[28%] opacity-[0.16] blur-[1px]"
          >
            <path
              d="M120 760 C135 620 105 520 165 390 C225 260 155 140 220 0"
              fill="none"
              stroke="#5e694e"
              strokeWidth="4"
            />

            <ellipse
              cx="135"
              cy="545"
              rx="50"
              ry="105"
              transform="rotate(-38 135 545)"
              fill="#657056"
            />

            <ellipse
              cx="190"
              cy="430"
              rx="48"
              ry="105"
              transform="rotate(42 190 430)"
              fill="#657056"
            />

            <ellipse
              cx="128"
              cy="315"
              rx="42"
              ry="92"
              transform="rotate(-42 128 315)"
              fill="#657056"
            />

            <ellipse
              cx="215"
              cy="190"
              rx="38"
              ry="88"
              transform="rotate(40 215 190)"
              fill="#657056"
            />
          </svg>

          {/* EXTREME RIGHT LEAF SHADOW */}
          <svg
            viewBox="0 0 400 760"
            className="absolute -right-[8%] top-[4%] h-[80%] w-[30%] opacity-[0.15] blur-[1px]"
          >
            <path
              d="M250 760 C235 620 275 520 220 390 C165 250 255 145 185 0"
              fill="none"
              stroke="#5e694e"
              strokeWidth="4"
            />

            <ellipse
              cx="250"
              cy="550"
              rx="48"
              ry="108"
              transform="rotate(40 250 550)"
              fill="#657056"
            />

            <ellipse
              cx="195"
              cy="430"
              rx="48"
              ry="108"
              transform="rotate(-40 195 430)"
              fill="#657056"
            />

            <ellipse
              cx="270"
              cy="300"
              rx="42"
              ry="95"
              transform="rotate(42 270 300)"
              fill="#657056"
            />

            <ellipse
              cx="185"
              cy="175"
              rx="38"
              ry="88"
              transform="rotate(-40 185 175)"
              fill="#657056"
            />
          </svg>
        </div>

        {/* ============================================================
          MAIN CONTENT
      ============================================================ */}

        <div className="relative z-10 mx-auto max-w-[1800px] px-6 pb-[210px] pt-[270px] lg:px-12 xl:px-20">
          <div className="grid items-center gap-2 lg:grid-cols-[0.78fr_1.22fr]">
            {/* ========================================================
              LEFT CONTENT
          ======================================================== */}
            <div
              className="
              relative z-30
              mx-auto
              flex w-full max-w-[500px]
              flex-col items-center
              text-center
              lg:mx-0
              lg:pl-[4%]
              xl:pl-[8%]
            "
            >
              {/* ======================================================
                GOLD BOTANICAL LEAF LOGO
            ====================================================== */}
              <div className="paciano-fade-1 mb-4 flex justify-center">
                {/* <div className="paciano-leaf-icon"> */}
                <LeafIcon />
                {/* </div> */}
              </div>
              {/* ======================================================
                HEADING
            ====================================================== */}

              <h2
                className="
                paciano-fade-2
                font-['Cormorant_Garamond']                
                text-[42px]
                font-[500]
                uppercase
                leading-[1.35]
                tracking-[0.055em]
                text-[#394039]
              "
              >
                <span className="block">A RETREAT</span>
                <span className="block">BEYOND ORDINARY</span>
              </h2>

              {/* ======================================================
                DESCRIPTION
            ====================================================== */}

              <div
                className="
                paciano-fade-3
                  mt-7
                  max-w-[520px]
                  font-['DM_Sans']
                  text-[20px]
                  leading-[1.9]
                  text-[#5e655e]
                  sm:text-[15px]
                  md:text-[16px]
                "
              >
                <p>
                  Wake up to the melody of birds, breathe in the fresh mountain
                  air and let nature slow everything down.
                </p>

                <p className="mt-3">
                  At Paciano, every moment is crafted to help you reconnect,
                  rejuvenate and simply retreat.
                </p>
              </div>

              {/* ======================================================
                    ABOUT PACIANO BUTTON
                ====================================================== */}

              <button
                type="button"
                className="
                paciano-fade-4
                group
                relative
                mt-10
                flex
                items-center
                gap-4
                bg-transparent
                p-0
                font-['DM_Sans']
                text-[13px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-[#8f7d4f]
              "
              >
                {/* Text */}
                <span className="relative pb-[10px]">
                  ABOUT PACIANO
                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-px
                      w-full
                      origin-left
                      scale-x-75
                      bg-[#a89058]/60
                      transition-transform
                      duration-500
                      ease-out
                      group-hover:scale-x-100
                    "
                  />
                </span>

                {/* Animated Arrow Circle */}

                <span
                  className="
                    relative
                    flex
                    h-[34px]
                    w-[34px]
                    shrink-0
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-full
                    border
                    border-[#a89058]/60
                    text-[17px]
                    transition-colors
                    duration-500
                    ease-out
                    group-hover:border-[#8f7d4f]
                  "
                >
                  {/* Soft background */}
                  <span
                    className="
                      absolute
                      inset-0
                      rounded-full
                      bg-[#a89058]/15
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  {/* Arrow */}
                  <span
                    className="
                        relative
                        z-10
                        flex
                        items-center
                        justify-center
                        leading-none
                        transition-transform
                        duration-500
                        ease-out
                        group-hover:translate-x-[3px]
                      "
                  >
                    →
                  </span>
                </span>
              </button>
            </div>

            {/* ========================================================
              RIGHT IMAGE COMPOSITION
          ======================================================== */}

            <div
              className="
              relative
              min-h-[560px]
              sm:min-h-[640px]
              lg:min-h-[700px]
              xl:min-h-[760px]
            "
            >
              {/* IMAGE GLOW */}
              <div
                className="
                  paciano-glow
                  absolute
                  left-[6%]
                  top-[8%]
                  h-[82%]
                  w-[90%]
                  blur-[55px]
                "
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(126,105,63,0.16) 0%, rgba(255,255,255,0.03) 50%, transparent 76%)",
                }}
              />

              {/* ======================================================
                ORGANIC / APPLE SHAPED IMAGE FRAME
            ====================================================== */}
              <div className="paciano-image-float absolute inset-0 z-10">
                <svg
                  viewBox="0 0 1100 800"
                  preserveAspectRatio="xMidYMid meet"
                  className="absolute inset-0 z-10 h-full w-full"
                >
                  <defs>
                    {/* MAIN ORGANIC SHAPE */}
                    <clipPath id="pacianoAppleClip">
                      <path
                        d="
                      M150,390

                      C150,285 245,175 370,135

                      C455,108 530,115 610,150

                      C680,181 725,210 805,218

                      C895,226 980,270 1000,350

                      C1022,438 966,535 875,600

                      C790,662 705,705 595,710

                      C485,715 380,692 295,630

                      C215,570 150,490 150,390

                      Z
                    "
                      />
                    </clipPath>

                    <filter id="pacianoImageShadow">
                      <feDropShadow
                        dx="0"
                        dy="20"
                        stdDeviation="22"
                        floodColor="#6d6047"
                        floodOpacity="0.20"
                      />
                    </filter>
                  </defs>

                  {/* CREAM BACKING SHAPE */}
                  <path
                    d="
                  M150,390

                  C150,285 245,175 370,135

                  C455,108 530,115 610,150

                  C680,181 725,210 805,218

                  C895,226 980,270 1000,350

                  C1022,438 966,535 875,600

                  C790,662 705,705 595,710

                  C485,715 380,692 295,630

                  C215,570 150,490 150,390

                  Z
                "
                    fill="#f1eee5"
                    filter="url(#pacianoImageShadow)"
                  />

                  {/* DYNAMIC IMAGE */}
                  <image
                    href={storyImage}
                    x="100"
                    y="85"
                    width="950"
                    height="670"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#pacianoAppleClip)"
                  />

                  {/* SOFT INNER BORDER */}
                  <path
                    d="
                  M150,390

                  C150,285 245,175 370,135

                  C455,108 530,115 610,150

                  C680,181 725,210 805,218

                  C895,226 980,270 1000,350

                  C1022,438 966,535 875,600

                  C790,662 705,705 595,710

                  C485,715 380,692 295,630

                  C215,570 150,490 150,390

                  Z
                "
                    fill="none"
                    stroke="#d6cba9"
                    strokeOpacity="0.28"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              {/* ======================================================
                LEFT BOTANICAL BRANCH
            ====================================================== */}

              <svg
                viewBox="0 0 320 600"
                className="
                pointer-events-none
                absolute
                -left-[3%]
                top-[18%]
                z-20
                h-[66%]
                w-[31%]
                opacity-[0.45]
              "
              >
                <path
                  d="M170 600 C180 480 145 390 205 275 C250 190 205 90 250 0"
                  fill="none"
                  stroke="#9b895e"
                  strokeWidth="1.5"
                />

                <path
                  d="M180 455 C100 420 90 350 175 325"
                  fill="none"
                  stroke="#9b895e"
                  strokeWidth="1"
                />

                <path
                  d="M185 370 C275 340 285 260 200 240"
                  fill="none"
                  stroke="#9b895e"
                  strokeWidth="1"
                />

                <path
                  d="M195 270 C110 235 125 160 215 140"
                  fill="none"
                  stroke="#9b895e"
                  strokeWidth="1"
                />

                <path
                  d="M210 185 C280 150 290 85 245 55"
                  fill="none"
                  stroke="#9b895e"
                  strokeWidth="1"
                />

                <ellipse
                  cx="120"
                  cy="380"
                  rx="30"
                  ry="70"
                  fill="none"
                  stroke="#9b895e"
                  strokeWidth="1"
                  transform="rotate(-38 120 380)"
                />

                <ellipse
                  cx="255"
                  cy="300"
                  rx="28"
                  ry="66"
                  fill="none"
                  stroke="#9b895e"
                  strokeWidth="1"
                  transform="rotate(38 255 300)"
                />

                <ellipse
                  cx="140"
                  cy="210"
                  rx="25"
                  ry="58"
                  fill="none"
                  stroke="#9b895e"
                  strokeWidth="1"
                  transform="rotate(-42 140 210)"
                />
              </svg>

              {/* ======================================================
                RIGHT BOTANICAL BRANCH
            ====================================================== */}

              <svg
                viewBox="0 0 380 650"
                className="
                pointer-events-none
                absolute
                -right-[7%]
                top-[6%]
                z-20
                h-[82%]
                w-[36%]
                opacity-[0.42]
              "
              >
                <path
                  d="M190 650 C205 520 165 425 230 310 C300 195 220 100 270 0"
                  fill="none"
                  stroke="#9b895e"
                  strokeWidth="1.5"
                />

                <path
                  d="M210 500 C305 475 325 405 230 380"
                  fill="none"
                  stroke="#9b895e"
                  strokeWidth="1"
                />

                <path
                  d="M225 400 C115 370 110 290 215 270"
                  fill="none"
                  stroke="#9b895e"
                  strokeWidth="1"
                />

                <path
                  d="M240 290 C335 245 340 160 245 130"
                  fill="none"
                  stroke="#9b895e"
                  strokeWidth="1"
                />

                <path
                  d="M250 190 C330 150 340 80 285 55"
                  fill="none"
                  stroke="#9b895e"
                  strokeWidth="1"
                />

                <ellipse
                  cx="305"
                  cy="425"
                  rx="34"
                  ry="74"
                  fill="none"
                  stroke="#9b895e"
                  strokeWidth="1"
                  transform="rotate(42 305 425)"
                />

                <ellipse
                  cx="125"
                  cy="330"
                  rx="30"
                  ry="68"
                  fill="none"
                  stroke="#9b895e"
                  strokeWidth="1"
                  transform="rotate(-40 125 330)"
                />

                <ellipse
                  cx="305"
                  cy="220"
                  rx="25"
                  ry="60"
                  fill="none"
                  stroke="#9b895e"
                  strokeWidth="1"
                  transform="rotate(42 305 220)"
                />
              </svg>

              {/* ======================================================
                SMALL FLOATING LEAVES — TOP LEFT
            ====================================================== */}

              <div className="paciano-leaf-float pointer-events-none absolute left-[18%] top-[12%] z-30 h-32 w-40">
                <div
                  className="
                  absolute
                  left-1
                  top-3
                  h-7
                  w-4
                  rotate-[-35deg]
                  rounded-[100%_0_100%_0]
                  bg-[#667b3d]
                  opacity-80
                "
                />

                <div
                  className="
                  absolute
                  left-14
                  top-10
                  h-12
                  w-5
                  rotate-[24deg]
                  rounded-[100%_0_100%_0]
                  bg-[#667b3d]
                  opacity-80
                "
                />

                <div
                  className="
                  absolute
                  left-24
                  top-1
                  h-16
                  w-6
                  rotate-[42deg]
                  rounded-[100%_0_100%_0]
                  bg-[#5e7137]
                  opacity-85
                "
                />

                <div
                  className="
                  absolute
                  left-9
                  top-20
                  h-5
                  w-3
                  rotate-[-45deg]
                  rounded-[100%_0_100%_0]
                  bg-[#8b9354]
                "
                />
              </div>

              {/* ======================================================
                FOREGROUND GREEN LEAVES — RIGHT
            ====================================================== */}

              <div
                className="
                paciano-leaf-float-reverse
                pointer-events-none
                absolute
                right-[3%]
                top-[48%]
                z-30
                h-36
                w-32
                rotate-[-10deg]
              "
              >
                <div
                  className="
                  absolute
                  right-10
                  top-0
                  h-24
                  w-10
                  rotate-[30deg]
                  rounded-[100%_0_100%_0]
                  bg-gradient-to-br
                  from-[#8ca92d]
                  via-[#57721e]
                  to-[#304513]
                  shadow-lg
                "
                />

                <div
                  className="
                  absolute
                  right-0
                  top-12
                  h-20
                  w-10
                  rotate-[68deg]
                  rounded-[100%_0_100%_0]
                  bg-gradient-to-br
                  from-[#9db438]
                  via-[#637d21]
                  to-[#354a14]
                  shadow-lg
                "
                />

                <div
                  className="
                  absolute
                  right-[17px]
                  top-[30px]
                  h-20
                  w-8
                  rotate-[2deg]
                  rounded-[100%_0_100%_0]
                  bg-gradient-to-br
                  from-[#718b28]
                  to-[#344d17]
                "
                />

                <div
                  className="
                  absolute
                  right-[36px]
                  top-[48px]
                  h-14
                  w-[6px]
                  rotate-[-18deg]
                  bg-[#4b641d]
                "
                />
              </div>

              {/* ======================================================
                TOP RIGHT CIRCLE DETAIL
            ====================================================== */}

              <div
                className="
                paciano-pulse
                absolute
                right-[8%]
                top-[8%]
                z-30
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                border
                border-[#b89b59]/45
              "
              >
                <span className="h-8 w-px bg-[#b89b59]/45" />
              </div>

              {/* thin decorative curve */}
              <svg
                viewBox="0 0 180 520"
                className="
                pointer-events-none
                absolute
                right-[7%]
                top-[7%]
                z-20
                h-[78%]
                w-[14%]
                opacity-40
              "
              >
                <path
                  d="M80 0 C40 100 100 135 112 210 C125 295 50 350 70 520"
                  fill="none"
                  stroke="#a68d5d"
                  strokeWidth="1.5"
                />

                <path
                  d="M58 120 C145 145 145 225 105 260"
                  fill="none"
                  stroke="#a68d5d"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* ============================================================
          EXACT ORGANIC BOTTOM BLENDING / CURVE
      ============================================================ */}

        <div className="pointer-events-none absolute -bottom-px left-0 z-30 h-[250px] w-full">
          <svg
            viewBox="0 0 1440 250"
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            <path
              d="
              M0,72

              C90,42 185,58 275,92

              C390,136 495,170 620,174

              C745,178 830,128 950,112

              C1080,94 1165,130 1270,145

              C1350,156 1405,142 1440,126

              L1440,250
              L0,250

              Z
            "
              fill="#102017"
            />
          </svg>
        </div>
      </section>
    </>
  );
}

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
        {/* <div className="relative z-20 -mt-[90px]">
          <StoryIntroSection />
        </div> */}
        <AboutUs />
        {/* CHAPTER 03 — STAY */}
        <Accommodation />
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
