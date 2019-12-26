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

// function descendingOrder(num) {
//     return parseInt(
//         num
//             .toString()
//             .split("")
//             .sort()
//             .reverse()
//             .join("")
//     );
// }

// console.log(descendingOrder(21445)); // 54421
// console.log(descendingOrder(145263)); // 654321

//---------------Square every digit--------------------

// function squareDigits(n) {
// let str = n.toString().split("");
// let mapping = str.map(Number);
// // let arr = mapping.map(el => Math.pow(el, 2));
// // return parseInt(arr.join(""));
// return parseInt(
//     mapping.map(el => Math.pow(el, 2))
//     .join(""));

//     return Number(
//         n
//             .toString()
//             .split("")
//             .map(el => Math.pow(el, 2))
//             .join("")
//     );
// }

// console.log(squareDigits(9119)); // 811181

//---------------Sum of Numbers--------------------

// function getSum(a, b) {
//     let min = Math.min(a, b),
//         max = Math.max(a, b);
//     return ((max - min + 1) * (min + max)) / 2;
// }

// console.log(getSum(0, -1)); // -1
// // console.log(getSum(0, 1)); // 1
// console.log(getSum(1, 1)); // 1
// console.log(getSum(-1, 2)); // -1 + 0 + 1 + 2 = 2

//---------------Length of the Shortest Word--------------------

// function findShort(str) {
// return str.split(" ").reduce((a, b) => (a.length < b.length ? a : b))
//     .length; // THis is the cleaner version.
//
// OR the complex version

// let word = null;
// let splits = str.split(" ");
// console.log(splits);
// for (let i = 0; i < splits.length; i++) {
//     for (let j = 0; j < splits.length; j++) {
//         if (splits[i].length < splits[j].length) {
//             word = splits[i];
//         }
//     }
// }
// return word.length;
// }

// Cleaver way to do it from codeWars - Math.min.apply(null, str.spllit(" ").map(el => el.length))

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

//---------------Removal of the Vowels--------------------

// function removeVowel(str) {
//     return str.replace(/[aeiou]/gi, "");
// }

// console.log(removeVowel("drake"));
// console.log(removeVowel("aeiou"));

//---------------Converts seconds to amount value in String format--------------------

// function toTime(num) {
//     let hour = Math.floor(num / 3600);
//     let minutes = Math.floor(((num / 3600 - hour) * 3600) / 60);
// let minutes = Math.floor((num % 3600) / 60) This another solution to the mintus
//     // let check = hour - Math.floor(hour) !== 0;
//     // if (check) return `${hour} hour(s) and 0 minute(s)`;
//     return `${hour} hour(s) and ${minutes} minute(s)`;
// }

// console.log(toTime(3600)); // 1 hour(s) and 0 minute(s)
// console.log(toTime(0)); // 0 hours ...
// console.log(toTime(323500)); // 89 hours and 51 minutes

//---------------Sum of the Digits--------------------

// function sumDigit(num) {
//     return num
//         .toString()
//         .replace(/\-/g, "")
//         .split("")
//         .reduce((prev, curr) => parseInt(prev) + parseInt(curr));
// }

// console.log(sumDigit(10)); // 1
// console.log(sumDigit(99)); // 18
// console.log(sumDigit(-32)); // 5
