import { Section, SectionTitle } from "../section";
import { Reveal } from "../reveal";

const testimonials = [
  {
    name: "Marcos Renner",
    role: "Empresário — Advocacia",
    video: "https://pablopitani.com.br/wp-content/uploads/2025/07/DEPOIMENTOS-01.mp4",
    poster: "https://pablopitani.com.br/wp-content/uploads/2025/07/depo-tub.png",
    quote:
      "Saí com a percepção exata do que estava fazendo o cliente qualificado não me enxergar. Mudei a forma de me apresentar e a conversa comercial passou a começar em outro patamar.",
  },
  {
    name: "Gersiedma Malaquias",
    role: "Empresária — Estética",
    video: "https://pablopitani.com.br/wp-content/uploads/2026/05/depo-Gersiedma.mp4",
    poster:
      "https://pablopitani.com.br/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-13-at-13.16.43.jpeg",
    quote:
      "Parei de competir por preço. O ambiente é sério, com gente construindo negócio de verdade — e isso muda o nível das conversas que você tem na sala.",
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

export function Testimonials() {
  return (
    <Section>
      <SectionTitle className="mx-auto mt-0 text-center text-gold-light">
        O que estão falando.
      </SectionTitle>

      <div className="mt-16 grid gap-px bg-gold/10 md:grid-cols-2">
        {testimonials.map((item, i) => (
          <Reveal key={item.name} delay={i * 120} className="bg-ink">
            <figure className="flex h-full flex-col justify-between p-9 md:p-12">
              <div className="relative mx-auto aspect-[9/16] w-full max-w-[390px] overflow-hidden border border-gold/15 bg-black">
                <video
                  src={item.video}
                  poster={item.poster}
                  controls
                  controlsList="nodownload"
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                >
                  Seu navegador não consegue reproduzir este vídeo.
                </video>
              </div>
              <blockquote className="display mt-8 text-xl leading-relaxed text-offwhite/85 md:text-2xl">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-4 border-t border-gold/15 pt-7">
                <span className="display flex size-12 items-center justify-center border border-gold/40 text-sm tracking-widest text-gold">
                  {initials(item.name)}
                </span>
                <span>
                  <span className="block text-sm font-medium text-offwhite">{item.name}</span>
                  <span className="block text-xs text-offwhite/45">{item.role}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
