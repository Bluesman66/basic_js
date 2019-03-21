// Truncate a String
// 'Orange', 1, 3, 9

function trauncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num > 3 ? num - 3 : num) + '...';        
    }
    return str;
}

console.log(trauncateString('Orange', 1));
console.log(trauncateString('Orange', 3));
console.log(trauncateString('Orange', 9));