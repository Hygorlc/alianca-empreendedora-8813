import { Countdown } from "../countdown";
import { Reveal } from "../reveal";
import { EVENT } from "../../lib/event";

export function CountdownBand() {
  return (
    <section className="grain relative border-y border-gold/15 bg-ink-soft px-6 py-16 md:px-10">
      <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="label-xs text-gold">Seleção em andamento</span>
          <h2 className="display mt-5 text-3xl md:text-4xl">
            As vagas são limitadas ao tamanho da sala.
          </h2>
          <p className="mt-4 max-w-md text-sm text-offwhite/60">
            {EVENT.dateLabel}, {EVENT.timeLabel} — {EVENT.address}, {EVENT.addressComplement}. A
            confirmação segue a ordem de inscrição.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <Countdown />
        </Reveal>
      </div>
    </section>
  );
}
