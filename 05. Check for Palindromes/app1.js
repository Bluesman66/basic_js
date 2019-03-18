// Check for Palindromes
// Ex. "Civic"
// Ex. "Step on no pets"
// Ex. "No lemon, no melon"

function palindrome(str) {
    var front = 0;
    var back = str.length - 1;

    while (back > front) {
        while (str[front].match(/[\W_]/)) {
            front++;
            continue;
        }   
        while (str[back].match(/[\W_]/)) {
            back--;
            continue;
        }

        if (str[front].toLowerCase() !== str[back].toLowerCase()) {
            return false;
        }

        front++;
        back--;
    }

    return true;
}

console.log(palindrome("Civic"));
console.log(palindrome("Step on no pets"));
console.log(palindrome("No lemon, no melon"));