//

const isPrime = (number) => {
  let divisor = 2;
  while (number > divisor) {
    if (number % divisor == 0) {
      return false
    }
    else divisor++
  }
  return true
}

const primeFactors = (n) => {
  var factors = [],
    divisor = 2;

  while (n > 2) {
    if (n % divisor == 0) {
      !factors.includes(divisor) && factors.push(divisor);
      n = n / divisor;
    }
    else {
      divisor++;
    }
  }
  return factors;
}
const getFibonacciNumber = (index) => {
  const fibonaccis = [0, 1]
  if (index < 0) return 'Should be positive'
  if (index == 0) return '0'
  for (let i = 0; i < index; i++) {
    fibonaccis.push(index[i] + index[i + 1])
  }
  return fibonaccis[index - 1]
}
const fibonacci = (n) => {
  if (n <= 1)
    return n;
  else
    return fibonacci(n - 1) + fibonacci(n - 2);
}
const getGreatestCommonDivisor = (a, b) => {
  var divisor = 2;
  let greatestDivisor
  if (a < 2 || b < 2) {
    return 1;
  }

  while (a >= divisor && b >= divisor) {
    if (a % divisor == 0 && b % divisor == 0) {
      greatestDivisor = divisor
    }
    divisor++
  }
  return greatestDivisor
}
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
}

const mergeSortedArrays = (arr1, arr2) => {
  const mergedArray = []
  aElm = arr1[0]
  bElm = arr2[0]
  let i = 0;
  let j = 0;
  if (arr1.length == 0)
    return arr2;
  if (arr2.length == 0)
    return arr1;
  while (aElm || bElm) {
    if (aElm && !bElm || aElm < bElm) {
      mergedArray.push(aElm)
      aElm = arr1[i++]
    } else {
      mergedArray.push(bElm)
      bElm = arr2[j++]
    }
  }
  return mergedArray
}
const swapNumbers = (a, b) => {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  return `a:${a}, b:${b}`
}
const reverseString = (str) => {
  let reversedString = []
  let j = 0
  for (let i = str.length; i >= 0; i--) {
    reversedString[j] = str[i]
    j++
  }

  return reversedString.join('')
}

const reverseWords = (phrase) => {
  let reversedWords = []
  let j = 0;
  let phraseSplitted = phrase.split(' ');
  for (let i = phraseSplitted.length - 1; i >= 0; i--) {
    reversedWords[j] = phraseSplitted[i]
    j++
  }
  return reversedWords.join(' ')
}

const reverseWordsInPlace = (phrase) => {
  const splittedPhrase = phrase.split(' ')
  let k = 0;
  let reversedPhraseInPlace = [];

  for (let i = 0; i <= splittedPhrase.length - 1; i++) {
    reversedPhraseInPlace[i] = ''
  }
  for (let i = 0; i <= splittedPhrase.length - 1; i++) {
    for (let j = splittedPhrase[i].length - 1; j >= 0; j--) {
      reversedPhraseInPlace[i] += splittedPhrase?.[i]?.split('')?.[j]
      k++
    }
  }
  return reversedPhraseInPlace.join(' ')
}

const findFirstNonRepeatingChat = (str) => {
  const numOfChars = {}
  if (str.length == 1) {
    return str[0]
  }
  for (let i = 0; i < str.length; i++) {
    if (!numOfChars[str[i]]) numOfChars[str[i]] = 1
    else numOfChars[str[i]]++
  }
  let j = 0
  const numOfcharKeys = Object.keys(numOfChars)
  while (numOfChars[numOfcharKeys[j]] != 1) {
    j++
  }
  return numOfcharKeys[j]
}

const removeDuplicateChars = (str) => {
  const numOfChars = {}
  let newStr = []
  if (str.length == 1) {
    return str[0]
  }
  for (let i = 0; i < str.length; i++) {
    if (!numOfChars[str[i]]) numOfChars[str[i]] = 1
    else numOfChars[str[i]]++
  }
  for (var j in numOfChars) {
    if (numOfChars[j] == 1) newStr.push(j)
  }
  return newStr.join('')
}
const isPalindrome = (str) => {
  let reveresedStrArray = [];
  let j = 0
  for (let i = str.length - 1; i >= 0; i--) {
    reveresedStrArray[j] = str[i]
    j++
  }
  const reversedWord = reveresedStrArray.join('')
  if (reversedWord == str) return true
  else return false
}
let arr = []
for (let i = 1; i < 101; i++) {
  if (i == 44) console.log(i)
  else arr.push(i)
}
const findMissingNumber = (array) => {
  let foundNums = {}
  for (let j = 1; j < 101; j++) {
    if (array.includes(j)) foundNums[j] = 1
    else foundNums[j] = 0
  }
  for (var k in foundNums) {
    if (foundNums[k] == 0) return k
  }
}
const sumFinder = (arr, sum) => {
  var forLength = arr.length - 1;

  for (let i = 0; i <= forLength; i++) {
    for (let j = i + 1; j <= forLength; j++) {
      if ((arr[i] + arr[j]) == sum) {
        return `true, ${arr[i]},${arr[j]}`
      }
    }
  }

  return false


}

