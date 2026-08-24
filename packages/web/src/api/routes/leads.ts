import { z } from "zod";
import { desc } from "drizzle-orm";
import { base } from "../__core/app";
import { db } from "../database";
import { leads } from "../database/schema";

const createInput = z.object({
  name: z.string().min(2, "Informe seu nome completo").max(120),
  email: z.email("E-mail inválido"),
  phone: z.string().min(8, "Informe um WhatsApp válido").max(30),
  company: z.string().max(160).optional(),
  segment: z.string().max(160).optional(),
  tickets: z.number().int().min(1).max(10).default(1),
});

const create = base.input(createInput).handler(async ({ input }) => {
  const [row] = await db
    .insert(leads)
    .values({
      name: input.name.trim(),
      email: input.email.trim().toLowerCase(),
      phone: input.phone.trim(),
      company: input.company?.trim() || null,
      segment: input.segment?.trim() || null,
      tickets: input.tickets,
    })
    .returning();

  return { id: row.id, name: row.name };
});

const list = base.handler(async () => {
  return db.select().from(leads).orderBy(desc(leads.createdAt)).limit(200);
});

const count = base.handler(async () => {
  const rows = await db.select({ id: leads.id }).from(leads);
  return { total: rows.length };
});

export const leadsRouter = { create, list, count };
