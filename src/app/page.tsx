import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { QuickStartSection } from "@/components/quick-start-section";
import { StatsSection } from "@/components/stats-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <QuickStartSection />
      <Footer />
    </main>
  );
}
