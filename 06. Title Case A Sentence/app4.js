// Title Case A Sentence
// Ex. "I'm a little tea pot"

function titleCase(str) {
    str = str.split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].toLowerCase().split('');
        str[i][0] = str[i][0].toUpperCase();
        str[i] = str[i].join('');
    }
    return str.join(' ');
}

console.log(titleCase("I'm a little tea pot"));