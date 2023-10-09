const axios = require("axios");

//请求地址数组
const requestArray = ['http://localhost:3000/data','http://localhost:3000/data','http://localhost:3000/data','http://localhost:3000/data','http://localhost:3000/data','http://localhost:3000/data','http://localhost:3000/data','http://localhost:3000/data','http://localhost:3000/data','http://localhost:3000/data','http://localhost:3000/data','http://localhost:3000/data','http://localhost:3000/data','http://localhost:3000/data','http://localhost:3000/data','http://localhost:3000/data','http://localhost:3000/data','http://localhost:3000/data','http://localhost:3000/data',]

//发送单个请求
async function sendRequest(req){
    axios.get(req
    ).then(res=>{
        console.log(res.data);
    }
    ).catch(err=>{
        console.log(err);
    }
    )
}

//发送并发请求
async function sendConcurrentRequest(reqArray){
    //并行请求数
    const concurrentLimit = 10;
    const result = [];
    const length = reqArray.length;

    for(let i = 0; i < length; i += concurrentLimit){
        const batch = reqArray.slice(i, i + concurrentLimit);
        const batchPromises = batch.map(req => sendRequest(req));
        try{
            const batchResult = await Promise.all(batchPromises);
            result.push(...batchResult);
        }
        catch{
            console.log('err');
        }
    }
}
sendConcurrentRequest(requestArray)