1) Sort an Array
2) Bubble Sort In JavaScript
3) Insertion Sort In JavaScrip
4) Merge Sort in JavaScript
5) Merge Sort in JavaScript (Space Optimised)
6) Quick Sort in JavaScript
7) How Many Numbers are smaller than the current number
8) Largest Number
9) Sort Color
10) climbing-stairs
11) Coin Change
12) Longest Increasing Subsequence
13) Longest Common Subsequence
14) Word Break Problem
15) Combination Sum
16) House Robber
17) House Robber II
18) Unique Paths
19) Decode Ways
20) Pascal's Triangle
21) Jump Game
22) Generate Parentheses
23) Jump Game II
    
## Sort an Array
```JavaScript
const arr = [-2, -7, 1000, 5]
console.log(arr.sort()) // -2, -7, 1000, 5
console.log(arr.sort((a, b) => a - b)) // -7, -2 , 5, 1000
console.log(arr.sort((a, b) => b - a)) // 1000, 5, -2, -7

const strArr = ["mango", "apple", "banana"]
console.log(strArr.sort()) // "apple", "banana", "mango"
```
## Sort a String
```JavaScript
const str = "Vishal"
console.log(str.split("").sort().join("")) // "Vahils
```
## Bubble Sort In JavaScript
```JavaScript
const bubbleSort = (arr) => {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                swapped = true;
            }
        }
    } while (swapped)
    return arr;
}

console.log(bubbleSort(arr)) // -7, -2 , 5, 1000
```
## Selection Sort in JavaScript
```JavaScript
const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
    }
    return arr;
}

console.log(selectionSort(arr)) // -7, -2 , 5, 1000
```
## Insertion Sort In JavaScript
```JavaScript
const insertionSort = (arr) => {
    for(let i=1; i<arr.length; i++){
        let current = arr[i];
        let j = i-1;
        while(j >= 0 && arr[j] > current){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }
    return arr;
}

console.log(insertionSort(arr)) // -7, -2 , 5, 1000

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

let arr = [1, 2, 4, 5, 9, 7, 8];
console.log(insertionSort(arr)); // Output: [1, 2, 4, 5, 7, 8, 9]

// Step-by-Step Sorting:
// Initial Array: [1, 2, 4, 5, 9, 7, 8]

// First Iteration (i = 1):

// current = 2
// j = 0
// Compare current (2) with arr[j] (arr[0] = 1)
// Since 1 <= 2, no shifting needed
// Array remains [1, 2, 4, 5, 9, 7, 8]
// Second Iteration (i = 2):

// current = 4
// j = 1
// Compare current (4) with arr[j] (arr[1] = 2)
// Since 2 <= 4, no shifting needed
// Array remains [1, 2, 4, 5, 9, 7, 8]
// Third Iteration (i = 3):

// current = 5
// j = 2
// Compare current (5) with arr[j] (arr[2] = 4)
// Since 4 <= 5, no shifting needed
// Array remains [1, 2, 4, 5, 9, 7, 8]
// Fourth Iteration (i = 4):

// current = 9
// j = 3
// Compare current (9) with arr[j] (arr[3] = 5)
// Since 5 <= 9, no shifting needed
// Array remains [1, 2, 4, 5, 9, 7, 8]
// Fifth Iteration (i = 5):

// current = 7
// j = 4
// Compare current (7) with arr[j] (arr[4] = 9)
// Since 9 > 7, shift 9 to the right
// Decrement j to 3
// Compare current (7) with arr[j] (arr[3] = 5)
// Since 5 <= 7, stop shifting
// Insert 7 at arr[j + 1] (index 4)
// Array becomes [1, 2, 4, 5, 7, 9, 8]
// Sixth Iteration (i = 6):

// current = 8
// j = 5
// Compare current (8) with arr[j] (arr[5] = 9)
// Since 9 > 8, shift 9 to the right
// Decrement j to 4
// Compare current (8) with arr[j] (arr[4] = 7)
// Since 7 <= 8, stop shifting
// Insert 8 at arr[j + 1] (index 5)
// Array becomes [1, 2, 4, 5, 7, 8, 9]
// Final Sorted Array:
// The array [1, 2, 4, 5, 9, 7, 8] is now sorted to [1, 2, 4, 5, 7, 8, 9].

```
![image](https://github.com/user-attachments/assets/ca3d8d45-3d81-4820-89c4-e12a7a754953)
## Merge Sort in JavaScript
```JavaScript
const mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

const merge = (left, right) => {
    const result = []
    let leftIndex = 0, rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++;
        }
        else {
            result.push(right[rightIndex])
            rightIndex++;
        }
    }

    while (leftIndex < left.length) {
        result.push(left[leftIndex])
        leftIndex++;
    }

    while (rightIndex < right.length) {
        result.push(right[rightIndex])
        rightIndex++;
    }

    return result;
}

const arr1 = [29, 10, 8, 16, 37, 14, 4, 45]
console.log(mergeSort(arr1))
```
## Merge Sort in JavaScript (Space Optimised)
```JavaScript
const mergeSortInplace = (arr, low, high) => {
    if (low < high) {
        let mid = Math.floor((low + high) / 2);
        mergeSortInplace(arr, low, mid)
        mergeSortInplace(arr, mid + 1, high)
        mergeInplace(arr, low, mid, high)
    }
}

const mergeInplace = (arr, low, mid, high) => {
    const result = []
    let leftIndex = low, rightIndex = mid + 1;
    while (leftIndex <= mid && rightIndex <= high) {
        if (arr[leftIndex] < arr[rightIndex]) {
            result.push(arr[leftIndex])
            leftIndex++;
        }
        else {
            result.push(arr[rightIndex])
            rightIndex++;
        }
    }

    while (leftIndex <= mid) {
        result.push(arr[leftIndex])
        leftIndex++;
    }

    while (rightIndex <= high) {
        result.push(arr[rightIndex])
        rightIndex++;
    }

    for (let i = low; i <= high; i++) {
        arr[i] = result[i - low];
    }
}

const arr1 = [29, 10, 8, 16, 37, 14, 4, 45]
console.log(mergeSortInplace(arr1, 0, arr.length - 1))
console.log(arr1)
```
## Quick Sort in JavaScript
```JavaScript
const quickSort = (arr) => {
    if(arr.length < 2){
        return arr;
    }
    let pivotIndex = Math.floor(Math.random() * arr.length);
    let left = [], right = [];
    for(let i=0; i<arr.length; i++){
        if(i === pivotIndex)
            continue;

        if(arr[i] < arr[pivotIndex]){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }

    return [...quickSort(left), arr[pivotIndex], ...quickSort(right)]
}

console.log(quickSort(arr1))
```
## How Many Numbers are smaller than the current number
```JavaScript
function smallerNumbersThanCurrent(nums) {
    // Create a sorted copy of nums
    let sortedNums = [...nums].sort((a, b) => a - b);
    
    // Create a hashmap to store counts of each number
    let countMap = new Map();
    for (let i = 0; i < sortedNums.length; i++) {
        if (!countMap.has(sortedNums[i])) {
            countMap.set(sortedNums[i], i);
        }
    }
    
    // Create result array using countMap
    let result = [];
    for (let num of nums) {
        result.push(countMap.get(num));
    }
    
    return result;
}

// Example usage:
let nums = [8, 1, 2, 2, 3];
console.log(smallerNumbersThanCurrent(nums)); // Output: [4, 0, 1, 1, 3]
```
## Largest Number
```JavaScript
function largestNumber(nums) {
    // Custom comparator function to sort numbers as strings
    nums.sort((a, b) => {
        let order1 = `${a}${b}`;
        let order2 = `${b}${a}`;
        return order2.localeCompare(order1); // Sort in descending order
    });
    
    // Handle edge case where the largest number is "0"
    if (nums[0] === '0') {
        return '0';
    }
    
    // Concatenate sorted numbers to form the largest number
    return nums.join('');
}

// Example usage:
let nums = [3, 30, 34, 5, 9];
console.log(`Largest number: ${largestNumber(nums)}`); // Output: Largest number: 9534330

Pairs to Compare:

// Compare 30 and 3:

// order1 = "303"
// order2 = "330"
// Result: '330'.localeCompare('303') returns 1, so 3 should come before 30.
// Compare 34 and 5:

// order1 = "345"
// order2 = "534"
// Result: '534'.localeCompare('345') returns 1, so 5 should come before 34.
// Compare 9 and 34:

// order1 = "934"
// order2 = "349"
// Result: '934'.localeCompare('349') returns 1, so 9 should come before 34.
// Final Sorted Order: [9, 5, 34, 3, 30]
// Largest Number: 9534330
```
## Sort Color
```JavaScript
function sortColors(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;
    
    while (mid <= high) {
        if (nums[mid] === 0) {
            // Swap nums[low] and nums[mid]
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            // No need to swap, just move mid pointer forward
            mid++;
        } else { // nums[mid] === 2
            // Swap nums[mid] and nums[high]
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
            // Do not increment mid, as the swapped element needs to be checked again
        }
    }
    
    return nums;
}
// Example usage:
let nums = [2, 0, 2, 1, 1, 0];
console.log(sortColors(nums)); // Output: [0, 0, 1, 1, 2, 2]
```
## climbing-stairs
```JavaScript
// For each step i, set dp[i] = dp[i-1] + dp[i-2]
 
var climbStairs = function(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    let dp = new Array(n + 1);
    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }

    return dp[n];
};

// Example usage:
let n = 5;
let result = climbStairs(n);
console.log(result); // Output: 8

Example Walkthrough
// For n = 5:

// dp[0] = 1
// dp[1] = 1
// dp[2] = dp[1] + dp[0] = 1 + 1 = 2
// dp[3] = dp[2] + dp[1] = 2 + 1 = 3
// dp[4] = dp[3] + dp[2] = 3 + 2 = 5
// dp[5] = dp[4] + dp[3] = 5 + 3 = 8
```
## Coin Change
```JavaScript
// Certainly! The Coin Change problem is a classic algorithmic problem that
// can be solved using dynamic programming. The problem usually comes in two flavors:

// Minimum Coins Required: Given a set of coin denominations and a total amount,
//  find the minimum number of coins needed to make that amount.
// Number of Combinations: Given a set of coin denominations and a total amount,
// find the number of ways to make that amount using the given coins.
// I'll provide you with solutions for both variants in JavaScript.

// 1. Minimum Coins Required
// Here's how you can solve the problem of finding the minimum number
//  of coins required to make a given amount:

function coinChange(coins, amount) {
    // Initialize dp array with Infinity
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0; // Base case: 0 amount requires 0 coins
    
    // Iterate over each coin
    for (const coin of coins) {
        // Update dp array for each amount that can be formed with this coin
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }
    
    // Return result: If amount can't be made, return -1
    return dp[amount] === Infinity ? -1 : dp[amount];
}

// Example usage
const coins = [1, 2, 5];
const amount = 11;
console.log(coinChange(coins, amount)); // Output: 3 (11 = 5 + 5 + 1)


// ## 2.Number of Combinations
// Here's how you can solve the problem of finding the number of
// combinations to make a given amount:

function coinChangeCombinations(coins, amount) {
    // Initialize dp array with 0
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1; // Base case: there's one way to make 0 amount (using no coins)
    
    // Iterate over each coin
    for (const coin of coins) {
        // Update dp array for each amount that can be formed with this coin
        for (let i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin];
        }
    }
    
    return dp[amount];
}

// Example usage
const coins = [1, 2, 5];
const amount = 5;
console.log(coinChangeCombinations(coins, amount)); // Output: 4 (5 = 1+1+1+1+1, 1+1+1+2, 1+2+2, 5)

````
## Longest Increasing Subsequence   
```JavaScript
function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;
    
    const dp = new Array(nums.length).fill(1); // Initialize dp array with 1
    
    // Fill the dp array
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    
    // The length of the longest increasing subsequence
    return Math.max(...dp);
}

