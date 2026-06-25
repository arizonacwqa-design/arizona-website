import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/lib/reveal";
import { useCountUp } from "@/hooks/use-count-up";

const REVIEWS = [
  {
    en: "Outstanding work on my Range Rover. The PPF finish is flawless and the team is incredibly professional.",
    ar: "عمل استثنائي على رنج روفر. تشطيب فيلم الحماية مثالي والفريق احترافي للغاية.",
    author: "Ahmed K.",
  },
  {
    en: "Best detailing in Doha — my Mercedes looks better than the day I bought it. Highly recommended.",
    ar: "أفضل تفصيل في الدوحة — مرسيدس تبدو أفضل من يوم شرائها. أنصح بشدة.",
    author: "Khalid M.",
  },
  {
    en: "12-year warranty PPF, premium tinting, and ceramic — all done to perfection. True luxury experience.",
    ar: "فيلم حماية بضمان 12 سنة وتظليل بريميوم وسيراميك — كل شيء بإتقان. تجربة فاخرة حقيقية.",
    author: "Yousef A.",
  },
  {
    en: "Attention to detail is unmatched. Arizona Car World sets the standard in Qatar.",
    ar: "اهتمام بالتفاصيل لا مثيل له. أريزونا كار وورلد ترسي المعيار في قطر.",
    author: "Fahad R.",
  },
];

const STATS = [
  { value: 12, suffix: "+", labelKey: "about.stat1" },
  { value: 13, suffix: "+", labelKey: "about.stat2" },
  { value: 1000, suffix: "+", labelKey: "about.stat3" },
];

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value, 2500);
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-display gold-text">
        {count}
        {suffix}
      </div>
      <div className="text-[11px] md:text-xs uppercase tracking-wider text-foreground/70 mt-2">
        {label}
      </div>
    </div>
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
    el.style.transform = `perspective(1000px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`;
  };
  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
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

export function Testimonials() {
  const { t, lang } = useI18n();
  const [i, setI] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const next = useCallback(() => setI((p) => (p + 1) % REVIEWS.length), []);
  const prev = useCallback(() => setI((p) => (p - 1 + REVIEWS.length) % REVIEWS.length), []);

  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, [next]);

  const r = REVIEWS[i];

  return (
    <Reveal>
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              {t("testimonials.eyebrow")}
            </div>
            <h2 className="text-4xl md:text-6xl">{t("testimonials.title")}</h2>
          </div>

          <TiltCard>
            <div className="glass-strong rounded-3xl p-10 md:p-14 text-center relative">
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>

              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl md:text-2xl font-display leading-relaxed text-foreground/90 min-h-[6rem]"
              >
                &ldquo;{lang === "ar" ? r.ar : r.en}&rdquo;
              </motion.p>

              <div className="mt-6 text-sm uppercase tracking-widest text-gold">— {r.author}</div>

              <div className="flex items-center justify-center gap-4 mt-10">
                <button
                  onClick={prev}
                  className="p-3 rounded-full border gold-border hover:bg-accent transition-all"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="h-4 w-4 rtl:rotate-180" />
                </button>
                <div className="flex gap-2">
                  {REVIEWS.map((_, k) => (
                    <button
                      key={k}
                      onClick={() => setI(k)}
                      aria-label={`Review ${k + 1}`}
                      className={`h-3 rounded-full transition-all ${k === i ? "w-8 bg-gold" : "w-3 bg-foreground/30"}`}
                    />
                  ))}
                </div>
                <button
                  onClick={next}
                  className="p-3 rounded-full border gold-border hover:bg-accent transition-all"
                  aria-label="Next review"
                >
                  <ChevronRight className="h-4 w-4 rtl:rotate-180" />
                </button>
              </div>
            </div>
          </TiltCard>

          <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {STATS.map((s, idx) => (
              <AnimatedStat key={idx} value={s.value} suffix={s.suffix} label={t(s.labelKey)} />
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
