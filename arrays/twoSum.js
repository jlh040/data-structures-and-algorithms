// --- Directions
// Given a sorted array of integers, and a sum: target,
// return true if there exists a pair within the array
// that sums to target, and false otherwise.
// For example, for the array
//  [0, 1, 2, 3, 5, 8, 13, 21, 34]
// and the target = 22,
// return true since 1 + 21 = 22
// Example:
//   twoSum([0, 1, 2, 3, 5, 8, 13, 21, 34], 22) --> true

function twoSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === target) {
            return true;
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return false;
}