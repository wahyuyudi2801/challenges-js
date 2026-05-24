function Addition(list1, list2) {
    const result = []

    let n1 = list1.length-1;
    let n2 = list2.length-1;
    let carry = 0;

    while (n1 >= 0 || n2 >= 0 || carry > 0) {
        let sum = carry

        if (n1 >= 0) {
            sum += list1[n1]
            n1--
        }

        if (n2 >= 0) {
            sum += list2[n2]
            n2--
        }

        result.unshift(sum%10)
        carry = Math.floor(sum/10)
    }

    return result
}

// console.log(Addition([1,2,3], [4,5,6]))
console.log(Addition([9,2,7],[1,3,5]))

// console.log(9%10)
// console.log(Math.floor(9/10))


