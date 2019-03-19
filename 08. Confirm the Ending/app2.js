// Confirm the Ending
// 'Bastian' , 'n'

function confirmEditing(str, target) {
    return str.substr(str.length - target.length, str.length) === target;
}

console.log(confirmEditing('He has to give me a new name' , 'name'));