// Example usage
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums)); // Output: 4 (The LIS is [2, 3, 7, 101])
// Detailed Walkthrough:

// For i = 1 (element 9):

// Compare with element at index 0 (element 10):
// Since 9 < 10, update dp[1] = Math.max(dp[1], dp[0] + 1) = 2.
// dp after processing 9: [1, 2, 1, 1, 1, 1, 1, 1].
// For i = 2 (element 2):

// Compare with elements at indices 0 and 1 (elements 10 and 9):
// Both are greater than 2, so no update is made.
// dp after processing 2: [1, 2, 1, 1, 1, 1, 1, 1].
// For i = 3 (element 5):

// Compare with elements at indices 0, 1, and 2 (elements 10, 9, and 2):
// 5 > 2: Update dp[3] = Math.max(dp[3], dp[2] + 1) = 2.
// 5 is not greater than 10 or 9, so no further update.
// dp after processing 5: [1, 2, 1, 2, 1, 1, 1, 1].
// For i = 4 (element 3):

// Compare with elements at indices 0, 1, 2, and 3 (elements 10, 9, 2, and 5):
// 3 > 2: Update dp[4] = Math.max(dp[4], dp[2] + 1) = 2.
// 3 is not greater than 10 or 9, and 5.
// dp after processing 3: [1, 2, 1, 2, 2, 1, 1, 1].
// For i = 5 (element 7):

