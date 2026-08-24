/** Dados oficiais do encontro — ponto único de verdade para toda a página. */
export const EVENT = {
  name: "Aliança Empreendedora",
  tagline: "Conexões estratégicas. Negócios que constroem legado.",
  positioning:
    "Estamos selecionando empresários para uma experiência de relacionamento estratégico entre pares.",
  dateLabel: "10 de setembro",
  weekdayLabel: "Quinta-feira",
  timeLabel: "19h30 às 22h",
  /** 10/09/2026, 19h30 — horário de Brasília (UTC-3) */
  startsAt: "2026-09-10T19:30:00-03:00",
  city: "Porto Alegre / RS",
  address: "Av. Diário de Notícias, 200",
  addressComplement: "Porto Alegre / RS",
  mapsQuery: "Av. Diário de Notícias, 200, Porto Alegre, RS",
  price: "R$ 197,00",
  priceNote: "Investimento único por empresário",
  /** Substituir pelo número oficial de atendimento. */
  whatsapp: "5551999999999",
  whatsappMessage:
    "Olá! Quero saber mais sobre o encontro Aliança Empreendedora de 10 de setembro em Porto Alegre.",
  speaker: {
    name: "Pablo Pitani",
    role: "Especialista em posicionamento pessoal e de marca",
  },
} as const;

export const whatsappLink = `https://wa.me/${EVENT.whatsapp}?text=${encodeURIComponent(
  EVENT.whatsappMessage,
)}`;

export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  EVENT.mapsQuery,
)}&output=embed`;

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  EVENT.mapsQuery,
)}`;
