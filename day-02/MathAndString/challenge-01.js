// is palindrome
function isPalindrome(n) {
    if (n < 0 ) return false

    let ori = n
    let reversed = 0

    while (n > 0) {
        const digit = n % 10
        reversed = reversed * 10 + digit
        n = Math.floor(n / 10)
    }

    return ori === reversed
}

let data = [121, 2147447412, 110]
data.forEach((value) => console.log(`Is ${value} Palindrome? ${isPalindrome(value)}`))

