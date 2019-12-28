/* 
    An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
    Implement a function that determines whether a string that contains only letters is an 
    isogram. Assume the empty string is an isogram. Ignore letter case.
*/

function isIsogram(str) {
    return !/(\w).*\1/i.test(str);
}

// OR

function isIsogram(str) {
    let string = str.toLowerCase();
    for (let i = 0; i < string.length; ++i) {
        for (let j = i + 1; j < string.length; ++j) {
            if (string[i] === string[j]) return false;
        }
    }
    return true;
}

console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("aba")); // false
console.log(isIsogram("moOse")); // false
