function removeVowel(str) {
    return str.replace(/[aeiou]/gi, "");
}

console.log(removeVowel("drake"));
console.log(removeVowel("aeiou"));
