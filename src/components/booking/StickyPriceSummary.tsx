export function StickyPriceSummary({
  count,
  total,
  onProceed,
}: {
  count: number;
  total: number;
  onProceed: () => void;
}) {
  if (count === 0) return null;
  return (
    <div
      className="fixed bottom-0 inset-x-0 z-50 backdrop-blur-xl border-t border-[#2A2A2A] px-4 py-4"
      style={{ backgroundColor: "rgba(13,13,13,0.92)" }}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between gap-4 flex-wrap">
        <span className="text-sm text-gray-400">
          {count} {count === 1 ? "service" : "services"} selected
        </span>
        <span className="text-lg font-display text-[#C9A84C]">Total: {total} QAR</span>
        <button type="button" onClick={onProceed} className="btn-luxury !py-2.5 text-sm">
          Proceed to Book →
        </button>
      </div>
    </div>
  );
}
