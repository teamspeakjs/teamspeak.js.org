import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
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

      {/* Content */}
      <div className="container relative flex flex-col items-center justify-center min-h-screen text-center max-w-3xl mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 flex items-center gap-4">
          <span className="text-primary">404</span>
          Page Not Found
        </h1>
        <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/">
          <Button size="lg" className="gap-2">
            <Home className="w-5 h-5" />
            Back to Homepage
          </Button>
        </Link>
      </div>
    </main>
  );
}
