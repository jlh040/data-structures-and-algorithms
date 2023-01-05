// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Auxiliary function
function createCharMapV2(str) {
    const charMap = {};

    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1
    }

    return charMap;
}

function createCharMap(str) {
    const charMap = {};

    for (let char of str) {
        if (char in charMap) {
            charMap[char] += 1;
        } else {
            charMap[char] = 1;
        }
    }

    return charMap;
}

function maxChar(str) {
    const charMap = createCharMap(str);
    let highestKey;
    let highestVal = -Infinity;

    for (let key in charMap) {
        if (charMap[key] > highestVal) {
            highestKey = key;
            highestVal = charMap[highestKey];
        }
    }

    return highestKey;
}
