function selfNumber(limit) {
    const isSelfNumber = new Array(limit + 1).fill(true);

    for (let i = 1; i <= limit; i++) {
        let sum = i;
        let temp = i;

        while (temp > 0) {
            sum += temp % 10;
            temp = Math.floor(temp / 10);
        }

        if (sum <= limit) {
            isSelfNumber[sum] = false;
        }
    }

    const selfNumbers = [];
    for (let i = 1; i <= limit; i++) {
        if (isSelfNumber[i]) {
            selfNumbers.push(i);
        }
    }

    return selfNumbers;
}

const result = selfNumber(5000);

console.log(result.join(", "));