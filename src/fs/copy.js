// @ts-check
import * as fs from "node:fs/promises";
import * as path from "node:path";
import * as utils from "./utils.mjs";

const copy = async () => {
  const dirFrom = path.join(utils.DIRNAME, "files");
  const dirTo = path.join(utils.DIRNAME, "files_copy");

  const [isDirFromExist, isdirToExist] = await Promise.all([
    utils.ifPathExist(dirFrom),
    utils.ifPathExist(dirTo),
  ]);

  if (!isDirFromExist || isdirToExist) throw new Error(utils.FS_ERROR_MESSAGE);

  await fs.cp(dirFrom, dirTo, { recursive: true });
};

await copy();
