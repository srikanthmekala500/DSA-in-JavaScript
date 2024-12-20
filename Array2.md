---
import '../styles/header.css'
const navLinks = [
  {
    name: 'Product',
    href: '/',
    dropdown: [
      { name: 'Team', href: '/about/team' },
      { name: 'Mission', href: '/about/mission' },
    ],
  },
  {
    name: 'Developers',
    href: '/ ',
     dropdown: [
      { name: 'API Docs', href: '/developers/api' },
      { name: 'SDKs', href: '/developers/sdks' },
    ],
  },
  {
    name: 'Resources',
    href: '/ ',
     dropdown: [
      { name: 'API Docs', href: '/developers/api' },
      { name: 'SDKs', href: '/developers/sdks' },
    ],
  },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Cloud', href: '/cloud' },
];
---

<nav class="navbar">
  <div class="container">
    <!-- Logo -->
    <img class="logo" src="/images/logo.svg" alt="Company Logo" />

    <!-- Navigation Links -->
    <ul class="nav-links">
      {navLinks.map((link) => (
        <li class="nav-item">
          <a href={link.href}>
            {link.name}
            {link.dropdown && link.dropdown.length > 0 && (
              <span class="dropdown-arrow">&#62;</span>
            )}
          </a>
          {link.dropdown && link.dropdown.length > 0 && (
            <ul class="dropdown">
              {link.dropdown.map((subLink) => (
                <li>
                  <a href={subLink.href}>{subLink.name}</a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
      
    </ul>
    <div class="social-followers">
      <div class="social-item">
        <img src="/images/GitHub.svg" alt="GitHub" class="github-icon" />
        <span>18.7k</span>
          
      </div>
    </div>
    <!-- Buttons -->
    <div class="buttons">
      <button class="btn primary">Contact Sales</button>
      <button class="btn secondary">Get Started</button>
    </div>
  </div>
</nav>




body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Navbar Styling */
.navbar {
  display: flex;
  justify-content: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  color: #000000;
  box-sizing: border-box;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

/* Navigation Links */
.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item a {
  color: #000000;
  text-decoration: none;
  font-size: 0.9375rem;
}

.nav-item a:hover {
  color: #090909;
}
 /* Dropdown Styling */
.dropdown {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 100%; /* Adjust position to align with your navbar */
  left: 0;
  background-color: #f6f6f6;
  list-style: none;
  padding: 0.5rem 0;
  margin: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  transition: visibility 0s ease 0.3s, opacity 0.3s ease; /* Delayed visibility for smooth transition */
}

.nav-item {
  position: relative; /* Required for positioning dropdown correctly */
}

.nav-item:hover .dropdown {
  visibility: visible;
  opacity: 1;
  transition: visibility 0s, opacity 0.3s ease-in; /* Smooth transition */
}

.dropdown li {
  padding: 0.5rem 1rem;
}

.dropdown li a {
  color: #0b0b0b;
  text-decoration: none;
  font-size: 1rem;
}

.dropdown li a:hover {
  background-color: #fdfdfd;
  color: #ffffff; /* Optional: Adjust hover text color */
}
 
/* Social Followers Section */
.social-followers {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.social-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
}

 

.github-icon {
  width: 35px;
  height: 30.4px;
  display: inline-block;
  vertical-align: middle;
}
.dropdown-arrow {
  display: inline-block;
  font-size: 0.8rem; /* Adjust size as needed */
  transition: transform 0.3s ease; /* Smooth rotation effect */
}

/* Rotate Arrow on Hover */
.nav-item:hover .dropdown-arrow {
  transform: rotate(90deg); /* Rotates 90 degrees */
}
.social-item span {
  margin-left: 0; /* Space between the icon and text */
  font-size: 1rem;
}
/* Buttons Section (if added later) */
.buttons {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
}

.btn.primary {
  background-color: #edebeb;
  color: #000000;
}

.btn.primary:hover {
  background-color: #f2f2f2;
}

.btn.secondary {
  background-color: #5c8ec7;
  color: #ffffff;
  border: 1px solid #00d1b2;
}

.btn.secondary:hover {
  background-color: #000000;
  color: #fff;
}

@media (max-width: 541px) {
  .nav-links {
    display: none;
  }

  .Headerlogo {
    height: 31px;
    width: 30px;
  }

  .hamburger {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 24px;
    justify-content: space-around;
  }

  .line {
    background-color: #000;
    border-radius: 25px;
    height: 2px;
    transition: transform 0.3s ease;
    width: 24px;
  }

  .mobile-nav {
    background-color: white;
    display: none;
    flex-direction: column;
    left: 0;
    position: absolute;
    right: 0;
    top: 60px;
    z-index: 10;
  }

  .mobile-nav.open {
    display: flex;
  }
}

@media (min-width: 540px) {
  .hamburger {
    display: none;
  }

  .mobile-nav {
    display: none;
  }

  .nav-links {
    display: flex;
  }
}

.line.open {
  background-color: #004d87;
}

@media (min-width: 541px) and (max-width: 610px) {
  .nav-links {
    display: flex;
    gap: 20px;
    margin-right: auto;
  }
}

@media (min-width: 1600px) {
  .nav-link {
    font-size: clamp(2rem, 2vw, 4rem);
  }

  .Headerlogo {
    height: clamp(2.5rem, 4vw, 12rem);
    margin-right: clamp(2rem, 3vw, 8rem);
    width: clamp(2.5rem, 4vw, 12rem);
  }

  .nav {
    gap: clamp(2rem, 2vw, 4rem);
  }
}




1)  Map in JavaScript
2)  Polyfill of map()
3)  Filter In JavaScript
4)  Reduce in JavaScript
5)  Polyfill of reduce()
6)  Find the longest word length
7)  Find the longest word
8)  Calculate the factorial of the largest number in the array
9)  Calculate the average score of students who scored above 90
10) Capitalize the first letter of each word in the array
11) Majority Element
12) Squares of a Sorted Array
13) Find Pivot Index
14) Move All Zeros in an Array to End of the Array
15) Max Consecutive Ones
16) Best Time to Buy and Sell Stock
17) Two Sum
18) Two Sum - II
19) 3sum
20) Container With Most Water
21) Verifying an Alien Dictionary
22) Trapping Rain Water

