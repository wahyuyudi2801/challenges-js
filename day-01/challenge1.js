function createStar1(n) {
    let str = "";
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (i == 0 || i == 4)
                str += "* ";
            else if (j == 0 || j == 4)
                str += "* ";
            else
                str += "  ";
        }
        str += "\n";
    }

    return str
}
console.log(createStar1(5));

