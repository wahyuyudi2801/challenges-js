function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function OrderEvenBeforeOdd(arr) {
    let n = arr.length

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            let current = arr[j]
            let next = arr[j + 1]

            let isCurrentEven = (current % 2 == 0)
            let isNextEven = (next % 2 == 0)

            // jika current ganjil & next genap => Tukar
            if (!isCurrentEven && isNextEven) {
                swap(arr, j, j + 1)
            } 

            // jika current genap & next genap & current lebih besar dari next => tukar
            else if (isCurrentEven && isNextEven && current > next) {
                swap(arr, j, j + 1)
            } 
            
            // jika current ganjil & next ganjil & current lebih besar dari next => tukar
            else if (!isCurrentEven && !isNextEven && current > next) {
                swap(arr, j, j + 1)
            }

        }
    }
    return arr
}

function DisplayArray(arr) {
    let text = ''
    arr.map(value => {
        text += `${value}, `
    })
    console.log(text)
}

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
DisplayArray(data)

data = OrderEvenBeforeOdd(data)
DisplayArray(data)