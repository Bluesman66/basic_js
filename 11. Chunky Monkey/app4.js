// Chunky Monkey

/*
1. (['a', 'b', 'c', 'd'], 2) is expected to be [['a', 'b'], ['c', 'd']]
2. ([0, 1, 2, 3, 4, 5], 3) is expected to be [[0, 1, 2], [3, 4, 5]]
3. ([0, 1, 2, 3, 4, 5], 2) is expected to be [[0, 1], [2, 3], [4, 5]]
4. ([0, 1, 2, 3, 4, 5], 4) is expected to be [[0, 1, 2, 3], [4, 5]]
*/

function chunkyArrayInGroups(arr, size) {
    var newArr = [];
    
    while (arr.length) {
        newArr.push(arr.splice(0, size));        
    }

    return newArr;
}

console.log(chunkyArrayInGroups(['a', 'b', 'c', 'd'], 2));
console.log(chunkyArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkyArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(chunkyArrayInGroups([0, 1, 2, 3, 4, 5], 4));