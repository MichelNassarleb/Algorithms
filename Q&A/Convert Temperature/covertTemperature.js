// You are given a non-negative floating point number rounded to two decimal places celsius, that denotes the temperature in Celsius.

// You should convert Celsius into Kelvin and Fahrenheit and return it as an array ans = [kelvin, fahrenheit].

// Return the array ans. Answers within 10-5 of the actual answer will be accepted.


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