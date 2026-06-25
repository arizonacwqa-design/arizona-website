import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";

type Dict = Record<string, string>;

const en: Dict = {
  "nav.home": "Home",
  "nav.about": "About",
  "nav.services": "Services",
  "nav.pricing": "Pricing",
  "nav.gallery": "Gallery",
  "nav.booking": "Booking",
  "nav.contact": "Contact",
  "cta.book": "Book Now",
  "cta.explore": "Explore Services",
  "cta.whatsapp": "WhatsApp Us",
  "hero.eyebrow": "Premium Auto Detailing — Doha, Qatar",
  "hero.title": "Where Every Vehicle Becomes a Masterpiece.",
  "hero.subtitle":
    "Vertek PPF, ceramic coating, premium tinting and showroom-grade detailing — crafted with precision at Arizona Car World.",
  "about.eyebrow": "About",
  "about.title": "Arizona Car World",
  "about.body":
    "Located in the heart of Doha's industrial quarter, Arizona Car World is Qatar's destination for true automotive luxury. From paint protection films backed by 12-year warranties to flawless ceramic coatings and bespoke detailing, every service is delivered by certified technicians using world-class materials.",
  "about.stat1": "Years Warranty",
  "about.stat2": "Premium Services",
  "about.stat3": "Vehicles Protected",
  "services.eyebrow": "What We Do",
  "services.title": "Signature Services",
  "services.subtitle":
    "A curated portfolio of detailing services engineered for discerning owners.",
  "pricing.eyebrow": "Investment",
  "pricing.title": "Transparent Pricing",
  "pricing.subtitle": "All prices in QAR. Choose Saloon or SUV.",
  "pricing.saloon": "Saloon",
  "pricing.suv": "SUV",
  "pricing.warranty": "Warranty",
  "why.eyebrow": "Why Arizona",
  "why.title": "An Uncompromising Standard",
  "why.1.title": "Certified Technicians",
  "why.1.body": "Trained specialists with years of high-end detailing experience.",
  "why.2.title": "Premium Materials",
  "why.2.body": "Authentic Vertek PPF, nano ceramic and pro-grade compounds.",
  "why.3.title": "Climate-Controlled Bay",
  "why.3.body": "Dust-free environment for flawless application every time.",
  "why.4.title": "Long-Term Warranty",
  "why.4.body": "Up to 12 years on Vertek PPF Pro Plus protection.",
  "warranty.eyebrow": "Peace of Mind",
  "warranty.title": "Warranty Coverage",
  "warranty.body":
    "Vertek PPF Pro Plus is backed by a 12-year warranty. Vertek PPF Pro carries a 10-year warranty. Every film, coating and finish is registered in your name from the day of installation.",
  "booking.eyebrow": "Reserve",
  "booking.title": "Book Your Appointment",
  "booking.subtitle": "Select a service and we'll confirm your slot on WhatsApp within minutes.",
  "booking.service": "Select Service",
  "booking.vehicle": "Vehicle Type",
  "booking.date": "Preferred Date",
  "booking.name": "Full Name",
  "booking.phone": "Phone Number",
  "booking.notes": "Notes (optional)",
  "booking.submit": "Send via WhatsApp",
  "testimonials.eyebrow": "Clients",
  "testimonials.title": "Trusted by Enthusiasts",
  "gallery.eyebrow": "Portfolio",
  "gallery.title": "Recent Work",
  "contact.eyebrow": "Visit",
  "contact.title": "Get in Touch",
  "contact.address": "Address",
  "contact.phone": "Phone",
  "contact.instagram": "Instagram",
  "contact.hours": "Working Hours",
  "contact.hoursValue": "Saturday — Thursday · 8:00 AM — 10:00 PM",
  "footer.tag": "Premium Auto Detailing in Doha, Qatar.",
  "footer.rights": "All rights reserved.",
  "lang.toggle": "العربية",
};

