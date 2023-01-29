//Reverse the words in place 
//In example: I am michel should be reversed to I ma lechim


const reverseWordsInPlace = (phrase) => {
    const splittedPhrase = phrase.split(' ')
    let k = 0;
    let reversedPhraseInPlace = [];

    for (let i = 0; i <= splittedPhrase.length - 1; i++) {
        reversedPhraseInPlace[i] = ''
    }
    for (let i = 0; i <= splittedPhrase.length - 1; i++) {
        for (let j = splittedPhrase[i].length - 1; j >= 0; j--) {
            reversedPhraseInPlace[i] += splittedPhrase?.[i]?.split('')?.[j]
            k++
        }
    }
    return reversedPhraseInPlace.join(' ')
}