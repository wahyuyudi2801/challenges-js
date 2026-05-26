function d(num) {
    let n = num
    let sumOfDigits = 0

    while (n > 0) {
        sumOfDigits += n % 10;
        n = Math.floor(n/10);
    }

    return num + sumOfDigits
}

console.log(d(75))