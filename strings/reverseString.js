// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// O(n^2) quadratic runtime complexity
function reverse(str) {
    let reversedString = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }

    return reversedString;
}

// Alt solution(s)
function reverse2(str) {
    return str
        .split('')
        .reverse()
        .join('')
}

function reverse3(str) {
    let reversed = '';

    for (let char of str) {
        reversed = char + reversed;
    }

    return reversed;
}

function reverse4(str) {
    return str
        .split('')
        .reduce((acc, next) => next + acc);
}