// Compare with elements at indices 0, 1, 2, 3, and 4 (elements 10, 9, 2, 5, and 3):
// 7 > 2, update dp[5] = Math.max(dp[5], dp[2] + 1) = 2.
// 7 > 5, update dp[5] = Math.max(dp[5], dp[3] + 1) = 3.
// 7 > 3, update dp[5] = Math.max(dp[5], dp[4] + 1) = 3.
// dp after processing 7: [1, 2, 1, 2, 2, 3, 1, 1].
// For i = 6 (element 101):

// Compare with elements at indices 0, 1, 2, 3, 4, and 5 (elements 10, 9, 2, 5, 3, and 7):
// 101 > 2: Update dp[6] = Math.max(dp[6], dp[2] + 1) = 2.
// 101 > 5: Update dp[6] = Math.max(dp[6], dp[3] + 1) = 3.
// 101 > 7: Update dp[6] = Math.max(dp[6], dp[5] + 1) = 4.
// dp after processing 101: [1, 2, 1, 2, 2, 3, 4, 1].
// For i = 7 (element 18):

// Compare with elements at indices 0, 1, 2, 3, 4, 5, and 6 (elements 10, 9, 2, 5, 3, 7, and 101):
// 18 > 2: Update dp[7] = Math.max(dp[7], dp[2] + 1) = 2.
// 18 > 5: Update dp[7] = Math.max(dp[7], dp[3] + 1) = 3.
// 18 > 7: Update dp[7] = Math.max(dp[7], dp[5] + 1) = 4.
// 18 < 101, so no further update.
// dp after processing 18: [1, 2, 1, 2, 2, 3, 4, 4].
// Result:

