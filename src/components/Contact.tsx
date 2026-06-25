import { motion } from "framer-motion";
import { MapPin, Phone, Instagram, MessageCircle, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { useI18n } from "@/lib/i18n";
import { Reveal, staggerContainer, staggerItem } from "@/lib/reveal";
import { Magnetic } from "@/lib/magnetic";

export function Contact() {
  const { t, lang } = useI18n();
  const items = [
    {
      icon: MapPin,
      label: t("contact.address"),
      value: lang === "ar" ? BUSINESS.addressAr : BUSINESS.address,
      href: `https://maps.google.com/?q=${encodeURIComponent(BUSINESS.mapsQuery)}`,
    },
    {
      icon: Phone,
      label: t("contact.phone"),
      value: BUSINESS.phoneDisplay,
      href: `tel:${BUSINESS.phone}`,
    },
    {
      icon: Instagram,
      label: t("contact.instagram"),
      value: BUSINESS.instagram,
      href: BUSINESS.instagramUrl,
    },
    { icon: Clock, label: t("contact.hours"), value: t("contact.hoursValue") },
  ];
  return (
    <Reveal>
      <section id="contact" className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              {t("contact.eyebrow")}
            </div>
            <h2 className="text-4xl md:text-6xl">{t("contact.title")}</h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            <motion.div
              className="lg:col-span-2 space-y-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              {items.map((it, i) => {
                const Icon = it.icon;
                const inner = (
                  <div className="glass rounded-2xl p-5 flex items-start gap-4 hover:border-gold transition-all">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br from-gold/20 to-transparent border gold-border shrink-0">
                      <Icon className="h-4.5 w-4.5 text-gold" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-widest text-foreground/60 mb-1">
                        {it.label}
                      </div>
                      <div className="text-sm md:text-base text-foreground/90">{it.value}</div>
                    </div>
                  </div>
                );
                return it.href ? (
                  <a key={i} href={it.href} target="_blank" rel="noreferrer" className="block">
                    {inner}
                  </a>
                ) : (
                  <div key={i}>{inner}</div>
                );
              })}
              <Magnetic strength={0.15}>
                <a
                  href={BUSINESS.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-luxury w-full"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t("cta.whatsapp")}
                </a>
              </Magnetic>
            </motion.div>

            <motion.div
              className="lg:col-span-3 rounded-3xl overflow-hidden border gold-border min-h-[400px] glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <iframe
                title="Arizona Car World Location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.mapsQuery)}&output=embed`}
                className="w-full h-full min-h-[400px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
