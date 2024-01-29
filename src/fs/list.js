// @ts-check
import * as fs from "node:fs/promises";
import * as path from "node:path";
import * as utils from "./utils.mjs";

const list = async () => {
  const dirpath = path.join(utils.DIRNAME, "files");

  if (!(await utils.ifPathExist(dirpath)))
    throw new Error(utils.FS_ERROR_MESSAGE);

  const files = await fs.readdir(dirpath);
  console.log("Files: ", files.join(", "));
};

await list();
