// Return Largest Numbers in Arrays
// array will have 583, 999, 113, 55

var numArr = [
    [583, 999, 113, 55],
    [600, 187, 798, 444],
    [1023, 77, 832, 285],
    [83, 99, 113, 555]
];

function largestOfFour(arr) {
    return arr.map(function(group) {
        return group.reduce(function(prev, current) {
            return (current > prev) ? current : prev;
        });
    });
}

console.log(largestOfFour(numArr));