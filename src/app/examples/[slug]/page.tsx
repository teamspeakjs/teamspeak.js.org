import { getExampleSlugs, getExampleDetail } from "@/lib/examples";
import { Card, CardContent } from "@/components/ui/card";
import { CodeBlock } from "@/components/code-block";

export async function generateStaticParams() {
  return getExampleSlugs().map((slug) => ({ slug }));
}

export default async function ExamplePage({
  params,
}: {
  params: { slug: string };
}) {
  const detail = getExampleDetail(params.slug);
  const filenameFor = (language: string | null | undefined, index: number) => {
    const lang = (language || "typescript").toLowerCase();
    const ext =
      lang === "typescript" || lang === "ts"
        ? "ts"
        : lang === "javascript" || lang === "js"
        ? "js"
        : lang === "bash" || lang === "sh" || lang === "shell"
        ? "sh"
        : lang === "json"
        ? "json"
        : "txt";
    return `snippet-${index + 1}.${ext}`;
  };
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold break-words">
          {detail.title || params.slug}
        </h1>
        {detail.description && (
          <p className="text-muted-foreground text-lg">{detail.description}</p>
        )}
      </div>

      {detail.codeBlocks.map((block, idx) => (
        <Card key={idx} className="bg-card border-border">
          <CardContent className="pt-6">
            <CodeBlock
              filename={filenameFor(block.language, idx)}
              showCopy={true}
              language={(block.language || "typescript").toLowerCase()}
            >
              {block.code}
            </CodeBlock>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
