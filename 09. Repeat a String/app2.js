// Repeat a String
// 'candy apples', -1, 4

function repeatStringNumTimes(str, num) {
    if (num < 0) return "";
    if (num === 1) {
        return str;
    }
    else {
        return str + repeatStringNumTimes(str, num - 1);
    }
}

console.log(repeatStringNumTimes('candy apples', -1));
console.log(repeatStringNumTimes('candy apples', 4));