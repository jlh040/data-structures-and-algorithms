// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);
    let numOfVowels = 0;
    
    for (let char of str.toLowerCase()) {
        if (vowelSet.has(char)) {
            numOfVowels++;
        }
    }

    return numOfVowels;
}

function vowels2(str) {
    const matches = str.match(/[aeiou]/gi);

    return matches ? matches.length : 0;
}
