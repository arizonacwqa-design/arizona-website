import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { ServiceShowcase } from "@/components/ServiceShowcase";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Arizona Car World" },
      {
        name: "description",
        content:
          "Arizona Car World services: Vertek PPF Pro Plus (12-yr warranty), Vertek Tinting, Nano Ceramic Coating, Full Car Polish, Detailing Wash VIP. Book now.",
      },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <Services />
        <ServiceShowcase />
        <Pricing />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
