module.exports = function check(str, bracketsConfig) {

    let string = str;
    let identicalBracket = ''; 
    let identicalBracketTwo = '';
    let brackets = new Map();

    brackets.set('-', '+'); 
    brackets.set('\\', '/');

    for (let i of bracketsConfig) {
        if (i[0] != i[1]) {
            brackets.set(i[1], i[0]);
        } else {
            if (identicalBracket === '') {
                identicalBracket = i[0];
            } else {
                identicalBracketTwo = i[0];
            }
        }
    }
    let x = '';
    let y = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] === identicalBracket) {
            x += identicalBracket;
            if (x.length % 2 === 0) {
                string = string.substring(0, i) + '-' + string.substring(i + 1);
            } else {
                string = string.substring(0, i) + '+' + string.substring(i + 1);
            }
        }
    }
    for (let i = 0; i < string.length; i++) {
        if (string[i] === identicalBracketTwo) {
            y += identicalBracketTwo;
            if (y.length % 2 === 0) {
                string = string.substring(0, i) + '\\' + string.substring(i + 1);
            } else {
                string = string.substring(0, i) + '/' + string.substring(i + 1);
            }
        }
    }
    for (let i = 0; i < string.length; i++) {
        if (brackets.has(string[i])) {
            if (string[i - 1] === brackets.get(string[i])) {
                string = string.substring(0, i - 1) + string.substring(i + 1);
                i = 0;
            }
        }
    }
    if (string === ''){
        return true;
    } else {
        return false;
    }
}
