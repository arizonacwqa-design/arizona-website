import { useEffect, useState } from "react";

export function Loader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Jab poora page aur images background me ready ho jayein
    const handleLoad = () => {
      setTimeout(() => {
        setFadeOut(true); // Pehle elegant fade-out shuru hoga
        setTimeout(() => setLoading(false), 600); // Phir DOM se hat jayega
      }, 1200); // 1.2 seconds ka professional luxury hold timing
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a] transition-opacity duration-700 ease-in-out ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center animate-fade-up">
        {/* Glowing Ambient Background Ring */}
        <div className="absolute h-24 w-24 rounded-full border border-gold/10 blur-xl animate-pulse" />

        {/* Luxury Gold Spinner */}
        <div className="h-14 w-14 rounded-full border-t-2 border-b-2 border-gold animate-spin" />

        {/* Minimalist Elegant Brand Typography */}
        <div className="mt-6 text-center tracking-[0.4em] uppercase text-xs">
          <span className="gold-text font-medium block mb-1">Arizona</span>
          <span className="text-white/40 text-[10px] tracking-[0.2em]">Car World</span>
        </div>
      </div>
    </div>
  );
}
