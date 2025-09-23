# Manage Channels

This example shows how to create a permanent channel and then edit or delete it.

```ts
const createdChannel = await query.channels.create({
  name: "New Channel",
  type: "permanent",
});
console.log("Created channel:", createdChannel);

await createdChannel.edit({ name: "Changed Name", topic: "Just chilling" });
await createdChannel.delete();
```
