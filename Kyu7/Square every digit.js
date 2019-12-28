function squareDigits(n) {
    let str = n.toString().split("");
    let mapping = str.map(Number);
    return parseInt(mapping.map(el => Math.pow(el, 2)).join(""));
}

// OR

// return Number(
//     n
//         .toString()
//         .split("")
//         .map(el => Math.pow(el, 2))
//         .join("")
// );

console.log(squareDigits(9119)); // 811181
