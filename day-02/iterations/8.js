let primeNumber = []
let n = 11;

function isPrimeNumber(num) {
    if(num < 2) return false
    
    for (let i = 2; i < num; i++) {
        if(num % i === 0) return false
    }

    return true;
}

for (let i = 0; i <= n; i++) {
    if (isPrimeNumber(i)) {
        primeNumber.push(i)
    }
}

console.table(primeNumber)