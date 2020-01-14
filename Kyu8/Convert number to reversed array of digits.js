// You have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]

const digitsize = n => {
    return n
        .toString()
        .split("")
        .reverse()
        .map(Number);
};
// I map each element inside the array (that is a array of strings) to a integer
// arrya of string ['1', '2', '3'] => [1, 2, 3] - by maping each el as Number
console.log(digitsize(35231)); // [1,3,2,5,3]
