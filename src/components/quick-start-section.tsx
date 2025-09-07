"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Copy, Terminal, Package, Play, CheckCircle } from "lucide-react";
import { useState } from "react";

export function QuickStartSection() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section className="py-24" id="quick-start">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Quick Start Guide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get your TeamSpeak bot running in minutes
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="install" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-card">
              <TabsTrigger value="install" className="flex items-center gap-2">
                <Package className="h-4 w-4" />
                Install
              </TabsTrigger>
              <TabsTrigger value="connect" className="flex items-center gap-2">
                <Terminal className="h-4 w-4" />
                Connect
              </TabsTrigger>
              <TabsTrigger value="example" className="flex items-center gap-2">
                <Play className="h-4 w-4" />
                Build
              </TabsTrigger>
            </TabsList>

            <TabsContent value="install">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Installation</CardTitle>
                  <CardDescription>
                    Install teamspeak.js using npm
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-background border border-border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">
                        Terminal
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          copyToClipboard("npm install teamspeak.js", "install")
                        }
                      >
                        {copiedText === "install" ? (
                          <CheckCircle className="h-4 w-4 text-primary" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <code className="text-sm font-mono">
                      npm install teamspeak.js
                    </code>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="connect">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Basic Connection</CardTitle>
                  <CardDescription>
                    Connect to your TeamSpeak server
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-background border border-border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">
                        connect.ts
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          copyToClipboard(
                            `import { TeamSpeakClient } from 'teamspeak.js';

const client = new TeamSpeakClient({
  host: 'your-server.com',
  serverport: 9987,
  username: 'serveradmin',
  password: 'your-password'
});

await client.connect();
const server = await client.getServer();
console.log(\`Connected to: \${server.name}\`);`,
                            "connect"
                          )
                        }
                      >
                        {copiedText === "connect" ? (
                          <CheckCircle className="h-4 w-4 text-primary" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <pre className="text-sm font-mono leading-relaxed">
                      <code>{`import { TeamSpeakClient } from 'teamspeak.js';

const client = new TeamSpeakClient({
  host: 'your-server.com',
  serverport: 9987,
  username: 'serveradmin',
  password: 'your-password'
});

await client.connect();
const server = await client.getServer();
console.log(\`Connected to: \${server.name}\`);`}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="example">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Complete Bot Example</CardTitle>
                  <CardDescription>
                    A fully functional TeamSpeak bot
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-background border border-border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">
                        bot.ts
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          copyToClipboard(
                            `import { TeamSpeakClient } from 'teamspeak.js';

const client = new TeamSpeakClient({
  host: 'your-server.com',
  serverport: 9987,
  username: 'serveradmin',
  password: 'your-password'
});

async function startBot() {
  await client.connect();
  console.log('Bot connected!');
  
  client.on('clientConnect', async (client) => {
    await client.sendMessage(\`Welcome \${client.nickname}!\`);
  });
  
  client.on('textMessage', async (message) => {
    if (message.text === '!ping') {
      await message.reply('Pong!');
    }
  });
}

startBot();`,
                            "example"
                          )
                        }
                      >
                        {copiedText === "example" ? (
                          <CheckCircle className="h-4 w-4 text-primary" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <pre className="text-sm font-mono leading-relaxed">
                      <code>{`import { TeamSpeakClient } from 'teamspeak.js';

const client = new TeamSpeakClient({
  host: 'your-server.com',
  serverport: 9987,
  username: 'serveradmin',
  password: 'your-password'
});

async function startBot() {
  await client.connect();
  console.log('Bot connected!');
  
  client.on('clientConnect', async (client) => {
    await client.sendMessage(\`Welcome \${client.nickname}!\`);
  });
  
  client.on('textMessage', async (message) => {
    if (message.text === '!ping') {
      await message.reply('Pong!');
    }
  });
}

startBot();`}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
