//Question: Greatest common divisor between two numbers
//Answer: The function takes two inputs a and b. Create divisor variable equal to 2
//if a or b < 2, return 1, 
// while a and b greater or equal to divisor if a modulo divisor and b modulo divisor equal to 0 then greatest divisor = to divisor
//and add 1 to the divisor each time
// return greatestDivisor


const getGreatestCommonDivisor = (a,b) =>{
    var divisor = 2;
    let greatestDivisor
    if(a<2 || b<2){
        return 1;
    }

    while(a >= divisor && b >= divisor){
        if(a % divisor == 0 && b % divisor == 0){
            greatestDivisor = divisor
        }
        divisor++
    }
    return greatestDivisor
}


