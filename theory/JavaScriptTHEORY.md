1) ## what is the javascript ?
    JavaScript is a **scripting language and is used for client-side and server-side development**. The JavaScript code can be inserted into HTML pages 
    that can be understood and executed by web browsers while also supporting object-oriented programming abilities.
    -  JavaScript is a **prototype-based language**. This means that objects in JavaScript are created from other objects, rather than from classes.
    -  **Prototypes**: JavaScript is a prototype-based language, which means that it uses prototypes to inherit properties and methods from one object to 
    another.
      JavaScript is a **dynamic language**. This means that variables in JavaScript can change type at runtime.
    - JavaScript is a **single-threaded language**. This means that it can only execute one task at a time.
2) ##  What are the various data types that exist in JavaScript?
      **primitive data type**s are basic types that store single values, while
      **non-primitive data types** are more complex and can store multiple values
    Here's a brief overview of the main data types in JavaScript:
    - **Number**: This data type is used to represent numerical values. Numbers can be integers (whole numbers) or floating-point numbers (decimal numbers).
    - **String**: This data type is used to represent textual data. Strings are sequences of characters enclosed in quotes (either single or double).
    - **Boolean**: This data type is used to represent logical values. Boolean values can be either true or false.
    - **Undefined**: This data type represents a variable that has not been assigned a value.
    - **Null**: This data type represents a deliberate absence of any object value.
    - **Object**: This data type represents complex data structures, including arrays, functions, and objects.
    - **Symbol**: This data type represents unique values that can be used as object keys.
    -  **BigInt** Type
       The BigInt data type in javascript is used to represent numeric values that exceed the largest safe integer limit. It is basically used to represent 
         numbers greater than 
    The **JavaScript ES6 introduced a new primitive data type called Symbol**. Symbols are immutable (cannot be changed) and are unique. For example,
    
    ```javascript
    // two symbols with the same description
    const value1 = Symbol('hello');
    const value2 = Symbol('hello');
    console.log(value1 === value2); // false
    ```
    ![image](https://github.com/user-attachments/assets/2777c9e5-9e80-42c4-aeec-68c228ec110b)
 ## 3) Undefined data type in JavaScript ?
 It is called undefined if you declare a **variable but don't assign the value.** The variable has no value, but it will have later on. 
 ## 4) Null in JavaScript ?
 if a variable can **not contain a value** other than null, it is called a null datatype.
## 5) Difference between var, let and const keywords in JavaScript
 **Function scope:** Variables that are declared inside a function are called local variables and in the function scope. Local variables are accessible 
                     anywhere inside the function. 
 **Block scope:** Variable that is declared inside a specific block & can't be accessed outside of that block.
 
**JavaScript var keyword:** The var is the oldest keyword to declare a variable in JavaScript.

**Scope: Global scoped or function scoped.** The scope of the var keyword is the global or function scope. It means variables defined outside the function 
  can be accessed globally, and variables defined inside a particular function can be accessed within the function.  
  
**JavaScript let keyword:** The let keyword is an improved version of the var keyword. 

**Scope:** block scoped: The scope of a let variable is only block scoped. It can’t be accessible outside the particular block ({block}). Let’s see the below example.

**const keyword in JavaScript:** The const keyword has all the properties that are the same as the let keyword, except the user cannot update it.

**Scope:** block scoped: When users declare a const variable, they need to initialize it, otherwise, it returns an error. The user cannot update the const variable once it is declared
![image](https://github.com/user-attachments/assets/ba80573b-1a8b-4c2d-8e4f-63d26d62c17d)
**Hoisting**
```javascript
x = 8
console.log(x)
let x //ReferenceError: x is not defined
```
**Reassign** 
```javascript
const v1 = 30
v1 = 30
console.log(v1) //30
 ```
**Redeclaration**  
```javascript
let v1 = 1
let v1 = 30
console.log(v1) //SyntaxError: Identifier 'v1' has already been declared
``` 
## what is the different between the == and === ?
The == operator compares the values of two operands and return true if they are equal ,while  performing type coercion  if necessary

coercion means బలవంతం

// consloe.log(2=="2") //true

The ===operator compares the values of two operands but it dose not perform type coercion .it only returns true  if the values are of  the same data type and have the same value 

//consloe.log(2 ==="2") //fasle 

//consloe.log(2 ===2) //true 
## what is the ECMAScript  ? What is ES6?
JavaScript ES6 (also known as ECMAScript 2015 or ECMAScript 6) is the newer version of JavaScript that was introduced in 2015.

ECMAScript is the standard that **JavaScript programming language uses**. ECMAScript provides the specification on how **JavaScript programming language should work**

ECMAScript (/ˈɛkməskrɪpt/; ES) is a JavaScript standard intended to ensure the interoperability of web pages across different web browsers. It is standardized by Ecma International in the document ECMA-262. ECMAScript. Paradigm. Multi-paradigm: prototype-based, functional, imperative.

## Why Should I Learn ES6?
**React uses ES6, and you should be familiar with some of the new features like**:

- Classes
- Arrow Functions
- Variables (let, const, var)
- Array Methods like .map()
- Destructuring
- Modules
- Ternary Operator
- Spread Operator
## What is NaN property in JavaScript?
NaN property represents the “Not-a-Number” value. It indicates a value that is not a legal number.

typeof of NaN will return a Number.

To check if a value is NaN, we use the isNaN() function,
## What is typeof operator?
- In JavaScript, the typeof operator returns the data type of its operand in the form of a string. The operand can be any object, function, or variable.
```javascript

//Example:
console.log(typeof undeclaredVariable); // "undefined"

let a;
console.log(typeof a); // "undefined"

const b = "Hello World";
console.log(typeof b); // "string"

const c = 42;
console.log(typeof c); // "number"

const d = 3.1415;
console.log(typeof d); // "number"

const e = true;
console.log(typeof e); // "boolean"

const f = null;
console.log(typeof f); // "object"

const g = undefined;
console.log(typeof g); // "undefined"

const h = { b: "c" };
console.log(typeof h); // "object"

const i = function () {
  return 10;
};

console.log(typeof i); // "function"
```
## What is an Unary operator?
- The unary(+) operator is used to convert a variable to a number. If the variable cannot be converted, it will still become a number but with the value NaN.

```javascript
Example:

var x = "100";
var y = +x;
console.log(typeof x, typeof y); // string, number

var a = "Hello";
var b = +a;
console.log(typeof a, typeof b, b); // string, number, NaN
```
## What are undeclared and undefined variables?
- ****Undeclared** variables are those that do not exist in a program and are not declared**. 
If the program tries to read the value of an undeclared variable, then a **runtime error is encountered**.

- **Undefined variables are those that are declared in the program but have not been given any value.** 
If the program tries to read the value of an undefined variable, an undefined value is returned.

## Explain Implicit Type Coercion in javascript.
- Implicit type coercion in javascript is the automatic conversion of value from one data type to another.
- It takes place when the operands of an expression are of different data types.

**String coercion**
- String coercion takes place while using the ‘ + ‘ operator. When a number is added to a string, the number type is always converted to the string type.
```javascript

var x = 3;
var y = "3";
x + y // Returns "33" 

var x = 24;
var y = "Hello";
x + y   // Returns "24Hello";
```
- Note - ‘ + ‘ operator when used to add two numbers, outputs a number. The same ‘ + ‘
 operator when used to add two strings, outputs the concatenated string:
```javascript
var name = "Vivek";
var surname = " Bisht";
name + surname     // Returns "Vivek Bisht" 
```
- Type coercion also takes place when using the ‘ - ‘ operator,
- but the difference while using ‘ - ‘ operator is that, a string is converted to a number and then subtraction takes place.
```javascript
var x = 3;
Var y = "3";
x - y    //Returns 0 since the variable y (string type) is converted to a number type
```
**Logical operators:**
- Logical operators in javascript, unlike operators in other programming languages, do not return true or false. 
They always return one of the operands.

**OR ( | | ) operator -** If the first value is truthy, then the first value is returned. Otherwise,
always the second value gets returned.

**AND( && ) operator -** If both the values are truthy, always the second value is returned.
-If the first value is falsy then the first value is returned or if the second value is falsy then the second value is returned.

```javascript
var x = 220;
var y = "Hello";
var z = undefined;
        
x | | y    // Returns 220 since the first value is truthy
        
x | | z   // Returns 220 since the first value is truthy
        
x && y    // Returns "Hello" since both the values are truthy
        
y && z   // Returns undefined since the second value is falsy
        
if( x && y ){ 
  console.log("Code runs" ); // This block runs because x && y returns "Hello" (Truthy)
}   
        
if( x || z ){
  console.log("Code runs");  // This block runs because x || y returns 220(Truthy)
}
```
## Is javascript a statically typed or a dynamically typed language?
JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

**Dynamically typed language:** These are the **languages that do not require any pre-defined data type for any variable as it is interpreted at runtime by the machine itself.** In these languages, interpreters assign the data type to a variable at runtime depending on its value
**static Typed Languages**
![image](https://github.com/user-attachments/assets/bd17d98f-8125-4797-b674-b1f7487d5af5)
**Dynamic Typed Language**
![image](https://github.com/user-attachments/assets/49869087-ed52-4f7e-b042-f77302144452)
**Note:**
- It's totally the developers responsibility to take care of the variables type and on a safer side use const.

- In dynamically typed language, the type of a variable is checked during **run-time** whereas...
- In statically typed language, the type of a variable is checked during **compile-time.**
## Explain passed by value and passed by reference.
 - In JavaScript, primitive data types are passed by value 
- and non-primitive data types are passed by reference.
## What is Hoisting ? 
-    Hoisting is a JavaScript mechanism where **variables,function declarations and classes are moved to the top of their scope before code execution**. Remember that JavaScript only hoists declarations, not initialisation. Let's take a simple example of variable hoisting,
    
-    However, JavaScript only **hoists declarations, not initializations. That means if a variable is declared and initialized after using it**,
- Types of Hoisting
    **Variable Hoisting** : Only variable declared with **var** is hoisted (not let and const)
    **Function Hoisting** : Only Simple functions is hoisted (not function expressions)
- Variable Hoisting
    Similarly, the variable declarations are also hoisted to the top of their current scope automatically.
    This means that if the variable is declared inside a function block, it will be moved at the top of the function, but if it is declared outside any function it will be moved to top of the script and become globally available. Take a look at the following example, to see how this works:
  ```javascript
      str = "Hello World!";
    alert(str); // Outputs: Hello World!
    var str;
  ```
  However, JavaScript **only hoists declarations, not initializations**. **That means if a variable is declared and initialized after using it**, the value will be **undefined**. For example:
    ```javascript
      alert(str); // Outputs: undefined
    var str;
    str = "Hello World!"
  ```
- Function Hoisting:
   **function declaration is hosited to the top of the scope.**
   ```javascript
            myFunction();
        
        function myFunction(){
        console.log("i am learning hoisting");
        }
        //"i am learning hoisting"
  ```

- Now we will **store function in **variable** then It will treat as variable.

 ```javascript
  myFunction();

var myFunction= function(){
console.log("i am learning hoisting");
}
```
![image](https://github.com/user-attachments/assets/b6b2680e-04e4-46ae-8869-a5721558a9b1)

**This myFunction is considered as a variable and so only declaration is hoisted and as we are trying to execute the function, we are getting myFunction is not a function.**
If we change this to let, we get the same result as variables,
“cannot access myFunction before initialization.”
## What is a Closure?
  -  A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the **lexical     environment**). In other words, **a closure gives you access to an outer function’s scope from an inner function**.
  -  Closures are useful because they let you associate data (the lexical environment) with a function that operates on that data. T**his has obvious parallels to object-oriented programming,** where objects allow you to associate data (the object's properties) with one or more methods.
    ![image](https://github.com/user-attachments/assets/645a2b90-a02c-4570-9882-8f256445f524)
![image](https://github.com/user-attachments/assets/17f47dfb-dee6-4e36-a71d-0cd941638f6c)

- Lexical Scopes 
     - In the example, we saw that the variable of the outer scope is easily accessible to the inner scope. **This is possible because of lexical scoping**. In the above example, the lexical scope of newFunction consists of the lexical scope of demoFunction and the global scope.
     -  In easy terms, **lexical scoping means that inside an inner scope, you can use the variable of the outer scope. It is called lexical scope as the engine determines the scopes during the lexing time**.
## what is web storage ?
- Web storage is an API that provides a mechanism by which browsers can store key/value pairs locally within the user's browser, in a much more intuitive fashion than using cookies.
-  The web storage provides two mechanisms for storing data on the client.
**Local storage**: It stores data for current origin with **no expiration date**.
**Session storage**: It stores data for one session and the **data is lost when the browser tab is closed**.
  - cookies are used when data needs to be sent to a server.
 -  Web storage is used when the server doesn't need to know the data stored
## Here are some differences between cookies and web storage: 
-    **Data size:** Cookies are good for small amounts of data. Web storage is better for larger amounts of data.
-  **Data persistence:** Cookies expire. Web storage data is available any time the user opens the website.
-   **Data access:** Cookies are primarily for reading server-side. Web storage can only be read by the client-side.
-  **Security:** Web storage is more secure.
-  **Website performance:** Web storage doesn't affect website performance
## What is a post message
    Post message is a method that **enables cross-origin communication between Window objects**.(i.e, between a page and a pop-up that it spawned, or between a page and an iframe embedded within it). Generally, scripts on different pages are allowed to access each other if and only if the pages follow same-origin policy(i.e, pages share the same protocol, port number, and host).
## What is a Cookie ?
- A cookie is a **piece of data that is stored on your computer to be accessed by your browser**. Cookies are saved as **key/value pairs**. For example, you can create a cookie named username as below,
- document.cookie = "username=John";
- 
## Why do you need a Cookie ?
 - Cookies are used to remember information about the user profile(such as username). It basically involves two steps,
 - When a user visits a web page, the user profile can be stored in a cookie.
- Next time the user visits the page, the cookie remembers the user profile.

## How do you delete a cookie ?

 -   You can delete a cookie by setting the expiry date as a passed date.
-    You don't need to specify a cookie value in this case. For example, you can delete a username cookie in the current page as below.
    
  -  **document.cookie =
      "username=; expires=Fri, 07 Jun 2019 00:00:00 UTC; path=/;";**
     
    Note: You should define the cookie path option to ensure that you delete the right cookie. Some browsers doesn't allow to delete a cookie unless you specify a path parameter.
    
## What is the main difference between localStorage and sessionStorage ?

  -  LocalStorage is the same as SessionStorage but it **persists the data** even when the **browser is closed and reopened** **(i.e it has **no expiration time**) **
    
 - whereas in **sessionStorage data gets cleared when the page session ends**.
 - 
## How do you access web storage ?

- The Window object implements the **WindowLocalStorage and WindowSessionStorage** objects which has **localStorage(window.localStorage) and sessionStorage(window.sessionStorage)** properties respectively.
 
- These properties create an instance of the Storage object, through which data items can be set, retrieved and removed for a specific domain and storage type (session or local). For example, you can read and write on local storage objects as below

        localStorage.setItem("logo", document.getElementById("logo").value);
        localStorage.getItem("logo")
  
-**Storage event:**

Triggers on **setItem, removeItem, clear calls**.

Contains all the data about the operation (key/oldValue/newValue), the document url and the storage object storageArea.
Triggers on all window objects that have access to the storage except the one that generated it (within a tab for sessionStorage, globally for localStorage).

![image](https://github.com/user-attachments/assets/20e6238b-be08-486c-b17d-d1bda33f290e)

## What do you mean by strict mode in javascript and characteristics of javascript strict-mode?

In JavaScript, **'use strict**'; states that the code should be executed in 'strict mode'. This makes it easier to write good and secure JS code. For example,
- **The strict mode in JavaScript does not allow following things**:
- Use of undefined variables
- Use of reserved keywords as variable or function name
- Duplicate properties of an object
- Duplicate parameters of function
- Assign values to read-only properties
- Modifying arguments object
- Octal numeric literals
- with statement
- eval function to create a variable


- **Duplicate property names of an object:**
  ```javascript
    "use strict";
    var myObj = { myProp: 100, myProp:"test strict mode" }; // error
  ```
- **Duplicate parameters:**
  ```javascript  
    "use strict";
    function Sum(val, val){return val + val }; // error
  ```
- **Assign values to read-only property**
    ```javascript
      "use strict";
    
    var arr = [1 ,2 ,3 ,4, 5];
    arr.length = 10; // error
  ```
 - **Use of reserved keyword as name**:
     ```javascript
      "use strict";
    
    var for = 1; // error
    var if = 1; // error
  ```
- ****Use of undefined variables**** 
     ```javascript
    "use strict";
    
    x = 1; // error
```
 ## What is the difference between slice and splice?
   **slice()**:
   
   -  The slice() method **returns a new array with a copied slice from the original array**.
   -  The first optional argument is the beginning **index and the second optional argument is the ending index** (non-inclusive).
 ```javascript
      let languages = [ "JavaScript", "Python", "Java", "PHP" ];

    languages.slice(1,3); // ["Python", "Java"]
    languages.slice(2); // (from index 2 until the end of the array).
    // ["Java", "PHP"]
    
    console.log(languages); // the original array is not mutated.
    // [ "JavaScript", "Python", "Java", "PHP" ]
```
**splice():**
  -  The splice() method **changes the content of the array in place and can be used to add or remove items from the array**.
  -  
  - When only one argument is provided, all the items after the provided starting index are removed from the array.
  - 
    ![image](https://github.com/user-attachments/assets/b1701598-388a-4069-9ca3-c47dd0adfb41)
    ![image](https://github.com/user-attachments/assets/ea2497ef-eda4-4123-91d9-0ef295f62304)
    ![image](https://github.com/user-attachments/assets/8d6eb936-31a2-4dcb-a7b5-c1081cf759f1)

**Difference:**

    - Slice	 
        1) Doesn't modify the original array(immutable)	 
        2) Returns the subset of original array
        3) Used to pick the elements from array	 
        
 - Splice
 	 1 ) Modifies the original array(mutable)
   
     2 )Returns the deleted elements as array
   
     3)Used to insert or delete elements to/from array
## How do you check whether a string contains a substring?
   There are 3 fastest ways to check whether a string contains a substring or not,

1) **Using RegEx**:

The regular expression test() method checks if a match exists in a string. This method returns true if it finds a match, otherwise, it returns false.
 ```javascript
let str = "JavaScript, Node.js, Express.js, React.js, MongoDB";
let exp1 = /MongoDB/g;
let exp2 = /Ajax/;

exp1.test(str); // true
exp2.test(str); // false
```
2.**Using indexOf**:

The indexOf() method is case-sensitive and accepts two parameters. The first parameter is the substring to search for, and the second optional parameter is the index to start the search from (default index is 0).
 ```javascript
let str = "JavaScript, Node.js, Express.js, React.js, MongoDB";

str.indexOf('MongoDB') !== -1 // true
str.indexOf('PHP') !== -1 // false
str.indexOf('Node', 5) !== -1 // true
```
3. **Using includes**:

The includes() is also case-sensitive and accepts an optional second parameter, an integer which indicates the position where to start searching for.
 ```javascript
let str = "JavaScript, Node.js, Express.js, React.js, MongoDB";

str.includes('MongoDB') // true
str.includes('PHP') // false
str.includes('Node', 5) //true
````
## JavaScript eval() function ? 
    **The eval() function in JavaScript is used to evaluate the expression. It is JavaScirpt's global function, which evaluates the specified string as JavaScript code and executes it.**
    
    The parameter of the eval() function is a string. If the parameter represents the statements, eval() evaluates the statements. If the parameter is an expression, eval() evaluates the expression. If the parameter of eval() is not a string, the function returns the parameter unchanged.
    
    There are some limitations of using the eval() function, such as the eval() function is not recommended to use because of the security reasons. It is not suggested to use because it is slower and makes code unreadable.
    
   the eval() function evaluates JavaScript code represented as a string. The string can be a JavaScript expression, variable, statement, or sequence of statements.
       ```javascript 
           console.log(eval('10 + 20')); // 30
        
        let x = 10;
        let y = 20;
        let z = '50';
        eval('x + y + 1'); // returns 31
        eval(z);           // returns 50
    ```
## Explain arrays in JavaScript?
JavaScript **array is an object that represents a collection of similar type of elements**. It can holds values (of any type) not particularly in named properties/keys, but rather in numerically indexed positions.

**Array.length - 1 is the last element of a zero-indexed array.
  A one element array has a length of 1, 
  but that single element is found at index 0.**
**Example 01: Creating an array**
```javascript 
  // array of numbers
const numbers = [10, 20, 30, 40, 50];

// using new keyword
const numbers = new Array(10, 20, 30, 40, 50);

// array of strings
let fruits = ["Apple", "Orange", "Plum", "Mango"];
```
Example 02: Accessing array elements
```javascript
let fruits = ["Apple", "Orange", "Plum", "Mango"];

fruits[0]; // Apple
fruits[fruits.length - 1] // Mango

// Iterate array elements
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Adding new array elements
let fruits = ["Apple", "Orange", "Plum", "Mango"]; fruits.push("Grapes"); // Adds a new element (Grapes) to fruits
```
## What is the difference between Array and Array of Objects in JavaScript?
- Objects represent a special data type that is mutable and can be used to **store a collection of data** (rather than just a single value). Arrays are a special type of variable that is also mutable and can also be used to**store a list of values.**

**Example: Arrays**
```javascript
const numbers = [10, 20, 30];

// Iterating through loop
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Pop an element from array
numbers.pop();
console.log("after pop(): " + numbers);
```
**Example: Array of Objects**
```javascript
const employees = [
  { id: 101, name: "Sakshi Memon", email: "sakshi.memon@email.com" },
  { id: 102, name: "Subhash Shukla", email: "subhash.shukla@email.com" },
  { id: 103, name: "Mohini Karpe", email: "mohini.karpe@email.com" }
];

// Using DOT notation
console.log(employees[0].name);

// Using delete keyword
delete employees[0];

// Iterating using for..in loop
for (let key in employees) {
  console.log(employees[key]);
}
```
![image](https://github.com/user-attachments/assets/6796ad59-49ea-48b8-89b9-d2b7db8d7efe)

## Different Types of Loops in JavaScript ?
   **Loops are used to execute the same block of code again and again, as long as a certain condition is met.** 
   -The basic idea behind a loop is to automate the repetitive tasks within a program to save the time and effort.
   
-  **while**— loops through a block of code as long as the condition specified evaluates to true.

- **do…while** — loops through a block of code once; then the condition is evaluated. If the condition is true, the statement is repeated as long as the specified condition is true.

- **for** — loops through a block of code until the counter reaches a specified number.

- **for…in** — loops through the properties of an object.

- **for…of** — loops over iterable objects such as arrays, strings, etc.
  
**The while Loop**

    - The while loop loops through a block of code as long as the specified condition evaluates to true. As soon as the condition fails, the loop is stopped. The generic syntax of the while loop is:
  ```javascript
    var i = 1;
while(i <= 5) {    
    document.write("<p>The number is " + i + "</p>");
    i++;
}
```
**The do...while Loop**
   -  The do-while loop is a variant of the while loop, which evaluates the condition at the end of each loop iteration. 
   - With a**do-while** loop the **block of code executed once**, and then the **condition is evaluated**, if the condition is true, the statement is repeated as long as the specified condition evaluated to is true.
```javascript
var i = 1;
do {
    document.write("<p>The number is " + i + "</p>");
    i++;
}
while(i <= 5);
```
**Difference Between while and do...while Loop**

- The while loop differs from the do-while loop in one important way — with a while loop, **the condition to be evaluated is tested at the beginning of each loop iteration**, so if the conditional expression evaluates to false, the loop will never be executed.

- With a do-while loop, on the other hand, **the loop will always be executed once even if the conditional expression evaluates to false**, because unlike the while loop, the condition is evaluated at the end of the loop iteration rather than the beginning.
  
**The for Loop**
  
- The for loop repeats a block of code as long as a certain condition is met. It is typically used to execute a block of code for certain number of times. Its syntax is:
```javascript
   for(initialization; condition; increment) {
    // Code to be executed

}
```
**The parameters of the for loop statement have following meanings:**

- **initialization** — it is used to initialize the counter variables, and evaluated once unconditionally before the first execution of the body of the loop.

- **condition** — it is evaluated at the beginning of each iteration. If it evaluates to true, the loop statements execute. If it evaluates to false, the execution of the loop ends.

- **increment**— it updates the loop counter with a new value each time the loop runs.
```javascript
for(var i=1; i<=5; i++) {
    document.write("<p>The number is " + i + "</p>");
}
```
**The for...in Loop**
- The for-in loop is a special type of a **loop that iterates over the properties of an object**, or the elements of an array.
  
- **Note:** The for-in loop should not be used to iterate over an array where the index order is important. You should better use a for loop with a numeric index.

**The for...of Loop**

- ES6 introduces a new for-of **loop which allows us to iterate over arrays or other iterable objects (e.g. strings) very easily**. Also, the code inside the loop is executed for each element of the iterable object.
```javascript

   // Iterating over array
let letters = ["a", "b", "c", "d", "e", "f"];

for(let letter of letters) {
    console.log(letter); // a,b,c,d,e,f
}

// Iterating over string
let greet = "Hello World!";

for(let character of greet) {
    console.log(character); // H,e,l,l,o, ,W,o,r,l,d,!
}
```
**for...of Loop**
- The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables.
- **for...of loop works only with iterable objects**. In JavaScript, iterables are objects which can be looped over.

- **String, Array, TypedArray, Map, and Set are all built-in iterables**, because each of their prototype objects implements an @@iterator method. So, for...of loop works on the mentioned object types.

  - Object in JavaScript is not iterable by default. So, for...of loop does not work on objects.

In simple words, for...of works with strings and arrays but not with objects.
```javascript
cosnt str = "Hello World";

for(element of str) {
  console.log(element);
}
// H e l l o " " W o r l d
```
**for...in Loop**
- The for...in statement iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.
  
- So, for...of does not work with objects (non iterables), Then how do we loop over keys and values of an object? And the answer is for...in loop.

- for...in works with those properties whose enumerable flag is set to true.

- Enumerable flag for properties created via simple assignment or property initializer are by default true.
  
- Enumerable flag for properties created via Object.defineProperty are by default false.
```javascript
  const student = {
    registration: "123456",
    name: "Sandeep",
    age: 33,
}

for(key in student) {
  console.log(key, student[key]);
}
/*
registration "123465"

name "Sandeep"

age 33
*/
//////////////////
const student = {
    registration: "123456",
    name: "Sandeep",
    age: 33,
}

Objec.defineProperty(student, "marks", {
  value: 98,
  enumerable: false,
})

console.log(student.marks);
// 98

for(key in student) {
  console.log(key, student[key]);
}
/*
registration "123465"

name "Sandeep"

age 33
*/

// marks key does not show up in the for...in loop result.
```
## What are default values in destructuring assignment?
- A variable can be assigned a default value **when the value unpacked from the array or object is undefined during destructuring assignment**. It helps to avoid setting default values separately for each assignment.
- Array Destructuring:
```javascript
const [x = 2, y = 4, z = 6] = [10];

console.log("x: " + x); // 10
console.log("y: " + y); // 4
console.log("z: " + z); // 6
```
- Object Destructuring:
```javascript
const { i = 2, j = 4, k = 6 } = { n: 10 };

console.log("i: " + i); // 2
console.log("j: " + j); // 4
console.log("k: " + k); // 6
```
## When to use reduce(), map(), foreach() and filter() in JavaScript?
- **foreach()**
- 
  -  **The forEach() method is used to loop through each element of an array or object. The forEach() method takes a callback function as an argument. The callback function is invoked for each element of the array or object.**

- The forEach() method is similar to the for loop, but **it does not have a return value**
```javascript
  let numbers = [10, 20, 30];

numbers.forEach(function (number, index) {
  console.log(number + " comes at " + index);
});

// Output
10 comes at 0
20 comes at 1
30 comes at 2
```
- **map()**
- **The map() method is used to loop through each element of an array or object. The map() method takes a callback function as an argument. The callback function is invoked for each element of the array or object.**

- The map() method is similar to the forEach() method,**but it returns a new array.**

- map() like filter() & forEach() takes a callback and run it against every element on the array but **whats makes it unique is it generate a new array based on your existing array.**

- **Like filter(), map() also returns an array. The provided callback to map modifies the array elements and save them into the new array upon completion that array get returned as the mapped array**
  
 ```javascript
  const newArray = originalArray.map((currentValue, index, array) => {
  // return the new value of the current element
});
```
```javascript
const newArray = originalArray.filter((currentValue, index, array) => {
  // return true if the current element should be included in the new array
});
////
let numbers = [10, 20, 30];

let mapped = numbers.map(function (number) {
  return number * 10;
});

console.log(mapped);

// Output
[100, 200, 300]
```
- **reduce()**
- reduce() method of the array object is used to reduce the array to one single value.
- To use the reduce function, you must provide a **callback function that takes two arguments**:
-  the **accumulator** and the current value. The accumulator is the result of the **previous call to the callback function** and
-  the **current value** is the value of the current element in the array.
-   The callback function should return a new value that will be used as the accumulator in the next call to the callback function.
-   **initial value** .
  
  ```javascript
const result = originalArray.reduce((accumulator, currentValue, index, array) => {
  // return the new value of the accumulator
}, initialValue);
`````

```javascript
const result = originalArray.reduce((accumulator, currentValue, index, array) => {
  // return the new value of the accumulator
}, initialValue);


const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // 15
///////////////
const words = ['apple', 'banana', 'apple', 'cherry'];

const frequency = words.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(frequency); // { apple: 2, banana: 1, cherry: 1 }
//////////
const arrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const flattened = arrays.reduce((acc, curr) => acc.concat(curr), []);

console.log(flattened); // [1, 2, 3, 4, 5, 6, 7, 8, 9

```
## What happens if you do not use rest parameter as a last argument?
The rest parameter should be the last argument, as its job is to collect all the remaining arguments into an array.
Example: If you define a function like below it does not make any sense and will throw an SyntaxError.
```javascript
function display(a, ...args, b) {
  console.log(a);
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  console.log(b);
}

display(10, 20, 30, 40, 50);

// Output
SyntaxError: Rest element must be last element
```
