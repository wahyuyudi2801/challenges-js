function createStar5(n) {
    let str = "";
    let no = 1;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i != (n - 1)) {
                if (j == 0) {
                    str += `${no} `;
                    no++;
                } else {
                    str += `* `;
                }
            } else {
                str += `${no} `;
                no++;
            }
        }
        str += "\n";
    }

    return str;
}

console.log(createStar5(5))