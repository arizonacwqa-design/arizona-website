import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, Languages } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import logo from "@/assets/logo.png";

const NAV = [
  { href: "#home", key: "nav.home" },
  { href: "#about", key: "nav.about" },
  { href: "#services", key: "nav.services" },
  { href: "#pricing", key: "nav.pricing" },
  { href: "#gallery", key: "nav.gallery" },
  { href: "#booking", key: "nav.booking" },
  { href: "#contact", key: "nav.contact" },
];

export function Navbar() {
  const { t, toggle: toggleLang, lang } = useI18n();
  const { theme, toggle: toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-4 transition-all duration-500 ${
          scrolled ? "" : ""
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-full px-4 md:px-6 py-2.5 transition-all duration-500 ${
            scrolled ? "glass-strong" : "glass"
          }`}
        >
          <a href="#home" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="Arizona Car World" className="h-9 w-auto" width={36} height={36} />
            <span className="hidden sm:inline font-display text-base tracking-wide">
              <span className="gold-text">Arizona</span>
              <span className="text-foreground/70 ms-1">Car World</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="relative text-sm text-foreground/80 hover:text-foreground transition-colors after:absolute after:bottom-[-6px] after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              >
                {t(n.key)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <button
              onClick={toggleLang}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs border gold-border hover:bg-accent transition-all"
              aria-label="Toggle language"
            >
              <Languages className="h-3.5 w-3.5" />
              <span>{t("lang.toggle")}</span>
            </button>
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 border gold-border hover:bg-accent transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a href="#booking" className="hidden md:inline-flex btn-luxury !py-2 !px-4 text-sm">
              {t("cta.book")}
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden rounded-full p-2 border gold-border"
              aria-label="Menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass-strong rounded-2xl p-4 animate-fade-up">
            <nav className="flex flex-col gap-1">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-accent text-sm"
                >
                  {t(n.key)}
                </a>
              ))}
              <button
                onClick={() => { toggleLang(); setOpen(false); }}
                className="mt-2 px-3 py-2 rounded-lg border gold-border text-sm flex items-center gap-2"
              >
                <Languages className="h-4 w-4" /> {t("lang.toggle")}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
