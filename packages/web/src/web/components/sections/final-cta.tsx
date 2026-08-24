import { ArrowUpRight } from "lucide-react";
import { EVENT } from "../../lib/event";
import { Reveal } from "../reveal";

export function FinalCta() {
  return (
    <section className="grain relative overflow-hidden border-t border-gold/15 bg-ink px-6 py-28 md:px-10 md:py-36">
      <div className="absolute inset-0 opacity-[0.07]">
        <img src="/images/sala.jpg" alt="" className="h-full w-full object-cover" />
      </div>
      <div className="relative mx-auto flex w-full max-w-[900px] flex-col items-center text-center">
        <Reveal>
          <img src="/images/simbolo.png" alt="" className="mx-auto w-16" />
        </Reveal>
        <Reveal delay={100}>
          <h2 className="display mt-10 text-4xl md:text-6xl">
            A sofisticação desta marca não está em parecer rica.
            <span className="block text-gold-light">Está em parecer segura de seu lugar.</span>
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-8 max-w-xl text-sm text-offwhite/60 md:text-base">
            {EVENT.dateLabel}, {EVENT.timeLabel} — {EVENT.address}, {EVENT.addressComplement}.
            Vagas confirmadas por ordem de inscrição.
          </p>
        </Reveal>
        <Reveal delay={260}>
          <a
            href="#inscricao"
            className="label-xs group mt-11 inline-flex items-center gap-3 bg-gold px-10 py-5 text-ink transition-colors hover:bg-gold-light"
          >
            Solicitar minha vaga
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
