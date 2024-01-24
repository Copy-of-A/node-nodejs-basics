// @ts-check
import { writeFile, access, constants } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const isFileExist = async (filepath) => {
  let isExist = true;

  try {
    await access(filepath, constants.R_OK | constants.W_OK);
  } catch {
    isExist = false;
  }

  return isExist;
};

const create = async () => {
  const filepath = path.join(__dirname, "files/fresh.txt");

  if (await isFileExist(filepath)) throw new Error("FS operation failed");

  await writeFile(filepath, "I am fresh and young");
};

await create();
