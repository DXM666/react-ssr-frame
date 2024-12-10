const gulp = require("gulp");

const fs = require("fs");
const path = require("path");

// 读取task文件夹中的所有文件
const tasks = fs
  .readdirSync("./tasks")
  .filter((file: string) => path.extname(file) === ".js");

// 注册任务
tasks.forEach((task: string) => {
  const taskName = path.basename(task, ".js"); // 获取文件名（不带扩展名）
  const fn = require("./tasks/" + task);
  gulp.task(taskName, fn.default);
});

// 注册任务
gulp.task(
  "start",
  gulp.series("buildDevServer", "buildDevClient", "startNodeServer")
);

gulp.task("build", gulp.series("buildProdServer", "buildProdClient"));
