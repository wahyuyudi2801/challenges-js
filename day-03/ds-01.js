function FindMinMax(list) {
    if(!list || list.length == 0) return []

    let min = list[0]
    let max = list[0]

    list.forEach(val => {
        if(val < min) {
            min = val
        }
        
        if(val > max) {
            max = val
        }
    });

    return [min, max]
}

const list = [2,3,4,5,6,7,8,9,1,10]
console.log(FindMinMax(list))