## Distribute Candies
```javascript
function distributeCandies(candies, numToGive) {
    // Count unique types of candies
    let uniqueCandies = new Set(candies);
    let maxTypes = Math.min(uniqueCandies.size, Math.floor(numToGive / 2));
    return maxTypes;
}
// uniqueCandies.size = 3 (since there are 3 unique types of candies)
// Math.floor(numToGive / 2) = Math.floor(6 / 2) = 3
// maxTypes = Math.min(3, 3) = 3
// Example usage:

let candies = [1, 1, 2, 2, 3, 3];
let numToGive = 6;
console.log
(`Maximum types of candies the sister can receive: ${distributeCandies(candies, numToGive)}`);
// Output: Maximum types of candies the sister can receive: 3
```
## Length of the longest consecutive sequence menas
```javascript
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
```javascript
function isHappy(n) {
    let seen = new Set(); // Initialize a new set to track seen numbers
    
    while (n !== 1 && !seen.has(n)) { // Continue loop if n is not 1 and n has not been seen before
        seen.add(n); // Add n to the set of seen numbers
        n = getNext(n); // Update n to the next value in the sequence
    }
    
    return n === 1; // Return true if n is 1 (happy number), otherwise false (cycle detected)
}

function getNext(n) {
    let sum = 0;
  
    while (n > 0) {
        let digit = n % 10; // Get the last digit of n
        sum += digit * digit; // Add the square of the digit to the sum
        n = Math.floor(n / 10); // Remove the last digit from n
    }
    return sum; // Return the sum of the squares of the digits
}

// Example usage
let number1 = 82;
console.log(`Is ${number1} a happy number? ${isHappy(number1)}`); // Output: true
//Set(1) { 19 }
// Set(2) { 19, 82 }
// Set(3) { 19, 82, 68 }
// Set(4) { 19, 82, 68, 100 }
```
## First Unique Character In A String
```javascript
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
