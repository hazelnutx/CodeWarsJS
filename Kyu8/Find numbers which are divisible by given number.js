// Complete the function which takes two arguments and returns all
// numbers which are divisible by the given divisor.
// First argument is an array of numbers and the second is the divisor.

const divisibleBy = (arr, num) => {
    return arr.filter(el => el % num === 0);
};

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2)); // [2, 4, 6]
console.log(divisibleBy([0, 1, 2, 3, 4, 5, 6], 4)); // [0, 4]
console.log(divisibleBy([1, 3, 5], 2)); // []