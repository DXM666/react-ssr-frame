// const gulp = require("gulp");
import { startClientBuild } from "@react-ssr-frame/compile";

//注册webpack编译任务
export default (done: Function) => {
  new Promise((resolve, reject) => {
    startClientBuild(() => resolve(done()));
  });
}
