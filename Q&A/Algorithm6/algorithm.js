//Question: merge two sorted array smallest to biggest

//Answer: 


const mergeSortedArrays = (arr1, arr2) => {
    const mergedArray = []
    aElm = arr1[0]
    bElm = arr2[0]
    let i = 0;
    let j = 0;
    if (a.length == 0)
        return b;
    if (b.length == 0)
        return a;
    while (aElm || bElm) {
        if (aElm && !bElm || aElm < bElm) {
            mergedArray.push(aElm)
            aElm = arr1[i++]
        } else {
            mergedArray.push(bElm)
            bElm = arr2[j++]
        }
    }
    return mergedArray
}