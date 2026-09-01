import { useEffect, useState } from "react";
import pacianoLogo from "@/images/paciano-logo.png";

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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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
          <div className="ml-auto flex items-center gap-5">
            {/* BOOK YOUR STAY */}
            <a
              href="#booking"
              className="
                hidden
                h-[48px]
                items-center
                gap-3
                rounded-[9px]
                border
                border-[#8daa48]/40
                bg-[#102b1a]
                px-6
                font-paciano-ui
                text-[12px]
                font-semibold
                text-white
                transition-all
                duration-500
                hover:border-[#a3c15b]
                hover:bg-[#173b24]
                lg:flex
              "
            >
              <span>Book Your Stay</span>

              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="17"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />

                <path
                  d="M8 2V6M16 2V6M3 9H21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </a>

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

      {/* MOBILE MENU */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
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

        font-manrope
        text-[11px]
        font-medium
        leading-none
        tracking-[0.015em]

        drop-shadow-[0_1px_5px_rgba(0,0,0,0.55)]

        transition-colors
        duration-500
        ease-out

        ${active ? "text-[#b5ca67]" : "text-white/95 hover:text-[#b5ca67]"}
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
            onClick={onClose}
            className="
              flex
              h-[54px]
              w-full
              items-center
              justify-center
              rounded-[8px]
              bg-[#173a22]
              font-paciano-ui
              text-[13px]
              font-semibold
              tracking-wide
              text-white
              transition-all
              duration-500
              hover:bg-[#285b28]
            "
          >
            Book Your Stay
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
