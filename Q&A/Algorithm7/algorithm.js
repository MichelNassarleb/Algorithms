// Question: How would you swap two numbers without using a temporary variable?
// Answer:  use the XOR method

const swapNumbers = (a, b) => {
    a = a ^ b;
    b = a ^ b; // (a ^ b) ^ b since a = a ^ b; 
    a = a ^ b // (a ^ b) ^ a since b = a
    return `a:${a}, b:${b}`
}

const swapNumbers2 = (a, b) => {
    console.log('before swap: ', 'a: ', a, 'b: ', b);
    b = b - a;
    a = a + b;// a = a + b -a = b
    b = a - b; // b = a -b + a and a is equal to b so b - b + a = a
    console.log('after swap: ', 'a: ', a, 'b: ', b);
}