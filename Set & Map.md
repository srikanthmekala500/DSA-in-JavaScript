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
console.log(`Length of the longest consecutive sequence: ${longestConsecutive(nums)}`); // Output: Length of the longest consecutive sequence: 4
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
console.log(`Is ${number} a happy number? ${isHappy(number)}`); // Output: Is 19 a happy number? true
```
