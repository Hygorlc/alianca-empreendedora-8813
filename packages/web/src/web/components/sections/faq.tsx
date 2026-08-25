import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { EVENT, whatsappLink } from "../../lib/event";
import { Eyebrow, Section, SectionTitle } from "../section";
import { Reveal } from "../reveal";

const faqs = [
  {
    q: "Essa palestra serve pra qualquer tipo de negócio?",
    a: "Serve pra qualquer empresário ou profissional liberal que vende seu trabalho e quer parar de competir por preço. Já passaram pela sala advogados, médicos, esteticistas, arquitetos, consultores, donos de clínica, gestores de e-commerce e empresários do varejo. O método de posicionamento é universal, o que muda é a aplicação no seu nicho específico, que será trabalhada na análise ao vivo.",
  },
  {
    q: "O ingresso é mesmo válido pra duas pessoas?",
    a: `O ingresso de ${EVENT.price} é individual. Se você quiser levar um sócio, sua esposa, seu marido, seu gerente de marketing ou outra pessoa envolvida nas decisões do seu negócio, solicite uma vaga adicional para ela.`,
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
