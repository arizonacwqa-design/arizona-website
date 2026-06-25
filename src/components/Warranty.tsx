import { ShieldCheck } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/lib/reveal";

export function Warranty() {
  const { t } = useI18n();
  return (
    <Reveal>
      <section className="section-padding">
        <div className="mx-auto max-w-5xl">
          <div className="glass-strong rounded-[2rem] p-10 md:p-14 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gold/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-gold/10 blur-3xl" />
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
                {t("warranty.eyebrow")}
              </div>
              <h2 className="text-3xl md:text-5xl mb-5">{t("warranty.title")}</h2>
              <p className="text-foreground/75 leading-relaxed max-w-2xl">{t("warranty.body")}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-3 glass rounded-full px-5 py-3">
                  <ShieldCheck className="h-5 w-5 text-gold" />
                  <div>
                    <div className="text-xs text-foreground/60">Vertek PPF Pro Plus</div>
                    <div className="font-display gold-text">12 Years</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 glass rounded-full px-5 py-3">
                  <ShieldCheck className="h-5 w-5 text-gold" />
                  <div>
                    <div className="text-xs text-foreground/60">Vertek PPF Pro</div>
                    <div className="font-display gold-text">10 Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
