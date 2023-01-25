//Question: Count Total number of zeros from 1 up to number?

const numberOfZeros = (number) => {
    var count = 0;
    while (number > 0) {
        count += Math.floor(number / 10)
        number = number / 10
    }
    return count
}