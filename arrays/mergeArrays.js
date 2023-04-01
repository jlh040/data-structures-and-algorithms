// --- Directions
// Given two sorted arrays of integers, return a single array
// that combines both of them and is also sorted
// For example, for the arrays
//  [0, 1, 2, 5] and [4, 7, 8]
// the function should return [0, 1, 2, 4, 5, 7, 8]
// Example:
//   mergeArrays([5, 7, 9], [1, 3, 6]) --> [1, 3, 5, 6, 7, 9]

function mergeArrays(arr1, arr2) {
    const mergedArr = [];
    let i = 0;
    let j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArr.push(arr1[i]);
            i++
        } else {
            mergedArr.push(arr2[j]);
            j++
        }
    }

    while (i < arr1.length) {
        mergedArr.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArr.push(arr2[j]);
        j++;
    }
}