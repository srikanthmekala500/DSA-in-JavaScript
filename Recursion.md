## JavaScript Recursion
Recursion is a programming technique where a function calls itself repeatedly to solve a problem
Recursion in JavaScript is a powerful technique where a function calls itself to solve smaller instances of the same problem until it reaches a base case. Understanding recursion is essential for solving problems where the solution can be built off simpler versions of the same problem.
## Basic Example: Factorial Calculation
## Factorial of a Number
Base Case: If 
𝑛
n is 0, the function returns 1.
Recursive Case: If 
𝑛
n is greater than 0, the function calls itself with 
𝑛
−
1
n−1 and multiplies the result by 
𝑛
n.
```JavaScript
function factorial(n) {
    // Base case: factorial of 0 is 1
    if (n === 0) {
        return 1;
    }
    
    // Recursive case: n! = n * (n-1)!
    return n * factorial(n - 1);
}
console.log(factorial(0)); // Output: 1
console.log(factorial(1)); // Output: 1
console.log(factorial(5)); // Output: 120 (5 * 4 * 3 * 2 * 1)
console.log(factorial(10)); // Output: 3628800 (10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1)
```
## Sum of Array
```JavaScript
function sumOfArrays(arr, k) {
    let sum = 0;
    // Loop through the first k elements of the array
    for (let i = 0; i < k; i++) {
        sum += arr[i];
    }
    return sum;
}

// Example usage
console.log(sumOfArrays([1, 2, 3, 4, 5], 5)); // Output: 15 (1 + 2 + 3 + 4 + 5 = 15)
console.log(sumOfArrays([10, -5, 7, 3, -1], 3)); // Output: 12 (10 + (-5) + 7 = 12)
````
## Fibonacci Number
```JavaScript
function fibo(n){
    if(n < 2){
        return n;
    }
    return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(5));
```
## Check whether a string is palindrome or not
```JavaScript
function isPalindrome(str) {
    // Normalize the string: convert to lowercase and remove non-alphanumeric characters
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Initialize pointers
    let left = 0;
    let right = str.length - 1;
    
    // Compare characters from both ends towards the center
    while (left < right) {
        if (str[left] !== str[right]) {
            return false; // Characters don't match, not a palindrome
        }
        left++;
        right--;
    }
    
    return true; // All characters matched, it's a palindrome
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("")); // Output: true (empty string is considered a palindrome)
```
## Create pow(x, n) function which returns x^n
Exponentiation by Squaring: This is where let half = pow(x, Math.floor(n / 2)); comes into play:

 
* Recursive Approach
```JavaScript
function pow(x, n) {
    if (n === 0) {
        return 1;
    }
    
    if (n < 0) {
        return 1 / pow(x, -n);
    }
    
    let half = pow(x, Math.floor(n / 2));

    let result = half * half;
    
    if (n % 2 !== 0) {
        result *= x;
    }
    
    return result;
}

// Example usage
console.log(pow(2, 3)); // Output: 8 (2^3 = 8)
console.log(pow(3, 4)); // Output: 81 (3^4 = 81)
console.log(pow(2, -3)); // Output: 0.125 (2^-3 = 1/2^3 = 1/8 = 0.125)
/////////////////
function pow(x, n) {
    if (n === 0) return 1; // Base case: x^0 = 1

    if (n < 0) {
        x = 1 / x; // Convert x to its reciprocal
        n = -n;   // Make n positive
    }

    function fastPow(x, n) {
        if (n === 0) return 1; // Base case: x^0 = 1

        let half = fastPow(x, Math.floor(n / 2)); // Recursively calculate x^(n/2)
        if (n % 2 === 0) {
            return half * half; // If n is even, x^n = (x^(n/2))^2
        } else {
            return half * half * x; // If n is odd, x^n = (x^(n/2))^2 * x
        }
    }

    return fastPow(x, n);
}