*************************************************************************


 
## Map in JavaScript
```javascript
const employees = [
    { name: 'John', age: 32 },
    { name: 'Sarah', age: 28 },
    { name: 'Michael', age: 40 },
];

const employeesName = employees.map(employee => employee.name);
console.log(myEmployeesName); // ["John", "Sarah", "Michael"]

````
## Polyfill of map()
```javascript
if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (callback) {
        const result = [];
        for (let i = 0; i < this.length; i++) {
            result.push(callback(this[i], i, this));
        }
        return result;
    };
}

const myEmployeesName = employees.myMap(employee => employee.name);

console.log(myEmployeesName); // ["John", "Sarah", "Michael"]
````
## Filter In JavaScript
```javascript
const products = [
    { name: 'iPhone', price: 999, inStock: true },
    { name: 'Samsung Galaxy', price: 899, inStock: false },
    { name: 'Google Pixel', price: 799, inStock: true },
];

const availableProducts = products.filter(product => product.inStock);
// [
//     { name: 'iPhone', price: 999, inStock: true },
//     { name: 'Google Pixel', price: 799, inStock: true },
// ]
// Polyfill of filter()

if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = (callback) => {
        const result = [];
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i], i, this)) {
                result.push(this[i]);
            }
        }
        return result;
    };
}

const myAvailableProducts = products.myFilter(product => product.inStock);

console.log(availableProducts); 
// [
//     { name: 'iPhone', price: 999, inStock: true },
//     { name: 'Google Pixel', price: 799, inStock: true },
// ]
````
## Reduce in JavaScript
```javascript
const orders = [
    { product: 'iPhone', price: 999, quantity: 2 },
    { product: 'Samsung Galaxy', price: 899, quantity: 1 },
    { product: 'Google Pixel', price: 799, quantity: 3 },
];

