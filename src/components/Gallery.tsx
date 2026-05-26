import { useI18n } from "@/lib/i18n";

// FIXED: Direct assets se images ko import kar rahe hain taake local browser/Electron path break na kare
import img1 from "@/assets/gallery/gallery-1.jpg";
import img2 from "@/assets/gallery/gallery-2.jpg";
import img3 from "@/assets/gallery/gallery-3.jpg";
import img4 from "@/assets/gallery/gallery-4.jpg";
import img5 from "@/assets/gallery/gallery-5.jpg";
import img6 from "@/assets/gallery/gallery-6.jpg";

const ITEMS = [
  {
    src: img1, // Fixed: Variable path mapped instead of string
    alt: "Ceramic coating application",
    cls: "md:col-span-2 md:row-span-2",
  },
  {
    src: img2,
    alt: "VERTEK PPF installation on luxury SUV",
    cls: "",
  },
  {
    src: img3,
    alt: "Premium window tinting",
    cls: "",
  },
  {
    src: img4,
    alt: "Luxury wheel detailing",
    cls: "",
  },
  {
    src: img5,
    alt: "Gloss paint correction detail",
    cls: "",
  },
  {
    src: img6,
    alt: "Luxury showroom finish",
    cls: "md:col-span-2",
  },
];

export function Gallery() {
  const { t } = useI18n();

  return (
    <section id="gallery" className="section-padding reveal">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
            {t("gallery.eyebrow")}
          </div>
          <h2 className="text-4xl md:text-6xl">{t("gallery.title")}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[220px] sm:auto-rows-[240px]">
          {ITEMS.map((it, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-3xl group gold-border border transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(200,169,107,0.28)] ${it.cls}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Tailwind modern linear gradient token applied */}
              <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-40 group-hover:opacity-30 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
