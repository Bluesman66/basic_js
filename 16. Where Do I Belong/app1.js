// Where Do I Belong
// ([1, 2, 3, 4], 1.5) returns 1 because 1.5 > 1 && 1.5 < 2
// ([20, 3, 5], 19) returns 2 because in sorted array 19 > 5 && 19 < 20
// ([40, 60], 50) returns 1 because 50 > 40 && 50 < 60
// ([40, 60], 500) returns 2 because 500 > 60 (2 is a length of array)

function getIndexToIns(arr, num) {
    arr.sort(function(a, b) {
        return a - b;
    });
    
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            return i;
        }        
    }

    return arr.length;
}

console.log(getIndexToIns([1, 2, 3, 4], 1.5));
console.log(getIndexToIns([20, 3, 5], 19));
console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([40, 60], 500));
