//Question: How will you verify a word as palindrome?

const isPalindrome = (str) => {
    let reveresedStrArray = [];
    let j = 0
    for (let i = str.length - 1; i >= 0; i--) {
        reveresedStrArray[j] = str[i]
        j++
    }
    const reversedWord = reveresedStrArray.join('')
    if (reversedWord.toLowerCase() == str.toLowerCase()) return true
    else return false
}