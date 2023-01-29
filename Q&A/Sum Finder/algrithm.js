//Question: From a unsorted array, check whether there are any two numbers that will sum up to a given number?


const sumFinder = (arr, sum) => {
    var forLength = arr.length - 1;

    for (let i = 0; i <= forLength; i++) {
        for (let j = i + 1; j <= forLength; j++) {
            if ((arr[i] + arr[j]) == sum) {
                return `true, ${arr[i]},${arr[j]}`
            }
        }
    }

    return false


}