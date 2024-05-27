import { from, of } from "rxjs";
import { switchMap, map, tap } from "rxjs/operators";
import fs from "fs";
import path, { resolve } from "path";
import { FC, createElement } from "react";
import { renderToString } from "react-dom/server";

// 假设您有一个函数来生成 HTML 模板
const generateHtmlTemplate = (
  component: FC,
  initialState: Object,
  assets: { [key: string]: string }
) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>React SSR</title>
</head>
<body>
  <div id="root">${renderToString(createElement(component))}</div>
  <script>
    window.__initial__ = ${JSON.stringify(initialState)};
  </script>
  ${Object.keys(assets).map((key: string) => {
    return assets[key] ? `<script src="${assets[key]}"></script>` : "";
  })}
</body>
</html>
`;

const getCwd = () => {
  return resolve(process.cwd());
};

// 读取 manifest.json 文件
const readManifest = () => {
  const manifestPath = path.resolve(getCwd(), "dist/manifest.json");
  return from(fs.promises.readFile(manifestPath, "utf8")).pipe(
    map((data) => JSON.parse(data))
  );
};

export { readManifest, generateHtmlTemplate };