// The maximum value in dp is 4, which is the length of the longest increasing subsequence.

````
## Longest Common Subsequence
https://www.youtube.com/watch?v=NytCTDzpHo0&ab_channel=DataStructuresandAlgotelugu
```JavaScript
function longestCommonSubsequence(X, Y) {
    const m = X.length;
    const n = Y.length;

    // Create a 2D DP array initialized with 0
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));

    // Fill the DP array
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (X[i - 1] === Y[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // The length of the LCS is in dp[m][n]
    return dp[m][n];
}

// Example usage
const X = "ABCBDAB";
const Y = "BDCAB";
console.log(longestCommonSubsequence(X, Y)); // Output: 4 (The LCS is "BCAB")
````
## Word Break Problem

![image](https://github.com/user-attachments/assets/b8344c5f-dcce-425b-9924-b34e6bcd7715)
```JavaScript
function wordBreak(s, wordDict) {
    const wordSet = new Set(wordDict); // Convert wordDict to a set for quick lookup
    const dp = Array(s.length + 1).fill(false); // Initialize dp array
    dp[0] = true; // Base case: empty string can always be segmented

    // Fill the dp array
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }

    // The result is whether the whole string can be segmented
    return dp[s.length];
}

// Example usage
const s = "leetcode";
const wordDict = ["leet", "code"];
console.log(wordBreak(s, wordDict)); // Output: true (The string can be segmented as "leet code")
```
## Combination Sum
```JavaScript
// // Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.


function combinationSum(candidates, target) {
    const result = [];

    // Helper function for backtracking
    function backtrack(start, target, combination) {
        if (target === 0) {
            // If target is zero, we found a valid combination
            result.push([...combination]);
            return;
        }
        if (target < 0) {
            // If target is negative, terminate this path
            return;
        }

        // Explore further with each candidate starting from 'start'
        for (let i = start; i < candidates.length; i++) {
            combination.push(candidates[i]);
            backtrack(i, target - candidates[i], combination); // Not i + 1 because we can reuse the same element
            combination.pop(); // Backtrack to explore other combinations
        }
    }

    // Start backtracking from the beginning of the candidates array
    backtrack(0, target, []);
    return result;
}

// Example usage
const candidates = [2, 3, 6, 7];
const target = 7;
console.log(combinationSum(candidates, target)); 
// Output: [[2, 2, 3], [7]]

et's use candidates = [2, 3, 6, 7] and target = 7 to illustrate the backtracking process:

// Initialization:

// result will store the final combinations.
// Start backtracking with startIndex = 0, target = 7, and an empty combination.
// Recursive Exploration:

// Start with 2:

