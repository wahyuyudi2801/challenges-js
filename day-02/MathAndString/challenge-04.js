function isBrace(s) {
    const strs = s.split('')
    let count = 0;

    strs.map(value => {
        if (value === '(') {
            count++
        } else if (value === ')') {
            count--
        }
    })

    return count === 0
}

console.log(isBrace("((()"))