function isPalindrome(arr) {
    let left = 0;
    let right = arr.length-1;
    let count = 0;

    while (left < right) {
        if(arr[left] !== arr[right]) {
            count++;
        }
        
        left++;
        right--;
    }

    return count == 0;
}

let data = ["donout", "mie", "king","king", "mie","donout"]
console.log(isPalindrome(data))