import { ArrowDownRight, CalendarDays, Clock, MapPin } from "lucide-react";
import { EVENT } from "../../lib/event";
import { Reveal } from "../reveal";

const facts = [
  { icon: CalendarDays, label: EVENT.dateLabel, sub: EVENT.weekdayLabel },
  { icon: Clock, label: EVENT.timeLabel, sub: "3 horas de encontro" },
  { icon: MapPin, label: EVENT.city, sub: EVENT.address },
];

export function Hero() {
  return (
    <section id="top" className="grain relative isolate min-h-[100svh] overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="h-full w-full object-cover opacity-30 saturate-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/90 to-ink" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1200px] flex-col justify-center px-6 pt-32 pb-20 md:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal className="flex items-center gap-4">
              <span className="h-px w-12 bg-gold/50" />
              <span className="label-xs text-gold">Encontro presencial • Porto Alegre</span>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="display mt-8 text-[2.15rem] leading-[1.1] sm:text-5xl lg:text-[3.6rem]">
                Em 3 horas eu vou te mostrar como atrair os clientes que{" "}
                <span className="text-gold-light">pagam caro sem reclamar</span>, através de um
                posicionamento único.
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-8 max-w-xl text-base text-offwhite/70 md:text-lg">
                Quero fazer você ser visto como autoridade e nunca mais ter que implorar pra alguém
                comprar de você.
              </p>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#inscricao"
                  className="label-xs group inline-flex items-center justify-center gap-3 bg-gold px-9 py-5 text-ink transition-colors hover:bg-gold-light"
                >
                  Quero garantir minha vaga
                  <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </a>
                <a
                  href="#encontro"
                  className="label-xs inline-flex items-center justify-center border border-offwhite/20 px-9 py-5 text-offwhite/70 transition-colors hover:border-gold hover:text-gold"
                >
                  Ver o que acontece na sala
                </a>
              </div>
            </Reveal>

            <Reveal delay={360}>
              <dl className="mt-16 grid max-w-2xl grid-cols-1 gap-px border border-gold/15 bg-gold/10 sm:grid-cols-3">
                {facts.map((fact) => (
                  <div key={fact.label} className="flex items-start gap-3 bg-ink px-6 py-6">
                    <fact.icon className="mt-1 size-4 shrink-0 text-gold" />
                    <div>
                      <dt className="text-sm font-medium text-offwhite">{fact.label}</dt>
                      <dd className="mt-1 text-xs text-offwhite/45">{fact.sub}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={220} className="lg:col-span-5">
            <div className="relative mx-auto flex max-w-md flex-col items-center px-8 py-10 text-center">
              <div className="absolute inset-0 border border-gold/20" />
              <div className="absolute -inset-3 border border-gold/8" />
              <img
                src="/images/logo-alianca.png"
                alt="Aliança Empreendedora — Conexões estratégicas. Negócios que constroem legado."
                className="relative w-full max-w-[340px]"
                style={{ animation: "floatSoft 9s ease-in-out infinite" }}
              />
              <p className="relative mt-4 max-w-xs text-xs leading-relaxed text-offwhite/45">
                {EVENT.positioning}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
