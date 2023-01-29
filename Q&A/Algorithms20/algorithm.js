const validateEmail = (str) => {
    let foundChars = { 'contains@': 0, 'countainsDot': 0, 'count@': 0, 'DotBefore@': 0 }
    const length = str.length;
    if (str.length == 0) return false
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '@') {
            if (i != 0 && i != length - 1) {
                foundChars['contains@'] = i;
                foundChars['count@']++
            } else {
                foundChars['count@']++
            }

        }
        if (str[i] == '.' && (i != foundChars['contains@'] + 1 && i != foundChars['contains@'] - 1) && length - 1 - i > 1) {
            if (i > foundChars['contains@']) {
                foundChars['countainsDot'] = i
            } else {
                foundChars['DotBefore@']++
            }
        }
    }
    if (str.length < 257 && foundChars['count@'] == 1 && !!foundChars['contains@'] && !!foundChars['countainsDot'] && !foundChars['DotBefore@']) {
        return true
    }
    return false
}