import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/lib/reveal";
import { Magnetic } from "@/lib/magnetic";
import { ErrorBoundary } from "@/lib/error-boundary";

function ParallaxBg() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  return (
    <motion.img
      src={heroImage}
      alt=""
      className="absolute inset-0 h-full w-full object-cover"
      style={{ y, scale }}
    />
  );
}

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouse = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1200px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(1200px) rotateY(0deg) rotateX(0deg)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      {children}
    </div>
  );
}

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      <ParallaxBg />

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_55%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 grid lg:grid-cols-2 gap-8 items-center">
        {/* Left: Content */}
        <Reveal variant="fadeUp">
          <TiltCard>
            <div className="glass-strong rounded-3xl p-6 sm:p-8 md:p-12 border border-white/10 shadow-2xl">
              <div>
                <div className="mb-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-[#d4af37]/30 bg-white/10 px-4 py-2 text-center backdrop-blur-md">
                  <Sparkles className="h-4 w-4 text-[#d4af37]" />
                  <span className="text-sm tracking-wide text-white/90">
                    PREMIUM AUTO DETAILING — DOHA, QATAR
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight text-white">
                  Where Every <br />
                  Vehicle Becomes <br />
                  <span className="bg-gradient-to-r from-[#d4af37] to-[#f5deb3] bg-clip-text text-transparent">
                    a Masterpiece.
                  </span>
                </h1>

                <p className="mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-white/75">
                  Vertek PPF, ceramic coating, premium tinting and showroom-grade detailing —
                  crafted with precision at Arizona Car World.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Magnetic strength={0.2}>
                    <button className="btn-luxury">
                      <Calendar className="h-5 w-5" />
                      Book Now
                    </button>
                  </Magnetic>

                  <Magnetic strength={0.2}>
                    <button className="btn-ghost-luxury">
                      Explore Services
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </Magnetic>
                </div>

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
          </TiltCard>
        </Reveal>

        {/* Right: Reserved for custom image */}
        <div className="hidden lg:block" />
      </div>
    </section>
  );
}
