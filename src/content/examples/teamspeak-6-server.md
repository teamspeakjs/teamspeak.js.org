# TeamSpeak 6 Server

Connect to a TeamSpeak 6 Server

```ts
import { Query } from "teamspeak.js";

const query = new Query({
  host: "127.0.0.1",
  protocol: "ssh",
  ssh: {
    username: "serveradmin",
    password: "SecretPassword",
  },
});

await query.connect();

// No need to query.login anymore!

await query.virtualServers.use(1);
```
