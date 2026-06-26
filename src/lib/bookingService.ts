import { supabase } from "./supabaseClient";

export type BookingInsert = {
  customer_name: string;
  customer_phone: string;
  service_summary: string;
  vehicle_type: string;
  vehicle_model: string;
  scheduled_at: string;
  total_price: number;
  status: string;
  notes?: string;
  source: string;
  flow: string;
};

export async function insertBooking(data: BookingInsert) {
  const { error } = await supabase.from("bookings").insert([data]);
  if (error) throw error;
}

const CACHE = new Map<string, { data: { service_name: string; price: number }[]; ts: number }>();
const CACHE_TTL = 5 * 60 * 1000;

async function fetchServices(filter: string): Promise<{ service_name: string; price: number }[]> {
  const cached = CACHE.get(filter);
  if (cached && Date.now() - cached.ts < CACHE_TTL) return cached.data;

  const { data, error } = await supabase
    .from("services")
    .select("service_name, price")
      .or(`service_name.ilike.%${filter}%`)
    .limit(20);

  if (error || !data || data.length === 0) return [];
  CACHE.set(filter, { data, ts: Date.now() });
  return data;
}

export async function getCeramicServices() {
  const fromDb = await fetchServices("ceramic");
  if (fromDb.length > 0) return fromDb;
  return [
    { service_name: "Nano Ceramic Coating", price: 1500 },
    { service_name: "Ceramic Sealant Add-on", price: 300 },
  ];
}

export async function getTintServices() {
  const fromDb = await fetchServices("tint");
  if (fromDb.length > 0) return fromDb;
  return [
    { service_name: "Nano Ceramic Tint Full Car", price: 1800 },
    { service_name: "Front 2 Windows Tint", price: 600 },
  ];
}

export async function getDetailPolishServices() {
  const fromDb = await fetchServices("detail");
  if (fromDb.length === 0) fromDb.push(...(await fetchServices("polish")));
  if (fromDb.length > 0) return fromDb;
  return [
    { service_name: "Full Detail Package", price: 800 },
    { service_name: "Paint Correction / Polish", price: 600 },
    { service_name: "Engine Bay Clean", price: 120 },
    { service_name: "Interior Deep Clean", price: 200 },
  ];
}
