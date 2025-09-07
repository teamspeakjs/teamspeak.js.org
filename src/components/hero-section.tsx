import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Download, ExternalLink } from "lucide-react";
import Link from "next/link";
import { CodeBlock } from "@/components/code-block";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background animate-gradient" />

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
      <div
        className="absolute top-40 right-20 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary/10 rounded-full blur-xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative container mx-auto px-4 py-24 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="flex justify-center">
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm font-medium animate-glow"
            >
              🚀 Open Source & TypeScript First
            </Badge>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight text-balance">
            teamspeak.js
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
            A modern, fully typesafe{" "}
            <span className="text-primary font-semibold">TeamSpeak</span>{" "}
            library for{" "}
            <span className="text-[#3c873a] font-semibold">Node.js</span>.
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Built with TypeScript from the ground up, teamspeak.js provides a
            clean, intuitive API for interacting with TeamSpeak servers. Get
            full IntelliSense support and catch errors at compile time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link href="#quick-start">
              <Button
                size="lg"
                className="px-8 py-3 text-lg font-semibold animate-glow"
              >
                <Download className="mr-2 h-5 w-5" />
                Get Started
              </Button>
            </Link>
            <Link
              href="https://github.com/teamspeakjs/teamspeak.js"
              target="_blank"
            >
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg bg-transparent"
              >
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Button>
            </Link>
            <Link href="/docs">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg bg-transparent"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Documentation
              </Button>
            </Link>
          </div>

          {/* Code preview */}
          <div className="pt-12">
            <CodeBlock
              filename="index.ts"
              showDots={true}
              showCopy={true}
              language="typescript"
            >
              {`import { Query } from 'teamspeak.js';

const query = new Query({
  host: '127.0.0.1',
  port: 10011,
});

query.connect();

console.log('Connected to TeamSpeak server!');`}
            </CodeBlock>
          </div>
        </div>
      </div>
    </section>
  );
}
