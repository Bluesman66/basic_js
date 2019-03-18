// Find the longest word in a string
// Ex. "The quick brown fox jumped over the lazy dog"
// Ex. "What if we try a super-long word such as otorhinolaryngology"

function findLongestWord(str) {
    str = str.split(' ');
    
    if (str.length == 1) {
        return str[0].length;
    }

    if (str[0].length >= str[1].length) {
        str.splice(1, 1);
        return findLongestWord(str.join(' '));
    }

    if (str[0].length <= str[1].length) {        
        return findLongestWord(str.slice(1, str.length).join(' '));
    }

    return str.length;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("What if we try a super-long word such as otorhinolaryngology"));