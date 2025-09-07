"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Terminal, Package, Play } from "lucide-react";
import { CodeBlock } from "@/components/code-block";

export function QuickStartSection() {
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
                  <CodeBlock
                    filename="Terminal"
                    showCopy={true}
                    language="bash"
                  >
                    npm install teamspeak.js
                  </CodeBlock>
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
                  <CodeBlock
                    filename="connect.ts"
                    showCopy={true}
                    language="typescript"
                  >
                    {`import { Query } from 'teamspeak.js';

const query = new Query({
  host: '127.0.0.1',
  port: 10011,
});

query.connect();

console.log('Connected to TeamSpeak server!');`}
                  </CodeBlock>
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
                  <CodeBlock
                    filename="bot.ts"
                    showCopy={true}
                    language="typescript"
                  >
                    {`import { Query, Events } from 'teamspeak.js';

const query = new Query({
  host: '127.0.0.1',
  port: 10011,
});

query.connect();

await query.login('serveradmin', 'p4ssw0rd');

await query.virtualServers.use(1);
// Or use by port:
// await query.virtualServers.use({ port: 9987 });

console.log('ServerQuery is ready!');

// Now you can start interacting with the server

// Events

query.on(Events.ChannelCreate, (channel) => {
  console.log(\`Channel created: \${channel.name}\`);
});

query.on(Events.ChannelUpdate, (before, after) => {
  if (before.name !== after.name) {
    console.log(\`Channel name of \${before.id} changed from "\${before.name}" to "\${after.name}"\`);
  }
});

query.on(Events.TextMessage, (message) => {
  console.log(
    \`Received a \${message.mode}-message from \${message.invoker.nickname || message.invoker.id || 'Unknown Client'}: \${message.content}\`,
  );
});

// Interact with the server

// Set bot nickname
await query.client.setNickname('RealAdmin');

//Fetch all clients
const clients = await query.clients.fetch();

console.log('There are currently', clients.size, 'clients');

// Create a new permanent channel
const createdChannel = await query.channels.create({ name: 'New Channel', type: 'permanent' });

console.log('Created channel:', createdChannel);

// Edit the channel
await createdChannel.edit({ name: 'Changed Name', topic: 'Just chilling' });

// Delete the channel
await createdChannel.delete();
`}
                  </CodeBlock>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
