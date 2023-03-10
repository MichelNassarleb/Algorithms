const isPrime = (number) => {
  let divisor = 2;
  while (number > divisor) {
    if (number % divisor == 0) {
      return false;
    } else divisor++;
  }
  return true;
};

const primeFactors = (n) => {
  var factors = [],
    divisor = 2;

  while (n > 2) {
    if (n % divisor == 0) {
      !factors.includes(divisor) && factors.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }
  return factors;
};
const getFibonacciNumber = (index) => {
  const fibonaccis = [0, 1];
  if (index < 0) return "Should be positive";
  if (index == 0) return "0";
  for (let i = 0; i < index; i++) {
    fibonaccis.push(index[i] + index[i + 1]);
  }
  return fibonaccis[index - 1];
};
const fibonacci = (n) => {
  if (n <= 1) return n;
  else return fibonacci(n - 1) + fibonacci(n - 2);
};
const getGreatestCommonDivisor = (a, b) => {
  var divisor = 2;
  let greatestDivisor;
  if (a < 2 || b < 2) {
    return 1;
  }

  while (a >= divisor && b >= divisor) {
    if (a % divisor == 0 && b % divisor == 0) {
      greatestDivisor = divisor;
    }
    divisor++;
  }
  return greatestDivisor;
};
const removeDuplicate = (arr) => {
  var exists = {},
    outArr = [],
    elm;

  for (var i = 0; i < arr.length; i++) {
    elm = arr[i];
    if (!exists[elm]) {
      outArr.push(elm);
      exists[elm] = true;
    }
  }
  return outArr;
};

const mergeSortedArrays = (arr1, arr2) => {
  const mergedArray = [];
  aElm = arr1[0];
  bElm = arr2[0];
  let i = 0;
  let j = 0;
  if (arr1.length == 0) return arr2;
  if (arr2.length == 0) return arr1;
  while (aElm || bElm) {
    if ((aElm && !bElm) || aElm < bElm) {
      mergedArray.push(aElm);
      aElm = arr1[i++];
    } else {
      mergedArray.push(bElm);
      bElm = arr2[j++];
    }
  }
  return mergedArray;
};
const swapNumbers = (a, b) => {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  return `a:${a}, b:${b}`;
};
const reverseString = (str) => {
  let reversedString = [];
  let j = 0;
  for (let i = str.length; i >= 0; i--) {
    reversedString[j] = str[i];
    j++;
  }

  return reversedString.join("");
};

const reverseWords = (phrase) => {
  let reversedWords = [];
  let j = 0;
  let phraseSplitted = phrase.split(" ");
  for (let i = phraseSplitted.length - 1; i >= 0; i--) {
    reversedWords[j] = phraseSplitted[i];
    j++;
  }
  return reversedWords.join(" ");
};

const reverseWordsInPlace = (phrase) => {
  const splittedPhrase = phrase.split(" ");
  let k = 0;
  let reversedPhraseInPlace = [];

  for (let i = 0; i <= splittedPhrase.length - 1; i++) {
    reversedPhraseInPlace[i] = "";
  }
  for (let i = 0; i <= splittedPhrase.length - 1; i++) {
    for (let j = splittedPhrase[i].length - 1; j >= 0; j--) {
      reversedPhraseInPlace[i] += splittedPhrase?.[i]?.split("")?.[j];
      k++;
    }
  }
  return reversedPhraseInPlace.join(" ");
};

const findFirstNonRepeatingChat = (str) => {
  const numOfChars = {};
  if (str.length == 1) {
    return str[0];
  }
  for (let i = 0; i < str.length; i++) {
    if (!numOfChars[str[i]]) numOfChars[str[i]] = 1;
    else numOfChars[str[i]]++;
  }
  let j = 0;
  const numOfcharKeys = Object.keys(numOfChars);
  while (numOfChars[numOfcharKeys[j]] != 1) {
    j++;
  }
  return numOfcharKeys[j];
};

const removeDuplicateChars = (str) => {
  const numOfChars = {};
  let newStr = [];
  if (str.length == 1) {
    return str[0];
  }
  for (let i = 0; i < str.length; i++) {
    if (!numOfChars[str[i]]) numOfChars[str[i]] = 1;
    else numOfChars[str[i]]++;
  }
  for (var j in numOfChars) {
    if (numOfChars[j] == 1) newStr.push(j);
  }
  return newStr.join("");
};
const isPalindrome = (str) => {
  let reveresedStrArray = [];
  let j = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    reveresedStrArray[j] = str[i];
    j++;
  }
  const reversedWord = reveresedStrArray.join("");
  if (reversedWord == str) return true;
  else return false;
};
let arr = [];
for (let i = 1; i < 101; i++) {
  if (i == 44) console.log(i);
  else arr.push(i);
}
const findMissingNumber = (array) => {
  let foundNums = {};
  for (let j = 1; j < 101; j++) {
    if (array.includes(j)) foundNums[j] = 1;
    else foundNums[j] = 0;
  }
  for (var k in foundNums) {
    if (foundNums[k] == 0) return k;
  }
};
const sumFinder = (arr, sum) => {
  var forLength = arr.length - 1;

  for (let i = 0; i <= forLength; i++) {
    for (let j = i + 1; j <= forLength; j++) {
      if (arr[i] + arr[j] == sum) {
        return `true, ${arr[i]},${arr[j]}`;
      }
    }
  }

  return false;
};

