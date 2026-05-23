function IsNoDuplicateChar(s) {
    const chars = s.split('')

    for (let i = 0; i < chars.length; i++) {
        if (chars.indexOf(chars[i]) !== i) {
            return false
        }
    }
    
    return true
}

console.log(IsNoDuplicateChar('true'))