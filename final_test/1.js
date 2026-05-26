function  addOnePlus(array) {
    const n = array.length

    for (let i = n-1; i >= 0; i--) {
        if(array[i] < 9) {
            array[i] += 1
            return array
        }

        array[i] = 0
    }

    array.unshift(1)

    return array
}

console.log(addOnePlus([1,3,2,4]))
console.log(addOnePlus([1,4,8,9]))
console.log(addOnePlus([9,9,9,9]))