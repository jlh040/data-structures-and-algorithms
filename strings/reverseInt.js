// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const numAsString = n.toString();
    let reversed = '';

    if ((n >= 0 && n <= 9) || (n < 0 && n >= -9) ) {
        return n;
    } else if (n < 0) {
        for (let i = 1; i < numAsString.length; i++) {
            reversed = numAsString[i] + reversed;
        }

        return Number(reversed * -1);
    } else {
        for (let i = 0; i < numAsString.length; i++) {
            reversed = numAsString[i] + reversed;
        }
        return Number(reversed);
    }
}

function reverseInt2(n) {
    const numAsString = n.toString();
    let reversed = '';

    for (let i = 0; i < numAsString.length; i++) {
        if (numAsString[i] !== '-') {
            reversed = numAsString[i] + reversed;
        }
    }
    return parseInt(reversed) * Math.sign(n);
}
