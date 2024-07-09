// const gulp = require("gulp");

import { exec } from "child_process";

// 注册编译任务
export default (done: Function) => {
  exec(
    "npx tsc --project ./tsconfig.server.json",
    {
      cwd: process.env.APP_ROOT,
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
}