const totalAmount = orders.reduce(function (accumulator, order) {
    return accumulator + order.price * order.quantity;
}, 0);

console.log(totalAmount); // 5294
```
## Polyfill of reduce()
```javascript
if (!Array.prototype.myFilter) {
    Array.prototype.myReduce = (callback, initialValue) => {
        let accumulator = initialValue === undefined ? this[0] : initialValue;
        for (let i = initialValue === undefined ? 1 : 0; i < this.length; i++) {
            accumulator = callback(accumulator, this[i], i, this);
        }
        return accumulator;
    };
}

const myTotalAmount = orders.myReduce(function (accumulator, order) {
    return accumulator + order.price * order.quantity;
}, 0);

console.log(totalAmount); // 5294
```
![image](https://github.com/user-attachments/assets/a1436584-ce59-4fd1-965e-956d294bb31f)

## Question 1: Find the longest word length
```javascript
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

const words = ['apple', 'banana', 'cherry', 'dragonfruit', 'elderberry'];

const longestWordLength = words.reduce((maxLength, word) => {
    const currentLength = word.length;
    return currentLength > maxLength ? currentLength : maxLength;
}, 0);

console.log(longestWordLength); // Output: 11
    // Step-by-Step Execution:

    // First Iteration:

    // word = 'apple'
    // currentLength = word.length = 5
    // maxLength = 0 (initial value)
    // Comparison: currentLength > maxLength → 5 > 0 → true
    // maxLength is updated to 5.
    // Second Iteration:

    // word = 'banana'
    // currentLength = word.length = 6
    // maxLength = 5
    // Comparison: currentLength > maxLength → 6 > 5 → true
    // maxLength is updated to 6.
    // Third Iteration:

    // word = 'cherry'
    // currentLength = word.length = 6
    // maxLength = 6
    // Comparison: currentLength > maxLength → 6 > 6
    // Third Iteration:
    // Word: 'cherry'

    // currentLength: word.length = 6

    // maxLength: 6 (from the previous iteration)

    // Comparison: currentLength > maxLength → 6 > 6 → false

    // Since the comparison is false, maxLength remains 6.

    // Fourth Iteration:
    // Word: 'dragonfruit'
    // currentLength: word.length = 11
    // maxLength: 6 (from the previous iteration)
    // Comparison: currentLength > maxLength → 11 > 6 → true
    // Since the comparison is true, maxLength is updated to 11.
    // Fifth Iteration:
    // Word: 'elderberry'
    // currentLength: word.length = 10
    // maxLength: 11 (from the previous iteration)
    // Comparison: currentLength > maxLength → 10 > 11 → false
    // Since the comparison is false, maxLength remains 11.
// Breakdown:
// Condition:

// currentLength > maxLength: This checks if the length of the current word 
//(currentLength) is greater than the current maximum length (maxLength).
// True Case:

// currentLength: If the condition (currentLength > maxLength) is true, the ternary 
//operator returns currentLength, meaning the length of the current word becomes the new maxLength.
// False Case:

// maxLength: If the condition is false (meaning the current word's length is not 
//greater than the current maxLength), the ternary operator returns maxLength, leaving it unchanged.
```
## Question 2: Find the longest word
```javascript
const longestWord = words.reduce((longestWord, word) => {
    return word.length > longestWord.length ? word : longestWord;
}, "");

console.log(longestWord); // Output: 'dragonfruit'

const words = ['apple', 'banana', 'cherry', 'dragonfruit', 'elderberry'];

