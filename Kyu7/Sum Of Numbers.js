function getSum(a, b) {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return ((max - min + 1) * (min + max)) / 2;
}

console.log(getSum(0, -1)); // -1
// console.log(getSum(0, 1)); // 1
console.log(getSum(1, 1)); // 1
console.log(getSum(-1, 2)); // -1 + 0 + 1 + 2 = 2
