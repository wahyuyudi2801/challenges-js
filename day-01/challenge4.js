function createStar4(n) {
    let str = "";

    for (let i = 0; i < n; i++) {
        for (let j = (n - 1); j >= 0; j--) {
            str += (j > i) ? "  " : "* ";
        }
        str += "\n";
    }

    return str;
}

console.log(createStar4(5))