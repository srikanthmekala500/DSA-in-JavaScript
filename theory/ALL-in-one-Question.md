 

1) console.log(longestnumbet([3, 6, 2, 56, 32, 5, 89, 32])) //Ans : 89
2) console.log(Sortstrings(['orange', 'apple', 'banana', 'pear']))
3) console.log(getFibonacci(6)); 
4) console.log(nonrepeating("helooh"))
5) console.log(Longeststring(["aa",'aac','adfcs','adfcs"]))
6) console.log(sumnumber("1,12"))
7)  console.log(maxCharacters("helosssssssss,hhhhhhelpp"))
8)  console.log(Palindromes("racecar"))
9)  console.log(removeValues( [1,2,3,6,4,],[1,2,5,96,4]))
10) console.log(getStringsWithVowels(['apple', 'banana', 'orange', 'pear'])) 
11) console.log(areAnagrams('cinema', 'iceman')) 
12) console.log(rotate([1,2,3,6,4  ], 3))
13) console.log(Frequencycounter([1,2,2,3]))
14) console.log(removeDuplicates("abcccccdef")) 
15) console.log(flatten([[1,2,[3]],4]))
16) console.log(twosum([2,7,11,15],9))
17) console.log(areArraysEqual([1, 2, 3], [1, 2, 3]))
18) console.log(capitaliseAllWords("helllo"))
19) console.log(removeVowels('Hello, World!'))
20) console.log(findMax([4, 7, 2, 9, 1, 5]))
-------
21) console.log(sumOfEvens([1, 1, 1, 2, 2,2, 2, 3, 3, 3]))
22) console.log(fundEvens([1, 1, 1, 2, 2,2, 2, 3, 3, 3]))
23) console.log(sumOfThirds([1, 1, 2, 3, 2, 2, 3, 3, 3]))
24) console.log(getAnAdult(users)) const users = [
  { name: 'John', age: 15 },
  { name: 'Jane', age: 20 },
  { name: 'Bob', age: 25 },
];
25) console.log(reversers(123)) // using funtion 
26) const myArray = [1, 2, 3, 4, 2, 5, 6, 7, 8, 9, 1];
console.log(myArrays(myArray));
27) console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));
28) Write a JS code to find the no of digits in a number 
    console.log(digitCount(53)); //2
    console.log(digitCount(563349)); //6
29) console.log(digitSum(4367)); //20
30) star pattern in JavaScript
 
 1 >> longestnumbet
 
 2 >>  Sortstrings
 
 3 >>  getFibonacci
 
 4 >>  First non-repeating character
 
 5 >>  Longest string in the array
 
 6 >>  Sum numbers from a string

 7 >>  max-Characters
 
 8 >>  Palindrome checker
 
 9 >>  removeValues arr1,arr2

 10 >>  Get strings starting with a vowel

 11 >>  Anagram checker

12 >>  Rotate an Arry

13 >>  Frequencycounter

14 >>  remove-Duplicates

15 >>   mostCommon

16 >> Flatten an array of nested arrays

17 >>  two-sum

18 >>  three-sum

19 >>  Compare two arrays

20  >> Capitalise all words

21 >>  Find the largest number in array

22  >>  Sum even numbers

23  >>  Sum every third number

24  >>  Capitalise a word first letter

25  >>  uppercase

26  >>  Write a JS code to print Even numbers in given array 

27  >>  Write a JS code to delete all occurrence of element in given array

28  >>  Write a JS code to find the power of a number using for loop

29  >>  All star pattern in JavaScript

30 >>  Diamond of Asterisks


function longestnumbet(num) {
     let longest = 0
     for (i = 0; i < num.length; i++) {
          if (num[i] > longest) {
               longest = num[i]
          }
     }
     return longest
}

console.log(longestnumbet([3, 6, 2, 56, 32, 5, 89, 32])) //Ans : 89

///

function Sortstrings(string) {
     string.forEach((str, index) => {
          let soringarray = str.split('').sort().join('')
          string[index] = soringarray
     })
     return string
}

console.log(Sortstrings(['orange', 'apple', 'banana', 'pear'])) //[ 'aegnor', 'aelpp', 'aaabnn', 'aepr' ]

//
function getFibonacci(n) {
     if (n == 0) {
          return [0]
     } else if (n == 1) {
          return [0, 1]
     } else {
          let reslut = [0, 1]
          for (i = 2; i < n; i++) {
               let fb = reslut[i - 1] + reslut[i - 2]
               reslut.push(fb)
          }
          return reslut
     }
}

console.log(getFibonacci(6));

////
function nonrepeating(str) {
     let charcount = {}
     for (i = 0; i < str.length; i++) {
          let char = str[i]
          charcount[char] = charcount[char] + 1 || 1
     }
     console.log(charcount)  //{ h: 2, e: 1, l: 1, o: 2 }
     for (i = 0; i < str.length; i++) {
          let char = str[i]
          if (charcount[char] === 1) {
               return char
          }
     }
}

console.log(nonrepeating("helooh")) //e
///

function Longeststring(array) {
     let longests = null
     for (i = 0; i < array.length; i++) {
          if (longests === null || array[i].length > longests.length) {
               longests = array[i]
          }
     }
     let maxstring = []
     for (let ele of array) {
          if (ele.length == longests.length) {
               maxstring.push(ele)
          }
     }
     return maxstring
}