const result = words.reduce((acc, word) => {
    const currentLength = word.length;
    if (currentLength > acc.maxLength) {
        acc.maxLength = currentLength;
        acc.longestWord = word;
    }
    return acc;
}, { maxLength: 0, longestWord: '' });

console.log(`Longest word: ${result.longestWord}, Length: ${result.maxLength}`);
s
````
 
## Question 3: Calculate the factorial of the largest number in the array
![image](https://github.com/user-attachments/assets/6ba925dc-3d80-4299-9d77-e4d3d7034146)

```javascript
const numbers = [5, 2, 4, 3, 8];

// Step 1: Find the largest number
const largestNumber = Math.max(...numbers);

// Step 2: Calculate the factorial of the largest number
const factorial = (num) => {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
};

const largestNumberFactorial = factorial(largestNumber);

console.log(`The largest number is ${largestNumber}`);
console.log(`The factorial of the largest number is ${largestNumberFactorial}`);

 ```

## Question 4: Calculate the average score of students who scored above 90
```javascript

const students = [
    { name: 'John', score: 85 },
    { name: 'Sarah', score: 92 },
    { name: 'Michael', score: 88 },
    { name: 'Emma', score: 95 },
    { name: 'Daniel', score: 90 },
];

// Step 1: Filter students who scored above 90
const highScorers = students.filter(student => student.score > 90);

// Step 2: Calculate the average score of these students
const totalScore = highScorers.reduce((sum, student) => sum + student.score, 0);
const averageScore = totalScore / highScorers.length;

console.log(`The average score of students who scored above 90 is ${averageScore}`);
The average score of students who scored above 90 is 93.5

// Question 5: Filter out books published before the year 2000 and return their titles

const books = [
    { title: 'Book 1', year: 1998 },
    { title: 'Book 2', year: 2003 },
    { title: 'Book 3', year: 1995 },
    { title: 'Book 4', year: 2001 },
];

const filters = books.filter((books)=>{
    return books.year < 2000
})
const titlesBefore2000 = filters.map(book => book.title);

console.log(filters)
```
## Question 6: Capitalize the first letter of each word in the array

```javascript
const strings = ['hello world', 'i am openai', 'welcome to javascript'];

// Function to capitalize the first letter of each word
const capitalizeWords = (str) => {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

// Capitalize each string in the array
const capitalizedStrings = strings.map(capitalizeWords);

console.log(capitalizedStrings);


Why .map?
Iterates over each item: .map automatically iterates through each element in the strings array, applying the capitalizeWords function to each one.
Returns a new array: Unlike forEach, which only executes a function but doesn’t return anything, .map returns a new array with the modified results, which in this case are the capitalized strings.
Immutable operation: .map does not change the original strings array, which makes it useful if you want to keep the original data intact.

```

///////////////////////////

## Question 7: Majority Element
```javascript
        // Given an array nums of size n, return the majority element.

        // The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array. 
        // Example 1:

        // Input: nums = [3,2,3]
        // Output: 3
        // Example 2:

        // Input: nums = [2,2,1,1,1,2,2]
        // Output: 2
let  nums = [2,2,1,1,1,2,2]
function majorityElementWithMoore(nums) {
    let candidate;
    let count = 0;
  
    for (let elem of nums) {
      if (count === 0) {
        candidate = elem;
      }
      if (candidate === elem) {
        count++;
      } else {
        count--;
      }
    }
  
    return candidate;
  }
````
## Question 8 :Squares of a Sorted Array
```javascript
                // Example 1:
                // Input: [-4,-1,0,3,10]
                // Output: [0,1,9,16,100]
const sortedSquares = (A) => {
    return A.map((ele) => { // transform the given array
        return ele*ele   //square the element
    }).sort((a,b) => {
        return a-b // sort by ascending order
    })

};
console.log(sortedSquares([-4,-1,0,3,10]))
````
## Question 9 : Find Pivot Index
![image](https://github.com/user-attachments/assets/f4380106-a4b3-47b5-bcbe-6c307ce01076)

```javascript
        // The pivot index can be defined as the index where the sum of the numbers to the left of the index is equal to the sum of the numbers to the right of the index.
          // Example 1:
        // Input: nums = [1,7,3,6,5,6]
        // Output: 3
        // Explanation:
        // The pivot index is 3.
        // Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
        // Right sum = nums[4] + nums[5] = 5 + 6 = 11
      
        // Example 2:
        // Input: nums = [1,2,3]
        // Output: -1
        // Explanation:
        // There is no index that satisfies the conditions in the problem statement.

 function pivotIndex(nums) {
    const totalSum = nums.reduce((sum, num) => sum + num, 0);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        const rightSum = totalSum - leftSum - nums[i];
        if (leftSum === rightSum) {
            return i;
        }
        leftSum += nums[i];
    }

    return -1;
}
//Example Execution
// For the array [1, 7, 3, 6, 5, 6]:

// At index 0: leftSum = 0, rightSum = 27 (not equal)
// At index 1: leftSum = 1, rightSum = 26 (not equal)
// At index 2: leftSum = 8, rightSum = 20 (not equal)
// At index 3: leftSum = 11, rightSum = 11 (equal, so return 3)
// Example
// Let’s take the array [1, 7, 3, 6, 5, 6] and find the right sum at index 3:

// totalSum: (1 + 7 + 3 + 6 + 5 + 6 = 28)
// leftSum: (1 + 7 + 3 = 11)
// nums[3]: (6)
// So, the right sum at index 3 is:

// [ \text{rightSum} = 28 - 11 - 6 = 11 ]

````
## Question 10  : Move All Zeros in an Array to End of the Array
```javascript
// A JavaScript program to move all zeroes at the end of array 

// Function which pushes all zeros to end of an array. 
 function moveZerosToEnd(nums) {
    let count = 0; // Count of non-zero elements

    // Traverse the array. If the element is not zero, place it at the 'count' index.
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[count++] = nums[i];
        }
    }

    // After all non-zero elements have been moved to the front, fill the remaining positions with zeros.
    while (count < nums.length) {
        nums[count++] = 0;
    }
}

