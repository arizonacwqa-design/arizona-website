import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Menu, X, Moon, Sun, Languages } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { Magnetic } from "@/lib/magnetic";
import logo from "@/assets/logo.png";
import { Loader } from "./Loader";

const NAV = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/services", key: "nav.services" },
  { to: "/services", key: "nav.pricing" },
  { to: "/gallery", key: "nav.gallery" },
  { to: "/booking", key: "nav.booking" },
  { to: "/", key: "nav.contact", hash: "contact" },
];

export function Navbar() {
  const { t, toggle: toggleLang } = useI18n();
  const { theme, toggle: toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 20);
  });

  return (
    <>
      {/* Website load hote hi sbsy pehle loader screen samne ayegi */}
      <Loader />

      <motion.header
        animate={{
          paddingTop: scrolled ? "0.5rem" : "1rem",
          paddingBottom: scrolled ? "0.5rem" : "1rem",
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 safe-top ${
          scrolled
            ? "backdrop-blur-2xl bg-black/40 border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 transition-all duration-500">
          <div
            className={`flex items-center justify-between rounded-2xl px-4 sm:px-5 md:px-7 py-3 transition-all duration-500 ${
              scrolled ? "glass-strong" : "glass"
            }`}
          >
            {/* Logo Brand Segment */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <img
                src={logo}
                alt="Arizona Car World"
                className="h-9 w-auto object-contain"
                width={36}
                height={36}
              />
              <span className="hidden sm:inline font-display text-base tracking-wide">
                <span className="gold-text font-medium">Arizona</span>
                <span className="text-foreground/70 ms-1">Car World</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV.map((n) => (
                <Link
                  key={n.to + (n.hash ?? "")}
                  to={n.to}
                  hash={n.hash}
                  className="relative text-sm text-foreground/80 hover:text-foreground transition-colors after:absolute after:bottom-[-6px] after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
                >
                  {t(n.key)}
                </Link>
              ))}
            </nav>

            {/* Action Interface Area */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={toggleLang}
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs border gold-border hover:bg-accent/40 backdrop-blur-sm transition-all"
                aria-label="Toggle language"
              >
                <Languages className="h-3.5 w-3.5 text-gold" />
                <span>{t("lang.toggle")}</span>
              </button>

              <button
                onClick={toggleTheme}
                className="rounded-full p-3 border gold-border hover:bg-accent/40 backdrop-blur-sm transition-all"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4 text-gold" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>

              <Magnetic strength={0.15}>
                <Link
                  to="/booking"
                  className="hidden md:inline-flex btn-luxury !py-2 !px-4 text-sm font-medium"
                >
                  {t("cta.book")}
                </Link>
              </Magnetic>

              {/* Mobile Sidebar Hamburger Trigger */}
              <button
                onClick={() => setOpen((o) => !o)}
                className="lg:hidden rounded-full p-3 border gold-border hover:bg-accent/40 transition-all"
                aria-label="Menu"
              >
                {open ? <X className="h-4 w-4 text-gold" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Container */}
          {open && (
            <div className="lg:hidden mt-2 glass-strong rounded-2xl p-4 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] animate-fade-up">
              <nav className="flex flex-col gap-1.5">
                {NAV.map((n) => (
                  <Link
                    key={n.to + (n.hash ?? "")}
                    to={n.to}
                    hash={n.hash}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 rounded-xl hover:bg-accent/50 text-sm font-medium transition-all text-foreground/80 hover:text-foreground hover:translate-x-1"
                  >
                    {t(n.key)}
                  </Link>
                ))}

                <div className="h-px bg-white/5 my-2" />

                <button
                  onClick={() => {
                    toggleLang();
                    setOpen(false);
                  }}
                  className="sm:hidden w-full px-4 py-3 rounded-xl border gold-border text-xs flex items-center justify-center gap-2 bg-accent/20 font-medium active:scale-95 transition-all"
                >
                  <Languages className="h-4 w-4 text-gold" /> {t("lang.toggle")}
                </button>
              </nav>
            </div>
          )}
        </div>
      </motion.header>
    </>
  );
}
