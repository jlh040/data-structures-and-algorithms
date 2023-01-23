// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const capitalizedWords = []
    const words = str.split(' ');

    for (let word of words) {
        capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
    }

    return capitalizedWords.join(' ');
}

function capitalize2(str) {
    let capitalizedStr = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i - 1] === ' ' || !str[i - 1]) {
            capitalizedStr += str[i].toUpperCase();
        } else {
            capitalizedStr += str[i];
        }
    }

    return capitalizedStr;
 }