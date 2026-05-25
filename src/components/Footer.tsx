import { Instagram, MessageCircle, Phone, MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { useI18n } from "@/lib/i18n";
import logo from "@/assets/logo.png";

export function Footer() {
  const { t, lang } = useI18n();
  return (
    <footer className="glass mt-20 border-t border-white/10 px-6 pb-10 pt-16">
      <div className="mx-auto max-w-7xl glass-strong rounded-[2rem] p-8 md:p-14">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="ACW" className="h-10 w-auto" width={40} height={40} />
              <div className="font-display text-lg">
                <span className="gold-text">Arizona</span>
                <span className="text-foreground/70 ms-1">Car World</span>
              </div>
            </div>
            <p className="text-sm text-foreground/65 leading-relaxed">{t("footer.tag")}</p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-gold mb-4">
              {t("contact.title")}
            </div>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li className="flex gap-2">
                <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                {lang === "ar" ? BUSINESS.addressAr : BUSINESS.address}
              </li>
              <li className="flex gap-2">
                <Phone className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <a href={`tel:${BUSINESS.phone}`} className="hover:text-gold">
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-2">
                <Instagram className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <a
                  href={BUSINESS.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold"
                >
                  {BUSINESS.instagram}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-gold mb-4">Connect</div>
            <div className="flex gap-3">
              <a
                href={BUSINESS.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-gold transition-all"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={BUSINESS.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-gold transition-all"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-gold transition-all"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="divider-gold my-8" />
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-foreground/60">
          <div>
            © {new Date().getFullYear()} {BUSINESS.name}. {t("footer.rights")}
          </div>
          <div className="font-display gold-text tracking-widest">ACW · DOHA</div>
        </div>
      </div>
    </footer>
  );
}
