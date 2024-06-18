type ChildProcessOpt = {
  cwd: string | undefined;
  stdio: string;
  shell: boolean;
};

type taskArgs = {
  env: "prod" | "dev";
};

export { ChildProcessOpt, taskArgs };
