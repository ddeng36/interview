import React from "react";
import Worker from "web-worker";
import SparkMD5 from ".";
//1024bit = 1kb,1024kb = 1mb
const CHUNK_SIZE = 1024 * 1024 * 5;
const THREAD_COUNT = navigator.hardwareConcurrency || 4;
"/Users/ddeng36/Library/Caches/typescript/5.2/node_modules/@types/spark-md5/index"
function cutFile(file) {
  return new Promise((resolve) => {
    const result = [];
    const chunkCount = Math.ceil(file.size / CHUNK_SIZE);
    const workerChunkCount = Math.ceil(chunkCount / THREAD_COUNT);
    let finishCount = 0;
    for (let i = 0; i < THREAD_COUNT; i++) {
      const startIdx = i * workerChunkCount;
      const endIdx =
        startIdx + workerChunkCount > chunkCount
          ? chunkCount
          : startIdx + workerChunkCount;
      const url = new URL("worker.js", import.meta.url);
      const worker = new Worker(url, {
        type: "module",
      });
      worker.postMessage({ file, CHUNK_SIZE, startIdx, endIdx });
      worker.onmessage = (e) => {
        for (let i = startIdx; i < endIdx; i++) {
          result[i] = e.data[i - startIdx];
        }
        worker.terminate();
        finishCount++;
        // console.log(result);
        if (finishCount === THREAD_COUNT) {
          resolve(result);
        }
      };
    }
  });
}

const File = () => {
  async function fileChange(e) {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    // fetch("http://localhost:3001/data", {
    //   method: "POST",
    //   body: formData,
    // });
    const chunks = await cutFile(file);
    // console.log(chunks);
    // 计算文件hash
    const spark = new SparkMD5.ArrayBuffer();
    spark.append(file);
    const md5 = spark.end();
    // 向后端传输，并控制并发请求，不用多线程
    // const result = await Promise.all();
    console.log(chunks);
  }

  return (
    <div>
      <input type="File" onChange={fileChange}></input>
    </div>
  );
};

export default File;
