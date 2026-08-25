import { Eyebrow, Section, SectionTitle } from "../section";
import { Reveal } from "../reveal";

const items = [
  {
    n: "01",
    title: "Por que quem pergunta o preço primeiro raramente compra",
    body: "E como inverter a ordem da conversa para que valor venha antes de número.",
  },
  {
    n: "02",
    title: "Como cobrar mais que o concorrente que sabe menos que você",
    body: "Sem perder a venda. É exatamente aqui que a maioria dos empresários erra.",
  },
  {
    n: "03",
    title: "O método RCV de posicionamento",
    body: "A construção que faz o cliente certo procurar você antes de você ir atrás dele.",
  },
  {
    n: "04",
    title: "Vender o que você faz x vender quem você é",
    body: "Só uma das duas sustenta margem, paga as contas e escala o faturamento.",
  },
  {
    n: "05",
    title: "O motivo real do seu Instagram não trazer cliente",
    body: "Não tem relação com algoritmo, edição ou frequência de publicação.",
  },
];

export function Discover() {
  return (
    <Section id="encontro">
      <Eyebrow index="I">O que vai ter na sala em 3 horas</Eyebrow>
      <SectionTitle>
        Três horas para mudar a forma como o mercado{" "}
        <span className="text-gold-light">percebe e valoriza você</span>.
      </SectionTitle>

      <div className="mt-16 border-t border-gold/15">
        {items.map((item, i) => (
          <Reveal key={item.n} delay={i * 70}>
            <div className="group grid gap-4 border-b border-gold/15 py-9 transition-colors hover:bg-gold/[0.03] md:grid-cols-12 md:gap-10">
              <span className="label-xs text-gold/70 md:col-span-1">{item.n}</span>
              <h3 className="display text-2xl text-offwhite md:col-span-6 md:text-3xl">
                {item.title}
              </h3>
              <p className="text-sm text-offwhite/55 md:col-span-5">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
