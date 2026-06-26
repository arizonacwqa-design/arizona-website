import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Arizona Car World" },
      {
        name: "description",
        content:
          "Learn about Arizona Car World — Doha's premier auto detailing studio. Certified technicians, premium materials, climate-controlled bay.",
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
        <About />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
