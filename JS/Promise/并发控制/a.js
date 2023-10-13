const tasks = new Array(10).fill(0).map((task,idx)=>`url - ${idx}`)
const request = function(url){
  return new Promise((res,rej)=>{
    setTimeout(() => { res(`${url} completed`)}, 100);
  })
}
async function batchRequest(tasks,max){
    const batch=[];
    const len = tasks.length;
    const maxRetry = 3
    const tryTask = function(task,retry){
      try{
        batch.push(task);
        task.then((data)=>{
          console.log(`${data} | batch length-${batch.length}`)
          batch.splice(batch.indexOf(task),1)
        })
      }catch{
        if(retry < maxRetry)
        tryTask(task,retry+1)
      }
    }
    for(let i = 0; i < len; i++){
      const task = request(tasks[i]);
      tryTask(task,0);
      if(batch.length >= max){
       await Promise.race(batch);
      }
    }
}
batchRequest(tasks,4)