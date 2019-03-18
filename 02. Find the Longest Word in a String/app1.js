// Find the longest word in a string
// Ex. The quick brown fox jumped over the lazy dog
// Ex. What if we try a super-long word such as otorhinolaryngology

function findLongestWord(str) {
    var words = str.split(' ');
    var maxLength = 0;
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
        }        
    }
    return maxLength;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('What if we try a super-long word such as otorhinolaryngology'));