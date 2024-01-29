// @ts-check
import * as fs from "node:fs/promises";
import * as url from "node:url";

export const DIRNAME = url.fileURLToPath(new URL(".", import.meta.url));

export const FS_ERROR_MESSAGE = "FS operation failed";

export const ifPathExist = async (filepath) => {
  let isExist = true;

  try {
    await fs.access(filepath, fs.constants.R_OK | fs.constants.W_OK);
  } catch {
    isExist = false;
  }

  return isExist;
};
