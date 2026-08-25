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
      <div className="relative mx-auto w-full max-w-[760px]">
        <div>
          <div className="flex justify-center">
            <Eyebrow index="VI" tone="graphite">
              Acesso ao encontro
            </Eyebrow>
          </div>
          <Reveal delay={80}>
            <h2 className="display mt-7 text-center text-4xl md:text-5xl">
              Um investimento, uma cadeira na sala.
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <div className="mx-auto mt-10 max-w-[620px] border border-graphite/15 p-8 text-left">
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
            <p className="mx-auto mt-7 max-w-[620px] text-center text-xs leading-relaxed text-graphite/55">
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

        <Reveal delay={160} className="mt-9 flex justify-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="label-xs flex w-full max-w-[620px] items-center justify-center bg-graphite px-8 py-6 text-offwhite transition-colors hover:bg-black md:py-7"
          >
            Solicitar minha vaga
          </a>
        </Reveal>
      </div>
    </section>
  );
}
