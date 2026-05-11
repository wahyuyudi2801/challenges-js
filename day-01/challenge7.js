function createStar7(n) {
    let str = "";

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            str += (j < i) ? "  " : "* ";
        }
        str += "\n";
    }

    return str;
}

console.log(createStar7(5));