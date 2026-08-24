# Design System — Aliança Empreendedora

Base: Manual de Identidade Visual (MIV), versão conceitual — agosto de 2026.
Arquétipo: **Governante maduro**. Ordem, legitimidade, conselho, legado.
Direção: menos "evento de networking", mais "conselho de empresários".

## Cores

| Token | HEX | Uso |
|---|---|---|
| `--ink` | `#0B0B0A` | Fundo principal, peças institucionais |
| `--ink-soft` | `#111110` | Blocos alternados, cards |
| `--gold` | `#B9964F` | Símbolo, títulos, detalhes, bordas |
| `--gold-light` | `#D0B06A` | Destaques, hover, acabamentos |
| `--offwhite` | `#F1EEE7` | Texto sobre fundo escuro |
| `--graphite` | `#222222` | Texto sobre fundo claro |

Regras: dourado chapado (sem gradientes dourados exagerados), sem sombras pesadas,
sem uso do dourado como metáfora literal de dinheiro. Metálico só em peças físicas —
no digital, cor chapada. Fio dourado 1px como recurso estrutural (mesa/conselho).

## Tipografia

- **Display / títulos:** Cormorant Garamond (400/500/600), tracking amplo em caixa alta.
- **Texto / UI:** Montserrat (300/400/500/600).
- **Dados / labels:** Montserrat 500, caixa alta, `letter-spacing: 0.25em`, tamanho pequeno.
- Hierarquia por escala e peso, nunca por decoração. Line-height generoso (1.7 em corpo).

## Layout

- Grid de 12 colunas, container máximo 1200px, respiro vertical de 120–180px por seção.
- Muito espaço negativo: quanto mais premium a aplicação, menos elementos competem com o símbolo.
- Composições assimétricas (texto 5 col / imagem 7 col), numeração romana ou 01–05 em dourado.
- Cantos retos ou raio mínimo (2–4px). Nada de cards arredondados genéricos.
- Divisores: linha 1px `rgba(185,150,79,.25)`.

## Fundos e texturas

- Preto profundo com grão sutil (noise em SVG/overlay, opacidade ≤ 4%).
- Fotos sempre com overlay escuro (60–85%) e dessaturação leve para não competir com o dourado.
- Um único bloco off-white (ingresso/inscrição) para quebra de ritmo e foco na conversão.

## Movimento

- Uma orquestração de entrada por seção: reveal escalonado (fade + 16px de subida),
  via Motion (`framer-motion`) com `whileInView`, `once: true`.
- Hover: apenas mudança de cor/borda em 200ms. Sem escalas exageradas.

## Fotografia

Empresários em conversa real, enquadramento fechado, mesas, luz lateral, ambiente reservado.
Evitar apertos de mão artificiais, comemoração para a câmera, ostentação.

## Voz

Segura, madura, seletiva, direta. Vocabulário: curadoria, pares, conselho, estratégia,
relações, legado, acesso, seleção, confiança. Proibido: "sucesso garantido", "fique rico",
"networking imperdível", "fórmula secreta".
