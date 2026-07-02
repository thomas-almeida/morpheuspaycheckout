# MorpheusPayCheckout

Plataforma SaaS para criação, edição e publicação de páginas de checkout altamente personalizáveis para vendas online.

Editor visual baseado em blocos, templates prontos, PIX integrado, upsell, downsell e order bump — sem necessidade de programação.

## Stack

- **Frontend:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4
- **Backend:** Next.js Route Handlers + Server Actions
- **Database:** Supabase (PostgreSQL) via Drizzle ORM
- **Auth:** NextAuth.js v5 (Credentials + Google OAuth)
- **Payment:** UPDEPIX (PIX)
- **State:** Zustand
- **Forms:** React Hook Form + Zod
- **Testing:** Vitest

## Estrutura

```
src/
  app/          # Rotas e layouts
  components/   # Componentes de UI compartilhados
  modules/      # Módulos feature-based (auth, checkout, editor, payments, funnels, dashboard)
  services/     # Camada de serviços externos (Supabase, UPDEPIX)
  lib/          # Configurações globais (DB, Auth)
  stores/       # Zustand stores
  types/        # Tipos compartilhados
  schemas/      # Schemas Zod
  hooks/        # Custom hooks
  utils/        # Utilitários
```

## Fases do MVP

- [x] **Fase 0** — Scaffolding, design system, componentes base de UI, configuração de ferramentas
- [ ] **Fase 1** — Database schema + Drizzle ORM + migrations
- [ ] **Fase 2** — Autenticação (NextAuth + Credentials)
- [ ] **Fase 3** — Dashboard base
- [ ] **Fase 4** — Block registry + templates + editor
- [ ] **Fase 5** — Checkout público
- [ ] **Fase 6** — Integração PIX (UPDEPIX)
- [ ] **Fase 7** — Order bump + funis (upsell/downsell)
- [ ] **Fase 8** — Testes + deploy

## Como rodar

```bash
npm install
npm run dev
```

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha as credenciais:

- `DATABASE_URL` — Conexão PostgreSQL (Supabase)
- `AUTH_SECRET` — Segredo do NextAuth
- `UPDEPIX_API_KEY` — Chave da API UPDEPIX
- `UPDEPIX_WEBHOOK_SECRET` — Segredo do webhook UPDEPIX
