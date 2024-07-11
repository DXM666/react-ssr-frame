import { resolve } from "path";
import type { PkgJson } from "@react-ssr-frame/types";

const getCwd = () => {
  return resolve(process.cwd(), process.env.APP_ROOT ?? "");
};

const getFeDir = () => {
  return resolve(getCwd(), process.env.FE_ROOT ?? "web");
};

const getPagesDir = () => {
  return resolve(getFeDir(), "pages");
};

const getPkgJson = (): PkgJson =>
  __non_webpack_require__(resolve(getCwd(), "./package.json"));

export { getCwd, getFeDir, getPagesDir, getPkgJson };
