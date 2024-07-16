## Set in JavaScript:
```JavaScript
// Creating a Set
const mySet = new Set();

// Adding values to the Set
mySet.add(1);
mySet.add("hello");
mySet.add(true);

// Checking if a value exists
console.log(mySet.has(1)); // true

// Removing a value
mySet.delete("hello");

// Iterating through the Set
for (const value of mySet) {
    console.log(value);
}

// Size of the Set
console.log(mySet.size); // 2

// Clearing the Set
mySet.clear();
```
## Map in JavaScript
```JavaScript
// Creating a Map
const myMap = new Map();

// Adding key-value pairs to the Map
myMap.set("name", "Vishal");
myMap.set("age", 21);

// Getting a value using a key
console.log(myMap.get("name")); // Vishal

// Checking if a key exists
console.log(myMap.has("age")); // true

// Removing a key-value pair
myMap.delete("age");

// Iterating through the Map
for (const [key, value] of myMap) {
    console.log(key, value);
}

// Size of the Map
console.log(myMap.size); // 1

// Clearing the Map
myMap.clear();
```
## Weak Map in JavaScript
```JavaScript
let obj = { key: 'value' };

// Creating a WeakMap
let weakMap = new WeakMap();
weakMap.set(obj, 'metadata');

// Checking if the object still exists in the WeakMap
console.log(weakMap.has(obj)); // true

// Removing the strong reference to the object
obj = null;

// At this point, the object is no longer strongly referenced
// The WeakMap's weak reference will allow the object to be garbage collected
console.log(weakMap.has(obj)); // false
```
## Contains Duplicate
## Method 1: Using a Set
```JavaScript
function containsDuplicate(nums) {
    let seen = new Set();
    for (let num of nums) {
        if (seen.has(num)) {
            return true; // Found a duplicate
        }
        seen.add(num);
    }
    return false; // No duplicates found
}

// Example usage:
let nums = [1, 2, 3, 1];
console.log(`Array contains duplicate elements: ${containsDuplicate(nums)}`);
// Output: Array contains duplicate elements: true


## Method 2: Sorting
Array Indexing
nums is the array.
i is the current index in the loop.
nums[i] is the element at the current index.
nums[i - 1] is the element at the previous index.

function containsDuplicate(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            return true; // Found a duplicate
        }
    }
    return false; // No duplicates found
}

// Example usage:
let nums = [1, 2, 3, 1];
console.log(`Array contains duplicate elements: ${containsDuplicate(nums)}`);
 // Output: Array contains duplicate elements: true


## Method 3: Using Object/Map
function containsDuplicate(nums) {
    let countMap = {};
    for (let num of nums) {
        if (countMap[num]) {
            return true; // Found a duplicate
        }
        countMap[num] = (countMap[num] || 0) + 1;
    }
    return false; // No duplicates found
}

// Example usage:
let nums = [1, 2, 3, 1];
console.log(`Array contains duplicate elements: ${containsDuplicate(nums)}`);
// Output: Array contains duplicate elements: true

```
## Intersection of Two Arrays 
```JavaScript
function intersection(nums1, nums2) {
    let set1 = new Set(nums1);
    let resultSet = new Set();
    
    for (let num of nums2) {
        if (set1.has(num)) {
            resultSet.add(num);
        }
    }
    
    return Array.from(resultSet); // Convert set to array
}

// Example usage:
let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];
console.log(`Intersection of arrays: ${intersection(nums1, nums2)}`);
 // Output: Intersection of arrays: 2
/////////////////////////////////////////
function intersection(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    
    let result = [];
    let i = 0, j = 0;
    
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            if (result.length === 0 || result[result.length - 1] !== nums1[i]) {
                result.push(nums1[i]);
            }
            i++;
            j++;
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }
    
    return result;
}

// Example usage:
let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];
console.log(`Intersection of arrays: ${intersection(nums1, nums2)}`);
 // Output: Intersection of arrays: 2

```
## Distribute Candies
```JavaScript
function distributeCandies(candies, numToGive) {
    // Count unique types of candies
    let uniqueCandies = new Set(candies);
    let maxTypes = Math.min(uniqueCandies.size, Math.floor(numToGive / 2));
    return maxTypes;
}

// Example usage:
let candies = [1, 1, 2, 2, 3, 3];
let numToGive = 6;
console.log
(`Maximum types of candies the sister can receive: ${distributeCandies(candies, numToGive)}`);
// Output: Maximum types of candies the sister can receive: 3
```
![image](https://github.com/srikanthmekala500/DSA-in-JavaScript/assets/125475567/a9070d95-956c-4808-9e6e-a9dd6cb4b8f9)
## Length of the longest consecutive sequence menas
```JavaScript
function longestConsecutive(nums) {
    if (nums.length === 0) return 0;
    
    let numSet = new Set(nums);
    let maxLength = 0;
    
    for (let num of numSet) {
        // Only check for sequences starting at the beginning of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentLength = 1;
            
            // Expand sequence in the positive direction
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentLength++;
            }
            
            maxLength = Math.max(maxLength, currentLength);
        }
    }
    
    return maxLength;
}

// Example usage:
let nums = [100, 4, 200, 1, 3, 2];
console.log(`Length of the longest consecutive sequence: ${longestConsecutive(nums)}`);
// Output: Length of the longest consecutive sequence: 4
```
## Happy Number
```JavaScript
function isHappy(n) {
    let seen = new Set();
    
    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = getNext(n);
    }
    
    return n === 1;
}

function getNext(n) {
    let sum = 0;
    while (n > 0) {
        let digit = n % 10;
        sum += digit * digit;
        n = Math.floor(n / 10);
    }
    return sum;
}

// Example usage:
let number = 19;
console.log(`Is ${number} a happy number? ${isHappy(number)}`);
// Output: Is 19 a happy number? true
```
## First Unique Character In A String
```JavaScript
function firstUniqueChar(s) {
    // Step 1: Count frequencies of each character
    let charCount = new Map();
    for (let char of s) {
        charCount.set(char, charCount.get(char) + 1 || 1);
    }
    
    // Step 2: Find the first unique character
    for (let i = 0; i < s.length; i++) {
        if (charCount.get(s[i]) === 1) {
            return i;
        }
    }
    
    // Step 3: Return -1 if no unique character found
    return -1;
}

// Example usage:
let s = "leetcode";
console.log(`Index of the first unique character: ${firstUniqueChar(s)}`);
 // Output: Index of the first unique character: 0
```
## Find Common Characters
```JavaScript
function commonChars(A) {
    let minCount = new Array(26).fill(Infinity); // Initialize with a large number
    
    for (let word of A) {
        let charCount = new Array(26).fill(0);
        
        for (let char of word) {
            charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        
        for (let i = 0; i < 26; i++) {
            minCount[i] = Math.min(minCount[i], charCount[i]);
        }
    }
    
    let result = [];
    for (let i = 0; i < 26; i++) {
        for (let j = 0; j < minCount[i]; j++) {
            result.push(String.fromCharCode('a'.charCodeAt(0) + i));
        }
    }
    
    return result;
}

// Example usage:
let A = ["bella", "label", "roller"];
console.log(`Common characters: ${commonChars(A)}`);
// Output: Common characters: ["e","l","l"]
```
## Sort Characters By Frequency
```JavaScript
function frequencySort(s) {
    // Step 1: Count frequency of each character
    let charCount = new Map();
    for (let char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    // Step 2: Sort characters based on frequency (descending)
    let sortedChars = Array.from(charCount.entries()).sort((a, b) => b[1] - a[1]);
    
    // Step 3: Construct sorted string
    let result = '';
    for (let [char, count] of sortedChars) {
        result += char.repeat(count);
    }
    
    return result;
}

// Example usage:
let s = "tree";
console.log(`Sorted characters by frequency: ${frequencySort(s)}`);
// Output: Sorted characters by frequency: "eert" or "eetr"
```
## Valid Sudoku
![image](https://github.com/srikanthmekala500/DSA-in-JavaScript/assets/125475567/26a2e3f3-d807-4a13-9943-53272e3cef00)
```JavaScript
function isValidSudoku(board) {
    // Initialize sets for rows, columns, and sub-boxes
    let rows = Array.from({ length: 9 }, () => new Set());
    let columns = Array.from({ length: 9 }, () => new Set());
    let boxes = Array.from({ length: 9 }, () => new Set());
    
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let num = board[i][j];
            if (num !== '.') {
                // Determine which sub-box the cell belongs to
                let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                
                // Check if number is already in the respective sets
                if (rows[i].has(num) || columns[j].has(num) || boxes[boxIndex].has(num)) {
                    return false; // Invalid Sudoku
                }
                
                // Add number to sets
                rows[i].add(num);
                columns[j].add(num);
                boxes[boxIndex].add(num);
            }
        }
    }
    
    return true; // Valid Sudoku
}

// Example usage:
let board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
];

console.log(`Is the Sudoku board valid? ${isValidSudoku(board)}`);
// Output: Is the Sudoku board valid? true
```
## First Unique Character in a String
```JavaScript
function firstUniqueChar(s) {
    // Step 1: Count frequency of each character
    let charCount = {};
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Step 2: Find the first unique character
    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]] === 1) {
            return i;
        }
    }
    
    // Step 3: Return -1 if no unique character found
    return -1;
}

// Example usage:
let s = "leetcode";
console.log(`Index of the first unique character: ${firstUniqueChar(s)}`);
// Output: Index of the first unique character: 0
```
## Longest Substring Without Repeating Characters
```JavaScript
function lengthOfLongestSubstring(s) {
    let charMap = new Map(); // to store character and its index
    let maxLength = 0;
    let left = 0; // left pointer of the sliding window
    
    for (let right = 0; right < s.length; right++) {
        let currentChar = s[right];
        
        if (charMap.has(currentChar) && charMap.get(currentChar) >= left) {
            left = charMap.get(currentChar) + 1;
        }
        
        charMap.set(currentChar, right);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
}

// Example usage:
let s = "abcabcbb";
console.log(`Length of the longest substring without repeating characters: ${lengthOfLongestSubstring(s)}`);
// Output: Length of the longest substring without repeating characters: 3
```
