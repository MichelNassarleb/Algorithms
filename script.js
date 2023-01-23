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
console.log('remove duplicate characters:', removeDuplicateChars('thee quiickk brownn')) //thqucbrow
console.log(findFirstNonRepeatingChat('the quick brown fox jumps then quickly blow air')) // f
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
console.log(swapNumbers(5, 6))