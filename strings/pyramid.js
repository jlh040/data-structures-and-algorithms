// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '      00 01 02
//       '###'      10 11 12
//   pyramid(3)
//       '  #  '    00 01 02 03 04
//       ' ### '    10 11 12 13 14
//       '#####'    20 21 22 23 24

function pyramid(n) {
    const midpoint = Math.floor((n * 2 - 1) / 2);

    for (let row = 0; row < n; row++) {
        let level = '';

        for (let col = 0; col < n * 2 - 1; col++) {
            if ((col >= midpoint - row) && (col <= midpoint + row)) {
                level += '#';
            } else {
                level += ' ';
            }
        }

        console.log(level);
    }
}

function pyramid2(n, row = 0, str = '') {
    const midpoint = Math.floor((2 * n - 1) / 2);

    if (n === row) {
        return;
    }

    if (str.length === 2 * n - 1) {
        console.log(str);
        return pyramid2(n, ++row)
    }

    if (str.length >= midpoint - row && str.length <= midpoint + row) {
        str += '#';
        return pyramid2(n, row, str);
    } else {
        str += ' ';
        return pyramid2(n, row, str);
    }
}