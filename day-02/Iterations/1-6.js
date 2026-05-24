// 1
console.log("1.")
let matrix = [];
let count = 1;
for (let i = 0; i < 5; i++) {
    matrix[i] = []
    for (let j = 0; j < 5; j++) {
        matrix[i][j] = count
        count++
    }
}

console.table(matrix)

// 2
console.log("2.")
matrix = []
count = 1
for (let i = 0; i < 5; i++) {
    matrix[i] = []
    for (let j = 0; j < 5; j++) {
        if (i >= j) {
            matrix[i][j] = count
            count++
        }
    }
    count = matrix[i][0] + 1
}

console.table(matrix)

// 3
console.log("3.")
matrix = [];
count = 1;
n = 5
for (let i = 0; i < n; i++) {
    matrix[i] = []
    for (let j = 0; j < n; j++) {
        if (j < n - i) {
            matrix[i][j] = count
            count++
        }
    }
    count = matrix[i][0] + 1
}
console.table(matrix)

// 4
console.log("4.")
matrix = []
count = 1
n = 5
for (let i = 0; i < n; i++) {
    matrix[i] = []
    for (let j = 0; j < n; j++) {
        if (i + (n - 1) - j < n) {
            matrix[i][j] = count
            count++
        }
    }

    count = matrix[i][i] + 1
}

console.table(matrix)

// 5.
console.log("5.")
matrix = []
n = 5
for (let i = 0; i < n; i++) {
    matrix[i] = []
    for (let j = 0; j < n; j++) {
        if (i == j) {
            matrix[i][j] = i+1
        } else if (i > j) {
            matrix[i][j] = 20
        } else if(i < j) {
            matrix[i][j] = 10
        }
    }
}

console.table(matrix)

// 6.
console.log("6.")
matrix = []
n = 5
for (let i = 0; i < n; i++) {
    matrix[i] = []
    for (let j = 0; j < n; j++) {
        if (i == j) {
            matrix[i][j] = n-i
        } else if (i > j) {
            matrix[i][j] = 10
        } else if(i < j) {
            matrix[i][j] = 20
        }
    }
}

console.table(matrix)