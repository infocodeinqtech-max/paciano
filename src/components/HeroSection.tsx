import { useEffect, useRef, useState } from "react";

import bannerImage from "@/images/hero4.png";
import pacianoLogo from "@/images/paciano-logo.png";
import pacianoMorningAudio from "@/assets/audio/paciano-morning-soothing.mp3";

export default function HeroSection() {
  /* =========================================================
     REFS
  ========================================================= */

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const imageRef = useRef<HTMLImageElement | null>(null);

  const sunriseRef = useRef<HTMLDivElement | null>(null);

  const atmosphereRef = useRef<HTMLDivElement | null>(null);

  const heroContentRef = useRef<HTMLDivElement | null>(null);

  const logoStageRef = useRef<HTMLDivElement | null>(null);

  const logoGlowRef = useRef<HTMLDivElement | null>(null);

  const soundBarsRef = useRef<HTMLSpanElement[]>([]);

  const animationFrameRef = useRef<number | null>(null);

  const isPlayingRef = useRef(false);

  const [isPlaying, setIsPlaying] = useState(false);

  const introOverlayRef = useRef<HTMLDivElement | null>(null);
  const introLeftRef = useRef<HTMLDivElement | null>(null);
  const introRightRef = useRef<HTMLDivElement | null>(null);
  const introBeamRef = useRef<HTMLDivElement | null>(null);
  const introCardRef = useRef<HTMLDivElement | null>(null);
  
  const logoLeftRef = useRef<HTMLDivElement | null>(null);
  const logoRightRef = useRef<HTMLDivElement | null>(null);

  /* =========================================================
     HELPERS
  ========================================================= */

  const clamp = (value: number, min = 0, max = 1) =>
    Math.min(Math.max(value, min), max);

  const easeOutCubic = (value: number) => {
    const t = clamp(value);

    return 1 - Math.pow(1 - t, 3);
  };

  const easeInOutCubic = (value: number) => {
    const t = clamp(value);

    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const easeInOutQuart = (value: number) => {
    const t = clamp(value);

    return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
  };

  /* =========================================================
     AUDIO
  ========================================================= */

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.32;

    const startAudio = async () => {
      try {
        await audio.play();

        isPlayingRef.current = true;

        setIsPlaying(true);

        removeInteractionListeners();
      } catch {
        /*
            Browser autoplay policy can
            block audible autoplay.

            This is not a code failure.
          */

        isPlayingRef.current = false;

        setIsPlaying(false);
      }
    };

    const handleInteraction = () => {
      startAudio();
    };

    const removeInteractionListeners = () => {
      window.removeEventListener("pointerdown", handleInteraction);

      window.removeEventListener("touchstart", handleInteraction);

      window.removeEventListener("keydown", handleInteraction);

      window.removeEventListener("wheel", handleInteraction);
    };

    /*
      Try immediately on page load.
    */

    startAudio();

    /*
      Fallback when browser blocks
      audible autoplay.
    */

    window.addEventListener("pointerdown", handleInteraction, {
      once: true,
      passive: true,
    });

    window.addEventListener("touchstart", handleInteraction, {
      once: true,
      passive: true,
    });

    window.addEventListener("keydown", handleInteraction, {
      once: true,
    });

    window.addEventListener("wheel", handleInteraction, {
      once: true,
      passive: true,
    });

    return () => {
      removeInteractionListeners();
    };
  }, []);

  /* =========================================================
     AUDIO CONTROL
  ========================================================= */

  const toggleAudio = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlayingRef.current) {
      audio.pause();

      isPlayingRef.current = false;

      setIsPlaying(false);

      return;
    }

    try {
      await audio.play();

      isPlayingRef.current = true;

      setIsPlaying(true);
    } catch {
      isPlayingRef.current = false;

      setIsPlaying(false);
    }
  };

  /* =========================================================
     MASTER CINEMATIC SHOT

     0.0 - 0.6
       Dark cinematic landscape + subtle botanical shadows

     0.6 - 1.1
       Full coloured Paciano logo appears

     0.85 - 1.5
       Golden centre sun beam appears

     1.7 - 3.0
       Actual Paciano logo splits into two halves

     2.1 - 3.6
       Dark overlay doors open from the centre

     2.5 - 3.7
       Landscape sharpens

     2.4 - 3.3
       Logo halves fade into the revealed landscape

     4.0 - 5.0
       Hero copy appears

     5.0+
       Normal hero
  ========================================================= */

  useEffect(() => {
    const image = imageRef.current;
    const sunrise = sunriseRef.current;
    const atmosphere = atmosphereRef.current;
    const content = heroContentRef.current;
    const logoStage = logoStageRef.current;
    const logoGlow = logoGlowRef.current;
    const logoLeft = logoLeftRef.current;
    const logoRight = logoRightRef.current;
    const introOverlay = introOverlayRef.current;
    const introLeft = introLeftRef.current;
    const introRight = introRightRef.current;
    const introBeam = introBeamRef.current;
    const introCard = introCardRef.current;

    if (
      !image ||
      !sunrise ||
      !atmosphere ||
      !content ||
      !logoStage ||
      !logoGlow ||
      !logoLeft ||
      !logoRight ||
      !introOverlay ||
      !introLeft ||
      !introRight ||
      !introBeam ||
      !introCard
    ) {
      return;
    }

    const startTime = performance.now();

    /*
      STORYBOARD-LOCKED TIMELINE

      0.0–0.6   dark opening + A PLACE TO BELONG
      0.6–1.2   actual coloured Paciano logo appears
      1.2–1.8   thin top-centre light illuminates the logo
      1.8–2.4   logo splits
      2.4–3.0   logo halves move apart
      3.0–3.8   two dark doors open and landscape is revealed
      3.8–4.6   hero typography appears
      4.6–5.2   cinematic atmosphere softly clears
      5.2+      hero remains alive with continuous camera motion
    */

    const animate = (time: number) => {
      const elapsed = time - startTime;

      /* ---------------------------------------------------------
         BANNER CAMERA
         Continuous, very slow drift. This is independent of the
         intro transition and therefore never "stops" after load.
      --------------------------------------------------------- */

      const motionCycle = 26000;
      const phase = (elapsed % motionCycle) / motionCycle;
      const s = Math.sin(phase * Math.PI * 2);

      const cameraScale = 1.075 + (s + 1) * 0.010;
      const cameraX = s * 0.38;
      const cameraY = Math.cos(phase * Math.PI * 2) * 0.22;

      image.style.transform = `
        translate3d(${cameraX}%, ${cameraY}%, 0)
        scale(${cameraScale})
      `;

      /* ---------------------------------------------------------
         PHOTO RESOLVE
      --------------------------------------------------------- */

      const resolve = easeInOutCubic((elapsed - 2100) / 1700);
      const blur = 1.7 * (1 - resolve);

      image.style.filter = `
        blur(${blur}px)
        brightness(${0.78 + clamp(resolve) * 0.22})
        saturate(${0.92 + clamp(resolve) * 0.08})
        contrast(${1.02 + clamp(resolve) * 0.03})
      `;

      /* ---------------------------------------------------------
         1. A PLACE TO BELONG
         Present only during the dark opening.
      --------------------------------------------------------- */

      const titleIn = easeOutCubic(elapsed / 380);
      const titleOut = easeInOutCubic((elapsed - 470) / 190);
      const titleOpacity =
        elapsed < 470
          ? clamp(titleIn)
          : 1 - clamp(titleOut);

      introCard.style.opacity = `${titleOpacity}`;
      introCard.style.transform = `
        translate3d(0, ${8 - titleOpacity * 8}px, 0)
      `;

      /* ---------------------------------------------------------
         2. PACIANO LOGO APPEARS
      --------------------------------------------------------- */

      const logoIn = easeOutCubic((elapsed - 600) / 600);
      const logoReveal = clamp(logoIn);

      logoStage.style.opacity = `${logoReveal}`;
      logoStage.style.transform = `
        translate3d(
          0,
          ${12 - logoReveal * 12}px,
          0
        )
        scale(${0.92 + logoReveal * 0.08})
      `;

      /* ---------------------------------------------------------
         3. SOFT GREEN HALO
      --------------------------------------------------------- */

      const haloIn = easeInOutCubic((elapsed - 680) / 500);
      const haloOut = easeInOutCubic((elapsed - 1850) / 450);
      const halo = clamp(haloIn) * (1 - clamp(haloOut));

      logoGlow.style.opacity = `${halo * 0.62}`;
      logoGlow.style.transform = `
        translate(-50%, -50%)
        scale(${0.82 + halo * 0.18})
      `;

      /* ---------------------------------------------------------
         4. THIN TOP-CENTRE LIGHT
         It does NOT travel. It simply fades in vertically in place,
         matching the supplied reference frame.
      --------------------------------------------------------- */

      const beamIn = easeOutCubic((elapsed - 1200) / 330);
      const beamOut = easeInOutCubic((elapsed - 1800) / 500);
      const beam = clamp(beamIn) * (1 - clamp(beamOut));

      introBeam.style.opacity = `${beam * 0.92}`;
      introBeam.style.transform = `
        translateX(-50%)
        scaleY(${0.92 + beam * 0.08})
      `;

      /* ---------------------------------------------------------
         5. LOGO SPLITS
      --------------------------------------------------------- */

      const split = clamp(easeInOutQuart((elapsed - 1800) / 600));
      const logoDistance = split * 84;

      const logoFade = clamp(
        easeInOutCubic((elapsed - 2550) / 780)
      );

      const opacity = 1 - logoFade * 0.94;
      const logoBlur = logoFade * 3;

      logoLeft.style.opacity = `${opacity}`;
      logoRight.style.opacity = `${opacity}`;
      logoLeft.style.filter = `blur(${logoBlur}px)`;
      logoRight.style.filter = `blur(${logoBlur}px)`;

      logoLeft.style.transform = `
        translate3d(-${logoDistance}px, 0, 0)
      `;

      logoRight.style.transform = `
        translate3d(${logoDistance}px, 0, 0)
      `;

      /* ---------------------------------------------------------
         6. DARK DOORS
         The two panels themselves create the opening. There is
         intentionally no full-screen black layer underneath them.
      --------------------------------------------------------- */

      const door = clamp(
        easeInOutQuart((elapsed - 3000) / 800)
      );

      const panelDistance = door * 108;

      introLeft.style.transform = `
        translate3d(-${panelDistance}%, 0, 0)
      `;

      introRight.style.transform = `
        translate3d(${panelDistance}%, 0, 0)
      `;

      /* Botanical overlay fades with the last part of the reveal. */
      const atmosphereFade = clamp(
        easeInOutCubic((elapsed - 3350) / 1100)
      );

      introOverlay.style.opacity = `${1 - atmosphereFade}`;

      /* ---------------------------------------------------------
         7. HERO CONTENT
      --------------------------------------------------------- */

      const copy = clamp(
        easeOutCubic((elapsed - 3800) / 800)
      );

      content.style.opacity = `${copy}`;
      content.style.transform = `
        translate3d(
          ${-16 + copy * 16}px,
          ${16 - copy * 16}px,
          0
        )
      `;

      /* ---------------------------------------------------------
         8. LANDSCAPE WARMTH
      --------------------------------------------------------- */

      const warmth = clamp(
        easeInOutCubic((elapsed - 3000) / 1800)
      );

      sunrise.style.opacity = `${0.70 + warmth * 0.30}`;
      atmosphere.style.opacity = `${1 - warmth * 0.34}`;

      /* ---------------------------------------------------------
         9. FINAL STATE
         Never overwrite the banner transform: camera motion must
         continue forever.
      --------------------------------------------------------- */

      if (elapsed >= 5200) {
        content.style.opacity = "1";
        content.style.transform = "translate3d(0,0,0)";

        introOverlay.style.opacity = "0";
        introCard.style.opacity = "0";

        logoStage.style.opacity = "0";
        logoLeft.style.opacity = "0";
        logoRight.style.opacity = "0";
        logoGlow.style.opacity = "0";
        introBeam.style.opacity = "0";

        image.style.filter = `
          blur(0px)
          brightness(1)
          saturate(1)
          contrast(1.04)
        `;

        sunrise.style.opacity = "1";
        atmosphere.style.opacity = "0.64";
      }

      soundBarsRef.current.forEach((bar, index) => {
        if (!bar) return;

        if (isPlayingRef.current) {
          const primary =
            (Math.sin(time * 0.005 + index * 0.74) + 1) / 2;

          const secondary =
            (Math.sin(time * 0.003 + index * 1.13) + 1) / 2;

          const scale =
            0.58 + primary * 0.30 + secondary * 0.12;

          bar.style.transform = `scaleY(${scale})`;
        } else {
          bar.style.transform = "scaleY(0.58)";
        }
      });

      animationFrameRef.current =
        requestAnimationFrame(animate);
    };

    animationFrameRef.current =
      requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <>
      <section
        id="home"
        className="
      relative
      h-screen
      min-h-[680px]
      w-full
      overflow-visible
      bg-[#07100a]
    "
      >
     
        {/* =====================================================
          LANDSCAPE
      ===================================================== */}

        <div
          className="
          absolute
          inset-0
          overflow-hidden
        "
        >
          <img
            ref={imageRef}
            src={bannerImage}
            alt="Paciano riverside resort"
            draggable={false}
            className="
            absolute
            inset-0
            h-full
            w-full

          

            object-cover
            object-[58%_center]

            will-change-transform
          "
          />

          {/* =================================================
            LEFT / LEFT-MIDDLE CINEMATIC SHADOW
        ================================================= */}

          <div
            className="
            pointer-events-none
            absolute
            inset-0
            z-[2]

            bg-[radial-gradient(ellipse_42%_64%_at_26%_48%,rgba(2,10,6,0.52)_0%,rgba(2,10,6,0.38)_32%,rgba(2,10,6,0.18)_55%,transparent_78%)]
          "
          />

          {/* =================================================
            UPPER LEFT SHADOW

            Keeps logo area dark.
        ================================================= */}

          <div
            className="
            pointer-events-none
            absolute
            inset-0
            z-[2]

            bg-[radial-gradient(ellipse_42%_48%_at_8%_12%,rgba(2,11,7,0.62)_0%,rgba(2,11,7,0.40)_42%,transparent_75%)]
          "
          />

          {/* =================================================
            SUNRISE WARMTH
        ================================================= */}

          <div
            className="
            pointer-events-none
            absolute
            inset-0
            z-[3]

            bg-[radial-gradient(ellipse_24%_28%_at_40%_43%,rgba(255,210,145,0.14)_0%,rgba(255,210,145,0.07)_28%,transparent_72%)]
          "
          />

          {/* =================================================
            ANIMATED SUNRISE
        ================================================= */}

          <div
            ref={sunriseRef}
            className="
            pointer-events-none
            absolute
            inset-0
            z-[3]

            origin-center

            bg-[radial-gradient(ellipse_30%_34%_at_40%_43%,rgba(255,205,130,0.12)_0%,rgba(255,205,130,0.06)_25%,transparent_68%)]

            will-change-transform
          "
          />

          {/* =================================================
            ATMOSPHERE
        ================================================= */}

          <div
            ref={atmosphereRef}
            className="
            pointer-events-none
            absolute
            inset-0
            z-[4]

            bg-[linear-gradient(180deg,rgba(3,12,7,0.12),transparent_38%,rgba(3,12,7,0.08))]
          "
          />

                    {/* =================================================
            PREMIUM LENS VIGNETTE
            Very subtle edge falloff — no heavy black frame.
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute inset-0
              z-[5]
              bg-[radial-gradient(ellipse_82%_74%_at_48%_44%,transparent_48%,rgba(0,0,0,0.08)_72%,rgba(0,0,0,0.30)_100%)]
            "
          />

{/* =================================================
            BOTTOM CINEMATIC DEPTH
        ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              z-[4]
              h-[24%]
              bg-gradient-to-t
              from-black/25
              to-transparent
            "
          />

        </div>

        {/* =====================================================
          PACIANO CINEMATIC INTRO OVERLAY

          This sits ABOVE the landscape and BELOW the logo.
          The dark doors open from the centre while the real
          coloured Paciano logo splits above them.
        ===================================================== */}

        <div
          ref={introOverlayRef}
          className="
            pointer-events-none
            absolute
            inset-0
            z-[70]
            overflow-hidden
          "
        >
          {/* -----------------------------------------------------
             DARK BOTANICAL OPENING

             No full-screen black background is placed underneath the
             doors. The doors themselves cover the landscape at the
             beginning and reveal it naturally from the centre.
          ----------------------------------------------------- */}

          {/* Left botanical silhouette */}
          <svg
            className="
              absolute
              -left-[9vw]
              -top-[14vh]
              z-[5]
              h-[76vh]
              w-[40vw]
              min-w-[320px]
              max-w-[570px]
              opacity-[0.34]
            "
            viewBox="0 0 520 820"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="pacianoLeafLFinal" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#5d6b4f" stopOpacity="0.78" />
                <stop offset="0.48" stopColor="#2d4028" stopOpacity="0.62" />
                <stop offset="1" stopColor="#111b13" stopOpacity="0.12" />
              </linearGradient>
            </defs>

            <path
              d="M150 860C171 670 186 432 319 116"
              stroke="#7a876d"
              strokeOpacity="0.22"
              strokeWidth="3"
              strokeLinecap="round"
            />

            <path
              d="M196 548C94 516 36 429 26 302C129 331 203 414 196 548Z"
              fill="url(#pacianoLeafLFinal)"
            />

            <path
              d="M245 450C342 398 405 306 432 191C327 219 262 307 245 450Z"
              fill="url(#pacianoLeafLFinal)"
            />

            <path
              d="M158 702C74 667 21 595 12 489C101 510 166 589 158 702Z"
              fill="url(#pacianoLeafLFinal)"
            />

            <path
              d="M277 316C337 284 379 229 398 160C333 170 288 218 277 316Z"
              fill="url(#pacianoLeafLFinal)"
            />
          </svg>

          {/* Top-right botanical silhouette */}
          <svg
            className="
              absolute
              -right-[9vw]
              -top-[18vh]
              z-[5]
              h-[61vh]
              w-[39vw]
              min-w-[320px]
              max-w-[580px]
              rotate-[4deg]
              opacity-[0.36]
            "
            viewBox="0 0 560 690"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="pacianoLeafRFinal" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#617253" stopOpacity="0.82" />
                <stop offset="0.48" stopColor="#31462b" stopOpacity="0.64" />
                <stop offset="1" stopColor="#132017" stopOpacity="0.12" />
              </linearGradient>
            </defs>

            <path
              d="M652 -20C519 44 417 152 318 314"
              stroke="#7b896f"
              strokeOpacity="0.20"
              strokeWidth="3"
              strokeLinecap="round"
            />

            <path
              d="M518 123C394 134 316 202 252 304C363 299 450 243 518 123Z"
              fill="url(#pacianoLeafRFinal)"
            />

            <path
              d="M431 195C354 125 275 105 171 117C237 210 322 251 431 195Z"
              fill="url(#pacianoLeafRFinal)"
            />

            <path
              d="M351 295C291 250 228 238 142 257C196 326 266 350 351 295Z"
              fill="url(#pacianoLeafRFinal)"
            />
          </svg>

          {/* Hairline at the right edge */}
          <div
            className="
              absolute
              right-[3.1%]
              top-0
              z-[8]
              h-full
              w-px
              bg-white/25
            "
            aria-hidden="true"
          />

          {/* -----------------------------------------------------
             TWO DARK DOORS

             At t=0 they meet at the centre and fill the whole frame.
             As they move apart, the actual landscape underneath is
             revealed through the middle.
          ----------------------------------------------------- */}

          <div
            ref={introLeftRef}
            className="
              absolute
              inset-y-0
              left-0
              z-[7]
              w-1/2
              bg-[linear-gradient(90deg,#020604_0%,#020604_82%,rgba(2,6,4,0.96)_91%,rgba(2,6,4,0.28)_99%,transparent_100%)]
              will-change-transform
            "
          />

          <div
            ref={introRightRef}
            className="
              absolute
              inset-y-0
              right-0
              z-[7]
              w-1/2
              bg-[linear-gradient(270deg,#020604_0%,#020604_82%,rgba(2,6,4,0.96)_91%,rgba(2,6,4,0.28)_99%,transparent_100%)]
              will-change-transform
            "
          />

          {/* Subtle centre haze: atmosphere, not a flat glow */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              z-[4]
              h-[58%]
              w-[34%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[radial-gradient(ellipse_at_center,rgba(61,89,51,0.15)_0%,rgba(25,42,28,0.07)_34%,transparent_74%)]
              blur-[24px]
            "
            aria-hidden="true"
          />

          {/* -----------------------------------------------------
             A PLACE TO BELONG
          ----------------------------------------------------- */}

          <div
            ref={introCardRef}
            className="
              absolute
              left-1/2
              top-[40%]
              z-[12]
              -translate-x-1/2
              -translate-y-1/2
              text-center
              will-change-transform
            "
          >
            <p
              className="
                whitespace-nowrap
                font-cormorant
                text-[13px]
                font-medium
                uppercase
                tracking-[0.54em]
                text-white/82
                sm:text-[15px]
              "
            >
              A PLACE TO BELONG
            </p>

            <span
              className="
                mx-auto
                mt-4
                block
                h-px
                w-[70px]
                bg-white/55
              "
            />
          </div>

          {/* -----------------------------------------------------
             THIN WARM VERTICAL LIGHT
             Static in position; only its intensity breathes.
          ----------------------------------------------------- */}

          <div
            ref={introBeamRef}
            className="
              absolute
              left-1/2
              top-0
              z-[11]
              h-[55%]
              w-[2px]
              -translate-x-1/2
              origin-top
              bg-[linear-gradient(180deg,rgba(255,232,170,0.02)_0%,rgba(255,228,155,0.28)_16%,rgba(255,218,135,0.82)_58%,rgba(255,203,112,0.14)_100%)]
              opacity-0
              will-change-transform
            "
            aria-hidden="true"
          />

          <div
            className="
              absolute
              left-1/2
              top-[18%]
              z-[10]
              h-[38%]
              w-[90px]
              -translate-x-1/2
              bg-[radial-gradient(ellipse_at_center,rgba(255,220,151,0.11)_0%,rgba(255,220,151,0.04)_34%,transparent_72%)]
              blur-[18px]
            "
            aria-hidden="true"
          />
        </div>

        {/* =====================================================
          HERO CONTENT

          Starts invisible.

          Timeline controls the reveal.
      ===================================================== */}

        <div
          ref={heroContentRef}
          className="
          absolute
          left-[5%]
          top-1/2
          z-20

          w-[500px]

          -translate-y-1/2

          opacity-0

          will-change-transform

          lg:left-[6%]
          xl:left-[7%]
          2xl:left-[8%]

          max-sm:left-[7%]
          max-sm:right-[7%]
          max-sm:w-auto
        "
        >
          {/* EYEBROW */}

          <div
            className="
            mb-5
            flex
            items-center
            gap-3
          "
          >
            <span
              className="
              h-px
              w-[42px]
              bg-[#9dbb47]
            "
            />

            <span
              className="
              font-manrope
              text-[10px]
              font-medium
              uppercase
              tracking-[0.22em]
              text-[#9dbb47]
            "
            >
              Retreat. Reconnect. Rejuvenate.
            </span>
          </div>

          {/* TITLE */}

          <h1
            className="
            font-cormorant
            text-[58px]
            font-medium
            leading-[0.88]
            tracking-[-0.025em]
            text-[#f7f4eb]

            sm:text-[64px]
            lg:text-[70px]
            xl:text-[76px]

            max-sm:text-[47px]
          "
          >
            <span className="block">Where Nature</span>

            <span
              className="
              mt-1
              block
              italic
              text-[#9dbb47]
            "
            >
              Welcomes You
            </span>
          </h1>

          {/* DECORATIVE LINE */}

          <div
            className="
            mt-8
            flex
            items-center
            gap-3
          "
          >
            <span
              className="
              h-px
              w-[48px]
              bg-[#9dbb47]/80
            "
            />

            <span
              className="
              h-[6px]
              w-[6px]
              rotate-45
              bg-[#9dbb47]
            "
            />

            <span
              className="
              h-px
              w-[48px]
              bg-[#9dbb47]/30
            "
            />
          </div>

          {/* DESCRIPTION */}

          <p
            className="
            mt-7
            max-w-[420px]

            font-manrope
            text-[14px]
            font-normal
            leading-[1.7]
            text-white/80

            sm:text-[15px]
          "
          >
            A quiet escape beside the river, surrounded by rolling hills, lush
            tea gardens and the gentle rhythm of nature.
          </p>

          {/* ACTIONS */}

          <div
            className="
            mt-8
            flex
            items-center
            gap-8

            max-sm:flex-col
            max-sm:items-start
            max-sm:gap-5
          "
          >
            {/* EXPLORE */}

            <a
              href="#experiences"
              className="
              group
              flex
              items-center
              gap-3

              font-manrope
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.08em]
              text-white
            "
            >
              <span
                className="
                flex
                h-[46px]
                w-[46px]
                shrink-0
                items-center
                justify-center

                rounded-full

                border
                border-white/40

                text-white

                transition-all
                duration-500

                group-hover:border-[#8faa42]
                group-hover:bg-[#8faa42]
                group-hover:text-[#102619]
              "
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />

                  <path
                    d="M13 7L18 12L13 17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <span>Explore the Experience</span>
            </a>

            {/* SOUND */}

            <button
              type="button"
              onClick={toggleAudio}
              className="
              group
              flex
              items-center
              gap-3
              text-left
            "
            >
              {/* BARS */}

              <span
                className="
                flex
                h-[32px]
                items-center
                gap-[3px]
              "
              >
                {[12, 22, 30, 18, 27, 14, 22].map((height, index) => (
                  <span
                    key={index}
                    ref={(el) => {
                      if (el) {
                        soundBarsRef.current[index] = el;
                      }
                    }}
                    className="
                      w-[2px]
                      rounded-full
                      bg-[#9dbb47]
                      origin-center
                      will-change-transform
                    "
                    style={{
                      height: `${height}px`,
                    }}
                  />
                ))}
              </span>

              {/* LABEL */}

              <span>
                <span
                  className="
                  block
                  font-manrope
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.08em]
                  text-white
                "
                >
                  Sounds of Nature
                </span>

                <span
                  className="
                  mt-1
                  block
                  font-manrope
                  text-[9px]
                  tracking-[0.03em]
                  text-white/60
                "
                >
                  River · Birds · Wind
                </span>
              </span>

              {/* CONTROL */}

              <span
                className="
                ml-1
                flex
                h-[34px]
                w-[34px]
                shrink-0
                items-center
                justify-center

                rounded-full

                border
                border-white/30

                text-white

                transition-all
                duration-500

                group-hover:border-[#9dbb47]
              "
              >
                {isPlaying ? (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <rect x="6" y="5" width="4" height="14" />

                    <rect x="14" y="5" width="4" height="14" />
                  </svg>
                ) : (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5L19 12L8 19V5Z" />
                  </svg>
                )}
              </span>
            </button>
          </div>
        </div>

       
{/* =====================================================
  CINEMATIC PACIANO LOGO
===================================================== */}

<div
className="
  pointer-events-none
  absolute
  inset-0
  z-[80]
  flex
  items-center
  justify-center
  overflow-hidden
"
>
<div
  ref={logoStageRef}
  className="
    relative
    flex
    h-[280px]
    w-[420px]
    items-center
    justify-center
    will-change-transform
  "
>

  {/* =================================================
      SOFT GREEN ATMOSPHERE
  ================================================= */}

  <div
    ref={logoGlowRef}
    className="
      pointer-events-none
      absolute
      left-1/2
      top-1/2
      h-[260px]
      w-[260px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-[radial-gradient(
        circle,
        rgba(118,190,83,0.28),
        rgba(60,110,55,0.10)_38%,
        transparent_72%
      )]
      opacity-0
      blur-3xl
    "
  />

  {/* =================================================
      LEFT HALF OF ACTUAL LOGO
  ================================================= */}

  <div
    ref={logoLeftRef}
    className="
      absolute
      inset-0
      flex
      items-center
      justify-center
      overflow-hidden
      will-change-transform
    "
    style={{
      clipPath: "inset(0 50% 0 0)",
    }}
  >
    <img
      src={pacianoLogo}
      alt="Paciano"
      draggable={false}
      className="
        absolute
        left-1/2
        top-1/2
        w-[225px]
        max-w-none
        -translate-x-1/2
        -translate-y-1/2
        object-contain
      "
    />
  </div>

  {/* =================================================
      RIGHT HALF OF ACTUAL LOGO
  ================================================= */}

  <div
    ref={logoRightRef}
    className="
      absolute
      inset-0
      flex
      items-center
      justify-center
      overflow-hidden
      will-change-transform
    "
    style={{
      clipPath: "inset(0 0 0 50%)",
    }}
  >
    <img
      src={pacianoLogo}
      alt="Paciano"
      draggable={false}
      className="
        absolute
        left-1/2
        top-1/2
        w-[225px]
        max-w-none
        -translate-x-1/2
        -translate-y-1/2
        object-contain
      "
    />
  </div>

</div>
</div>

        {/* =====================================================
          AUDIO
      ===================================================== */}

        <audio
          ref={audioRef}
          src={pacianoMorningAudio}
          autoPlay
          loop
          preload="auto"
          playsInline
        />

        {/* =====================================================
          CINEMATIC HERO → ABOUT TRANSITION
      ===================================================== */}

        <div
          className="
          pointer-events-none
          absolute
          bottom-[-1px]
          left-0
          z-[30]
         h-[115px]
          w-full
        "
          aria-hidden="true"
        >
          {/* -----------------------------------------------
            SOFT ATMOSPHERIC FADE

            This makes the photograph disappear into
            the cream rather than ending abruptly.
        ----------------------------------------------- */}

          <div
            className="
            absolute
            inset-x-[-5%]
            bottom-0
            h-[105px]

            bg-[radial-gradient(ellipse_at_50%_100%,rgba(236,230,216,0.95)_0%,rgba(236,230,216,0.72)_38%,rgba(236,230,216,0.30)_62%,transparent_82%)]

            blur-[14px]
          "
          />

          {/* -----------------------------------------------
            SINGLE ORGANIC CONTOUR

            NOT a wave.
            NOT repeated.
            Just one gentle flowing edge.
        ----------------------------------------------- */}

          <svg
            className="
            absolute
            bottom-0
            left-0
            h-[120px]
            w-full
          "
            viewBox="0 0 1600 220"
            preserveAspectRatio="none"
          >
            <path
              d="
    M0,125

    C170,113
     285,110
     405,118

    C530,127
     625,139
     735,140

    C845,141
     920,122
     1025,112

    C1140,101
     1250,107
     1365,119

    C1465,130
     1535,121
     1600,111

    L1600,220
    L0,220
    Z
  "
              fill="#ece6d8"
            />
          </svg>
        </div>
      </section>
    </>
  );
}
