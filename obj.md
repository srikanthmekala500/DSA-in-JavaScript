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

```
##Count the Number of Consistent Strings
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

###Two Sum
```javascript
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
##Sum of Unique Elements
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
### Unique Number of Occurrences
```javascript
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


