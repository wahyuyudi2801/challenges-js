function FindMinRange(list, from, to) {
    let minIdx = 0;
    let min = list[minIdx]
    for (let i = from; i < to; i++) {
        if(list[i] < min) {
            min = list[i]
            minIdx = list.indexOf(list[i])
        }
    }
    
    return [min, minIdx]
}

const list = [5, 3, 4, 2, 6, 7, 8, 9, 1, 10]
console.log(FindMinRange(list, 0, 10))
console.log(FindMinRange(list, 0, 7))
