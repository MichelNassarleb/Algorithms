// Question: How would you swap two numbers without using a temporary variable?
// Answer:  use the XOR method

const swapNumbers = (a, b) => {
    a = a ^ b;
    b = a ^ b; // (a ^ b) ^ b since a = a ^ b; 
    a = a ^ b // (a ^ b) ^ a since b = a
    return `a:${a}, b:${b}`
}