const ar: Dict = {
  "nav.home": "الرئيسية",
  "nav.about": "من نحن",
  "nav.services": "الخدمات",
  "nav.pricing": "الأسعار",
  "nav.gallery": "المعرض",
  "nav.booking": "الحجز",
  "nav.contact": "تواصل",
  "cta.book": "احجز الآن",
  "cta.explore": "استكشف الخدمات",
  "cta.whatsapp": "تواصل واتساب",
  "hero.eyebrow": "تلميع وحماية فاخرة — الدوحة، قطر",
  "hero.title": "حيث تتحول كل سيارة إلى تحفة فنية.",
  "hero.subtitle":
    "أفلام حماية فيرتك، طلاء سيراميك، تظليل بريميوم وتفصيل بمستوى المعارض — بدقة استثنائية في أريزونا كار وورلد.",
  "about.eyebrow": "عن",
  "about.title": "أريزونا كار وورلد",
  "about.body":
    "في قلب الحي الصناعي بالدوحة، نقدم تجربة لا مثيل لها في عالم العناية بالسيارات الفاخرة. من أفلام الحماية بضمان حتى 12 سنة إلى الطلاءات السيراميكية المثالية والتفصيل الراقي — كل خدمة يقدمها فنيون معتمدون باستخدام أرقى المواد العالمية.",
  "about.stat1": "سنوات ضمان",
  "about.stat2": "خدمات بريميوم",
  "about.stat3": "سيارة محمية",
  "services.eyebrow": "ماذا نقدم",
  "services.title": "خدماتنا المميزة",
  "services.subtitle": "باقة مختارة من خدمات التفصيل المصممة لأصحاب الذوق الرفيع.",
  "pricing.eyebrow": "الاستثمار",
  "pricing.title": "أسعار واضحة",
  "pricing.subtitle": "جميع الأسعار بالريال القطري. اختر صالون أو دفع رباعي.",
  "pricing.saloon": "صالون",
  "pricing.suv": "دفع رباعي",
  "pricing.warranty": "الضمان",
  "why.eyebrow": "لماذا أريزونا",
  "why.title": "معيار لا يقبل المساومة",
  "why.1.title": "فنيون معتمدون",
  "why.1.body": "متخصصون بخبرة سنوات في التفصيل الراقي.",
  "why.2.title": "مواد بريميوم",
  "why.2.body": "أفلام فيرتك الأصلية وسيراميك نانو ومركبات احترافية.",
  "why.3.title": "بيئة عمل مكيّفة",
  "why.3.body": "ورشة خالية من الغبار لضمان تطبيق مثالي.",
  "why.4.title": "ضمان طويل الأمد",
  "why.4.body": "حتى 12 سنة على حماية فيرتك برو بلس.",
  "warranty.eyebrow": "راحة بال",
  "warranty.title": "تغطية الضمان",
  "warranty.body":
    "فيرتك PPF برو بلس بضمان 12 سنة، وفيرتك PPF برو بضمان 10 سنوات. كل فيلم وطلاء يُسجَّل باسمك من يوم التركيب.",
  "booking.eyebrow": "احجز",
  "booking.title": "احجز موعدك",
  "booking.subtitle": "اختر خدمتك وسنؤكد موعدك عبر واتساب خلال دقائق.",
  "booking.service": "اختر الخدمة",
  "booking.vehicle": "نوع المركبة",
  "booking.date": "التاريخ المفضل",
  "booking.name": "الاسم الكامل",
  "booking.phone": "رقم الهاتف",
  "booking.notes": "ملاحظات (اختياري)",
  "booking.submit": "إرسال عبر واتساب",
  "testimonials.eyebrow": "عملاؤنا",
  "testimonials.title": "ثقة عشاق السيارات",
  "gallery.eyebrow": "أعمالنا",
  "gallery.title": "آخر المشاريع",
  "contact.eyebrow": "زرنا",
  "contact.title": "تواصل معنا",
  "contact.address": "العنوان",
  "contact.phone": "الهاتف",
  "contact.instagram": "إنستغرام",
  "contact.hours": "ساعات العمل",
  "contact.hoursValue": "السبت — الخميس · 8:00 ص — 10:00 م",
  "footer.tag": "تلميع وحماية سيارات فاخرة في الدوحة، قطر.",
  "footer.rights": "جميع الحقوق محفوظة.",
  "lang.toggle": "English",
};

const dicts: Record<Lang, Dict> = { en, ar };

type Ctx = {
  lang: Lang;
  dir: "ltr" | "rtl";
  t: (key: string) => string;
  setLang: (l: Lang) => void;
  toggle: () => void;
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (stored === "ar" || stored === "en") setLangState(stored);
  }, []);

  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    try {
      localStorage.setItem("lang", lang);
    } catch {
      /* SSR guard */
    }
  }, [lang]);

  const value: Ctx = {
    lang,
    dir: lang === "ar" ? "rtl" : "ltr",
    t: (k) => dicts[lang][k] ?? k,
    setLang: setLangState,
    toggle: () => setLangState((l) => (l === "en" ? "ar" : "en")),
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
