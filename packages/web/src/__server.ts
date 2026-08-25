import app from "./api";
import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";

const port = Number(process.env.PORT ?? 3000);

app.use("/*", async (c, next) => {
  await next();

  if (c.res.headers.get("content-type")?.includes("text/html")) {
    c.header("Cache-Control", "no-store, no-cache, must-revalidate");
    c.header("Pragma", "no-cache");
    c.header("Expires", "0");
  }
});

app.use("/*", serveStatic({ root: "./packages/web/dist" }));
app.get("*", serveStatic({ path: "./packages/web/dist/index.html" }));

serve({ fetch: app.fetch, port }, ({ port: activePort }) => {
  console.log(`Web server listening on port ${activePort ?? port}`);
  console.log(`Resend configured: ${Boolean(process.env.RESEND_API_KEY)}`);
});
