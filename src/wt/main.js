//@ts-check
import * as os from "node:os";
import * as url from "node:url";
import * as path from "node:path";
import * as threads from "node:worker_threads";

export const DIRNAME = url.fileURLToPath(new URL(".", import.meta.url));

const workerThreadHandler = (workerData) =>
  new Promise((resolve) => {
    const worker = new threads.Worker(path.join(DIRNAME, "./worker.js"), {
      workerData,
    });
    worker.on("message", (data) =>
      resolve({
        status: "resolved",
        data,
      })
    );
    worker.on("error", () =>
      resolve({
        status: "error",
        data: null,
      })
    );
  });

const performCalculations = async () => {
  const coreNumber = os.availableParallelism();
  const baseData = 10;

  const workerThreadPool = Array.from({ length: coreNumber }, (_, i) =>
    workerThreadHandler(baseData + i)
  );

  const result = await Promise.all(workerThreadPool);
  console.log(result);
};

await performCalculations();
