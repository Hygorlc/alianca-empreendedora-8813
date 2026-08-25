import type { ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import { Section } from "../section";
import { Reveal } from "../reveal";

const items: { content: ReactNode }[] = [
  {
    content: (
      <>
        Por que <strong>o cliente que pergunta o preço primeiro nunca compra</strong>, e o que fazer
        para inverter essa ordem.
      </>
    ),
  },
  {
    content: (
      <>
        Como <strong>cobrar mais que o concorrente que sabe menos que você, sem perder venda</strong>{" "}
        (a maioria erra justamente aqui)
      </>
    ),
  },
  {
    content: (
      <>
        O método RCV de posicionamento que{" "}
        <strong>faz o cliente certo te procurar antes de você ir atrás dele</strong>
      </>
    ),
  },
  {
    content: (
      <>
        A diferença entre vender o que você faz e vender quem você é —{" "}
        <strong>
          e por que só uma das duas paga as contas e escala o faturamento do seu negócio.
        </strong>
      </>
    ),
  },
  {
    content: (
      <>
        O motivo real do teu Instagram não trazer cliente{" "}
        <strong>(não tem a ver com algoritmo, edição ou frequência de post)</strong>
      </>
    ),
  },
];

export function Discover() {
  return (
    <Section id="encontro">
      <Reveal>
        <h2 className="display max-w-5xl text-4xl text-gold-light md:text-5xl">
          O que você vai descobrir nas 3 horas da Aliança Presencial:
        </h2>
      </Reveal>

      <div className="mt-12 space-y-5">
        {items.map((item, index) => (
          <Reveal key={index} delay={index * 70}>
            <div className="flex items-start gap-4 border border-offwhite/10 bg-gradient-to-b from-offwhite/[0.08] to-transparent px-6 py-5 md:px-7">
              <CheckCircle2 className="mt-0.5 size-6 shrink-0 fill-[#cad65b] text-ink" />
              <p className="text-base leading-relaxed text-offwhite/75 md:text-lg">
                {item.content}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
