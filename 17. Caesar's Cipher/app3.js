// Caesar's Cipher
// ('LBH QVQ VG!')

function rot13(str) {
    return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
}

console.log(rot13('LBH QVQ VG!'));