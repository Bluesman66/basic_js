// Reverse a string
// Ex. "hello"
// Ex. "Howdy"
// Ex. "Greetings from Earth"

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello"));
console.log(reverseString("Howdy"));
console.log(reverseString("Greetings from Earth"));