import { useEffect, useRef, useState } from "react";
import bannerImage from "@/images/hero.png";
import pacianoMorningAudio from "@/assets/audio/paciano-morning-soothing.mp3";

export default function HeroSection() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [soundOn, setSoundOn] = useState(false);
  const [entered, setEntered] = useState(false);

  /*
   * Small entrance delay.
   * This allows the navbar + image to settle before
   * the typography enters the scene.
   */
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setEntered(true);
    }, 350);

    return () => window.clearTimeout(timer);
  }, []);

  /*
   * Ambient audio.
   *
   * Browsers generally block autoplay with sound.
   * Therefore we attempt autoplay and gracefully
   * fall back to the sound button.
   */
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.18;

    const attemptPlay = async () => {
      try {
        await audio.play();
        setSoundOn(true);
      } catch {
        setSoundOn(false);
      }
    };

    attemptPlay();

    return () => {
      audio.pause();
    };
  }, []);

  /*
   * Enable sound after the visitor interacts with
   * the page if autoplay was blocked.
   */
  useEffect(() => {
    const enableAmbientSound = async () => {
      const audio = audioRef.current;

      if (!audio || !audio.paused) return;

      try {
        await audio.play();
        setSoundOn(true);
      } catch {
        // Browser still blocked playback.
      }
    };

    window.addEventListener("pointerdown", enableAmbientSound, {
      once: true,
      passive: true,
    });

    return () => {
      window.removeEventListener("pointerdown", enableAmbientSound);
    };
  }, []);

  const toggleSound = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setSoundOn(true);
      } catch {
        setSoundOn(false);
      }
    } else {
      audio.pause();
      setSoundOn(false);
    }
  };

  return (
    <section
      id="home"
      className="
        relative
        h-[100svh]
        min-h-[680px]
        w-full
        overflow-hidden
        bg-[#08150d]
        text-white
      "
    >
      {/* =====================================================
          AMBIENT AUDIO
      ===================================================== */}
      <audio
        ref={audioRef}
        src={pacianoMorningAudio}
        preload="auto"
      />

      {/* =====================================================
          CINEMATIC IMAGE
      ===================================================== */}
      <div className="absolute inset-0 overflow-hidden">

        <img
            src={bannerImage}
            alt="Paciano riverside resort surrounded by hills"
            className={`
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-[58%_center]
            brightness-[0.84]
            saturate-[0.88]
            contrast-[1.04]
            transition-transform
            duration-[1800ms]
            ease-out
            ${
                entered
                ? "scale-[1.035]"
                : "scale-[1.08]"
            }
            `}
        />
         {/* =================================================
      LEFT CINEMATIC SHADOW
      Darkens the mountain + text area while
      keeping the sunset and resort natural.
  ================================================= */}
  <div
    className="
      absolute
      inset-0
      bg-gradient-to-r
      from-[#06120c]/75
      via-[#06120c]/48
      via-[38%]
      to-[#06120c]/05
      to-[78%]
    "
  />

  {/* =================================================
      VERY SUBTLE OVERALL DEPTH
  ================================================= */}
  <div
    className="
      absolute
      inset-0
      bg-[#07130d]/[0.08]
      mix-blend-multiply
    "
  />

  {/* =================================================
      BOTTOM CINEMATIC FADE
  ================================================= */}
  <div
    className="
      absolute
      inset-x-0
      bottom-0
      h-[30%]
      bg-gradient-to-t
      from-[#06120c]/40
      via-[#06120c]/12
      to-transparent
    "
  />

</div>


      {/* =====================================================
          MAIN HERO CONTENT
      ===================================================== */}
      <div
        className="
          relative
          z-20
          mx-auto
          flex
          h-full
          w-full
          max-w-[1600px]
          items-center
          px-6
          pb-20
          pt-28
          sm:px-10
          lg:px-16
          xl:px-20
        "
      >

        {/* =================================================
            LEFT TEXT
        ================================================= */}
        <div
          className={`
            max-w-[720px]
            transition-all
            duration-[1400ms]
            ease-[cubic-bezier(.22,1,.36,1)]
            ${
              entered
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }
          `}
        >

          {/* Eyebrow */}
          <div
            className="
                mb-5
                flex
                items-center
                gap-3
                font-paciano-ui
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#A2BE4C]
                sm:text-[11px]
            "
            >
            <span className="h-px w-9 bg-[#A2BE4C]" />

            <span>
                RETREAT. RECONNECT. REJUVENATE.
            </span>
            </div>


          {/* =================================================
              MAIN TITLE
          ================================================= */}
         <h1
            className="
                font-paciano-display
                text-[48px]
                font-medium
                leading-[0.94]
                tracking-[-0.02em]
                text-[#E8E6DD]
                sm:text-[58px]
                md:text-[66px]
                lg:text-[76px]
                xl:text-[84px]
            "
            >
            Where Nature
            <br />

            <span className="italic text-[#91AA43]">
                Welcomes You
            </span>
            </h1>


          {/* =================================================
              DECORATIVE LINE
          ================================================= */}
          <div
            className="
              mt-7
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                h-px
                w-14
                bg-[#a2bd4d]/70
              "
            />

            <span
              className="
                h-[5px]
                w-[5px]
                rotate-45
                bg-[#a2bd4d]
              "
            />

            <span
              className="
                h-px
                w-20
                bg-white/20
              "
            />
          </div>


          {/* Description */}
          <p
            className="
              mt-7
              max-w-[470px]
              font-paciano-ui
              text-[14px]
              font-normal
              leading-[1.9]
              text-white/82
              sm:text-[15px]
              lg:text-[16px]
            "
          >
            A quiet escape beside the river,
            surrounded by rolling hills,
            lush tea gardens and the gentle
            rhythm of nature.
          </p>


          {/* =================================================
              ACTIONS
          ================================================= */}
          <div
            className="
              mt-9
              flex
              flex-wrap
              items-center
              gap-7
            "
          >

            {/* Explore */}
            <a
              href="#stay"
              className="
                group
                flex
                items-center
                gap-4
                font-paciano-ui
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-white
              "
            >
              <span
                className="
                  flex
                  h-[48px]
                  w-[48px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/45
                  transition-all
                  duration-500
                  group-hover:border-[#a2bd4d]
                  group-hover:bg-[#a2bd4d]
                  group-hover:text-[#102316]
                "
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 12H19M13 6L19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <span>
                Explore the experience
              </span>
            </a>


            {/* Sound */}
            <button
              type="button"
              onClick={toggleSound}
              className="
                group
                flex
                items-center
                gap-3
                font-paciano-ui
                text-left
              "
            >
              {/* Waveform */}
              <span
                className="
                  flex
                  h-[40px]
                  items-center
                  gap-[3px]
                "
              >
                {[10, 18, 26, 15, 22, 12, 20].map(
                  (height, index) => (
                    <span
                      key={index}
                      className={`
                        w-[2px]
                        rounded-full
                        bg-[#a2bd4d]
                        transition-all
                        duration-300
                        ${
                          soundOn
                            ? "animate-paciano-wave"
                            : ""
                        }
                      `}
                      style={{
                        height: `${height}px`,
                        animationDelay: `${index * 100}ms`,
                      }}
                    />
                  )
                )}
              </span>

              <span className="flex flex-col">
                <span
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-white
                  "
                >
                  {soundOn
                    ? "Sounds of nature"
                    : "Listen to nature"}
                </span>

                <span
                  className="
                    mt-1
                    text-[10px]
                    tracking-[0.04em]
                    text-white/55
                  "
                >
                  River · Birds · Wind
                </span>
              </span>
            </button>
          </div>
        </div>


        {/* =================================================
            RIGHT VERTICAL LOCATION STORY
        ================================================= */}
        <div
          className="
            absolute
            right-8
            top-1/2
            hidden
            -translate-y-1/2
            xl:right-12
            xl:flex
            xl:items-center
            xl:gap-5
          "
        >

          <div
            className="
              flex
              flex-col
              items-end
              gap-3
              font-paciano-ui
              text-[9px]
              font-medium
              uppercase
              tracking-[0.3em]
              text-white/65
            "
          >
            <span className="text-[#a2bd4d]">
              Riverside
            </span>

            <span>Hills</span>

            <span>Tea Gardens</span>

            <span>Greenery</span>
          </div>

          <div
            className="
              h-[180px]
              w-px
              bg-gradient-to-b
              from-transparent
              via-white/50
              to-transparent
            "
          />
        </div>


        {/* =================================================
            BOTTOM LEFT MICRO LABEL
        ================================================= */}
        <div
          className="
            absolute
            bottom-10
            left-6
            hidden
            items-center
            gap-4
            sm:left-10
            sm:flex
            lg:left-16
            xl:left-20
          "
        >
          <div
            className="
              flex
              h-[34px]
              w-[34px]
              items-center
              justify-center
              rounded-full
              border
              border-white/25
            "
          >
            <span
              className="
                h-[5px]
                w-[5px]
                rounded-full
                bg-[#a2bd4d]
              "
            />
          </div>

          <div
            className="
              font-paciano-ui
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-white/60
            "
          >
            Begin your escape
          </div>
        </div>


        {/* =================================================
            SLIDE / CINEMATIC INDEX
        ================================================= */}
        <div
          className="
            absolute
            bottom-10
            right-6
            hidden
            items-center
            gap-4
            font-paciano-ui
            sm:right-10
            sm:flex
            lg:right-16
            xl:right-20
          "
        >
          <span
            className="
              text-[11px]
              text-[#a2bd4d]
            "
          >
            01
          </span>

          <span
            className="
              h-px
              w-12
              bg-white/30
            "
          />

          <span
            className="
              text-[10px]
              tracking-[0.2em]
              text-white/50
            "
          >
            04
          </span>
        </div>


        {/* =================================================
            SCROLL INDICATOR
        ================================================= */}
        <div
          className="
            absolute
            bottom-0
            left-1/2
            hidden
            -translate-x-1/2
            flex-col
            items-center
            gap-3
            md:flex
          "
        >
          <span
            className="
              font-paciano-ui
              text-[8px]
              uppercase
              tracking-[0.3em]
              text-white/45
            "
          >
            Discover
          </span>

          <span
            className="
              h-10
              w-px
              bg-gradient-to-b
              from-[#a2bd4d]
              to-transparent
            "
          />
        </div>

      </div>


      {/* =====================================================
          BOTTOM EDGE — NOT A CARD
          This creates a cinematic transition into the
          next section.
      ===================================================== */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          z-30
          h-[1px]
          bg-white/15
        "
      />
    </section>
  );
}