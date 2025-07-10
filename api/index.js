import compression from "compression";
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import serveStatic from "serve-static";
import serverless from "serverless-http";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const resolve = (p) => path.resolve(__dirname, p);

const app = express();

app.use(compression());
app.use(
  "/",
  serveStatic(resolve("dist/static"), {
    index: false,
    extensions: ["html"],
    setHeaders(res) {
      res.setHeader("Content-Type", "image/svg+xml");
      res.setHeader(
        "Cache-Control",
        "no-store, no-cache, must-revalidate, proxy-revalidate"
      );
      res.setHeader("Pragma", "no-cache");
      res.setHeader("Expires", "0");
    },
  })
);

export default app;
export const handler = serverless(app);
