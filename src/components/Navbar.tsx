import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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

  const [checkIn, setCheckIn] = useState("2026-10-14");
  const [checkOut, setCheckOut] = useState("2026-10-17");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [pets, setPets] = useState(0);

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
      adults,
      children,
      pets,
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

    if (shouldLockScroll) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
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
        adults={adults}
        setAdults={setAdults}
        children={children}
        setChildren={setChildren}
        pets={pets}
        setPets={setPets}
        onCheckAvailability={handleCheckAvailability}
      />

      {/* MOBILE MENU */}
      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onBooking={() => {
          setMenuOpen(false);
          setBookingOpen(true);
        }}
      />
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
  adults,
  setAdults,
  children,
  setChildren,
  pets,
  setPets,
  onCheckAvailability,
}: {
  open: boolean;
  onClose: () => void;

  checkIn: string;
  setCheckIn: (value: string) => void;

  checkOut: string;
  setCheckOut: (value: string) => void;

  adults: number;
  setAdults: (value: number) => void;

  children: number;
  setChildren: (value: number) => void;

  pets: number;
  setPets: (value: number) => void;

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
          max-w-[1240px]
          max-h-[calc(100vh-32px)]

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
            max-h-[calc(100vh-32px)]

            grid

            min-h-[590px]
            overflow-y-auto
            lg:overflow-y-visible

          
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
    lg:min-h-0
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
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.30em]

                  text-[#758055]
                "
              >
                THE PACIANO PAUSE
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
               
                uppercase
                leading-[0.9]
                tracking-[-0.025em]

                text-[#17271c]

                sm:text-[55px]

                lg:text-[38px]

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
                text-[14px]
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

                 md:grid-cols-[1fr_1fr_1fr_184px]
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
                  bordered
                />

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

                <GuestSelector
                  adults={adults}
                  setAdults={setAdults}
                  children={children}
                  setChildren={setChildren}
                  pets={pets}
                  setPets={setPets}
                />

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
                    overflow-visible
                    bg-transparent
                    text-[#173321]
                  "
                >
                  <span
                    className="
                      relative
                      flex
                      h-[150px]
                      w-[150px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#173321]
                      transition-transform
                      duration-700
                      ease-out
                      group-hover/availability:scale-[1.02]
                    "
                  >
                    <span
                      className="
                        absolute
                        h-[72px]
                        w-[72px]
                        rounded-full
                        border
                        border-[#c6d477]
                        transition-transform
                        duration-700
                        group-hover/availability:scale-[1.04]
                      "
                    />

                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="
                        relative
                        z-10
                        transition-transform
                        duration-500
                        group-hover/availability:translate-x-1
                      "
                    >
                      <path
                        d="M5 12H18"
                        stroke="#F5F0E7"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                      />
                      <path
                        d="M13.5 7.5L18 12L13.5 16.5"
                        stroke="#F5F0E7"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <span
                    className="
                      mt-2
                      text-center
                      font-jost
                      text-[10px]
                      font-medium
                      uppercase
                      leading-[1.65]
                      tracking-[0.24em]
                      text-[#173321]
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
                FOOTER — REFERENCE STYLE
            ================================================= */}

            <div
              className={`
                relative
                z-30
                mt-7
                border-t
                border-[#173321]/10
                pt-5
                transition-all
                duration-700
                delay-[650ms]

                ${
                  open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }
              `}
            >
              <div className="grid grid-cols-2 items-end">
                {/* LEFT — EXPERIENCE TAGLINE */}
                <div className="pr-8">
                  <p
                    className="
                      font-lora
                      text-[11px]
                      italic
                      leading-[1.5]
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

                {/* RIGHT — BRAND */}
                <div className="border-l border-[#173321]/10 pl-8 text-right">
                  <p
                    className="
                      font-jost
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.34em]
                      text-[#738143]
                    "
                  >
                    Paciano
                  </p>

                  <p
                    className="
                      mt-2
                      font-jost
                      text-[10px]
                      uppercase
                      tracking-[0.30em]
                      text-[#89917d]
                    "
                  >
                    Stay a little longer
                  </p>
                </div>
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
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [viewDate, setViewDate] = useState(() => {
    const base = value || min || new Date().toISOString().split("T")[0];
    const parsed = new Date(`${base}T00:00:00`);
    return new Date(parsed.getFullYear(), parsed.getMonth(), 1);
  });

  const dateButtonRef = useRef<HTMLButtonElement | null>(null);
  const calendarButtonRef = useRef<HTMLButtonElement | null>(null);
  const calendarPanelRef = useRef<HTMLDivElement | null>(null);
  const [calendarPosition, setCalendarPosition] = useState({ top: 0, left: 0 });

  const todayString = new Date().toISOString().split("T")[0];

  const parseDate = (dateString: string) => new Date(`${dateString}T00:00:00`);

  const toDateString = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const formatted = value
    ? (() => {
        const date = parseDate(value);

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

  const updateCalendarPosition = () => {
    const anchor = calendarButtonRef.current ?? dateButtonRef.current;
    if (!anchor) return;

    const rect = anchor.getBoundingClientRect();
    const panelWidth = 300;
    const panelHeight = 350;
    const gap = 12;

    let left = rect.left + rect.width / 2 - panelWidth / 2;
    let top = rect.bottom + gap;

    if (left < 16) left = 16;
    if (left + panelWidth > window.innerWidth - 16) {
      left = window.innerWidth - panelWidth - 16;
    }

    if (top + panelHeight > window.innerHeight - 16) {
      top = rect.top - panelHeight - gap;
    }

    if (top < 16) top = 16;

    setCalendarPosition({ top, left });
  };

  const openCalendar = () => {
    updateCalendarPosition();
    setCalendarOpen(true);
  };

  useEffect(() => {
    if (!calendarOpen) return;

    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        calendarButtonRef.current?.contains(target) ||
        calendarPanelRef.current?.contains(target)
      ) {
        return;
      }

      setCalendarOpen(false);
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setCalendarOpen(false);
      }
    };

    const handleViewportChange = () => {
      updateCalendarPosition();
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleViewportChange);
    window.addEventListener("scroll", handleViewportChange, true);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleViewportChange);
      window.removeEventListener("scroll", handleViewportChange, true);
    };
  }, [calendarOpen]);

  useEffect(() => {
    if (!calendarOpen) return;

    const base = value || min || todayString;
    const parsed = parseDate(base);
    setViewDate(new Date(parsed.getFullYear(), parsed.getMonth(), 1));
  }, [calendarOpen, value, min]);

  const monthLabel = viewDate.toLocaleDateString("en-US", {
    month: "long",
  });

  const yearLabel = viewDate.getFullYear();

  const firstDay = new Date(
    viewDate.getFullYear(),
    viewDate.getMonth(),
    1,
  ).getDay();

  // Monday-first calendar.
  const mondayFirstOffset = (firstDay + 6) % 7;

  const daysInMonth = new Date(
    viewDate.getFullYear(),
    viewDate.getMonth() + 1,
    0,
  ).getDate();

  const days = Array.from(
    { length: mondayFirstOffset + daysInMonth },
    (_, i) => {
      if (i < mondayFirstOffset) return null;
      return i - mondayFirstOffset + 1;
    },
  );

  const goToPreviousMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  };

  const minimumDate = min ? parseDate(min) : null;

  const isDisabled = (dateString: string) => {
    if (!minimumDate) return false;
    return parseDate(dateString) < minimumDate;
  };

  const isSelected = (dateString: string) => value === dateString;
  const isToday = (dateString: string) => todayString === dateString;

  const selectDate = (dateString: string) => {
    if (isDisabled(dateString)) return;

    onChange(dateString);
    setCalendarOpen(false);
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
        ${bordered ? "border-[#173321]/18 md:border-r" : ""}
      `}
    >
      <span
        className="
          relative
          z-10
          font-jost
          text-[11px]
          font-medium
          uppercase
          tracking-[0.28em]
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
          pb-4          
        "
      >
        <button
          type="button"
          onClick={openCalendar}
          className="
            flex
            items-center
            gap-3
            text-left
            outline-none
          "
          aria-label={`Choose ${label.toLowerCase()} date`}
          ref={dateButtonRef}
        >
          <span
            className="
              font-cormorant
              text-[56px]
              font-normal
              leading-[0.86]
              tracking-[-0.025em]
              text-[#102619]
              transition-colors
              duration-500
              group-hover/date:text-[#667238]
            "
          >
            {formatted.day}
          </span>

          <span
            className="
              flex
              flex-col
              justify-center
              self-center
              translate-y-[4px]
              font-jost
              text-[11px]
              font-medium
              uppercase
              leading-[1.15]
              tracking-[0.08em]
              text-[#4f5d38]
            "
          >
            <span>{formatted.month}</span>
            <span>{formatted.year}</span>
          </span>
        </button>

        <button
          type="button"
          ref={calendarButtonRef}
          onClick={openCalendar}
          aria-label={`Open ${label.toLowerCase()} calendar`}
          className="
            flex
            h-[46px]
            w-[46px]
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-[#b4b9a0]
            bg-[#e4ded0]
            text-[#30432f]
            transition-all
            duration-500
            hover:border-[#7d8a4d]
            hover:bg-[#d7dfba]
            hover:text-[#536634]
          "
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect
              x="3.5"
              y="5"
              width="17"
              height="15"
              rx="1.5"
              stroke="currentColor"
              strokeWidth="1.25"
            />
            <path
              d="M7 3V7M17 3V7"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
            />
            <path d="M3.5 9H20.5" stroke="currentColor" strokeWidth="1.25" />
            <path
              d="M7.5 12.5H7.51M12 12.5H12.01M16.5 12.5H16.51M7.5 16H7.51M12 16H12.01"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      {/* ===============================================
          UNDERLINE
      =============================================== */}

      <span
        className="
          relative
          z-10

          mt-4

          h-px
          w-full

          origin-left

          bg-[#173321]/20

          transition-all
          duration-500

          group-hover/date:bg-[#8faa42]
        "
      />

      <span
        className="
          relative
          z-10
          mt-3
          whitespace-nowrap
          font-lora
          text-[12px]
          italic
          leading-[1.35]
          text-[#5f6957]
        "
      >
        {helper}
      </span>

      {calendarOpen &&
        createPortal(
          <div
            ref={calendarPanelRef}
            className="
              fixed
              z-[9999]
              w-[300px]
              overflow-hidden
              rounded-[18px]
              border
              border-[#a5ad7a]/70
              bg-[#f1ede2]/[0.985]
              shadow-[0_28px_80px_rgba(20,37,25,0.24)]
              backdrop-blur-xl
            "
            style={{
              top: `${calendarPosition.top}px`,
              left: `${calendarPosition.left}px`,
            }}
            role="dialog"
            aria-label={`${label} date picker`}
          >
            <div className="relative px-5 pb-4 pt-5">
              <div className="absolute left-5 top-0 h-px w-12 bg-[#8e9a5b]" />

              <div className="flex items-start justify-between">
                <div>
                  <p className="font-jost text-[8px] font-medium uppercase tracking-[0.28em] text-[#788454]">
                    Select {label}
                  </p>
                  <p className="mt-1 font-cormorant text-[28px] leading-none tracking-[-0.015em] text-[#173321]">
                    {monthLabel}
                    <span className="ml-2 text-[#6d7948]">{yearLabel}</span>
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setCalendarOpen(false)}
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    text-[#526044]
                    transition-colors
                    hover:bg-[#dde3cb]
                  "
                  aria-label="Close calendar"
                >
                  ×
                </button>
              </div>

              <div className="mt-4 flex items-center justify-between border-y border-[#173321]/10 py-2">
                <button
                  type="button"
                  onClick={goToPreviousMonth}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-[#526044] transition-colors hover:bg-[#dde3cb]"
                  aria-label="Previous month"
                >
                  ←
                </button>

                <span className="font-jost text-[8px] font-medium uppercase tracking-[0.24em] text-[#879063]">
                  {monthLabel} {yearLabel}
                </span>

                <button
                  type="button"
                  onClick={goToNextMonth}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-[#526044] transition-colors hover:bg-[#dde3cb]"
                  aria-label="Next month"
                >
                  →
                </button>
              </div>

              <div className="mt-4 grid grid-cols-7 gap-y-1 text-center">
                {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(
                  (dayName) => (
                    <span
                      key={dayName}
                      className="font-jost text-[8px] font-medium tracking-[0.12em] text-[#8b927c]"
                    >
                      {dayName}
                    </span>
                  ),
                )}

                {days.map((day, index) => {
                  if (!day) {
                    return <span key={`empty-${index}`} className="h-9" />;
                  }

                  const date = new Date(
                    viewDate.getFullYear(),
                    viewDate.getMonth(),
                    day,
                  );
                  const dateString = toDateString(date);
                  const disabled = isDisabled(dateString);
                  const selected = isSelected(dateString);
                  const today = isToday(dateString);

                  return (
                    <button
                      key={dateString}
                      type="button"
                      disabled={disabled}
                      onClick={() => selectDate(dateString)}
                      className={`
                        mx-auto
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        font-cormorant
                        text-[17px]
                        leading-none
                        transition-all
                        duration-200
                        ${
                          selected
                            ? "bg-[#667238] text-[#f6f2e9] shadow-[0_6px_16px_rgba(102,114,56,0.24)]"
                            : today
                              ? "border border-[#82904f] text-[#536331] hover:bg-[#e0e5cf]"
                              : "text-[#344437] hover:bg-[#e1e5d7] hover:text-[#596832]"
                        }
                        ${disabled ? "cursor-not-allowed text-[#b8bbae] opacity-40 hover:bg-transparent hover:text-[#b8bbae]" : ""}
                      `}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-[#173321]/10 pt-3">
                <span className="font-lora text-[10px] italic text-[#68735f]">
                  {value
                    ? `Selected ${formatted.day} ${formatted.month} ${formatted.year}`
                    : "Choose a date to continue"}
                </span>

                <button
                  type="button"
                  onClick={() => {
                    const todayDate = parseDate(todayString);
                    const candidate = min
                      ? todayDate < parseDate(min)
                        ? parseDate(min)
                        : todayDate
                      : todayDate;

                    const dateString = toDateString(candidate);
                    onChange(dateString);
                    setViewDate(
                      new Date(
                        candidate.getFullYear(),
                        candidate.getMonth(),
                        1,
                      ),
                    );
                    setCalendarOpen(false);
                  }}
                  className="
                    font-jost
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-[#667238]
                    transition-colors
                    hover:text-[#3e4c2d]
                  "
                >
                  Today
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </label>
  );
}

function GuestSelector({
  adults,
  setAdults,
  children,
  setChildren,
  pets,
  setPets,
}: {
  adults: number;
  setAdults: (value: number) => void;
  children: number;
  setChildren: (value: number) => void;
  pets: number;
  setPets: (value: number) => void;
}) {
  const [open, setOpen] = useState(false);
  const guestButtonRef = useRef<HTMLButtonElement | null>(null);
  const guestPanelRef = useRef<HTMLDivElement | null>(null);
  const [panelPosition, setPanelPosition] = useState({ top: 0, left: 0 });

  const totalGuests = adults + children;

  const updateCount = (
    current: number,
    setter: (value: number) => void,
    delta: number,
    minimum = 0,
  ) => {
    setter(Math.max(minimum, current + delta));
  };

  const updatePanelPosition = () => {
    const anchor = guestButtonRef.current;
    if (!anchor) return;

    const rect = anchor.getBoundingClientRect();
    const panelWidth = 300;
    const panelHeight = 300;
    const gap = 12;

    let left = rect.left + rect.width / 2 - panelWidth / 2;
    let top = rect.bottom + gap;

    if (left < 16) left = 16;
    if (left + panelWidth > window.innerWidth - 16) {
      left = window.innerWidth - panelWidth - 16;
    }

    // Prefer opening downward, but move above the field when needed.
    if (top + panelHeight > window.innerHeight - 16) {
      top = rect.top - panelHeight - gap;
    }

    if (top < 16) top = 16;

    setPanelPosition({ top, left });
  };

  const toggleGuests = () => {
    updatePanelPosition();
    setOpen((current) => !current);
  };

  useEffect(() => {
    if (!open) return;

    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        guestButtonRef.current?.contains(target) ||
        guestPanelRef.current?.contains(target)
      ) {
        return;
      }

      setOpen(false);
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const handleViewportChange = () => updatePanelPosition();

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleViewportChange);
    window.addEventListener("scroll", handleViewportChange, true);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleViewportChange);
      window.removeEventListener("scroll", handleViewportChange, true);
    };
  }, [open]);

  return (
    <div
      className="
        relative
        min-h-[160px]
        border-[#173321]/15
        px-5
        py-7
        md:border-r
      "
    >
      <span
        className="
          block
          font-jost
          text-[11px]
          font-medium
          uppercase
          tracking-[0.28em]
          text-[#7d875d]
        "
      >
        Guests
      </span>

      <button
        type="button"
        ref={guestButtonRef}
        onClick={toggleGuests}
        className="
          group/guest
          mt-6
          flex
          w-full
          items-center
          justify-between
          pb-4
          text-left
          outline-none          
        "
      >
        <span
          className="
            font-cormorant
            text-[25px]
            font-normal
            leading-none
            text-[#24372b]
            transition-colors
            duration-300
            group-hover/guest:text-[#667238]
          "
        >
          {adults} Adult{adults !== 1 ? "s" : ""}
        </span>

        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          className={`
            text-[#536151]
            transition-transform
            duration-300
            ${open ? "rotate-180" : ""}
          `}
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="mt-7 h-px w-full bg-[#173321]/20" />

      <button
        type="button"
        onClick={toggleGuests}
        className="
          mt-3
          block
          font-lora
          text-[12px]
          italic
          text-[#68735f]
        "
      >
        More Options
      </button>

      {open &&
        createPortal(
          <div
            ref={guestPanelRef}
            className="
              fixed
              z-[9998]
              w-[300px]
              overflow-hidden
              rounded-[18px]
              border
              border-[#a7ae80]/55
              bg-[#f2eee3]/[0.99]
              shadow-[0_30px_80px_rgba(23,51,33,0.24)]
              backdrop-blur-xl
            "
            style={{
              top: `${panelPosition.top}px`,
              left: `${panelPosition.left}px`,
            }}
            role="dialog"
            aria-label="Select guests"
          >
            <div className="relative px-5 pb-4 pt-5">
              <div className="absolute left-5 top-0 h-px w-14 bg-[#8e9a5b]" />

              <div className="flex items-end justify-between">
                <div>
                  <p className="font-jost text-[8px] font-medium uppercase tracking-[0.28em] text-[#7d875d]">
                    Your party
                  </p>
                  <h3 className="mt-1 font-cormorant text-[28px] leading-none tracking-[-0.015em] text-[#173321]">
                    Guests
                  </h3>
                </div>

                <span className="font-lora text-[13px] italic text-[#7b846f]">
                  {totalGuests} guest{totalGuests !== 1 ? "s" : ""}
                </span>
              </div>

              <div className="mt-5 divide-y divide-[#173321]/10 border-y border-[#173321]/10">
                <GuestCounter
                  label="Adults"
                  value={adults}
                  minimum={1}
                  onDecrease={() => updateCount(adults, setAdults, -1, 1)}
                  onIncrease={() => updateCount(adults, setAdults, 1, 1)}
                />

                <GuestCounter
                  label="Children"
                  value={children}
                  minimum={0}
                  onDecrease={() => updateCount(children, setChildren, -1)}
                  onIncrease={() => updateCount(children, setChildren, 1)}
                />

                <GuestCounter
                  label="Pets"
                  value={pets}
                  minimum={0}
                  onDecrease={() => updateCount(pets, setPets, -1)}
                  onIncrease={() => updateCount(pets, setPets, 1)}
                />
              </div>

              <div className="mt-3 flex items-center justify-between">
                <span className="font-lora text-[11px] italic text-[#7a836e]">
                  Pets are optional
                </span>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="
                    rounded-full
                    border
                    border-[#7d8b56]/45
                    px-5
                    py-2
                    font-jost
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.24em]
                    text-[#52623a]
                    transition-all
                    duration-300
                    hover:bg-[#dce2ca]
                  "
                >
                  Done
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}

function GuestCounter({
  label,
  value,
  minimum,
  onDecrease,
  onIncrease,
}: {
  label: string;
  value: number;
  minimum: number;
  onDecrease: () => void;
  onIncrease: () => void;
}) {
  return (
    <div className="flex items-center justify-between border-b border-[#173321]/10 py-3">
      <span className="font-lora text-[13px] text-[#344437]">{label}</span>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onDecrease}
          disabled={value <= minimum}
          aria-label={`Decrease ${label}`}
          className="
            flex h-7 w-7 items-center justify-center
            rounded-full
            border border-[#526744]/30
            text-[#526744]
            transition-colors
            hover:bg-[#dfe4cb]
            disabled:cursor-not-allowed
            disabled:opacity-30
          "
        >
          −
        </button>

        <span className="w-5 text-center font-jost text-[11px] text-[#24372b]">
          {value}
        </span>

        <button
          type="button"
          onClick={onIncrease}
          aria-label={`Increase ${label}`}
          className="
            flex h-7 w-7 items-center justify-center
            rounded-full
            border border-[#526744]/30
            text-[#526744]
            transition-colors
            hover:bg-[#dfe4cb]
          "
        >
          +
        </button>
      </div>
    </div>
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

function MobileMenu({
  open,
  onClose,
  onBooking,
}: {
  open: boolean;
  onClose: () => void;
  onBooking: () => void;
}) {
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
          <button
            type="button"
            onClick={onBooking}
            className="
    group
    flex
    items-center
    gap-3

    font-lora
    text-[14px]
    font-medium
    tracking-[0.015em]
    text-[#173321]

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
          </button>
          <p
            className="
              mt-5
              text-center
              font-jost
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
