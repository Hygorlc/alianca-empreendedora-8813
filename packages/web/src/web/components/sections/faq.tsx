import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { EVENT, whatsappLink } from "../../lib/event";
import { Eyebrow, Section, SectionTitle } from "../section";
import { Reveal } from "../reveal";

const faqs = [
  {
    q: "Esse encontro serve para qualquer tipo de negócio?",
    a: "Serve para empresários e profissionais que vendem serviço, produto ou expertise e querem ser escolhidos por autoridade, não por preço. O conteúdo é sobre percepção de valor — aplica-se a advocacia, saúde, estética, indústria, tecnologia, varejo e serviços em geral.",
  },
  {
    q: "Quantas pessoas participam?",
    a: "A sala é limitada. A curadoria existe justamente para manter o ambiente entre pares: empresários construindo posicionamento sério, com espaço real de conversa.",
  },
  {
    q: "Posso levar um sócio ou convidado?",
    a: `Sim. No formulário de inscrição você escolhe a quantidade de vagas — cada vaga é ${EVENT.price}. Recomendamos inscrever o sócio pelo nome dele para emissão da credencial.`,
  },
  {
    q: "Vai ter espaço para tirar dúvidas com o Pablo?",
    a: "Sim. Além da análise de posicionamento ao vivo, há um bloco aberto de perguntas e o momento de relações no intervalo.",
  },
  {
    q: "E se eu não puder participar no dia?",
    a: "Avisando com pelo menos 48 horas de antecedência, transferimos sua vaga para a próxima edição ou para outra pessoa indicada por você.",
  },
  {
    q: "Vai ter coffee?",
    a: "Sim, coffee break servido durante o intervalo — parte do ambiente de conversa entre os participantes.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" tone="soft">
      <Eyebrow index="VIII">Dúvidas frequentes</Eyebrow>
      <SectionTitle>Antes de confirmar sua vaga.</SectionTitle>

      <div className="mt-14 border-t border-gold/15">
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={faq.q} delay={i * 60}>
              <div className="border-b border-gold/15">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-7 text-left"
                >
                  <span className="display text-xl text-offwhite md:text-2xl">{faq.q}</span>
                  {isOpen ? (
                    <Minus className="size-5 shrink-0 text-gold" />
                  ) : (
                    <Plus className="size-5 shrink-0 text-gold/60" />
                  )}
                </button>
                <div
                  className="grid overflow-hidden transition-all duration-500"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <p className="min-h-0 max-w-3xl pb-8 text-sm leading-relaxed text-offwhite/55">
                    {faq.a}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={200}>
        <p className="mt-12 text-sm text-offwhite/50">
          Ficou outra dúvida?{" "}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-gold/40 text-gold hover:border-gold"
          >
            Fale direto com a curadoria
          </a>
          .
        </p>
      </Reveal>
    </Section>
  );
}
