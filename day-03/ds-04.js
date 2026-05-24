function FrequentElement(list) {
    const dictionary = new Map()
    const setList = new Set([...list])
    
    setList.forEach(value => {
        const qty = list.filter(item => item === value).length
        
        dictionary.set(value, qty)
    })
    
    return dictionary
}

const list = [1,2,3,4,4,4,3,3,2,4]
const list2 = [1,1,1,2,2,3,3,3]

console.log(FrequentElement(list))
console.log(FrequentElement(list2))