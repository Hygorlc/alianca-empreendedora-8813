import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";
import path from "path";
import runableAnalyticsPlugin from "./vite/__plugins/runable-analytics-plugin";
import honoDevPlugin from "./vite/__plugins/hono-dev-plugin";
import assetOptimizerPlugin from "./vite/__plugins/asset-optimizer-plugin";
import ports from "../../__ports.cjs";

function inlineProductionCss() {
  return {
    name: "inline-production-css",
    apply: "build" as const,
    enforce: "post" as const,
    generateBundle(_: unknown, bundle: Record<string, any>) {
      const html = Object.values(bundle).find(
        (item) => item.type === "asset" && item.fileName === "index.html",
      );

      if (!html || typeof html.source !== "string") return;

      for (const [fileName, item] of Object.entries(bundle)) {
        if (item.type !== "asset" || !fileName.endsWith(".css")) continue;

        const css = typeof item.source === "string" ? item.source : item.source.toString();
        const marker = `href="/${fileName}"`;
        const linkStart = html.source.lastIndexOf("<link", html.source.indexOf(marker));
        const linkEnd = html.source.indexOf(">", html.source.indexOf(marker));

        if (linkStart >= 0 && linkEnd >= 0) {
          html.source =
            html.source.slice(0, linkStart) +
            `<style>${css}</style>` +
            html.source.slice(linkEnd + 1);
          delete bundle[fileName];
        }
      }
    },
  };
}

const root = path.resolve(__dirname, "../..");

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, root, "");
  Object.assign(process.env, env);

  return {
    // All env files live at the repo root — keep Vite's own env loading there too,
    // so packages/web/.env* files can never shadow the root .env.
    envDir: root,
    plugins: [
      honoDevPlugin(),
      react(),
      runableAnalyticsPlugin(),
      tailwind(),
      assetOptimizerPlugin(),
      inlineProductionCss(),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src/web"),
      },
    },
    server: {
      port: ports.website,
      strictPort: true,
      allowedHosts: true,
      hmr: { overlay: false },
      cors: false,
    },
  };
});
