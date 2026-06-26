import { useRef, useCallback, type RefObject } from "react";

export function useMagneticEffect<T extends HTMLElement>(strength = 0.3): {
  ref: RefObject<T | null>;
  handlers: { onMouseMove: (e: React.MouseEvent) => void; onMouseLeave: () => void };
} {
  const ref = useRef<T>(null);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * strength;
      const y = (e.clientY - rect.top - rect.height / 2) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    },
    [strength],
  );

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  }, []);

  return { ref, handlers: { onMouseMove, onMouseLeave } };
}
