import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Arizona Car World" },
      {
        name: "description",
        content:
          "View our portfolio of premium auto detailing work — PPF installation, ceramic coating, tinting, paint correction and showroom-grade finishes.",
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
        <Gallery />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
