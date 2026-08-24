import { CalendarDays, Clock, MapPin, Navigation } from "lucide-react";
import { EVENT, mapsEmbed, mapsLink } from "../../lib/event";
import { Eyebrow, Section, SectionTitle } from "../section";
import { Reveal } from "../reveal";

const details = [
  { icon: MapPin, title: "Endereço", body: `${EVENT.address} — ${EVENT.addressComplement}` },
  { icon: CalendarDays, title: "Data", body: `${EVENT.dateLabel} • ${EVENT.weekdayLabel}` },
  { icon: Clock, title: "Horário", body: `${EVENT.timeLabel} — recepção a partir das 19h` },
];

export function Location() {
  return (
    <Section id="local">
      <Eyebrow index="VI">Onde acontece</Eyebrow>
      <SectionTitle>Zona Sul de Porto Alegre, ambiente reservado.</SectionTitle>

      <div className="mt-16 grid gap-px bg-gold/10 lg:grid-cols-12">
        <Reveal className="bg-ink lg:col-span-5">
          <div className="flex h-full flex-col justify-between p-9 md:p-11">
            <ul className="space-y-8">
              {details.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <item.icon className="mt-1 size-4 shrink-0 text-gold" />
                  <div>
                    <span className="label-xs text-offwhite/40">{item.title}</span>
                    <p className="mt-2 text-sm text-offwhite/80">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="label-xs mt-12 inline-flex items-center justify-center gap-3 border border-gold px-8 py-4 text-gold transition-colors hover:bg-gold hover:text-ink"
            >
              <Navigation className="size-4" />
              Abrir no Google Maps
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="bg-ink lg:col-span-7">
          <div className="h-full min-h-[360px] w-full">
            <iframe
              title="Mapa do local do evento"
              src={mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[360px] w-full grayscale-[0.55] contrast-[1.05]"
              style={{ border: 0 }}
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
