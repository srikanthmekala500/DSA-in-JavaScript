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

console.log(binarySearch(array, target1));
// Output: 4 (index of target1 in the sorted array)
console.log(binarySearch(array, target2));
 // Output: -1 (target2 is not found in the sorted array)
```
## Binary Search using Recursion
```JavaScript
function binarySearchRecursive(arr, target, left, right) {
    // Base case: if left pointer exceeds right pointer, element is not found
    if (left > right) {
        return -1;
    }
    
    // Calculate mid index
    let mid = Math.floor((left + right) / 2);
    
    // If target is found at mid index, return mid
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        // If target is greater than element at mid, search in the right half
        return binarySearchRecursive(arr, target, mid + 1, right);
    } else {
        // If target is smaller than element at mid, search in the left half
        return binarySearchRecursive(arr, target, left, mid - 1);
    }
}

// Wrapper function to initiate binary search with initial parameters
function binarySearch(arr, target) {
    return binarySearchRecursive(arr, target, 0, arr.length - 1);
}

// Example usage:
let array = [2, 4, 6, 8, 10, 12, 14];
let target1 = 10;
let target2 = 5;

console.log(binarySearch(array, target1));
 // Output: 4 (index of target1 in the sorted array)
console.log(binarySearch(array, target2));
// Output: -1 (target2 is not found in the sorted array)
```
## Find floor and ceil value of X in an array

## Sqrt(x) 
```JavaScript
// Calculate square root of a number
let x = 25;
let squareRoot = Math.sqrt(x);
console.log(`Square root of ${x} is: ${squareRoot}`);
 // Output: Square root of 25 is: 5

// You can also calculate square root directly in console:
// Math.sqrt(25); // Output: 5
// Example with different numbers
console.log(Math.sqrt(9)); // Output: 3
console.log(Math.sqrt(144)); // Output: 12
console.log(Math.sqrt(2)); // Output: 1.4142135623730951
console.log(Math.sqrt(0)); // Output: 0
console.log(Math.sqrt(-1)); // Output: NaN
console.log(Math.sqrt(0)); // Output: 0
```
## First Bad Version
```JavaScript
function firstBadVersion(n) {
    let left = 1;
    let right = n;
    
    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (isBadVersion(mid)) {
            right = mid; // Look for earlier bad versions in the left half
        } else {
            left = mid + 1; // No bad version found, look in the right half
        }
    }
    
    // At this point, left === right and it should be the first bad version
    return left;
}

