// const gulp = require("gulp");
import { startClientRelease } from "@react-ssr-frame/compile";

//注册webpack编译任务
export default (done: Function) => {
  new Promise((resolve, reject) => {
    startClientRelease(() => resolve(done()));
  });
}
