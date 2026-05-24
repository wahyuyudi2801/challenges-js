function MergeList(list1, list2) {
    const hashSet = [...new Set([...list1, ...list2])]

    for (let i = 0; i < hashSet.length - 1; i++) {
        for (let j = 0; j < hashSet.length-i-1; j++) {
            if(hashSet[j] > hashSet[j+1]) {
                let temp = hashSet[j]
                hashSet[j] = hashSet[j+1]
                hashSet[j+1] = temp
            }
        }
    }

    return hashSet
}

console.log(MergeList([1, 4, 7, 12, 20], [10, 15, 17, 33]))
// console.log(MergeList([2, 3, 5, 7],[11, 13, 17]))