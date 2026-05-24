import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroCar}
          alt="Luxury car at Arizona Car World"
          className="absolute inset-0 w-full h-full object-cover opacity-70 dark:opacity-60"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent rtl:from-transparent rtl:to-background/80" />
      </div>

      <div className="mx-auto max-w-7xl w-full px-6 py-24 md:py-32">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            <span className="text-xs tracking-widest uppercase text-foreground/80">
              {t("hero.eyebrow")}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.05] font-medium">
            <span className="block text-foreground">{t("hero.title").split(" ").slice(0, -2).join(" ")}</span>
            <span className="block gold-text">{t("hero.title").split(" ").slice(-2).join(" ")}</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-foreground/75 max-w-xl leading-relaxed">
            {t("hero.subtitle")}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#booking" className="btn-luxury">
              <Calendar className="h-4 w-4" /> {t("cta.book")}
            </a>
            <a href="#services" className="btn-ghost-luxury">
              {t("cta.explore")} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 right-6 hidden md:flex glass rounded-2xl p-5 max-w-xs animate-float">
          <div>
            <div className="text-3xl font-display gold-text">12<span className="text-lg">yr</span></div>
            <div className="text-xs uppercase tracking-widest text-foreground/70 mt-1">
              Vertek PPF Pro Plus Warranty
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
