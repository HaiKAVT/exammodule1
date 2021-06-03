function demNguyenAm(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a' ||
            str[i] == 'u' ||
            str[i] == 'o' ||
            str[i] == 'e' ||
            str[i] == 'i'
        ) {
            count++;
        }
    }
    if (count == 0) {
        return false
    }
    return count

}
let str = prompt();
console.log(demNguyenAm(str));