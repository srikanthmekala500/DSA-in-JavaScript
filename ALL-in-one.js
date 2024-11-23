function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index between 0 and i (inclusive)
        const randomIndex = Math.floor(Math.random() * (i + 1));
        // Swap elements at i and randomIndex
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
}

console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));


// accumulator
// The value resulting from the previous call to callbackFn. On the first call, its value is initialValue if the latter is specified; otherwise its value is array[0].

// currentValue
// The value of the current element. On the first call, its value is array[0] if initialValue is specified; otherwise its value is array[1].
const  number = [
  1,2,3,
  [
    4,5,6,
    [
      7,8,9
    ]
  ],

4,6,10]

const flattens = (value)=> value.reduce((acc,item)=>
 
 acc.concat(
    
    Array.isArray(item) ? flatten(item):item,

 ),[]
 
 
 )
 console.log(flattens(number))
 //////////////////////////////////////
 
 function longestnumber(value){
        let logestnum = 0
        for(i=0;i<value.length;i++){
            if(value[i]>logestnum){
                logestnum = value[i]

            }
        }
        return logestnum

 }

 console.log(longestnumber(flatten(number)))

//longestnumbet


  function longestnumbet(arrey){
    let longest = 0
    for(i=0;i<arrey.length;i++){
        if(arrey[i]>longest){
              longest = arrey[i]
        }
    }
    return longest
  }

  console.log(longestnumbet([3, 6, 2, 56, 32, 5, 89, 32])) //Ans : 89

//===>1
//Sort each string in an array
//forecach method
function Sortstrings (array){
    // const newArray = array.slice();
    // console.log(newArray)
    array.forEach((string, index) => {
       
      const sortedChars = string.split('').sort().join('');
      array[index] = sortedChars;
    //   console.log(index)
    });
    
    return array;
 }
 console.log(Sortstrings(['orange', 'apple', 'banana', 'pear']))
 
//[ 'aegnor', 'aelpp', 'aaabnn', 'aepr' ]

 //===>2
// Fibonacci sequence array
//
function getFibonacci(n){
  if(n===1){
     return [0]
  }else if (n===2){
     return [0,1]
  }else{
  const result = [0,1]
  for(let i = 2; i < n ;i++){
  // fn = fn-1 +fn-2
     const nextnumber =result[i-1] +  result[i-2]
   
     result.push(nextnumber)
  } 
  return result 
  }
}
console.log(getFibonacci(6)); 
 //===>3
 //// First non-repeating character
 function nonrepeating(str){
  const charCount= {}
  for(let i =0;i<str.length;i++){
       const char = str[i]
       
       charCount[char] =charCount[char]? charCount[str]+1:1
     
    }
  for(let i=0;i<str.length;i++){
      const char = str[i]
      if(charCount[char]===1){
          return char
      }
  }
  return  null
}

console.log(nonrepeating("helooh"))
 //===>3
 //// First non-repeating character
// The indexOf() method returns the position of the first occurrence of a value in a string.

// The indexOf() method returns -1 if the value is not found.

// The indexOf() method is case sensitive.

 function nonrepeatings(string){
  
  for( i =0; i<string.length;i++){
      if(string.indexOf(string.charAt(i))=== string.lastIndexOf(string.charAt(i))){
        console.log(string.charAt(i))
        break
      }
    }
 }
 
 console.log(nonrepeatings("helloohe"))
 ///===>4
 //Longest string in the array
function Longeststring(string){
  if(string.length===0)return ""
    let longest = null
    
  for(let i=0;i<string.length;i++){
   
      if(longest===null || string[i].length > longest.length){
          
          longest = string[i]
      }
    
  }
  return longest;
}
console.log(Longeststring(["aa",'aac','adfcs']))
///////////
function longest(abc){
  let maxlength = null
  for(i=1;i<abc.length;i++){
          if (maxlength === null || abc[i].length > maxlength.length){
              maxlength =abc[i] 
          }

  }
   let maxstring = []
   for(ele of abc){
    console.log(ele)
      if(ele.length==maxlength.length){
          maxstring.push(ele)
      }
      console.log(maxstring)
   }
}



longest(['sree',"kanthees","kantheee"])

 
 ///===>5
 //Sum numbers from a string
//step=1
function sumnumber(str){
  if (!str) return 0

  const nums = str.split(',');
   return   nums.reduce((acc, num) => acc + parseInt(num), 0)
  
}

console.log(sumnumber("1,12"))
///
const numbers = [2, 4, 6,5];

const sums = numbers.reduce(function(sum, number) {
   
  const updatedSum = sum + number;
  
  return updatedSum;
}, 0);

console.log(sums)

////////////////////////////////

///===6
//max-Characters
function maxCharacters (strs){
  const charmap= {}
  let max = 0  
  let maxchar = " "
  for ( let char of strs){
     
     charmap[char]= charmap[char]+1 || 1
  }
  
  for ( let char in charmap){
    
     if(charmap[char]>max){

         max = charmap[char]
         maxchar =char
     }
  }
  return maxchar
}

console.log(maxCharacters("helosssssssss,hhhhhhelpp"))

//////

function maxCharacters (string){
  const charcount = {}
  for(i=0;i<string.length;i++){
          let char = string[i]
          charcount[char]= charcount[char] ? charcount[char]+1 :1

      }
      return charcount
}



