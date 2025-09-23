import { ReactNode } from "react";
import { getExamplesMeta } from "@/lib/examples";
import { ExamplesSidebar } from "@/components/examples-sidebar";
import Link from "next/link";

export default async function ExamplesLayout({
  children,
}: {
  children: ReactNode;
}) {
  const metas = getExamplesMeta();
  const links = [
    { href: "/examples", label: "Overview" },
    ...metas.map((m) => ({
      href: `/examples/${m.slug}`,
      label: m.title || m.slug,
    })),
  ];
  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background animate-gradient" />
        <div className="relative container mx-auto px-4 py-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-primary to-blue-400 bg-clip-text text-transparent leading-tight">
              Examples
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mt-4">
              Practical snippets showing common tasks with teamspeak.js.
            </p>
            <div className="mt-6">
              <Link href="/" className="text-sm text-primary hover:underline">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8">
            <aside className="md:sticky md:top-8 h-fit">
              <ExamplesSidebar links={links} />
            </aside>
            <div className="min-w-0">{children}</div>
          </div>
        </div>
      </section>
    </main>
  );
}
