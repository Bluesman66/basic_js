// Falsy Bouncer
// Falsy values: false, null, 0, "", undefined, NaN

var falsyArr = [0, 1, 2, 3, null, 5, "", 7, 8, undefined, 10, NaN, 12, 13, false]; 

function bouncer(arr) {
    return arr.filter(Boolean);
}

console.log(bouncer(falsyArr));