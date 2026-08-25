import { Section } from "../section";
import { Reveal } from "../reveal";

const blocks = [
  {
    n: "01",
    tag: "",
    image: "https://pablopitani.com.br/wp-content/uploads/2025/08/DMF_7691-1024x683-2.webp",
    title: "Imersão prática em posicionamento",
    body: "Você vai entender o que separa empresários comuns daqueles que são percebidos como referência — e como fazer o cliente comparar autoridade antes de comparar preço.",
  },
  {
    n: "02",
    tag: "Análise de posicionamento",
    image: "https://pablopitani.com.br/wp-content/uploads/2025/08/DMF_7706-1024x683-3.webp",
    title: "Análise ao vivo, sem rodeio",
    body: "Alguns perfis serão analisados na sala para mostrar, na prática, o que afasta o cliente certo e o que precisa mudar para aumentar sua percepção de valor.",
  },
  {
    n: "03",
    tag: "Conexões entre empresários",
    image: "https://pablopitani.com.br/wp-content/uploads/2025/08/DMF_8103-2-1024x683.webp",
    title: "Relações que continuam depois do encontro",
    body: "Uma sala com empresários do Rio Grande do Sul construindo negócios sérios, onde conversas relevantes podem gerar parceria, indicação e contrato real.",
  },
];

export function Format() {
  return (
    <Section id="experiencia" tone="soft">
      <div className="grid gap-px bg-gold/10 md:grid-cols-3">
        {blocks.map((block, i) => (
          <Reveal key={block.n} delay={i * 110} className="bg-ink">
            <article className="flex h-full flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={block.image}
                  alt={block.tag || block.title}
                  className="h-full w-full object-cover opacity-55 saturate-[0.55] transition-all duration-700 hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                {block.tag && (
                  <span className="label-xs absolute bottom-5 left-6 text-gold">{block.tag}</span>
                )}
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
    </Section>
  );
}
