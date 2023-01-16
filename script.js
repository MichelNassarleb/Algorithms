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
function removeDuplicate(arr) {
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
console.log('a', removeDuplicate([1, 1, 2, 2, 2, 3, 3, 5]))
console.log(isPrime(7)) // true
console.log(primeFactors(69)) // [3,23]
console.log(getFibonacciNumber(0)) // 0
console.log(fibonacci(12)) // 144
console.log(getGreatestCommonDivisor(20, 25)) //5