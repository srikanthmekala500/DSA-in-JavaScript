1) Sum of all natural numbers from 1 to n
2)  Sum of digits of a number
3)  Count the number of digits of a number
4)  Check if a number is palindrome
5)  Find nth Fibonacci number
6)  Find nth Fibonacci number
7)  Missing Number in an Array
8)  detect squares
9)  Multiply Strings
10)  Pow(x, n)
11)  Plus One
12)  Set Matrix Zeroes
13)  Spiral Matrix


## Question 1: Sum of all natural numbers from 1 to n
 ```javascript
function sumOfNaturalNumber(num){
    let sum = 0;
    for(let i=1; i<=num; i++){
        sum = sum + i;
    }
    return sum;
}

console.log(sumOfNaturalNumber(5)); // 15  = 1+2+3+4+5
console.log(sumOfNaturalNumber(10)); // 55
console.log(sumOfNaturalNumber(8)); // 36
```

## Question 2: Sum of digits of a number
```javascript
function sumOfDigits(num){
    let sum = 0;
    while(num > 0){
        sum += num%10;
        num = Math.floor(num / 10);
    }
    return sum;
}

console.log(sumOfDigits(1287)); // 18
```
## Question 3: Count the number of digits of a number
```javascript
function countDigits(num){
    num = Math.abs(num);
    let count = 0;
    do {
        count++;
        num = Math.floor(num / 10);
    } while (num > 0);
    return count;
}

console.log(countDigits(121)); // 3
console.log(countDigits(-1211413131)); // 10
```

##  Question 4: Check if a number is palindrome
```javascript
let isPalindrome = function(x) {
    let copyNum = x, reverseNum = 0;

    while(copyNum > 0){
        const lastDigit = copyNum % 10;
        reverseNum = reverseNum * 10 + lastDigit;
        copyNum = Math.floor(copyNum / 10);
    }

    return x === reverseNum;
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(1234)); // false
```
## Question 5: Find nth Fibonacci number
```javascript
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.

let fib = function(n) {
    if(n < 2){
        return n;
    }

    let prev = 0, curr = 1, next;
    for(let i=2; i<= n; i++){
        next = prev + curr;
        prev = curr;
        curr = next;
    }
    return next;
};
  
// Fibonacci Sequence: 0 1 1 2 3 5 8...
console.log(fib(5)); // 5
console.log(fib(10)); // 55
```
## Question 6: Missing Number in an Array
```javascript
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

let missingNumbers = function(nums) {
    let sum = 0;
    for(let i=0; i<nums.length; i++){
        sum += nums[i];
    }
    return nums.length*(nums.length+1)/2 - sum;
};

// One Line Solution: 
let missingNumber = (nums) => nums.length*(nums.length+1)/2 - nums.reduce((acc, num) => num + acc);

console.log(missingNumber([3,0,1])); // 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // 8
```
## Multiply Strings

```javascript
function multiply(num1, num2) {
    if (num1 === "0" || num2 === "0") return "0";

    const result = Array(num1.length + num2.length).fill(0);

    for (let i = num1.length - 1; i >= 0; i--) {
        for (let j = num2.length - 1; j >= 0; j--) {
            const mul = (num1[i] - '0') * (num2[j] - '0');
            const sum = mul + result[i + j + 1];
            result[i + j + 1] = sum % 10;
            result[i + j] += Math.floor(sum / 10);
        }
    }

    while (result[0] === 0) {
        result.shift();
    }

    return result.join('');
}

// Example usage:
console.log(multiply("123", "456")); // Output: "56088"
```
## Pow(x, n)
```javascript
function pow(x, n) {
    // Handle the base case of n being zero
    if (n === 0) return 1;

    // Handle the case of n being negative
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    // Recursive function for Exponentiation by Squaring
    const half = pow(x, Math.floor(n / 2));

    if (n % 2 === 0) {
        return half * half;
    } else {
        return half * half * x;
    }
}

// Example Usage:
console.log(pow(2, 10));  // Output: 1024
console.log(pow(2, -2));  // Output: 0.25
console.log(pow(3, 5));   // Output: 243
```
## Plus One

```javascript
function plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
}

// Example usage:
console.log(plusOne([1, 2, 3])); // Output: [1, 2, 4]
console.log(plusOne([9, 9, 9])); // Output: [1, 0, 0, 0]
```
## Set Matrix Zeroes

```javascript
function setZeroes(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let firstRowZero = false;
    let firstColZero = false;

    // Determine if the first row or first column needs to be zeroed
    for (let i = 0; i < rows; i++) {
        if (matrix[i][0] === 0) {
            firstColZero = true;
            break;
        }
    }

    for (let j = 0; j < cols; j++) {
        if (matrix[0][j] === 0) {
            firstRowZero = true;
            break;
        }
    }

    // Use first row and column to mark zero rows and columns
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // Set matrix cells to zero based on marks
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // Handle the first row and column separately
    if (firstRowZero) {
        for (let j = 0; j < cols; j++) {
            matrix[0][j] = 0;
        }
    }

    if (firstColZero) {
        for (let i = 0; i < rows; i++) {
            matrix[i][0] = 0;
        }
    }
}

// Example usage:
const matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
];
setZeroes(matrix);
console.log(matrix); // Output: [[1, 0, 1], [0, 0, 0], [1, 0, 1]]
```
