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

const translatePigLatin = str => {
    let consonatRegex = /^[^aeiou]+/;
    let myConsonat = str.match(consonatRegex);
    // if there's a match, save it

    // check if it exists, if the regex pattern is found (starts with consonats),
    // it deletes match, adds the match at the end and adds ay to the end
    // otherwise, if regex pattern not found (deosn't match)(starts with vowels), just add 'way' at the end
    return myConsonat !== null
        ? str
              .replace(consonatRegex, "")
              .concat(myConsonat)
              .concat("ay")
        : str.concat("way");
};

console.log(translatePigLatin("consonant")); // onsonantcay
console.log(translatePigLatin("california")); //aliforniacay
console.log(translatePigLatin("glove")); // oveglay
console.log(translatePigLatin("algorithm")); // argorithmway
