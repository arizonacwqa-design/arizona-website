import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center reveal">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Arizona Car World"
        className="absolute inset-0 h-full w-full object-cover scale-105 animate-float"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Luxury Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/80" />

      {/* Gold Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_55%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto md:mx-0 glass-strong rounded-3xl p-6 sm:p-8 md:p-12 border border-white/10 shadow-2xl">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-[#d4af37]/30 bg-white/10 px-4 py-2 text-center backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-[#d4af37]" />
            <span className="text-sm tracking-wide text-white/90">
              PREMIUM AUTO DETAILING — DOHA, QATAR
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight text-white animate-fade-up">
            Where Every <br />
            Vehicle Becomes <br />
            <span className="bg-gradient-to-r from-[#d4af37] to-[#f5deb3] bg-clip-text text-transparent">
              a Masterpiece.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-white/75 animate-fade-in">
            Vertek PPF, ceramic coating, premium tinting and showroom-grade detailing — crafted with
            precision at Arizona Car World.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up">
            <button className="btn-luxury">
              <Calendar className="h-5 w-5" />
              Book Now
            </button>

            <button className="btn-ghost-luxury">
              Explore Services
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Warranty Card */}
          <div className="mt-16 inline-flex flex-col sm:flex-row items-center gap-4 rounded-3xl border border-[#d4af37]/20 bg-white/10 px-6 py-5 backdrop-blur-xl">
            <div>
              <div className="text-3xl font-bold text-[#d4af37]">12yr</div>
            </div>

            <div className="h-10 w-px bg-white/20" />

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/60">
                Vertek PPF Pro Plus Warranty
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
