import { Eyebrow, Section } from "../section";
import { Reveal } from "../reveal";

const marks = [
  { value: "15", label: "anos estudando posicionamento" },
  { value: "10 mil+", label: "pessoas em palestras e mentorias" },
  { value: "RCV", label: "método próprio de posicionamento" },
];

export function Speaker() {
  return (
    <Section id="palestrante" tone="soft">
      <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -top-4 -left-4 h-24 w-24 border-t border-l border-gold/40" />
            <img
              src="/images/pablo.jpg"
              alt="Pablo Pitani em palestra"
              className="relative w-full object-cover saturate-[0.65]"
            />
            <div className="absolute -right-4 -bottom-4 h-24 w-24 border-r border-b border-gold/40" />
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Eyebrow index="V">Quem conduz o encontro</Eyebrow>
          <Reveal delay={80}>
            <h2 className="display mt-7 text-4xl md:text-5xl">Pablo Pitani</h2>
            <p className="label-xs mt-4 text-gold">
              Especialista em posicionamento pessoal e de marca
            </p>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-offwhite/65 md:text-base">
              <p>
                Há 15 anos Pablo estuda como marcas se diferenciam da concorrência através de um
                posicionamento autêntico. Criou um método que une psicologia, marketing e
                neurociência para identificar a identidade pessoal do dono e encontrar o valor
                real da marca — tornando-a mais relevante e capaz de atrair clientes mais
                qualificados.
              </p>
              <p>
                Mais de 10 mil pessoas passaram por suas palestras, mentorias e cursos, além de
                treinamentos corporativos conduzidos para grandes empresas.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-px bg-gold/10 sm:grid-cols-3">
            {marks.map((mark, i) => (
              <Reveal key={mark.label} delay={200 + i * 90} className="bg-ink-soft">
                <div className="px-6 py-7">
                  <span className="display block text-3xl text-gold-light">{mark.value}</span>
                  <span className="mt-2 block text-xs text-offwhite/45">{mark.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
