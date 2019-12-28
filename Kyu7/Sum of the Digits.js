//---------------Sum of the Digits--------------------

function sumDigit(num) {
    return num
        .toString()
        .replace(/\-/g, "")
        .split("")
        .reduce((prev, curr) => parseInt(prev) + parseInt(curr));
}

console.log(sumDigit(10)); // 1
console.log(sumDigit(99)); // 18
console.log(sumDigit(-32)); // 5
