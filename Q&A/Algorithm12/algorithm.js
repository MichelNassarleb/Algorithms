//Question: Remove duplicate characters

const removeDuplicateChars = (str) => {
    const numOfChars = {}
    let newStr = []
    if (str.length == 1) {
        return str[0]
    }
    for (let i = 0; i < str.length; i++) {
        if (!numOfChars[str[i]]) numOfChars[str[i]] = 1
        else numOfChars[str[i]]++
    }
    for (var j in numOfChars) {
        if (numOfChars[j] == 1) newStr.push(j)
    }
    return newStr.join('')
}