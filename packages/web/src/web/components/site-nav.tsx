import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

const links = [
  { href: "#encontro", label: "O encontro" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#fotos", label: "Fotos" },
  { href: "#palestrante", label: "Palestrante" },
  { href: "#local", label: "Local" },
  { href: "#faq", label: "Dúvidas" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "border-b border-gold/15 bg-ink/92 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="flex items-center gap-3">
          <img src="/images/simbolo.png" alt="Aliança Empreendedora" className="h-9 w-auto" />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="display text-base tracking-[0.34em] text-offwhite">ALIANÇA</span>
            <span className="label-xs mt-1 text-[0.55rem] text-gold/80">EMPREENDEDORA</span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="label-xs text-offwhite/55 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#inscricao"
            className="label-xs hidden border border-gold px-6 py-3 text-gold transition-colors hover:bg-gold hover:text-ink sm:inline-block"
          >
            Garantir vaga
          </a>
          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="p-2 text-gold lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-gold/15 bg-ink px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="label-xs text-offwhite/70"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#inscricao"
              onClick={() => setOpen(false)}
              className="label-xs border border-gold px-6 py-3 text-center text-gold"
            >
              Garantir vaga
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