console.log(maxCharacters("helosssssssss,hhhhhhelpp"))  //{ h: 7, e: 2, l: 2, o: 1, s: 9, ',': 1, p: 2 }







//===>7
//Palindrome checker
function Palindromes(string){
  string = string.toLowerCase()
  return string === string.split('').reverse().join()

}
  console.log(Palindromes("racecar"))

//////IMP

function sree(str){
  let reverse = str.split("").reduce((acc, char) => char + acc, "");
  return reverse === str
}
//for (variable of iterable) {
  // code block to be executed
// }
function Palindromesss(str){
let reverse = '' 
for(char of str){
  reverse = char + reverse

}
if(str ===reverse){
  return true
}else return false
}
console.log(Palindromesss("racecar"))
//////////////////////////////////////////
//===>8
//sortedIndex imp
const sortedIndex = (arr, value) => {
  
  let low = 0;
  let high = arr.length;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
   
    if (arr[mid] < value) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
}

console.log(sortedIndex( [1 , 35,5, 7, 9] ))



////==>9 -a
//Remove-values
// The indexOf() method returns -1 if the value is not found.
const removeValues = (arr1, arr2) => {
       
  for (let i = 0; i < arr2.length; i++) {
    let index = arr1.indexOf(arr2[i]);
    
    while (index !== -1) {
      arr1.splice(index, 1);
      index = arr1.indexOf(arr2[i]);
    }
  }
  return arr1;
}
console.log(removeValues( [1,2,3,6,4,],[1,2,5,96,4]))

//The concat() method joins two or more strings.
//includes() returns true if an array contains a specified element:
//==>9 -b
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

///===>10
//Get strings starting with a vowel
const getStringsWithVowels = (array) => {
  const vowel = ['a','e','i','o','u']
  const fliter = array.filter((e)=>{
      return vowel.includes(e.charAt(0).toLowerCase())
  })
  return fliter
}

console.log(getStringsWithVowels(['apple', 'banana', 'orange', 'pear']))
//
///==>11
//isPalindromes number 
const isPalindromes = (number) => {
  const stringNum = number.toString();
  return stringNum === stringNum.split('').reverse().join('') === true ? true : false
}

console.log(isPalindromes(1233214))
////
//===>12
//Anagram checker
const areAnagrams =(strone ,strtwo)=>{
  const strones = strone.toLowerCase()
  const strtwos = strtwo.toLowerCase()
  if(strone.length !== strtwo.length){
    return false
    
  }
  const sortendstrone = strones.split('').sort().join()
  const sortendstrtwo = strtwos.split('').sort().join()
return sortendstrone ===sortendstrtwo
}

console.log(areAnagrams('cinema', 'iceman'))
///===>13
//Rotate an Arry 
function rotate(nums, k) {
  for (let i = 1; i <= k; i += 1) {
   
    const poppedNum = nums.pop();
     
    nums.unshift(poppedNum);
  }

  return nums;
}
console.log(rotate([1,2,3,6,4  ], 3))
///===>14
// Frequencycounter
const Frequencycounter =(arre)=>{
    const count = {}
    for( ele of arre){
      if(!count[ele]){
        count[ele]=1
      }else{
        count[ele]++
      }
    }
   return count
} 

console.log(Frequencycounter([1,2,2,3]))
//
const frequencyCounter = (arr) => {
  return arr.reduce((counter, element) => {
    if (!counter[element]) {
      counter[element] = 1;
    } else {
      counter[element]++;
    }
    return counter;
  }, {});
}
///it checks if an entry for the element already exists in the counter object. If the entry doesn't exist, it creates a new entry with a value of 1. If the entry already exists, it increments the value by 1. Finally, after iterating over all elements in the input array, the function returns the counter object, which contains the frequency of each element in the input array.
///===>15
//// remove-Duplicates
const removeDuplicates = (str) => {
  if (str.length === 0) {
    return "";
  }
  //array.filter(function(currentValue, index, arr), thisValue)
  return str.split("").filter((ch, index, arr) =>

   arr.indexOf(ch) === index).join("");
   
}
console.log(removeDuplicates("abcccccdef")) 

///
 //simple
function removeDuplicates (str){
  if (str.length === 0) return ""
  let uniquearr = []
  for (ele of str){
      if(uniquearr.indexOf(ele) == -1){
          uniquearr.push(ele)
      }
  }
  return uniquearr.join('')
  
}
console.log(removeDuplicates('abcccccdef')) 
//////===>16
//////mostCommon
const mostCommon = (arr) => {
  const map = {};
  let maxCount = 0;
  let mostCommon = null;
  
  for (const element of arr) {
    if (map[element]) {
      map[element]++;
    } else {
      map[element] = 1;
    }
    
    if (map[element] > maxCount) {
      maxCount = map[element];
      mostCommon = element;
    }
  }
  
  return mostCommon;
}

console.log(mostCommon(['apple', 'banana', 'apple', 'cherry', 'cherry', 'cherry']))
/////
////====>17
/////Flatten an array of nested arrays

const flatten = (arr) => {
  return arr.flat(Infinity)
}
console.log(flatten([[1,2,[3]],4]))
///
//////====>18
///Invert an object

