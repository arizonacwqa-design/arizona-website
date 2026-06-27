import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal, staggerContainer, staggerItem } from "@/lib/reveal";
import { ErrorBoundary } from "@/lib/error-boundary";

import img1 from "@/assets/gallery/gallery-1.jpg";
import img2 from "@/assets/gallery/gallery-2.jpg";
import img3 from "@/assets/gallery/gallery-3.jpg";
import img4 from "@/assets/gallery/gallery-4.jpg";
import img5 from "@/assets/gallery/gallery-5.jpg";
import img6 from "@/assets/gallery/gallery-6.jpg";

const ITEMS = [
  { src: img1, alt: "Ceramic coating application", cls: "md:col-span-2 md:row-span-2" },
  { src: img2, alt: "VERTEK PPF installation on luxury SUV", cls: "" },
  { src: img3, alt: "Premium window tinting", cls: "" },
  { src: img4, alt: "Luxury wheel detailing", cls: "" },
  { src: img5, alt: "Gloss paint correction detail", cls: "" },
  { src: img6, alt: "Luxury showroom finish", cls: "md:col-span-2" },
];

function TiltCard({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const handleMouse = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.02)`;
  };
  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)";
  };
  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      onClick={onClick}
      className={className}
      style={{ transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)", cursor: "pointer" }}
    >
      {children}
    </div>
  );
}

function Lightbox({
  items,
  index,
  onClose,
}: {
  items: typeof ITEMS;
  index: number;
  onClose: () => void;
}) {
  const [i, setI] = useState(index);
  const current = items[i];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all"
        aria-label="Close lightbox"
      >
        <X className="h-5 w-5 text-white" />
      </button>

      {i > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setI(i - 1);
          }}
          className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5 text-white" />
        </button>
      )}
      {i < items.length - 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setI(i + 1);
          }}
          className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all"
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5 text-white" />
        </button>
      )}

      <motion.img
        key={i}
        src={current.src}
        alt={current.alt}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain"
        onClick={(e) => e.stopPropagation()}
      />

      <div className="absolute bottom-6 text-sm text-white/60">
        {i + 1} / {items.length}
      </div>
    </motion.div>
  );
}

export function Gallery() {
  const { t } = useI18n();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <ErrorBoundary>
      <Reveal>
        <section className="section-padding">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
                {t("gallery.eyebrow")}
              </div>
              <h2 className="text-4xl md:text-6xl">{t("gallery.title")}</h2>
            </div>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[220px] sm:auto-rows-[240px]"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              {ITEMS.map((it, i) => (
                <motion.div key={i} variants={staggerItem}>
                  <TiltCard
                    className={`relative overflow-hidden rounded-3xl group gold-border border transition-all duration-700 hover:shadow-[0_25px_70px_rgba(212,175,55,0.22)] bg-[#1A1A1A] ${it.cls}`}
                    onClick={() => openLightbox(i)}
                  >
                    <img
                      src={it.src}
                      alt={it.alt}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-3 left-3 right-3 text-xs text-white/90 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                      {it.alt}
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </Reveal>

      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox items={ITEMS} index={lightboxIndex} onClose={() => setLightboxOpen(false)} />
        )}
      </AnimatePresence>
    </ErrorBoundary>
  );
}
