import { Check } from "lucide-react";
import { EVENT, whatsappLink } from "../../lib/event";
import { Reveal } from "../reveal";
import { Eyebrow } from "../section";

const included = [
  "Palestra de 2 horas sobre posicionamento e percepção de valor",
  "Análise de posicionamento ao vivo",
  "Ambiente de relações entre empresários selecionados",
  "Coffee break servido durante o intervalo",
];

export function Ticket() {
  return (
    <section id="inscricao" className="grain relative bg-offwhite px-6 py-24 text-graphite md:px-10 md:py-32">
      <div className="relative mx-auto grid w-full max-w-[1200px] gap-16 lg:grid-cols-12 lg:gap-24">
        <div className="lg:col-span-5">
          <Eyebrow index="VI" tone="graphite">
            Acesso ao encontro
          </Eyebrow>
          <Reveal delay={80}>
            <h2 className="display mt-7 text-4xl md:text-5xl">
              Um investimento, uma cadeira na sala.
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-10 border border-graphite/15 p-8">
              <span className="label-xs text-graphite/50">Ingresso individual</span>
              <p className="display mt-3 text-5xl text-graphite">{EVENT.price}</p>
              <p className="mt-2 text-xs text-graphite/55">{EVENT.priceNote}</p>
              <div className="mt-7 h-px bg-graphite/12" />
              <ul className="mt-7 space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-graphite/75">
                    <Check className="mt-1 size-4 shrink-0 text-[#8a6d2f]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-7 text-xs leading-relaxed text-graphite/55">
              Solicite sua vaga pelo WhatsApp. Nossa equipe confirma a inscrição e envia os dados
              de pagamento por lá.{" "}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-graphite/40 text-graphite hover:border-graphite"
              >
                Fale com a curadoria
              </a>
              .
            </p>
          </Reveal>
        </div>

        <Reveal delay={160} className="flex items-center lg:col-span-7">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="label-xs flex w-full items-center justify-center bg-graphite px-8 py-6 text-offwhite transition-colors hover:bg-black md:py-7"
          >
            Solicitar minha vaga
          </a>
        </Reveal>
      </div>
    </section>
  );
}
