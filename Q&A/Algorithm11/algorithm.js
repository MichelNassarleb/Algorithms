//Question: Find the first non repeating chat

const findFirstNonRepeatingChat = (str) => {
    const numOfChars = {}
    if (str.length == 1) {
        return str[0]
    }
    for (let i = 0; i < str.length; i++) {
        if (!numOfChars[str[i]]) numOfChars[str[i]] = 1
        else numOfChars[str[i]]++
    }
    let j = 0
    const numOfcharKeys = Object.keys(numOfChars)
    while (numOfChars[numOfcharKeys[j]] != 1) {
        j++
    }
    return numOfcharKeys[j]
}