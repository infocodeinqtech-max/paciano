import { useEffect, useRef, useState } from "react";

import bannerImage from "@/images/hero.png";
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

  const logoLeftRef = useRef<HTMLDivElement | null>(null);

  const logoRightRef = useRef<HTMLDivElement | null>(null);

  const logoGlowRef = useRef<HTMLDivElement | null>(null);

  const soundBarsRef = useRef<HTMLSpanElement[]>([]);

  const animationFrameRef = useRef<number | null>(null);

  const isPlayingRef = useRef(false);

  const [isPlaying, setIsPlaying] = useState(false);

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

     0.0s
       Landscape already moving
       Logo immediately begins approaching

     0.0 - 2.6
       Slow logo zoom

     0.8 - 3.2
       Background focus pull

     3.0 - 4.8
       Logo begins splitting

     4.8 - 5.7
       Logo travels toward extreme sides

     5.2 - 6.4
       Logo edges dissolve into landscape

     6.4 - 6.7
       Clean landscape breathing moment

     6.7 - 7.9
       Hero copy appears

     7.9+
       Normal hero
  ========================================================= */

  useEffect(() => {
    const image = imageRef.current;

    const sunrise = sunriseRef.current;

    const atmosphere = atmosphereRef.current;

    const content = heroContentRef.current;

    const logoStage = logoStageRef.current;

    const logoLeft = logoLeftRef.current;

    const logoRight = logoRightRef.current;

    const logoGlow = logoGlowRef.current;

    if (
      !image ||
      !sunrise ||
      !atmosphere ||
      !content ||
      !logoStage ||
      !logoLeft ||
      !logoRight ||
      !logoGlow
    ) {
      return;
    }

    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;

      /* ===================================================
        1. HERO CAMERA — CONTINUOUS CINEMATIC DRIFT

        The photograph is ALWAYS moving.

        The logo intro happens INSIDE this shot.

        No stopping.
        No reset after the intro.
        No second animation.
=================================================== */

      // const cameraProgress = (elapsed % 60000) / 60000;
      const cameraProgress = (elapsed % 40000) / 40000;

      /*
   Smooth cinematic breathing.

   The image slowly moves closer,
   then gently retreats.

   60 seconds = extremely slow movement.
*/

      const cameraWave =
        (Math.sin(cameraProgress * Math.PI * 2 - Math.PI / 2) + 1) / 2;

      /*
   Slight secondary movement.

   This prevents the image from feeling
   like a simple zoom.
*/

      const cameraSecondary = Math.sin(cameraProgress * Math.PI * 4) * 0.5;

      /*
   ZOOM

   1.035 → 1.065

   Enough to actually see the
   cinematic movement without
   looking like a Ken Burns effect.
*/

      const cameraScale = 1.035 + cameraWave * 0.03;

      /*
   HORIZONTAL DRIFT

   Very slow movement toward the left.
*/

      const cameraX = -cameraWave * 1.15;

      /*
   EXTREMELY SUBTLE VERTICAL MOVEMENT
*/

      const cameraY = -cameraWave * 0.4;

      /*
   Apply the camera movement.

   This runs EVERY animation frame.
*/

      image.style.transform = `
  scale(${cameraScale})
  translate3d(
    ${cameraX + cameraSecondary * 0.08}%,
    ${cameraY + cameraSecondary * 0.04}%,
    0
  )
`;

      /* ===================================================
           2. LOGO CAMERA APPROACH

           Starts IMMEDIATELY.

           No waiting.

           No initial delay.
        =================================================== */

      const zoomProgress = easeOutCubic(elapsed / 2600);

      const logoScale = 0.5 + zoomProgress * 0.5;

      const logoY = 16 - zoomProgress * 16;

      logoStage.style.transform = `
          translate3d(
            0,
            ${logoY}px,
            0
          )
          scale(${logoScale})
        `;

      /* ===================================================
           3. FOCUS PULL

           Logo becomes important.

           Landscape becomes slightly soft.

           Then landscape comes back
           into focus as the logo leaves.
        =================================================== */

      let blur = 0;

      if (elapsed <= 900) {
        const p = easeInOutCubic(elapsed / 900);

        blur = 0.2 + p * 1.8;
      } else if (elapsed <= 3100) {
        blur = 2;
      } else {
        const p = easeInOutCubic((elapsed - 3100) / 2300);

        blur = 2 * (1 - p);
      }

      image.style.filter = `blur(${blur}px)`;

      /* ===================================================
           4. ATMOSPHERE

           Very subtle cinematic tonal
           breathing.
        =================================================== */

      const atmosphereProgress = easeInOutCubic((elapsed - 1600) / 3800);

      atmosphere.style.opacity = `${0.1 - atmosphereProgress * 0.055}`;

      /* ===================================================
           5. SUNRISE

           The sunrise becomes clearer
           while the logo starts opening.
        =================================================== */

      const sunriseProgress = easeInOutCubic((elapsed - 2900) / 2700);

      sunrise.style.opacity = `${0.3 + sunriseProgress * 0.7}`;

      sunrise.style.transform = `
          scale(
            ${1 + sunriseProgress * 0.045}
          )
        `;

      /* =========================================================
   6. CINEMATIC LOGO SPLIT + EDGE DISSOLVE

   IMPORTANT:

   The logo does NOT simply disappear.

   It moves outward AND fades at the
   same time.

   The further it travels toward the
   edges, the softer it becomes.
========================================================= */

      const splitProgress = easeInOutCubic((elapsed - 3000) / 3000);

      const split = clamp(splitProgress);

      /* =========================================================
   OUTWARD MOVEMENT

   The logo first opens.

   Then both halves slowly travel
   toward the edges.
========================================================= */

      const splitDistance = split * 115;

      /* =========================================================
   FADE START

   Do NOT fade while the logo is
   still sitting in the center.

   It stays strong initially.

   Fade begins after the split has
   already started moving outward.
========================================================= */

      const fadeStart = 0.32;

      const fadeProgress =
        split <= fadeStart ? 0 : (split - fadeStart) / (1 - fadeStart);

      const fade = easeInOutCubic(clamp(fadeProgress));

      /* =========================================================
   LOGO OPACITY

   The logo gradually disappears
   while travelling outward.

   Never suddenly switches to 0.
========================================================= */

      const splitLogoOpacity = 1 - Math.pow(fade, 1.35);

      /* =========================================================
   BLUR

   Very subtle at first.

   Stronger near the edges.

   This creates the "dissolving into
   the landscape" feeling.
========================================================= */

      const splitLogoBlur = fade * 7;

      /* =========================================================
   SCALE

   IMPORTANT:

   This is deliberately named differently
   from the opening zoom's `logoScale`.
========================================================= */

      const splitLogoScale = 1 - fade * 0.07;

      /* =========================================================
   VERTICAL DRIFT

   Very small movement.
========================================================= */

      const splitLogoY = -fade * 3;

      /* =========================================================
   LEFT LOGO HALF
========================================================= */

      logoLeft.style.transform = `
  translate3d(
    -${splitDistance}%,
    ${splitLogoY}px,
    0
  )
  scale(${splitLogoScale})
`;

      logoLeft.style.opacity = `${splitLogoOpacity}`;

      logoLeft.style.filter = `blur(${splitLogoBlur}px)`;

      /* =========================================================
   RIGHT LOGO HALF
========================================================= */

      logoRight.style.transform = `
  translate3d(
    ${splitDistance}%,
    ${splitLogoY}px,
    0
  )
  scale(${splitLogoScale})
`;

      logoRight.style.opacity = `${splitLogoOpacity}`;

      logoRight.style.filter = `blur(${splitLogoBlur}px)`;

      /* =========================================================
   EDGE DISSOLVE MASK

   The outer edges become transparent
   progressively.

   This prevents the logo from looking
   like two PNG pieces sliding away.
========================================================= */

      const maskAmount = fade * 34;

      /* LEFT */

      logoLeft.style.maskImage = `
  linear-gradient(
    90deg,
    transparent 0%,
    rgba(0,0,0,0.10) ${maskAmount}%,
    rgba(0,0,0,0.45) ${maskAmount + 10}%,
    black ${maskAmount + 24}%,
    black 100%
  )
`;

      logoLeft.style.webkitMaskImage = `
  linear-gradient(
    90deg,
    transparent 0%,
    rgba(0,0,0,0.10) ${maskAmount}%,
    rgba(0,0,0,0.45) ${maskAmount + 10}%,
    black ${maskAmount + 24}%,
    black 100%
  )
`;

      /* RIGHT */

      logoRight.style.maskImage = `
  linear-gradient(
    90deg,
    black 0%,
    black ${100 - maskAmount - 24}%,
    rgba(0,0,0,0.45) ${100 - maskAmount - 10}%,
    rgba(0,0,0,0.10) ${100 - maskAmount}%,
    transparent 100%
  )
`;

      logoRight.style.webkitMaskImage = `
  linear-gradient(
    90deg,
    black 0%,
    black ${100 - maskAmount - 24}%,
    rgba(0,0,0,0.45) ${100 - maskAmount - 10}%,
    rgba(0,0,0,0.10) ${100 - maskAmount}%,
    transparent 100%
  )
`;

      /* =========================================================
   ATMOSPHERIC BLEND

   Very subtle — not a glowing effect.

   It simply helps the logo merge with
   the sunrise atmosphere.
========================================================= */

      logoGlow.style.opacity = `${fade * 0.1}`;

      logoGlow.style.transform = `
  scale(${1 + fade * 0.3})
`;

      /* =========================================================
   7. LANDSCAPE FOCUS PULL

   The landscape starts slightly soft
   during the logo introduction.

   As the logo moves away, the landscape
   becomes sharp.

   IMPORTANT:

   This is the ONLY place where we
   assign image.style.filter.
========================================================= */

      const landscapeFocus = easeInOutCubic((elapsed - 3100) / 3000);

      const landscapeBlur = 1.8 * (1 - landscapeFocus);

      image.style.filter = `blur(${landscapeBlur}px)`;
      /* ===================================================
   9. HERO COPY
=================================================== */

      const copyProgress = easeOutCubic((elapsed - 6800) / 1200);

      const copyY = 20 - copyProgress * 20;

      const copyX = -18 + copyProgress * 18;

      content.style.opacity = `${copyProgress}`;

      content.style.transform = `
  translate3d(
    ${copyX}px,
    ${copyY}px,
    0
  )
`;

      /* ===================================================
           10. FINAL STATE

           No second animation.

           No snap.

           No reset.

           The camera simply continues.
        =================================================== */

      if (elapsed >= 8000) {
        content.style.opacity = "1";

        content.style.transform = "translate3d(0,0,0)";

        /*
     Logo is now completely blended
     into the landscape.
  */

        logoLeft.style.opacity = "0";
        logoRight.style.opacity = "0";

        logoLeft.style.transform = "translate3d(-115%, -3px, 0) scale(0.93)";

        logoRight.style.transform = "translate3d(115%, -3px, 0) scale(0.93)";

        logoLeft.style.filter = "blur(7px)";

        logoRight.style.filter = "blur(7px)";

        logoGlow.style.opacity = "0";

        /*
     Clear temporary masks.
  */

        logoLeft.style.maskImage = "none";
        logoRight.style.maskImage = "none";

        logoLeft.style.webkitMaskImage = "none";
        logoRight.style.webkitMaskImage = "none";

        /*
     Landscape is completely sharp.
  */

        image.style.filter = "blur(0px)";

        sunrise.style.opacity = "1";
      }
      /* ===================================================
           11. SOUND WAVE

           Organic movement.
        =================================================== */

      soundBarsRef.current.forEach((bar, index) => {
        if (!bar) return;

        if (isPlayingRef.current) {
          const primary = (Math.sin(time * 0.005 + index * 0.74) + 1) / 2;

          const secondary = (Math.sin(time * 0.003 + index * 1.13) + 1) / 2;

          const scale = 0.58 + primary * 0.3 + secondary * 0.12;

          bar.style.transform = `
                scaleY(${scale})
              `;
        } else {
          bar.style.transform = "scaleY(0.58)";
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

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
          CINEMATIC LOGO
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

            h-[250px]
            w-[500px]

            sm:h-[290px]
            sm:w-[580px]

            md:h-[320px]
            md:w-[640px]

            lg:h-[350px]
            lg:w-[700px]

            xl:h-[380px]
            xl:w-[760px]

            max-sm:h-[210px]
            max-sm:w-[420px]

            will-change-transform
          "
          >
            {/* =================================================
              LOGO ATMOSPHERIC LIGHT
          ================================================= */}

            <div
              ref={logoGlowRef}
              className="
              pointer-events-none
              absolute
              inset-[15%]

              rounded-full

              bg-[radial-gradient(circle,rgba(255,218,150,0.24),transparent_68%)]

              opacity-0

              blur-2xl

              will-change-transform
            "
            />

            {/* =================================================
              LEFT HALF

              Static mask gives the OUTER EDGE
              a natural blend into the scene.
          ================================================= */}

            <div
              ref={logoLeftRef}
              className="
              absolute
              inset-0

              h-full
              w-full

              will-change-transform

              [clip-path:inset(0_50%_0_0)]

              [mask-image:linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.45)_12%,black_28%,black_100%)]
              [-webkit-mask-image:linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.45)_12%,black_28%,black_100%)]
            "
            >
              <img
                src={pacianoLogo}
                alt="Paciano"
                draggable={false}
                className="
                h-full
                w-full
                object-contain
              "
              />
            </div>

            {/* =================================================
              RIGHT HALF
          ================================================= */}

            <div
              ref={logoRightRef}
              className="
              absolute
              inset-0

              h-full
              w-full

              will-change-transform

              [clip-path:inset(0_0_0_50%)]

              [mask-image:linear-gradient(90deg,black_0%,black_72%,rgba(0,0,0,0.45)_88%,transparent_100%)]
              [-webkit-mask-image:linear-gradient(90deg,black_0%,black_72%,rgba(0,0,0,0.45)_88%,transparent_100%)]
            "
            >
              <img
                src={pacianoLogo}
                alt=""
                draggable={false}
                className="
                h-full
                w-full
                object-contain
              "
              />
            </div>
          </div>
        </div>

        {/* =====================================================
          AUDIO
      ===================================================== */}

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
