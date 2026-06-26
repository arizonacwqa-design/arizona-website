import { motion } from "framer-motion";

type PackageSubOption = { name: string; saloon: number; suv: number };

const PACKAGES: {
  id: string;
  title: string;
  badge: string;
  disabled?: boolean;
  subOptions: PackageSubOption[];
}[] = [
  {
    id: "pro-plus",
    title: "VERTEK PPF PRO PLUS",
    badge: "12 Year Warranty",
    subOptions: [
      { name: "Front Quarter PPF", saloon: 1600, suv: 2000 },
      { name: "Full Front", saloon: 2500, suv: 3000 },
      { name: "Full Car", saloon: 6000, suv: 7000 },
    ],
  },
  {
    id: "pro",
    title: "VERTEK PPF PRO",
    badge: "10 Year Warranty",
    subOptions: [
      { name: "Front Quarter PPF", saloon: 1200, suv: 1500 },
      { name: "Full Front", saloon: 1800, suv: 2000 },
      { name: "Full Car", saloon: 4000, suv: 5000 },
    ],
  },
  {
    id: "basic",
    title: "VERTEK PPF BASIC",
    badge: "Coming Soon",
    disabled: true,
    subOptions: [],
  },
];

export type PackageSelection = {
  packageId: string;
  subOptionName: string;
  price: number;
};

export function PackageCards({
  selected,
  onChange,
  vehicleType,
}: {
  selected: PackageSelection | null;
  onChange: (s: PackageSelection) => void;
  vehicleType: "saloon" | "suv";
}) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin">
      {PACKAGES.map((pkg) => {
        const isSelected = selected?.packageId === pkg.id;
        return (
          <motion.div
            key={pkg.id}
            layout
            className={`snap-start shrink-0 w-72 sm:w-80 rounded-2xl overflow-hidden border transition-all duration-300 ${
              pkg.disabled
                ? "border-gray-800 opacity-50"
                : isSelected
                  ? "border-[#C9A84C] shadow-[0_0_0_2px_#C9A84C]"
                  : "border-[#2A2A2A] hover:border-[#C9A84C]/50"
            }`}
            style={{ backgroundColor: "#1A1A1A" }}
          >
            <div className="relative h-40 bg-gradient-to-br from-[#C9A84C]/20 to-[#1A1A1A] flex items-center justify-center">
              <div className="absolute top-3 right-3 bg-[#C9A84C] text-xs font-semibold px-3 py-1 rounded-full text-black">
                {pkg.badge}
              </div>
              <span className="text-lg font-display text-[#C9A84C] opacity-60">{pkg.title}</span>
            </div>

            <div className="p-5 space-y-1">
              <h3 className={`font-display text-base ${pkg.disabled ? "text-gray-500" : "text-white"}`}>
                {pkg.title}
              </h3>

              {pkg.disabled ? (
                <p className="text-xs text-gray-500 italic">Coming soon</p>
              ) : (
                pkg.subOptions.map((opt) => {
                  const isOptSelected =
                    isSelected && selected?.subOptionName === opt.name;
                  const price = vehicleType === "suv" ? opt.suv : opt.saloon;
                  return (
                    <label
                      key={opt.name}
                      onClick={() => onChange({ packageId: pkg.id, subOptionName: opt.name, price })}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-all text-sm ${
                        isOptSelected
                          ? "bg-[#C9A84C]/10 border border-[#C9A84C]/30"
                          : "hover:bg-white/5 border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                            isOptSelected ? "border-[#C9A84C]" : "border-gray-500"
                          }`}
                        >
                          {isOptSelected && (
                            <div className="w-2 h-2 rounded-full bg-[#C9A84C]" />
                          )}
                        </div>
                        <span className="text-white/85">{opt.name}</span>
                      </div>
                      <span className="text-[#C9A84C] font-medium whitespace-nowrap">
                        {price} QAR
                      </span>
                    </label>
                  );
                })
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
