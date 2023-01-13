//

const isPrime = (number)=>{
    let divisor = 2;
    while (number > divisor){
        if(number % divisor == 0){
            return false
        }
       else divisor++
    }
    return true
    }

    const primeFactors= (n) =>{
        var factors = [], 
            divisor = 2;
        
        while(n>2){
          if(n % divisor == 0){
           !factors.includes(divisor) && factors.push(divisor); 
             n= n/ divisor;
          }
          else{
            divisor++;
          }     
        }
        return factors;
      }
      const getFibonacciNumber = (index) =>{
        const fibonaccis = [0,1]
        if(index < 0) return 'Should be positive'
        if(index == 0) return '0'
        for(let i = 0 ; i < index ; i++){
            fibonaccis.push(index[i] + index[i+1])
        }
        return fibonaccis[index-1]
    }
      console.log(isPrime(7))
      console.log(primeFactors(69))
      console.log(getFibonacciNumber(0))