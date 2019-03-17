function findLongestWord(str) {
    return str.split(' ').reduce(function(x, y) {
        return Math.max(x, y.length);
    }, 0);
    
    return maxLength;
}

console.log(findLongestWord('asd asdf qwerty ff ddddd'));