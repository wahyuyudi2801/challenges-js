const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("inputkan jumlah (n): ", (value) => {
    const n = parseInt(value)
    let matrix = []

    for (let i = 0; i < n; i++) {
        matrix[i] = []
        for (let j = 0; j < n; j++) {
            if (i % 2 == 0 && j % 2 == 0) {
                matrix[i][j] = "-";
            } else if (i % 2 == 0 && j % 2 != 0) {
                matrix[i][j] = j + 1;
            } else if (i % 2 != 0 && j % 2 != 0) {
                matrix[i][j] = "-";
            } else if (i % 2 != 0 && j % 2 == 0) {
                matrix[i][j] = j + 1;
            }
        }
    }

    console.table(matrix)

    rl.close()
})