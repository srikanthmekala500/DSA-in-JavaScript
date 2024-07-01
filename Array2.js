// Map in JavaScript
const employees = [
    { name: 'John', age: 32 },
    { name: 'Sarah', age: 28 },
    { name: 'Michael', age: 40 },
];

const employeesName = employees.map(employee => employee.name);
console.log(myEmployeesName); // ["John", "Sarah", "Michael"]


// Polyfill of map()
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

// Filter In JavaScript
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
// Reduce in JavaScript
const orders = [
    { product: 'iPhone', price: 999, quantity: 2 },
    { product: 'Samsung Galaxy', price: 899, quantity: 1 },
    { product: 'Google Pixel', price: 799, quantity: 3 },
];

const totalAmount = orders.reduce(function (accumulator, order) {
    return accumulator + order.price * order.quantity;
}, 0);

console.log(totalAmount); // 5294

// Polyfill of reduce()
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


// Question 1: Find the longest word length
const words = ['apple', 'banana', 'cherry', 'dragonfruit', 'elderberry'];

const longestWordLength = words.reduce((maxLength, word) => {
    const currentLength = word.length;
    return currentLength > maxLength ? currentLength : maxLength;
}, 0);

console.log(longestWordLength); // Output: 11

// Question 2: Find the longest word
const longestWord = words.reduce((longestWord, word) => {
    return word.length > longestWord.length ? word : longestWord;
}, "");

console.log(longestWord); // Output: 'dragonfruit'


// Question 3: Calculate the factorial of the largest number in the array
const numbers = [5, 2, , 4, 3];

const largestFactorial = numbers.reduce((largest, num) => {
    const currentFactorial = Array
    .from({ length: num })
    .map((_, i) => i + 1)
    .reduce((fact, val) => fact * val, 1);

    return currentFactorial > largest ? currentFactorial : largest;
}, 1);

console.log(largestFactorial);// Output: 40320 (8!)


// Question 4: Calculate the average score of students who scored above 90
const students = [
    { name: 'John', score: 85 },
    { name: 'Sarah', score: 92 },
    { name: 'Michael', score: 88 },
    { name: 'Emma', score: 95 },
    { name: 'Daniel', score: 90 },
];

const above90StudentsAverage = students
    .filter((student) => student.score > 90)
    .reduce((acc, student, i, arr) => acc + student.score / arr.length, 0);

console.log(above90StudentsAverage); // Output: 93.5 (average of 95 and 92)

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

// Question 6: Capitalize the first letter of each word in the array


const strings = ['hello world', 'i am openai', 'welcome to javascript'];

// Function to capitalize the first letter of each word
const capitalizeWords = (str) => {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

// Capitalize each string in the array
const capitalizedStrings = strings.map(capitalizeWords);

console.log(capitalizedStrings);



///////////////////////////

// Question 7: Majority Element
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

//   Question 8 :Squares of a Sorted Array
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

// Question 9 : Find Pivot Index
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

function Pivot (index){

    // initialize the sums, 0 because we don't know the sums yet.

    let totalSum = 0; 
    let leftSum = 0; 

    // now let's calculate the total sum

    nums.forEach((element) => totalSum += element);

/* 
now we have the sum, so we want to check for the condition.
but before that, we need to loop through each element in the array.
*/

    for(let e=0; e<nums.length; e++){
        if(totalSum - leftSum - index[e] === leftSum){
        return e;
        }
        leftSum += index[e]
    }
    return -1;
}



// Question 10  : Move All Zeros in an Array to End of the Array
// A JavaScript program to move all zeroes at the end of array 

// Function which pushes all zeros to end of an array. 
function pushZerosToEnd(arr, n) 
{ 
	let count = 0; // Count of non-zero elements 

	// Traverse the array. If element encountered is non- 
	// zero, then replace the element at index 'count' 
	// with this element 
	for (let i = 0; i < n; i++) 
		if (arr[i] != 0) 
			arr[count++] = arr[i]; // here count is 
								// incremented 

	// Now all non-zero elements have been shifted to 
	// front and 'count' is set as index of first 0. 
	// Make all elements 0 from count to end. 
	while (count < n) 
		arr[count++] = 0; 
} 

// Driver code 
	let arr = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9]; 
	let n = arr.length; 
	pushZerosToEnd(arr, n); 
	document.write("Array after pushing all zeros to end of array :<br>"); 
	for (let i = 0; i < n; i++) 
		document.write(arr[i] + " "); 

  // Question 11  :Max Consecutive Ones

    var findMaxConsecutiveOnes = function(nums) {
        let largest = 0;
        let current = 0;
        for (let i = 0; i<nums.length; i++) {
            nums[i] === 0 ? current = 0 : current++;
            if (current > largest) largest = current;
        };
        return largest;
    };
 

