const recur = function(n) {
    if (n <= 0) {
        return 0
    } else {
        return recur(n-2) + n
    }
}
console.log(recur(8))