// Example usage:
const nums = [1, 7, 0, 3, 0, 6, 5, 0];
moveZerosToEnd(nums);
console.log(nums); // Output: [1, 7, 3, 6, 5, 0, 0, 0]


// Driver code 
	let arr = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9]; 
	let n = arr.length; 
	pushZerosToEnd(arr, n); 
	document.write("Array after pushing all zeros to end of array :<br>"); 
	for (let i = 0; i < n; i++) 
		document.write(arr[i] + " "); 
 ``` 

## Question 11  :Max Consecutive Ones
```javascript
    var findMaxConsecutiveOnes = function(nums) {
        let largest = 0;
        let current = 0;
        for (let i = 0; i<nums.length; i++) {
            nums[i] === 0 ? current = 0 : current++;
            if (current > largest) largest = current;
        };
        return largest;
    };
 
```

without using sort() method we sort the arry 
````javascript
let arry = ["z", "b", "c", "a"];

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let sortedArry = bubbleSort(arry);
console.log(sortedArry); // ["a", "b", "c", "z"]
````
## Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to
// buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction.
// If you cannot achieve any profit, return 0.
// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1)
// and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is
// not allowed because you must buy before you sell. 
````javascript
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit;
};

// Example usage:
let prices = [7, 1, 5, 3, 6, 4];
let profit = maxProfit(prices);
console.log(profit); // Output: 5
Initial State:

// minPrice = Infinity
// maxProfit = 0
// Iteration 1 (i = 0):

// prices[i] = 7
// minPrice = min(Infinity, 7) = 7
// No update to maxProfit since 7 - 7 = 0 is not greater than 0.
// minPrice = 7
// maxProfit = 0
// Iteration 2 (i = 1):

// prices[i] = 1
// minPrice = min(7, 1) = 1
// No update to maxProfit since 1 - 1 = 0 is not greater than 0.
// minPrice = 1
// maxProfit = 0
// Iteration 3 (i = 2):

// prices[i] = 5
// minPrice = min(1, 5) = 1
// maxProfit = max(0, 5 - 1) = 4
// minPrice = 1
// maxProfit = 4
// Iteration 4 (i = 3):

// prices[i] = 3
// minPrice = min(1, 3) = 1
// No update to maxProfit since 3 - 1 = 2 is not greater than 4.
// minPrice = 1
// maxProfit = 4
// Iteration 5 (i = 4):

// prices[i] = 6
// minPrice = min(1, 6) = 1
// maxProfit = max(4, 6 - 1) = 5
// minPrice = 1
// maxProfit = 5
// Iteration 6 (i = 5):

// prices[i] = 4
// minPrice = min(1, 4) = 1
// No update to maxProfit since 4 - 1 = 3 is not greater than 5.
// minPrice = 1
// maxProfit = 5
````
 ## Two Sum
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
````javascript
var twoSum = function(nums, target) {
    const hashMap = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (hashMap.hasOwnProperty(complement)) {
            return [hashMap[complement], i];
        }

        hashMap[nums[i]] = i;
    }

    return [];
};

// Example usage:
let nums = [2, 7, 11, 15];
let target = 9;
let result = twoSum(nums, target);
console.log(result); // Output: [0, 1]

// Given the input array [2, 7, 11, 15] and target 9:
// Initial State:
// hashMap = {}
// Iteration 1 (i = 0):
// nums[i] = 2
// complement = 9 - 2 = 7
// hashMap does not contain 7
// Store 2 in hashMap: hashMap = {2: 0}
// Iteration 2 (i = 1):

// nums[i] = 7
// complement = 9 - 7 = 2
// hashMap contains 2 (index 0)
// Return [0, 1]
// Thus, the function twoSum(nums, target) correctly outputs [0, 1],
//  indicating that the numbers at indices 0 and 1 add up to the target 9
````
### Two Sum - II
```javascript
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];

        if (sum === target) {
            return [left + 1, right + 1]; // Return 1-based indices
        } else if (sum < target) {
            left++; // Move the left pointer to the right
        } else {
            right--; // Move the right pointer to the left
        }
    }

    return [];
};

