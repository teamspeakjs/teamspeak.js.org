import fs from "fs";
import path from "path";
import { remark } from "remark";

type CodeBlock = {
  language: string | null | undefined;
  code: string;
};

export type ExampleMeta = {
  slug: string;
  title: string;
  description: string;
};

export type ExampleDetail = ExampleMeta & {
  codeBlocks: CodeBlock[];
};

const EXAMPLES_DIR = path.join(process.cwd(), "src", "content", "examples");

export function getExampleSlugs(): string[] {
  if (!fs.existsSync(EXAMPLES_DIR)) return [];
  return fs
    .readdirSync(EXAMPLES_DIR)
    .filter((fileName) => fileName.toLowerCase().endsWith(".md"))
    .map((fileName) => fileName.replace(/\.md$/i, ""));
}

export function readExampleMarkdown(slug: string): string {
  const filePath = path.join(EXAMPLES_DIR, `${slug}.md`);
  return fs.readFileSync(filePath, "utf8");
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractPlainText(node: any): string {
  if (!node) return "";
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(extractPlainText).join("");
  if (node.type === "text") return node.value || "";
  if (node.children) return node.children.map(extractPlainText).join("");
  return "";
}

function parseExample(markdown: string): {
  title: string;
  description: string;
  codeBlocks: CodeBlock[];
} {
  const tree = remark().parse(markdown);
  const children = Array.isArray(tree?.children) ? tree.children : [];

  let title = "";
  let description = "";

  const h1Index = children.findIndex(
    (n) => n.type === "heading" && n.depth === 1
  );
  if (h1Index !== -1) {
    title = extractPlainText(children[h1Index]);
    // First paragraph after h1
    const para = children
      .slice(h1Index + 1)
      .find((n) => n.type === "paragraph");
    if (para) description = extractPlainText(para);
  } else {
    // fallback to first paragraph as description
    const firstPara = children.find((n) => n.type === "paragraph");
    if (firstPara) description = extractPlainText(firstPara);
  }

  const codeBlocks: CodeBlock[] = [];
  for (const n of children) {
    if (n.type === "code" && typeof n.value === "string") {
      codeBlocks.push({ language: n.lang, code: n.value });
    }
  }

  return { title: title.trim(), description: description.trim(), codeBlocks };
}

export function getExamplesMeta(): ExampleMeta[] {
  return getExampleSlugs().map((slug) => {
    const md = readExampleMarkdown(slug);
    const parsed = parseExample(md);
    return {
      slug,
      title: parsed.title || slug,
      description: parsed.description || "",
    };
  });
}

export function getExampleDetail(slug: string): ExampleDetail {
  const md = readExampleMarkdown(slug);
  const parsed = parseExample(md);
  return {
    slug,
    title: parsed.title || slug,
    description: parsed.description || "",
    codeBlocks: parsed.codeBlocks,
  };
}
