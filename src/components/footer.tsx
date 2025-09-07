import { Button } from "@/components/ui/button";
import {
  Github,
  Heart,
  Book,
  MessageCircle,
  Download,
  Package,
} from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                teamspeak.js
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                The modern, TypeScript-first TeamSpeak library that developers
                love. Built by the community, for the community.
              </p>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground">Resources</h4>
            <div className="space-y-3">
              <Link
                href="/docs"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Book className="h-4 w-4" />
                Documentation
              </Link>
              <Link
                href="https://github.com/teamspeakjs/teamspeak.js"
                target="_blank"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub Repository
              </Link>
              <Link
                href="https://www.npmjs.com/package/teamspeak.js"
                target="_blank"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Package className="h-4 w-4" />
                NPM Package
              </Link>
            </div>
          </div>

          {/* Community */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground">Community</h4>
            <div className="space-y-3">
              <Link
                href="https://lix.qa/tjs-dc"
                target="_blank"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Discord Server
              </Link>
              <Link
                href="https://github.com/teamspeakjs/teamspeak.js/issues"
                target="_blank"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" />
                Issues & Support
              </Link>
              <Link
                href="https://github.com/teamspeakjs/teamspeak.js/tree/main?tab=contributing-ov-file#readme"
                target="_blank"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Heart className="h-4 w-4" />
                Contributing Guide
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Made with <Heart className="inline size-4 text-primary" /> by
              <Link
                href="https://lix.qa/"
                target="_blank"
                className="font-medium hover:underline text-primary"
              >
                Lixqa
              </Link>
              and the open source community
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/teamspeakjs/teamspeak.js/stargazers"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Github className="h-4 w-4 mr-2" />
                  Star on GitHub
                </Button>
              </Link>
              <Link
                href="https://www.npmjs.com/package/teamspeak.js"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
