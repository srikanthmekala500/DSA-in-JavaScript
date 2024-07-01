https://www.youtube.com/@LeetCodeWithMonu
### find count of all players

````javascript
const data = {
    id: 1,
    name: ["P1", "P4"],
    next: {
        id: 2,
        name: ["P3"],
        next: {
            id: 3,
            name: ["P3", "P4", "P5"],
            next: {
                id: 4,
                name: ["P1", "P2", "P4"],
                next: {
                    id: 5,
                    name: ["P2", "P3", "P5"],
                    next: null
                }
            }
        }
    }
};

const playerCount = (data) => {
    if(data === null){
        return {}
    }

    let countPlayer = {}
    for(let player of data.name){
        countPlayer[player] = (countPlayer[player] || 0) + 1;
    }
    const nextPlayerCount = playerCount(data.next);

    for(let key in nextPlayerCount){
        countPlayer[key] = (countPlayer[key] || 0) +  nextPlayerCount[key]
        
    }
    return countPlayer;
}
const countPlayer = playerCount(data);
console.log(countPlayer) // {p1: 2, p4: 3, p3: 3, p2: 2: p5: 2}


``````
## Prototype and Inheritance in JavaScript Objects
````javascript
const obj1 = {
    name: "Vishal"
}

const obj2 = {
    age: 21,
    __proto__: obj1
}

console.log(obj2.name);
````
## Question 2: Group Anagrams (LeetCode 49)
````javascript
let anagrams = {};
    for (let i = 0; i < strs.length; i++) {
        const str = strs[i].split("").sort().join("")
        if (!anagrams.hasOwnProperty(str)) {
            anagrams[str] = []
        }

        anagrams[str] = [...anagrams[str], strs[i]];
    }
    return Object.values(anagrams);
````
## Number of good pairs
Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
 ````javascript
function numIdenticalPairs(nums) {
    let count = 0;
    let freq = {};

    for (let num of nums) {
        if (freq[num]) {
            count += freq[num];
            freq[num]++;
        } else {
            freq[num] = 1;
        }
    }

    return count;
}
 
// Example usage:
let nums = [1,2,3,1,1,3];
console.log(numIdenticalPairs(nums)); // Output: 4
````
## Count the Number of Consistent Strings

````javascript
 function countConsistentStrings(allowed, words) {
    let allowedSet = new Set(allowed);
    let count = 0;

    for (let word of words) {
        let isConsistent = true;
        for (let char of word) {
            if (!allowedSet.has(char)) {
                isConsistent = false;
                break;
            }
        }
        if (isConsistent) {
            count++;
        }
    }

    return count;
}
// Example usage:
let allowed = "ab";
let words = ["ad","bd","aaab","baa","badab"];
console.log(countConsistentStrings(allowed, words)); // Output: 2
````
 

### Two Sum
 ````javascript 
function twoSum(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }

    // In case there is no solution, although the problem guarantees one.
    return [];
}
// Example usage:
let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]
 ````
## Sum of Unique Elements
  ````javascript 

function sumOfUnique(nums) {
    let frequency = {};
    let sum = 0;

    // Calculate the frequency of each element in the array
    for (let num of nums) {
        if (frequency[num]) {
            frequency[num]++;
        } else {
            frequency[num] = 1;
        }
    }

    // Calculate the sum of unique elements
    for (let num in frequency) {
        if (frequency[num] === 1) {
            sum += parseInt(num);
        }
    }

    return sum;
}

// Example usage:
let nums = [1, 2, 3, 2];
console.log(sumOfUnique(nums)); // Output: 4 (1 + 3)

```` 
### Unique Number of Occurrences
  ````javascript 

function uniqueOccurrences(arr) {
    let frequency = {};

    // Calculate the frequency of each element in the array
    for (let num of arr) {
        if (frequency[num]) {
            frequency[num]++;
        } else {
            frequency[num] = 1;
        }
    }

    let occurrences = new Set();

    // Check if all frequencies are unique
    for (let key in frequency) {
        if (occurrences.has(frequency[key])) {
            return false;
        }
        occurrences.add(frequency[key]);
    }

    return true;
}

// Example usage:
let arr = [1, 2, 2, 1, 1, 3];
console.log(uniqueOccurrences(arr)); // Output: true
 ````
### Integer to Roman
  ````javascript 
function intToRoman(num) {
    const romanSymbols = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    let roman = '';

    for (let i = 0; i < romanSymbols.length; i++) {
        const { value, symbol } = romanSymbols[i];
        while (num >= value) {
            roman += symbol;
            num -= value;
        }
    }

    return roman;
}

// Example usage:
console.log(intToRoman(1994)); // Output: "MCMXCIV"
console.log(intToRoman(58));   // Output: "LVIII"
console.log(intToRoman(9));    // Output: "IX"
````
### Longest Substring Without Repeating Characters
  ````javascript
function lengthOfLongestSubstring(s) {
    let seen = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (seen.has(s[right])) {
            seen.delete(s[left]);
            left++;
        }
        seen.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example usage:
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3
console.log(lengthOfLongestSubstring(""));         // Output: 0
console.log(lengthOfLongestSubstring("dvdf"));     // Output: 3
````
## Group Anagrams
  ````javascript
function groupAnagrams(strs) {
    let map = new Map();

    for (let str of strs) {
        // Sort the string to use as a key
        let sortedStr = str.split('').sort().join('');
        
        // If the key doesn't exist in the map, initialize with an empty array
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        
        // Add the original string to the corresponding group
        map.get(sortedStr).push(str);
    }

    // Convert the map values to an array and return
    return Array.from(map.values());
}

// Example usage:
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs)); // Output: [["eat","tea","ate"], ["tan","nat"], ["bat"]]
````
## Find All Anagrams in a String
  ````javascript
function findAnagrams(s, p) {
    const result = [];
    const pCount = Array(26).fill(0);
    const sCount = Array(26).fill(0);

    // Helper function to convert character to index
    const charToIndex = char => char.charCodeAt(0) - 'a'.charCodeAt(0);

    // Populate the frequency array for the pattern
    for (let char of p) {
        pCount[charToIndex(char)]++;
    }

    let left = 0;
    let right = 0;

    // Sliding window approach
    while (right < s.length) {
        // Expand the window by adding the current character to sCount
        sCount[charToIndex(s[right])]++;
        right++;

        // If the window size is the same as the size of p
        if (right - left === p.length) {
            // If the current window matches the pattern's frequency count, store the start index
            if (arraysEqual(pCount, sCount)) {
                result.push(left);
            }

            // Move the window by removing the left character from sCount
            sCount[charToIndex(s[left])]--;
            left++;
        }
    }

    return result;
}

// Helper function to compare two arrays for equality
function arraysEqual(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

// Example usage:
let s = "cbaebabacd";
let p = "abc";
console.log(findAnagrams(s, p)); // Output: [0, 6]

s = "abab";
p = "ab";
console.log(findAnagrams(s, p)); // Output: [0, 1, 2]
```
 
