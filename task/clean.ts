import chalk from "chalk";
import { existsSync, readdirSync, lstatSync, rmdirSync } from "fs";
import { fileURLToPath } from "url";
import { resolve, dirname, join } from "path";

// 定义要清理的文件夹名称
const foldersToDelete = ["dist"];

// 获取当前文件的绝对路径
const __filename = fileURLToPath(import.meta.url);
// 获取当前文件所在目录的绝对路径
const __dirname = dirname(__filename);

// 定义要搜索的目录
const rootDir = resolve(__dirname, ".."); // 假设我们要搜索的是项目根目录

let hasFlderNeedClear = false;

// 递归删除目标文件夹
function deleteFoldersRecursively(dir: string) {
  if (!existsSync(dir) || dir.includes("node_modules")) {
    return;
  }

  const subdirs = readdirSync(dir);
  for (let i = 0; i < subdirs.length; i++) {
    const subdir = join(dir, subdirs[i]);
    const stat = lstatSync(subdir);

    if (stat.isDirectory()) {
      // 检查是否是要删除的文件夹
      if (foldersToDelete.includes(subdirs[i])) {
        hasFlderNeedClear = true;
        console.log(chalk.green(`Deleting ${subdir}`));
        rmdirSync(subdir, { recursive: true });
      } else {
        // 递归进入子目录
        deleteFoldersRecursively(subdir);
      }
    }
  }
}

// 开始清理
deleteFoldersRecursively(rootDir);
if (!hasFlderNeedClear) {
  console.log(chalk.yellow("No floder need clean!"));
}
console.log(chalk.blue("Cleanup completed."));
