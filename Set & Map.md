## Set in JavaScript:
```JavaScript
// Creating a Set
const mySet = new Set();

// Adding values to the Set
mySet.add(1);
mySet.add("hello");
mySet.add(true);

// Checking if a value exists
console.log(mySet.has(1)); // true

// Removing a value
mySet.delete("hello");

// Iterating through the Set
for (const value of mySet) {
    console.log(value);
}

// Size of the Set
console.log(mySet.size); // 2

// Clearing the Set
mySet.clear();
```
