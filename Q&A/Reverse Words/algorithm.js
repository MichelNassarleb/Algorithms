//Question: Reverse the words order in a string


const reverseWords = (phrase) => {
    let reversedWords = []
    let j = 0;
    let phraseSplitted = phrase.split(' ');
    for (let i = phraseSplitted.length; i >= 0; i++) {
        reversedWords[j] = phraseSplitted[i]
        j++
    }
    return reversedWords.join(' ')
}
