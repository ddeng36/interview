const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

const MyPromise = function(fn){
  this.status = PENDING;
  this.value = undefined;
  this.reason = undefined;

  this.resolve = function(value){
    if(this.status === PENDING){
      this.status = FULFILLED;
      this.value = value;
    }
  }

  this.reject = function(reason){
    if(this.status === PENDING){
      this.status = REJECTED;
      this.reason = reason;
    }
  }

  try{
    fn(this.resolve, this.reject);
  }catch(e){
    this.reject(e);
  }
}

const mp = new MyPromise((resolve, reject)=>{
  setTimeout(()=>{
    resolve(1)
    console.log(mp.status + mp.value)
  }, 1000)
})

setTimeout(() => { console.log(mp) }, 2000)