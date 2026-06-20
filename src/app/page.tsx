import { ArrowRight, BarChart3, CreditCard, Layout, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <header className="flex items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <span className="text-xl font-bold tracking-tight">
          MorpheusPay
        </span>
        <nav className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
          >
            Entrar
          </Link>
          <Link
            href="/register"
            className="inline-flex h-10 items-center rounded-md bg-premium-black px-5 text-sm font-semibold text-white transition-all hover:bg-text-primary"
          >
            Criar Conta
          </Link>
        </nav>
      </header>

      <main className="flex flex-1 flex-col">
        <section className="flex flex-col items-center px-6 pt-20 pb-16 text-center sm:px-10 lg:px-16 lg:pt-28">
          <span className="mb-6 inline-flex items-center rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold text-text-secondary">
            SaaS de Checkout de Alta Conversão
          </span>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Crie checkouts profissionais{" "}
            <span className="text-primary">sem programação</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
            Editor visual baseado em blocos, templates prontos, PIX integrado,
            upsell, downsell e order bump. Tudo que você precisa para vender
            mais.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/register"
              className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-premium-black px-8 text-base font-semibold text-white transition-all hover:shadow-cta-hover hover:-translate-y-0.5 sm:w-auto"
            >
              Começar Gratuitamente
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex h-13 w-full items-center justify-center rounded-xl border border-border bg-surface px-8 text-base font-semibold text-text-primary transition-all hover:shadow-cta-hover hover:-translate-y-0.5 sm:w-auto"
            >
              Ver Planos
            </Link>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-4 px-6 pb-20 sm:px-10 lg:grid-cols-3 lg:px-16">
          {[
            {
              icon: Layout,
              title: "Editor Visual",
              description:
                "Monte seu checkout com blocos de forma intuitiva, sem escrever uma linha de código.",
            },
            {
              icon: CreditCard,
              title: "PIX Integrado",
              description:
                "Receba pagamentos via PIX com integração direta e confirmação automática.",
            },
            {
              icon: BarChart3,
              title: "Dashboard Completo",
              description:
                "Acompanhe vendas, visualize métricas e gerencie todos os checkouts em um só lugar.",
            },
            {
              icon: Zap,
              title: "Upsell & Downsell",
              description:
                "Crie funis de venda com upsell, downsell e order bump para aumentar o ticket médio.",
            },
            {
              icon: Layout,
              title: "Templates Prontos",
              description:
                "Comece com templates profissionais e personalize cada detalhe.",
            },
            {
              icon: BarChart3,
              title: "Mobile First",
              description:
                "Checkouts otimizados para dispositivos móveis com performance superior.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-border bg-surface p-6 transition-all hover:shadow-hover"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </section>
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-text-auxiliary">
        <p>MorpheusPayCheckout &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
