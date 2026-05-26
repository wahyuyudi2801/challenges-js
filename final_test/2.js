function loop(input, start) {
    let text = ''


    for (let i = 0; i < input; i++) {
        for (let j = 0; j <= i; j++) {
            text += `${start+j} `
        }

        start++
        text += "\n"
    }

    return text
}

console.log(loop(7, 1))
console.log(loop(7, 5))