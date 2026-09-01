import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Eyebrow, Section, SectionTitle } from "../section";
import { Reveal } from "../reveal";

const faqs = [
  {
    q: "O ingresso é individual?",
    a: "Sim. Cada ingresso custa R$ 197 e é válido para uma pessoa. Se você quiser participar com um sócio, cônjuge, gerente de marketing ou outra pessoa envolvida nas decisões do negócio, será necessário solicitar uma vaga individual para cada participante.",
  },
  {
    q: "Essa palestra serve para qualquer tipo de negócio?",
    a: "Sim. As estratégias ensinadas podem ser adaptadas para negócios locais, serviços, infoprodutos, e-commerce e empresas tradicionais.",
  },
  {
    q: "E se eu não puder participar no dia, tem reembolso?",
    a: "A Aliança é presencial e tem vagas limitadas. Por isso pedimos pra você só garantir a vaga se tem certeza que vai estar lá. Em caso de imprevisto sério, entre em contato pelo WhatsApp e a equipe vai avaliar caso a caso.",
  },
  {
    q: "Vai ter espaço pra tirar dúvidas com o Pablo?",
    a: "Sim. Boa parte da palestra é prática e interativa, incluindo a análise ao vivo de perfis. Quem quer falar com o Pablo tem espaço pra isso ali, no momento exato em que o conteúdo ainda está fresco.",
  },
  {
    q: "Vai ter coffee?",
    a: "Sim, coffee e ambiente preparado pra você se conectar com os outros empresários presentes.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

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
                  <div className="min-h-0 overflow-hidden">
                    <p className="max-w-3xl pb-8 text-base leading-relaxed text-offwhite/60">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
