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
Alice has n candies, where the ith candy is of type candyType[i].
Alice noticed that she started to gain weight, so she visited a doctor.

// The doctor advised Alice to only eat n / 2 of the candies she has (n is always even).
 Alice likes her candies very much, and she wants to eat the maximum number
of different types of candies while still following the doctor's advice.

// Given the integer array candyType of length n, return the maximum number
 of different types of candies she can eat if she only eats n / 2 of them.

 

// Example 1:

// Input: candyType = [1,1,2,2,3,3]
// Output: 3
// Explanation: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.

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
    let seen = new Set(); // Initialize a new set to track seen numbers
    
    while (n !== 1 && !seen.has(n)) {// Continue loop if n is not 1 and n has not been seen before
        seen.add(n);
        console.log( seen.add(n)) // Add n to the set of seen numbers
        n = getNext(n); // Update n to the next value in the sequence
    }
    
    return n === 1; // Return true if n is 1 (happy number), otherwise false (cycle detected)
}

function getNext(n) {
    let sum = 0;
    while (n > 0) {
        let digit = n % 10; // Get the last digit of n
  
        sum  += digit * digit; // Add the square of the digit to the sum
        console.log(sum)
        n = Math.floor(n / 10); // Remove the last digit from n
    }
    return sum; // Return the sum of the squares of the digits
}

// Example usage
 

let number1 = 19;
console.log(`Is ${number1} a happy number? ${isHappy(number1)}`); // Output: true
// console.log( seen.add(n))
//Set(1) { 19 }
// Set(2) { 19, 82 }
// Set(3) { 19, 82, 68 }
// Set(4) { 19, 82, 68, 100 }
// Initialization:

// n = 122
// sum = 0
// First iteration of the while loop:

// n > 0 is true (122 > 0)
// digit = 122 % 10 = 2 (extract the last digit)
// sum += 2 * 2 = 4 (add the square of the digit to sum)
// console.log(sum) prints 4
// n = Math.floor(122 / 10) = 12 (remove the last digit)
// Second iteration of the while loop:

// n > 0 is true (12 > 0)
// digit = 12 % 10 = 2 (extract the last digit)
// sum += 2 * 2 = 4 + 4 = 8 (add the square of the digit to sum)
// console.log(sum) prints 8
// n = Math.floor(12 / 10) = 1 (remove the last digit)
// Third iteration of the while loop:

// n > 0 is true (1 > 0)
// digit = 1 % 10 = 1 (extract the last digit)
// sum += 1 * 1 = 8 + 1 = 9 (add the square of the digit to sum)
// console.log(sum) prints 9
// n = Math.floor(1 / 10) = 0 (remove the last digit)
// Exit the loop:

// n > 0 is false (0 > 0 is false)
// The loop exits
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
 //eay way
 let commonChars = function(words){
            const array = []
            for(const letter of words[0]){
                if(words.every(words=>words.includes(letter))){
                    array.push(letter)
                    words = words.map(words=>words.replace(letter,''))
                }
            }
            return array
 }

// Example usage:
let words = ["bella", "label", "roller"];
console.log(`Common characters: ${commonChars(words)}`);
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

Step-by-Step Explanation
Initialization:

charMap is an empty Map.
left is 0.
maxLength is 0.
First Iteration (right = 0):

currentChar is 'a'.
'a' is not in charMap, so we skip the if block.
charMap.set('a', 0) adds 'a' with index 0 to charMap.
maxLength is updated to 1 (from right - left + 1 which is 0 - 0 + 1).
Second Iteration (right = 1):

currentChar is 'b'.
'b' is not in charMap, so we skip the if block.
charMap.set('b', 1) adds 'b' with index 1 to charMap.
maxLength is updated to 2 (from right - left + 1 which is 1 - 0 + 1).
Third Iteration (right = 2):

currentChar is 'c'.
'c' is not in charMap, so we skip the if block.
charMap.set('c', 2) adds 'c' with index 2 to charMap.
maxLength is updated to 3 (from right - left + 1 which is 2 - 0 + 1).
Fourth Iteration (right = 3):

currentChar is 'a'.
'a' is in charMap and charMap.get('a') is 0 which is equal to left.
left is updated to 1 (from charMap.get('a') + 1 which is 0 + 1).
charMap.set('a', 3) updates the index of 'a' to 3 in charMap.
maxLength remains 3 (from right - left + 1 which is 3 - 1 + 1).
```
Step-by-Step Explanation
Initialization:

charMap is an empty Map.
left is 0.
maxLength is 0.
First Iteration (right = 0):

currentChar is 'a'.
'a' is not in charMap, so we skip the if block.
charMap.set('a', 0) adds 'a' with index 0 to charMap.
maxLength is updated to 1 (from right - left + 1 which is 0 - 0 + 1).
Second Iteration (right = 1):

currentChar is 'b'.
'b' is not in charMap, so we skip the if block.
charMap.set('b', 1) adds 'b' with index 1 to charMap.
maxLength is updated to 2 (from right - left + 1 which is 1 - 0 + 1).
Third Iteration (right = 2):

currentChar is 'c'.
'c' is not in charMap, so we skip the if block.
charMap.set('c', 2) adds 'c' with index 2 to charMap.
maxLength is updated to 3 (from right - left + 1 which is 2 - 0 + 1).
Fourth Iteration (right = 3):

currentChar is 'a'.
'a' is in charMap and charMap.get('a') is 0 which is equal to left.
left is updated to 1 (from charMap.get('a') + 1 which is 0 + 1).
charMap.set('a', 3) updates the index of 'a' to 3 in charMap.
maxLength remains 3 (from right - left + 1 which is 3 - 1 + 1).
