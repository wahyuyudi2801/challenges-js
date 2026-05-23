// Capitalize
function capitalize(param) {
    const strs = param.split(' ')
    return strs
        .map(str => str.charAt(0).toUpperCase() + str.slice(1))
        .join(' ');
}

console.log(capitalize('this is a very special title'))