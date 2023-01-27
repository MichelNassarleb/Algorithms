//Question: if you have [0,0,1,1,1,2,2,5,5,5,3,3,3,4,4] array
// should return count array:[2,3,2,3,2,3] and sorted array
//[0,0,1,1,1,2,2,3,3,3,4,4,5,5,5]


const countAndSortArray = (arr) => {

    if (arr.length == 0) return []
    let length = arr.length
    let z = 0
    let countArray = []

    let sortedArray = []
    for (let i = 0; i < length; i++) {
        const arrItem = arr[i]
        if (countArray[arrItem]) {
            countArray[arrItem]++
        } else {
            countArray[arrItem] = 1
        }
    }
    for (let j = 0; j < countArray.length; j++) {
        if (!countArray[j]) {
            countArray[j] = 0
        }
        for (let k = 0; k < countArray[j]; k++) {
            sortedArray[z] = j
            z++
        }
    }

    return `count array: [${countArray}]\nsorted Array:[${sortedArray}]`
}
