import { useI18n } from "@/lib/i18n";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const ITEMS = [
  { src: g1, alt: "Ceramic coating application", cls: "md:col-span-2 md:row-span-2" },
  { src: g2, alt: "Luxury SUV PPF installation", cls: "" },
  { src: g3, alt: "Premium window tinting", cls: "" },
  { src: g4, alt: "Polished gold rim detail", cls: "" },
  { src: g5, alt: "Luxury car interior detail", cls: "" },
  { src: g6, alt: "Headlight polish luxury car", cls: "md:col-span-2" },
];

export function Gallery() {
  const { t } = useI18n();
  return (
    <section id="gallery" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">{t("gallery.eyebrow")}</div>
          <h2 className="text-4xl md:text-6xl">{t("gallery.title")}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[220px]">
          {ITEMS.map((it, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group gold-border border ${it.cls}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
