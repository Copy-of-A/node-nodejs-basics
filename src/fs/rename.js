// @ts-check
import * as fs from "node:fs/promises";
import * as path from "node:path";
import * as utils from "./utils.mjs";

const rename = async () => {
  const oldName = path.join(utils.DIRNAME, "files/wrongFilename.txt");
  const newName = path.join(utils.DIRNAME, "files/properFilename.md");

  const [isOldFileExist, isNewFileExist] = await Promise.all([
    utils.ifPathExist(oldName),
    utils.ifPathExist(newName),
  ]);

  if (!isOldFileExist || isNewFileExist)
    throw new Error(utils.FS_ERROR_MESSAGE);

  fs.rename(oldName, newName);
};

await rename();
