import * as zlib from "node:zlib";
import * as stream from "node:stream/promises";
import * as fs from "node:fs";
import * as url from "node:url";
import * as path from "node:path";

const DIRNAME = url.fileURLToPath(new URL(".", import.meta.url));

const decompress = async () => {
  const filepathSource = path.join(DIRNAME, "files", "archive.gz");
  const filepathDest = path.join(DIRNAME, "files", "fileToCompress.txt");

  const unzip = zlib.createUnzip();
  const source = fs.createReadStream(filepathSource);
  const destination = fs.createWriteStream(filepathDest);

  return stream.pipeline(source, unzip, destination);
};

await decompress();
