const arr = [9, 2, 4, 1, 5, 2, 9, 1, 2, 0];
console.log(arr);
printArray(arr);

bubbleSort(arr);
printArray(arr);

let index = binarySearch(arr, 5);
console.log(`index: ${index}`);

index = binarySearch(arr, 7);
console.log(`index: ${index}`);

bubbleSort(arr, (a, b) => b - a);
printArray(arr);


function bubbleSort(arr, comparator = (a, b) => a - b) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (comparator(arr[j], arr[j + 1]) > 0) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

function binarySearch(arr, value, comparator = (a, b) => a - b) {
    let number = bubbleSort(arr);
    let start = 0;
    let end = number.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (number[mid] === value) {
            return mid;
        } else if (number[mid] < value) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }

    }
    return -1;

}

function printArray(arr) {
    console.log('==========');
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log('==========');

}

