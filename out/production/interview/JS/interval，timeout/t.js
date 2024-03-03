function sleep(time){
    const start = Date.now();
    while(Date.now() - time < start){

    }   
}

// let now = Date.now();
// setInterval(()=>{
//     console.log("间隔" + (Date.now() - now));
//     sleep(1100);
//     now = Date.now()
// },1000)

let now = Date.now();
function fn(){
    setTimeout(() => { 
        console.log("间隔" + (Date.now() - now));
        sleep(1200)
        now = Date.now()
        fn();
     }, 1000)
}

fn();