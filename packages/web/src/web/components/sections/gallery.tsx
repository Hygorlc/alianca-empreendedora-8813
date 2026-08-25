import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Eyebrow, Section, SectionTitle } from "../section";

const photos = [
  "https://pablopitani.com.br/wp-content/uploads/2026/05/18-FOTOS-DIA-02-1024x776.jpg",
  "https://pablopitani.com.br/wp-content/uploads/2026/05/8-FOTOS-DIA-02-1024x782.jpg",
  "https://pablopitani.com.br/wp-content/uploads/2026/05/46-FOTOS-DIA-02-1024x715.jpg",
  "https://pablopitani.com.br/wp-content/uploads/2026/05/FOTOS-DIA-O2-36-1024x760.png",
  "https://pablopitani.com.br/wp-content/uploads/2026/05/FOTOS-7-12-1024x888.png",
  "https://pablopitani.com.br/wp-content/uploads/2026/05/PANA6098-1024x825.jpg",
  "https://pablopitani.com.br/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-13-at-13.16.43.jpeg",
];

export function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);

  const move = (direction: -1 | 1) => {
    trackRef.current?.scrollBy({
      left: direction * Math.min(trackRef.current.clientWidth * 0.82, 860),
      behavior: "smooth",
    });
  };

  return (
    <Section id="fotos" tone="soft">
      <div className="flex items-end justify-between gap-8">
        <div>
          <Eyebrow index="III">Dentro da Aliança</Eyebrow>
          <SectionTitle>Uma sala feita de presença, troca e movimento.</SectionTitle>
        </div>
        <div className="hidden shrink-0 gap-3 md:flex">
          <button
            type="button"
            aria-label="Foto anterior"
            onClick={() => move(-1)}
            className="flex size-12 items-center justify-center border border-gold/35 text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Próxima foto"
            onClick={() => move(1)}
            className="flex size-12 items-center justify-center border border-gold/35 text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="scrollbar-none mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3"
      >
        {photos.map((photo, index) => (
          <figure
            key={photo}
            className="group relative aspect-[4/3] w-[86%] shrink-0 snap-start overflow-hidden border border-gold/15 sm:w-[62%] lg:w-[42%]"
          >
            <img
              src={photo}
              alt={`Encontro Aliança Empreendedora — foto ${index + 1}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <span className="label-xs absolute bottom-4 right-4 border border-offwhite/25 bg-ink/70 px-3 py-2 text-offwhite/70 backdrop-blur-sm">
              {String(index + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
            </span>
          </figure>
        ))}
      </div>

      <div className="mt-5 flex gap-3 md:hidden">
        <button
          type="button"
          aria-label="Foto anterior"
          onClick={() => move(-1)}
          className="flex size-11 items-center justify-center border border-gold/35 text-gold"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          aria-label="Próxima foto"
          onClick={() => move(1)}
          className="flex size-11 items-center justify-center border border-gold/35 text-gold"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </Section>
  );
}
