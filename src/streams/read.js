import * as fs from "node:fs";
import * as url from "node:url";
import * as path from "node:path";

export const DIRNAME = url.fileURLToPath(new URL(".", import.meta.url));

const read = async () => {
  const readableStream = fs.createReadStream(
    path.join(DIRNAME, "files", "fileToRead.txt"),
    {
      encoding: "utf-8",
    }
  );
  readableStream.pipe(process.stdout);
};

await read();
