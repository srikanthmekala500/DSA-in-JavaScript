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
