import createChunk from "./createChunk.js";
//子线程收到主线程的消息
onmessage = async (e) => {
  // 当前线程负责的分片
  const proms = [];
  //这里的startIdx和endIdx是分片的索引
  const { file, CHUNK_SIZE, startIdx, endIdx } = e.data;

  for (let i = startIdx; i < endIdx; i++) {
    // 创建单个分片任务
    proms.push(createChunk(file, i, CHUNK_SIZE));
  }
  //等待所有分片任务完成
  const chunks = await Promise.all(proms);
  // 向主线程返回当前子线程负责的所有分片
  postMessage(chunks);
};
