// @ts-check
import * as fs from "node:fs/promises";
import * as path from "node:path";
import * as utils from "./utils.mjs";

const read = async () => {
  const filepath = path.join(utils.DIRNAME, "files", "fileToRead.txt");

  if (!(await utils.ifPathExist(filepath)))
    throw new Error(utils.FS_ERROR_MESSAGE);

  const content = await fs.readFile(filepath, { encoding: "utf-8" });
  console.log(content);
};

await read();
