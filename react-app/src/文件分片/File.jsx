import React from "react";
import Worker from "web-worker";
import SparkMD5 from "spark-md5";
//1024bit = 1kb,1024kb = 1mb
const CHUNK_SIZE = 1024 * 1024 * 5;
const THREAD_COUNT = navigator.hardwareConcurrency || 4;

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
      worker.postMessage({ file, CHUNK_SIZE, startIdx, endIdx});
      worker.onmessage = (e) => {
        for (let i = startIdx; i < endIdx; i++) {
          result[i] = e.data[i - startIdx];
        }
        worker.terminate();
        finishCount++;
        console.log(result);
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
    fetch("http://localhost:3001/data", {
      method: "POST",
      body: formData,
    });
    const chunks = await cutFile(file);
    fetch("http://localhost:3001/md5", {
    method: "POST",
    body: JSON.stringify(chunks),
  })
    console.log(chunks);
  }

  return (
    <div>
      <input type="File" onChange={fileChange}></input>
    </div>
  );
};

export default File;