// Target = 7 - 2 = 5: Add 2 to the combination and continue.
// Next Call: startIndex = 0, target = 5, combination = [2].
// Add another 2: Target = 5 - 2 = 3.
// Next Call: startIndex = 0, target = 3, combination = [2, 2].
// Add another 2: Target = 3 - 2 = 1.
// Next Call: startIndex = 0, target = 1, combination = [2, 2, 2].
// Add another 2: Target = 1 - 2 = -1 (Not valid, backtrack).
// Backtrack: Remove last 2, explore next candidates.
// Add 3: Target = 1 - 3 = -2 (Not valid, backtrack).
// Backtrack: Remove last 3, no more candidates.
// Backtrack: Remove last 2, continue exploring.
// Add 3: Target = 3 - 3 = 0. Valid combination [2, 2, 3] found.
// Continue with other candidates.
// Continue with other candidates (3, 6, 7):

// For 3: Target = 7 - 3 = 4.
// Add another 3: Target = 4 - 3 = 1.
// Next Call: startIndex = 1, target = 1, combination = [3, 3].
// Add 3: Target = 1 - 3 = -2 (Not valid).
// Backtrack and continue exploring.
// For 7: Target = 7 - 7 = 0. Valid combination [7] found.

// Result:

// The final result is [[2, 2, 3], [7]].
```
## House Robber
You are a professional robber planning to rob houses along a street. 
// Each house has a certain amount of money stashed, 
// the only constraint stopping you from robbing each of them is that adjacent houses have security 
// systems connected and it will automatically contact the police 
// if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money 
// of each house, return the maximum amount of money you 
// can rob tonight without alerting the police.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) 
// and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
```JavaScript
function rob(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    
    let prev1 = 0; // dp[i-2]
    let prev2 = 0; // dp[i-1]
    
    for (let num of nums) {
        const temp = prev1; // Store the value of dp[i-2]
        prev1 = Math.max(prev2, prev1 + num); // dp[i] = max(dp[i-1], dp[i-2] + nums[i])
        prev2 = temp; // Update dp[i-2] to the old dp[i-1]
    }
    
    return prev1;
}

// Example usage
const nums = [2, 3, 2];
console.log(rob(nums)); // Output: 5 (Rob houses with amounts 2 and 2)
```
## House Robber II

//You are a professional robber planning to rob houses along a street. 
// Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. 
// That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security 
// system connected, and it will automatically contact the police if
// two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house,
// return the maximum amount of money you can rob tonight without alerting the police.

// Example 1:

// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and 
// then rob house 3 (money = 2), because they are adjacent houses.
```JavaScript
function rob(nums) {
    // Helper function to handle the linear house robber problem
    function robLinear(houses) {
        if (houses.length === 0) return 0;
        if (houses.length === 1) return houses[0];
        
        let n = houses.length;
        let dp = new Array(n).fill(0);
        dp[0] = houses[0];
        dp[1] = Math.max(houses[0], houses[1]);
        
        for (let i = 2; i < n; i++) {
            dp[i] = Math.max(dp[i-1], dp[i-2] + houses[i]);
        }
        
        return dp[n-1];
    }
    
    if (nums.length === 1) return nums[0];
    
    // Case 1: Rob from the 1st to the second-to-last house
    let case1 = robLinear(nums.slice(0, -1));
    // Case 2: Rob from the 2nd to the last house
    let case2 = robLinear(nums.slice(1));
    
    return Math.max(case1, case2);
}

// Example usage
const houses = [2, 3, 2];
console.log(rob(houses));  // Output: 3
```
## Unique Paths
```JavaScript
function uniquePaths(m, n) {
    // Create a 2D array with dimensions m x n
    const dp = Array.from({ length: m }, () => Array(n).fill(0));
    
    // Initialize the first row and first column to 1
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1; // There's only one way to get to any cell in the first column
    }
    
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1; // There's only one way to get to any cell in the first row
    }
    
    // Fill the rest of the dp table
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1]; // Sum of paths from top and left
        }
    }
    
    // The bottom-right corner has the number of unique paths
    return dp[m-1][n-1];
}

// Example usage
const m = 3; // Number of rows
const n = 7; // Number of columns
console.log(uniquePaths(m, n));  // Output: 28
```
## Decode Ways

https://www.youtube.com/watch?v=HW-y3gvQTVQ&ab_channel=codestorywithMIK
```JavaScript
function numDecodings(s) {
    // Edge case: if the string is empty, return 0
    if (s.length === 0) return 0;
    
    const n = s.length;
    // dp array to store the number of ways to decode up to each index
    const dp = new Array(n + 1).fill(0);
    
    // Base cases
    dp[0] = 1; // There's one way to decode an empty string
    
    // If the first character is '0', no valid decoding exists
    dp[1] = s[0] === '0' ? 0 : 1;
    
    for (let i = 2; i <= n; i++) {
        // Check if the single digit is valid
        const oneDigit = s.substring(i - 1, i);
        if (oneDigit !== '0') {
            dp[i] += dp[i - 1];
        }
        
        // Check if the two digits are valid
        const twoDigits = s.substring(i - 2, i);
        if (twoDigits >= '10' && twoDigits <= '26') {
            dp[i] += dp[i - 2];
        }
    }
    
    return dp[n];
}

