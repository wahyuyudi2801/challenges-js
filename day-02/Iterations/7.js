const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Input jumlah baris piramid: ", (value) => {
    const n = parseInt(value)
    let text = ''
    let number = n
    
    
    for (let i = 0; i < n; i++) {
        let isInc = false
        
        for (let j = 0; j < n*2-1; j++) {
            if(number < n+1-i) {
                text += `${number} `
            }
            
            if(number == 1 || isInc) {
                number++
                isInc = true
            }else if(!isInc) {
                number--
                isInc = false
            }
        }
        text += "\n"
        number = n-i-1
    }

    console.log(text)

    rl.close()
})