const numberOfZeros = (number) => {
  var count = 0;
  while (number > 0) {
    count += Math.floor(number / 10);
    number = number / 10;
  }
  return count;
};

const sortArrayOfNumbers = (arr) => {
  return arr.sort((a, b) => a - b);
};
const sortArrayOfNumbers1 = (arr) => {
  let num;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        num = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = num;
      }
    }
  }
  return arr;
};
const isValidBracketSequence = (str) => {
  let length = str.length;
  if (str.length == 0) return false;
  if (length % 2 != 0) return false;
  const arr = [];
  for (let i = 0; i < length; i++) {
    if (
      str[i] === "(" ||
      str[i] === ")" ||
      str[i] === "{" ||
      str[i] === "}" ||
      str[i] === "[" ||
      str[i] === "]"
    ) {
      if (str[i] === "(") {
        if (str[i + 1] === ")") {
          arr.push("match");
        } else {
          arr.push("no match");
        }
      }
      if (str[i] === "{") {
        if (str[i + 1] === "}") {
          arr.push("match");
        } else {
          arr.push("no match");
        }
      }
      if (str[i] === "[") {
        if (str[i + 1] === "]") {
          arr.push("match");
        } else {
          arr.push("no match");
        }
      }
    } else return false;
  }
  for (let z = 0; z < arr.length; z++) {
    if (arr[z] === "no match") return false;
  }
  return true;
};

const countAndSortArray = (arr) => {
  if (arr.length == 0) return [];
  let length = arr.length;
  let z = 0;
  let countArray = [];

  let sortedArray = [];
  for (let i = 0; i < length; i++) {
    const arrItem = arr[i];
    if (countArray[arrItem]) {
      countArray[arrItem]++;
    } else {
      countArray[arrItem] = 1;
    }
  }
  for (let j = 0; j < countArray.length; j++) {
    if (!countArray[j]) {
      countArray[j] = 0;
    }
    for (let k = 0; k < countArray[j]; k++) {
      sortedArray[z] = j;
      z++;
    }
  }

  return `count array: [${countArray}]\nsorted Array:[${sortedArray}]`;
};

const validateEmail = (str) => {
  let foundChars = {
    "contains@": 0,
    countainsDot: 0,
    "count@": 0,
    "DotBefore@": 0,
  };
  const length = str.length;
  if (str.length == 0) return false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "@") {
      if (i != 0 && i != length - 1) {
        foundChars["contains@"] = i;
        foundChars["count@"]++;
      } else {
        foundChars["count@"]++;
      }
    }
    if (
      str[i] == "." &&
      i != foundChars["contains@"] + 1 &&
      i != foundChars["contains@"] - 1 &&
      length - 1 - i > 1
    ) {
      if (i > foundChars["contains@"]) {
        foundChars["countainsDot"] = i;
      } else {
        foundChars["DotBefore@"]++;
      }
    }
  }
  if (
    str.length < 257 &&
    foundChars["count@"] == 1 &&
    !!foundChars["contains@"] &&
    !!foundChars["countainsDot"] &&
    !foundChars["DotBefore@"]
  ) {
    return true;
  }
  return false;
};

