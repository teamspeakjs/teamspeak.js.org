"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Download, Star, GitFork, Package } from "lucide-react";
import { getPackageStats } from "@/lib/stats";
import { useEffect, useState } from "react";
import Link from "next/link";

export function StatsSection() {
  const [stats, setStats] = useState([
    {
      icon: Download,
      value: "0",
      label: "Weekly Downloads",
    },
    {
      icon: Star,
      value: "0",
      label: "GitHub Stars",
    },
    {
      icon: GitFork,
      value: "0",
      label: "Forks",
    },
    {
      icon: Package,
      value: "v0.0.0",
      label: "Latest Version",
    },
  ]);

  useEffect(() => {
    const fetchStats = async () => {
      const data = await getPackageStats();
      setStats([
        {
          icon: Download,
          value: data.weeklyDownloads.toLocaleString(),
          label: "Weekly Downloads",
        },
        {
          icon: Star,
          value: data.stars.toLocaleString(),
          label: "GitHub Stars",
        },
        {
          icon: GitFork,
          value: data.forks.toLocaleString(),
          label: "Forks",
        },
        {
          icon: Package,
          value: data.latestVersion,
          label: "Latest Version",
        },
      ]);
    };
    fetchStats();
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Developers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join the growing community building TeamSpeak bots
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
          <Link
            href="https://www.npmjs.com/package/teamspeak.js"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-card border border-border hover:border-primary rounded-lg transition-colors"
          >
            <Package className="h-4 w-4 text-primary" />
            View on NPM
          </Link>
          <Link
            href="https://github.com/teamspeakjs/teamspeak.js"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-card border border-border hover:border-primary rounded-lg transition-colors"
          >
            <Star className="h-4 w-4 text-primary" />
            Star on GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
