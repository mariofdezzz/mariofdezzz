// Pre-render the app into static HTML.
// run `npm run generate` and then `dist/static` can be served as a static site.

import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import { prerenderTemplate } from "./prerender-template.js";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const toAbsolute = (p) => path.resolve(__dirname, p);

const manifest = JSON.parse(
  fs.readFileSync(toAbsolute("dist/static/.vite/ssr-manifest.json"), "utf-8")
);
const template = prerenderTemplate();
const { render } = await import("./dist/server/entry-server.js");

// determine routes to pre-render from src/pages
const routesToPrerender = fs
  .readdirSync(toAbsolute("src/pages"))
  .map((file) => {
    const name = file.replace(/\.vue$/, "").toLowerCase();
    return name === "home" ? `/` : `/${name}`;
  });

(async () => {
  // pre-render each route...
  for (const url of routesToPrerender) {
    const [appHtml, preloadLinks, css] = await render(url, manifest);

    const html = template
      .replace(`<!--app-html-->`, appHtml)
      .replace(`<!--app-css-->`, css);

    const filePath = `dist/static${url === "/" ? "/index" : url}.html`;
    fs.writeFileSync(toAbsolute(filePath), html);
  }

  // done, delete .vite directory including ssr manifest
  fs.rmSync(toAbsolute("dist/static/.vite"), { recursive: true });
  fs.rmSync(toAbsolute("dist/static/assets"), { recursive: true });
  fs.rmSync(toAbsolute("dist/static/index.html"), { recursive: true });
  fs.rmSync(toAbsolute("dist/server"), { recursive: true });
  fs.cpSync(toAbsolute("dist/static"), toAbsolute("dist"), { recursive: true });
  fs.rmSync(toAbsolute("dist/static"), { recursive: true });
  fs.readdirSync(toAbsolute("dist")).forEach((file) => {
    if (file.endsWith(".html")) {
      fs.renameSync(
        toAbsolute(`dist/${file}`),
        toAbsolute(`dist/${file.replace(/\.html$/, ".svg")}`)
      );
    }
  });
})();
