import { EVENT, whatsappLink } from "../../lib/event";

const nav = [
  { href: "#encontro", label: "O encontro" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#fotos", label: "Fotos" },
  { href: "#palestrante", label: "Palestrante" },
  { href: "#inscricao", label: "Inscrição" },
  { href: "#local", label: "Local" },
  { href: "#faq", label: "Dúvidas" },
];

export function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-ink-soft px-6 py-16 md:px-10">
      <div className="mx-auto grid w-full max-w-[1200px] gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-4">
            <img src="/images/simbolo.png" alt="" className="h-11 w-auto" />
            <span className="flex flex-col leading-none">
              <span className="display text-lg tracking-[0.34em] text-offwhite">ALIANÇA</span>
              <span className="label-xs mt-1 text-[0.55rem] text-gold/80">EMPREENDEDORA</span>
            </span>
          </div>
          <p className="mt-6 max-w-sm text-xs leading-relaxed text-offwhite/45">
            {EVENT.tagline}
          </p>
        </div>

        <div className="md:col-span-4">
          <span className="label-xs text-offwhite/35">Navegação</span>
          <ul className="mt-5 grid grid-cols-2 gap-3">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-xs text-offwhite/55 hover:text-gold">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <span className="label-xs text-offwhite/35">Contato</span>
          <ul className="mt-5 space-y-3 text-xs text-offwhite/55">
            <li>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                WhatsApp da curadoria
              </a>
            </li>
            <li>{EVENT.address}</li>
            <li>{EVENT.addressComplement}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 w-full max-w-[1200px] border-t border-gold/12 pt-7">
        <p className="text-[0.7rem] text-offwhite/35">
          © {new Date().getFullYear()} {EVENT.name}. Todos os direitos reservados a Pablo Pitani.
        </p>
      </div>
    </footer>
  );
}
