// --- Directions
// Given two strings s and t, return true if s is a subsequence
// of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original 
// string by deleting some (can be none) of the characters without disturbing 
// the relative positions of the remaining characters. 
// (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
// Example: 
//   isSubsequence("hat", "theater") --> true

function isSubsequence(s, t) {
    let i = 0;
    let j = 0;

    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++;
        }
        j++;
    }

    return i === s.length;
}