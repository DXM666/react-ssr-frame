#!/usr/bin/env node
import * as yargs from "yargs";
import { spawn } from "child_process";
// import * as path from "path";
const path = require('path');

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
      }),
    async (argv) => {
      process.env.APP_ROOT = process.cwd();
      const gulpPath = path.join(__dirname, '../node_modules', '.bin', 'gulp');
      const gulpProcess = spawn(
        gulpPath,
        ["start", "--gulpfile", "./gulpfile.js"],
        {
          stdio: "inherit", // 这将使子进程的stdio继承自父进程，这样您可以在控制台中看到输出
          shell: true, // 在某些系统中，可能需要启用shell来正确地解析命令和参数
          cwd: path.resolve(__dirname),
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
  .command(
    "build",
    "Build application by webpack or vite",
    (yargs) =>
      yargs.options({
        bundleConfig: {
          alias: "bc",
          desc: "bundle config.ts dependencies module by esbuild",
        },
      }),
    async (argv) => {
      process.env.APP_ROOT = process.cwd();
      const gulpProcess = spawn(
        "npx gulp",
        ["build", " --gulpfile", "./gulpfile.js"],
        {
          stdio: "inherit", // 这将使子进程的stdio继承自父进程，这样您可以在控制台中看到输出
          shell: true, // 在某些系统中，可能需要启用shell来正确地解析命令和参数
          cwd: path.resolve(__dirname),
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