const findFirstOccurence = (haystack, needle) => {
  // Base condition
  if (haystack == null || needle == null) {
    return -1;
  }
  // Special case
  if (haystack === needle) {
    return 0;
  }
  // length of the needle
  const needleLength = needle.length;
  const haystackLength = haystack.length;
  // Loop over the length of hackstack minus needle's
  for (let i = 0; i < haystackLength - needleLength + 1; i++) {
    if (haystack.substring(i, i + needleLength) == needle) {
      return i;
    }
  }
  return -1;
};
function divide(dividend, divisor) {
  const MAX = 2147483647;
  const MIN = -2147483648;
  // Check for overflow
  if (divisor === 0 || (dividend === MIN && divisor === -1)) {
      return MAX;
  }
  if (divisor === dividend) {
      return 1;
  }
  // Sign of result
  const sign = (dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0) ? -1 : 1;
  // Quotient
  let quotient = 0;
  // Take the absolute value
  let absoluteDividend = Math.abs(dividend);
  let absoluteDivisor = Math.abs(divisor);
  // Loop until the  dividend is greater than divisor
  while (absoluteDividend >= absoluteDivisor) {
      // This represents the number of bits shifted or
      // how many times we can double the number
      let shift = 0;
      let shiftedDivisor = absoluteDivisor;
      while (absoluteDividend >= shiftedDivisor) {
          shift++;
          shiftedDivisor = absoluteDivisor << shift;
          // To handle overflow using left shift operator in JS
          if (shiftedDivisor < 0) {
              break;
          }
      }
      // Add the number of times we shifted to the quotient
      quotient += (1 << (shift - 1));
      // Update the dividend for the next iteration
      absoluteDividend -= absoluteDivisor << (shift - 1);
  }
  return sign === -1 ? -quotient : quotient;
  }
  const convertTemperature = (celsius) => {
    //Define the temperature object
    let tempConverted = {Kevlin:0.0,Fahreheit:0.0}
    //Define the return values array
    let values=[]
    //constraints
    if(celsius <= 0 && celsius >= 1000){
        return [celsius]
    }
    //convert the temperature 
    tempConverted.Kelvin = (celsius + 273.15)
    tempConverted.Fahrenheit =( celsius * 1.80 + 32.00)
    //push the array with the converted values
    values.push(tempConverted.Kelvin,tempConverted.Fahrenheit)
    //return the values
    return values
};

const reverse = (num) => {
  //define the res
  let res = 0
  let x = num
  // Constraints on initial value
  if(x < - Math.pow(2,31) || x > Math.pow(2,31)-1){
      return 0
  }
  //Convert x to a positive number
  x = Math.abs(x)
  //While x is a truthy value(x>0)
  while(!!x){
      if(x < 10){ 
          res = Math.floor(res) * 10 + Math.floor(x)
          x = 0
      }
      else {
      res = (Math.floor(res) * 10)+ (Math.floor(x) % 10)
      x = x/10
      }
  }
  // Constraints on res value
  if(res < - Math.pow(2,31) || res > Math.pow(2,31)-1){
      return 0
  }
  //return  minus the value if the initial number is negative
  if(num < 0){
      return -res
  }
  return res
};

