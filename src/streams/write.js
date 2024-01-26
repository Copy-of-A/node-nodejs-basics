import * as fs from "node:fs";
import * as url from "node:url";
import * as path from "node:path";

export const DIRNAME = url.fileURLToPath(new URL(".", import.meta.url));

const write = async () => {
  const writableStream = fs.createWriteStream(
    path.join(DIRNAME, "files/fileToWrite.txt"),
    {
      encoding: "utf-8",
    }
  );
  process.stdin.pipe(writableStream);
};

await write();