const Invertanobject =(obj)=>{
  const inverted ={}

for (const key in obj) {
 
  inverted[obj[key]] = key;
  

}
return console.log(inverted);
}
Invertanobject('hello')
/////
//===>19
///two-sum
const twosum =(num,target)=>{ 
  let memory ={}
 
  //step-1 iterate through  the integer arry 
  for (let i=0;i<num.length;i++){
      // step=2  check if for a given integer is a another 
      //integer  as pair to give target -->
      if(typeof memory[num[i]]==="undefined"){
        console.log( memory[num[i]])
            memory[target -num[i]]=i
        }else {
          return [memory[num[i]],i]
        }
    }
}
//eplantion 
// i=0 num[i]=2
// memory[9-2]=0
//memory[7]=0
//i=1,nums[i]=7
// memory[7]not undefined
//return [memory[7],1] -->[0,1]

console.log(twosum([2,7,11,15],9))
///
///===>20
//range 
function range(start, end, step = 1){
  if (step <= 0 || start >= end) {
    return [];
  }
  
  const result = [];
  for (let i = start; i < end; i += step) {
    result.push(i);
  }
  
  return result;
}
 
console.log(range(1,6))
/////
////===>21
//Array.sort - date

 

 const   Arraysort = (events) => {
    return events.sort((a,b)=>{
      
             return new Date(a.date) - new Date(b.date)
    })
}
 
console.log(Arraysort(

   events = [
    { name: 'Event 1', date: '2022-10-20', location: 'New York' },
    { name: 'Event 2', date: '2023-02-10', location: 'Paris' },
    { name: 'Event 3', date: '2023-01-01', location: 'Tokyo' },
  ]
))
/////
////
// When you sort an array with .sort(), it assumes that you are sorting strings. When sorting numbers, the default behavior will not sort them properly.

// The function that you pass tells how to sort the elements. It takes two parameters (a and b) that represent any two elements from the array. How the elements will be sorted depends on the function’s return value:
//IMP*******
// if it returns a negative value, the value in a will be ordered before b.
// if it returns 0, the ordering of a and b won’t change.
// if it returns a positive value, the value in b will be ordered before a.
// When you pass the function (a, b) => a - b, you’re telling the .sort() function to sort the numbers in ascending order.
////
const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

// sort by value
items.sort((a, b) => a.value - b.value);

// sort by name
items.sort((a, b) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
///
//===>22
//Limit function execution I
// In this coding challenge, you will be implementing a function callbackAtMostOnce(callback) that accepts a callback function and returns a new function that can be called at most once. The returned function should behave like the original callback function, except that it should only be called at most once. After the function has been called once, any further calls to the function should do nothing and return undefined.

// The returned function should take any number of arguments, which should be passed on to the original callback function when it is called.
const callbackAtMostOnce = (callback) => {
  let called = false;

  return function (...args) {
    if (!called) {
      called = true;
      return callback(...args);
    }
  };
}
console.log(callbackAtMostOnce(",,,"))

///===>23
///Compare two arrays
///
const areArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
console.log(
  areArraysEqual([1, 2, 3], [1, 2, 3])   
  
)
///
///==>24
//Limit function execution II
  const callbackAtMostN = (callback, n) => {
  let count = 0;

  return function (...args) {
    if (count < n) {
      count++;
      return callback(...args);
    }
    return undefined;
  };
}

////
//===>25
//Get value from an object
// Write a function called get(key, object) that takes a key and an object as input and returns the value assigned to the key in the object.

// The object can have many nested objects in it. The function should recursively search for the key in the object and its nested objects and return the value if found, or undefined if not found. If the object is null or undefined, the function should return undefined.

// The function should not modify the original object. If there are many identical keys at different levels then return the one that is higher in the nesting hierarchy.

// Directions
// If the key doesn’t exist or the input object is not valid, return undefined.

// If there are multiple keys found, return the one higher in the nesting hierarchy.



const get = (key, object) => {
  if (typeof object !== 'object' || object === null) {
    return undefined;
  }

  if (key in object) {
    return object[key];
  }

  for (const objKey in object) {
    const value = get(key, object[objKey]);
    if (value !== undefined) {
      return value;
    }
  }

  return undefined;
}
//
//===>27
///Get time left
//
// Write a function called getTimeLeft(years, months) that takes in two number arguments called years and months. The function should treat the arguments as a countdown until some unspecified event and return a human-readable string representing how much time is left. The string should follow this format: X year(s) and Z month(s).

// For example, if years is 1 and months is 6, the function should return the string "1 year and 6 months"

const getTimeLeft = (years, months) => {
  const yearsString = years === 1 ? "year" : "years";
  const monthsString = months === 1 ? "month" : "months";

  return `${years} ${yearsString} and ${months} ${monthsString}`;
}
console.log(getTimeLeft(1,3))
//===>28
//Validate Email Address

const validateEmailAddress = (email) => {
  const emailRegex = /^[^@]+@[^@.]+(\.[^@.]+)+[^@]*$/
  return emailRegex.test(email);
}
console.log( validateEmailAddress("sree@gmail.com"))
///
///===>29
//Validate Passwords
//
// Write a function called validatePasswords(first, second), which takes two string arguments called first and second. Your function needs to check if:

// passwords are equal
// passwords follow the provided password policy.
// If both the conditions are met then return true, otherwise return false.
///IMP***
// Password policy: “Minimum 8 characters long, at least 1 letter, 1 number and 1 special character”
const validatePasswords = (first, second) => {
  if (first !== second) {
    return false;
  }

  const passwordFormat = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return passwordFormat.test(first);
}
// console.log(validatePasswords('1234567', '1234567') )
console.log(validatePasswords('abcdefgH1@', 'abcdefgH1@') // Output: true

)
////===>30
///Capitalise all words

const capitaliseAllWords = (input) => {
  if (!input) return ''
  return input.split(' ')
    .map(word => word[0].toUpperCase()+ word.slice(1) )
    .join(' ');
};
console.log(capitaliseAllWords("helllo"))
//
//===>31
//Compare two objects
// The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.
const object1 = {
  a: 'somestring',
  b: 42,
  c: false,
};

console.log(Object.keys(object1));
// Expected output: Array ["a", "b", "c"]




const areObjectsEqual = (obj1, obj2) => {
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (let key of obj1Keys) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 2, c: 3 };

console.log(areObjectsEqual(obj1,obj2))
///
///===>32
//Remove all whitespaces

const removeWhitespaces = (string) => {
  return string.replace(/\s/g, '');
}
console.log(removeWhitespaces("    sree"))
//
//===>33
//reverse method
//
const reverseArray = (array) => {
  return array.reverse();
}
console.log(reverseArray([1,2,3]))
///
//===>34
//
const isLeapYear = year => {
  if (year <= 0) {
    return false;
  }

  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isLeapYear(2000))
//
//===>35
//String.split
const splitSentence = (sentence) => {
  return sentence.split('')
}
console.log(splitSentence("sree"))
///
//===>36
//Remove falsy values
const removeFalsy = (arr) => {
  return arr.filter(Boolean);
}
///===>37
//Remove vowels
const removeVowels = (strs) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  const chars = strs.split('');

  const filteredChars = chars.filter(char => !vowels.includes(char.toLowerCase()));

  const result = filteredChars.join('');

  return result;
}
console.log(removeVowels('Hello, World!'))
///
//===>38
//Random in range

const randomInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(randomInRange(1,10))
///===>39
//Find the largest number in array
const findMax = (arr) => {
  if (arr.length === 0) {
    return null;
  }

  const sortedArr = arr.sort((a, b) => b - a);
  return sortedArr[0];
};
console.log(findMax([4, 7, 2, 9, 1, 5]))
///===>40
//Array.lastIndexOf
const findLastIndexOf = (array, value) => {
  return array.lastIndexOf(value);
}
const sree = [1,2,3]
 console.log(findLastIndexOf([1, 2, 3, 2], 2))
 ///
 //===>41
 //Sum even numbers
 const sumOfEvens = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
};
console.log(sumOfEvens([1, 1, 1, 2, 2,2, 2, 3, 3, 3]))
/////
const even = [];
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const num of arr) {
    if (num % 2 === 1) {
        even.push(num);
    }
}
console.log(even);


 ///
 //===>42
//  Format Money
const formatMoney = (amount) => {
  return "$" + amount.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
console.log(formatMoney(1))
 ///
 //===>43
 //Sum every third number
 const sumOfThirds = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 3) {
    sum += arr[i];
  }
  return sum;
};
console.log(sumOfThirds([1, 1, 2, 3, 2, 2, 3, 3, 3]))
 ///
 //===>44
 //Array.find I - string
//  Array.find I - string
//  In this coding challenge, you will be implementing a function called getLongerThanFour(array) that takes an array of strings array. This function should return the first element that’s longer than 4 characters.
const getLongerThanFour = (array) => {
  return array.find(str => str.length > 4) || null;
}
console.log(getLongerThanFour(['hell', 'world', 'foo']))
 ///
 //===>44
//  Count vowels
// Write a function countVowels(str), which takes a string str as an input. This function should return the total number of vowels in str.

//The includes() method returns true if an array contains a specified value. The includes() method returns false if the value is not found. The includes() method is case sensitive.

const countVowels = (strss) => {
  if (!strss) {
    return 0;
  }

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let i = 0; i < strss.length; i++) {
    if (vowels.includes(strss[i].toLowerCase())) {
      count++;
    } 
  }

  return count;
};

console.log(countVowels("Hello world"))
//
//===>45
//String.toLowerCase
// In this coding challenge, you will be implementing a function called getLowerCase(word) that takes one argument: a word. The function should return the word converted to lowercase.
const getLowerCase = (word) => {
  return word.toLowerCase();
}
console.log(getLowerCase("Hello"))
//==.46
//Object.values
// In this coding challenge, you will be implementing a function called getValues(object) that takes an argument: an object. The function should return an array will all of the object’s values.

const getValues = (object) => {
  return Object.values(object);
}
const object = { foo: 1, bar: 2, baz: 3 };
console.log(getValues(object))

//===>47
//Join two arrays
const joinArrays = (arrOne, arrTwo) => {
  return arrOne.concat(arrTwo);
}
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(joinArrays(arr1,arr2))
//
//===>48
//String.lastIndexOf

