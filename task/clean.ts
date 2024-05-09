import { existsSync, rmdirSync } from "fs";
import chalk from "chalk";

const glob = require("glob");
const argv = require("minimist")(process.argv.slice(2));

if (argv.clean && argv.clean == "dist") {
  ["dist", "packages/*/dist"].forEach((dir) => {
    glob(dir, (err: Error, matches: Array<string>) => {
      if (err) {
        console.log(chalk.red("Error:", err));
        return;
      }
      if (matches.length > 0) {
        console.log("Dist directories exist:");
        matches.forEach((match) => {
          if (existsSync(match)) {
            console.log(chalk.red(`Removing directory: ${match}`));
            rmdirSync(match, { recursive: true });
          }
        });
      } else {
        console.log(chalk.red(`"No dist directories found."`));
      }
    });
  });
}
