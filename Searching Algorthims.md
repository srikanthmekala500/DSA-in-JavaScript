## Linear Search in JavaScript
```JavaScript
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index of the target element if found
        }
    }
    return -1; // Return -1 if the target element is not found in the array
}

// Example usage:
let array = [5, 3, 7, 10, 2];
let target1 = 7;
let target2 = 4;

console.log(linearSearch(array, target1)); // Output: 2 (index of target1 in the array)
console.log(linearSearch(array, target2)); // Output: -1 (target2 is not found in the array)

```
```JavaScript
const arr = [1, 2, 6, 9, 0, -5];

const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch(arr, 8));
console.log(arr.includes(9));
console.log(arr.indexOf(9));
console.log(arr.find((num) => num > 0));
console.log(arr.findIndex((num) => num < 0));
```
## Binary Search In JavaScript
```JavaScript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        // Check if target is present at mid
        if (arr[mid] === target) {
            return mid;
        }
        
        // If target is greater, ignore left half
        if (arr[mid] < target) {
            left = mid + 1;
        } else { // If target is smaller, ignore right half
            right = mid - 1;
        }
    }
    
    // Element is not present in array
    return -1;
}

// Example usage:
let array = [2, 4, 6, 8, 10, 12, 14];
let target1 = 10;
let target2 = 5;

console.log(binarySearch(array, target1)); // Output: 4 (index of target1 in the sorted array)
console.log(binarySearch(array, target2)); // Output: -1 (target2 is not found in the sorted array)
```
## Binary Search using Recursion