// Example usage:
let numbers = [2, 7, 11, 15];
let target = 9;
let result = twoSum(numbers, target);
console.log(result); // Output: [1, 2]

Given the input array [2, 7, 11, 15] and target 9:

// Initial State:

// left = 0
// right = 3
// Iteration 1:

// sum = numbers[0] + numbers[3] = 2 + 15 = 17
// sum (17) is greater than target (9), so move the right pointer to the left:
// right = 2
// Iteration 2:

// sum = numbers[0] + numbers[2] = 2 + 11 = 13
// sum (13) is greater than target (9), so move the right pointer to the left:
// right = 1
// Iteration 3:

// sum = numbers[0] + numbers[1] = 2 + 7 = 9
// sum (9) equals target (9), so return [left + 1, right + 1] = [1, 2]
// Thus, the function twoSum(numbers, target) correctly outputs [1, 2], 
// indicating that the numbers at indices 1 and 2 (1-based) add up to the target 
```
## 3sum
// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

```javascript
var threeSum = function(nums) {
    nums.sort((a, b) => a - b); // Step 1: Sort the array
    const result = [];
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicate elements
        
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                
                // Skip duplicates for left and right pointers
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                
                left++;
                right--;
            } else if (sum < 0) {
                left++; // Move the left pointer to the right
            } else {
                right--; // Move the right pointer to the left
            }
        }
    }
    
    return result;
};

