import { Shield, Sparkles, Droplets, Sun, Wind, Wrench, Palette, Star } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const SERVICES = [
  {
    icon: Shield,
    en: "Vertek PPF Pro Plus",
    ar: "فيرتك PPF برو بلس",
    descEn: "12-year paint protection film",
    descAr: "فيلم حماية الطلاء لمدة 12 سنة",
  },
  {
    icon: Shield,
    en: "Vertek PPF Pro",
    ar: "فيرتك PPF برو",
    descEn: "10-year paint protection",
    descAr: "حماية الطلاء لمدة 10 سنوات",
  },
  {
    icon: Sun,
    en: "Vertek Tinting",
    ar: "تظليل فيرتك",
    descEn: "Premium heat-rejecting tint",
    descAr: "تظليل بريميوم مقاوم للحرارة",
  },
  {
    icon: Sparkles,
    en: "Nano Ceramic Coating",
    ar: "طلاء نانو سيراميك",
    descEn: "Hydrophobic ceramic shield",
    descAr: "درع سيراميك طارد للماء",
  },
  {
    icon: Droplets,
    en: "Full Car Polish",
    ar: "تلميع كامل",
    descEn: "Showroom-grade finish",
    descAr: "لمعان بمستوى المعارض",
  },
  {
    icon: Palette,
    en: "Interior & Exterior",
    ar: "داخلي وخارجي",
    descEn: "Complete restoration detail",
    descAr: "تفصيل وترميم كامل",
  },
  {
    icon: Wind,
    en: "Detailing Wash VIP",
    ar: "غسيل تفصيلي VIP",
    descEn: "Hand-finished wash service",
    descAr: "غسيل يدوي راقٍ",
  },
  {
    icon: Wrench,
    en: "Black Out Plastic",
    ar: "تسويد البلاستيك",
    descEn: "Restore factory black trim",
    descAr: "إعادة سواد البلاستيك",
  },
];

export function Services() {
  const { t, lang } = useI18n();
  return (
    <section id="services" className="section-padding reveal">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
            {t("services.eyebrow")}
          </div>
          <h2 className="text-4xl md:text-6xl mb-4">{t("services.title")}</h2>
          <p className="text-foreground/70 max-w-xl mx-auto">{t("services.subtitle")}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="group glass rounded-2xl p-5 sm:p-6 transition-all duration-500 hover:-translate-y-2 hover:border-gold hover:shadow-[0_20px_60px_rgba(212,175,55,0.18)]"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-gradient-to-br from-gold/20 to-transparent border gold-border">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="text-lg font-display mb-2">{lang === "ar" ? s.ar : s.en}</h3>
                <p className="text-sm text-foreground/65 leading-relaxed">
                  {lang === "ar" ? s.descAr : s.descEn}
                </p>
                <div className="mt-5 flex items-center gap-1 text-xs text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  <Star className="h-3 w-3 fill-current" /> Premium
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
