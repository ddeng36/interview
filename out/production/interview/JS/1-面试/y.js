function num2Let(num) {
    let ans = [];
    while(num > 0) {
        const a0 = (num - 1) % 26;
        console.log(a0)
        ans.push(String.fromCharCode(a0 + "A".charCodeAt()));
        num = Math.floor((num - 1) / 26);
    }
    // return String.fromCharCode(64 + num);
    ans.reverse();
    return ans.join('');
}

// console.log(num2Let(1)); // A
// console.log(num2Let(28)); // Z
console.log(num2Let(701)); // ZY
// console.log(num2Let(2147483647));