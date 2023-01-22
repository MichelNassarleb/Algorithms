// Question: Reverse a string in javascript

const reverseString = (str) => {
    let reversedString
    let j = 0
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString[j] = str[i]
        j++
    }
    return reversedString
}