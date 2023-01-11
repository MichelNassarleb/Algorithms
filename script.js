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

      console.log(isPrime(7))
      console.log(primeFactors(69))