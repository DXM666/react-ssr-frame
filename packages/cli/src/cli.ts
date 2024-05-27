#!/usr/bin/env node
import * as yargs from "yargs";
import { spawn } from "child_process";
import { resolve } from "path";

yargs
  .command(
    "start",
    "Start Server",
    (yargs) =>
      yargs.options({
        bundleConfig: {
          alias: "bc",
          desc: "bundle config.ts dependencies module by esbuild",
        },
        vite: {
          desc: "Start application by vite",
        },
        port: {
          desc: "Setting application server port, default is 3000",
        },
        optimize: {
          alias: "o",
          desc: "Optimize webpack bundle for high performance",
        },
        help: {
          alias: "h",
          desc: "In midway, use --help to speed up ts compile",
        },
        nominify: {
          desc: "Disable minify output file content for debug",
        },
      }),
    async (argv) => {
      process.env.APP_ROOT = process.cwd();
      const gulpProcess = spawn(
        "npx gulp",
        ["start", " --gulpfile", "./gulpfile.js"],
        {
          stdio: "inherit", // 这将使子进程的stdio继承自父进程，这样您可以在控制台中看到输出
          shell: true, // 在某些系统中，可能需要启用shell来正确地解析命令和参数
          cwd: resolve(__dirname),
        }
      );

      // 监听子进程的错误和退出事件
      gulpProcess.on("error", (err: Error) => {
        console.error("nodemon进程发生错误:", err);
      });

      gulpProcess.on("exit", (code, signal) => {
        if (code !== null) {
          console.log(`nodemon进程退出, 退出码 ${code}`);
        } else {
          console.log(`nodemon进程被信号 ${signal} 杀死`);
        }
      });
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
      process.exit(1);
    }
  })
  .parse();
