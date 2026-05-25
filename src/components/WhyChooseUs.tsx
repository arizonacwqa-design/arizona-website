import { Award, Users, ShieldCheck, Wind } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function WhyChooseUs() {
  const { t } = useI18n();
  const items = [
    { icon: Users, title: t("why.1.title"), body: t("why.1.body") },
    { icon: Award, title: t("why.2.title"), body: t("why.2.body") },
    { icon: Wind, title: t("why.3.title"), body: t("why.3.body") },
    { icon: ShieldCheck, title: t("why.4.title"), body: t("why.4.body") },
  ];
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">{t("why.eyebrow")}</div>
          <h2 className="text-4xl md:text-6xl">{t("why.title")}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <div key={i} className="glass rounded-3xl p-7 text-center hover:-translate-y-1 transition-transform">
                <div className="mx-auto w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-gradient-to-br from-gold/25 to-transparent border gold-border">
                  <Icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-display text-lg mb-2">{it.title}</h3>
                <p className="text-sm text-foreground/65 leading-relaxed">{it.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