const findLastIndexOfs = (string, substring) => {
  return string.lastIndexOf(substring);
}

console.log(findLastIndexOfs('hello world', 'o'))
//==>49
//Array.unshift
const addFromBeginning = (array, value) => {
  array.unshift(value);
  return array;
}
console.log(addFromBeginning([1, 2, 3], 0))
//
//50
//Array.find II - object
// In this coding challenge, you will be implementing a function called getAnAdult(users) that takes an array of objects users. This function should return the first object which property age corresponds to a value greater or equal to 18.

const getAnAdult = (users) => {
  return users.find(user => user.age >= 18) || null;
}

const users = [
  { name: 'John', age: 15 },
  { name: 'Jane', age: 20 },
  { name: 'Bob', age: 25 },
];
console.log(getAnAdult(users))

//===>51
// Array.every I - strings
// In this coding challenge, you will be implementing a function called validateStrings(array) that takes one argument: an array. The function should check if every element of the array is a string.
const validateStrings = (array) => {
  return array.every((element) => typeof element === 'string');
}
console.log(validateStrings(['hello', 123]))

//===>52
//Reverse words in a string
const reverseSentence = (sentence) => {
  const words = sentence.split(' ');
  const reversedWords = words.reverse();
  const reversedSentence = reversedWords.join(' ');
  return reversedSentence;
}
console.log(reverseSentence('hello world'))

//===>53
//Array.indexOf
const findIndexOf = (array, value) => {
  return array.indexOf(value);
}
console.log(findIndexOf(['foo', 'bar', 'baz'], 'baz'))
//===>54
//String.toUpperCase
const getUpperCase = (word) => {
  return word.toUpperCase();
}
console.log(getUpperCase('hello'))
//==>55
//Array.pop
const remove = (array) => {
  array.pop();
  return array;
}
console.log(remove([1, 2, 3]))
//===>56
//String.indexOf
const findIndexOfss = (string, substring) => {
  return string.indexOf(substring);
}
console.log(findIndexOfss('hello world', 'world'))
////===>57
//Array.every II - objects
const validateObject = (users) => {
  return users.every(user => user?.firstName);
}
const users1 = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Jane', lastName: 'Doe' },
]; 
console.log(validateObject(users1))
//===>58
//Array.push
const append = (array, value) => {
  array.push(value);
  return array 
}
console.log(append([1, 2, 3], 4))
//===>59
///Array.shift
const removeFromBeginning = (array) => {
  array.shift();
  return array;
}
console.log(removeFromBeginning(['foo', 'bar', 'baz']))
//==>60
//Array.includes
const isInArray = (array, value) => {
  return console.log(array.includes(value));
}
const fruits = ['apple', 'banana', 'orange'];
isInArray(fruits, 'banana'); 
//
//===>61
//String.includes
const containsSubstring = (string, substring) => {
  return string.includes(substring);
}
console.log(containsSubstring('Hello, world!', 'world'))
//
//===>62
//Array.filter II - objects
// Implement a function called getAdultUsers(users) that takes an array of user objects as input and returns a new array containing only the users who are at least 18 years old.
const getAdultUsers = (users) => {
  return users.filter(user => user.age >= 18)
}
const userss = [
  { name: 'John', age: 21, height: 180 },
  { name: 'Mary', age: 17, height: 165 },
  { name: 'Bob', age: 25, height: 175 },
  { name: 'Jane', age: 15, height: 170 }
];
const adultUsers = getAdultUsers(users);
console.log(adultUsers);
//
//===>63
// Array.map I - strings
// Write a function called mapToUppercase(names), which takes an array of strings called names as its argument. This function should return a new array with all of the strings transformed to UPPERCASE.
const mapToUppercase = (names) => {
  return names.map(name => name.toUpperCase())
}
const names1 = ['john', 'mary', 'bob', 'jane'];
const uppercasedNames1 = mapToUppercase(names1);
console.log(uppercasedNames1);
//
//===>64
//Array.filter I - numbers
// Implement a function called getLessThanFive(numbers) that takes an array of numbers as input and returns a new array containing only the elements that are strictly
//  less than 5.
const getLessThanFive = (numberss) => {
  return numberss.filter(number => number < 5)
}
const numberss = [2, 6, 3, 7, 1, 9, 4];
const lessThanFive = getLessThanFive(numberss);
console.log(lessThanFive);

//===>65
//Array.sort - ascending
// In this coding challenge, you will be implementing a function called sortAscending(numbers), which takes in an array of numbers as input and returns the same array but sorted in ascending order.

const sortAscending = (numbe) => {
  return numbe.sort((a, b) => a - b);
};

const numbe = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
 
console.log(sortAscending(numbe))

//===>66
//Random
// Write a function random() that takes no arguments and returns a random integer between 0 and Number.MAX_SAFE_INTEGER.
const random = () => {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
}
const randomNum = random();
console.log(randomNum);
//===>67
// //Array.map II - objects
// Write a function called getAges(users), which takes in an array of objects users as an argument. Each user object has three properties: name, age, and height. Return a new array that contains only the ages of the users.


const getAges = (usersss) => {
  return usersss.map(user => user.age);
}
const usersss = [
  { name: 'John', age: 25, height: 175 },
  { name: 'Mary', age: 30, height: 165 },
  { name: 'Bob', age: 40, height: 180 },
  { name: 'Jane', age: 20, height: 170 }
];

