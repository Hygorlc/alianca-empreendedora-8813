import { z } from "zod";
import { base } from "../__core/app";

const createInput = z.object({
  name: z.string().min(2, "Informe seu nome completo").max(120),
  email: z.email("E-mail inválido"),
  phone: z.string().min(8, "Informe um WhatsApp válido").max(30),
  company: z.string().max(160).optional(),
  segment: z.string().max(160).optional(),
  tickets: z.number().int().min(1).max(10).default(1),
});

const create = base.input(createInput).handler(async ({ input }) => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY não configurada");

  const escapeHtml = (value: string) =>
    value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const name = input.name.trim();
  const email = input.email.trim().toLowerCase();
  const phone = input.phone.trim();
  const company = input.company?.trim() || "Não informada";
  const segment = input.segment?.trim() || "Não informado";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Aliança Empreendedora <inscricoes@aliancaempreendedora.com>",
      to: ["hygorlc92@gmail.com", "filipigomesmkt@gmail.com"],
      reply_to: email,
      subject: `Nova solicitação de vaga — ${name}`,
      html: `
        <h2>Nova solicitação de vaga</h2>
        <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
        <p><strong>WhatsApp:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Empresa:</strong> ${escapeHtml(company)}</p>
        <p><strong>Segmento:</strong> ${escapeHtml(segment)}</p>
        <p><strong>Quantidade de vagas:</strong> ${input.tickets}</p>
      `,
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    console.error("Falha ao enviar e-mail pelo Resend", response.status, details);
    throw new Error("Não foi possível enviar a inscrição");
  }

  const result = (await response.json()) as { id: string };
  return { id: result.id, name };
});

const list = base.handler(async () => []);

const count = base.handler(async () => ({ total: 0 }));

export const leadsRouter = { create, list, count };
