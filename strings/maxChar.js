// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {};
    let highestKey;
    let highestVal = -Infinity;

    for (let char of str) {
        if (char in charMap) {
            charMap[char] += 1;
        } else {
            charMap[char] = 1;
        }
    }

    for (let key in charMap) {
        if (charMap[key] > highestVal) {
            highestKey = key;
            highestVal = charMap[highestKey];
        }
    }

    return highestKey;
}
