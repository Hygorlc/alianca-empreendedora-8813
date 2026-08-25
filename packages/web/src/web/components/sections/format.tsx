import { Section } from "../section";
import { Reveal } from "../reveal";

const blocks = [
  {
    image: "/images/evento-palestra.png",
    title: "Palestra",
    body: "2 horas de imersão prática no método que separa empresários comuns dos que são vistos como referência. Você vai entender por que a maioria está vendendo o produto errado e como construir uma percepção de valor que faz o cliente parar de comparar preço e começar a comparar autoridade.",
  },
  {
    image: "/images/evento-analise.jpg",
    title: "Análise de posicionamento",
    body: "Vamos abrir alguns perfis ao vivo e mostrar, sem rodeio, o que está fazendo o teu cliente certo passar reto. Você vai sair com clareza cirúrgica do que precisa mudar na tua comunicação pra começar a atrair quem paga pelo que você entrega, e não pelo menor preço do mercado.",
  },
  {
    image: "/images/evento-networking.webp",
    title: "Networking",
    body: "Você vai estar na mesma sala com empresários do Rio Grande do Sul que estão construindo posicionamento sério, não amadores buscando dica fácil. É o tipo de ambiente onde nasce parceria, indicação e contrato real, porque a sala foi filtrada pelo próprio conteúdo do evento.",
  },
];

export function Format() {
  return (
    <Section id="experiencia" tone="ink">
      <h2 className="display text-center text-4xl text-gold-light md:text-5xl">
        O que terá no evento:
      </h2>

      <div className="mt-16 grid gap-px bg-gold/10 md:grid-cols-3">
        {blocks.map((block, i) => (
          <Reveal key={block.title} delay={i * 110} className="bg-ink">
            <article className="flex h-full flex-col bg-ink">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={block.image}
                  alt={block.title}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-75 saturate-[0.75] transition-all duration-700 hover:scale-[1.03] hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              </div>
              <div className="relative -mt-10 flex flex-1 flex-col px-8 pb-10 pt-4 text-center">
                <h3 className="display text-2xl uppercase leading-tight text-gold-light md:text-3xl">
                  {block.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-offwhite/75 md:text-lg">
                  {block.body}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
