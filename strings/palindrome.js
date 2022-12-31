// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    let firstCharIdx = 0;
    let lastCharIdx = str.length - 1;

    while(firstCharIdx < lastCharIdx) {
        if (str[firstCharIdx] === str[lastCharIdx]) {
            firstCharIdx++;
            lastCharIdx--;
        } else {
            return false;
        }
    }

    return true;
}

// Alt solutions
function palindrome2(str) {
    let reversed = '';

    for (let char of str) {
        reversed = char + reversed;
    }

    return reversed === str;
}
