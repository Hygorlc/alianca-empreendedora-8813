import { Eyebrow, Section, SectionTitle } from "../section";
import { Reveal } from "../reveal";

const blocks = [
  {
    n: "01",
    tag: "Palestra",
    image: "/images/palestra.jpg",
    title: "Duas horas de imersão no método",
    body: "O que separa o empresário comum do empresário tratado como referência. Por que a maioria está vendendo o produto errado e como construir uma percepção de valor que faz o cliente parar de comparar preço e começar a comparar autoridade.",
  },
  {
    n: "02",
    tag: "Análise de posicionamento",
    image: "/images/analise.jpg",
    title: "Leitura ao vivo, sem rodeio",
    body: "Abrimos alguns perfis na sala e mostramos o que está fazendo o seu cliente certo passar reto. Você sai com clareza cirúrgica do que precisa mudar na sua comunicação para atrair quem paga pelo que você entrega.",
  },
  {
    n: "03",
    tag: "Relações entre pares",
    image: "/images/networking.jpg",
    title: "Uma sala filtrada pelo próprio conteúdo",
    body: "Empresários do Rio Grande do Sul construindo posicionamento sério — não amadores em busca de dica fácil. É o tipo de ambiente onde nasce parceria, indicação e contrato real.",
  },
];

export function Format() {
  return (
    <Section id="experiencia" tone="soft">
      <Eyebrow index="II">A estrutura do encontro</Eyebrow>
      <SectionTitle>
        Menos evento de networking.
        <span className="block text-gold-light">Mais conselho de empresários.</span>
      </SectionTitle>

      <div className="mt-16 grid gap-px bg-gold/10 md:grid-cols-3">
        {blocks.map((block, i) => (
          <Reveal key={block.n} delay={i * 110} className="bg-ink">
            <article className="flex h-full flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={block.image}
                  alt={block.tag}
                  className="h-full w-full object-cover opacity-55 saturate-[0.55] transition-all duration-700 hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <span className="label-xs absolute bottom-5 left-6 text-gold">{block.tag}</span>
              </div>
              <div className="flex flex-1 flex-col p-8">
                <span className="label-xs text-gold/50">{block.n}</span>
                <h3 className="display mt-4 text-2xl">{block.title}</h3>
                <p className="mt-4 text-sm text-offwhite/55">{block.body}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={220}>
        <blockquote className="display mx-auto mt-20 max-w-3xl border-t border-gold/20 pt-12 text-center text-2xl text-offwhite/85 md:text-3xl">
          “Não é uma sala que precisa ser preenchida. É uma sala que precisa ser construída com as
          pessoas certas.”
        </blockquote>
      </Reveal>
    </Section>
  );
}
