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
