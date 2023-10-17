const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

const MyPromise = function(fn){
  this.status = PENDING;
  this.value = undefined;
  this.reason = undefined;

  const resolve = (value)=>{
    if(this.status === PENDING){
      this.status = FULFILLED;
      this.value = value;
    }
  }

  const reject = (reason)=>{
    if(this.status === PENDING){
      this.status = REJECTED;
      this.reason = reason;
    }
  }

  try{
    fn(resolve, reject);
  }catch(e){
    reject(e);
  }
}
MyPromise.prototype.then = function(onFullfilled,onRejected){
  var realOnFullfilled = onFullfilled;
  if(typeof onFullfilled !== 'function'){
    realOnFullfilled = (value)=>value;
  }
  var realOnRejected = onRejected;
  if(typeof onRejected !== 'function'){
    realOnRejected = (reason)=>{throw reason};
  }
  if(this.status === FULFILLED){
    realOnFullfilled(this.value);
  }
  if(this.status === REJECTED){
    realOnRejected(this.reason);
  }

}
const mp = new MyPromise((resolve, reject)=>{
    resolve(1)
})

async function test(){
   await new Promise((resolve) => {
    setTimeout(()=>{
      console.log(mp);
      resolve();
    }, 100)
  });
}
test()
