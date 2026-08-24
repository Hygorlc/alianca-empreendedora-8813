import { useState } from "react";
import { useForm } from "react-hook-form";
import { Check, Loader2 } from "lucide-react";
import { EVENT, whatsappLink } from "../../lib/event";
import { useCreateLead } from "../../queries/leads";
import { Reveal } from "../reveal";
import { Eyebrow } from "../section";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  company: string;
  segment: string;
  tickets: number;
}

const included = [
  "Palestra de 2 horas sobre posicionamento e percepção de valor",
  "Análise de posicionamento ao vivo",
  "Ambiente de relações entre empresários selecionados",
  "Coffee break servido durante o intervalo",
  "Certificado de participação",
];

export function Ticket() {
  const createLead = useCreateLead();
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { name: "", email: "", phone: "", company: "", segment: "", tickets: 1 },
  });

  const onSubmit = handleSubmit(async (values) => {
    await createLead.mutateAsync({
      name: values.name,
      email: values.email,
      phone: values.phone,
      company: values.company || undefined,
      segment: values.segment || undefined,
      tickets: Number(values.tickets) || 1,
    });
    reset();
    setDone(true);
  });

  const inputClass =
    "w-full border border-graphite/20 bg-transparent px-4 py-3.5 text-sm text-graphite outline-none transition-colors placeholder:text-graphite/35 focus:border-graphite";

  return (
    <section id="inscricao" className="grain relative bg-offwhite px-6 py-24 text-graphite md:px-10 md:py-32">
      <div className="relative mx-auto grid w-full max-w-[1200px] gap-16 lg:grid-cols-12 lg:gap-24">
        <div className="lg:col-span-5">
          <Eyebrow index="V" tone="graphite">
            Acesso ao encontro
          </Eyebrow>
          <Reveal delay={80}>
            <h2 className="display mt-7 text-4xl md:text-5xl">
              Um investimento, uma cadeira na sala.
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-10 border border-graphite/15 p-8">
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
            <p className="mt-7 text-xs leading-relaxed text-graphite/55">
              Preencha a inscrição ao lado. Nossa equipe confirma sua vaga e envia os dados de
              pagamento pelo WhatsApp. Prefere falar antes?{" "}
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

        <Reveal delay={160} className="lg:col-span-7">
          <div className="border border-graphite/15 bg-white p-8 md:p-11">
            {done ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="flex size-14 items-center justify-center border border-[#8a6d2f]/40">
                  <Check className="size-6 text-[#8a6d2f]" />
                </span>
                <h3 className="display mt-7 text-3xl">Inscrição registrada.</h3>
                <p className="mt-4 max-w-sm text-sm text-graphite/60">
                  Recebemos seus dados. A confirmação da vaga e as instruções de pagamento chegam
                  pelo WhatsApp informado.
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-xs mt-8 border border-graphite px-8 py-4 text-graphite transition-colors hover:bg-graphite hover:text-offwhite"
                >
                  Adiantar pelo WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5" noValidate>
                <div>
                  <h3 className="display text-3xl">Solicitar minha vaga</h3>
                  <p className="mt-2 text-xs text-graphite/55">
                    {EVENT.dateLabel} • {EVENT.timeLabel} • {EVENT.address}
                  </p>
                </div>

                <div>
                  <label className="label-xs text-graphite/60" htmlFor="name">
                    Nome completo
                  </label>
                  <input
                    id="name"
                    className={`${inputClass} mt-2`}
                    placeholder="Como você quer ser chamado"
                    {...register("name", { required: "Informe seu nome", minLength: 2 })}
                  />
                  {errors.name ? (
                    <p className="mt-2 text-xs text-red-700">{errors.name.message}</p>
                  ) : null}
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="label-xs text-graphite/60" htmlFor="email">
                      E-mail
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={`${inputClass} mt-2`}
                      placeholder="voce@empresa.com.br"
                      {...register("email", {
                        required: "Informe seu e-mail",
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "E-mail inválido" },
                      })}
                    />
                    {errors.email ? (
                      <p className="mt-2 text-xs text-red-700">{errors.email.message}</p>
                    ) : null}
                  </div>
                  <div>
                    <label className="label-xs text-graphite/60" htmlFor="phone">
                      WhatsApp
                    </label>
                    <input
                      id="phone"
                      inputMode="tel"
                      className={`${inputClass} mt-2`}
                      placeholder="(51) 90000-0000"
                      {...register("phone", { required: "Informe seu WhatsApp", minLength: 8 })}
                    />
                    {errors.phone ? (
                      <p className="mt-2 text-xs text-red-700">{errors.phone.message}</p>
                    ) : null}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="label-xs text-graphite/60" htmlFor="company">
                      Empresa
                    </label>
                    <input
                      id="company"
                      className={`${inputClass} mt-2`}
                      placeholder="Nome da empresa"
                      {...register("company")}
                    />
                  </div>
                  <div>
                    <label className="label-xs text-graphite/60" htmlFor="segment">
                      Segmento
                    </label>
                    <input
                      id="segment"
                      className={`${inputClass} mt-2`}
                      placeholder="Ex.: advocacia, indústria, saúde"
                      {...register("segment")}
                    />
                  </div>
                </div>

                <div>
                  <label className="label-xs text-graphite/60" htmlFor="tickets">
                    Quantidade de vagas
                  </label>
                  <select
                    id="tickets"
                    className={`${inputClass} mt-2`}
                    {...register("tickets", { valueAsNumber: true })}
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "vaga" : "vagas"} — R$ {(197 * n).toLocaleString("pt-BR")},00
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={createLead.isPending}
                  className="label-xs flex w-full items-center justify-center gap-3 bg-graphite px-8 py-5 text-offwhite transition-colors hover:bg-black disabled:opacity-60"
                >
                  {createLead.isPending ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Enviando
                    </>
                  ) : (
                    "Solicitar minha vaga"
                  )}
                </button>

                {createLead.isError ? (
                  <p className="text-xs text-red-700">
                    Não foi possível enviar agora. Tente novamente ou fale com a curadoria pelo
                    WhatsApp.
                  </p>
                ) : null}

                <p className="text-[0.7rem] leading-relaxed text-graphite/45">
                  Seus dados são usados apenas para a curadoria e confirmação desta edição.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
