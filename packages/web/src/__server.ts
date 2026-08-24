import app from "./api";
import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";

const port = Number(process.env.PORT ?? 3000);

app.use("/*", serveStatic({ root: "./packages/web/dist" }));
app.get("*", serveStatic({ path: "./packages/web/dist/index.html" }));

serve({ fetch: app.fetch, port }, ({ port: activePort }) => {
  console.log(`Web server listening on http://localhost:${activePort}`);
});
