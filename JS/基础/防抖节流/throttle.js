/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function(fn, t) {
    let timer;
    let lastCallTime;
	return function(...args) {
        if(timer){
            clearTimeout(timer);
        }
		timer = setTimeout(()=>{
            fn(...args);
            lastCallTime = Date.now()
        },lastCallTime? t - (Date.now() - lastCallTime):0)
	}
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */