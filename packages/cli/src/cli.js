import yargs from "yargs";
import { spawn } from "child_process";
import path from "path";
import fs from "fs";

// 动态解析 Gulp 路径
const resolveGulpPath = () => {
  const localGulp = path.resolve(__dirname, "../node_modules/.bin/gulp");
  if (fs.existsSync(localGulp)) {
    return localGulp;
  } else {
    throw new Error("Gulp 未找到，请确保依赖已正确安装。");
  }
};

const gulpPath = resolveGulpPath();

// 通用的子进程事件处理
const handleProcessEvents = (process, description) => {
  process.on("error", (err) => {
    console.error(`${description} 进程发生错误:`, err);
  });

  process.on("exit", (code, signal) => {
    if (code !== null) {
      console.log(`${description} 进程退出, 退出码 ${code}`);
    } else {
      console.log(`${description} 进程被信号 ${signal} 杀死`);
    }
  });
};

// Yargs 配置
yargs
  .command(
    "start",
    "Start Server",
    () => {}, // 可以添加参数定义
    () => {
      process.env.APP_ROOT = process.cwd();

      const gulpProcess = spawn(
        gulpPath,
        ["start", "--gulpfile", "./gulpfile.js"],
        {
          stdio: "inherit",
          shell: true,
          cwd: path.resolve(__dirname),
        }
      );

      handleProcessEvents(gulpProcess, "Gulp");
    }
  )
  .command(
    "build",
    "Build application by webpack",
    () => {}, // 可以添加参数定义
    () => {
      process.env.APP_ROOT = process.cwd();

      const gulpProcess = spawn(
        gulpPath,
        ["build", "--gulpfile", "./gulpfile.js"],
        {
          stdio: "inherit",
          shell: true,
          cwd: path.resolve(__dirname),
        }
      );

      handleProcessEvents(gulpProcess, "Gulp");
    }
  )
  .demandCommand(1, "You need at least one command before moving on")
  .option("version", {
    alias: "v",
    default: false,
    desc: "Show current version",
  })
  .fail((msg, err) => {
    if (err) {
      console.error("执行命令时发生错误:", err.message || err);
      process.exit(1);
    } else {
      console.error("错误:", msg);
      process.exit(1);
    }
  })
  .parse();