const ages = getAges(usersss);
console.log(ages);
//===>68
// Array.join I - strings
// In this coding challenge, you will be implementing a function called joinElementsWithUnderscore(array) that takes an array as input and returns a string. The returned string should consist of all the array elements joined by an underscore _.

const joinElementsWithUnderscore = (array) => {
  return array.join("_");
}
const array = ['apple', 'banana', 'orange', 'grape'];
const joinedString = joinElementsWithUnderscore(array);
console.log(joinedString); 
//
//===69
//Array.sort - descending
const sortDescending = (nums) => {
  return nums.sort((a, b) => b - a);
}
const nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
 
 console.log(sortDescending(nums)); 
//===>70
//Array.map III - numbers
// Write a function called doubleNumbers(numbers) that takes an array of numbers as an argument and returns a new array with every element of the input array doubled
const doubleNumbers = (numberse) => {
  return numberse.map(n => n * 2)
}
const numberse = [1, 2, 3, 4, 5];
const doubledNumbers = doubleNumbers(numberse);
console.log(doubledNumbers);
///imp
//===>71
// Generate a random color
// Write a function getRandomColor(), which takes in no arguments. The function has to return a random color in a hexadecimal format.
// Hex color codes start with a pound sign or hashtag (#) and are followed by six characters.
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
console.log(getRandomColor())
//===>72
//Convert a string to slug
// Write a function convertToSlug(str), which takes a string str as an argument. This function should transform the input string into a slug.

// A slug is a URL-friendly version of a string. It is commonly used in website URLs to create human-readable links. A slug typically consists of lowercase letters, numbers, and hyphens, with no spaces or special characters. For example, the slug for the article "10 Tips for Better Sleep" might be "10-tips-for-better-sleep".

const convertToSlug = (str) => {
  if (str === '') {
    return '';
  }

  const words = str.split(' ');
  const slug = words.join('-').toLowerCase();
  
  return slug;
}

console.log(convertToSlug("This is an example string"))
//===>73
// Capitalise a word
// Implement a function called capitalizeWord(word) that capitalizes the first letter of the input string word and returns the capitalized string.
const capitaliseWord = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
console.log(capitaliseWord('hello'))

//////////////////////////////////////



let name = "sreek anth" 
console.log(name.split('').reverse().join())

/////
let reverse = name.split().map((word)=>{
        return word.split('').reverse().join()
})
console.log(reverse.join())
///////////
//03=> how to check if an object is an arry or not ?
 function checkarry(arry){
    return Array.isArray(arry)
 }
console.log(checkarry([]))
console.log(checkarry({}))
//
//04=> how to empy array in javascript?
 let sreess = [1,23,6,9,7]
 console.log(sreess.length)
 console.log(sreess.length=0)
 //06 how to check the number integer ?
 let a  = 12
 if (a%1==0){
    console.log("is integer")
 }else{
    console.log("not !")
 }
 
 // 05> make to this ducliate let a =[1,2,3]
 
 function ducliate(ab){
   
    return ab.concat(ab)
 }
console.log( ducliate([1,2,3]))
///function use to reverse
 

let srees = function (abc){
    
    return abc.toString().split('').reverse().join()
}
console.log(srees(13))

//////////////////////////////////
function reversers(num){
  var rev = 0
    while(num>0){
        let rem = num%10
        rev = rev*10 + rem
        num = Math.floor(num/10)
    }
return rev
}
console.log(reversers(123))
//rem = 123 % 10 = 3
//rev = 0 * 10 + 3 = 3
//num = Math.floor(123 / 10) = 12
//

 function stringpalindrome(res){
        let reverse = res.split('').reverse().join( )
        console.log(reverse)
        if(reverse === res){
            return true
        }else {
            return false
        }
 }
 console.log(stringpalindrome("lool"))
console.log(stringpalindrome("loop"))


//uppercase

function uppercase(str){
        let allwork = str.split(' ').map((e)=>{
              return  e.charAt(0).toUpperCase() + e.substring(1)
        })

        return allwork.join(' ') 

}
console.log(uppercase("srikanth mahesh"))

///count strings 


function ocsc(strs){
    let occurens= {}
    strs.split('').forEach((e) => {
        if(occurens.hasOwnProperty(e)===false){
            occurens[e] = 1
        }else{
            occurens[e]++
        }
    });
    console.log(occurens)
}
 ocsc("sressesss")


//  looppssssss
 
let  arr = [1,2,2,,3,6,4,,8,9]
 let sum = 0
 arr.forEach((elm)=>{
        sum = sum + elm
 })
 console.log(sum)
 ///////////
 let arrs = ["sssdfs" ,55,331,"sssss"]
 let sumss = 0
 arrs.forEach((e)=>{
    if (typeof e === "number"){
        sums = sumss + e
    }
 })
 console.log(sumss)

 ///////////

let names  = [
    {name:"sree" ,g :"male",},
    {name:"kanth " ,g :"female",},
    {name:"kanthss " ,g :"female",},
    {name:"sreee " ,g :"male",}
] 

let gender = names.filter((e)=>{
    return e.g !== "male"
})

console.log(gender)

