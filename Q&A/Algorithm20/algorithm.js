//Question: each bracket in the string should have it's closing bracket

const isValidBracketSequence = (str) => {
    let length = str.length
    if (str.length == 0) return false
    if (length % 2 != 0) return false
    const arr = []
    for (let i = 0; i < length; i++) {
        if (str[i] === '(' || str[i] === ')' || str[i] === '{' || str[i] === '}' || str[i] === '[' || str[i] === ']') {

            if (str[i] === '(') {
                if (str[i + 1] === ')') {
                    arr.push('match')
                } else {
                    arr.push('no match')
                }
            }
            if (str[i] === '{') {
                if (str[i + 1] === '}') {
                    arr.push('match')
                } else {
                    arr.push('no match')
                }
            }
            if (str[i] === '[') {
                if (str[i + 1] === ']') {
                    arr.push('match')
                } else {
                    arr.push('no match')
                }
            }
        } else return false
    }
    for (let z = 0; z < arr.length; z++) {
        if (arr[z] === 'no match') return false
    }
    return true
}