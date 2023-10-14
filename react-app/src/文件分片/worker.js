// console.log(1);
import SparkMD5 from './spark-md5.min.js'
function createChunk(file, idx, chunkSize) {
  return new Promise((resolve, reject) => {
    const start = idx * chunkSize;
    const end = start + chunkSize >= file.size ? file.size : start + chunkSize;
    
    const spark = new SparkMD5.ArrayBuffer();
    const reader = new FileReader();
    reader.readAsArrayBuffer(file.slice(start, end));
    reader.onload = (e) => {
      //分片hash速度慢10倍 10ms-》100ms
      //整体hash速度慢15倍 100ms -》 1500ms
      //MD5耗时太多，不要放在主线程，用webWorker
      // spark.append(e.target.result);
      // const md5 = spark.end();
      resolve({
        start,
        end,
        idx,
        // md5,
      });
    };
  });
}
onmessage = async (e) => {
  const proms = [];
  const { file, CHUNK_SIZE, startIdx, endIdx } = e.data;
  // console.log(file, CHUNK_SIZE, startIdx, endIdx);
  for (let i = startIdx; i < endIdx; i++) {
    proms.push(createChunk(file, i, CHUNK_SIZE));
  }
  const chunks = await Promise.all(proms);
  // console.log(chunks)
  postMessage(chunks);
};
