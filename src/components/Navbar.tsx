import { useEffect, useState } from "react";
import pacianoLogo from "@/images/paciano-logo.png";
import bookingImage from "@/images/paciano-booking.png";

const NAV_LINKS = [
  { label: "Stay", href: "#stay" },
  { label: "Experiences", href: "#experiences" },
  { label: "Dining", href: "#dining" },
  { label: "Gallery", href: "#gallery" },
  { label: "Offers", href: "#offers" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  scrolled?: boolean;
}

export default function Navbar({ scrolled = false }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  const handleCheckAvailability = () => {
    if (!checkIn || !checkOut) {
      alert("Please select your arrival and departure dates.");
      return;
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      alert("Departure must be after arrival.");
      return;
    }

    console.log({
      checkIn,
      checkOut,
      guests,
    });

    // Later we can connect this to your actual booking system.
  };

  // Prevent body scroll when mobile menu is open
  // useEffect(() => {
  //   if (menuOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "";
  //   }

  //   return () => {
  //     document.body.style.overflow = "";
  //   };
  // }, [menuOpen]);

  useEffect(() => {
    const shouldLockScroll = menuOpen || bookingOpen;

    document.body.style.overflow = shouldLockScroll ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, bookingOpen]);

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <header
        className={`
        fixed
        left-0
        right-0
        top-0
        z-[100]
        transition-all
        duration-700
        ease-out
        ${scrolled ? "bg-[#07150e]/65 backdrop-blur-xl" : "bg-transparent"}
      `}
      >
        {/* SOFT CINEMATIC CONTRAST */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            h-40
            bg-gradient-to-b
            from-[#07130c]/70
            via-[#07130c]/30
            to-transparent
          "
        />

        <div
          className="
      relative
      z-10
      mx-auto
      flex
      h-[104px]
      w-full
      items-center
      px-8
      lg:px-12
      xl:px-16
    "
        >
          {/* =========================================
              PACIANO LOGO
          ========================================= */}
          <a
            href="/"
            className="
              group
              relative
              z-[110]
              flex
              shrink-0
              items-center
            "
          >
            <img
              src={pacianoLogo}
              alt="Paciano"
              className="
              relative
              h-[76px]
              w-auto
              object-contain
              drop-shadow-[0_2px_10px_rgba(0,0,0,0.28)]
              transition-all
              duration-700
              lg:h-[82px]
              "
            />
          </a>

          {/* =========================================
              DESKTOP NAV
          ========================================= */}
          <nav
            className="
              absolute
              left-1/2
              hidden
              -translate-x-1/2
              lg:block
            "
          >
            <div
              className="
                flex
                items-center
                gap-8
                xl:gap-10
              "
            >
              <NavItem label="Home" href="#home" active />

              <NavItem label="Stay" href="#stay" />

              <NavItem label="Experiences" href="#experiences" />

              <NavItem label="Dining" href="#dining" />

              <NavItem label="Gallery" href="#gallery" />

              <NavItem label="Offers" href="#offers" />

              <NavItem label="About Us" href="#about" />

              <NavItem label="Contact" href="#contact" />
            </div>
          </nav>

          {/* =========================================
              RIGHT
          ========================================= */}
          <div className="ml-auto flex items-center gap-7">
            {/* =====================================================
                LUXURY BOOKING CTA
            ===================================================== */}
            <div className="relative hidden lg:block">
              {/* CTA BUTTON */}
              <button
                type="button"
                onClick={() => setBookingOpen(!bookingOpen)}
                className="
    group
    relative
    flex
    h-[46px]
    w-[202px]
    items-center
    overflow-hidden
    rounded-full
    border
    border-[#b5c96a]/75
    bg-[#102619]/25
    backdrop-blur-[6px]
    transition-all
    duration-500
    hover:border-[#c5d57b]
    hover:bg-[#102619]/40
  "
              >
                {/* BUTTON TEXT */}
                <span
                  className="
      flex-1
      pl-5
      text-center
      font-jost
      text-[10px]
      font-medium
      uppercase
      tracking-[0.18em]
      text-white/90
      transition-colors
      duration-500
      group-hover:text-[#d0dc8b]
    "
                >
                  Plan Your Stay
                </span>

                {/* RIGHT CIRCLE */}
                <span
                  className="
                    mr-[3px]
                    flex
                    h-[38px]
                    w-[38px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#b5c96a]/60
                    bg-[#a9b85f]
                    text-[#102619]
                    transition-all
                    duration-500
                    group-hover:bg-[#c5d57b]
                    group-hover:translate-x-0.5
                  "
                >
                  <span
                    className="
                      text-[17px]
                      font-light
                      leading-none
                      transition-transform
                      duration-500
                      group-hover:translate-x-0.5
                    "
                  >
                    →
                  </span>
                </span>
              </button>
            </div>
            {/* MENU */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open menu"
              className="
                relative
                z-[110]
                flex
                h-[48px]
                w-[48px]
                items-center
                justify-center
                rounded-full
                bg-[#f5f4ee]
                text-[#16301f]
                shadow-lg
                transition-all
                duration-500
                hover:scale-105
              "
            >
              <span className="relative h-[16px] w-[19px]">
                <span
                  className={`
                    absolute
                    left-0
                    top-[3px]
                    h-[1.5px]
                    w-[19px]
                    bg-current
                    transition-all
                    duration-500
                    ${menuOpen ? "top-[7px] rotate-45" : ""}
                  `}
                />

                <span
                  className={`
                    absolute
                    left-0
                    top-[11px]
                    h-[1.5px]
                    w-[19px]
                    bg-current
                    transition-all
                    duration-500
                    ${menuOpen ? "top-[7px] -rotate-45" : ""}
                  `}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================
    PACIANO — LUXURY BOOKING MODAL
========================================================= */}
      <BookingModal
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        checkIn={checkIn}
        setCheckIn={setCheckIn}
        checkOut={checkOut}
        setCheckOut={setCheckOut}
        guests={guests}
        setGuests={setGuests}
        onCheckAvailability={handleCheckAvailability}
      />

      {/* MOBILE MENU */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

function BookingModal({
  open,
  onClose,
  checkIn,
  setCheckIn,
  checkOut,
  setCheckOut,
  guests,
  setGuests,
  onCheckAvailability,
}: {
  open: boolean;
  onClose: () => void;

  checkIn: string;
  setCheckIn: (value: string) => void;

  checkOut: string;
  setCheckOut: (value: string) => void;

  guests: string;
  setGuests: (value: string) => void;

  onCheckAvailability: () => void;
}) {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div
      className={`
    fixed
    inset-0
    z-[250]

    flex
    items-center
    justify-center

    px-4
    sm:px-8
    lg:px-10

    ${open ? "pointer-events-auto" : "pointer-events-none"}
  `}
      aria-hidden={!open}
    >
      {/* =====================================================
          BACKDROP
      ===================================================== */}

      {/* <button
        type="button"
        aria-label="Close booking planner"
        onClick={onClose}
        className={`
          absolute
          inset-0

          cursor-default

          bg-[#07150e]/60

          backdrop-blur-[11px]

          transition-all
          duration-[900ms]
          ease-out

          ${open ? "opacity-100" : "opacity-0 backdrop-blur-0"}
        `}
      /> */}
      <button
        type="button"
        aria-label="Close booking planner"
        onClick={onClose}
        className={`
    absolute
    inset-0

    cursor-default

    bg-[#07150e]/55
    backdrop-blur-[10px]

    will-change-[opacity]

    transition-opacity
    duration-[850ms]
    ease-[cubic-bezier(.22,1,.36,1)]

    ${
      open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
    }
  `}
      />

      {/* =====================================================
          MODAL
      ===================================================== */}

      <div
        className={`
    relative
    z-10

    w-full
    max-w-[1160px]

    overflow-hidden
    rounded-[20px]

    border
    border-[#b9aa6b]/65

    bg-[#eee9dc]

    shadow-[0_40px_120px_rgba(0,0,0,0.45)]

    transition-all
    duration-[950ms]
    delay-[80ms]
    ease-[cubic-bezier(.16,1,.3,1)]

    ${
      open
        ? "translate-y-0 scale-100 opacity-100"
        : "translate-y-5 scale-[0.985] opacity-0"
    }
  `}
        role="dialog"
        aria-modal="true"
        aria-label="Plan Your Stay"
      >
        {/* ===================================================
            TOP GOLD LINE
        =================================================== */}

        <div
          className={`
            absolute
            left-0
            right-0
            top-0
            z-[50]

            h-[2px]

            origin-left

            bg-[#a8b85e]

            transition-transform
            duration-[1100ms]
            ease-[cubic-bezier(.16,1,.3,1)]

            ${open ? "scale-x-100" : "scale-x-0"}
          `}
        />

        {/* ===================================================
            CLOSE
        =================================================== */}

        <button
          type="button"
          onClick={onClose}
          className="
            group

            absolute
            right-7
            top-6
            z-[60]

            flex
            items-center
            gap-3

            text-[#24372b]

            transition-all
            duration-500
          "
          aria-label="Close"
        >
          <span
            className="
              font-lora
              text-[12px]
              italic

              transition-colors
              duration-300

              group-hover:text-[#7e9743]
            "
          >
            Close
          </span>

          <span
            className="
              h-px
              w-[27px]

              bg-[#24372b]/45

              transition-all
              duration-500

              group-hover:w-[38px]
              group-hover:bg-[#8faa42]
            "
          />

          <span
            className="
              relative

              flex
              h-[25px]
              w-[25px]

              items-center
              justify-center

              rounded-full

              transition-all
              duration-500

              group-hover:bg-[#dce1c9]
            "
          >
            <span
              className="
                absolute
                h-px
                w-[16px]
                rotate-45
                bg-[#24372b]
              "
            />

            <span
              className="
                absolute
                h-px
                w-[16px]
                -rotate-45
                bg-[#24372b]
              "
            />
          </span>
        </button>

        {/* ===================================================
            MAIN
        =================================================== */}

        <div
          className="
            relative

            grid

            min-h-[590px]

          
          lg:grid-cols-[32%_68%]
          "
        >
          {/* =================================================
              IMAGE SECTION   lg:grid-cols-[30%_70%]
          ================================================= */}

          <div
            className="
    relative
    h-full
    min-h-[560px]
    overflow-hidden
    bg-[#16271b]
  "
          >
            <img
              src={bookingImage}
              alt="Riverside retreat"
              className="
      absolute
      inset-0
      h-full
      w-full
      object-cover
     object-[35%_center]
      transition-transform
      duration-[1600ms]
      ease-out
    "
            />

            {/* image warmth */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-[#06130d]/55
                via-[#06130d]/12
                to-transparent
              "
            />
            <div
              className="
                pointer-events-none
                absolute
                inset-y-0
                left-0
                z-[5]
                w-[72%]
                bg-gradient-to-r
                from-[#06130d]/48
                via-[#06130d]/24
                to-transparent
              "
            />

            {/* golden overlay */}
            <div
              className="
                absolute
                inset-0

                bg-[#c89a43]/[0.05]

                mix-blend-soft-light
              "
            />

            {/* =============================================
                IMAGE TEXT
            ============================================= */}

            <div
              className={`
                absolute
                left-[85px]
                top-1/2
                z-20
                w-[170px]
                -translate-y-1/2
                text-center

                transition-all
                duration-[900ms]
                delay-[350ms]

                ${open ? "translate-y-[-50%] opacity-100" : "translate-y-[-42%] opacity-0"}
              `}
            >
              {/* EYEBROW */}
              <div className="mb-5 flex items-center justify-center gap-3">
                <span className="h-px w-[22px] bg-[#c6cf78]/80" />

                <span
                  className="
                    font-jost
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.30em]
                    text-white/80
                  "
                >
                  IN PACIANO
                </span>
              </div>

              {/* MAIN STATEMENT */}
              <h3
                className="
                  font-cormorant
                  text-[23px]
                  font-normal
                  uppercase
                  leading-[1.05]
                  tracking-[0.10em]
                  text-white
                  drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]
                "
              >
                A QUIETER
                <br />
                KIND OF
                <br />
                <span
                  className="
                    italic
                    tracking-[0.08em]
                    text-[#c6d477]
                  "
                >
                  LUXURY.
                </span>
              </h3>

              {/* SMALL VERTICAL ACCENT */}
              <div className="mx-auto mt-6 h-[30px] w-px bg-[#c6d477]/75" />

              {/* DESCRIPTION */}
              <p
                className="
                  mx-auto
                  mt-5
                  max-w-[190px]
                  font-lora
                  text-[11px]
                  italic
                  leading-[1.65]
                  text-white
                  drop-shadow-[0_2px_9px_rgba(0,0,0,0.75)]
                "
              >
                Where the river slows, the mountains breathe, and time feels
                different.
              </p>
            </div>

            {/* =================================================
                S-CURVE
            ================================================= */}

            {/* <div
              className="
                pointer-events-none
                absolute
                right-[-1px]
                top-0
                z-30

                hidden
                h-full
                w-[125px]

                lg:block
              "
            >
              <svg
                viewBox="0 0 125 590"
                preserveAspectRatio="none"
                className="h-full w-full"
              >
                {/* cream S-shaped fill 

                <path
                  d="
                    M125 0
                    C68 45 45 92 66 151
                    C86 207 89 250 55 306
                    C20 364 25 433 72 490
                    C91 514 105 550 125 590
                    L125 0
                    Z
                  "
                  fill="#eee9dc"
                />

                {/* subtle olive contour 

                <path
                  d="
                    M124 0
                    C67 45 44 92 65 151
                    C85 207 88 250 54 306
                    C19 364 24 433 71 490
                    C90 514 104 550 124 590
                  "
                  fill="none"
                  stroke="#9aa365"
                  strokeOpacity=".45"
                  strokeWidth="1"
                />
              </svg>
            </div> */}
            {/* =================================================
    SINGLE ORGANIC S-CURVE SEPARATOR
================================================= */}

            {/* <div
              className="
    pointer-events-none
    absolute
    right-[-1px]
    top-0
    z-30
    hidden
    h-full
    w-[120px]
    lg:block
  "
            >
              <svg
                viewBox="0 0 120 590"
                preserveAspectRatio="none"
                className="h-full w-full"
              >
                

                <path
                  d="
        M120 0

        C88 24 62 59 54 103
        C46 148 50 190 63 228
        C76 266 76 300 62 333

        C43 377 25 411 27 452
        C29 503 61 548 120 590

        L120 0
        Z
      "
                  fill="#eee9dc"
                />

               

                <path
                  d="
        M120 0

        C88 24 62 59 54 103
        C46 148 50 190 63 228
        C76 266 76 300 62 333

        C43 377 25 411 27 452
        C29 503 61 548 120 590
      "
                  fill="none"
                  stroke="#526744"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

               
                <path
                  d="
        M119 0

        C87 24 61 59 53 103
        C45 148 49 190 62 228
        C75 266 75 300 61 333

        C42 377 24 411 26 452
        C28 503 60 548 119 590
      "
                  fill="none"
                  stroke="#a1aa79"
                  strokeWidth="0.7"
                  strokeOpacity=".55"
                />
              </svg>
            </div> */}
            {/* =========================================
    IMAGE / CONTENT DIVIDER
========================================= */}

            <div
              className="
                pointer-events-none
                absolute
                left-[34%]
                top-0
                z-30
                hidden
                h-full
                lg:block
              "
            >
              {/* Main fine divider */}
            </div>
            {/* =================================================
                MOBILE CURVE
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-[-1px]
                left-0
                right-0
                z-30

                h-[80px]

                lg:hidden
              "
            >
              <svg
                viewBox="0 0 500 80"
                preserveAspectRatio="none"
                className="h-full w-full"
              >
                <path
                  d="
                    M0 80
                    C100 45 160 55 250 35
                    C340 15 410 25 500 0
                    L500 80
                    Z
                  "
                  fill="#eee9dc"
                />
              </svg>
            </div>
          </div>

          {/* =================================================
              RIGHT CONTENT
          ================================================= */}

          <div
            className="
              relative

              overflow-hidden

              px-8
              pb-8
              pt-14

              sm:px-10

              lg:px-[55px]
              lg:pb-[42px]
              lg:pt-[54px]
            "
          >
            {/* =================================================
                TOP BOTANICAL BRANCH
            ================================================= */}

            <div
              className={`
                pointer-events-none

                absolute
                left-[30px]
                top-[-6px]
                z-20

                transition-all
                duration-[1100ms]
                delay-[250ms]

                ${
                  open
                    ? "translate-y-0 rotate-0 opacity-100"
                    : "-translate-y-5 -rotate-6 opacity-0"
                }
              `}
            >
              <svg width="145" height="120" viewBox="0 0 145 120" fill="none">
                <path
                  d="M12 0C42 31 70 69 105 118"
                  stroke="#899966"
                  strokeWidth="1"
                />

                <path
                  d="M30 24C19 12 9 9 2 12C7 25 18 30 30 24Z"
                  fill="#9eab7d"
                  fillOpacity=".8"
                />

                <path
                  d="M49 43C60 29 71 26 79 29C75 41 64 47 49 43Z"
                  fill="#778a55"
                  fillOpacity=".75"
                />

                <path
                  d="M68 66C57 53 46 51 38 55C43 67 55 72 68 66Z"
                  fill="#aab68c"
                  fillOpacity=".75"
                />

                <path
                  d="M89 91C100 77 111 73 119 77C115 90 104 96 89 91Z"
                  fill="#83935f"
                  fillOpacity=".7"
                />
              </svg>
            </div>

            {/* =================================================
                GHOST LEAF
            ================================================= */}

            <div
              className="
                pointer-events-none

                absolute
                right-[25px]
                top-[70px]

                opacity-[0.055]

                rotate-[18deg]
              "
            >
              <svg width="170" height="220" viewBox="0 0 170 220" fill="none">
                <path
                  d="M85 0C85 70 78 145 58 220"
                  stroke="#173321"
                  strokeWidth="2"
                />

                <ellipse
                  cx="64"
                  cy="67"
                  rx="19"
                  ry="42"
                  transform="rotate(-35 64 67)"
                  fill="#173321"
                />

                <ellipse
                  cx="112"
                  cy="98"
                  rx="19"
                  ry="43"
                  transform="rotate(38 112 98)"
                  fill="#173321"
                />

                <ellipse
                  cx="51"
                  cy="136"
                  rx="17"
                  ry="37"
                  transform="rotate(-38 51 136)"
                  fill="#173321"
                />
              </svg>
            </div>

            {/* =================================================
                EYEBROW
            ================================================= */}

            <div
              className={`
                relative
                z-30

                flex
                items-center
                gap-4

                transition-all
                duration-700
                delay-[250ms]

                ${
                  open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }
              `}
            >
              <span
                className="
                  h-px
                  w-[31px]
                  bg-[#9ba46f]
                "
              />

              <span
                className="
                  font-jost
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.34em]

                  text-[#758055]
                "
              >
                Riverside Retreat
              </span>

              <span
                className="
                  h-px
                  w-[31px]
                  bg-[#9ba46f]
                "
              />
            </div>

            {/* =================================================
                TITLE
            ================================================= */}

            <h2
              className={`
                relative
                z-30

                mt-5

                font-cormorant
                text-[48px]
                font-normal
                leading-[0.9]
                tracking-[-0.025em]

                text-[#17271c]

                sm:text-[55px]

                lg:text-[62px]

                transition-all
                duration-[900ms]
                delay-[320ms]
                ease-[cubic-bezier(.16,1,.3,1)]

                ${
                  open ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"
                }
              `}
            >
              Plan Your Stay
            </h2>

            {/* =================================================
                INTRO
            ================================================= */}

            <p
              className={`
                relative
                z-30

                mt-4

                max-w-[520px]

                font-lora
                text-[10px]
                italic
                leading-[1.7]

                text-[#68735f]

                transition-all
                duration-700
                delay-[430ms]

                ${
                  open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }
              `}
            >
              Choose the days you would like to slow down, reconnect and stay
              awhile.
            </p>

            {/* =================================================
                FORM
            ================================================= */}

            <div
              className={`
                relative
                z-30

                mt-11

                border-y
                border-[#173321]/15

                transition-all
                duration-700
                delay-[500ms]

                ${
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }
              `}
            >
              <div
                className="
                  grid

                  md:grid-cols-[1fr_1fr_0.9fr_126px]
                "
              >
                {/* =========================================
                    ARRIVAL
                ========================================= */}

                <LuxuryDateField
                  label="Arrival"
                  value={checkIn}
                  min={today}
                  onChange={setCheckIn}
                  helper="Choose your arrival"
                />

                {/* =========================================
                    DEPARTURE
                ========================================= */}

                <LuxuryDateField
                  label="Departure"
                  value={checkOut}
                  min={checkIn || today}
                  onChange={setCheckOut}
                  helper="Choose your departure"
                  bordered
                />

                {/* =========================================
                    GUESTS
                ========================================= */}

                <div
                  className="
                    min-h-[160px]

                    border-[#173321]/15

                    px-5
                    py-7

                    md:border-r
                  "
                >
                  <span
                    className="
                      font-jost
                      text-[8px]
                      font-medium
                      uppercase
                      tracking-[0.27em]

                      text-[#7d875d]
                    "
                  >
                    Guests
                  </span>

                  <div className="relative mt-6">
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="
                        w-full

                        appearance-none

                        border-0
                        bg-transparent

                        p-0

                        font-cormorant
                        text-[24px]
                        font-normal

                        text-[#17271c]

                        outline-none
                      "
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="7">7 Guests</option>
                      <option value="8">8 Guests</option>
                    </select>

                    <span
                      className="
                        pointer-events-none

                        absolute
                        right-1
                        top-1/2

                        -translate-y-1/2

                        text-[13px]
                        text-[#536151]
                      "
                    >
                      ↓
                    </span>
                  </div>

                  <div
                    className="
                      mt-5

                      h-px
                      w-full

                      bg-[#173321]/20
                    "
                  />

                  <span
                    className="
                      mt-3
                      block

                      font-lora
                      text-[9px]
                      italic

                      text-[#68735f]
                    "
                  >
                    More options
                  </span>
                </div>

                {/* =========================================
                    CHECK AVAILABILITY
                ========================================= */}

                <button
                  type="button"
                  onClick={onCheckAvailability}
                  className="
                    group/availability

                    relative

                    flex
                    min-h-[160px]

                    flex-col
                    items-center
                    justify-center

                    overflow-hidden

                    bg-[#173321]

                    text-[#f5f0e7]

                    transition-all
                    duration-700

                    hover:bg-[#24472f]
                  "
                >
                  {/* expanding ring */}

                  <span
                    className="
                      absolute

                      left-1/2
                      top-1/2

                      h-[62px]
                      w-[62px]

                      -translate-x-1/2
                      -translate-y-1/2

                      rounded-full

                      border
                      border-[#c6d477]/70

                      transition-all
                      duration-700

                      group-hover/availability:h-[82px]
                      group-hover/availability:w-[82px]
                    "
                  />

                  {/* arrow circle */}

                  <span
                    className="
                      relative
                      z-10

                      flex
                      h-[58px]
                      w-[58px]

                      items-center
                      justify-center

                      rounded-full

                      border
                      border-[#c6d477]

                      transition-all
                      duration-700

                      group-hover/availability:bg-[#c6d477]
                      group-hover/availability:text-[#173321]
                    "
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="
                        transition-transform
                        duration-500

                        group-hover/availability:translate-x-1
                      "
                    >
                      <path
                        d="M4 12H19"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />

                      <path
                        d="M13 6L19 12L13 18"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <span
                    className="
                      relative
                      z-10

                      mt-5

                      text-center

                      font-jost
                      text-[8px]
                      font-medium
                      uppercase
                      leading-[1.8]

                      tracking-[0.25em]
                    "
                  >
                    Check
                    <br />
                    Availability
                  </span>
                </button>
              </div>
            </div>

            {/* =================================================
                FOOTER
            ================================================= */}

            <div
              className={`
                relative
                z-30

                mt-7

                flex

                flex-col
                gap-5

                sm:flex-row
                sm:items-end
                sm:justify-between

                transition-all
                duration-700
                delay-[650ms]

                ${
                  open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }
              `}
            >
              <div>
                <div
                  className="
                    mb-3
                    h-px
                    w-[34px]

                    bg-[#9ba46f]
                  "
                />

                <p
                  className="
                    font-lora
                    text-[11px]
                    italic

                    text-[#536151]
                  "
                >
                  Riverside calm
                  <span className="mx-2 text-[#9aaa50]">·</span>
                  Tea gardens
                  <span className="mx-2 text-[#9aaa50]">·</span>
                  Slow living
                </p>
              </div>

              <div className="text-right">
                <p
                  className="
                    font-jost
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.32em]

                    text-[#738143]
                  "
                >
                  PACIANO
                </p>

                <p
                  className="
                    mt-2

                    font-jost
                    text-[7px]
                    uppercase
                    tracking-[0.28em]

                    text-[#89917d]
                  "
                >
                  Stay a little longer
                </p>
              </div>
            </div>

            {/* =================================================
                BOTTOM BOTANICAL
            ================================================= */}

            <div
              className="
                pointer-events-none

                absolute
                bottom-[-15px]
                right-[55px]

                opacity-50
              "
            >
              <svg width="90" height="110" viewBox="0 0 90 110" fill="none">
                <path
                  d="M75 110C68 82 49 48 18 12"
                  stroke="#84925d"
                  strokeWidth="1"
                />

                <path
                  d="M51 70C63 57 74 55 81 59C77 71 66 77 51 70Z"
                  fill="#8c9b67"
                  fillOpacity=".7"
                />

                <path
                  d="M35 50C24 40 14 39 8 44C14 55 25 59 35 50Z"
                  fill="#aab68b"
                  fillOpacity=".7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LuxuryDateField({
  label,
  value,
  min,
  onChange,
  helper,
  bordered = false,
}: {
  label: string;
  value: string;
  min: string;
  onChange: (value: string) => void;
  helper: string;
  bordered?: boolean;
}) {
  const formatted = value
    ? (() => {
        const date = new Date(`${value}T00:00:00`);

        return {
          day: date.toLocaleDateString("en-GB", {
            day: "2-digit",
          }),

          month: date
            .toLocaleDateString("en-GB", {
              month: "short",
            })
            .toUpperCase(),

          year: date.toLocaleDateString("en-GB", {
            year: "numeric",
          }),
        };
      })()
    : {
        day: "--",
        month: "---",
        year: "----",
      };

  return (
    <label
      className={`
        group/date

        relative

        flex
        min-h-[160px]

        cursor-pointer
        flex-col
        justify-center

        px-5
        py-7

        transition-all
        duration-500

        hover:bg-[#e6e0d3]/55

        ${bordered ? "border-[#173321]/15 md:border-r" : ""}
      `}
    >
      {/* ===============================================
          NATIVE DATE INPUT
      =============================================== */}

      <input
        type="date"
        value={value}
        min={min}
        onChange={(e) => onChange(e.target.value)}
        className="
          absolute
          inset-0
          z-20

          h-full
          w-full

          cursor-pointer

          opacity-0
        "
      />

      {/* ===============================================
          LABEL
      =============================================== */}

      <span
        className="
          relative
          z-10

          font-jost
          text-[8px]
          font-medium
          uppercase
          tracking-[0.27em]

          text-[#7d875d]
        "
      >
        {label}
      </span>

      {/* ===============================================
          DATE
      =============================================== */}

      <div
        className="
          relative
          z-10

          mt-5

          flex
          items-center
          justify-between
        "
      >
        <div className="flex items-baseline gap-3">
          <span
            className="
              font-cormorant
              text-[46px]
              font-normal
              leading-none

              text-[#17271c]

              transition-all
              duration-500

              group-hover/date:text-[#7c953f]
            "
          >
            {formatted.day}
          </span>

          <span
            className="
              flex
              flex-col

              font-jost
              text-[8px]
              font-medium
              uppercase
              leading-[1.35]

              tracking-[0.08em]

              text-[#465347]
            "
          >
            <span>{formatted.month}</span>
            <span>{formatted.year}</span>
          </span>
        </div>

        {/* =============================================
            CALENDAR ICON
        ============================================= */}

        <span
          className="
            flex
            h-[40px]
            w-[40px]

            shrink-0

            items-center
            justify-center

            rounded-full

            bg-[#e4ded0]

            text-[#24372b]

            transition-all
            duration-500

            group-hover/date:bg-[#d7dfba]
            group-hover/date:rotate-[-7deg]
          "
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
            <rect
              x="3.5"
              y="5"
              width="17"
              height="15"
              rx="1.5"
              stroke="currentColor"
              strokeWidth="1.3"
            />

            <path
              d="M7 3V7"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
            />

            <path
              d="M17 3V7"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
            />

            <path d="M3.5 9H20.5" stroke="currentColor" strokeWidth="1.3" />
          </svg>
        </span>
      </div>

      {/* ===============================================
          UNDERLINE
      =============================================== */}

      <span
        className="
          relative
          z-10

          mt-5

          h-px
          w-full

          origin-left

          bg-[#173321]/20

          transition-all
          duration-500

          group-hover/date:bg-[#8faa42]
        "
      />

      {/* ===============================================
          HELPER
      =============================================== */}

      <span
        className="
          relative
          z-10

          mt-3

          font-lora
          text-[9px]
          italic

          text-[#68735f]
        "
      >
        {helper}
      </span>
    </label>
  );
}

function DateField({
  label,
  value,
  onChange,
  min,
  helper,
  delay,
  bordered = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  min: string;
  helper: string;
  delay: string;
  bordered?: boolean;
}) {
  const formatDate = (date: string) => {
    if (!date) {
      return {
        day: "--",
        month: "---",
        year: "----",
      };
    }

    const parsed = new Date(`${date}T00:00:00`);

    return {
      day: parsed.toLocaleDateString("en-GB", {
        day: "2-digit",
      }),

      month: parsed
        .toLocaleDateString("en-GB", {
          month: "short",
        })
        .toUpperCase(),

      year: parsed.toLocaleDateString("en-GB", {
        year: "numeric",
      }),
    };
  };

  const formatted = formatDate(value);

  return (
    <label
      className={`
        group/date

        relative
        flex
        min-h-[150px]

        cursor-pointer
        flex-col
        justify-center

        px-5
        py-7

        ${bordered ? "border-[#173321]/15 md:border-r" : ""}

        transition-all
        duration-500

        hover:bg-[#e7e1d3]/55

        opacity-100
      `}
      style={{
        transitionDelay: delay,
      }}
    >
      {/* hidden native date picker */}
      <input
        type="date"
        value={value}
        min={min}
        onChange={(e) => onChange(e.target.value)}
        className="
          absolute
          inset-0
          z-20

          h-full
          w-full

          cursor-pointer

          opacity-0
        "
        aria-label={label}
      />

      <span
        className="
          relative
          z-10

          font-jost
          text-[8px]
          font-medium
          uppercase
          tracking-[0.25em]

          text-[#7d875d]
        "
      >
        {label}
      </span>

      <div
        className="
          relative
          z-10

          mt-4

          flex
          items-center
          justify-between
        "
      >
        <div className="flex items-baseline gap-3">
          <span
            className="
              font-cormorant
              text-[46px]
              font-normal
              leading-none

              text-[#17271c]

              transition-all
              duration-500

              group-hover/date:text-[#7b943e]
            "
          >
            {formatted.day}
          </span>

          <span
            className="
              flex
              flex-col

              font-jost
              text-[9px]
              font-medium
              uppercase
              leading-[1.25]

              tracking-[0.1em]

              text-[#344437]
            "
          >
            <span>{formatted.month}</span>
            <span>{formatted.year}</span>
          </span>
        </div>

        {/* calendar icon */}
        <span
          className="
            flex
            h-[40px]
            w-[40px]

            items-center
            justify-center

            rounded-full

            bg-[#e5dfd1]

            transition-all
            duration-500

            group-hover/date:bg-[#d5ddb8]
            group-hover/date:rotate-[-6deg]
          "
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
            <rect
              x="3.5"
              y="5"
              width="17"
              height="15"
              rx="1.5"
              stroke="currentColor"
              strokeWidth="1.3"
            />

            <path
              d="M7 3V7"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
            />

            <path
              d="M17 3V7"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
            />

            <path d="M3.5 9H20.5" stroke="currentColor" strokeWidth="1.3" />
          </svg>
        </span>
      </div>

      <div
        className="
          relative
          z-10

          mt-5

          h-px
          w-full

          bg-[#173321]/20

          origin-left

          transition-all
          duration-500

          group-hover/date:scale-x-100
          group-hover/date:bg-[#8faa42]
        "
      />

      <span
        className="
          relative
          z-10

          mt-3

          font-lora
          text-[10px]
          italic

          text-[#68735f]
        "
      >
        {helper}
      </span>
    </label>
  );
}
function NavItem({
  label,
  href,
  active = false,
}: {
  label: string;
  href: string;
  active?: boolean;
}) {
  return (
    <a
      href={href}
      className={`
    group
    relative
    whitespace-nowrap
    py-2

    font-jost
text-[12px]
font-normal
uppercase
leading-none
tracking-[0.14em]
text-white/85

    text-white/85
    drop-shadow-[0_1px_5px_rgba(0,0,0,0.45)]

    transition-all
    duration-500
    ease-out

    active
  ? "text-[#a9b85f]"
  : "hover:text-white"
  `}
    >
      {label}

      <span
        className={`
          absolute
          -bottom-3
          left-1/2
          h-px
          -translate-x-1/2
          bg-[#a4bd55]

          transition-all
          duration-500
          ease-out

          ${
            active
              ? "w-[18px] opacity-100"
              : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
          }
        `}
      />
    </a>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      className={`
        fixed
        inset-0
        z-[90]
        lg:hidden
        transition-all
        duration-500
        ${
          open
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }
      `}
    >
      {/* BACKDROP */}
      <div
        className="
          absolute
          inset-0
          bg-[#07150e]/70
          backdrop-blur-md
        "
        onClick={onClose}
      />

      {/* PANEL */}
      <div
        className={`
          absolute
          right-0
          top-0
          flex
          h-full
          w-[88%]
          max-w-[430px]
          flex-col
          bg-[#eee8da]
          px-8
          pb-8
          pt-28
          shadow-2xl
          transition-transform
          duration-700
          ease-[cubic-bezier(.22,1,.36,1)]
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* LOGO */}
        <div className="mb-10">
          <img
            src={pacianoLogo}
            alt="Paciano"
            className="
              h-[70px]
              w-auto
              object-contain
            "
          />
        </div>

        {/* LINKS */}
        <nav className="flex flex-col">
          <MobileNavItem label="Home" href="#home" onClick={onClose} />

          {NAV_LINKS.map((item) => (
            <MobileNavItem
              key={item.label}
              label={item.label}
              href={item.href}
              onClick={onClose}
            />
          ))}
        </nav>

        {/* BOOKING */}
        <div className="mt-auto">
          <a
            href="#booking"
            className="
    group
    hidden
    lg:flex
    items-center
    gap-3

    font-lora
    text-[14px]
    font-medium
    tracking-[0.015em]
    text-[#f5f1e8]

    transition-all
    duration-500
  "
          >
            <span
              className="
      relative
      pb-1
      transition-colors
      duration-500
      group-hover:text-[#b5ca67]
    "
            >
              Book Your Stay
              <span
                className="
        absolute
        bottom-0
        left-0
        h-px
        w-full
        origin-right
        bg-[#b5ca67]/60
        transition-transform
        duration-500
        group-hover:scale-x-0
      "
              />
            </span>

            <span
              className="
      flex
      h-[30px]
      w-[30px]
      items-center
      justify-center
      rounded-full
      border
      border-[#d9ddc7]/45
      bg-[#f4f0e5]/8
      text-[15px]
      font-light
      backdrop-blur-sm

      transition-all
      duration-500

      group-hover:border-[#b5ca67]
      group-hover:bg-[#b5ca67]
      group-hover:text-[#102619]
      group-hover:translate-x-1
    "
            >
              ↗
            </span>
          </a>
          <p
            className="
              mt-5
              text-center
              font-paciano-ui
              text-[10px]
              uppercase
              tracking-[0.22em]
              text-[#68735f]
            "
          >
            Retreat · Reconnect · Rejuvenate
          </p>
        </div>
      </div>
    </div>
  );
}

function MobileNavItem({
  label,
  href,
  onClick,
}: {
  label: string;
  href: string;
  onClick: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="
        group
        flex
        items-center
        justify-between
        border-b
        border-[#173321]/10
        py-[17px]
        font-serif
        text-[24px]
        text-[#173321]
        transition-colors
        duration-300
        hover:text-[#789f3b]
      "
    >
      <span>{label}</span>

      <span
        className="
          translate-x-[-5px]
          text-[#789f3b]
          opacity-0
          transition-all
          duration-300
          group-hover:translate-x-0
          group-hover:opacity-100
        "
      >
        →
      </span>
    </a>
  );
}