// Example usage:
console.log(pow(2, 10)); // Output: 1024
console.log(pow(2, -2)); // Output: 0.25
console.log(pow(3, 5));  // Output: 243



```
## Create a function which returns the sum of digits of a number (e.g., sumOfDigits(453) is 12)
```JavaScript

function sumOfDigits(num) {
    let sum = 0;
    
    // Handle negative numbers by taking absolute value
    num = Math.abs(num);

// console.log(Math.floor(5.95));
    // Expected output: 5

    while (num > 0) {
        sum += num % 10; // Add the last digit to sum
        num = Math.floor(num / 10); // Remove the last digit
    }
    
    return sum;
}

// Example usage
console.log(sumOfDigits(453)); // Output: 12 (4 + 5 + 3 = 12)
console.log(sumOfDigits(123)); // Output: 6 (1 + 2 + 3 = 6)
console.log(sumOfDigits(-456)); // Output: 15 (4 + 5 + 6 = 15)
```
## Create a function which returns the number of digits in a number (e.g., countDigits(453) is 3)
```JavaScript
function countDigits(num) {
    // Convert number to string and handle negative numbers
    num = Math.abs(num).toString();
    
    // Return the length of the string (number of digits)
    return num.length;
}

// Example usage
console.log(countDigits(453)); // Output: 3
console.log(countDigits(12345)); // Output: 5
console.log(countDigits(-789)); // Output: 3
console.log(countDigits(0)); // Output: 1 (single digit for zero)
```
## Create a function to find the LCM of two numbers
![image](https://github.com/srikanthmekala500/-ECOMMERCE/assets/125475567/2764bbb8-bf95-417e-ba50-644531ffabee)
![image](https://github.com/user-attachments/assets/504caef1-2921-4214-8968-992259700ae1)
![image](https://github.com/user-attachments/assets/68172ea1-aec6-4b38-b3f2-29175d964285)


```JavaScript
// Function to compute GCD (Greatest Common Divisor) using Euclidean algorithm
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Function to compute LCM (Least Common Multiple) using GCD
function lcm(a, b) {
    // Calculate the absolute values to handle negative numbers
    let absA = Math.abs(a);
    let absB = Math.abs(b);
    
    // Calculate LCM using the formula: LCM(a, b) = abs(a * b) / GCD(a, b)
    return Math.abs(absA * absB) / gcd(absA, absB);
}

// Example usage
console.log(lcm(12, 15)); // Output: 60 (LCM of 12 and 15)
console.log(lcm(8, 10)); // Output: 40 (LCM of 8 and 10)
console.log(lcm(5, 7)); // Output: 35 (LCM of 5 and 7)
console.log(lcm(-6, 10)); // Output: 30 (LCM of -6 and 10)
 
```
![image](https://github.com/srikanthmekala500/-ECOMMERCE/assets/125475567/af2c8cda-1af3-4d66-b39f-af7d82227f35)

## Create a function to find the GCD of two numbers
![image](https://github.com/srikanthmekala500/-ECOMMERCE/assets/125475567/24be6512-8ce5-45a2-b5e0-ab3ac4b5fb5c)
```JavaScript
function gcd(a, b) {
    // Using Euclidean algorithm
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return Math.abs(a); // Return the absolute value to handle negative numbers
}

// Example usage
console.log(gcd(12, 15)); // Output: 3 (GCD of 12 and 15)
console.log(gcd(8, 10)); // Output: 2 (GCD of 8 and 10)
console.log(gcd(5, 7)); // Output: 1 (GCD of 5 and 7)
console.log(gcd(0, 7)); // Output: 7 (GCD of 0 and 7 is 7)
console.log(gcd(-6, 10)); // Output: 2 (GCD of -6 and 10)
```
## Create a function to reverse a string

```JavaScript
function reverseString(str) {
    // Split the string into an array of characters, reverse the array, and join it back into a string
    return str.split('').reverse().join('');
}

// Example usage
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"
console.log(reverseString("12345")); // Output: "54321"
```
