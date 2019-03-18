// Find the longest word in a string
// Ex. "The quick brown fox jumped over the lazy dog"
// Ex. "What if we try a super-long word such as otorhinolaryngology"

function findLongestWord(str) {
    return str.split(' ').reduce(function(x, y) {
        return Math.max(x, y.length);
    }, 0);
    
    return maxLength;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("What if we try a super-long word such as otorhinolaryngology"));