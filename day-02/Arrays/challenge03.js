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

let data = [9, 9, 9]
console.log(addOnePlus(data))