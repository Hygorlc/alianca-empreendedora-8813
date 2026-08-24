import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "../lib/event";
import { cn } from "../lib/utils";

/** Botão fixo no canto inferior direito — contato direto com a curadoria. */
export function WhatsappFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className={cn(
        "group fixed right-5 bottom-5 z-50 flex items-center gap-3 border border-gold/40 bg-ink/95 px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.55)] backdrop-blur transition-all duration-500 hover:border-gold md:right-8 md:bottom-8",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <FaWhatsapp className="size-6 text-gold transition-colors group-hover:text-gold-light" />
      <span className="label-xs hidden text-offwhite/80 sm:inline">Falar com a curadoria</span>
    </a>
  );
}
