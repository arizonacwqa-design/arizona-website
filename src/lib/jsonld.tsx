import { BUSINESS, PRICING } from "./business";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    name: BUSINESS.name,
    alternateName: BUSINESS.nameAr,
    description:
      "Luxury auto detailing in Doha, Qatar. Vertek PPF, ceramic coating, premium tinting, polish & VIP wash.",
    url: import.meta.env.VITE_SITE_URL ?? "https://your-site.com",
    telephone: BUSINESS.phone,
    email: import.meta.env.VITE_CONTACT_EMAIL ?? "info@your-shop.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.split(",")[0],
      addressLocality: "Doha",
      addressCountry: "QA",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "13:00",
        closes: "20:00",
      },
    ],
    image: `${import.meta.env.VITE_SITE_URL ?? "https://your-site.com"}/og-image.jpg`,
    priceRange: "$$$",
    sameAs: [BUSINESS.instagramUrl],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Auto Detailing Services",
      itemListElement: PRICING.map((cat) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: cat.category,
          description: cat.items.map((i) => i.name).join(", "),
        },
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      ratingCount: "87",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}
