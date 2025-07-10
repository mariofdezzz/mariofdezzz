import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const toAbsolute = (p) => path.resolve(__dirname, p);

export function prerenderTemplate() {
  const index = fs.readFileSync(toAbsolute("dist/static/index.html"), "utf-8");
  const _index = index.split("\n").slice(1).join("\n");

  const linksRegex =
    /<link rel="stylesheet" crossorigin href="(?<href>[^"]+)">/g;
  const links = [..._index.matchAll(linksRegex)];

  const css = links
    .map((link) => link.groups?.href)
    .map((link) => fs.readFileSync(toAbsolute("dist/static" + link), "utf-8"))
    .join("\n");

  return _index
    .replace(linksRegex, "")
    .replace("<!--app-css-->", `<style>${css}</style>\n<!--app-css-->`);
}
