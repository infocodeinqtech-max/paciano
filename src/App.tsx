import { useEffect, useRef, useState } from "react";
import bannerImage from "@/images/ChatGPT_Image_Aug_18__2026__01_37_01_PM-1.png";
import pacianoLogo from "@/images/paciano-logo.png";
import storyImage from "@/images/story.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCanadianMapleLeaf } from "@fortawesome/free-brands-svg-icons";
import pacianoMorningAudio from "@/assets/audio/paciano-morning-soothing.mp3";

const NAV_LINKS = [
  "Stay",
  "Experiences",
  "Dining",
  "Wellness",
  "Explore",
  "Gallery",
  "Offers",
];

// ─── Icons ────────────────────────────────────────────────────────────────────

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

function ArrowRight({
  color = "#c9a84c",
  size = 14,
}: {
  color?: string;
  size?: number;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path
        d="M2 7H12M12 7L8 3M12 7L8 11"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CircledArrow({
  color = "#c9a84c",
  size = 28,
}: {
  color?: string;
  size?: number;
}) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full border flex-shrink-0"
      style={{ width: size, height: size, borderColor: color }}
    >
      <ArrowRight color={color} size={size * 0.45} />
    </span>
  );
}

function LinkWithArrow({
  label,
  color = "#c9a84c",
}: {
  label: string;
  color?: string;
}) {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-3 group"
      style={{
        fontFamily: "Cinzel, serif",
        fontSize: "10px",
        letterSpacing: "0.22em",
        color,
      }}
    >
      {label}
      <CircledArrow color={color} size={26} />
    </a>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
      <line
        x1="0"
        y1="1"
        x2="22"
        y2="1"
        stroke="#f5f0e8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="0"
        y1="8"
        x2="16"
        y2="8"
        stroke="#f5f0e8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="0"
        y1="15"
        x2="22"
        y2="15"
        stroke="#f5f0e8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ScrollIcon() {
  return (
    <svg width="22" height="36" viewBox="0 0 22 36" fill="none">
      <rect
        x="1"
        y="1"
        width="20"
        height="34"
        rx="10"
        stroke="rgba(245,240,232,0.6)"
        strokeWidth="1.5"
      />
      <rect
        x="9"
        y="7"
        width="4"
        height="8"
        rx="2"
        fill="rgba(201,168,76,0.8)"
      />
    </svg>
  );
}

// Decorative botanical leaf SVG for the About section background
function BotanicalLeaf({
  className = "",
  style = {},
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg viewBox="0 0 80 140" fill="none" className={className} style={style}>
      <path
        d="M40 135 C40 135 5 100 5 65 C5 32 20 8 40 5 C60 8 75 32 75 65 C75 100 40 135 40 135Z"
        stroke="#8a7a52"
        strokeWidth="0.8"
        fill="none"
        opacity="0.35"
      />
      <path
        d="M40 5 C40 5 35 45 40 85 C40 85 45 45 40 5Z"
        stroke="#8a7a52"
        strokeWidth="0.7"
        fill="none"
        opacity="0.35"
      />
      <path
        d="M40 30 C30 25 10 35 8 50"
        stroke="#8a7a52"
        strokeWidth="0.6"
        fill="none"
        opacity="0.25"
      />
      <path
        d="M40 50 C27 44 8 55 7 72"
        stroke="#8a7a52"
        strokeWidth="0.6"
        fill="none"
        opacity="0.25"
      />
      <path
        d="M40 70 C28 65 8 76 8 93"
        stroke="#8a7a52"
        strokeWidth="0.6"
        fill="none"
        opacity="0.25"
      />
      <path
        d="M40 30 C50 25 70 35 72 50"
        stroke="#8a7a52"
        strokeWidth="0.6"
        fill="none"
        opacity="0.25"
      />
      <path
        d="M40 50 C53 44 72 55 73 72"
        stroke="#8a7a52"
        strokeWidth="0.6"
        fill="none"
        opacity="0.25"
      />
    </svg>
  );
}

