export * from "./ctx";
export * from "./config";
export * from "./yargs";
export * from "./gulp";

export type Mode = "development" | "production";

export type ESMFeRouteItem<T = {}> = {
  path: string;
  webpackChunkName: string;
  name: string;
} & T;

export interface ParseFeRouteItem {
  path: string;
  fetch?: string;
  component?: string;
  webpackChunkName: string;
  name: string;
}