// Example usage
const s = "226";
console.log(numDecodings(s)); // Output: 3
```
## Pascal's Triangle
![Uploading image.png…]()

```JavaScript
function generate(numRows) {
    const result = [];
    
    for (let i = 0; i < numRows; i++) {
        const row = Array(i + 1).fill(1); // Start with all elements as 1
        
        // Fill the middle elements
        for (let j = 1; j < i; j++) {
            row[j] = result[i - 1][j - 1] + result[i - 1][j];
        }
        
        result.push(row);
    }
    
    return result;
}

// Example usage
const numRows = 5;
console.log(generate(numRows));
// Output:
// [
//   [1],
//   [1, 1],
//   [1, 2, 1],
//   [1, 3, 3, 1],
//   [1, 4, 6, 4, 1]
// ]
```
## Jump Game
```JavaScript
function canJump(nums) {
    // Step 1: Initialize maxReach
    let maxReach = 0;
    const n = nums.length;

    // Step 2: Iterate through the array
    for (let i = 0; i < n; i++) {
        // If the current index is beyond the maximum reachable index, return false
        if (i > maxReach) {
            return false;
        }
        
        // Update maxReach to the maximum of its current value and i + nums[i]
        maxReach = Math.max(maxReach, i + nums[i]);
        
        // If maxReach is beyond or equal to the last index, return true
        if (maxReach >= n - 1) {
            return true;
        }
    }
    
    // Step 3: If loop completes and maxReach is not sufficient, return false
    return false;
}

// Example usage
const nums = [2, 3, 1, 1, 4];
console.log(canJump(nums)); // Output: true
```

### Generate Parentheses
// Given n pairs of parentheses, 
 // write a function to generate all combinations of well-formed parentheses.
// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

```JavaScript
function generateParenthesis(n) {
    const result = [];
    
    function backtrack(currentCombination, openCount, closeCount) {
        // Base case: if current combination is valid
        if (currentCombination.length === 2 * n) {
            result.push(currentCombination);
            return;
        }
        
        // Add opening parenthesis if we still have some to add
        if (openCount < n) {
            backtrack(currentCombination + '(', openCount + 1, closeCount);
        }
        
        // Add closing parenthesis if it won't exceed the number of opening ones
        if (closeCount < openCount) {
            backtrack(currentCombination + ')', openCount, closeCount + 1);
        }
    }
    
    backtrack('', 0, 0); // Start with an empty combination and zero counts
    return result;
}

// Example usage
const n = 3;
console.log(generateParenthesis(n));
// Output: ["((()))", "(()())", "(())()", "()(())", "()()()"]
```
##  Jump Game II 
https://www.youtube.com/watch?v=pvg0yrD-E5w&ab_channel=codestorywithMIK
// You are given a 0-indexed array of integers 
// nums of length n. You are initially positioned at nums[0].

// Each element nums[i] represents the maximum length
// of a forward jump from index i. In other words, if you are at nums[i], 
// you can jump to any nums[i + j] where:

// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2.
// Jump 1 step from index 0 to 1, then 3 steps to the last index.
 
```JavaScript
function jump(nums) {
    const n = nums.length;
    if (n <= 1) return 0;  // No jumps needed if there's 1 or fewer elements
    
    let jumps = 0;  // Count of jumps needed
    let currentEnd = 0;  // End of the range that can be reached with current number of jumps
    let farthest = 0;  // Farthest point that can be reached in the next jump
    
    for (let i = 0; i < n - 1; i++) {  // Traverse the array up to the second last element
        farthest = Math.max(farthest, i + nums[i]);  // Update the farthest reachable index
        
        if (i === currentEnd) {  // When we reach the end of the current jump range
            jumps++;  // Increment the jump counter
            currentEnd = farthest;  // Update the end of the range to the farthest point
            
            if (currentEnd >= n - 1) {  // If the currentEnd reaches or exceeds the last index
                break;
            }
        }
    }
    
    return jumps;
}
```
