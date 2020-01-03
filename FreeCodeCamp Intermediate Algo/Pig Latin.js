// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// If a word does not contain a vowel, just add "ay" to the end.

// Input strings are guaranteed to be English words in all lowercase.

/**
 * 1. Learn how to work with the substr to finish this
 * 2. Manage to get it working the hard way, to properly understand the concept
 * Time on this algorithm: 40 mins (1.1.2020)
 */

function translatePigLatin(str) {
    let vowel = "aeiou";

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; i < vowel.length; j++) {
            if (str[i] === vowel[j]) {
                return `${str}way`;
            } else if (str[i] !== vowel[j]) {
                let result = str[i].some(el => el === vowel[j]);
                return `${result}ay`;
            }
        }
    }
}

console.log(translatePigLatin("consonant")); // onsonantcay
console.log(translatePigLatin("california")); //aliforniacay
console.log(translatePigLatin("glove")); // oveglay
console.log(translatePigLatin("algorithm")); // argorithmway
