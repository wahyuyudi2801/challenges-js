function ReverseList(list) {

    for (let i = 0; i < Math.floor(list.length / 2); i++) {
        let temp = list[i]
        list[i] = list[list.length-1-i]
        list[list.length-1-i] = temp
    }

    return list
}

const list = [1,2,3,4,5]

console.log(ReverseList(list))