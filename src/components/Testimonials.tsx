import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

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

export function Testimonials() {
  const { t, lang } = useI18n();
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % REVIEWS.length);
  const prev = () => setI((p) => (p - 1 + REVIEWS.length) % REVIEWS.length);
  const r = REVIEWS[i];
  return (
    <section className="section-padding reveal">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
            {t("testimonials.eyebrow")}
          </div>
          <h2 className="text-4xl md:text-6xl">{t("testimonials.title")}</h2>
        </div>
        <div className="glass-strong rounded-3xl p-10 md:p-14 text-center relative">
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, k) => (
              <Star key={k} className="h-4 w-4 fill-gold text-gold" />
            ))}
          </div>
          <p className="text-xl md:text-2xl font-display leading-relaxed text-foreground/90 min-h-[6rem]">
            "{lang === "ar" ? r.ar : r.en}"
          </p>
          <div className="mt-6 text-sm uppercase tracking-widest text-gold">— {r.author}</div>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="p-2 rounded-full border gold-border hover:bg-accent transition-all"
            >
              <ChevronLeft className="h-4 w-4 rtl:rotate-180" />
            </button>
            <div className="flex gap-2">
              {REVIEWS.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-gold" : "w-1.5 bg-foreground/30"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full border gold-border hover:bg-accent transition-all"
            >
              <ChevronRight className="h-4 w-4 rtl:rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
