// Repeat a String
// 'candy apples', -1, 4

function repeatStringNumTimes(str, num) {
    if (num > 0) {
        return str.repeat(num);
    }
    return "";
}

console.log(repeatStringNumTimes('candy apples', -1));
console.log(repeatStringNumTimes('candy apples', 4));