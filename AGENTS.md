<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# MorpheusPayCheckout — Contexto do Projeto

## Visão Geral

Plataforma SaaS para criação, edição e publicação de páginas de checkout personalizáveis. Editor visual baseado em blocos, templates prontos, PIX integrado, upsell/downsell e order bump.

## Stack (Decidido)

| Tecnologia | Versão | Observação |
|---|---|---|
| Next.js | 15.5.19 | App Router |
| React | 19 | |
| TypeScript | 5 | strict mode |
| Tailwind CSS | 4.3 | `@tailwindcss/postcss` |
| Database | Supabase PostgreSQL | Ainda não criado |
| ORM | Drizzle | `drizzle-orm` + `postgres` driver |
| Auth | NextAuth.js v5 beta | Credentials (email/senha) + Google OAuth (futuro) |
| PIX | UPDEPIX | API keys do usuário |
| Forms | React Hook Form + Zod | |
| State | Zustand | stores: editor, checkout, payment, auth |
| Icons | Lucide React | |
| Testes | Vitest | rodar antes do build |
| Deploy | Vercel | Sem domínio customizado por enquanto |

## Estrutura de Diretórios

```
src/
  app/
    (public)/
      page.tsx              # Landing page
      login/page.tsx
      register/page.tsx
      pricing/page.tsx
      [slug]/page.tsx       # Checkout público
    (dashboard)/
      layout.tsx
      dashboard/
        page.tsx
        checkouts/page.tsx
        checkouts/new/page.tsx
        checkouts/[id]/page.tsx  # Editor
        settings/page.tsx
        payments/page.tsx
        funnels/page.tsx
    api/
      auth/[...nextauth]/route.ts
      webhooks/updepix/route.ts
  components/
    ui/                     # Design system components
      button.tsx
      input.tsx
      card.tsx
      badge.tsx
      select.tsx
      label.tsx
      avatar.tsx
      dialog.tsx
      index.ts
  modules/
    auth/                   # components/, services/, hooks/, schemas/, types/, actions/, repositories/, utils/
    checkout/
    editor/
    payments/
    funnels/
    dashboard/
  services/
    updepix/                # create-charge.ts, get-payment.ts, cancel-payment.ts, validate-webhook.ts
  stores/                   # Zustand: editor-store, checkout-store, payment-store, auth-store
  lib/
    db.ts                   # Drizzle client (postgres driver)
    auth.ts                 # NextAuth config (placeholder)
    schema/                 # Drizzle schema files (Phase 1)
  types/
  schemas/
  hooks/
  utils/
  __tests__/
```

## Arquitetura Obrigatória (por módulo)

Cada módulo em `modules/` deve seguir:

```
module/
├── components/   # Apenas UI — sem fetch, sem queries, sem regras de negócio
├── services/     # Lógica de negócio (ex: CreateCheckoutService)
├── hooks/        # Custom hooks com prefixo use
├── schemas/      # Zod schemas
├── types/        # TypeScript types
├── actions/      # Server Actions (validação → autorização → service)
├── repositories/ # Acesso ao banco (nunca acessar Supabase diretamente nos componentes)
└── utils/
```

## Design System (Tailwind 4 Tokens)

Cores definidas em `globals.css` via `@theme`:

- `bg-background` → #F4F5F7
- `bg-surface` → #FFFFFF
- `bg-surface-secondary` → #F8F9FB
- `text-primary` → #111111
- `text-secondary` → #6B7280
- `text-auxiliary` → #9CA3AF
- `bg-primary` → #CDEB43 (verde limão)
- `bg-cta-green` → #14AE2B
- `bg-premium-black` → #0A0A0A
- `border-danger` → #FF5A3D
- `text-success` → #16A34A

Border Radius: `rounded-sm` (8px), `rounded-md` (12px), `rounded-lg` (16px), `rounded-xl` (20px), `rounded-2xl` (24px)

Breakpoints: Desktop >=1280px, Laptop 1024-1279px, Tablet 768-1023px, Mobile <=767px

## Estado Atual do Projeto

- [x] **Fase 0** — Concluída. Scaffolding, design system tokens, componentes UI base (Button, Input, Card, Badge, Select, Label, Avatar, Dialog), lib placeholders, Vitest configurado.
- [ ] **Fase 1** — Próxima. Schema Drizzle + migrations no Supabase.
- [ ] **Fase 2** — Autenticação com NextAuth (Credentials provider + bcryptjs).
- [ ] **Fase 3** — Dashboard base com sidebar e métricas.
- [ ] **Fase 4** — Block Registry + Templates JSON + Editor form-based.
- [ ] **Fase 5** — Checkout público com renderizador dinâmico de blocos.
- [ ] **Fase 6** — Integração UPDEPIX (PIX: criação, polling, webhook).
- [ ] **Fase 7** — Order bump + funis (upsell/downsell/thank you).
- [ ] **Fase 8** — Testes unitários + deploy Vercel.

## Decisões Tomadas

- **Editor:** Opção B — form-based + preview (sem drag-and-drop `@dnd-kit` por enquanto)
- **Auth:** Própria (Credentials), sem Supabase Auth. Google OAuth planejado para depois do MVP.
- **Database:** Apenas PostgreSQL via Supabase. Supabase Auth não será usado.
- **Idioma:** Português brasileiro
- **Templates:** 5 templates prontos como JSON seed (Minimalista, Alta Conversão, Infoproduto, Ecommerce, Black Theme)
- **Senha:** bcryptjs para hash
- **Testes:** Vitest, rodar antes do build

## Variáveis de Ambiente

```env
DATABASE_URL=postgresql://...           # Supabase PostgreSQL

AUTH_SECRET=                            # Gerar com: openssl rand -base64 32
AUTH_URL=http://localhost:3000

UPDEPIX_API_KEY=
UPDEPIX_WEBHOOK_SECRET=
```

## Comandos

```bash
npm run dev        # Desenvolvimento
npm run build      # Build produção
npm run lint       # ESLint
npm test           # Vitest
npm run test:watch # Vitest watch mode
```

## Blocos do Checkout

O checkout é composto por blocos registrados dinamicamente via `BlockRegistry`:

- Banner, Produto, Dados do Cliente, PIX, Contador, Escassez, Prova Social, Avaliações, Notificações, Order Bump, FAQ, Garantia

Cada bloco: `{ id: string, type: string, visible: boolean, settings: {} }`

## Estrutura do Checkout (JSON)

```json
{
  "theme": { "primaryColor": "", "secondaryColor": "", "accentColor": "", "backgroundColor": "", "textColor": "", "borderRadius": "" },
  "blocks": [],
  "settings": {}
}
```

## Padronização de Respostas (API)

```json
// Sucesso
{ "success": true, "data": {} }

// Erro
{ "success": false, "message": "Erro" }
```
