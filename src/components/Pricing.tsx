import { useState } from "react";
import { PRICING } from "@/lib/business";
import { useI18n } from "@/lib/i18n";
import { ShieldCheck } from "lucide-react";

export function Pricing() {
  const { t, lang } = useI18n();
  const [type, setType] = useState<"saloon" | "suv">("saloon");
  return (
    <section id="pricing" className="section-padding reveal">
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
                className={`px-6 py-2 rounded-full text-sm transition-all ${
                  type === v ? "btn-luxury !py-2" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {t(`pricing.${v}`)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRICING.map((cat) => (
            <div key={cat.id} className="glass rounded-3xl p-7 flex flex-col">
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
              <a href="#booking" className="btn-ghost-luxury mt-6 w-full !py-2.5 text-sm">
                {t("cta.book")}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
