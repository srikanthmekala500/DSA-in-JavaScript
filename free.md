## Distribute Candies
```javascript
function distributeCandies(candies, numToGive) {
    // Count unique types of candies
    let uniqueCandies = new Set(candies);
    let maxTypes = Math.min(uniqueCandies.size, Math.floor(numToGive / 2));
    return maxTypes;
}
// uniqueCandies.size = 3 (since there are 3 unique types of candies)
// Math.floor(numToGive / 2) = Math.floor(6 / 2) = 3
// maxTypes = Math.min(3, 3) = 3
// Example usage:

let candies = [1, 1, 2, 2, 3, 3];
let numToGive = 6;
console.log
(`Maximum types of candies the sister can receive: ${distributeCandies(candies, numToGive)}`);
// Output: Maximum types of candies the sister can receive: 3
```
