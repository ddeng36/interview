const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);
const promiseArr = [promise1, promise2, promise3];

function promiseAll(arr) {
    return new Promise((res,rej)=>{
        const resultArr = [];
        let count = 0;
        arr.forEach((promise,index)=>{
            promise.then((value)=>{
                resultArr[index] = value;
                count++;
                if(count === arr.length){
                    res(resultArr);
                }
            })
        })
    })
}

promiseAll(promiseArr).then((res)=>{
    console.log(res);
})