function SmallLeaf({
  className = "",
  style = {},
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg viewBox="0 0 40 60" fill="none" className={className} style={style}>
      <path
        d="M20 58 C20 58 3 42 3 28 C3 14 10 3 20 2 C30 3 37 14 37 28 C37 42 20 58 20 58Z"
        stroke="#8a7a52"
        strokeWidth="0.8"
        fill="none"
        opacity="0.3"
      />
      <path
        d="M20 2 C20 2 17 25 20 48"
        stroke="#8a7a52"
        strokeWidth="0.7"
        fill="none"
        opacity="0.3"
      />
    </svg>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar({ scrolled }: { scrolled: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-[100]
        transition-all duration-700 ease-out
        ${
          scrolled
            ? "bg-[#0b120a]/80 backdrop-blur-2xl border-b border-[#c9a84c]/10 shadow-[0_12px_50px_rgba(0,0,0,0.18)]"
            : "bg-gradient-to-b from-[#071007]/70 via-[#071007]/30 to-transparent"
        }
      `}
    >
      <div className="mx-auto max-w-[1600px] px-5 lg:px-10 xl:px-14">
        <div
          className={`
            flex items-center justify-between
            transition-all duration-700 ease-out
            ${scrolled ? "h-[82px] lg:h-[86px]" : "h-[105px] lg:h-[115px]"}
          `}
        >
          {/* PACIANO LOGO */}
          <a
            href="#"
            className="
              relative z-[110]
              flex items-center
              flex-shrink-0
            "
          >
            <div
              className={`
                transition-all duration-700 ease-out
                ${
                  scrolled ? "w-[120px] lg:w-[140px]" : "w-[145px] lg:w-[175px]"
                }
              `}
            >
              <img
                src={pacianoLogo}
                alt="Paciano North Bengal"
                className="
                  block
                  h-auto
                  w-full
                  max-h-[72px]
                  lg:max-h-[88px]
                  object-contain
                "
                style={{
                  filter: "drop-shadow(0 6px 18px rgba(0,0,0,0.45))",
                }}
              />
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-10 ml-auto mr-8 xl:mr-12">
            {[
              "STAY",
              "EXPERIENCES",
              "DINING",
              "WELLNESS",
              "EXPLORE",
              "GALLERY",
              "OFFERS",
            ].map((item) => (
              <button
                key={item}
                className="
                  group
                  relative
                  text-[9px]
                  xl:text-[10px]
                  tracking-[0.18em]
                  text-white/75
                  transition-colors
                  duration-500
                  hover:text-[#d7b85c]
                "
              >
                {item}

                <span
                  className="
                    absolute
                    left-1/2
                    -bottom-2
                    h-px
                    w-0
                    -translate-x-1/2
                    bg-[#c9a84c]
                    transition-all
                    duration-500
                    group-hover:w-6
                  "
                />
              </button>
            ))}
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-4 lg:gap-5">
            <button
              className="
                hidden md:block
                rounded-full
                border border-white/25
                px-6 py-3
                text-[9px]
                tracking-[0.2em]
                text-white/90
                transition-all
                duration-500
                hover:border-[#c9a84c]
                hover:bg-[#c9a84c]
                hover:text-[#0b120a]
              "
            >
              BOOK YOUR STAY
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="
                flex
                h-10 w-10
                items-center
                justify-center
                rounded-full
                border border-white/20
                transition-all
                duration-500
                hover:border-[#c9a84c]
              "
              aria-label="Menu"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function PacianoOpening({ opened }: { opened: boolean }) {
  return (
    <div
      className={`paciano-opening ${opened ? "paciano-opening--opened" : ""}`}
    >
      {/* Soft cinematic overlay */}
      <div className="paciano-opening-wash" />

      {/* Logo */}
      <div className="paciano-logo-curtain">
        {/* LEFT HALF */}
        <div className="paciano-curtain-half paciano-curtain-left">
          <img src={pacianoLogo} alt="Paciano" />
        </div>

        {/* RIGHT HALF */}
        <div className="paciano-curtain-half paciano-curtain-right">
          <img src={pacianoLogo} alt="" />
        </div>
      </div>

      {/* Warm light behind logo */}
      <div className="paciano-opening-glow" />
    </div>
  );
}
function AmbientSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [soundOn, setSoundOn] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const startSound = async () => {
    const audio = audioRef.current;

    if (!audio || hasStarted) return;

    try {
      audio.volume = 0.14;
      audio.muted = false;

      await audio.play();

      setSoundOn(true);
      setHasStarted(true);

      console.log("🌿 PACIANO MORNING AMBIENCE STARTED");
    } catch (error) {
      console.log("Browser blocked autoplay:", error);
    }
  };

  const toggleSound = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      if (audio.paused) {
        audio.volume = 0.14;
        audio.muted = false;

        await audio.play();

        setSoundOn(true);
        setHasStarted(true);
      } else {
        audio.pause();
        setSoundOn(false);
      }
    } catch (error) {
      console.error("Audio error:", error);
    }
  };

  useEffect(() => {
    const handleFirstInteraction = () => {
      startSound();
    };

    window.addEventListener("click", handleFirstInteraction, {
      once: true,
    });

    window.addEventListener("touchstart", handleFirstInteraction, {
      once: true,
    });

    window.addEventListener("keydown", handleFirstInteraction, {
      once: true,
    });

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };
  }, [hasStarted]);

  return (
    <>
      <audio ref={audioRef} src={pacianoMorningAudio} preload="auto" loop />

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          toggleSound();
        }}
        aria-label={
          soundOn ? "Turn ambient sound off" : "Turn ambient sound on"
        }
        className="
          fixed
          bottom-7
          right-7
          z-[999999]
          pointer-events-auto

          flex
          h-12
          w-12
          items-center
          justify-center

          rounded-full
          border
          border-white/30

          bg-black/35
          backdrop-blur-xl

          shadow-[0_8px_30px_rgba(0,0,0,0.25)]

          transition-all
          duration-500

          hover:scale-105
          hover:border-[#c9a84c]
          hover:bg-black/50

          active:scale-95
        "
      >
        <span className="relative flex items-center justify-center">
          {soundOn && (
            <>
              <span
                className="
                  absolute
                  h-7
                  w-7
                  rounded-full
                  border
                  border-[#c9a84c]/40
                  animate-ping
                "
              />

              <span
                className="
                  absolute
                  h-9
                  w-9
                  rounded-full
                  border
                  border-[#c9a84c]/15
                  animate-pulse
                "
              />
            </>
          )}

          <span className="relative z-10 flex items-center gap-[3px]">
            <span
              className={`
                w-[2px]
                rounded-full
                bg-[#d7b85c]
                transition-all duration-300
                ${soundOn ? "h-3 animate-pulse" : "h-1.5"}
              `}
            />

            <span
              className={`
                w-[2px]
                rounded-full
                bg-[#d7b85c]
                transition-all duration-300
                ${soundOn ? "h-5 animate-pulse" : "h-2"}
              `}
            />

            <span
              className={`
                w-[2px]
                rounded-full
                bg-[#d7b85c]
                transition-all duration-300
                ${soundOn ? "h-3.5 animate-pulse" : "h-1.5"}
              `}
            />

            <span
              className={`
                w-[2px]
                rounded-full
                bg-[#d7b85c]
                transition-all duration-300
                ${soundOn ? "h-2.5 animate-pulse" : "h-1"}
              `}
            />
          </span>
        </span>
      </button>
    </>
  );
}

function HeroSection() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpened(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center">
      <PacianoOpening opened={opened} />

      <AmbientSound />
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={bannerImage}
          alt="Paciano resort beside a golden river"
          className={`
            paciano-hero-image
            absolute inset-0
            h-full w-full
            object-cover
            ${opened ? "paciano-hero-image--active" : ""}
          `}
          style={{
            objectPosition: "30% center",
          }}
        />

        {/* DARK OVERLAY */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(4,12,8,0.72) 0%, rgba(4,12,8,0.42) 38%, rgba(4,12,8,0.08) 70%, rgba(4,12,8,0.15) 100%)",
          }}
        />

        {/* FLOATING MIST */}
        <div
          // className="
          //   absolute
          //   left-[-15%]
          //   bottom-[8%]
          //   h-[38%]
          //   w-[130%]
          //   pointer-events-none
          //   animate-mist
          //   blur-3xl
          // "
          className="
            absolute
            left-[-15%]
            bottom-[8%]
            h-[38%]
            w-[130%]
            pointer-events-none
            paciano-morning-mist
            blur-3xl
          "
          style={{
            // background:
            // "radial-gradient(ellipse at center, rgba(235,240,225,0.28) 0%, rgba(210,220,205,0.12) 35%, transparent 70%)",
            background:
              "radial-gradient(ellipse at center, rgba(235,240,225,0.22) 0%, rgba(210,220,205,0.08) 35%, transparent 70%)",
          }}
        />

        {/* GOLDEN LIGHT */}
        <div
          // className="
          //   absolute
          //   top-[-20%]
          //   left-[20%]
          //   h-[80%]
          //   w-[55%]
          //   pointer-events-none
          //   animate-golden-glow
          //   blur-3xl
          // "
          className="
    absolute
    top-[-20%]
    left-[20%]
    h-[80%]
    w-[55%]
    pointer-events-none
    paciano-sun-glow
    blur-3xl
  "
          style={{
            // background:
            //   "radial-gradient(ellipse, rgba(230,178,82,0.20) 0%, rgba(230,178,82,0.06) 40%, transparent 70%)",
            background:
              "radial-gradient(ellipse, rgba(230,178,82,0.20) 0%, rgba(230,178,82,0.06) 40%, transparent 70%)",
          }}
        />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-20">{/* your existing hero content */}</div>

      {/* ORGANIC HERO → STORY TRANSITION */}
      <div className="absolute bottom-[-1px] left-0 z-30 h-[180px] w-full pointer-events-none">
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path
            d="
              M0,55
              C120,120 260,145 430,105
              C590,68 650,18 820,42
              C1010,68 1090,145 1240,105
              C1330,80 1390,45 1440,55
              L1440,180
              L0,180
              Z
            "
            fill="#ece6d8"
          />
        </svg>
      </div>
    </section>
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

function AboutSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#ece6d8" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 pt-16 pb-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left — text */}
          <div className="relative z-10 lg:pl-8 flex flex-col items-start lg:items-start">
            {/* Botanical decoration — top left */}
            <BotanicalLeaf className="absolute -left-12 -top-16 w-24 opacity-60 hidden lg:block" />
            <SmallLeaf className="absolute right-0 top-8 w-10 opacity-40 hidden lg:block" />

            {/* Gold leaf ornament */}
            <div className="mb-5">
              <LeafIcon size={22} color="#b8923e" />
            </div>

            <h2
              className="text-[#1e2a18] leading-[1.1] mb-6 font-semibold"
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "clamp(2rem,3.8vw,3.4rem)",
                letterSpacing: "0.04em",
              }}
            >
              A RETREAT
              <br />
              BEYOND ORDINARY
            </h2>

            <p
              className="text-[#4a5742] text-[14px] leading-[2] max-w-[380px] font-light mb-8"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Wake up to the melody of birds, breathe in the fresh mountain air
              and let nature slow everything down. At Paciano, every moment is
              crafted to help you reconnect, rejuvenate and retreat.
            </p>

            <LinkWithArrow label="ABOUT PACIANO" color="#b8923e" />
          </div>

          {/* Right — organic blob image */}
          <div className="relative flex justify-center lg:justify-end items-center py-12 lg:py-16">
            {/* Scattered leaf decorations */}
            <SmallLeaf className="absolute top-4 right-8 w-12 opacity-50" />
            <SmallLeaf
              className="absolute bottom-8 left-4 w-8 opacity-40"
              style={{ transform: "rotate(45deg)" }}
            />
            <BotanicalLeaf
              className="absolute -right-6 bottom-0 w-20 opacity-40 hidden lg:block"
              style={{ transform: "rotate(20deg)" }}
            />

            {/* Gold ring outer blob */}
            <div
              className="relative"
              style={{
                width: "clamp(300px,38vw,500px)",
                height: "clamp(300px,38vw,500px)",
                borderRadius: "58% 42% 64% 36% / 46% 60% 40% 54%",
                padding: "3px",
                background:
                  "linear-gradient(135deg, rgba(201,168,76,0.7) 0%, rgba(180,145,62,0.35) 50%, rgba(201,168,76,0.6) 100%)",
              }}
            >
              {/* Inner image blob */}
              <div
                className="w-full h-full overflow-hidden"
                style={{ borderRadius: "58% 42% 64% 36% / 46% 60% 40% 54%" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1544148103-0773bf10d330?w=700&h=700&fit=crop&auto=format"
                  alt="Poolside refreshment at Paciano resort with nature view"
                  className="w-full h-full object-cover"
                  style={{ filter: "saturate(0.95) brightness(0.92)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom — dark S-curve into Stay section */}
      <div
        className="relative z-10 pointer-events-none"
        style={{ marginTop: "-2px" }}
      >
        <svg
          viewBox="0 0 1440 110"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "110px", display: "block" }}
        >
          <path
            d="M0,32 C180,100 460,10 780,58 C1020,92 1270,18 1440,52 L1440,110 L0,110 Z"
            fill="#0d1a0b"
          />
        </svg>
      </div>
    </section>
  );
}

// ─── Stay Section ─────────────────────────────────────────────────────────────

const ROOMS = [
  {
    name: "LUXURY ROOM",
    desc: "Comfortable rooms with beautiful views.",
    img: "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?w=320&h=320&fit=crop&auto=format",
  },
  {
    name: "PREMIUM SUITE",
    desc: "Spacious suites for your perfect getaway.",
    img: "https://images.unsplash.com/photo-1578898886225-c7c894047899?w=320&h=320&fit=crop&auto=format",
  },
  {
    name: "RIVER VIEW VILLA",
    desc: "Wake up to the river and the mountains.",
    img: "https://images.unsplash.com/photo-1771967141939-67a88346b61f?w=320&h=320&fit=crop&auto=format",
  },
  {
    name: "GARDEN VILLA",
    desc: "Stay amidst greenery and peaceful surroundings.",
    img: "https://images.unsplash.com/photo-1693934304978-22274e6a3276?w=320&h=320&fit=crop&auto=format",
  },
];

function StaySection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#0d1a0b" }}
    >
      {/* Dark atmospheric background */}
      <div
        className="absolute inset-0 opacity-35"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(30,50,20,0.8) 0%, rgba(5,12,4,0.95) 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16 pt-6 pb-20">
        <div className="grid lg:grid-cols-[320px_1fr] gap-12 lg:gap-16 items-start">
          {/* Left — text */}
          <div className="flex flex-col items-start pt-8">
            <div className="mb-5">
              <LeafIcon size={20} color="#c9a84c" />
            </div>
            <h2
              className="text-[#f5f0e8] leading-[1.1] mb-4 font-semibold"
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "clamp(1.8rem,3vw,2.8rem)",
                letterSpacing: "0.06em",
              }}
            >
              STAY WITH US
            </h2>
            <p
              className="text-[rgba(245,240,232,0.55)] text-[13px] leading-[1.9] mb-8 font-light"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Elegant stays with scenic views and unmatched comfort.
            </p>
            <LinkWithArrow label="EXPLORE ROOMS" color="#c9a84c" />
          </div>

          {/* Right — room circles grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {ROOMS.map((room) => (
              <div
                key={room.name}
                className="flex flex-col items-center gap-4 group cursor-pointer"
              >
                {/* Circle image */}
                <div
                  className="relative flex-shrink-0"
                  style={{
                    width: "clamp(130px,14vw,180px)",
                    height: "clamp(130px,14vw,180px)",
                    borderRadius: "50%",
                    padding: "2.5px",
                    background:
                      "linear-gradient(135deg, rgba(201,168,76,0.6), rgba(180,145,62,0.25) 50%, rgba(201,168,76,0.5))",
                  }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src={room.img}
                      alt={room.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      style={{ filter: "brightness(0.82) saturate(0.9)" }}
                    />
                  </div>
                </div>

                {/* Room info */}
                <div className="flex flex-col items-center gap-2 text-center">
                  <span
                    className="text-[#f5f0e8] tracking-[0.18em] text-[10px] font-medium"
                    style={{ fontFamily: "Cinzel, serif" }}
                  >
                    {room.name}
                  </span>
                  <p
                    className="text-[rgba(245,240,232,0.48)] text-[11.5px] leading-[1.7] max-w-[140px]"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                  >
                    {room.desc}
                  </p>
                  <button
                    className="mt-1 w-7 h-7 rounded-full border border-[rgba(201,168,76,0.45)] flex items-center justify-center hover:bg-[#c9a84c] hover:border-[#c9a84c] transition-all duration-300 group/btn"
                    aria-label={`Explore ${room.name}`}
                  >
                    <ArrowRight color="rgba(201,168,76,0.8)" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Experience Icons ─────────────────────────────────────────────────────────

function TeaLeafIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path
        d="M24 6C24 6 8 14 8 26C8 34 14.5 40 24 40C33.5 40 40 34 40 26C40 14 24 6 24 6Z"
        stroke="#c9a84c"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M24 6C24 6 20 20 24 34"
        stroke="#c9a84c"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M24 16C18 14 10 18 9 24"
        stroke="#c9a84c"
        strokeWidth="0.8"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M24 24C18 22 10 26 9 32"
        stroke="#c9a84c"
        strokeWidth="0.8"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M24 16C30 14 38 18 39 24"
        stroke="#c9a84c"
        strokeWidth="0.8"
        fill="none"
        opacity="0.7"
      />
    </svg>
  );
}

function RiverIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path
        d="M6 18C14 14 22 22 30 18C38 14 42 20 42 20"
        stroke="#c9a84c"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M6 26C14 22 22 30 30 26C38 22 42 28 42 28"
        stroke="#c9a84c"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M6 34C14 30 22 38 30 34C38 30 42 36 42 36"
        stroke="#c9a84c"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CampfireIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path
        d="M24 8C24 8 14 18 14 28C14 34 18.5 38 24 38C29.5 38 34 34 34 28C34 18 24 8 24 8Z"
        stroke="#c9a84c"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M24 22C24 22 20 26 20 30C20 32.2 21.8 34 24 34C26.2 34 28 32.2 28 30C28 26 24 22 24 22Z"
        stroke="#c9a84c"
        strokeWidth="1"
        fill="none"
      />
      <line
        x1="16"
        y1="40"
        x2="32"
        y2="40"
        stroke="#c9a84c"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <line
        x1="18"
        y1="42"
        x2="30"
        y2="42"
        stroke="#c9a84c"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle
        cx="24"
        cy="24"
        r="16"
        stroke="#c9a84c"
        strokeWidth="1.2"
        fill="none"
      />
      <circle cx="24" cy="24" r="2" fill="#c9a84c" />
      <path
        d="M24 12L26 24L24 36L22 24Z"
        stroke="#c9a84c"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M12 24L24 22L36 24L24 26Z"
        stroke="#c9a84c"
        strokeWidth="1"
        fill="none"
      />
      <text
        x="24"
        y="10"
        textAnchor="middle"
        fill="#c9a84c"
        fontSize="5"
        fontFamily="Cinzel, serif"
      >
        N
      </text>
    </svg>
  );
}

const EXPERIENCES = [
  {
    icon: TeaLeafIcon,
    title: "TEA GARDEN TRAILS",
    desc: "Walk through lush tea estates and breathe in the aroma of fresh leaves.",
  },
  {
    icon: RiverIcon,
    title: "RIVERSIDE EXPERIENCES",
    desc: "Kayaking, riverside picnics and serene moments by the water.",
  },
  {
    icon: CampfireIcon,
    title: "NATURE & ADVENTURE",
    desc: "Trekking, birdwatching and bonfire evenings under starlit skies.",
  },
  {
    icon: CompassIcon,
    title: "LOCAL EXPLORATION",
    desc: "Discover hidden gems, local culture and artisan villages nearby.",
  },
];

// ─── Experiences Section ──────────────────────────────────────────────────────

function ExperiencesSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Misty river background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop&auto=format"
          alt="Misty river valley with lush green mountains"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.45) saturate(0.85)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8,14,6,0.75) 0%, rgba(8,14,6,0.55) 50%, rgba(8,14,6,0.8) 100%)",
          }}
        />
      </div>

      {/* Wave top */}
      <div className="relative z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "90px", display: "block" }}
        >
          <path
            d="M0,90 L0,45 C200,85 480,5 760,50 C1020,88 1270,15 1440,55 L1440,90 Z"
            fill="#0d1a0b"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16 py-16 lg:py-24">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14 lg:mb-20">
          <div className="mb-4">
            {/* <LeafIcon size={20} color="#c9a84c" /> */}
          </div>
          <h2
            className="text-[#c9a84c] font-semibold tracking-[0.12em] mb-4"
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(1.8rem,3vw,2.6rem)",
            }}
          >
            EXPERIENCES
          </h2>
          <p
            className="text-[rgba(245,240,232,0.55)] text-[13px] max-w-[420px] font-light leading-[1.9]"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Immerse yourself in the natural beauty and rich culture of North
            Bengal.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
          {EXPERIENCES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center gap-5 group"
            >
              <div className="mb-1 transition-transform duration-300 group-hover:scale-110">
                <Icon />
              </div>
              <h3
                className="text-[#f5f0e8] tracking-[0.16em] text-[10px] font-medium"
                style={{ fontFamily: "Cinzel, serif" }}
              >
                {title}
              </h3>
              <p
                className="text-[rgba(245,240,232,0.48)] text-[12px] leading-[1.8] max-w-[220px] font-light"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <LinkWithArrow label="VIEW ALL EXPERIENCES" color="#c9a84c" />
        </div>
      </div>

      {/* Wave bottom */}
      <div
        className="relative z-10 pointer-events-none"
        style={{ marginTop: "-2px" }}
      >
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "90px", display: "block" }}
        >
          <path
            d="M0,35 C220,95 520,5 820,55 C1080,90 1280,20 1440,60 L1440,90 L0,90 Z"
            fill="#0d1a0b"
          />
        </svg>
      </div>
    </section>
  );
}

// ─── Dining & Wellness Section ────────────────────────────────────────────────

function DiningWellnessSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#0d1a0b" }}
    >
      <div className="grid lg:grid-cols-2 min-h-[520px]">
        {/* Dining — left */}
        <div className="relative flex items-center overflow-hidden min-h-[400px] lg:min-h-[520px]">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&h=700&fit=crop&auto=format"
            alt="Fine dining with candlelit table overlooking the river at dusk"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "brightness(0.55) saturate(0.9)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(8,14,6,0.72) 0%, rgba(8,14,6,0.35) 100%)",
            }}
          />

          <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-20 max-w-[480px]">
            <p
              className="text-[#c9a84c] tracking-[0.28em] text-[10px] font-medium mb-4 uppercase"
              style={{ fontFamily: "Cinzel, serif" }}
            >
              FINE DINING
            </p>
            <h2
              className="text-[#f5f0e8] leading-[1.15] mb-5 font-semibold"
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "clamp(1.6rem,2.8vw,2.4rem)",
              }}
            >
              Fine Dining,
              <br />
              Beautiful Evenings
            </h2>
            <p
              className="text-[rgba(245,240,232,0.55)] text-[13px] leading-[1.9] mb-8 font-light"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Savour curated menus crafted from local ingredients, paired with
              stunning riverside views and warm hospitality.
            </p>
            <LinkWithArrow label="EXPLORE DINING" color="#c9a84c" />
          </div>
        </div>

        {/* Wellness — right */}
        <div className="relative flex items-center overflow-hidden min-h-[400px] lg:min-h-[520px]">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=900&h=700&fit=crop&auto=format"
            alt="Luxurious indoor infinity pool at night for wellness and relaxation"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "brightness(0.5) saturate(0.85)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(225deg, rgba(8,14,6,0.72) 0%, rgba(8,14,6,0.35) 100%)",
            }}
          />

          <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-20 max-w-[480px] lg:ml-auto">
            <p
              className="text-[#c9a84c] tracking-[0.28em] text-[10px] font-medium mb-4 uppercase"
              style={{ fontFamily: "Cinzel, serif" }}
            >
              WELLNESS &amp; RELAXATION
            </p>
            <h2
              className="text-[#f5f0e8] leading-[1.15] mb-5 font-semibold"
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "clamp(1.6rem,2.8vw,2.4rem)",
              }}
            >
              Relax. Refresh.
              <br />
              Rejuvenate.
            </h2>
            <p
              className="text-[rgba(245,240,232,0.55)] text-[13px] leading-[1.9] mb-8 font-light"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Unwind in our spa sanctuary with therapeutic treatments, yoga
              sessions and a serene pool overlooking the valley.
            </p>
            <LinkWithArrow label="EXPLORE WELLNESS" color="#c9a84c" />
          </div>
        </div>
      </div>

      {/* Vertical S-curve divider (desktop only) */}
      <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none w-16">
        <svg
          viewBox="0 0 64 520"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M32,0 C32,0 0,130 32,260 C64,390 32,520 32,520 L64,520 L64,0 Z"
            fill="#0d1a0b"
            opacity="0.15"
          />
          <path
            d="M32,0 C32,0 64,130 32,260 C0,390 32,520 32,520"
            stroke="#c9a84c"
            strokeWidth="0.8"
            fill="none"
            opacity="0.35"
          />
        </svg>
      </div>
    </section>
  );
}

// ─── Footer CTA Section ───────────────────────────────────────────────────────

function EscapeCTASection() {
  return (
    <section className="relative overflow-hidden min-h-[480px] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&h=800&fit=crop&auto=format"
          alt="Paciano resort illuminated with warm lights at night"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.42) saturate(0.9)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(6,10,5,0.85) 0%, rgba(6,10,5,0.45) 50%, rgba(6,10,5,0.65) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16 py-24 lg:py-32 w-full">
        <div className="flex flex-col items-center text-center max-w-[600px] mx-auto">
          <div className="mb-6">
            {/* <LeafIcon size={24} color="#c9a84c" /> */}
          </div>
          <h2
            className="text-[#f5f0e8] leading-[1.1] mb-5 font-semibold tracking-[0.04em]"
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(2rem,4vw,3.2rem)",
            }}
          >
            YOUR ESCAPE AWAITS
          </h2>
          <p
            className="text-[rgba(245,240,232,0.55)] text-[14px] leading-[1.9] mb-10 font-light max-w-[440px]"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Leave behind the ordinary and discover the extraordinary at Paciano.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-4 px-10 py-4 rounded-sm bg-[#c9a84c] text-[#0b120a] hover:bg-[#d4b85a] transition-all duration-300 group"
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: "10px",
              letterSpacing: "0.22em",
              fontWeight: 600,
            }}
          >
            PLAN YOUR STAY
            <CircledArrow color="#0b120a" size={30} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

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
          <StoryIntroSection />
        </div>

        {/* CHAPTER 03 — STAY */}
        {/* <ImmersiveStaySection /> */}

        {/* CHAPTER 04 — THE RIVER */}
        {/* <RiverJourneySection /> */}

        {/* CHAPTER 05 — EXPERIENCES */}
        <ExperiencesSection />

        {/* CHAPTER 06 — INDULGENCE */}
        {/* <IndulgenceSection /> */}

        {/* CHAPTER 07 — NIGHTFALL */}
        {/* <NightfallSection /> */}

        {/* FINAL CHAPTER — YOUR ESCAPE */}
        <EscapeCTASection />
      </main>
    </>
  );
}