let count = 0
let countgender  = names.forEach((ele)=>{
        if (ele.g !== "male") count++
})
console.log(count)

console.log("//////////")
  
function countes(){
    let count = 0
    for(let i=1; i <=count ; i++){
        for(let j=0; j< names.length;j++){
            if(names[j].g !== "male"){
                names.splice(j,1)
               
            }
            
        }
     }
}

console.log(countes())


///////////////////////////
// clone the arry 
function clonearr (arr){
        return [...arr]
}

let news = clonearr([1,2,3])
console.log(news)

function clonenewarr (arr){
    let newsarr = []
    arr.forEach((ele)=>{
        newsarr.push(ele)
    })
    return newsarr
}
let abdc = [14,7,8,]
 let newsarrr = clonenewarr(abdc)
 console.log(newsarrr)

//////////////
 function typeTeller (e){
     return typeof e
 }
console.log(typeTeller([]))
console.log(typeTeller(12))
console.log(typeTeller("s"))
console.log(typeTeller(true))
console.log(typeTeller(undefined))
/////////////////////////////////////////////

function retriver (arr,n=1){
        if(n<=arr.length){
            for(i=0;i<n;i++){
                console.log(arr[i])
            }
        }else{
            console.log('no elemnets ')
        }
}
retriver([1,5,8,9],2)
/////////////////////////////////////////

function retrivers (arr,n=1){
    if(n<=arr.length){
        for(i=0;i<n;i++){
            console.log(arr[arr.length-1-i])
        }
    }else{
        console.log('no elemnets ')
    }
}
retrivers([1,5,8,9,7,7],2)

//////////////////////////
// function freq(arres){
//     let freq = {}
//     arres.forEach((ele)=>{
//         if (freq.hasOwnProperty(ele) )freq[ele]++
//         else freq[ele]=1

//     }) 
//     let ans = Object.keys(freq).reduce((acc,next)=>{
//         // console.log(acc)
//         console.log(next)
//             return freq[acc]> freq[next] ? acc: next
//     })
//     console.log(ans)
// }
// freq([5,6,9,88,52,2,2,2,5])

////Duplicate value/////

function findDuplicates(array) {
    let counts = {};
  
    array.forEach(element => {
      // Initialize count to 0 if the element is encountered for the first time
      counts[element] = (counts[element] || 0) + 1;
    });
  
    // Iterate through the counts object and log duplicates
    for (let key in counts) {
      if (counts[key] > 1) {
        console.log(`Duplicate value: ${key}`);
      }
    }
  }
  
  // Example usage:
  const myArray = [1, 2, 3, 4, 2, 5, 6, 7, 8, 9, 1];
  findDuplicates(myArray);

/////reducer
let arrsss = [7, 7,4,5,6,1,2]
let sreesss = arrsss.reduce((acc,ele)=>{
    if(acc>ele) return acc
    
    else return ele

}) 
console.log(sreesss)
console.log("break")

//////rendom
console.log("////////////////")
function shufferchai(arres){
        let totalarea = arres.length
        while(totalarea>0){
            totalarea --
            let indexchanged = Math.floor(Math.random()*totalarea)
                // console.log(indexchanged)
            let tem = arres[totalarea]
            arres[indexchanged]=arres[indexchanged]
            arres[indexchanged]=tem
        }
        return arres
}
console.log(shufferchai([1,2,3,6,5,4,8]))



/////////////////
function union (arr1,arr2){
    // return [...new Set(arr1.concat(arr2))]
    return arr1.concat(arr2)

}
console.log(union([12,1,] ,[4,5,69]))

/////////////////

function shuffleArray(arr) {
    let totalElements = arr.length;

    while (totalElements > 0) {
        totalElements--;

        let randomIndex = Math.floor(Math.random() * (totalElements + 1));

        // Swap elements using a temporary variable
        let temp = arr[totalElements];
        arr[totalElements] = arr[randomIndex];
        arr[randomIndex] = temp;
    }

    return arr;
}

console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//////
////
// Write a JS code to print numbers from 1 to 10
function sree(){
  for (let i=1 ;i<10;i++){
      console.log(`hello 1 :${i}`)
  }
}
sree()


// Write a JS code to print a 2D array
function sreee(arr){
  for (let i =0;i<arr.length;i++){
      for(let j=0;j<arr[0].length;j++){
          console.log(arr[i][j])
      }
  }
}
let arreee = [
  [1,2],
  [3,4],
  [5,6]
]
sreee(arreee)

//3. Write a JS code to print Even numbers in given array
function Even(arr){
  for(i=0;i<arr.length;i++){
      if(arr[i]%2===1){
              console.log(`Even = ${arr[i]}`)
      }
  }

}
Even('1,25,8,9,6,3,')


// Write a JS code to delete all occurrence of element in given array
function deleteElemen(arrs,item){
  for (let i =0;i<arrs.length;i++){
      if(arrs[i]== item ){
          arrs.splice (i,5)
          console.log(`heoo ${item}`)
      }
      return arrs
  }
  
}

let arree = [1,4,5,6,9,8,7,2,3,]
are = deleteElemen(arree,1)
console.log(are)

//  5. Write a JS code to demonstrate Async loop

for(var i=0;i<5;i++){
  console.log([i])
  // setTimeout(()=>console.log(i), 5000);// 5 5 5 5 5
}

