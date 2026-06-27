import { useState } from "react";
import { insertBooking, type BookingInsert } from "@/lib/bookingService";
import { MagneticButton } from "@/components/ui/MagneticButton";

type FormData = {
  name: string;
  phone: string;
  carModel: string;
  vehicleType: "Saloon" | "SUV";
  date: string;
  notes: string;
};

type Props = {
  vehicleType: "Saloon" | "SUV";
  serviceSummary: string;
  totalPrice: number;
  flow: "guided" | "custom";
  onComplete: () => void;
  onBack?: () => void;
};

const inputCls =
  "w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]/30 transition-all text-white placeholder:text-gray-500";

export function BookingForm({ vehicleType: initVtype, serviceSummary, totalPrice, flow, onComplete, onBack }: Props) {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    carModel: "",
    vehicleType: initVtype,
    date: "",
    notes: "",
  });
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const today = new Date().toISOString().slice(0, 10);

  const update = (k: keyof FormData, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.carModel || !form.date) return;
    setSending(true);
    setError("");

    const payload: BookingInsert = {
      customer_name: form.name,
      customer_phone: form.phone,
      service_summary: serviceSummary,
      vehicle_type: form.vehicleType,
      vehicle_model: form.carModel,
      scheduled_at: new Date(form.date).toISOString(),
      total_price: totalPrice,
      status: "pending",
      notes: form.notes || undefined,
      source: "website",
      flow,
    };

    try {
      await insertBooking(payload);
      setDone(true);
      setTimeout(() => {
        setDone(false);
        onComplete();
      }, 3000);
    } catch (err) {
      const msg = err instanceof Error ? err.message : JSON.stringify(err, Object.getOwnPropertyNames(err));
      console.error("Supabase insert error:", err);
      setError(msg || "Something went wrong");
    } finally {
      setSending(false);
    }
  };

  if (done) {
    return (
      <div className="text-center py-16 space-y-4">
        <div className="w-16 h-16 rounded-full bg-[#C9A84C]/20 flex items-center justify-center mx-auto border-2 border-[#C9A84C]">
          <svg className="w-8 h-8 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-display text-white">We'll contact you within 24 hours.</h3>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs uppercase tracking-wider text-gray-400 mb-1.5 block">Full Name *</label>
          <input required value={form.name} onChange={(e) => update("name", e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className="text-xs uppercase tracking-wider text-gray-400 mb-1.5 block">Phone Number *</label>
          <input
            required
            type="tel"
            placeholder="+974 XXXX XXXX"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputCls}
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-wider text-gray-400 mb-1.5 block">Car Model *</label>
          <input
            required
            placeholder="e.g. Porsche Cayenne"
            value={form.carModel}
            onChange={(e) => update("carModel", e.target.value)}
            className={inputCls}
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-wider text-gray-400 mb-1.5 block">Vehicle Type</label>
          <div className="flex gap-2">
            {(["Saloon", "SUV"] as const).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => update("vehicleType", v)}
                className={`flex-1 rounded-xl py-2.5 text-sm font-medium transition-all border ${
                  form.vehicleType === v
                    ? "border-[#C9A84C] bg-[#C9A84C]/10 text-[#C9A84C]"
                    : "border-[#2A2A2A] text-gray-400 hover:border-gray-500"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-xs uppercase tracking-wider text-gray-400 mb-1.5 block">Preferred Date *</label>
          <input
            required
            type="date"
            min={today}
            value={form.date}
            onChange={(e) => update("date", e.target.value)}
            className={inputCls}
          />
        </div>
        <div>
          <label className="text-xs uppercase tracking-wider text-gray-400 mb-1.5 block">Notes (optional)</label>
          <textarea
            rows={1}
            value={form.notes}
            onChange={(e) => update("notes", e.target.value)}
            className={inputCls + " resize-none"}
          />
        </div>
      </div>

      {error && <p className="text-red-400 text-sm text-center">{error}</p>}

      <div className="flex gap-3 justify-center pt-2">
        {onBack && (
          <MagneticButton variant="outline" onClick={onBack}>Back</MagneticButton>
        )}
        <MagneticButton variant="primary" type="submit" disabled={sending}>
          {sending ? "Booking..." : "Confirm Booking"}
        </MagneticButton>
      </div>
    </form>
  );
}
