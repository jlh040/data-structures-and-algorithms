// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function createCharMap(str) {
    const charMap = {};

    for (let char of str) {
        if (!charMap[char]) {
            charMap[char] = 1;
        } else {
            charMap[char] += 1;
        }
    }
}

function anagrams(stringA, stringB) {
    const strACharMap = createCharMap(stringA);
    const strBCharMap = createCharMap(stringB);

}