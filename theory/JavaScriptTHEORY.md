https://app.enhancv.com/share/86842f23/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic

## What is difference between process and threads in Node.js?

1. Process:

   -A process is an independent unit of execution with its own memory space. Each time you run a Node.js application, a new process is created. This process is managed by the operating system, and it has its own resources (e.g., memory, CPU time) and can spawn child processes.

Processes are basically the programs that are dispatched from the ready state and are scheduled in the CPU for execution. PCB (Process Control Block) holds the concept of process. A process can create other processes which are known as Child Processes. The process takes more time to terminate and it is isolated means it does not share the memory with any other process.

The process can have the following states new, ready, running, waiting, terminated, and suspended.

2. Thread:

Thread is the segment of a process which means a process can have multiple threads and these multiple threads are contained within a process. A thread has three states: Running, Ready, and Blocked.

The thread takes less time to terminate as compared to the process but unlike the process, threads do not isolate.
 
**Real-time Notification System (Event-driven)**

- A real-time notification system in apps like Facebook or Twitter notifies users about events (new messages, likes, comments) in real-time.

- **Main process:** Listens for incoming events, such as new comments or likes, from users. It can be triggered by HTTP requests or WebSocket events.
 
- **Background threads (via worker threads or child processes):** For notifications that require complex operations (e.g., sending emails, updating databases), these tasks are offloaded to worker threads, ensuring the main thread remains free for handling user interactions.
- 
Example (Node.js for sending notifications in the background):

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
```javascript
    let y;
    console.log(y); // Output: undefined
```
 ## 4) Null in JavaScript ?
 if a variable can **not contain a value** other than null, it is called a null datatype.
 - null: Represents the intentional absence of a value.
   
 Use Cases for null
 
 - Resetting Values: When you want to clear a variable or reset its value
   
     let user = { name: "Alice" };
    user = null; // Reset the user object
   
   console.log(null == undefined); // true
   console.log(null === undefined); // false

## 5) Difference between var, let and const keywords in JavaScript
  - **Function scope:** Variables that are declared inside a function are called local variables and in the function scope. Local variables are accessible 
                     anywhere inside the function. 
  -  **Block scope:** Variable that is declared inside a specific block & can't be accessed outside of that block.
 
  - **JavaScript var keyword:** The **var** is the oldest keyword to declare a variable in JavaScript.

  - **Scope: Global scoped or function scoped.** The scope of the **var keyword is the global or function scope**. It means variables defined outside the function 
  can be accessed globally, and variables defined inside a particular function can be accessed within the function.  
  
  - **JavaScript let keyword:** The **let** keyword is an improved version of the var keyword. 

  - **Scope:** block scoped: The scope of a **let variable is only block scoped**. It can’t be accessible outside the particular block ({block}). Let’s see the below example.

  - **const keyword in JavaScript:** The **const** keyword has all the properties that are the same as the let keyword, **except the user cannot update it**.

  - **Scope:** block scoped: When users declare a const variable, they need to initialize it, otherwise, it returns an error. The user cannot update the const variable once it is declared
