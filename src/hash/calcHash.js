import * as crypto from "node:crypto";
import * as fs from "node:fs";
import * as url from "node:url";
import * as path from "node:path";

export const DIRNAME = url.fileURLToPath(new URL(".", import.meta.url));

const calculateHash = async () => {
  const readableStream = fs.createReadStream(
    path.join(DIRNAME, "files", "fileToCalculateHashFor.txt"),
    {
      encoding: "utf-8",
      highWaterMark: 1,
    }
  );

  const hash = crypto.createHash("sha256");

  readableStream.on("data", (chunk) => {
    hash.update(chunk);
  });

  readableStream.on("end", () => {
    const hashedContent = hash.digest("hex");
    console.log("Calculated hash: ", hashedContent);
  });

  // Another solution:
  // instead of managing stream listeners manually we can also use pipe()

  // hash.setEncoding("hex");
  // readableStream.pipe(hash).pipe(process.stdout);

  // P.S. We don't need async-await for both solutions actually
};

await calculateHash();
