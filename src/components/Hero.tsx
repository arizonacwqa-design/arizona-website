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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,107,0.22),transparent_55%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto md:mx-0 glass-strong rounded-3xl p-6 sm:p-8 md:p-12 border border-white/10 shadow-2xl">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-gold/30 bg-white/10 px-4 py-2 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-gold" />
            <span className="text-xs sm:text-sm tracking-wide text-white/90">
              PREMIUM AUTO DETAILING — DOHA, QATAR
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] text-white animate-fade-up">
            Where Every <br className="hidden sm:inline" />
            Vehicle Becomes <br />
            <span className="gold-text">a Masterpiece.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 sm:mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-white/80 animate-fade-in">
            Vertek PPF, ceramic coating, premium tinting and showroom-grade detailing — crafted with
            precision at Arizona Car World.
          </p>

          {/* Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4 animate-fade-up">
            <a href="#booking" className="btn-luxury">
              <Calendar className="h-5 w-5" />
              Book Now
            </a>

            <a href="#services" className="btn-ghost-luxury text-white">
              Explore Services
              <ArrowRight className="h-5 w-5 rtl:rotate-180" />
            </a>
          </div>

          {/* Warranty Card */}
          <div className="mt-10 sm:mt-16 inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 rounded-3xl border border-gold/20 bg-white/10 px-5 sm:px-6 py-4 sm:py-5 backdrop-blur-xl">
            <div className="text-2xl sm:text-3xl font-display font-bold text-gold">12yr</div>
            <div className="hidden sm:block h-10 w-px bg-white/20" />
            <div className="h-px w-12 bg-white/20 sm:hidden" />
            <p className="text-[11px] sm:text-sm uppercase tracking-[0.2em] text-white/70 text-center sm:text-left">
              Vertek PPF Pro Plus Warranty
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
