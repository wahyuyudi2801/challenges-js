function createStar3(n) {
    let str = "";

    for (let i = n; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            str += "* ";
        }
        str += "\n";
    }

    return str;
}

console.log(createStar3(5))