const numberOfZeros = (number) => {
  var count = 0;
  while (number > 0) {
    count += Math.floor(number / 10)
    number = number / 10
  }
  return count
}

const sortArrayOfNumbers = (arr) => {
  return arr.sort((a, b) => a - b)
}
const sortArrayOfNumbers1 = (arr) => {
  let num;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        num = arr[j];
        arr[j] = arr[j + 1]
        arr[j + 1] = num
      }
    }
  }
  return arr;
}
const isValidBracketSequence = (str) => {
  let length = str.length
  if (str.length == 0) return false
  if (length % 2 != 0) return false
  const arr = []
  for (let i = 0; i < length; i++) {
    if (str[i] === '(' || str[i] === ')' || str[i] === '{' || str[i] === '}' || str[i] === '[' || str[i] === ']') {

      if (str[i] === '(') {
        if (str[i + 1] === ')') {
          arr.push('match')
        } else {
          arr.push('no match')
        }
      }
      if (str[i] === '{') {
        if (str[i + 1] === '}') {
          arr.push('match')
        } else {
          arr.push('no match')
        }
      }
      if (str[i] === '[') {
        if (str[i + 1] === ']') {
          arr.push('match')
        } else {
          arr.push('no match')
        }
      }
    } else return false
  }
  for (let z = 0; z < arr.length; z++) {
    if (arr[z] === 'no match') return false
  }
  return true
}

const countAndSortArray = (arr) => {

  if (arr.length == 0) return []
  let length = arr.length
  let z = 0
  let countArray = []

  let sortedArray = []
  for (let i = 0; i < length; i++) {
    const arrItem = arr[i]
    if (countArray[arrItem]) {
      countArray[arrItem]++
    } else {
      countArray[arrItem] = 1
    }
  }
  for (let j = 0; j < countArray.length; j++) {
    if (!countArray[j]) {
      countArray[j] = 0
    }
    for (let k = 0; k < countArray[j]; k++) {
      sortedArray[z] = j
      z++
    }
  }

  return `count array: [${countArray}]\nsorted Array:[${sortedArray}]`
}

console.log(countAndSortArray([0, 0, 0, 3, 3, 3, 4, 4, 5, 5, 1, 1]))
console.log('is valid bracket sequence', isValidBracketSequence('[(){}'))//false
console.log('sort array method number 2', sortArrayOfNumbers1([4, 1, 2, 5]))//[1,2,4,5]
console.log('sort array method number 1', sortArrayOfNumbers([4, 1, 2, 5]))//[1,2,4,5]
console.log('Number of zeros', numberOfZeros(100))//11
console.log('Sum finder', sumFinder([6, 4, 3, 2, 1, 7], 9))//6,3
console.log('Missing number is', findMissingNumber(arr)) // 44
console.log('is palindrome?:', isPalindrome('madam'))//true
console.log('remove duplicate characters:', removeDuplicateChars('thee quiickk brownn')) //thqucbrow
console.log('return first non repeating character', findFirstNonRepeatingChat('the quick brown fox jumps then quickly blow air')) // f
console.log('reversed words in place:', reverseWordsInPlace('Michel is a code addict!'))
console.log('reversed words:', reverseWords('Michel Nassar is a code addict!'))
console.log('reversed string:', reverseString('Javascript')) //tpircsavaJ
console.log('merge sorted arrays', mergeSortedArrays([2, 5, 6, 9], [1, 2, 3, 29])) // [1,1, 2, 2, 2, 3, 5, 6, 9, 29]
console.log('remove duplicate', removeDuplicate([1, 1, 2, 2, 2, 3, 3, 5])) // [1,2,3,5]
console.log('is prime', isPrime(7)) // true
console.log('prime factors', primeFactors(69)) // [3,23]
console.log('get fibonacci number', getFibonacciNumber(0)) // 0
console.log('fibonacci index', fibonacci(12)) // 144
console.log('get greatest common divisor', getGreatestCommonDivisor(20, 25)) //5
console.log(swapNumbers(5, 6))// 6,5