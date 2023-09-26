function throttle(fn,time){
    let timer = null;
    return function(...args){
        if(timer){
            return;
        }
        timer = setTimeout(()=>{
            fn(...args);
            timer = null
        },time)
    }
}

const log2 = throttle(console.log,1000)
log2("hi")
log2("throttle")
setTimeout(()=>log2("ssss"),1000)