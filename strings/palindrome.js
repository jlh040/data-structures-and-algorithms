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
