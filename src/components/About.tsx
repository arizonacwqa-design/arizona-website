import { useI18n } from "@/lib/i18n";

export function About() {
  const { t } = useI18n();
  const stats = [
    { value: "12", label: t("about.stat1") },
    { value: "13+", label: t("about.stat2") },
    { value: "1000+", label: t("about.stat3") },
  ];
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">{t("about.eyebrow")}</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              <span className="gold-text">{t("about.title")}</span>
            </h2>
            <p className="text-foreground/75 leading-relaxed text-base md:text-lg">{t("about.body")}</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="glass rounded-2xl p-5 text-center">
                <div className="text-3xl md:text-4xl font-display gold-text">{s.value}</div>
                <div className="text-[10px] md:text-xs uppercase tracking-wider text-foreground/70 mt-2">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
