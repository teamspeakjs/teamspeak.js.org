import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CodeBlock } from "@/components/code-block";
import { getExamplesMeta } from "@/lib/examples";

export default function ExamplesIndexPage() {
  const metas = getExamplesMeta();
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold">Code Examples</h1>
        <p className="text-muted-foreground text-lg">
          Explore focused examples for common TeamSpeak tasks using
          teamspeak.js.
        </p>
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>Boilerplate Setup</CardTitle>
          <CardDescription>
            Query setup you can reuse across examples.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeBlock
            filename="bootstrap.ts"
            showCopy={true}
            language="typescript"
          >
            {`// This is the default setup for all examples.
            
// It's for TeamSpeak 3! For TeamSpeak 6,
// use the SSH protocol instead (https://teamspeak.js.org/examples/teamspeak-6-server/).
            
import { Query } from 'teamspeak.js';

const query = new Query({ host: '127.0.0.1' });

await query.connect();

await query.login('serveradmin', 'p4ssw0rd');

await query.virtualServers.use(1);
`}
          </CodeBlock>
        </CardContent>
      </Card>
      {metas.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {metas.map((m) => (
            <Link key={m.slug} href={`/examples/${m.slug}`}>
              <Card className="bg-card border-border h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle>{m.title}</CardTitle>
                  {m.description && (
                    <CardDescription className="line-clamp-2">
                      {m.description}
                    </CardDescription>
                  )}
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
