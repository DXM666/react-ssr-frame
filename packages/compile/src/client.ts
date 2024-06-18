const path = require("path");
import { spawn, exec } from "child_process";
const startClientBuild = (done: () => void) => {
  const tscProcess = spawn(
    "npx webpack",
    ["--config", "./webpackConfig.js", "--watch"],
    {
      cwd: path.resolve(__dirname),
      stdio: "inherit", // 这将使子进程的stdio继承自父进程，这样您可以在控制台中看到输出
      shell: true, // 在某些系统中，可能需要启用shell来正确地解析命令和参数
    }
  );

  // 监听子进程的错误和退出事件
  tscProcess.on("error", (err: Error) => {
    console.error("webpack进程发生错误:", err);
  });

  tscProcess.on("exit", (code: any, signal: any) => {
    if (code !== null) {
      console.log(`webpack进程退出, 退出码 ${code}`);
    } else {
      console.log(`webpack进程被信号 ${signal} 杀死`);
    }
  });
  tscProcess.on("spawn", () => {
    console.log(`spawn success`);
    done();
  });
};

const startClientRelease = (done: () => void) => {
  exec(
    "npx webpack --config ./webpackConfig.js",
    {
      cwd: path.resolve(__dirname),
    },
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
      done();
    }
  );
};

export { startClientBuild, startClientRelease };
