// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    let emptyString = '';

    for (let i = 1; i <= n; i++) {
        emptyString += '#'.repeat(i);
        emptyString += ' '.repeat(n - i);

        console.log(emptyString);
        emptyString = '';
    }
}

function steps2(n) {
    for (let row = 0; row < n; row++) {
        let stair = '';

        for (let col = 0; col < n; col++) {
            if (col <= row) {
                stair += '#';
            } else {
                stair += ' ';
            }
        }

        console.log(stair);
    }
}

function steps3(n, row = 0, stair = '') {
    if (n === row) {
        return;
    } else if (stair.length === n) {
        console.log(stair);
        steps(n, ++row)
    } else if (stair.length <= row) {
        steps(n, row, stair + '#')
    } else {
        steps(n, row, stair + ' ')
    }
}
