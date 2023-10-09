function debounce(fn, time){
    let timer = null;
    return function(...args){
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(()=>{fn(...args)}, time)
    }
}

const log = debounce(console.log, 1000)
log("hello")
log("world")
setTimeout(()=>log("111"), 200)






