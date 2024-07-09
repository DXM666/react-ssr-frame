// const gulp = require("gulp");

import { spawn } from "child_process";

// 注册编译任务
export default (done: Function) => {
  new Promise((resolve, reject) => {
    const tscProcess = spawn(
      "cmd.exe",
      [
        "/k",
        "start",
        "npx tsc",
        "--watch",
        "--project",
        "./tsconfig.server.json",
      ],
      {
        cwd: process.env.APP_ROOT, // 这里设置子进程的工作目录,
        stdio: "inherit", // 这将使子进程的stdio继承自父进程，这样您可以在控制台中看到输出
        shell: true, // 在某些系统中，可能需要启用shell来正确地解析命令和参数
      }
    );

    // 监听子进程的错误和退出事件
    tscProcess.on("error", (err: Error) => {
      console.error("tsc进程发生错误:", err);
    });

    tscProcess.on("exit", (code: string, signal: string) => {
      if (code !== null) {
        console.log(`tsc进程退出, 退出码 ${code}`);
      } else {
        console.log(`tsc进程被信号 ${signal} 杀死`);
      }
    });
    tscProcess.on("spawn", () => {
      resolve(done());
    });
  });
}
