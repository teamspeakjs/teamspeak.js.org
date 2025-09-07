import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Code2, Puzzle, Heart, Lock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% TypeSafe",
    description:
      "Built with TypeScript from day one. Full IntelliSense support and compile-time error checking.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized performance with connection pooling and efficient event handling.",
  },
  {
    icon: Code2,
    title: "Developer First",
    description:
      "Intuitive API inspired by discord.js. If you know discord.js, you'll feel right at home.",
  },
  {
    icon: Puzzle,
    title: "Fully Extensible",
    description:
      "Plugin architecture and event-driven design. Build complex bots with ease.",
  },
  {
    icon: Lock,
    title: "Enterprise Ready",
    description:
      "Production-tested with comprehensive error handling and connection management.",
  },
  {
    icon: Heart,
    title: "Open Source",
    description:
      "MIT licensed, community-driven development. Contributions welcome worldwide.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for Modern Development
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to build powerful TeamSpeak bots
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary transition-colors group"
            >
              <CardContent className="p-8">
                <feature.icon className="h-8 w-8 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
