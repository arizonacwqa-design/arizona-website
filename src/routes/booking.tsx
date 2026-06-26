import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Booking — Arizona Car World" },
      {
        name: "description",
        content:
          "Book your appointment at Arizona Car World. Choose from Vertek PPF, ceramic coating, tinting, polish & more. WhatsApp confirmation within minutes.",
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
        <Booking />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
