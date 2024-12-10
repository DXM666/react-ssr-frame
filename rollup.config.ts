import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import path from "path";
import { defineConfig } from "rollup";

const pkgs = [
  { packageName: "cli", external: [] },
  { packageName: "compile", external: [] },
  {
    packageName: "core",
    external: [
      "react",
      "react-dom",
      "react-dom/server",
      "@nestjs/common",
      "@nestjs/core",
    ],
  },
  { packageName: "construct", external: ["react", "react-dom"] },
  { packageName: "types", external: [] },
  { packageName: "utils", external: [] },
];

type Package = {
  packageName: string;
  external: string[];
};

const createConfig = ({ packageName, external }: Package) => {
  console.log(packageName);
  return defineConfig({
    input: `packages/${packageName}/src/index.ts`,
    output: [
      {
        file: `packages/${packageName}/dist/index.js`,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: `packages/${packageName}/dist/index.esm.js`,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      commonjs(),
      typescript({
        tsconfig: path.resolve(__dirname, "tsconfig.json"),
        declarationDir: `packages/${packageName}/dist/types`,
        declaration: true,
        declarationMap: true,
      }),
    ],
    external: external,
  });
};

export default pkgs.map(createConfig);
