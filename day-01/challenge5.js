function createStar5(n) {
    let str = "";

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            str += (i == j) ? `${i+1} ` : "* ";
        }
        str += "\n";
    }

    return str;
}

console.log(createStar5(5))