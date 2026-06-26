import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

  return (
    <ErrorBoundary>
      <section ref={sectionRef} className="relative h-[300vh] lg:h-[500vh]">
        <div className="sticky top-0 h-screen overflow-hidden bg-background flex items-center min-h-[400px]">
          <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-2 gap-8 px-4 items-center h-full">
            <div className="relative z-10 flex items-center justify-center h-full py-10 lg:py-20">
              <div className="w-full max-w-lg space-y-4">
                {SERVICES.map((s, i) => (
                  <ServiceSlide key={s.key} index={i} total={SERVICES.length} progress={scrollYProgress} service={s} />
                ))}
              </div>
            </div>
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
  total,
  progress,
  service,
}: {
  index: number;
  total: number;
  progress: ReturnType<typeof useTransform>;
  service: (typeof SERVICES)[number];
}) {
  const rangeStart = index / total;
  const rangeEnd = (index + 1) / total;
  const fadeRange = 0.08;

  const opacity = useTransform(progress, (v) => {
    const entryStart = rangeStart - fadeRange;
    const entryEnd = rangeStart + fadeRange;
    const exitStart = rangeEnd - fadeRange;
    const exitEnd = rangeEnd + fadeRange;

    if (v < entryStart) return 0;
    if (v < entryEnd) return (v - entryStart) / (entryEnd - entryStart);
    if (v < exitStart) return 1;
    if (v < exitEnd) return 1 - (v - exitStart) / (exitEnd - exitStart);
    return 0;
  });

  const y = useTransform(progress, (v) => {
    const mid = (rangeStart + rangeEnd) / 2;
    return (v - mid) * 80;
  });

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
