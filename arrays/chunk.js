// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Linear time compexity O(N) where N is array.length
function chunk(array, size) {
    const newArr = [];
    let subArrNum = 0;
    let subArrIdx = 0;

    for (let i = 0; i < array.length; i++) {
        if (subArrIdx === 0) {
            newArr.push([]);
        }

        newArr[subArrNum][subArrIdx] = array[i];
        subArrIdx++;

        if (subArrIdx === size) {
            subArrIdx = 0;
            subArrNum++;
        }
    }

    return newArr;
}

function chunk2(array, size) {
    const chunked = [];

    for (let elem of array) {
        const lastElem = chunked[chunked.length - 1];

        if (!lastElem || lastElem.length === size) {
            chunked.push([elem]);
        } else {
            lastElem.push(elem);
        }
    }

    return chunked;
}

function chunk3(array, size) {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
        chunked.push(array.slice(index, size + index));
        index += size;
    }

    return chunked;
}

