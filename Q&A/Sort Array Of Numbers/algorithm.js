const sortArrayOfNumbers = (arr) => {
    return arr.sort((a, b) => a - b)
}

const sortArrayOfNumbers1 = (arr) => {
    let num;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                num = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = num
            }
        }
    }
    return arr;
}