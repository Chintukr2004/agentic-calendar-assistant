import Link from "next/link";
import { CalendarDays, CheckCircle2, MessageSquareText, Sparkles } from "lucide-react";

const features = [
  {
    icon: MessageSquareText,
    title: "Natural-language scheduling",
    description: "Describe a meeting in plain language and let the assistant help manage the details.",
  },
  {
    icon: CalendarDays,
    title: "Google Calendar integration",
    description: "Connect your calendar to check availability and manage calendar events.",
  },
  {
    icon: CheckCircle2,
    title: "Meeting management",
    description: "Ask the assistant to create, reschedule, or cancel meetings after connecting your account.",
  },
];

export default function Home() {
  return (
    <main className="app-shell-bg min-h-svh px-6 py-16 sm:py-24">
      <div className="mx-auto flex w-full max-w-5xl flex-col">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <Sparkles className="size-5" aria-hidden="true" />
          </div>
          <div>
            <p className="font-heading text-lg font-semibold">Meeting Assistant</p>
            <p className="text-xs text-muted-foreground">Agentic Calendar Assistant</p>
          </div>
        </div>

        <section className="grid items-center gap-12 py-20 md:grid-cols-[1.2fr_0.8fr] md:py-28">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-sm text-muted-foreground">
              <span className="size-2 rounded-full bg-primary" /> AI-powered calendar assistant
            </p>
            <h1 className="max-w-2xl font-heading text-4xl font-semibold tracking-tight sm:text-6xl">
              Spend less time scheduling. <span className="text-primary">Focus on the work.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              Chat with your assistant to check calendar availability and manage meetings through your connected Google Calendar.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/sign-in"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
              >
                Get started <span aria-hidden="true" className="ml-2">→</span>
              </Link>
              <a
                href="https://github.com/Chintuk2004/agentic-calendar-assistant"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-border bg-card/70 px-6 text-sm font-semibold transition-colors hover:bg-accent"
              >
                View source code
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-border/80 bg-card/80 p-6 shadow-xl shadow-primary/5 backdrop-blur">
            <div className="mb-6 flex items-center gap-3 border-b border-border pb-5">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Sparkles className="size-5" />
              </div>
              <div>
                <p className="font-semibold">Your AI assistant</p>
                <p className="text-xs text-muted-foreground">Ready to help plan your day</p>
              </div>
              <span className="ml-auto size-2.5 rounded-full bg-emerald-500" />
            </div>
            <div className="space-y-4">
              <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-primary px-4 py-3 text-sm text-primary-foreground">
                Find a free 30-minute slot for a project meeting tomorrow.
              </div>
              <div className="max-w-[92%] rounded-2xl rounded-bl-md bg-muted px-4 py-3 text-sm leading-6">
                I can check your connected calendar and help find a suitable time. Connect Google Calendar after signing in to get started.
              </div>
              <div className="rounded-xl border border-dashed border-border px-4 py-3 text-xs text-muted-foreground">
                Example preview · Connect your account to use live calendar actions.
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3" aria-label="Features">
          {features.map(({ icon: Icon, title, description }) => (
            <article key={title} className="rounded-2xl border border-border/80 bg-card/70 p-5">
              <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <h2 className="font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
            </article>
          ))}
        </section>

        <footer className="mt-16 border-t border-border/70 pt-6 text-sm text-muted-foreground">
          Agentic Calendar Assistant · Built with Next.js, Mastra, and Google Calendar.
        </footer>
      </div>
    </main>
  );
}
