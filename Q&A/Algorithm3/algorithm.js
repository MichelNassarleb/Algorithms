// Question: How could you a fibonacci number?
//Answer: create an array that contains the first two fibonacci numbers, 0 and 1,
// if index is negative return should be positive
//if index is equal to 0, return 0
//create a for loop from 0 to the index number 
//each time push the fibonaccis array with current index array item and index + 1 array item
//return array[index-1]

const getFibonacciNumber = (index) =>{
    const fibonaccis = [0,1]
    if(index < 0) return 'Should be positive'
    if(index == 0) return '0'
    for(let i = 0 ; i <= index ; i++){
        fibonaccis.push(index[i] + index[i+1])
    }
    return fibonaccis[index-1]
}