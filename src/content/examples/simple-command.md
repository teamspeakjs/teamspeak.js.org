# Simple Command

Creates an simple text command

```ts
import { Events } from "teamspeak.js";

query.on(Events.TextMessage, (message) => {
  if (message.content == "!ping") {
    message.invoker.sendMessage("Pong!");
  } else if (message.content.startsWith("!say")) {
    const content = message.content.split(" ").slice(1).join(" ");
    message.invoker.sendMessage(content);
  }
});
```
