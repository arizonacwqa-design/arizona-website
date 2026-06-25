import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { ErrorBoundary } from "@/lib/error-boundary";

const SERVICES = [
  {
    key: "ppf",
    title: "VERTEK PPF PRO PLUS",
    tagline: "12-Year Paint Protection Film",
    desc: "Self-healing, impact-resistant film that preserves your paintwork for over a decade.",
  },
  {
    key: "tinting",
    title: "VERTEK TINTING",
    tagline: "Premium Heat-Rejecting Tint",
    desc: "Blocks 99% of UV rays while maintaining crystal-clear visibility and a sleek profile.",
  },
  {
    key: "ceramic",
    title: "NANO CERAMIC COATING",
    tagline: "Hydrophobic Ceramic Shield",
    desc: "A permanent-bonding quartz layer that repels water, dirt, and environmental contaminants.",
  },
  {
    key: "polish",
    title: "FULL CAR POLISH",
    tagline: "Showroom-Grade Finish",
    desc: "Multi-stage paint correction and polish that restores depth, gloss, and mirror-like reflection.",
  },
];

export function ServiceShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const activeIndex = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 0, 1, 2, 3, 3]);
  const [serviceIdx, setServiceIdx] = useState(0);
  useMotionValueEvent(activeIndex, "change", (v) => setServiceIdx(Math.round(v)));

  return (
    <ErrorBoundary>
      <section ref={sectionRef} className="relative lg:h-[400vh]">
        <div className="lg:sticky lg:top-0 lg:h-screen overflow-hidden bg-background flex items-center min-h-[400px]">
          <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-2 gap-8 px-4 items-center h-full">
            {/* Text content */}
          <div className="relative z-10 flex items-center justify-center h-full py-10 lg:py-20">
            <div className="w-full max-w-lg space-y-4">
                {SERVICES.map((s, i) => (
                  <ServiceSlide key={s.key} index={i} activeIndex={activeIndex} service={s} />
                ))}
              </div>
            </div>

            {/* Right: Reserved for custom image */}
            <ErrorBoundary>
              <div className="hidden lg:block h-full w-full min-h-[400px]" />
            </ErrorBoundary>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
}

function ServiceSlide({
  index,
  activeIndex,
  service,
}: {
  index: number;
  activeIndex: ReturnType<typeof useTransform>;
  service: (typeof SERVICES)[number];
}) {
  const opacity = useTransform(activeIndex, (v) => (v === index ? 1 : 0));
  const y = useTransform(activeIndex, (v) => (v === index ? 0 : v < index ? -20 : 20));

  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex items-center">
      <div>
        <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Premium Service</div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-3">{service.title}</h2>
        <p className="text-lg md:text-xl gold-text mb-6 font-medium">{service.tagline}</p>
        <p className="text-base text-foreground/75 max-w-md leading-relaxed">{service.desc}</p>
      </div>
    </motion.div>
  );
}
