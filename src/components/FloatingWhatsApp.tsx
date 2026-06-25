import { MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { Magnetic } from "@/lib/magnetic";

export function FloatingWhatsApp() {
  return (
    <Magnetic strength={0.25}>
      <a
        href={BUSINESS.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed z-40 rtl:right-auto rtl:left-6 w-14 h-14 rounded-full flex items-center justify-center btn-luxury !p-0 animate-float animate-pulse-glow"
        style={{ bottom: "max(1.5rem, env(safe-area-inset-bottom, 0px))", right: "max(1.5rem, env(safe-area-inset-right, 0px))" }}
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </Magnetic>
  );
}