// Example usage:
let nums = [-1, 0, 1, 2, -1, -4];
let result = threeSum(nums);
console.log(result); // Output: [[-1, -1, 2], [-1, 0, 1]]
Example Walkthrough
// Given the input array [-1, 0, 1, 2, -1, -4]:

// Sorted Array:

// [-4, -1, -1, 0, 1, 2]
// Iteration 1 (i = 0):

// Fixed element: -4
// left = 1, right = 5
// Sum: -4 + (-1) + 2 = -3 (Move left pointer to the right)
// Sum: -4 + 0 + 2 = -2 (Move left pointer to the right)
// Sum: -4 + 1 + 2 = -1 (Move left pointer to the right)
// Iteration 2 (i = 1):

// Fixed element: -1
// left = 2, right = 5
// Sum: -1 + (-1) + 2 = 0 (Add [-1, -1, 2] to result)
// Move left pointer to avoid duplicates: left = 3
// Move right pointer to avoid duplicates: right = 4
// Sum: -1 + 0 + 1 = 0 (Add [-1, 0, 1] to result)
// Move left pointer: left = 4
// Move right pointer: right = 3
// Iteration 3 (i = 2):

// Fixed element: -1 (skip because it's the same as the previous element)
// Iteration 4 (i = 3):

// Fixed element: 0
// left = 4, right = 5
// Sum: 0 + 1 + 2 = 3 (Move right pointer to the left)
// The result will be [[ -1, -1, 2], [ -1, 0, 1 ]].
```
## Container With Most Water
![image](https://github.com/user-attachments/assets/022cc473-54d3-4ae1-9975-5e35fca8ad3b)

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
In this case, the max area of water (blue section) the container can contain is 49.
```javascript
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        const width = right - left;
        const minHeight = Math.min(height[left], height[right]);
        const currentArea = width * minHeight;

        maxWater = Math.max(maxWater, currentArea);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
};

// Example usage:
let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let result = maxArea(height);
console.log(result); // Output: 49

// Given the input array [1, 8, 6, 2, 5, 4, 8, 3, 7]:

// Initial State:

// left = 0
// right = 8
// maxWater = 0
// Iteration 1:

// width = 8 - 0 = 8
// minHeight = Math.min(1, 7) = 1
// currentArea = 8 * 1 = 8
// maxWater = Math.max(0, 8) = 8
// Move left to the right: left = 1
// Iteration 2:

// width = 8 - 1 = 7
// minHeight = Math.min(8, 7) = 7
// currentArea = 7 * 7 = 49
// maxWater = Math.max(8, 49) = 49
// Move right to the left: right = 7
// Iteration 3:

// width = 7 - 1 = 6
// minHeight = Math.min(8, 3) = 3
// currentArea = 6 * 3 = 18
// maxWater = Math.max(49, 18) = 49
// Move right to the left: right = 6
// Iteration 4:

// width = 6 - 1 = 5
// minHeight = Math.min(8, 8) = 8
// currentArea = 5 * 8 = 40
// maxWater = Math.max(49, 40) = 49
// Move right to the left: right = 5
// Iteration 5:

// width = 5 - 1 = 4
// minHeight = Math.min(8, 4) = 4
// currentArea = 4 * 4 = 16
// maxWater = Math.max(49, 16) = 49
// Move right to the left: right = 4
// Iteration 6:

// width = 4 - 1 = 3
// minHeight = Math.min(8, 5) = 5
// currentArea = 3 * 5 = 15
// maxWater = Math.max(49, 15) = 49
// Move right to the left: right = 3
// Iteration 7:

// width = 3 - 1 = 2
// minHeight = Math.min(8, 2) = 2
// currentArea = 2 * 2 = 4
// maxWater = Math.max(49, 4) = 49
// Move right to the left: right = 2
// Iteration 8:

