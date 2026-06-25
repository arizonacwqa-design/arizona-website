import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MessageCircle, User, Phone, Car, Wrench } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Magnetic } from "@/lib/magnetic";
import { BUSINESS, SERVICE_OPTIONS } from "@/lib/business";
import { Reveal } from "@/lib/reveal";

export function Booking() {
  const { t, lang } = useI18n();
  const [form, setForm] = useState({
    service: SERVICE_OPTIONS[0].value,
    vehicle: "Saloon",
    date: "",
    name: "",
    phone: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Arizona Car World,%0A%0AI'd like to book:%0A• Service: ${form.service}%0A• Vehicle: ${form.vehicle}%0A• Date: ${form.date}%0A• Name: ${form.name}%0A• Phone: ${form.phone}${form.notes ? `%0A• Notes: ${form.notes}` : ""}`;
    window.open(`${BUSINESS.whatsappUrl}?text=${msg}`, "_blank");
  };

  const inputCls =
    "w-full bg-input/60 border gold-border rounded-xl px-4 py-3 text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all placeholder:text-foreground/40";

  return (
    <Reveal>
      <section id="booking" className="section-padding">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              {t("booking.eyebrow")}
            </div>
            <h2 className="text-4xl md:text-6xl mb-4">{t("booking.title")}</h2>
            <p className="text-foreground/70">{t("booking.subtitle")}</p>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="glass-strong rounded-3xl p-7 md:p-10 grid md:grid-cols-2 gap-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Field icon={Wrench} label={t("booking.service")}>
              <select
                className={inputCls}
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
              >
                {SERVICE_OPTIONS.map((s) => (
                  <option key={s.value} value={s.value}>
                    {lang === "ar" ? s.labelAr : s.value}
                  </option>
                ))}
              </select>
            </Field>

            <Field icon={Car} label={t("booking.vehicle")}>
              <select
                className={inputCls}
                value={form.vehicle}
                onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
              >
                <option value="Saloon">{t("pricing.saloon")}</option>
                <option value="SUV">{t("pricing.suv")}</option>
              </select>
            </Field>

            <Field icon={Calendar} label={t("booking.date")}>
              <input
                required
                type="date"
                className={inputCls}
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
              />
            </Field>

            <Field icon={User} label={t("booking.name")}>
              <input
                required
                type="text"
                className={inputCls}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </Field>

            <Field icon={Phone} label={t("booking.phone")}>
              <input
                required
                type="tel"
                className={inputCls}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </Field>

            <Field label={t("booking.notes")}>
              <input
                type="text"
                className={inputCls}
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
              />
            </Field>

            <div className="md:col-span-2 flex flex-wrap gap-3 justify-center pt-2">
              <Magnetic strength={0.15}>
                <button type="submit" className="btn-luxury">
                  <MessageCircle className="h-4 w-4" />
                  {t("booking.submit")}
                </button>
              </Magnetic>
              <Magnetic strength={0.15}>
                <a
                  href={BUSINESS.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost-luxury"
                >
                  {t("cta.whatsapp")}
                </a>
              </Magnetic>
            </div>
          </motion.form>
        </div>
      </section>
    </Reveal>
  );
}

function Field({
  label,
  icon: Icon,
  children,
}: {
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-foreground/70 mb-2">
        {Icon && <Icon className="h-3.5 w-3.5 text-gold" />}
        {label}
      </span>
      {children}
    </label>
  );
}
