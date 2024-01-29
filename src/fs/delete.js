// @ts-check
import * as fs from "node:fs/promises";
import * as path from "node:path";
import * as utils from "./utils.mjs";

const remove = async () => {
  const filepath = path.join(utils.DIRNAME, "files", "fileToRemove.txt");

  if (!(await utils.ifPathExist(filepath)))
    throw new Error(utils.FS_ERROR_MESSAGE);

  await fs.rm(filepath);
};

await remove();