// width = 2 - 1 = 1
// minHeight = Math.min(8, 6) = 6
// currentArea = 1 * 6 = 6
// maxWater = Math.max(49, 6) = 49
// Move right to the left: right = 1
// The loop ends because left is no longer less than right. 
// The function returns 49, which is the maximum area that can be formed.
```
## Verifying an Alien Dictionary
// In an alien language, surprisingly, they also use English lowercase letters, 
// but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

// Given a sequence of words written in the alien language, and the order of the alphabet,
// return true if and only if the given words are sorted lexicographically in this alien language.
// Example 1:
// Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.

 ```javascript
var isAlienSorted = function(words, order) {
    // Create a map of character to its order in the alien dictionary
    const orderMap = {};
    for (let i = 0; i < order.length; i++) {
        orderMap[order[i]] = i;
    }

    // Function to compare two words based on the alien dictionary order
    const compare = (word1, word2) => {
        const len = Math.min(word1.length, word2.length);
        for (let i = 0; i < len; i++) {
            if (word1[i] !== word2[i]) {
                return orderMap[word1[i]] - orderMap[word2[i]];
            }
        }
        // If we reach here, the words are equal up to the length of the shorter word
        return word1.length - word2.length;
    };

    // Compare each word with the next one in the list
    for (let i = 0; i < words.length - 1; i++) {
        if (compare(words[i], words[i + 1]) > 0) {
            return false;
        }
    }

    return true;
};

// Example usage:
let words = ["hello", "leetcode"];
let order = "hlabcdefgijkmnopqrstuvwxyz";
let result = isAlienSorted(words, order);
console.log(result); // Output: true

words = ["word", "world", "row"];
order = "worldabcefghijkmnpqstuvxyz";
result = isAlienSorted(words, order);
console.log(result); // Output: false

Example Walkthrough
// Given the input ["hello", "leetcode"] and order "hlabcdefgijkmnopqrstuvwxyz":

// Create Order Map:

// {'h': 0, 'l': 1, 'a': 2, ..., 'z': 25}
// Compare "hello" and "leetcode":

// Compare h (0) with l (1): 0 - 1 = -1 (correct order)
// Given the input ["word", "world", "row"] and order "worldabcefghijkmnpqstuvxyz":

// Create Order Map:

// {'w': 0, 'o': 1, 'r': 2, ..., 'z': 25}
// Compare "word" and "world":

// Compare w (0) with w (0): continue
// Compare o (1) with o (1): continue
// Compare r (2) with r (2): continue
// Compare d (3) with l (5): 3 - 5 = -2 (correct order)
// Compare "world" and "row":

// Compare w (0) with r (2): 0 - 2 = -2 (incorrect order)
// Since the second comparison fails, the function returns false.
```
## Trapping Rain Water
 ```javascript
function trap(height) {
    const n = height.length;
    if (n === 0) return 0; // Edge case: empty array

    // Step 1: Initialize the left_max and right_max arrays
    const left_max = new Array(n).fill(0);
    const right_max = new Array(n).fill(0);

    // Step 2: Fill the left_max array
    left_max[0] = height[0]; // The first element is just its height
    for (let i = 1; i < n; i++) {
        left_max[i] = Math.max(left_max[i - 1], height[i]);
    }

    // Step 3: Fill the right_max array
    right_max[n - 1] = height[n - 1]; // The last element is just its height
    for (let i = n - 2; i >= 0; i--) {
        right_max[i] = Math.max(right_max[i + 1], height[i]);
    }

    // Step 4: Calculate the total amount of trapped water
    let totalWater = 0;
    for (let i = 0; i < n; i++) {
        // The amount of water above the current bar is the minimum of left_max and right_max minus the bar's height
        const waterAtCurrentBar = Math.min(left_max[i], right_max[i]) - height[i];
        totalWater += waterAtCurrentBar; // Accumulate the total water
    }

    return totalWater; // Return the total amount of trapped water
}

// Example usage
const height = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap(height)); // Output: 6
```
![image](https://github.com/user-attachments/assets/90fc0309-b565-4cb8-afd5-f72d7c6eaa7d)
