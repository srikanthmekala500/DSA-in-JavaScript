## Length of a String
```JavaScript
let firstName = "Vaishali";
console.log(firstName.length);
```
## Access String Element
```JavaScript
console.log(firstName.charAt(2)); // i
console.log(firstName[2]); // i
console.log(firstName.charCodeAt(2)); // 115 (Ascii Code)
```
## Check Presence of Character
```JavaScript
console.log(firstName.includes("r")); // false (& if present it return true)
console.log(firstName.indexOf("i")); // 2 (& if not present it return -1)
console.log(firstName.lastIndexOf("i")); // 7 
```
## Compare Two Strings
```JavaScript
let anotherName = "Vishal";
console.log(firstName.localeCompare(anotherName)); // -1 (& if strings are equal it return 0)
```
## Replace Substring
```JavaScript
const str = "Vishal is Best Frontend Developer. Vishal is Best Developer. ";
console.log(str.replace("Vishal", "Sujit")); // "Sujit is Best Frontend Developer. Vishal is Best Developer. "
console.log(str.replaceAll("Vishal", "Sujit")); // "Sujit is Best Frontend Developer. Sujit is Best Developer. "
```
## Substring of a String
```JavaScript
console.log(str.substring(6, 30)); 
console.log(str.slice(-10, -1));
```
## Split and Join
```JavaScript
console.log(str.split(""));
const subString = str.split(" ");
console.log(subString.join(" "));
```
## String Start and End
```JavaScript
console.log(str.startsWith("Vishal")); // true
console.log(str.endsWith("Developer")); // true
```
## Trim and Case Conversion
```JavaScript
const trimStr = str.trim();
const trimStrStart = str.trimStart();
const trimStrEnd = str.trimEnd();
console.log(trimStr, trimStr.length);
console.log(str.toLowerCase());
console.log(str.toUpperCase());
```
## Convert Number and Object to String
```JavaScript

const num = 123;
console.log(num, num.toString());

const obj = {
    name: "Vishal",
    course: "DSA with Vishal"
};
console.log(obj, JSON.stringify(obj));
```
## Concatenate Strings
```JavaScript
const lastName = "Rajput";
console.log(firstName + lastName);
console.log(`${firstName} ${lastName} is a Best Developer`);
console.log(firstName.concat(lastName, " is a", " Best"));
```
## Find the Index of the First Occurrence in a String
```JavaScript
 function findFirstOccurrence(mainString, subString) {
  return mainString.indexOf(subString);
}

console.log(findFirstOccurrence('hello world', 'world')); // Outputs: 6
console.log(findFirstOccurrence('hello world', 'foo'));   // Outputs: -1

```
## Reverse String

