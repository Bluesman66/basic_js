// Slasher Flick
// slasher([1, 2, 3], 2) must return 3

function slasher(arr, howMany) {
    return arr.slice(howMany);    
}

console.log(slasher([1, 2, 3], 2));
console.log(slasher([1, 2, 3, 4, 5, 6, 7], 4));