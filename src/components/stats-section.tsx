"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Download, Star, GitFork, Package } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      icon: Download,
      value: "25.7k",
      label: "Weekly Downloads",
    },
    {
      icon: Star,
      value: "2.1k",
      label: "GitHub Stars",
    },
    {
      icon: GitFork,
      value: "156",
      label: "Forks",
    },
    {
      icon: Package,
      value: "v3.2.1",
      label: "Latest Version",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Developers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join the growing community building TeamSpeak integrations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary transition-colors"
            >
              <CardContent className="p-6 text-center">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-2xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <a
            href="https://www.npmjs.com/package/teamspeak.js"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-card border border-border hover:border-primary rounded-lg transition-colors"
          >
            <Package className="h-4 w-4 text-primary" />
            View on NPM
          </a>
          <a
            href="https://github.com/your-username/teamspeak.js"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-card border border-border hover:border-primary rounded-lg transition-colors"
          >
            <Star className="h-4 w-4 text-primary" />
            Star on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
