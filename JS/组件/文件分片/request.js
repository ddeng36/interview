/**
 * 
 * @param {Object} chunk
 * @param {Blob} file 
 * @returns {Promise}
 * @description
 * 1. 通过fetch将chunk上传到服务器
 */180312

function request(chunk, file) {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    const { start, end, idx, md5 } = chunk;
    formData.append("start", start);
    formData.append("end", end);
    formData.append("idx", idx);
    formData.append("md5", md5);
    formData.append("fileName", file.name);
    formData.append("file", file.slice(start, end));
    fetch("http://localhost:3001/data", {
      method: "POST",
      body: formData,
    }).then((res) => {
      resolve(res);

    });
  });
}
/**
 * 
 * @param {Array} chunks 
 * @param {Blob} file 
 * @param {Number} maxBatchLen 
 * 
 */
export async function batchRequest(chunks, file, maxBatchLen = 2) {
  //批处理管道
  const batch = [];
  const chunksLen = chunks.length;
  //失败重传函数
  const retryTask = function(task,retryCount){
    try{
        batch.push(task);
        task.then((res) => {
          batch.splice(batch.indexOf(task), 1);
        });
        console.log(batch.length)
    }
    catch{
        if(retryCount < 3){
            retryTask(task,retryCount+1)
        }
    }
  }

  for (let i = 0; i < chunksLen; i++) {
    //生成任务并放入batch
    // 每次request完了之后，md5写入localstorage，如果md5已经存在，就不再上传
    const task = request(chunks[i], file);
    retryTask(task,0);
    //如果batch中任务数大于等于maxBatchLen，就先跑完一个任务，再继续添加任务
    if (batch.length >= maxBatchLen) {
      await Promise.race(batch);
    }
  }
}
