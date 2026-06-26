import { useState } from "react";
import { PackageCards, type PackageSelection } from "./PackageCards";
import { AddOnsGrid, addonPrice } from "./AddOnsGrid";
import { BookingForm } from "./BookingForm";
import { useI18n } from "@/lib/i18n";

export function BookingFlow({ onClose }: { onClose: () => void }) {
  const { lang } = useI18n();
  const [step, setStep] = useState(0);
  const [vehicleType, setVehicleType] = useState<"saloon" | "suv">("saloon");
  const [pkg, setPkg] = useState<PackageSelection | null>(null);
  const [addons, setAddons] = useState<string[]>([]);

  const addonTotal = addons.reduce((s, id) => s + addonPrice(id), 0);
  const total = (pkg?.price ?? 0) + addonTotal;

  const summary = pkg
    ? `${pkg.packageId === "pro-plus" ? "VERTEK PPF PRO PLUS" : "VERTEK PPF PRO"} — ${pkg.subOptionName}${
        addons.length > 0
          ? " + " +
            addons
              .map((id) => {
                const map: Record<string, string> = {
                  decon: "Paint Decontamination",
                  interior: "Interior Deep Clean",
                  engine: "Engine Bay Clean",
                  "ceramic-seal": "Ceramic Coating Sealant",
                };
                return map[id] ?? id;
              })
              .join(", ")
          : ""
      }`
    : "";

  return (
    <div className="space-y-8" style={{ backgroundColor: "#0D0D0D" }}>
      {/* Step indicators */}
      <div className="flex items-center gap-2 text-xs font-medium">
        {["Package", "Add-ons", "Details"].map((label, i) => (
          <div key={label} className="flex items-center gap-2">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                i <= step ? "bg-[#C9A84C] text-black" : "bg-[#2A2A2A] text-gray-400"
              }`}
            >
              {i + 1}
            </div>
            <span className={i <= step ? "text-white" : "text-gray-500"}>{label}</span>
            {i < 2 && <div className="w-6 h-px bg-[#2A2A2A]" />}
          </div>
        ))}
      </div>

      {step === 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-display text-white">Select Package</h3>
          <PackageCards selected={pkg} onChange={setPkg} vehicleType={vehicleType} />
          <div className="flex gap-2 pt-2">
            {(["saloon", "suv"] as const).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setVehicleType(v)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all ${
                  vehicleType === v
                    ? "border-[#C9A84C] bg-[#C9A84C]/10 text-[#C9A84C]"
                    : "border-[#2A2A2A] text-gray-400"
                }`}
              >
                {lang === "ar" ? (v === "saloon" ? "صالون" : "SUV") : v === "saloon" ? "Saloon" : "SUV"}
              </button>
            ))}
          </div>
          <div className="flex justify-end pt-2">
            <button
              type="button"
              disabled={!pkg}
              onClick={() => setStep(1)}
              className="btn-luxury !py-2.5 text-sm disabled:opacity-40"
            >
              Next — {total} QAR
            </button>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-4">
          <h3 className="text-lg font-display text-white">Add-ons</h3>
          <AddOnsGrid selected={addons} onChange={setAddons} />
          <div className="text-right text-sm">
            <span className="text-gray-400">Running total: </span>
            <span className="text-[#C9A84C] font-semibold">{total} QAR</span>
          </div>
          <div className="flex gap-3 justify-end pt-2">
            <button type="button" onClick={() => setStep(0)} className="btn-ghost-luxury !py-2.5 text-sm">
              Back
            </button>
            <button type="button" onClick={() => setStep(2)} className="btn-luxury !py-2.5 text-sm">
              Next
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <BookingForm
          vehicleType={vehicleType === "saloon" ? "Saloon" : "SUV"}
          serviceSummary={summary}
          totalPrice={total}
          flow="guided"
          onComplete={onClose}
          onBack={() => setStep(1)}
        />
      )}
    </div>
  );
}
