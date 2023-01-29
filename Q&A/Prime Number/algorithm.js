// How would you verify a prime number?

// Answer: a prime number is only divisible by itself and 1. So, i will create a divisor number
// and run a while loop and increase by 1 while the number is still bigger than the divisor.
// if the number modula divisor is equal to zero, then return true, else increase the divisor to 1.
//when we exit the while loop, it means that the number is a prime number, return true. 
const isPrime = (number)=>{
let divisor = 2;
while (number > divisor){
    if(number % divisor == 0){
        return false
    }
   divisor++
}
return true
}