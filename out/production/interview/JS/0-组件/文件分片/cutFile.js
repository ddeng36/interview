// 每片文件大小为5M
const CHUNK_SIZE = 1024 * 1024 * 5;
// 线程数量最小为4，最大为主机CPU核心数
const THREAD_COUNT = navigator.hardwareConcurrency || 4;

/**
 * @param {File} file
 * @return {Promise}
 * @description
 * 1. 计算文件分片数量
 * 2. 计算每个线程分配的分片数量
 * 3. 创建线程，并分配任务
 * 4. 返回分片的起始及结束索引，还有MD5值
 */
export default function cutFile(file) {
  return new Promise((resolve) => {
    // result存储所有分片的信息
    const result = [];
    // 计算文件分片数量
    const chunkCount = Math.ceil(file.size / CHUNK_SIZE);
    // 计算每个线程分配的分片数量
    const workerChunkCount = Math.ceil(chunkCount / THREAD_COUNT);
    // 用于判断所有线程是否完成
    let finishCount = 0;

    // 创建线程，并分配任务
    for (let i = 0; i < THREAD_COUNT; i++) {
      // 当前线程分配的起始分片索引
      const startIdx = i * workerChunkCount;
      // 当前线程分配的结束分片索引，如果结束索引大于文件分片数，则为最后一片
      const endIdx =
        startIdx + workerChunkCount > chunkCount
          ? chunkCount
          : startIdx + workerChunkCount;

      // 创建线程
      const url = new URL("worker.js", import.meta.url);
      const worker = new Worker(url, {
        type: "module",
      });
      // 主线程向子线程传递消息
      worker.postMessage({ file, CHUNK_SIZE, startIdx, endIdx });
      // 当主线程收到子线程消息之后，把消息存储到result中
      worker.onmessage = (e) => {
        for (let i = startIdx; i < endIdx; i++) {
          //这里非常重要，如果...展开的话，分片顺序是错的
          result[i] = e.data[i - startIdx];
        }
        // 关闭线程
        worker.terminate();
        finishCount++;
        // 当所有线程都完成时，返回result
        if (finishCount === THREAD_COUNT) {
          resolve(result);
        }
      };
    }
  });
}
