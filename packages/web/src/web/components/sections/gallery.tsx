import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "../section";

const photos = [
  "/images/carrossel-01.jpg",
  "/images/carrossel-02.jpg",
  "/images/carrossel-03.jpg",
  "/images/carrossel-04.png",
  "/images/carrossel-05.webp",
  "/images/carrossel-06.webp",
  "/images/carrossel-07.webp",
];

export function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      const track = trackRef.current;
      if (!track || document.visibilityState !== "visible") return;

      const bounds = track.getBoundingClientRect();
      const isVisible = bounds.top < window.innerHeight && bounds.bottom > 0;
      if (!isVisible) return;

      const reachedEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
      track.scrollTo({
        left: reachedEnd ? 0 : track.scrollLeft + Math.min(track.clientWidth * 0.82, 860),
        behavior: "smooth",
      });
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  const move = (direction: -1 | 1) => {
    trackRef.current?.scrollBy({
      left: direction * Math.min(trackRef.current.clientWidth * 0.82, 860),
      behavior: "smooth",
    });
  };

  return (
    <Section id="fotos" tone="soft" className="py-16 md:py-20">
      <div
        ref={trackRef}
        className="scrollbar-none flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3"
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

      <div className="mt-5 flex justify-center gap-3">
        <button
          type="button"
          aria-label="Foto anterior"
          onClick={() => move(-1)}
          className="flex size-11 items-center justify-center border border-gold/35 text-gold transition-colors hover:bg-gold hover:text-ink"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          aria-label="Próxima foto"
          onClick={() => move(1)}
          className="flex size-11 items-center justify-center border border-gold/35 text-gold transition-colors hover:bg-gold hover:text-ink"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      <figure className="mt-12 overflow-hidden border border-gold/15 md:mt-16">
        <img
          src="/images/foto-grupo-galeria-v4.png"
          alt="Participantes da Aliança Empreendedora reunidos"
          loading="lazy"
          className="h-auto w-full object-cover"
        />
      </figure>
    </Section>
  );
}
