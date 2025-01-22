var str = '';
var star = '*';
function starPattern(patternChar, numLines) {
    for (var i = 1; i <= numLines; i++) {
        str = str + ' ' + patternChar;
        console.log(str);
    }
}
starPattern('*', 5);
