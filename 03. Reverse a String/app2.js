// Reverse a string
// Ex. "hello"
// Ex. "Howdy"
// Ex. "Greetings from Earth"

function reverseString(str) {
    var newStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i];        
    }
    return newStr;
}

console.log(reverseString("hello"));
console.log(reverseString("Howdy"));
console.log(reverseString("Greetings from Earth"));