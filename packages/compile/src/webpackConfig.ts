import { resolve } from "path";
import * as WebpackChain from "webpack-chain";
import { WebpackManifestPlugin } from "webpack-manifest-plugin";

const chain = new WebpackChain();
chain
  .entry("main")
  .add(resolve(process?.env?.APP_ROOT ?? __dirname, "./src/index.tsx"))
  .end();
chain.output
  .path(resolve(__dirname, "dist"))
  .publicPath("/")
  .filename("bundle.js")
  .end();
chain.module
  .rule("typescript")
  .test(/\.(ts|tsx)$/)
  .exclude.add(/node_modules/)
  .end()
  .use("babel-loader")
  .loader("babel-loader")
  .options({
    presets: [
      "@babel/preset-env",
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
    ],
  })
  .end()
  .use("ts-loader")
  .loader("ts-loader")
  .options({
    configFile: "tsconfig.client.json",
  })
  .end()
  .end();
chain
  .plugin("WebpackManifestPlugin")
  .use(WebpackManifestPlugin, [{ fileName: "manifest.json" }])
  .end();

chain.resolve.extensions.add(".js").add(".jsx").add(".ts").add(".tsx").end();
chain.mode("development").target("web");

module.exports = chain.toConfig();
