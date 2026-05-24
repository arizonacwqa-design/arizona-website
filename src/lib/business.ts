// DO NOT MODIFY — exact business details
export const BUSINESS = {
  name: "Arizona Car World",
  nameAr: "أريزونا كار وورلد",
  address: "Souq Al Qalh East Industrial Road, Doha, Qatar",
  addressAr: "سوق القلح، الطريق الصناعي الشرقي، الدوحة، قطر",
  phone: "+97477400041",
  phoneDisplay: "+974 7740 0041",
  instagram: "@Arizona.cw",
  instagramUrl: "https://instagram.com/Arizona.cw",
  whatsappUrl: "https://wa.me/97477400041",
  mapsQuery: "Souq Al Qalh East Industrial Road, Doha, Qatar",
} as const;

export type PriceRow = {
  id: string;
  category: string;
  categoryAr: string;
  warranty?: string;
  items: { name: string; nameAr: string; saloon: number; suv: number }[];
};

export const PRICING: PriceRow[] = [
  {
    id: "vertek-pro-plus",
    category: "VERTEK PPF PRO PLUS",
    categoryAr: "فيرتك PPF برو بلس",
    warranty: "12 Years",
    items: [
      { name: "Front Quarter PPF", nameAr: "ربع أمامي PPF", saloon: 1600, suv: 2000 },
      { name: "Full Front", nameAr: "كامل الأمامي", saloon: 2500, suv: 3000 },
      { name: "Full Car", nameAr: "كامل السيارة", saloon: 6000, suv: 7000 },
    ],
  },
  {
    id: "vertek-pro",
    category: "VERTEK PPF PRO",
    categoryAr: "فيرتك PPF برو",
    warranty: "10 Years",
    items: [
      { name: "Front Quarter PPF", nameAr: "ربع أمامي PPF", saloon: 1200, suv: 1500 },
      { name: "Full Front", nameAr: "كامل الأمامي", saloon: 1800, suv: 2000 },
      { name: "Full Car", nameAr: "كامل السيارة", saloon: 4000, suv: 5000 },
    ],
  },
  {
    id: "vertek-tinting",
    category: "VERTEK TINTING",
    categoryAr: "تظليل فيرتك",
    items: [{ name: "Full Tinting", nameAr: "تظليل كامل", saloon: 1000, suv: 1500 }],
  },
  {
    id: "nano-ceramic",
    category: "NANO CERAMIC FULL CAR",
    categoryAr: "نانو سيراميك كامل السيارة",
    items: [{ name: "Nano Ceramic Full Car", nameAr: "نانو سيراميك كامل", saloon: 500, suv: 700 }],
  },
  {
    id: "polish",
    category: "POLISH PACKAGES",
    categoryAr: "باقات التلميع",
    items: [
      { name: "Full Car Polish", nameAr: "تلميع كامل", saloon: 800, suv: 1000 },
      { name: "Interior Polish", nameAr: "تلميع داخلي", saloon: 500, suv: 600 },
      { name: "Exterior Polish", nameAr: "تلميع خارجي", saloon: 500, suv: 600 },
      { name: "Lights Polish", nameAr: "تلميع الأضواء", saloon: 150, suv: 200 },
    ],
  },
  {
    id: "extras",
    category: "ADD-ONS",
    categoryAr: "خدمات إضافية",
    items: [
      { name: "Black Out Plastic", nameAr: "تسويد البلاستيك", saloon: 200, suv: 300 },
      { name: "Detailing Wash VIP", nameAr: "غسيل تفصيلي VIP", saloon: 100, suv: 150 },
      { name: "Protection", nameAr: "حماية", saloon: 175, suv: 200 },
    ],
  },
];

export const SERVICE_OPTIONS = PRICING.flatMap((p) =>
  p.items.map((it) => ({ value: `${p.category} — ${it.name}`, labelAr: `${p.categoryAr} — ${it.nameAr}` }))
);
