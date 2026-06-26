import { useEffect, useState } from "react";
import { BookingForm } from "./BookingForm";
import { StickyPriceSummary } from "./StickyPriceSummary";
import { getCeramicServices, getTintServices, getDetailPolishServices } from "@/lib/bookingService";

type ServiceItem = { service_name: string; price: number };

const PPF_ITEMS: ServiceItem[] = [
  { service_name: "Full Car PPF (Vertek Pro Plus)", price: 6000 },
  { service_name: "Full Car PPF (Vertek Pro)", price: 4000 },
  { service_name: "Full Front PPF (Pro Plus)", price: 2500 },
  { service_name: "Full Front PPF (Pro)", price: 1800 },
  { service_name: "Front Quarter PPF (Pro Plus)", price: 1600 },
  { service_name: "Front Quarter PPF (Pro)", price: 1200 },
];

const EXTRAS: ServiceItem[] = [
  { service_name: "Paint Decontamination", price: 150 },
  { service_name: "Odor Elimination", price: 100 },
];

function ToggleCard({
  item,
  on,
  onToggle,
}: {
  item: ServiceItem;
  on: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`rounded-xl px-4 py-3 text-left transition-all border text-sm ${
        on
          ? "border-[#C9A84C] bg-[#C9A84C]/10 shadow-[0_0_0_2px_#C9A84C]"
          : "border-[#2A2A2A] bg-[#1A1A1A] hover:border-[#C9A84C]/50"
      }`}
    >
      <span className="block text-white/90">{item.service_name}</span>
      <span className="text-[#C9A84C] font-medium text-xs mt-1 block">{item.price} QAR</span>
    </button>
  );
}

function SectionBlock({ label, items, selected, onToggle }: {
  label: string;
  items: ServiceItem[];
  selected: string[];
  onToggle: (name: string) => void;
}) {
  return (
    <div>
      <h4 className="text-xs uppercase tracking-[0.3em] text-[#C9A84C] mb-3">{label}</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {items.map((item) => (
          <ToggleCard
            key={item.service_name}
            item={item}
            on={selected.includes(item.service_name)}
            onToggle={() => onToggle(item.service_name)}
          />
        ))}
      </div>
    </div>
  );
}

export function CustomizeBuilder({ onClose }: { onClose: () => void }) {
  const [selected, setSelected] = useState<string[]>([]);
  const [ceramicItems, setCeramic] = useState<ServiceItem[]>([]);
  const [tintItems, setTint] = useState<ServiceItem[]>([]);
  const [detailItems, setDetail] = useState<ServiceItem[]>([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    getCeramicServices().then(setCeramic);
    getTintServices().then(setTint);
    getDetailPolishServices().then(setDetail);
  }, []);

  const toggle = (name: string) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name],
    );
  };

  const allItems = [...PPF_ITEMS, ...ceramicItems, ...tintItems, ...detailItems, ...EXTRAS];
  const total = allItems.filter((i) => selected.includes(i.service_name)).reduce((s, i) => s + i.price, 0);

  if (showForm) {
    return (
      <BookingForm
        vehicleType="Saloon"
        serviceSummary={selected.join(", ")}
        totalPrice={total}
        flow="custom"
        onComplete={onClose}
        onBack={() => setShowForm(false)}
      />
    );
  }

  const summaryRow = selected.join(", ");

  return (
    <div className="space-y-10 pb-28" style={{ backgroundColor: "#0D0D0D" }}>
      <SectionBlock label="PPF — Paint Protection Film" items={PPF_ITEMS} selected={selected} onToggle={toggle} />
      <SectionBlock label="Ceramic Coating" items={ceramicItems} selected={selected} onToggle={toggle} />
      <SectionBlock label="Window Tint" items={tintItems} selected={selected} onToggle={toggle} />
      <SectionBlock label="Detailing & Polish" items={detailItems} selected={selected} onToggle={toggle} />
      <SectionBlock label="Extras" items={EXTRAS} selected={selected} onToggle={toggle} />

      {selected.length > 0 && (
        <div className="text-sm text-gray-400 bg-[#1A1A1A] rounded-xl p-4 border border-[#2A2A2A]">
          <span className="text-[#C9A84C] font-medium">Selected: </span>
          {summaryRow}
        </div>
      )}

      <StickyPriceSummary count={selected.length} total={total} onProceed={() => setShowForm(true)} />
    </div>
  );
}
