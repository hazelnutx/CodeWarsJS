// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example: sumOfDifferences([2, 1, 10]) Returns 9

// Descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0

function sumOfDifferences(arr) {
    let split = arr.toString().split("");
    return split;
}
console.log(sumOfDifferences([1, 2, 10])); // 9
console.log(sumOfDifferences([-3, -2, -1])); // 2
