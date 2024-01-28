//@ts-check
import * as process from "node:child_process";
import * as url from "node:url";
import * as path from "node:path";

export const DIRNAME = url.fileURLToPath(new URL(".", import.meta.url));

const spawnChildProcess = async (args) => {
  const pathToChild = path.join(DIRNAME, "files", "script.js");

  process.spawn("node", [pathToChild, ...args], {
    stdio: ["inherit", "inherit", "inherit", "ipc"],
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["someArgument1", "someArgument2"]);
