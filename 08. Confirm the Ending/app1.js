// Confirm the Ending
// 'Bastian' , 'n'

function confirmEditing(str, target) {
    return str.substr(-target.length) === target;
}

console.log(confirmEditing('Bastian' , 'n'));