//   6. Write a JS code to find the power of a number using for loop
function power(num,power){
  let res = 1
  for(let i=0;i<power;i++){
          res = res*num 
          console.log(num)
  }
  return res
}
console.log(power(5,2))

// 7. Write a JS code to print a pattern using for loop

function pattern(range){
  for(let i=1;i<=range;i++){
      
      let str = ''
      for(let j=1;j<=i;j++){  
          str += j+" "
          // console.log({j})
      }
     
      console.log(str)
  }
}
pattern(9)
/////////////4444444444444444444444444444444444444444444
let rows = 4;

// variable contains the next element of the pattern
let variable = 1;

// pattern variable carries the final pattern in string format
let pattern = "";

// outer loop runs for `rows` no. of times
for (let n = 1; n <= rows; n++) {
   for (let num = 1; num <= n; num++) {
      pattern += variable+" ";
      variable++;
   }
   pattern += "\n";
}
console.log(pattern);

///
let rowss = 5;

// pattern variable carries the final pattern in string format
let pattern = "";

// outer loop runs for `rows` no. of times
for (let n = 1; n <= rowss; n++) {
   for (let num = 1; num <= 6 - n; num++) {
      pattern += num;
   }
   pattern += "\n";
}
console.log(pattern);

//  8. Write a JS code to find the no of digits in a number
function digitCount(num) {
  var count=0; //return 1 for pow=0
  while(num!=0){
    num=Math.floor(num/10);

    count++;
  }
  return count;
}
console.log(digitCount(53)); //2
console.log(digitCount(563349)); //6

//   9. Write a JS code to calculate the sum of digits in a number
function digitSum(num) {
  var sum=0;
  while(num!=0){
   sum += num % 10;
   console.log(sum)
   num = Math.floor(num/10);
  
  }
  return sum;
}
console.log(digitSum(4367)); //20
console.log(digitSum(56349)); //27

//   10. Write a JS code to find the largest number in an array
var arrss = [2, 45, 3, 67 ];  
var largest = arrss[0];
for(var i=0;i<arrss.length;i++){
  console.log('11111')

 largest = arrss[i]>largest ? arrss[i]:largest;
 console.log( )
 //Check largest number
}
// console.log(largest) //67



console.log("largestnum")
const largestnum = arrss.reduce((a,b)=>{

   
  return (a>b)? a:b

})
console.log(largestnum)

 

function longestnumbet (arr){
  let longest = arr[0]
  for(let i=0;i<arr.length;i++){
    if(arr[i]>longest){
      longest = arr[i]
    }
  }
  return longest
}
 
console.log(longestnumbet([3, 6, 2, 56, 32, 5, 89, 32]))

/////////star pattern in JavaScript//////



 /** --------------

                    *
                   **
                  ***
                 ****
                *****
               ******
              *******
             ********
            *********


            ----------------*/

            let y = 10;
            let x = 10;

            let str = "";

            for(let i = 1; i < y; i++ ){
                for(let j = 1; j < x; j++){
                    if(i + j >= y){
                        str = str.concat("*");
                    }else{
                        str = str.concat(" ")
                    }
                }
                str = str.concat("\n")
            }

            console.log(str)


            /**_______________________



            *********
             ********
              *******
               ******
                *****
                 ****
                  ***
                   **
                    *


             _______________________*/

            let str2 = "";

            for(let i = 1; i < y; i++ ){
                for(let j = 1; j < x; j++){
                    if(i <= j ){
                        str2 = str2.concat("*");
                    }else{
                        str2 = str2.concat(" ")
                    }
                }
                str2 = str2.concat("\n")
            }

            console.log(str2)


            /**----------------------


            *
            **
            ***
            ****
            *****
            ******
            *******
            ********


             -------------------------*/


            let str3 = "";

            for(let i = 1; i < y; i++ ){
                for(let j = 1; j < x; j++){
                    if(i >= j ){
                        str3 = str3.concat("*");
                    }
                }
                str3 = str3.concat("\n")
            }

            console.log(str3)

            /**-------------------------


             *********
             ********
             *******
             ******
             *****
             ****
             ***
             **
             *

             ---------------------------*/
            let str4 = "";

            for(let i = 1; i < y; i++ ){
                for(let j = 1; j < x; j++){
                    if( j >= i ){
                        str4 = str4.concat("*");
                    }
                }
                str4 = str4.concat("\n")
            }

            console.log(str4)

            /**--------------------
             Diamond of Asterisks

                 *
                ***
               *****
              *******
             *********
              *******
               *****
                ***
                 *


             ---------------------*/

            let str5 = "";

            for(let i = 1; i < y; i++ ){
                for(let j = 1; j < x; j++){
                    if(i <= y / 2 && j >= (y / 2) - (i - 1) && j <= (y / 2) + (i - 1) ){
                        str5 = str5.concat("*");
                    }else if(i >= y / 2
                      && j > ((y / 2) -  i) * (-1)
                      && j < (y - ((y / 2) -  i) * (-1))){
                        str5 = str5.concat("*");
                    }
                    else {
                        str5 = str5.concat(" ");
                    }
                }
                str5 = str5.concat("\n");
            }

            console.log(str5)


            
