// Reverse a string
// Ex. "hello"
// Ex. "Howdy"
// Ex. "Greetings from Earth"

function reverseString(str) {
    str = str.split('');
    str = str.reverse();
    str = str.join('')
    return str;
}

console.log(reverseString("hello"));
console.log(reverseString("Howdy"));
console.log(reverseString("Greetings from Earth"));