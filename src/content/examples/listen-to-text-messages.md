# Listen to Text Messages

Receive and log text messages from clients.

```ts
import { Events } from "teamspeak.js";

query.on(Events.TextMessage, (message) => {
  console.log(
    `Received a ${message.mode}-message from ${
      message.invoker.nickname || message.invoker.id || "Unknown Client"
    }: ${message.content}`
  );
});
```
