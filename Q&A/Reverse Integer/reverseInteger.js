// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321


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