let n = 10; // Example number of versions
let firstBad = firstBadVersion(n);
console.log(`The first bad version is: ${firstBad}`);
````
## Find the Index of the First Occurrence in a String
```JavaScript
function findFirstOccurrence(mainStr, subStr) {
    return mainStr.indexOf(subStr);
}

let mainString = "Hello, world!";
let subString = "world";
let index = findFirstOccurrence(mainString, subString);

console.log
(`Index of the first occurrence of "${subString}" in "${mainString}" is: ${index}`);

Index of the first occurrence of "world" in "Hello, world!" is: 7
```
## Binary Search
```JavaScript
function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        // Check if target is present at mid
        if (array[mid] === target) {
            return mid;
        }
        
        // If target is greater, ignore left half
        if (array[mid] < target) {
            left = mid + 1;
        } else { // If target is smaller, ignore right half
            right = mid - 1;
        }
    }
    
    // Element not found
    return -1;
}

// Example usage:
let sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
let target = 7;
let result = binarySearch(sortedArray, target);

console.log(`Index of ${target} in the array is: ${result}`);
 // Output: Index of 7 in the array is: 3
```
## Search Insert Position
```JavaScript
function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left; // Target not found, return the insertion position
}

// Example usage:
let nums = [1, 3, 5, 6];
let target1 = 5;
let target2 = 2;

console.log(`Index to insert ${target1} in [${nums}] is: ${searchInsert(nums, target1)}`);
 // Output: Index to insert 5 in [1, 3, 5, 6] is: 2
console.log(`Index to insert ${target2} in [${nums}] is: ${searchInsert(nums, target2)}`);
 // Output: Index to insert 2 in [1, 3, 5, 6] is: 1
``` 
## Find Minimum in Rotated Sorted Array
```JavaScript
function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1; // Minimum element is on the right side of mid
        } else {
            right = mid; // Minimum element is on the left side of or at mid
        }
    }

    // After the loop, left (or right) is the index of the minimum element
    return nums[left];
}

// Example usage:
let rotatedSortedArray = [4, 5, 6, 7, 0, 1, 2];
let minElement = findMin(rotatedSortedArray);
console.log(`Minimum element in the rotated sorted array is: ${minElement}`);
// Output: Minimum element in the rotated sorted array is: 0
```
## Find First and Last Position of Element in Sorted Array
```JavaScript
function searchRange(nums, target) {
    // Helper function to find the first occurrence
    function findFirstOccurrence(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let firstIdx = -1;
        
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            
            if (nums[mid] >= target) {
                right = mid - 1;
                if (nums[mid] === target) {
                    firstIdx = mid;
                }
            } else {
                left = mid + 1;
            }
        }
        
        return firstIdx;
    }
    
    // Helper function to find the last occurrence
    function findLastOccurrence(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let lastIdx = -1;
        
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            
            if (nums[mid] <= target) {
                left = mid + 1;
                if (nums[mid] === target) {
                    lastIdx = mid;
                }
            } else {
                right = mid - 1;
            }
        }
        
        return lastIdx;
    }
    
    // Find first and last occurrence
    let firstIdx = findFirstOccurrence(nums, target);
    let lastIdx = findLastOccurrence(nums, target);
    
    return [firstIdx, lastIdx];
}

// Example usage:
let nums = [5, 7, 7, 8, 8, 10];
let target = 8;
let result = searchRange(nums, target);
console.log(`First and last position of ${target} in ${nums}: [${result}]`);
// Output: First and last position of 8 in [5, 7, 7, 8, 8, 10]: [3, 4]
```
## Single Element in a Sorted Array
```JavaScript
function singleNonDuplicate(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        
        // Check if mid is even or odd
        if (mid % 2 === 0) {
            if (nums[mid] === nums[mid + 1]) {
                left = mid + 2; // Move right of mid + 1
            } else {
                right = mid; // Single element is to the left of mid
            }
        } else {
            if (nums[mid] === nums[mid - 1]) {
                left = mid + 1; // Move right of mid
            } else {
                right = mid - 1; // Single element is to the left of mid
            }
        }
    }
    
    // After the loop, left (or right) will point to the single element
    return nums[left];
}

// Example usage:
let nums = [1, 1, 2, 3, 3, 4, 4, 5, 5];
let singleElement = singleNonDuplicate(nums);
console.log(`The single element in the array is: ${singleElement}`);
 // Output: The single element in the array is: 2
```
## Search a 2D Matrix
```JavaScript
function searchMatrix(matrix, target) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }
    
    const m = matrix.length; // number of rows
    const n = matrix[0].length; // number of columns
    let left = 0;
    let right = m * n - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let row = Math.floor(mid / n);
        let col = mid % n;
        
        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return false;
}

// Example usage:
let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
];
let target = 3;
console.log(`Does the matrix contain ${target}? ${searchMatrix(matrix, target)}`); // Output: Does the matrix contain 3? true
```
![image](https://github.com/srikanthmekala500/-ECOMMERCE/assets/125475567/370c19da-63a0-4268-9eab-95e4d6520508)
## Find Peak Element
```JavaScript
function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] > nums[mid + 1]) {
            // If nums[mid] is greater than the next element, potential peak is to the left
            right = mid;
        } else {
            // If nums[mid] is less than or equal to the next element, potential peak is to the right
            left = mid + 1;
        }
    }
    
    // At the end of the loop, left is the index of the peak element
    return left;
}

// Example usage:
let nums = [1, 2, 3, 1];
let peakIndex = findPeakElement(nums);
console.log(`Peak element index is: ${peakIndex}, peak element is: ${nums[peakIndex]}`); // Output: Peak element index is: 2, peak element is: 3
```
## Search in Rotated Sorted Array
```JavaScript
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;
        }
        
        // Check which side is sorted
        if (nums[left] <= nums[mid]) {
            // Left side is sorted
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1; // Target is in the left side
            } else {
                left = mid + 1; // Target is in the right side
            }
        } else {
            // Right side is sorted
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1; // Target is in the right side
            } else {
                right = mid - 1; // Target is in the left side
            }
        }
    }
    
    return -1; // Target not found
}

// Example usage:
let nums = [4, 5, 6, 7, 0, 1, 2];
let target = 0;
console.log(`Index of target ${target} is: ${search(nums, target)}`); // Output: Index of target 0 is: 4
```
