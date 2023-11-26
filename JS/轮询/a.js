let flag = false;
let start = Date.now()
const loop = function(){
    console.log(flag)
    if(Date.now() - start > 3000){
        flag = true;
        clearInterval(id);
        console.log(flag)
        return 
    }
}

 const id = setInterval(()=>{loop()},1000)


