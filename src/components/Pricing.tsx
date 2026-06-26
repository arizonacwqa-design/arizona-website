import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { PRICING } from "@/lib/business";
import { useI18n } from "@/lib/i18n";
import { ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal, staggerContainer, staggerItem } from "@/lib/reveal";
import { Magnetic } from "@/lib/magnetic";
import { BookingFlow } from "./booking/BookingFlow";
import { CustomizeBuilder } from "./booking/CustomizeBuilder";

const PPF_IDS = ["vertek-pro-plus", "vertek-pro"];

export function Pricing() {
  const { t, lang } = useI18n();
  const [type, setType] = useState<"saloon" | "suv">("saloon");
  const [activeFlow, setActiveFlow] = useState<{ mode: "guided" | "custom"; cardId: string } | null>(null);
  const flowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeFlow && flowRef.current) {
      flowRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeFlow]);

  const isPpf = (id: string) => PPF_IDS.includes(id);
  return (
    <Reveal>
      <section id="pricing" className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              {t("pricing.eyebrow")}
            </div>
            <h2 className="text-4xl md:text-6xl mb-4">{t("pricing.title")}</h2>
            <p className="text-foreground/70 max-w-xl mx-auto">{t("pricing.subtitle")}</p>
            <div className="mt-8 inline-flex glass rounded-full p-1">
              {(["saloon", "suv"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setType(v)}
                  className={`px-6 py-2.5 rounded-full text-sm transition-all ${
                    type === v ? "btn-luxury !py-2.5" : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {t(`pricing.${v}`)}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            {PRICING.map((cat) => (
              <motion.div
                key={cat.id}
                variants={staggerItem}
                className="glass rounded-3xl p-7 flex flex-col"
              >
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h3 className="text-xl font-display gold-text">
                    {lang === "ar" ? cat.categoryAr : cat.category}
                  </h3>
                </div>
                {cat.warranty && (
                  <div className="inline-flex items-center gap-1.5 text-xs text-gold mb-5">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    {t("pricing.warranty")}: {cat.warranty}
                  </div>
                )}
                <div className="divider-gold mb-4" />
                <ul className="space-y-3 flex-1">
                  {cat.items.map((it, idx) => (
                    <li key={idx} className="flex items-baseline justify-between gap-3">
                      <span className="text-sm text-foreground/85">
                        {lang === "ar" ? it.nameAr : it.name}
                      </span>
                      <span className="font-display text-lg whitespace-nowrap">
                        <span className="gold-text">{type === "saloon" ? it.saloon : it.suv}</span>
                        <span className="text-xs text-foreground/60 ms-1">QAR</span>
                      </span>
                    </li>
                  ))}
                </ul>
                {isPpf(cat.id) ? (
                  <div className="flex flex-col sm:flex-row gap-2 mt-6">
                    <button
                      type="button"
                      onClick={() => setActiveFlow(activeFlow?.mode === "guided" ? null : { mode: "guided", cardId: cat.id })}
                      className="flex-1 btn-luxury !py-3 text-sm text-center"
                    >
                      Book Now
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveFlow(activeFlow?.mode === "custom" ? null : { mode: "custom", cardId: cat.id })}
                      className="flex-1 rounded-[50px] border border-[#C9A84C] text-[#C9A84C] !py-3 text-sm font-medium text-center transition-all duration-300 hover:bg-[#C9A84C]/10"
                    >
                      Customize
                    </button>
                  </div>
                ) : (
                  <Magnetic strength={0.15}>
                    <Link to="/booking" className="btn-ghost-luxury mt-6 w-full !py-3 text-sm block text-center">
                      {t("cta.book")}
                    </Link>
                  </Magnetic>
                )}
              </motion.div>
            ))}
          </motion.div>

          {activeFlow && (
            <div ref={flowRef} className="mt-10 rounded-3xl p-6 md:p-8 border border-[#2A2A2A] bg-[#0D0D0D]">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-display text-white">
                  {activeFlow.mode === "guided" ? "Book Now — Guided Flow" : "Customize Your Package"}
                </h3>
                <button
                  type="button"
                  onClick={() => setActiveFlow(null)}
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Close ✕
                </button>
              </div>
              {activeFlow.mode === "guided" ? (
                <BookingFlow onClose={() => setActiveFlow(null)} />
              ) : (
                <CustomizeBuilder onClose={() => setActiveFlow(null)} />
              )}
            </div>
          )}
        </div>
      </section>
    </Reveal>
  );
}