![image](https://github.com/user-attachments/assets/ba80573b-1a8b-4c2d-8e4f-63d26d62c17d)
  - **Hoisting**
    
            **var	         let        	    const**
    
            Allowed	        Not allowed	    Not allowed
    ```javascript
    x = 8
    console.log(x)
    let x //ReferenceError: x is not defined
    ```
  - **Reassign** 
    ```javascript
    const v1 = 30
    v1 = 30
    console.log(v1) //30
     ```
  - **Redeclaration**  
    ```javascript
    let v1 = 1
    let v1 = 30
    console.log(v1) //SyntaxError: Identifier 'v1' has already been declared
    ``` 
## what is the different between the == and === ?
- The == operator compares the values of **two operands and return true if they are equal** ,while  performing type **coercion**  if necessary
  ```javascript
    coercion means బలవంతం
    
    // consloe.log(2=="2") //true
    ```  
    - The ===operator compares the values of two operands but it dose **not perform type coercion** .it only returns true  if the values are of  the **same data type and have the same value** 
      ```javascript
     //consloe.log(2 ==="2") //fasle 
    
     //consloe.log(2 ===2) //true 
   ```
## what is the ECMAScript  ? What is ES6?

 - JavaScript ES6 (also known as ECMAScript 2015 or ECMAScript 6) is the newer version of JavaScript that was introduced in 2015.
    
   - ECMAScript is the standard that **JavaScript programming language uses**. ECMAScript provides the specification on how **JavaScript programming language should work**
    
   - ECMAScript (/ˈɛkməskrɪpt/; ES) is a JavaScript standard intended to ensure the interoperability of web pages across different web browsers. It is standardized by Ecma International in the document ECMA-262. ECMAScript. Paradigm. Multi-paradigm: prototype-based, functional, imperative.

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
  -  NaN property represents the **“Not-a-Number”** value. It indicates a value that is not a legal number.
    
    typeof of NaN will return a Number.
    
    To check if a value is NaN, we use the isNaN() function,
## What is typeof operator?

- In JavaScript, the typeof operator returns the data type of its operand in the form of a string. The operand can be any object, 
   function, or variable.
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

- The unary(+) operator is used to **convert a variable to a number**. If the variable cannot be converted, it will still become a **number but with the value NaN**.
    
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
   - Implicit type coercion in **javascript is the automatic conversion of value from one data type to another**.
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
  - JavaScript is a **dynamically typed language**, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

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
  -    Hoisting is a JavaScript mechanism where **variables,function declarations and classes are moved to the top of their scope 
      before code execution**. Remember that JavaScript only hoists declarations, not initialisation. Let's take a simple example of 
     variable hoisting,
    
-    However, JavaScript only **hoists declarations, not initializations. That means if a variable is declared and initialized after 
     using it**,
- **Types of Hoisting**
  
    **Variable Hoisting** : Only variable declared with **var** is hoisted (not let and const)

    **Function Hoisting** : Only Simple functions is hoisted (not function expressions)
  
-**Variable Hoisting**

   -  Similarly, the variable declarations are also hoisted to the top of their current scope automatically.
   -  This means that if the variable is declared inside a function block, it will be moved at the top of the function, but if it is declared outside any function it will be moved to top of the script and become globally available. Take a look at the following example, to see how this works:
  ```javascript
      str = "Hello World!";
    alert(str); // Outputs: Hello World!
    var str;
  ```
 -  However, JavaScript **only hoists declarations, not initializations**. **That means if a variable is declared and initialized after using it**, the value will be **undefined**. For example:
```javascript
      alert(str); // Outputs: undefined
    var str;
    str = "Hello World!"
  ```
**Function Hoisting:**
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
![image](https://github.com/user-attachments/assets/e69b6f83-19ce-402b-adfc-88d1ecd1e55f)

**This myFunction is considered as a variable and so only declaration is hoisted and as we are trying to execute the function, we are getting myFunction is not a function.**
If we change this to let, we get the same result as variables,
**“cannot access myFunction before initialization.”**

## What is a Closure?

  -  A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the **lexical     environment**). In other words, **a closure gives you access to an outer function’s scope from an inner function**.
    
  -  Closures are useful because they let you associate data (the lexical environment) with a function that operates on that data. T**his has obvious parallels to object-oriented programming,** where objects allow you to associate data (the object's properties) with one or more methods.
    ![image](https://github.com/user-attachments/assets/645a2b90-a02c-4570-9882-8f256445f524)
![image](https://github.com/user-attachments/assets/17f47dfb-dee6-4e36-a71d-0cd941638f6c)

- **Lexical Scopes**
     - In the example, we saw that the variable of the outer scope is easily accessible to the inner scope. **This is possible because of lexical scoping**. In the above example, the lexical scope of newFunction consists of the lexical scope of demoFunction and the global scope.
     -  In easy terms, **lexical scoping means that inside an inner scope, you can use the variable of the outer scope. It is called lexical scope as the engine determines the scopes during the lexing time**.
     -  
## what is web storage ?

- Web storage is an API that provides a mechanism by which browsers can store key/value pairs locally within 
   the user's browser, in a much more intuitive fashion than using cookies.
-  The web storage provides two mechanisms for storing data on the client.
  
**Local storage**: It stores data for current origin with **no expiration date**.

**Session storage**: It stores data for one session and the **data is lost when the browser tab is closed**.

- cookies are used when data needs to be sent to a server.
 -  Web storage is used when the server doesn't need to know the data stored
## Here are some differences between cookies and web storage: 
-  **Data size:** Cookies are good for small amounts of data. Web storage is better for larger amounts of data.
-  **Data persistence:** Cookies expire. Web storage data is available any time the user opens the website.
-   **Data access:** Cookies are primarily for reading server-side. Web storage can only be read by the client-side.
  
-  **Security:** Web storage is more secure.
  
-  **Website performance:** Web storage doesn't affect website performance
  
## What is a post message

  -  Post message is a method that **enables cross-origin communication between Window objects**.(i.e, between a page and a pop-up that it spawned, or between a page and an iframe embedded within it). Generally, scripts on different pages are allowed to access each other if and only if the pages follow same-origin policy(i.e, pages share the same protocol, port number, and host).
  -  
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

## localStorage  real time uses exples

  **Persisting User Preferences**
  
- You can use localStorage to save user settings like **theme preferences (dark mode/light mode)**, language settings, or other customizable options. This ensures that the user’s **preferences are retained even after they close and reopen the browser**.
 ```javascript
  // Save theme preference
localStorage.setItem("theme", "dark");

// Retrieve theme preference
const theme = localStorage.getItem("theme");
if (theme) {
    document.body.classList.add(theme);
}
```
**Form Data Persistence**   

- If a user is **filling out a form and accidentally closes the browser, you can save the form data in localStorage to prevent data loss**. When the user returns, the form can be repopulated with the saved data.
 ```javascript
   // Save form data
document.querySelector("form").addEventListener("input", (event) => {
    localStorage.setItem(event.target.name, event.target.value);
});

// Retrieve form data
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("form input").forEach((input) => {
        input.value = localStorage.getItem(input.name) || "";
    });
});

```
**Shopping Cart Data**

- For e-commerce websites, **localStorage can be used to store shopping cart items**. This allows users to continue shopping where they left off, even if they close the browser.
```javascript
   // Add item to cart
function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Retrieve cart items
function getCartItems() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

```
**Game State Persistence**

- Games like Wordle use localStorage to save the game state. This allows players to resume their game from where they left off, even if they close the browser.
 ```javascript 
  // Save game state
function saveGameState(state) {
    localStorage.setItem("gameState", JSON.stringify(state));
}

// Retrieve game state
function loadGameState() {
    return JSON.parse(localStorage.getItem("gameState")) || {};
}

```

**User Authentication**
- While not the most secure method, localStorage can be used to store authentication tokens to keep users logged in between sessions. However, be **cautious of XSS vulnerabilities**.
- What is XSS vulnerability?

- Cross-site scripting (XSS) is an attack in which an attacker injects malicious executable scripts into the code of a trusted application or website

**Best Practices for Storing Tokens**

   -**Use HttpOnly Cookies**: Whenever possible, store authentication tokens in HttpOnly cookies. This prevents JavaScript from accessing the tokens, **reducing the risk of XSS attacks1**.
   
- **In-Memory Storage: For SPAs, consider storing tokens in memory. This approach is more secure but may require re-authentication if the page is refreshed2.**
  
- **Secure Storage:** If you must use localStorage, ensure your application is free from XSS vulnerabilities. Regularly audit your code and use Content Security Policy (CSP) to mitigate risks3.

## Session storage real time uses exples 

 **Storing Form Data Temporarily**
 
 - When users fill out multi-step forms, you can use sessionStorage to save their progress. This ensures that if they navigate away from the form and return within the same session, their data is still available.
```javascript 
      // Save form data
function saveFormData(step, data) {
    sessionStorage.setItem(`formStep${step}`, JSON.stringify(data));
}

// Retrieve form data
function getFormData(step) {
    return JSON.parse(sessionStorage.getItem(`formStep${step}`)) || {};
}
```
**Saving Shopping Cart Contents**

- For e-commerce websites, sessionStorage can be used to store shopping cart items during an active session. This ensures that the cart data is available as long as the user is on the site, but it will be cleared once the user closes the tab.
```javascript 
// Add item to cart
function addToCart(item) {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    cart.push(item);
    sessionStorage.setItem("cart", JSON.stringify(cart));
}

// Retrieve cart items
function getCartItems() {
    return JSON.parse(sessionStorage.getItem("cart")) || [];
}

```
**Caching API Responses**

- To improve performance and reduce the number of network requests, you can cache API responses in sessionStorage. This is particularly useful for data that is needed only for the duration of the session.
```javascript 
// Fetch and cache API data
async function fetchData(url) {
    const cachedData = sessionStorage.getItem(url);
    if (cachedData) {
        return JSON.parse(cachedData);
    } else {
        const response = await fetch(url);
        const data = await response.json();
        sessionStorage.setItem(url, JSON.stringify(data));
        return data;
    }
}
```
**Temporary Authentication State**
- For applications that require temporary authentication, such as a single sign-on (SSO) session, you can use sessionStorage to store the authentication token. This ensures that the user remains authenticated as long as the tab is open.
```javascript 
// Save authentication token
sessionStorage.setItem("authToken", "your-authentication-token");

// Retrieve authentication token
const token = sessionStorage.getItem("authToken");
console.log(token); // Outputs: your-authentication-token

```
 ## Cookies real time uses exples 

**Cookies**
- Cookies are small text files stored on the **user’s device by the web server**. They are sent back to the **server with every HTTP request**, making them useful for **storing information that needs to be accessed by the server**, such as session data, user preferences, and tracking information.

**Characteristics:**

- **Size Limit:**  Up to 4 KB.

-  **Expiration:** Can be set to expire at a specific time or when the browser session ends.
  
-  **Accessibility:** Accessible by both client-side scripts (JavaScript) and server-side scripts.
  
-  **Security:** Can be flagged as **HttpOnly to prevent access by JavaScript**, and Secure to ensure they are only sent over HTTPS.

**User Authentication**
- Cookies are commonly used to store authentication tokens. When a user logs in, the server sends a cookie containing a session ID or JWT (JSON Web Token). This cookie is then sent with every subsequent request to authenticate the user.
```javascript
  res.cookie('authToken', 'your-authentication-token', {
  httpOnly: true,
  secure: true, // Ensure this is true in production
  maxAge: 3600000 // 1 hour
});
```
**Tracking and Analytics**

- Cookies are widely used for tracking user behavior and collecting analytics data. This helps website owners understand how users interact with their site and improve user experience.
```javascript
// Setting a tracking cookie
document.cookie = "trackingId=abc123; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
```
**Session Management**
- Cookies are used to manage user sessions. When a user logs in, a session cookie is created to keep the user logged in as they navigate through different pages of the site
  
**Shopping Cart**

- For e-commerce websites, cookies can store shopping cart data. This allows users to continue shopping where they left off, even if they navigate away from the site and return later.
  
**Personalized Content**

- Cookies can be used to deliver personalized content based on user behavior and preferences. For example, showing recommended products or articles based on previous interactions.
  
**User Preferences**
- Cookies can store user preferences such as language settings, theme (dark mode/light mode), and other customizable options. This ensures a personalized experience every time the user visits the site.

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

**Returns:** The index (a number) if found; otherwise, **it returns -1**.
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
    
    - The parameter of the eval() function is a string. If the parameter represents the statements, eval() evaluates the statements. If the parameter is an expression, eval() evaluates the expression. If the parameter of eval() is not a string, the function returns the parameter unchanged.
    
   -  There are some limitations of using the eval() function, such as the eval() function is not recommended to use because of the security reasons. It is not suggested to use because it is slower and makes code unreadable.
    
  -  the eval() function evaluates JavaScript code represented as a string. The string can be a JavaScript expression, variable, statement, or sequence of statements.
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
    - **The while loop loops** through a block of code as long as the specified condition evaluates to true. As soon as the condition fails, the loop is stopped. The generic syntax of the while loop is:
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
## What is difference between [] and new Array() ?
- [] and new Array() are two different ways of creating an array, but they are functionally equivalent.

 - The primary difference between them is in how they are created and in their behavior when used with certain methods.

[] is a shorthand for creating a new array. It is the preferred way to create an array in most cases, because it's more concise and easier to read. For example:

const myArray = []; // create a new empty array
On the other hand, new Array() is a constructor function that creates a new array object. It can be used to create an array of a specific length or with specific elements. For example:

const myArray = new Array(); // create a new empty array
const myOtherArray = new Array(3); // create a new array with a length of 3
const myThirdArray = new Array("a", "b", "c"); // create a new array with three elements
## What are the string method available in regular expression ?
- Regular expressions are patterns used to match character combinations in strings.
- In JavaScript, regular expressions are also objects.
-  These patterns are used with the**exec() and test() methods of RegExp, and with the match(), matchAll(), replace(), replaceAll(), search(), and split()** methods of String.
  **Example 01: test()**

Tests for a match in a string. It returns true or false
```javascript
let exp = /Hello/;
let res1 = exp.test("Hello World");
let res2 = exp.test("Hi");

console.log(res1); // true
console.log(res2); // false
```
**Example 02: exec()**
Executes a search for a match in a string. It returns an array of information or null on a mismatch.\
```javascript
let res1 = exp.exec("Hello World");
let res2 = exp.exec("Hi");

console.log(res1); // ['Hello', index: 0, input: 'Hello World', groups: undefined]
console.log(res2); // null
```
**Method**	     **Description**
**exec()**	        Executes a search for a match in a string. It returns an array of information or null on a mismatch.

**test()**        Tests for a match in a string. It returns true or false.

**match()**	        Returns an array containing all of the matches, including capturing groups, or null if no match is found.

**matchAll()**	    Returns an iterator containing all of the matches, including capturing groups.

**search()**	    Tests for a match in a string. It returns the index of the match, or -1 if the search fails.

**replace()**	    Executes a search for a match in a string, and replaces the matched substring with a replacement substring.

**replaceAll()**	Executes a search for all matches in a string, and replaces the matched substrings with a replacement substring.

**split()**	        Uses a regular expression or a fixed string to break a string into an array of substrings.


## How do you search a string for a pattern?

**1. Using test()** It searches a string for a pattern, and returns true or false, depending on the result.
```javascript
let re1 = /Hi/;
let re2 = /you/;

re1.test("How are you?"); // false
re2.test("How are you?"); // true
```

**2. Using exec()** It searches a string for a specified pattern, and returns the found text as an object. If no match is found, it returns an empty (null) object.
```javascript
let re1 = /Hi/;
let re2 = /you/;

re1.exec("How are you?"); // null
re2.exec("How are you?"); // ["you"]
```
## What are the benefits of using arrow function over es6 function?

- An arrow function is a shorter syntax for a**function expression and does not have its own this, arguments, super, or new.target**.
-  These function are best suited for **non-method functions**, and they **cannot be used as constructors**.

**Arrow functions in ES6 has two limitations:**

    - Do not work with new
    - Fixed this bound to scope at initialisation
**Note:** Unlike regular functions, arrow functions do not have their own this. 
The value of this inside an arrow function remains the same throughout the lifecycle 
of the function and is always bound to the value of this in the closest non-arrow parent function
**Example 01: Arrow Function with No Argument :** If a function doesn't take any argument, then you should use empty parentheses.

**Example 02: Arrow Function with One Argument:** If a function has only one argument, you can omit the parentheses.

**Example 03: Arrow Function as an Expression :**  You can also dynamically create a function and use it as an expression.

**Example 04: Multiline Arrow Functions** If a function body has multiple statements, you need to put them inside curly brackets {}.
```javascript
let area = (r) => {
  const pi = 3.14;
  return pi * r * r;
}

let result = area(10);
console.log(result); // 314
```
**No this Binding:**
- Arrow functions do not have their own this context; instead, they capture the this value from the surrounding context at the time they are created.
- This can simplify working with this in certain scenarios, such as when using methods inside callbacks or event handlers:
 
**Arrow Functions and this**
        - **Arrow functions do not have their own this** context. Instead, they lexically inherit **this** from their surrounding context, meaning they use the **this** value from the scope in which they were created. This behavior contrasts with traditional functions, which have their own this context determined by how the function is called.

**Traditional Functions and this**
- In traditional function expressions or declarations, this is dynamically determined by the way the function is invoked. For example:
```javascript
          function regularFunction() {
          console.log(this);
        }
        
        const obj = {
          method: regularFunction
        };
        obj.method(); // Logs: obj (in strict mode, `this` is `undefined`)
        //In this case, this inside regularFunction depends on how method is called.
```
**Arrow Functions and this**

- Arrow functions capture the this value from their surrounding scope at the time they are defined. They do not have their own this binding. For example:
  
  ```javascript
           class Counter {
          constructor() {
            this.count = 0;
          }
        
          increment() {
            setInterval(() => {
              this.count++; // `this` refers to the Counter instance
              console.log(this.count);
            }, 1000);
          }
        }
        const counter = new Counter();
        counter.increment();
 
# What is Function?
- A function is a **group of statements that perform specific tasks** and **can be kept and maintained separately form main program**.

-  Functions provide a way to **create reusable code packages** which are more **portable and easier to debug**.
 **Here are some advantages of using functions:**
     - Functions reduces the repetition of code within a program —
    -  Functions makes the code much easier to maintain
    -  Functions makes it easier to eliminate the errors
      
**Types of functions in javascript?**

    - Named function
    
    - Anonymous function
    
    - Immediately invoked function expression. It runs as soon as the browser finds it.
    
**Named function**

        *Named function is the function that we define it in the code and then call it
        *whenever we need it by referencing its name and passing some arguments to it.
        *Named functions are useful if we need to call a function many times to pass different values to it or run it several times.
```javascript
   function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet("Alice"); // Output: Hello, Alice!
```

**Anonymous function**

    - The anonymous functions don’t have names. They need to be tied to something: variable or an event to run.
 ```javascript
    const greet = function(name) {
  console.log(`Hello, ${name}!`);
};
greet("Bob"); // Output: Hello, Bob!
```

**Immediately invoked function expression—
IIFE**

-**Invoked function expression runs as soon as the browser encounters it**. The benefit of this**function is that it runs immediately** where it’s located in the code and produces a direct output. That means it is unaffected by code which appears further down in the script which can be useful.

 -  Immediately Invoked Function Expressions (IIFE) is a JavaScript function that executes **immediately after it has been defined so there is no need to manually invoke IIFE**.
 ```javascript
    (function() {
  console.log("IIFE Executed!");
})();
```

  # Explain Higher Order Functions in Javascript ?
  
  **Definition**
     **A higher-order function is a function that:**
        - Accepts one or more functions as arguments, or
        - Returns a function as its result.
**Examples**
**Function as an Argument**

- Many JavaScript functions accept other functions as arguments. Common examples are the methods of arrays such as **map, filter, and reduce**:
    
        ```javascript
                    // Using map to apply a function to each element in an array
                const numbers = [1, 2, 3, 4];
                const squares = numbers.map(x => x * x);
                console.log(squares); // [1, 4, 9, 16]
        ```
   
    - Here,**map is a higher-order function that takes a function**(x => x * x) as an argument and applies it to each element of the array.
    
**Function as a Return Value**

    Higher-order functions can also return other functions. For example:
    
  ```javascript
            // A function that returns another function
        function makeMultiplier(multiplier) {
          return function(x) {
            return x * multiplier;
          };
        }
        
        const double = makeMultiplier(2);
        console.log(double(5)); // 10
        
        const triple = makeMultiplier(3);
        console.log(triple(5)); // 15
```
- Here,**makeMultiplier** is a higher-order function that returns a new function based on the **multiplier argument**.
  
**Real-World Examples Array Methods**

  **JavaScript arrays come with several higher-order functions:**
  
 - **map:** Applies a function to each element and returns a new array.
 
 - **filter:** Returns a new array with elements that pass a test.
 
 - **reduce:** Applies a function against an accumulator and each element to reduce it to a single value.
 
```javascript   
  const numbers = [1, 2, 3, 4, 5];

// Using filter to get even numbers
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// Using reduce to sum the numbers
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15
```

**Event Handling**

In event-driven programming, you often pass functions (event handlers) to be executed when events occur:
```javascript
document.getElementById('myButton').addEventListener('click', function() {
  alert('Button was clicked!');
});
```
**1- Pure Function:**
    - Predictable
    
    - Has no side-effects
    
**2- Impure Function:**
    - Unpredictable
    
    - Has side-effects
    
**Pure Function**
```javascript
function add(a,b) { 
  return a + b
}
console.log(add(4,5))
```

   - It always returns the same result if the same arguments are passed
    
   - It never depends on any state/data/change during the execution of a program
    
   - It always returns something
    
**Impure Function**

```javascript
var addNew = 0;

function add(a,b){ 
  addNew =1; 
  return a + b + addNew
}

console.log(add(4,5))
````

       - Changing the internal state of any argument which has been passed
        
      - It may take effect without returning anything
        
       - Writing test cases will be a bit complicated as there may be side effects
        
**Pure and Impure Methods
These are pure methods:**

   - Array.map()
    
   - Array.reduce()
    
   - Array.filter()
    
   - Array.concat()
    
    ... (spread syntax, which is mostly used to create copies)
**These are impure methods:**

   - Array.splice()
    
  -  Array.sort()
    
    - Date.now()
    
    - Math.random(
    
**Benefits:**

**Predictable:** It produces a predictable output for the same inputs.

**Readable**: Anyone reading the function as a standalone unit can understand its purpose completely.

**Reusable**: Can reuse the function at multiple places of the source code without altering its and the caller's behavior.

**Testable**: We can test it as an independent unit.

**Impure Functions**

    - An impure function is a function that contains one or more side effects. 
   -  It mutates data outside of its lexical scope and does not predictably produce the same output for the same input.

## What is the difference between a method and a function in javascript?
**1. Function:**
   - A function is a piece of code that is called by name and function itself not associated with any object and not defined inside any object.
   It can be passed data to operate on (i.e. parameter) and can optionally return value.
   
**Method:**

A JavaScript method is a property of an object that contains a function definition. Methods are functions stored as object properties.
 
```javascript 
let employee = {
  firstName: "Ajay",
  lastName: "Nagi",
  getName: function () {
    return "Employe Name: " + this.firstName + " " + this.lastName;
  }
};

// Call the method
console.log(employee.getName());
```
# Explain how this works in JavaScript?
 
 **Object Method:** this refers to the object the method is called on.
 
**Global Context**: this refers to the global object (window in browsers, global in Node.js).

**Function (Non-strict Mode):** this refers to the global object.

**Function (Strict Mode):** this is undefined.

**Event Handlers:** this refers to the element that triggered the event

**Arrow Functions:** this is lexically inherited from the surrounding context.

**call(), apply(), bind():** These methods explicitly set the value of this.

- The this keyword in JavaScript is dynamic and its **value depends on the context** in which it is used.
- 
  **1. Object Method**:
  
  - When this is used inside an object method, it refers to the object that is calling the method.

        ```javascript    
        const person = {
          name: 'Alice',
          greet: function() {
            console.log(this.name);
          }
        };
        person.greet(); // Logs 'Alice'
        ```
    **Global Context**
    
     When this is **used outside of any function or object method, in the global context (not in strict mode), it refers to the global object**.

       -  In a browser, the global object is window.
     
       - In Node.js, it is global.
         
   ```javascript    
     console.log(this); // In a browser, this logs the Window object
    ```
   **Function Context**
  
        -  In a regular function, this refers to the global object when the function is called in the global context (non-strict mode).
        -  However, in strict mode, this is undefined in a regular function if not explicitly set:
  
 **call(), apply(), and bind()**
 
-  In JavaScript, **this** normally refers to the object that’s calling the function. But with .**call(), .apply(), or .bind(),** you can manually set what this **should refer to**. This is helpful when you want a function to run in the **context of a different object**.
  
-  Sure! It means you can control what this refers to inside a function, even if the function isn't part of that object.

- Using call, apply, or bind, you "borrow" a function for a specific object, telling it what this should point to.

-  In JavaScript, this usually refers to the object that owns the function. But sometimes, you want a function to behave as if it belongs to a different object. Using .call(), .apply(), or .bind(), you can tell the function exactly what this should refer to
  
 **call():** 
       - Invokes the function immediately with a specified **this value and arguments provided individually**.
       
       -Call( ): The call() method invokes a function with a given 'this' value and arguments provided one by one. This means that we can call any function, and explicitly specify what 'this' should reference within the calling function.
        
**apply():** 
      - Invokes the function immediately with a specified **this value and arguments provided as an array**.
        
**bind():** 
       - **Creates a new function with a specified this value and optional preset arguments**, which can be called later.

        - .bind(thisArg): Creates a new function with a specified this value. This method doesn't immediately invoke the function but rather returns a new function that can be called later with this bound.
       
       -returns a new function, allowing you to pass in an array and any number of arguments.
**call()**

  - The call() method calls a function with a**specified this value and arguments provided individually**.
    ```javascript  
    function greet(greeting, punctuation) {
      console.log(`${greeting}, ${this.name}${punctuation}`);
    }
    
    const person = { name: 'Alice' };
    greet.call(person, 'Hello', '!'); // Logs 'Hello, Alice!'
    ```
**apply()**

- The apply() method is similar to call(), but it takes the arguments as an array (or an array-like object).
 ```javascript  
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: 'Bob' };
greet.apply(person, ['Hi', '!']); // Logs 'Hi, Bob!'
```
**bind()**

- The bind() method creates a new function that, when called, has its this keyword set to a provided value.
- It also allows you to preset initial arguments to the function.
 ```javascript 
  function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: 'Charlie' };
const boundGreet = greet.bind(person, 'Hey');
boundGreet('!!'); // Logs 'Hey, Charlie!!'
```
## What is callback() function in javascript?

**Callback Functions**

-In JavaScript, a callback function is simply a function that’s passed as an argument to another function, to be executed later. It’s commonly used for handling asynchronous operations, like waiting for data to load or an event to happen, before moving on to the next step.

- A callback function is a function passed as an argument to another function and **executed after some operation is complete**. 
- Callbacks are used to handle asynchronous operations, customize behavior, or perform actions once a function completes its task.
 
 **In this example:**
  
- **fetchData** is a function that simulates an asynchronous operation.
 
- **handleData** is a callback function passed to fetchData.
 
- **Once the asynchronous operation (simulated with setTimeout) is complete, handleData is called with the data.**
 
**Summary**
  
**Callback Function:** A function passed to another function and executed after a certain operation or event.
    Used for handling asynchronous operations or customizing behavior.
    
**Higher-Order Function:** A function that either takes one or more functions as arguments or returns a function. 
    It provides a way to use functions as first-class citizens and enables functional programming patterns.
    
## How to avoid callback hell in javascript?
- Callback hell is a phenomenon where a Callback is called **inside another Callback**.
   It is the**nesting of multiple Callbacks inside a function**. If you look at the design of the code, it seems just like a**pyramid**.
- Thus the Callback hell is also referred to as the ‘**Pyramid of Doom**’.

- Callback hell structurally is just a nesting of function calls inside a function. But,
   it becomes difficult to understand and keep track of the nesting once the size of the nesting is increased.

- The below code will give you an idea of why this phenomenon is labelled as Hell/Doom.
```javascript  
doSomething(param1, param2, function(err, paramx){
    doMore(paramx, function(err, result){
        insertRow(result, function(err){
            yetAnotherOperation(someparameter, function(s){
                somethingElse(function(x){
                });
            });
        });
    });
});
```
**Techniques for avoiding callback hell:**

- Write comments
    
- Split functions into smaller functions
    
- Using Async.js
    
- Using Promises
    
- Using Async-Await  

**Here are some strategies to escape callback hell:**

**Use Promises**: Promises provide a more structured way to handle asynchronous operations. 
    You can chain .then() and .catch() methods to create a linear flow of code instead of deeply nested callbacks.
 
**Async/Await:** async/await is even more readable than promises. 
 It allows you to write asynchronous code that looks like synchronous code, making it easier to understand.
 
**Modularization:** Break your code into smaller, reusable functions.
This reduces the nesting level and makes your code more organized and easier to comprehend.
 
**Named Functions:** Use named functions instead of anonymous functions for callbacks.
Named functions provide clarity and make your code more readable.

# What is the use of preventDefault method?

**The preventDefault() method** is used to **prevent the browser from executing the default action of the selected element**. 
It can prevent the user from processing the request by clicking the link.**a preventDefault is called on the event when submitting the form to prevent a browser reload/refresh**

For example,**prevent form submission when clicking on submit button and prevent opening the page URL when clicking on hyper link are some common usecases.**

## Why is a form submit reloading the browser?

- All native HTML elements come with their internal native behavior. For instance, input elements store their internal state.


- That's why often React is used to take over for having controlled components by managing the state via React. The same applies for a form element which has a submit event that is invoked via a submit button element.
  
- In the past, it was desired to refresh the browser to flush all state and to submit the data to a backend. Nowadays, a library such as React, gives us more flexibility to deal with the submit event ourselves. In this case, we deal with it by updating the list in our component's state
 
## What is the difference between prototype and proto in JavaScript?
 **Proto:**

 - `__proto__` is a property of an object that points to its prototype. This property is used internally by the JavaScript engine to search for properties and methods on an object's prototype chain.

- It is an actual object that provides a way inherit to inherit properties from JavaScript with the help of an object which is created with new.
Every object with behavior associated has internal property [[prototype]].
```javascript  
function Employee(id, name) {
  this.id = id;
  this.name = name;
}
const employee = new Employee(1090, "Sarvesh Ghose");

// Object have proto property
employee

// Also if apply strict equal to check
// if both point at the same
// location then it will return true.
Employee.prototype === employee._proto_ // false
```
**Prototype**:

imp 
- In JavaScript, when you create an object from a constructor function, it comes with a built-in property called `prototype`. This is like a blueprint for all the objects created from that constructor function. It defines the shared properties and methods that all instances of that object will have.

- It is a special object which means it holds shared attributes and behaviors of instances.
   It is a way to inherit properties from javascript as it is available in every function declaration.
 
- The prototype is an object that is **associated with every functions and objects by default in JavaScript**,
   where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible.
   Every function includes prototype object by default.
  
 ```javascript  
  // Constructor function
function Employee(id, name) {
  this.id = id;
  this.name = name;
}

// Objects
const employee = new Employee(3325, "Karishma Som");

// Prototype
Employee.prototype.getName = function () {
  return this.name;
};

// Function call using object
console.log(employee.getName());
```
## Define the various types of errors which occur in JavaScript?
  - There are three main types of errors that can occur while compiling a JavaScript program: **syntax errors, runtime errors ( also called exceptions ), and logical errors**.
     When an exception occurs, an object representing the error is created and thrown. The JavaScript language defines seven types of built-in error objects.

**1. Error:**

The "Error" type is used to represent generic exceptions. This type of exception is most often used for implementing user defined exceptions.

```javascript  
const error = new Error("error message");
```

**2. RangeError:**

"RangeError" exceptions are generated by numbers that fall outside of a specified range.

```javascript  
const pi = 3.14159;

pi.toFixed(100000);  // RangeError: toFixed() digits argument must be between 0 and 100
```

**3. ReferenceError:**

A "ReferenceError" exception is thrown when a non-existent variable is accessed. These exceptions commonly occur when an existing variable name is misspelled.
```javascript  
function sum() {
  val++;  // ReferenceError: val is not defined
}
```

**4. SyntaxError:**

A "SyntaxError" is thrown when the rules of the JavaScript language are broken.
```javascript  
if (foo) {  // SyntaxError
  // the closing curly brace is missing
```

**5. TypeError:**

A "TypeError" exception occurs when a value is not of the expected type. Attempting to call a non-existent object method is a common cause of this type of exception.
```javascript  
const foo = {};

foo.bar(); // TypeError
```

**6. URIError:**

A "URIError" exception is thrown by methods such as encodeURI() and decodeURI() when they encounter a malformed URI. The following example generates a "URIError" while attempting to decode the string "%".
```javascript  
decodeURIComponent("%"); // URIError
```

**7. EvalError:**

"EvalError" exceptions are thrown when the eval() function is used improperly. These exceptions are not used in the most recent version of the EcmaScript standard. However, they are still supported in order to maintain backwards compatibility with older versions of the standard.

## What are the various statements in error handling?
 **Below are the list of statements used in an error handling,**
 
**try:** This statement is used to test a block of code for errors

**catch:** This statement is used to handle the error

**throw:** This statement is used to create custom errors.

**finally:** This statement is used to execute code after try and catch regardless of the result.

**The finally()** method is used to return a Promise, when a promise is settled, Like then() and catch(), that is either fulfilled or rejected.

Javascript finally was introduced in ES2018 and using the finally() method, duplication of code can be avoided in the then() and catch() methods of the Promise.

**The finally()** method is always executed whether the promise is fulfilled or rejected. In other words, the finally() method is executed when the promise is settled.

## What is a promise?
Promises are used to handle **asynchronous operations.** They provide an **alternative approach for callbacks** by**reducing the callback hell and writing the cleaner code**.

**Promises have three states:**

**pending:** initial state, neither fulfilled nor rejected.

**fulfilled:** meaning that the operation was completed successfully.

**rejected:** meaning that the operation failed.

```javascript 
const myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation
  setTimeout(() => {
    const success = true; // Simulate success or failure
    if (success) {
      resolve('Operation successful!');
    } else {
      reject('Operation failed.');
    }
  }, 1000);
});
/////////////
myPromise
  .then(result => {
    console.log(result); // Logs 'Operation successful!' if resolved
  })
  .catch(error => {
    console.error(error); // Logs 'Operation failed.' if rejected
  })
  .finally(() => {
    console.log('Operation complete.');
  });
```
![image](https://github.com/user-attachments/assets/2d457a1f-2782-4ddf-a957-b93f37648047)

![image](https://github.com/user-attachments/assets/52fd5c20-36fc-4766-b847-31f81f0789f2)

## What is promise chaining?

**The process of executing a sequence of asynchronous tasks one after another using promises is known as Promise chaining**. 
It allows you to chain on another then call which will run when the second promise is fulfilled. The .catch() can still be called to handle any errors that might occur along the way.
```javascript  
// Promise Chain
new Promise(function (resolve, reject) {
  setTimeout(() => resolve(10), 1000);
})
  .then(function (result) {
    console.log(result); // 10
    return result + 20;
  })
  .then(function (result) {
    console.log(result); // 30
    return result + 30;
  });
```

**Promise.all():** Resolves when all promises resolve;**rejects if any promise rejects**.

**Promise.allSettled():** Resolves when all promises settle (fulfill or reject); **provides status and value/reason for each promise**.

**Promise.any():** Resolves as soon as any promise resolves; **rejects with an AggregateError if all promises reject**.

**Promise.race():** Resolves or rejects as soon as the **first promise resolves or rejects**.

**Promise.reject():** Returns a promise that i**s immediately rejected with a given reason**.

**Promise.resolve():** Returns a promise that is **immediately resolved with a given value**.

//////////////

**Promise.all(iterable)** This method takes an iterable of promises and resolves to a single promise that resolves when either all the promises in the iterable resolves or any one rejects.

Case I: Resolves when all the promises resolve: In this case, the final resolved value will be an array containing aggregated values from all the promises from the iterable.

Case II: Resolves when any one of the rejects: In this case, the reason for the rejected promise is the reason the first promise got rejected from the iterable.
```javascript  
const firstPromise = 60;
const secondPromise = Promise.resolve(25);
const thirdPromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'Resolved!');
});

Promise.all([firstPromise, secondPromise, thirdPromise])
.then((values) => {
  console.log(values);
});
// expected output: Array [60, 25, "Resolved!"]
```

**Promise.allSettled(iterable)**

This method takes an iterable of promises and returns a new promise only **when all the promises get settled**, i.e., **are in fulfilled or rejected state.**
This method is mainly used when the promises passed in the iterable are not connected to each other, and we just want to know what they result in.
```javascript  
const firstPromise = 60;
const secondPromise = Promise.resolve(25);
const thirdPromise = new Promise((resolve, reject) => {
      setTimeout(reject, 100, 'Rejected');
});

Promise.allSettled([firstPromise, secondPromise, thirdPromise])
.then((results) => results.forEach((result) => console.log(result.status)));
// expected output: 
// "fulfilled"
// "fulfilled"
// "rejected"
```
**Promise.any(iterable)**
- This method takes an iterable of promises, and as soon as one of the **promises gets resolved, it gets resolved with the value of the first resolved promise.**

- If none of the promises gets resolved, i.e., **all of them get rejected, then the promise gets rejected with an aggregated error formed by grouping all the individual errors**.
```javascript  
 const firstPromise = 60;
const secondPromise = Promise.resolve(25);
const thirdPromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'Resolved!');
});

Promise.any([firstPromise, secondPromise, thirdPromise])
.then((value) => {
  console.log(value);
});
// expected output: 60
```
**Promise.race(iterable)**

- This method takes an iterable of promises and returns a promise that fulfills or rejects as soon as any one of the promises from the iterable gets fulfilled or rejected.

- If fulfilled, the final returned promise has the value of the fulfilled promise. If rejected, it picks the reason from the rejected promise.
```javascript  
  const firstPromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 300, 'one');
});

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, 'two');
});

Promise.race([firstPromise, secondPromise]).then((value) => {
  console.log(value);
  // Both resolve, but secondPromise is faster
});
// expected output: "two"
```
## What are async and await?

async and await are two new keywords introduced in ES2017 that simplify asynchronous programming in JavaScript. The

- **async keyword** is used to define an **asynchronous function**, which returns a promise that is resolved with the function's return value.

- **await keyword**is used to **pause the execution of an async function until a promise is resolved**.
 
## Ajax & Fetch API &  XMLHttpRequest()

- **Ajax sets up the communication with a server/database without the need for a postback or a complete page refresh.**

- AJAX can be defined as * the method of exchanging data with a server and updating parts (e.g. the suggestion box in this case) of a web page – without reloading the entire page.* AJAX is the 
  best solution whenever there is a need to update the webpages asynchronously by trading the data with the server.
 
- **It updates the parts of the web application dynamically and asynchronously without reloading the complete webpage for the application**.
 
-  AJAX is the combination of **XMLHttpRequest Object, JavaScript and HTML DOM**.
  
```javascript  
  const xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts'); // Initialize a GET request

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) { // Check if the request is complete
    if (xhr.status === 200) { // Check if the request was successful
      const data = JSON.parse(xhr.responseText); // Parse JSON response
      console.log(data); // Process the data
    } else {
      console.error('Error:', xhr.statusText); // Handle errors
    }
  }
};

xhr.send(); // Send the request
```
**Fetch API**
 - **Fetch API is Promise based api used to fetch resource across web server**, almost same like AJAX but with easy syntax and more powerful features.

 - Fetch API can also send and receive data like **XML, JSON, TEXT and HTML from web server without reloading.**
   
 ```javascript   
   fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ title: 'foo', body: 'bar', userId: 1 })
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
```

**Key Differences**

 **Syntax and Usability**
        
        
  - **AJAX (XMLHttpRequest):** More verbose and has a more complex API.
        
  - **Fetch:** Provides a simpler and more readable API with Promises, making it easier to work with asynchronous code.
        
**Handling Responses**
        
  - **AJAX:** Requires manual parsing of the response and checking for various states.
        
  - **Fetch:** Provides methods like .json(), .text(), etc., for easier response handling. 
        Fetch promises are automatically rejected for network errors, making error handling more straightforward.
        
 **Error Handling**
        
  - **AJAX:** Requires explicit checks for HTTP status codes and manual error handling.
        
 - **Fetch:** Does not reject the promise on HTTP errors (e.g., 404 or 500); you need to check the response.ok property to determine if the request was successful.
         
 **Configuration**
        
        
  - **AJAX:** Requires more manual configuration for different types of requests (e.g., POST, PUT) and sending data.
        
   - **Fetch:** Simplifies the process of configuring requests with options like method, headers, and body.
   
**Summary**
        
 - **AJAX (XMLHttpRequest):** An older way to handle asynchronous HTTP requests. It’s more complex and verbose but still widely used in legacy code.
        
  -**Fetch API:** A modern and cleaner approach to handling HTTP requests. It simplifies handling responses and errors using Promises and provides a more readable API.

**XMLHttpRequest ()**
   - **The XMLHttpRequest object is a JavaScript API used to make HTTP requests to a server and receive responses from it**.
    **It allows web pages to send and receive data asynchronously without having to reload the entire page**, making it a fundamental part of AJAX (Asynchronous JavaScript and XML).

**Key Features**

  **Asynchronous Communication:** Allows web applications to send and receive data in the background.
  
  **Synchronous Communication:** Can also operate in synchronous mode (though this is generally discouraged because it blocks the main thread).
  
  **Flexible Requests:** Supports various HTTP methods like GET, POST, PUT, DELETE, etc.
  
  **Event Handling:** Provides event handlers to track request progress and handle responses.

  ![image](https://github.com/user-attachments/assets/5cf0faba-5d18-46de-a6b2-2827c02dd5f2)

## What is an Iterator?**
  An iterator is an object which defines a sequence and a return value upon its termination. It implements the Iterator protocol with a .next() method which returns an object with two properties:

  **value:** The next value in the iteration sequence.
   **done:** This is true if the last value in the sequence has already been consumed.

## What is strict mode? 
-   The Strict Mode is allows you to place a **program, or a function, in a strict operating context**. 
   This strict context prevents certain actions from being taken and throws more exceptions.

**Advantages:**

- Makes it impossible to accidentally create global variables.
- Makes assignments which would otherwise silently fail to throw an exception.
- Makes attempts to delete undeletable properties throw (where before the attempt would simply have no effect).
- Requires that function parameter names be unique.
- this is undefined in the global context.
- It catches some common coding bloopers, throwing exceptions.
- It disables features that are confusing or poorly thought out.
 
##  Explain browser console logs features?

1. console.table()
3. console.log()
4. console.warn()
5. console.error()
   
## What is a Polyfill?
- **A polyfill is a piece of code (usually a JavaScript library) that provides modern functionality on older browsers that do not support it**. It is a way to bring **new features to old browsers by mimicking the behavior of modern JavaScript APIs**.
  
- For example, Object.values() was introduced in ES2017 and is not supported in some older browsers such as Internet Explorer and Safari 9. However, you can use a polyfill to add support for it in older browsers.
  
```javascript   
// polyfill for the Object.values()
if (!Object.values) {
  Object.values = function(obj) {
    var values = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        values.push(obj[key]);
      }
    }
    return values;
  };
}

// Now you can use Object.values() even in older browsers that don't support it natively
const obj = { a: 1, b: 2, c: 3 };
const values = Object.values(obj);

console.log(values); // Output: [1, 2, 3]
```
## What is currying in JavaScript?

 - It is a technique in functional programming, **that transforms the function of multiple arguments into several functions of a single argument in sequence**.
   
   (or)
   
   - As we know, currying in JavaScript is a **function that takes multiple arguments. In it, the function is transformed into a number of functions, and each of these series of functions will accept one argument**
      
   
   - Currying in JavaScript can be for the following reasons:
     
      - By using the currying function, we can **avoid passing the same variable many times**
        
      - Currying in JavaScript can be used to make a **higher-order function**.

- It helps us to create a **higher-order function**
 
- It **reduces the chances of error** in our function by dividing it into multiple smaller functions that can handle one responsibility.
 
- It is very useful in **building modular and reusable code**

- It helps us to avoid passing the same variable multiple times

- It makes the **code more readable**
  
**simple function that will accept three parameters**
        ```javascript
            const addition =(x, y, z)=>{
                return x+y+z
            }
            console.log(addition(2, 3, 5)) // 10
        ```
        
 **Converting an Existing Function into a Curried Function**
 
  ```javascript
         function sum(x) {   // x is taken as argument here
            return (y) => {
                return (z) => { // this function will return the sum
                    return x + y + z
                }
            }
        }
        console.log(sum(1)(2)(3)) // 6
```
## What are the types of errors in javascript?

There are **two types of errors in javascript**.


**Syntax error:** Syntax errors are **mistakes or spelling problems in the code** that cause the program to not execute at all or to stop running halfway through. Error messages are usually supplied as well.

**Logical error:** Reasoning mistakes occur when the syntax is proper but the **logic or program is incorrect**. The application **executes without problems in this case**. However, the output findings are inaccurate. These are sometimes more difficult to correct than syntax issues since these applications do not display error signals for logic faults.

## Mention some advantages of javascript.

**There are many advantages of javascript. Some of them are**

- Javascript is executed on the client-side as well as server-side also. There are a variety of Frontend Frameworks that you may study and utilize. However, if you want to use JavaScript on the backend, you'll need to learn NodeJS. It is currently the only
  
- JavaScript framework that may be used on the backend.
- 
-Javascript is a simple language to learn.

- Web pages now have more functionality because of Javascript.
- To the end-user, Javascript is quite quick.
  
##  What are object prototypes?
  
**All javascript objects inherit properties from a prototype. For example,**

**Date objects**inherit properties from the Date prototype

**Math objects** inherit properties from the Math prototype

**Array objects** inherit properties from the Array prototype.

On top of the chain is Object.prototype. Every prototype inherits properties and methods from the Object.prototype.

**A prototype is a blueprint of an object**. The prototype allows us to use **properties and methods on an object even if the properties and methods do not exist on the current object**.
  ```javascript
function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function() {
    console.log(this.name);
};

const alice = new Person("Alice");
alice.sayName(); // Output: Alice
```
- JavaScript’s **built-in objects like Array, Date, and Object also have prototypes**. For example, all arrays inherit from **Array.prototype**, which provides methods like **forEach, map, and filter**.

- Using **Object.getPrototypeOf**

  You can use the **Object.getPrototypeOf method to get the prototype of an object**.

```javascript
const obj = {};
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true
```

- **Prototype**: An object from which other objects inherit properties and methods.

- **Prototype Chain:** A chain of prototypes that JavaScript follows to find properties and methods.
 
- **Adding to Prototypes:** You can add properties and methods to an object’s prototype to make them available to all objects that inherit from it.

## What is Memoization?
 - In programming, memoization is an optimization technique that makes**applications more efficient and hence faster**.
 
  - It does this by **storing computation results in cache,** and **retrieving**that same information from the cache the **next time it's needed instead of computing it again**.

    - A **cache** is simply a **temporary data store that holds data so that future requests for that data can be served faster**.
    
**The concept of memoization in JavaScript relies on two concepts:**

  - **Closures:** The combination of a function and the lexical environment within which that function was declared. You can read more about them here and here.
  
- **Higher Order Functions:** Functions that operate on other functions, either by taking them as arguments or by returning them. You can read more about them here.
- 
**JavaScript Memoization Example**
    - we'll use the classic example of the **Fibonacci sequence**.
```javascript    
function fib(n) {
    if (n < 2){
        return n;
    }else{
        return fibo(n-2) + fibo(n-1);
    }
}
///0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
```
## What is recursion in a programming language?

  - Recursion is a technique to **iterate over an operation by having a function call itself repeatedly until it arrives at a result**.
 ```javascript  
    function add(number) {
  if (number <= 0) {
    return 0;
  } else {
    return number + add(number - 1);
  }
}
add(3) => 3 + add(2)
          3 + 2 + add(1)
          3 + 2 + 1 + add(0)
          3 + 2 + 1 + 0 = 6
 ```
 ## What is DOM?
 
-  The **Document Object Model** (DOM) is a programming interface for web documents. It **represents the structure of a document as a tree of objects**, allowing programs to dynamically **access and manipulate the content, structure, and style** of web pages.
  
**Tree Structure:**

- The DOM represents an **HTML or XML document** as a **tree structure where each node is an object representing a part of the document**.
- 
For example, an HTML document’s structure is represented as a hierarchy of nodes,**including elements, attributes, and text**.

**Nodes and Objects:**
    - Each part of the document **(like elements, attributes, and text)** is represented as a node in the DOM tree.
Nodes can be accessed and manipulated using JavaScript.

**Dynamic Interaction:**

   - The DOM allows scripts to update the content, structure, and style of a document dynamically.
This enables interactive web pages where content can change in response to user actions without needing to reload the entire page.
**APIs and Methods:**

    - The DOM provides various methods and properties to interact with the document.
For example, **document.getElementById, document.querySelector, and document.createElement** are commonly used methods to access and manipulate elements.

 - **getElementById:** returns an element whose id matches a passed string. Since the ids of elements are unique, this is the fastest way to select an element.

 - **getElementsByTagName:** returns a collection of all the elements present in the document that have the specified tag name, in the order of their appearance in the document.

 - **getElementsByClassName:** returns an HTMLCollection of elements that match the passed class name. Bypassing the class names separated by whitespace, we can search for multiple class names.

 - **getElementsByName:** returns a NodeList Collection of the elements that match the value of the name attribute with the passed string.

 - **querySelector:** returns the very first element within the document that matches the given selector. It only returns the element that matches with one of the specified CSS selectors, or a group of selectors.

 - **querySelectorAll:** returns a static NodeList of elements that matches with one or a group of selectors. If no element matches, an empty NodeList is returned.

**Why is the DOM Important?**

 - **Interactivity:** The DOM allows web pages to be **interactive and responsive to user actions**.
    
 - **Dynamic Content:** It enables the creation of **dynamic content that can be updated without reloading the page**.
    
 - **Cross-Platform:** The DOM is a **cross-platform and language-independent interface**, making it a standard way to interact with web documents.

**Real DOM**

  -**Definition:** The Real DOM (Document Object Model) is the actual representation of the HTML document. It is a **tree-like structure** consisting of all the nodes in an HTML document.

 - **Updates:** When an element is **updated, the entire DOM is re-rendered**, which can be slow and inefficient.

 - **Manipulation:** **Directly** updates the HTML elements.

 - **Performance:** Slower due to the need to **re-render the entire DOM for any change**.

 - **Memory Usage:** Higher memory usage due to the need to keep the entire DOM in memory.

**Virtual DOM**

   - **Definition:** The Virtual DOM is a lightweight, **in-memory representation of the Real DOM**. It is used by libraries like React to optimize updates.

   - **Updates:** When an element is updated, the changes are first made to the Virtual DOM. React then compares the **Virtual DOM with a snapshot of the previous Virtual DOM** (a process called “**reconciliation**”) and **updates only the changed elements in the Real DOM**.

  - **Manipulation:** **Cannot directly update HTML elements**; it updates the Real DOM based on the differences.

  - **Performance:** Faster because it **minimizes the number of updates to the Real DOM by batching changes and updating only the 
necessary parts**.

 - **Memory Usage:** More efficient in terms of memory usage as it only keeps a lightweight representation of the DOM.

## What do you mean by BOM?
  - The **Browser Object Model(BOM)** provides the **properties and methods for JavaScript to interact with the browser**.

  - BOM allows performing **actions to manipulate the browser window through BOM objects without affecting the contents of the page** i.e. the document. **BOM objects are global objects**. The BOM objects used to **manipulate the browser window**that is:
    
   - location
 
  - history
  
  - navigator
  
  - screen
 
 - document
 
##  What is the distinction between client-side and server-side JavaScript?
**Client-Side JavaScript**
    
    * Execution Environment:

**Runs in the user’s browser.**
        - Directly interacts with the HTML and CSS to create dynamic and interactive web pages.
**Common Uses:**

   - **Manipulating the DOM** (Document Object Model) to update the UI.
  
   - Handling user events like **clicks, form submissions, and mouse movements**.
   
   - Validating user input before it is sent to the server.
    
   - Making **asynchronous requests to the server using AJAX or Fetch API to update parts of the web page without reloading**.
   - 
**Advantages:**
    -  Reduces server load by handling tasks on the client side.
    -  Provides a more responsive and interactive user experience.
    - Immediate feedback to the user without needing to communicate with the server.

**Server-Side JavaScript**

Execution Environment:

**Runs on the server.**
        - Typically used with **environments like Node.js**.
**Common Uses:**

   -  Handling database operations (**CRUD operations**).
 
   - Managing server-side logic and business rules.
  
   - Authenticating and authorizing users.
 
   - Serving dynamic content based on user requests.
 
   - Performing complex calculations and data processing.
   
**Advantages:**

   - Can access server resources like databases and file systems.
   - Provides more security for sensitive operations and data.
   - Centralized control over the application logic.
     
## What is the rest parameter and spread operator?
![image](https://github.com/user-attachments/assets/17b85bf8-f70e-43d6-b957-5e76b8de4860)

**Purpose** 
 
   - **Rest Parameter:** Gathers multiple arguments into an array.
      
   - **Spread Operator:** Spreads elements of an array or object into individual elements.
  
**Usage**  

   - **Rest Parameter:** Used in **function parameter lists**.
    
   - **Spread Operator:** Used in **function calls**, array literals, and object literals.

**Syntax:**

   - Both use **three dots** (...), but their context determines their behavior

**Rest Parameter**

```javascript
    function myFunction(a, b, ...rest) {
        console.log(a); // Output: 1
        console.log(b); // Output: 2
        console.log(rest); // Output: [3, 4, 5]
    }
    
    myFunction(1, 2, 3, 4, 5);
```
**Spread Operator**

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];

console.log(combined); // Output: [1, 2, 3, 4, 5, 6]
```
- **Rest Parameter collects all remaining elements into an array. Spread Operator expands collected elements such as arrays into 
   single elements**

-  **Rest parameter is used in function declaration whereas the spread operator is used in function calls.**

- **Rest parameter should always be used at the last parameter of a function**:

# Object-Oriented Programming (OOP) ?

  - **Inheritance in javascript** aids a new class to have all the functionality of another class while having its own functionality as well.
    
  -  *The inheritance in javascript primarily involves two segments:
    
      - **Child class:** The class which inherits the properties of another class is known as the child class.

      - **Parent class:** The class whose property is being inherited is known as the parent class.
**Extends**
    - The extends keyword is used for **developing the inheritance between two classes**.
**Super()**
    - The **super keyword** in javascript is used to **call functions of an object's parent class**.

    - The super() method **refers to the parent class**.
    
 ```javascript
//cat is child
// animal is prent
        class Cat extends Animal {
          constructor(name, color) {
            super(name); // Call the parent constructor
            this.color = color;
          }
        
          speak() {
            super.speak(); // Call the parent method
            console.log(`${this.name} meows and is ${this.color}.`);
          }
        }
        
        const myCat = new Cat('Whiskers', 'gray');
        myCat.speak(); 
        // Whiskers makes a noise.
        // Whiskers meows and is gray.
```
**Encapsulation**:
    - Encapsulation is the **process of hiding and securing the properties of objects**. Direct access to encapsulated properties is **not possible and we have to provide other mechanisms to 
    operate/read that data**. 
    
    - Typically, this is done by making class variable properties private and providing public class methods to access necessary data.
 ```javascript   
    function Animal(val){
    var name = val;
    var publicApi = {
        setName: function (val){
            name = val;
        },
        getName: function (){
            return name;
        }
    }
    
    return publicApi;
}
var animal = new Animal("DOG");
animal.setName("CAT");
console.log(animal.getName());   output: CAT
console.log(animal.name);        output: undefined
```
- In the above code, the **name** property of **Animal isn’t directly accessible** but only via **publicApi** methods.
  
-This is because we are returning **publicApi** object that doesn’t have a name property.**Its properties(setName and getName) utilize name property from its lexical scope**.

**Abstraction:**
   -  Abstraction means **hiding the implementation details** and showing only **behavior**.
 
   -  It’s done on the **design level** as opposed to **encapsulation**

       which is implemented at the application level. With abstraction, **only essential details are shown to the user**.
      
**Polymorphism**

-where "poly" refers to many and "morph" signifies transforming one form into another. In the context of programming, polymorphism enables the same function to be called with different signatures, allowing for flexibility and adaptability in code design.


-The polymorphism is a core concept of an object-oriented paradigm that provides a way to perform a single action in different forms. It provides an ability to call the same method on different JavaScript objects. As JavaScript is not a type-safe language, we can pass any type of data members with the methods.

- Polymorphism allows objects of different types to respond to the same method in their own way. For example, all cars can start the engine, but the sound or behavior might be different for electric cars and sports cars.

 

