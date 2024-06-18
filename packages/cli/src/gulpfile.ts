const gulp = require("gulp");

import { spawn, exec, SpawnOptions } from "child_process";
import { startClientBuild, startClientRelease } from "@react-ssr-frame/compile";
import { taskArgs } from "@react-ssr-frame/types";

const opt: SpawnOptions = {
  cwd: process.env.APP_ROOT, // 这里设置子进程的工作目录,
  stdio: "inherit", // 这将使子进程的stdio继承自父进程，这样您可以在控制台中看到输出
  shell: true, // 在某些系统中，可能需要启用shell来正确地解析命令和参数
};

let taskArgs: taskArgs = {
  env: "dev",
};

// 启动Node服务任务
function startNodeServer(done: Function) {
  const tscProcess = spawn("cmd.exe", ["/k", "start", "npx nodemon"], opt);

  // 监听子进程的错误和退出事件
  tscProcess.on("error", (err: Error) => {
    console.error("nodemon进程发生错误:", err);
  });

  tscProcess.on("exit", (code: string, signal: string) => {
    if (code !== null) {
      console.log(`nodemon进程退出, 退出码 ${code}`);
    } else {
      console.log(`nodemon进程被信号 ${signal} 杀死`);
    }
  });
  done();
}

gulp.task("setDevArgs", (done: Function) => {
  taskArgs = {
    env: "dev",
  };
  done();
});

gulp.task("setProdArgs", (done: Function) => {
  taskArgs = {
    env: "prod",
  };
  done();
});

//注册webpack编译任务
gulp.task("buildJs", (done: Function) => {
  new Promise((resolve, reject) => {
    if (taskArgs.env == "dev") {
      startClientBuild(() => resolve(done()));
    } else if (taskArgs.env == "prod") {
      startClientRelease(() => resolve(done()));
    }
  });
});

// 注册编译任务
gulp.task("buildTs", (done: Function) => {
  if (taskArgs.env == "dev") {
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
        opt
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
  } else if (taskArgs.env == "prod") {
    exec(
      "npx tsc --project ./tsconfig.server.json",
      (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
        done();
      }
    );
  }
});

// 注册任务
gulp.task(
  "start",
  gulp.series("setDevArgs", "buildJs", "buildTs", startNodeServer)
);
gulp.task("build", gulp.series("setProdArgs", "buildJs", "buildTs"));
