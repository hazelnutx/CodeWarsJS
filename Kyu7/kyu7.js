// -------------------------------------------------
// -------------Isogram-----------------------------
/* 
    An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
    Implement a function that determines whether a string that contains only letters is an 
    isogram. Assume the empty string is an isogram. Ignore letter case.
*/

// function isIsogram(str) {
//     return !/(\w).*\1/i.test(str);
// }

// OR

// function isIsogram(str) {
//     let string = str.toLowerCase();
//     for (let i = 0; i < string.length; ++i) {
//         for (let j = i + 1; j < string.length; ++j) {
//             if (string[i] === string[j]) return false;
//         }
//     }
//     return true;
// }

// console.log(isIsogram("Dermatoglyphics")); // true
// console.log(isIsogram("aba")); // false
// console.log(isIsogram("moOse")); // false

//---------------Descending Order--------------------

//Your task is to make a function that can take any non-negative integer as a argument and
//return it with its digits in descending order. Essentially, rearrange the digits to
//create the highest possible number.

function descendingOrder(num) {
    return parseInt(
        num
            .toString()
            .split("")
            .sort()
            .reverse()
            .join("")
    );
}

console.log(descendingOrder(21445)); // 54421
console.log(descendingOrder(145263)); // 654321
