import resolve from "rollup-plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: "./src/index.ts", // 入口文件
  output: [
    {
      format: "cjs", // 打包为commonjs格式
      file: "dist/react-ssr-frame-core.cjs", // 打包后的文件路径名称
      name: "react-ssr-frame-core", // 打包后的默认导出文件名称
    },
    {
      format: "esm", // 打包为esm格式
      file: "dist/react-ssr-frame-core.mjs",
      name: "react-ssr-frame-core",
    },
    {
      format: "umd", // 打包为umd通用格式
      file: "dist/react-ssr-frame-core.umd.js",
      name: "react-ssr-frame-core",
      minifyInternalExports: true,
    },
  ],
  plugins: [
    resolve({
      preferBuiltins: true,
    }),
    typescript({ tsconfig: "./tsconfig.json" }),
    commonjs({
      include: "node_modules/**",
    }),
  ],
  external: [
    "react",
    "react-dom", // 将React和React DOM设置为外部依赖
    "react-dom/server",
    "@nestjs/common",
    "@nestjs/core", // 将NestJS设置为外部依赖
  ],
};
