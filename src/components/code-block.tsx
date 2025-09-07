"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "./ui/button";
import { Copy, CheckCircle } from "lucide-react";
import { useState } from "react";

interface CodeBlockProps {
  filename?: string;
  showDots?: boolean;
  language?: string;
  showCopy?: boolean;
  children: string;
}

export function CodeBlock({
  filename = "untitled",
  showDots = false,
  showCopy = false,
  language = "typescript",
  children,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block rounded-xl p-6 mx-auto text-left border border-border bg-background/50 backdrop-blur-sm shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {showDots && (
            <>
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </>
          )}
          <span className="text-muted-foreground text-sm ml-2">{filename}</span>
        </div>
        {showCopy && (
          <Button variant="ghost" size="sm" onClick={copyToClipboard}>
            {copied ? (
              <CheckCircle className="h-4 w-4 text-primary" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        )}
      </div>
      <pre className="text-sm font-mono text-foreground">
        <SyntaxHighlighter
          language={language}
          style={nightOwl}
          customStyle={{
            background: "transparent",
            margin: 0,
            padding: 0,
          }}
        >
          {children}
        </SyntaxHighlighter>
      </pre>
    </div>
  );
}
