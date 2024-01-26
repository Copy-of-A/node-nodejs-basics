import { Transform } from "node:stream";

const reverseStream = new Transform({
  transform(chunk, _, callback) {
    callback(null, String(chunk).split("").reverse().join(""));
  },
});

const transform = async () => {
  process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();
