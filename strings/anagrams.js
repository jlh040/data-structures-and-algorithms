// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function cleanStr(str) {
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("")
}

function createCharMap(str) {
    const charMap = {};

    for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
        if (!charMap[char]) {
            charMap[char] = 1;
        } else {
            charMap[char] += 1;
        }
    }

    return charMap;
}

function anagrams(stringA, stringB) {
    if (stringA.replace(/[^\w]/g, "").length !== stringB.replace(/[^\w]/g, "").length) return false;

    const strACharMap = createCharMap(stringA);
    const strBCharMap = createCharMap(stringB);

    for (let key in strACharMap) {
        if (strACharMap[key] !== strBCharMap[key]) {
            return false;
        }
    }

    return true;
}

function anagrams2(stringA, stringB) {
    return cleanStr(stringA) === cleanStr(stringB);
}
