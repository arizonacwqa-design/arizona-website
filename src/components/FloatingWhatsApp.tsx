import { MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export function FloatingWhatsApp() {
  return (
    <a
      href={BUSINESS.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-40 rtl:right-auto rtl:left-6 w-14 h-14 rounded-full flex items-center justify-center btn-luxury !p-0 animate-float"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