console.log(Longeststring(["aa", 'aac', 'adfcs', 'adfcs'])) //[ 'adfcs', 'adfcs' ]

//

function sumnumber(sum) {
     let sums = sum.split(',')
     return sums.reduce((acc, cur) => acc + parseInt(cur), 0)
}



console.log(sumnumber("1,12")) //13

///
function Palindromes(string) {
     let str = string.toLowerCase()

     return string === str.split('').reverse().join('')
}

console.log(Palindromes("racecar")) //true
//
function removeValues(arr1, arr2) {
     
     for (i = 0; i < arr2.length; i++) {
          let index = arr1.indexOf(arr2[i]);
          
          while (index !== -1) {
               arr1.splice(index, 1)
               index = arr1.indexOf(arr2[i]);
               
          }
     }
     return arr1; 
}
console.log(removeValues([1, 2, 3, 6, 4], [1, 2, 5, 96, 4])); //[ 3, 6 ]
//
function getStringsWithVowels(str) {
     const vowel = ['a', 'e', 'i', 'o', 'u']
     const fliter = str.filter((e) => {
               return vowel.includes(e.charAt(0).toLowerCase())
     })
     return fliter
}

console.log(getStringsWithVowels(['apple', 'banana', 'orange', 'pear']))//['apple', 'orange']
//
const areAnagrams = (str1,str2)=>{
     const strOne = str1.toLowerCase()
     const strTwo = str2.toLowerCase()
     if (strOne.length !== strTwo.length) {
          return 'length not equal'
     }
     const strOne1 = strOne.split('').sort().join('')
     const strTwo2 = strTwo.split('').sort().join('')

     return strOne1 === strTwo2
}
console.log(areAnagrams('cinema', 'icemans')) //true


//

function rotate(num, k) {
      
     for (i = 0; i < k; i++){
          let nextnumber = num.pop()
          num.unshift(nextnumber)
     }
     return num
}
console.log(rotate([1, 2, 3, 6, 4], 3))
///
function Frequencycounter (arry){
     let count = {}
     for (ele of arry) {
          if (!count[ele]) {
                    count[ele] = 1
          } else {
                    count[ele]++
               }
     } 
     return count
}

console.log(Frequencycounter([1, 2, 2, 3]))

//
function removeDuplicates(array) {
     let uniqchar = []
     for (ele of array){
          if (uniqchar.indexOf(ele) == -1) {
                    uniqchar.push(ele)
               }
     }
     return uniqchar.join('')
}


console.log(removeDuplicates("abcccccdef")) 


//
function twosum(num,traget) {
     let hasMap = {}
     for (i = 0; i < num.length; i++){
          let Results = traget - num[i]
          if (hasMap.hasOwnProperty(Results)) {
                
               return [hasMap[Results],i]
          }
          hasMap[num[i]] = i 
     }
      
}
console.log(twosum([2, 7, 11, 15], 9))
//
function sumOfEvens(array) {
     let sum = 0
     for (i = 0; i < array.length; i++){
          if (array[i]%2=== 0) {
                    sum +=array[i]                   
               }
     }
     return sum
}
console.log(sumOfEvens([1, 1, 1, 2, 2, 2, 2, 3, 3, 3]))
//

function Evens(num) {
     let sum = []
     for (i = 0; i < num.length; i++){
          if (num[i] % 2 === 0) {
               sum.push(num[i])
          }
     }
     return sum
}

console.log(Evens([1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 8, 10]))
//
function Capitaliseletter(str) {
     let name = str.split(' ')
     return name.map((e) => {
          return e.charAt(0).toUpperCase() + e.substring(1)
     })
    
      
}
console.log(Capitaliseletter('srikanth mekala'))

function Capitaliseletter(str) {
     let name = str.split(' ')
     return name.map((e) => {
          return e.toUpperCase()  
     })


}
console.log(Capitaliseletter('srikanth'))

function digitSum(num) {
     let sum = 0
     while (num !== 0) {
          let sums = num % 10
          sum = sum * 10 + sums

          num = Math.floor(num/10)
     }
     return sum
}
console.log(digitSum(4367))


function digitSum(num) {
     let sum = 0
     while (num !== 0) {
         sum += num % 10
         num = Math.floor(num / 10)
     }
     return sum
}
console.log(digitSum(4367))


let y = 10;
let x = 10;

let str = "";

for (let i = 1; i < y; i++) {
     for (let j = 1; j < x; j++) {
          if (i + j >= y) {
               str = str.concat("*");
          } else {
               str = str.concat(" ")
          }
     }
     str = str.concat("\n")
}

console.log(str)



let str5 = "";

for (let i = 1; i < y; i++) {
     for (let j = 1; j < x; j++) {
          if (i <= y / 2 && j >= (y / 2) - (i - 1) && j <= (y / 2) + (i - 1)) {
               str5 = str5.concat("*");
          } else if (i >= y / 2
               && j > ((y / 2) - i) * (-1)
               && j < (y - ((y / 2) - i) * (-1))) {
               str5 = str5.concat("*");
          }
          else {
               str5 = str5.concat(" ");
          }
     }
     str5 = str5.concat("\n");
}

console.log(str5)
