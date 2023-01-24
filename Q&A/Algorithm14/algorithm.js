//Question: from a unsorted array of numbers 1 to 100 excluding one number, how will you find that number.

//Explanation: You have an array of numbers 1 to 100 in an array. Only one number is missing in the array. The array is unsorted. Find the missing number.

const findMissingNumber = (array) => {
    let foundNums = {}
    for (let j = 1; j < 101; j++) {
        if (array.includes(j)) foundNums[j] = 1
        else foundNums[j] = 0
    }
    for (var k in foundNums) {
        if (foundNums[k] == 0) return k
    }
}