function longestUniqueSubsttr(str)
{
    var n = str.length;
     
    // Result
    var res = 0;
     
    for(var i = 0; i < n; i++)
    {
         
        // Note : Default values in visited are false
        var visited = new Array(256);
         
        for(var j = i; j < n; j++)
        {
             
            // If current character is visited
            // Break the loop
            if (visited[str.charCodeAt(j)] == true)
                break;
 
            // Else update the result if
            // this window is larger, and mark
            // current character as visited.
            else
            {
                res = Math.max(res, j - i + 1);
                visited[str.charCodeAt(j)] = true;
            }
        }
    }
    return res;
}
var twoSum = function(nums, target) {
  let numsLength = nums.length
  let arrOfValues = [0]
  //Constraints
  if(numsLength < 2 || numsLength >Math.pow(10,4)){
      return [0]
  }
  if(target < - Math.pow(10,9) || target > Math.pow(10,9)){
              return [0]
          }
  //We loop over the nums array
  for (let i = 0;i<numsLength;i++){
              //Constraints
      if(nums[i] < - Math.pow(10,9) || nums[i] > Math.pow(10,9)){
              return [0]
          }
      //We loop over the nums array since it's second item
      for(let j = i+1; j < numsLength;j++){

          //If the sum of the two items is equal to target, return the value immediately
          if((nums[i] + nums[j]) == target){
              arrOfValues.pop()
              arrOfValues.push(i,j)
              return arrOfValues
          }
      }
  }
};
const maxArea = (height) =>{
  let i = 0
  let j = height.length - 1
  let max = 0
  let area
  while(i < j){
      area = (j-i) * Math.min(height[i],height[j])
      max = Math.max(area,max)
      height[i] < height[j] ? i++ : j--
  }
  return max
   }
console.log('the index of the sum of two nums equal to 9 is',twoSum([0,2,7,5],9)) // [1,2]
console.log('longest str', longestUniqueSubsttr('abcabcaa')) // 3

console.log('max area',maxArea([9,8,6,2,5,4,8,3,7]))  // 56
console.log('Reversed Number of -312 is',reverse(-312)) // -213
console.log('Converted temperature',convertTemperature(36.5)) //[309.65,97.7]
console.log("DIVIDE TWO INTS", divide(7, 3))//2
console.log("Find first occurence", findFirstOccurence("testing", "test")); // 0
console.log("is a valid email:", validateEmail("johndoe@gmail.com")); //true
console.log(countAndSortArray([0, 0, 0, 3, 3, 3, 4, 4, 5, 5, 1, 1]));
console.log("is valid bracket sequence", isValidBracketSequence("[(){}")); //false
console.log("sort array method number 2", sortArrayOfNumbers1([4, 1, 2, 5])); //[1,2,4,5]
console.log("sort array method number 1", sortArrayOfNumbers([4, 1, 2, 5])); //[1,2,4,5]
console.log("Number of zeros", numberOfZeros(100)); //11
console.log("Sum finder", sumFinder([6, 4, 3, 2, 1, 7], 9)); //6,3
console.log("Missing number is", findMissingNumber(arr)); // 44
console.log("is palindrome?:", isPalindrome("madam")); //true
console.log(
  "remove duplicate characters:",
  removeDuplicateChars("thee quiickk brownn")
); //thqucbrow
console.log(
  "return first non repeating character",
  findFirstNonRepeatingChat("the quick brown fox jumps then quickly blow air")
); // f
console.log(
  "reversed words in place:",
  reverseWordsInPlace("Michel is a code addict!")
);
console.log("reversed words:", reverseWords("Michel Nassar is a code addict!"));
console.log("reversed string:", reverseString("Javascript")); //tpircsavaJ
console.log(
  "merge sorted arrays",
  mergeSortedArrays([2, 5, 6, 9], [1, 2, 3, 29])
); // [1,1, 2, 2, 2, 3, 5, 6, 9, 29]
console.log("remove duplicate", removeDuplicate([1, 1, 2, 2, 2, 3, 3, 5])); // [1,2,3,5]
console.log("is prime", isPrime(7)); // true
console.log("prime factors", primeFactors(69)); // [3,23]
console.log("get fibonacci number", getFibonacciNumber(0)); // 0
console.log("fibonacci index", fibonacci(12)); // 144
console.log("get greatest common divisor", getGreatestCommonDivisor(20, 25)); //5
console.log(swapNumbers(5, 6)); // 6,5
