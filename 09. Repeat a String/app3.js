// Repeat a String
// 'candy apples', -1, 4

function repeatStringNumTimes(str, num) {
    return num > 0 ? str.repeat(num) : ""        
}

console.log(repeatStringNumTimes('candy apples', -1));
console.log(repeatStringNumTimes('candy apples', 4));