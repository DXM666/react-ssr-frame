// const fs = require("fs");
// const { execSync } = require("child_process");
// const argv = require("minimist")(process.argv.slice(2));
// const path = require("path");
// const glob = require("glob");
const chalk = require('chalk');

console.log(chalk.green('成功提示：一切正常！'));
// if (argv.clean && argv.clean == "dist") {
//   ["dist", "packages/*/dist"].forEach((dir) => {
//     glob(dir, (err, matches) => {
//       if (err) {
//         console.log(chalk.red("Error:", err));
//         return;
//       }
//       if (matches.length > 0) {
//         console.log("Dist directories exist:");
//         matches.forEach((match) => {
//           if (fs.existsSync(match)) {
//             console.log(chalk.red(`Removing directory: ${match}`));
//             fs.rmdirSync(match, { recursive: true });
//           }
//         });
//       } else {
//         console.log(chalk.red(`"No dist directories found."`));
//       }
//     });
//   });
// }
