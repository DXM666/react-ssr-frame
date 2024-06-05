import { App } from "./app";
import { BuildView, clientBootstrap } from "@react-ssr-frame/construct";

export const View = BuildView(App);
const isBrowser =
  typeof window !== "undefined" && typeof window.document !== "undefined";

if (isBrowser) {
  clientBootstrap(View);
}
