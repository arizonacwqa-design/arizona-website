import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Warranty } from "@/components/Warranty";
import { Booking } from "@/components/Booking";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arizona Car World — Premium Auto Detailing in Doha, Qatar" },
      {
        name: "description",
        content:
          "Arizona Car World — luxury auto detailing in Doha: Vertek PPF (up to 12-yr warranty), ceramic coating, premium tinting, polish & VIP wash. Book now.",
      },
      { property: "og:title", content: "Arizona Car World — Premium Auto Detailing" },
      {
        property: "og:description",
        content:
          "Vertek PPF, ceramic coating, premium tinting and showroom-grade detailing in Doha, Qatar.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <WhyChooseUs />
        <Warranty />
        <Gallery />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
