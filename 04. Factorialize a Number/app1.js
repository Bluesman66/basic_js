// Factorialize a number
// Numbers to be factorialized are 5, 10, 20, 0

function factorialize(num) {
    var result = 1;
    for (var i = num; i > 0; i--) {
        result *= i;        
    }
    return result; 
}

console.log(factorialize(5));
console.log(factorialize(10));
console.log(factorialize(20));
console.log(factorialize(0));