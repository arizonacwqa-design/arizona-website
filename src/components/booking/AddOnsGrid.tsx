const ADDONS = [
  { id: "decon", label: "Paint Decontamination", price: 150 },
  { id: "interior", label: "Interior Deep Clean", price: 200 },
  { id: "engine", label: "Engine Bay Clean", price: 120 },
  { id: "ceramic-seal", label: "Ceramic Coating Sealant", price: 300 },
];

export function AddOnsGrid({
  selected,
  onChange,
}: {
  selected: string[];
  onChange: (ids: string[]) => void;
}) {
  const toggle = (id: string) => {
    if (selected.includes(id)) {
      onChange(selected.filter((s) => s !== id));
    } else {
      onChange([...selected, id]);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-3">
      {ADDONS.map((a) => {
        const on = selected.includes(a.id);
        return (
          <button
            key={a.id}
            type="button"
            onClick={() => toggle(a.id)}
            className={`rounded-xl px-4 py-3 text-left transition-all border text-sm ${
              on
                ? "border-[#C9A84C] bg-[#C9A84C]/10 shadow-[0_0_0_2px_#C9A84C]"
                : "border-[#2A2A2A] bg-[#1A1A1A] hover:border-[#C9A84C]/50"
            }`}
          >
            <span className="block text-white/90">{a.label}</span>
            <span className="text-[#C9A84C] font-medium text-xs mt-1 block">+{a.price} QAR</span>
          </button>
        );
      })}
    </div>
  );
}

export function addonPrice(id: string): number {
  return ADDONS.find((a) => a.id === id)?.price ?? 0;
}
